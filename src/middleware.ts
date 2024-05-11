import { NextResponse } from "next/server";

import {
  ERROR_INVALID_SESSION_SCHEMA,
  getDeserializedSessionCookie,
  SESSION_COOKIE_NAME,
} from "./lib/utils/session";

export async function middleware() {
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

    const response = NextResponse.next();

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
