import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return; // Zaten bağlıysa tekrar bağlanma
  
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('✅ MongoDB bağlantısı başarılı');
  } catch (error) {
    console.error('❌ MongoDB bağlantı hatası:', error);
    throw new Error('MongoDB bağlantı hatası');
  }
};

export default connectDB;