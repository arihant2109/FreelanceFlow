import { NextResponse } from 'next/server';

/**
 * Middleware to block access to sensitive files like .env
 * @param {import('next/server').NextRequest} req
 */
export function middleware(req) {
  const url = req.nextUrl;

    
  if (url.pathname.includes('.env')) {
    const url = req.nextUrl.clone();
    url.pathname = '/403';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}


export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
