import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/app/lib/db';
import User from '@/app/models/User';

export async function GET() {
  try {
    await connectDB();
    const hashedPassword = await bcrypt.hash('parola123', 10);
    const user = new User({ username: 'admin', password: hashedPassword });
    await user.save();
    return NextResponse.json({ message: 'Test kullanıcısı eklendi: admin / parola123' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: `Hata: ${error.message}` }, { status: 500 });
  }
}