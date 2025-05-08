
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function GET(req: NextRequest) {
  try {
    const csrfToken = uuidv4();
    const cookie = `csrfToken=${csrfToken}; HttpOnly; Path=/; SameSite=Lax; ${
      process.env.NODE_ENV === 'production' ? 'Secure' : ''
    }`;
    console.log('Oluşturulan CSRF token:', csrfToken); // Debug için
    return new NextResponse(
      JSON.stringify({ csrfToken }),
      {
        status: 200,
        headers: {
          'Set-Cookie': cookie,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('CSRF token oluşturma hatası:', error);
    return NextResponse.json({ message: 'Sunucu hatası' }, { status: 500 });
  }
}
