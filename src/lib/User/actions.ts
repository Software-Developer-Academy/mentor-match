"use server";

import { redirect } from "next/navigation";
import UserModel from "./model";
import { connectMongo } from "../db";
import { createSession, setSessionCookie } from "../tools/session";

type Fields = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export async function signupUser(fields: Fields) {
  const { fullName, email, password, confirmPassword } = fields;

  if (!fullName || !email || !password || !confirmPassword) {
    throw new Error("Must fill in all values.");
  }

  if (password !== confirmPassword) {
    throw new Error("Password Confirm must match password.");
  }

  await connectMongo();

  const existingUserWithEmail = await UserModel.findOne({
    email,
  });

  if (existingUserWithEmail) {
    throw new Error("User already exists.");
  }

  try {
    const newUser = await UserModel.create({
      name: fullName,
      email,
      password,
    });

    // Generate a new session for the newly created user
    const token = await createSession({ userId: newUser._id });

    // Set the session token as a secure, HTTP-only cookie in the response
    setSessionCookie(token);
  } catch (e) {
    console.error(e);
    throw new Error("Failed to create user.");
  }

  return redirect("/");
}
