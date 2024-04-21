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
  const fullName = data.get("fullName");
  const email = data.get("email");
  const password = data.get("password");
  const confirmPassword = data.get("confirmPassword");

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
