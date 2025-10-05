import type { NextRequest } from 'next/server';

// Simple gatekeeper middleware: redirects to login when no access token is present
export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken');
  console.log(accessToken);

  if (!accessToken) {
    return Response.redirect(new URL('/auth/login?redirect=/submitarticle', request.url));
  }
}

// Config to specify which routes the middleware applies to
export const config = {
  matcher: [],
};
