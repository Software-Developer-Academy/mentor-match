"use server";

import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { ZodIssue } from "zod";
import { connectMongo } from "../db";
import UserModel from "./model";
import {
  EMAIL_ALREADY_EXISTS_MSG,
  signInSchema,
  signUpSchema,
} from "./validations";
import { createSession, setSessionCookie } from "../tools/session";

export async function signinUser(
  data: FormData
): Promise<ZodIssue[] | unknown> {
  const email = data.get("email");
  const password = data.get("password");

  const dataSchemaValidation = signInSchema.safeParse({
    email,
    password,
  });

  if (dataSchemaValidation.success === false) {
    return dataSchemaValidation.error.errors;
  }

  await connectMongo();

  try {
    const user = await UserModel.findOne(
      {
        email,
      },
      {
        _id: 1,
        password: 1,
      }
    );

    if (
      !user ||
      !(await bcrypt.compare(password as string, user?.password as string))
    ) {
      return [
        {
          message: "Invalid email or password",
          path: ["email"],
          code: "custom",
        },
        {
          message: "Invalid email or password",
          path: ["password"],
          code: "custom",
        },
      ];
    }

    // Generate a new session for the newly created user
    const token = await createSession({ userId: user._id });

    // Set the session token as a secure, HTTP-only cookie in the response
    setSessionCookie(token);
  } catch (err) {
    console.error(err);

    throw new Error(
      "We encountered a problem signing you in. Please try again."
    );
  }

  return redirect("/");
}

export async function signupUser(
  data: FormData
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
    const hashedPassword = await bcrypt.hash(password as string, 15);

    const newUser = await UserModel.create({
      name: fullName,
      email,
      password: hashedPassword,
    });

    // Generate a new session for the newly created user
    const token = await createSession({ userId: newUser._id });

    // Set the session token as a secure, HTTP-only cookie in the response
    setSessionCookie(token);
  } catch (error) {
    console.error(error);
    throw new Error(
      "We encountered a problem creating your account. Please try again."
    );
  }

  return redirect("/");
}
