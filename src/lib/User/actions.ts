"use server";

import { redirect } from "next/navigation";
import { ZodIssue } from "zod";
import { connectMongo } from "../db";
import { createSession, setSessionCookie } from "../tools/session";
import UserModel from "./model";
import {
  EMAIL_ALREADY_EXISTS_MSG,
  signInSchema,
  signUpSchema,
} from "./validations";

export async function signinUser(
  data: FormData,
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
      },
    );

    // !DANGER! This is a NOT VERY SECURE FORM of password checking. Compare the hashes instead.
    if (!user || user.password !== password) {
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
      "We encountered a problem signing you in. Please try again.",
    );
  }

  return redirect("/");
}

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

  const existingUserWithEmail = await UserModel.findOne({
    email,
  });

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

    throw new Error(
      "We encountered a problem creating your account. Please try again.",
    );
  }

  return redirect("/");
}
