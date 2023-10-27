import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  //   if (request.nextUrl.pathname.startsWith('/login')) {
  //   }
  let cookie = request.cookies.get('a_name')?.value;
  if (!cookie) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  // 하위 경로에서만 실행
  matcher: ['/admin'],
};
