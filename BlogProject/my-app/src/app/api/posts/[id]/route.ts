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

// Yazıyı güncelle (PUT)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();
  try {
    authenticateToken(req);
    const { title, content } = await req.json();
    const updatedPost = await Post.findByIdAndUpdate(
      params.id,
      { title, content },
      { new: true }
    );
    if (!updatedPost) {
      return NextResponse.json({ message: 'Yazı bulunamadı' }, { status: 404 });
    }
    return NextResponse.json(updatedPost, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Yazı güncellenemedi' }, { status: 500 });
  }
}

// Yazıyı sil (DELETE)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();
  try {
    authenticateToken(req);
    const deletedPost = await Post.findByIdAndDelete(params.id);
    if (!deletedPost) {
      return NextResponse.json({ message: 'Yazı bulunamadı' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Yazı silindi' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Yazı silinemedi' }, { status: 500 });
  }
}