import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken');
  // Redirect users without an access token to login with redirect back to submission

  if (!accessToken) {
    return Response.redirect(new URL('/auth/login?redirect=/submitarticle', request.url));
  }
}

// Config to specify which routes the middleware applies to
export const config = {
  matcher: [],
};
