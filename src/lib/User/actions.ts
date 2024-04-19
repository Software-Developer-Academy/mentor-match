"use server";
import { signUpSchema } from "../validations/userValidations";
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
  
  const validationResult = signUpSchema.safeParse(fields);
  if (!validationResult.success) {
    const errors = validationResult.error.flatten();
    throw new Error("Validation failed: " + errors.fieldErrors);
  }

  const { fullName, email, password } = validationResult.data;

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
