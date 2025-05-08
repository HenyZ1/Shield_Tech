import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectDB from '@/app/lib/db';
import Subscriber from '@/app/models/Subscriber';

export async function GET(req: NextRequest) {
  try {
    await connectDB();
  } catch (error: any) {
    return NextResponse.json({ message: `Veritabanı bağlantı hatası: ${error.message}` }, { status: 500 });
  }

  const token = req.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Yetkisiz erişim' }, { status: 401 });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    const subscribers = await Subscriber.find().sort({ subscribedAt: -1 });
    return NextResponse.json(subscribers, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Geçersiz token' }, { status: 401 });
  }
}