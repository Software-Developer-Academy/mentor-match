import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

export type SessionPayload = {
  userId: string;
};

export type JWTSessionPayload = SessionPayload & JWTPayload;

// Check for the environment variable for the secret key, throw error if not set
if (!process.env.SESSION_SECRET) {
  throw new Error(
    "SESSION_SECRET is not set. Please set the SESSION_SECRET environment variable.",
  );
}

// Environment variable for the secret key
export const SESSION_SECRET = process.env.SESSION_SECRET;
export const SESSION_COOKIE_NAME = "session";
export const ERROR_INVALID_SESSION_SCHEMA =
  "Deserialized session cookie has an invalid schema";

export async function createSession(payload: SessionPayload): Promise<string> {
  const encoder = new TextEncoder();
  const jwt = await new SignJWT({ userId: payload.userId })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(encoder.encode(SESSION_SECRET));

  return jwt;
}

/**
 * Verifies the signed token string and
 * deserializes it into a {@link JWTPayload} object
 * with properties from {@link SessionPayload}.
 *
 * @returns null if the token cannot be deserialized.
 * @throws {Error} If the token cannot be deserialized.
 */
export async function verifySession(
  token: string,
): Promise<JWTSessionPayload | null> {
  const encoder = new TextEncoder();

  try {
    const { payload } = await jwtVerify(token, encoder.encode(SESSION_SECRET), {
      algorithms: ["HS256"],
    });

    if (!("userId" in payload)) {
      throw new Error(ERROR_INVALID_SESSION_SCHEMA);
    }

    return payload as JWTSessionPayload;
  } catch (error) {
    if (
      error instanceof Error &&
      error.name === "JWSSignatureVerificationFailed"
    ) {
      throw new Error(ERROR_INVALID_SESSION_SCHEMA);
    }

    console.error("Failed to verify session:", error);
    return null;
  }
}

export function setSessionCookie(token: string) {
  cookies().set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days in seconds
  });
}

/**
 * @returns The deserialized session token from the cookie.
 * This uses {@link verifySession}.
 *
 * **Note**: This does not verify whether the user exists on the
 * database or not. It only checks if the session token is valid and
 * returns it.
 *
 * @throws Errors from {@link verifySession}
 */
export async function getDeserializedSessionCookie(): Promise<JWTSessionPayload | null> {
  const signedCookie = cookies().get(SESSION_COOKIE_NAME)?.value;

  return signedCookie ? verifySession(signedCookie) : null;
}

export async function clearSessionCookie() {
  cookies().delete(SESSION_COOKIE_NAME);
}
