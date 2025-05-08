import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectDB from '@/app/lib/db';
import Product from '@/app/models/Products';


// GET: Tüm ürünleri listele
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
    const products = await Product.find().sort({ createdAt: -1 });
    return NextResponse.json(products, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Geçersiz token' }, { status: 401 });
  }
}

// POST: Yeni ürün ekle
export async function POST(req: NextRequest) {
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
    const { name, description, imageUrl } = await req.json();
    const newProduct = new Product({ name, description, imageUrl });
    await newProduct.save();
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: `Hata: ${error.message}` }, { status: 500 });
  }
}

// PUT: Ürünü güncelle
export async function PUT(req: NextRequest) {
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
    const { id, name, description, imageUrl } = await req.json();
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, imageUrl },
      { new: true }
    );
    if (!updatedProduct) {
      return NextResponse.json({ message: 'Ürün bulunamadı' }, { status: 404 });
    }
    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: `Hata: ${error.message}` }, { status: 500 });
  }
}

// DELETE: Ürünü sil
export async function DELETE(req: NextRequest) {
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
    const { id } = await req.json();
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return NextResponse.json({ message: 'Ürün bulunamadı' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Ürün silindi' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: `Hata: ${error.message}` }, { status: 500 });
  }
}