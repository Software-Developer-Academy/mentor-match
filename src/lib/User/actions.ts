"use server";

import { redirect } from "next/navigation";
import UserModel from "./model";
import { connectMongo } from "../db";

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
    await UserModel.create({
      name: fullName,
      email,
      password,
    });
  } catch (e) {
    console.error(e);
    throw new Error("Failed to create user.");
  }

  return redirect("/");
}
