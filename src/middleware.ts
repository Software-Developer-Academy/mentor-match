import { NextRequest, NextResponse } from "next/server";
import {
  ERROR_INVALID_SESSION_SCHEMA,
  getDeserializedSessionCookie,
  SESSION_COOKIE_NAME,
} from "./lib/tools/session";

export async function middleware(request: NextRequest) {
  try {
    await getDeserializedSessionCookie();
  } catch (err) {
    if (
      !(err instanceof Error) ||
      err.message !== ERROR_INVALID_SESSION_SCHEMA
    ) {
      console.error(err);
      return NextResponse.next();
    }

    if (
      request.nextUrl.pathname === "/signin" ||
      request.nextUrl.pathname === "/signup" ||
      request.nextUrl.pathname === "/"
    ) {
      const response = NextResponse.next();

      response.cookies.delete(SESSION_COOKIE_NAME);

      return response;
    }

    const response = NextResponse.redirect(
      new URL("/signin", request.nextUrl.origin),
    );

    response.cookies.delete(SESSION_COOKIE_NAME);

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
