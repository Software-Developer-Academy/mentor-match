"use server";

import { EMAIL_ALREADY_EXISTS_MSG, signUpSchema } from "./validations";
import { redirect } from "next/navigation";
import { connectMongo } from "../db";
import UserModel from "./model";
import { ZodIssue } from "zod";
import bcrypt from "bcrypt";

export async function signupUser(
  data: FormData,
): Promise<ZodIssue[] | unknown> {
  const fullName = data.get("fullName") as string;
  const email = data.get("email") as string;
  const password = data.get("password") as string;
  const confirmPassword = data.get("confirmPassword") as string;

  const dataSchemaValidation = signUpSchema.safeParse({
    fullName,
    email,
    password,
    confirmPassword,
  });

  if (dataSchemaValidation.success === false) {
    return dataSchemaValidation.error.errors;
  }

  await connectMongo();

  const existingUserWithEmail = await UserModel.findOne({ email });

  if (existingUserWithEmail) {
    return [
      {
        message: EMAIL_ALREADY_EXISTS_MSG,
        path: ["email"],
        code: "custom",
      },
    ];
  }

  try {
    // Hash and salt the password
    const saltRounds = 15;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = bcrypt.hash(password, salt as string);

    await UserModel.create({
      name: fullName,
      email,
      password: hashedPassword, // Save the hashed password
      salt: salt as string, // Asssert salt as string
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create user.");
  }

  return redirect("/");
}
