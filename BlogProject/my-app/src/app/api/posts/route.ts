import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectDB from '@/app/lib/db';
import Post from '@/app/models/Post';


// Token doğrulama middleware’i
const authenticateToken = (req: NextRequest) => {
  const token = req.headers.get('authorization')?.split(' ')[1];
  if (!token) throw new Error('Erişim reddedildi');
  return jwt.verify(token, process.env.JWT_SECRET as string);
};

// Yazıları listele (GET)
export async function GET() {
  await connectDB();
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Yazılar alınamadı' }, { status: 500 });
  }
}



// Yeni yazı ekle (POST)
export async function POST(req: NextRequest) {
  await connectDB();
  try {
    authenticateToken(req);
    const { title, content } = await req.json();
    const newPost = new Post({ title, content });
    await newPost.save();
    return NextResponse.json(newPost, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message || 'Yazı eklenemedi' }, { status: 401 });
  }
}