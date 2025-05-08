import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  // Token yoksa veya geçersizse, kullanıcıyı giriş sayfasına yönlendir
  if (!token && request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/Login', request.url));
  }

  // Token'ı doğrula
  try {
    jwt.verify(token as string, process.env.JWT_SECRET as string);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/Login', request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*'], // Yalnızca /admin ve alt rotaları için çalışır
};