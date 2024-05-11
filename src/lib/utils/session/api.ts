/**
 * Database related operations
 * for sessions go here.
 */
import { connectMongo } from "@/lib/db";
import UserModel, { User } from "@/lib/User/model";

import { getDeserializedSessionCookie } from ".";

export type SessionUser = Pick<User, "name" | "roles" | "_id">;

/**
 * Uses {@link getDeserializedSessionCookie} to get the session token
 * and then fetches the user from the database.
 *
 * Example format of {@link SessionUser}
 *
 * The `_id` is a MongoDB ObjectId string.
 * ```json
 * {
 *  "_id": "60f1e1b3e6f3b3b3b3b3b3b3",
 *  "name": "John Doe",
 *  "roles": []
 * }
 * ```
 *
 * @throws Errors from {@link connectMongo}, {@link UserModel.findById},
 * and {@link getDeserializedSessionCookie}.
 */
export async function getSessionUser(): Promise<SessionUser | null> {
  const sessionCookie = await getDeserializedSessionCookie();

  if (!sessionCookie) {
    return null;
  }

  await connectMongo();

  const sessionUser = await UserModel.findById(sessionCookie.userId, {
    name: 1,
    roles: 1,
  });

  return sessionUser;
}
