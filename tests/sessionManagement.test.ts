import test from "node:test";
import assert from "node:assert";
import { createSession, verifySession } from "@/lib/utils/session";

// Set a test secret key
process.env.SESSION_SECRET = "testSecretKey";

test("Session Management: createSession and verifySession", async (t) => {
  await t.test("createSession generates a valid JWT", async () => {
    const userId = "testUserId";
    const jwt = await createSession({ userId });
    assert.ok(jwt, "JWT should be generated");
  });

  await t.test("verifySession validates a JWT correctly", async () => {
    const userId = "testUserId";
    // Create a session for a known user ID
    const jwt = await createSession({ userId });
    // Verify the session token
    const payload = await verifySession(jwt);
    assert.ok(payload, "Payload should be successfully decrypted");
    assert.strictEqual(
      payload.userId,
      userId,
      "Decrypted userId should match the original",
    );
  });

  await t.test("verifySession fails with an invalid JWT", async () => {
    const invalidToken = "invalid.token.here";
    const payload = await verifySession(invalidToken);
    assert.strictEqual(
      payload,
      null,
      "Payload should be null for an invalid token",
    );
  });
});
