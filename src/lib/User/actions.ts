"use server";
import { redirect } from "next/navigation";
import { connectMongo } from "../db";
import UserModel from "./model";
import { EMAIL_ALREADY_EXISTS_MSG, signUpSchema } from "./validations";

type FieldErrors = {
  [key: string]: string[] | undefined;
};

export async function signupUser(
  _: FieldErrors | undefined,
  data: FormData,
): Promise<FieldErrors | undefined> {
  const fullName = data.get("fullName");
  const email = data.get("email");
  const password = data.get("password");
  const confirmPassword = data.get("confirmPassword");
  const dataSchemaValidation = signUpSchema.safeParse({
    fullName: fullName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  });

  if (dataSchemaValidation.success === false) {
    return dataSchemaValidation.error.formErrors.fieldErrors;
  }

  await connectMongo();

  const existingUserWithEmail = await UserModel.findOne({
    email,
  });

  if (existingUserWithEmail) {
    return { email: [EMAIL_ALREADY_EXISTS_MSG] };
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
