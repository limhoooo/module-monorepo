import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  //   let cookie = request.cookies.get('a_name')?.value;
  //   if (!cookie) {
  //     return NextResponse.redirect(new URL('/login', request.url));
  //   }
  return null;
}

export const config = {
  // 하위 경로에서만 실행
  matcher: ['/admin'],
};
