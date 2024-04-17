import test from "node:test";
import assert from "node:assert";

import { passwordRegex } from "@/lib/utils";

test("password validation", async (t) => {
  await t.test("should accept a valid password", async () => {
    assert.strictEqual(passwordRegex.test("Password11."), true);
  });

  await t.test("should reject a password that is too short", async () => {
    assert.strictEqual(passwordRegex.test("Pass1."), false);
  });

  await t.test(
    "should reject a password without uppercase letters",
    async () => {
      assert.strictEqual(passwordRegex.test("password11."), false);
    },
  );

  await t.test(
    "should reject a password without lowercase letters",
    async () => {
      assert.strictEqual(passwordRegex.test("PASSWORD11."), false);
    },
  );

  await t.test("should reject a password without numbers", async () => {
    assert.strictEqual(passwordRegex.test("Password!!."), false);
  });

  await t.test(
    "should reject a password without special characters",
    async () => {
      assert.strictEqual(passwordRegex.test("Password11"), false);
    },
  );
});
