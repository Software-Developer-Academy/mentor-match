import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

// Check for the environment variable for the secret key, throw error if not set
if (!process.env.SESSION_SECRET) {
  throw new Error(
    "SESSION_SECRET is not set. Please set the SESSION_SECRET environment variable.",
  );
}

// Environment variable for the secret key
const secretKey = process.env.SESSION_SECRET;
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

export function setSessionCookie(token: string) {
  cookies().set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days in seconds
  });
}

export function clearSessionCookie() {
  cookies().delete("session");
}
