"use server";

import { redirect } from "next/navigation";
import { connectMongo } from "../db";
import UserModel from "./model";

type FormError = {
  field: string;
  previousValue?: string | FormDataEntryValue | null;
  message: string;
};

export async function signupUser(
  _: FormError[] | undefined,
  data: FormData,
): Promise<FormError[] | undefined> {
  const fullName = data.get("fullName");
  const email = data.get("email");
  const password = data.get("password");
  const confirmPassword = data.get("confirmPassword");

  if (!fullName || !email || !password || !confirmPassword) {
    return [
      {
        field: "fullName",
        previousValue: fullName,
        message: !fullName ? "Full name is required." : "",
      },
      {
        field: "email",
        previousValue: email,
        message: !email ? "Email is required." : "",
      },
      {
        field: "password",
        previousValue: password,
        message: !password ? "Password is required." : "",
      },
      {
        field: "confirmPassword",
        previousValue: confirmPassword,
        message: !confirmPassword ? "Please confirm your password." : "",
      },
    ];
  }

  if (password !== confirmPassword) {
    return [
      {
        field: "fullName",
        previousValue: fullName,
        message: "",
      },
      {
        field: "email",
        previousValue: email,
        message: "",
      },
      {
        field: "confirmPassword",
        previousValue: confirmPassword,
        message: "Passwords do not match.",
      },
      {
        field: "password",
        previousValue: password,
        message: "Passwords do not match.",
      },
    ];
  }

  await connectMongo();

  const existingUserWithEmail = await UserModel.findOne({
    email,
  });

  if (existingUserWithEmail) {
    return [
      {
        field: "fullName",
        previousValue: fullName,
        message: "",
      },
      {
        field: "email",
        previousValue: email,
        message: "An account with this email already exists.",
      },
      {
        field: "password",
        previousValue: password,
        message: "",
      },
      {
        field: "confirmPassword",
        previousValue: confirmPassword,
        message: "",
      },
    ];
  }

  try {
    await UserModel.create({
      name: fullName,
      email,
      password,
    });
  } catch (e) {
    console.error(e);
    throw new Error(
      "We encountered a problem creating your account. Please try again.",
    );
  }

  return redirect("/");
}
