const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// MongoDB bağlantı fonksiyonu (güncellenmiş)
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb+srv://ShieldTechAdmin:Parola123@cluster0.nv2kqzt.mongodb.net/ShieldTechBlog1?retryWrites=true&w=majority', {
      serverSelectionTimeoutMS: 5000
    });
    console.log('✅ MongoDB bağlantısı başarılı');
    return true;
  } catch (error) {
    console.error('❌ MongoDB bağlantı hatası:', error.message);
    return false;
  }
}

// Kullanıcı şeması
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

// Admin kullanıcısını yeniden oluşturma fonksiyonu
async function recreateAdmin() {
  const isConnected = await connectToDatabase();
  if (!isConnected) return;

  try {
    // Önce eski admini sil
    await User.deleteOne({ username: 'admin' });
    
    // Yeni admin oluştur
    const newHash = await bcrypt.hash('Parola123', 10);
    await User.create({
      username: 'admin',
      passwordHash: newHash,
      createdAt: new Date()
    });
    
    console.log('✅ Yeni admin oluşturuldu. Şifre: "Parola123"');
    console.log('Yeni hash:', newHash);
  } catch (error) {
    console.error('❌ Hata:', error.message);
  } finally {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.close();
      console.log('🚪 MongoDB bağlantısı kapatıldı');
    }
  }
}

// Şifre kontrol fonksiyonu
async function checkPassword() {
  const isConnected = await connectToDatabase();
  if (!isConnected) return;

  try {
    console.log("🔍 Admin kullanıcısı aranıyor...");
    const user = await User.findOne({ username: 'admin' });
    
    if (!user) {
      console.log('❌ Admin kullanıcısı bulunamadı');
      return;
    }

    console.log(`👤 Kullanıcı bulundu: ${user.username}`);
    console.log(`🔒 Şifre hash: ${user.passwordHash.substring(0, 20)}...`);
    
    console.log("🔑 Şifre karşılaştırılıyor...");
    const isMatch = await bcrypt.compare('Parola123', user.passwordHash);
    console.log(isMatch ? '✅ Şifre doğru' : '❌ Şifre yanlış');

  } catch (error) {
    console.error('⛔ HATA:', error.message);
  } finally {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.close();
      console.log('🚪 MongoDB bağlantısı kapatıldı');
    }
  }
}

// Ana işlem akışı
async function main() {
  console.log("🚀 Script başlıyor...");
  
  // Önce admin kullanıcısını yeniden oluştur
  await recreateAdmin();
  
  // Sonra şifre kontrolü yap
  await checkPassword();
  
  console.log("🏁 İşlem tamamlandı");
}

// Script'i çalıştır
main().catch(err => console.error('⛔ Kritik Hata:', err));