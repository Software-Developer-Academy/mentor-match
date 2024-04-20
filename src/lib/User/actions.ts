"use server";
import { signUpSchema } from "./validations";
import { redirect } from "next/navigation";
import UserModel from "./model";
import { connectMongo } from "../db";
import bcrypt from "bcrypt";

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

  const existingUserWithEmail = await UserModel.findOne({ email });

  if (existingUserWithEmail) {
    throw new Error("User already exists.");
  }

  try {
    // Hash and salt the password
    const saltRounds = 15;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    await UserModel.create({
      name: fullName,
      email,
      password: hashedPassword, // Save the hashed password
      salt: salt,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create user.");
  }

  return redirect("/");
}
