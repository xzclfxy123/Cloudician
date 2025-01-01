import { NextResponse } from 'next/server';
import { createToken } from '@/lib/auth';
import { verifyAdminCredentials } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    
    if (!username || !password) {
      return NextResponse.json(
        { error: '用户名和密码不能为空' }, 
        { status: 400 }
      );
    }

    const isValid = await verifyAdminCredentials(username, password);
    if (isValid) {
      const token = await createToken(username);
      const response = NextResponse.json({ token });
      response.cookies.set('adminToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 // 24 hours
      });
      return response;
    }
    
    return NextResponse.json(
      { error: '用户名或密码错误' }, 
      { status: 401 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: '登录过程中发生错误' }, 
      { status: 500 }
    );
  }
}

