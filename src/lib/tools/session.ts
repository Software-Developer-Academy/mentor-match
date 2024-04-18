import { jwtVerify, SignJWT } from "jose";
import { randomBytes } from "crypto";
import { NextResponse } from "next/server";

// Environment variable for the secret key
const secretKey = process.env.SESSION_SECRET || randomBytes(64).toString("hex");
const encoder = new TextEncoder();

export async function createSession(payload: { userId: string }) {
  const encoder = new TextEncoder();
  const jwt = await new SignJWT({ userId: payload.userId })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(encoder.encode(secretKey));

  return jwt;
}

export async function verifySession(token: string) {
  try {
    const { payload } = await jwtVerify(token, encoder.encode(secretKey), {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.error("Failed to verify session:", error);
    return null;
  }
}

export function setSessionCookie(response: NextResponse, token: string) {
  response.cookies.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 2592000, // 30 days in seconds
  });
}

export function clearSessionCookie(response: NextResponse) {
  response.cookies.delete("session");
}
