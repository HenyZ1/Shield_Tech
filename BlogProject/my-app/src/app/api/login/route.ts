
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { RateLimiterMemory } from 'rate-limiter-flexible';

// MongoDB User Şeması
interface IUser {
  _id: mongoose.Types.ObjectId;
  username: string;
  passwordHash: string; // Artık passwordHash kullanıyoruz
  createdAt: Date;
}

const userSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

// MongoDB bağlantısı
async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('MongoDB bağlantısı başarılı');
  } catch (error) {
    console.error('MongoDB bağlantı hatası:', error);
    throw new Error('Veritabanı bağlantı hatası');
  }
}

// Rate limiter (istemci IP bazlı)
const rateLimiter = new RateLimiterMemory({
  points: 5, // 5 istek
  duration: 60, // 60 saniye
});

// Hata loglama fonksiyonu
function logError(error: unknown, context: string) {
  console.error(`Hata [${context}]:`, error);
}

export async function POST(req: NextRequest) {
  try {
    // MongoDB bağlantısını kur
    await connectToDatabase();

    // İstek gövdesini al
    const { username, password, turnstileToken } = await req.json();
    const csrfToken = req.headers.get('x-csrf-token');
    const clientIp = req.headers.get('x-forwarded-for') || 'unknown';

    // Rate limiting kontrolü
    try {
      await rateLimiter.consume(clientIp);
    } catch {
      return NextResponse.json(
        { message: 'Çok fazla istek, lütfen bir süre sonra tekrar deneyin' },
        { status: 429 }
      );
    }

    // CSRF token doğrulama
    const storedCsrfToken = req.cookies.get('csrfToken')?.value;
    console.log('Gönderilen CSRF token:', csrfToken);
    console.log('Saklanan CSRF token:', storedCsrfToken);
    if (!csrfToken || csrfToken !== storedCsrfToken) {
      return NextResponse.json({ message: 'Geçersiz CSRF token' }, { status: 403 });
    }

    // Cloudflare Turnstile doğrulama
    if (!turnstileToken) {
      return NextResponse.json({ message: 'Bot doğrulaması gerekli' }, { status: 403 });
    }
    const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
    });
    if (!turnstileRes.ok) {
      console.error('Turnstile API isteği başarısız, status:', turnstileRes.status);
      return NextResponse.json({ message: 'Bot doğrulaması başarısız' }, { status: 403 });
    }
    const turnstileData = await turnstileRes.json();
    console.log('Turnstile doğrulama yanıtı:', turnstileData);
    if (!turnstileData.success) {
      console.log('Turnstile doğrulama hatası:', turnstileData['error-codes']);
      return NextResponse.json({ message: 'Bot doğrulaması başarısız' }, { status: 403 });
    }

    // Kullanıcı doğrulama
    if (!username || !password) {
      return NextResponse.json({ message: 'Kullanıcı adı ve şifre gerekli' }, { status: 400 });
    }

    const user = await User.findOne({ username }).lean<IUser>();
    if (!user) {
      console.log('Kullanıcı bulunamadı:', username);
      return NextResponse.json({ message: 'Geçersiz kimlik bilgileri' }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      console.log('Şifre eşleşmedi:', username);
      return NextResponse.json({ message: 'Geçersiz kimlik bilgileri' }, { status: 401 });
    }

    // JWT oluştur
    const token = jwt.sign({ userId: user._id.toString() }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    // HttpOnly çerez ayarla
    const cookie = `token=${token}; HttpOnly; Path=/; SameSite=Lax; ${
      process.env.NODE_ENV === 'production' ? 'Secure' : ''
    }`;

    // Başarılı yanıt
    return new NextResponse(
      JSON.stringify({ message: 'Giriş başarılı' }),
      {
        status: 200,
        headers: {
          'Set-Cookie': cookie,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error: any) {
    logError(error, 'Login Handler');
    return NextResponse.json({ message: error.message || 'Sunucu hatası' }, { status: 500 });
  }
}
