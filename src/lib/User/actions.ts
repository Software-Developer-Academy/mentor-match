"use server";
import { redirect } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { connectMongo } from "../db";
import UserModel from "./model";
import { EMAIL_ALREADY_EXISTS_MSG, signUpSchema } from "./validations";

export type SignUpFieldErrors = {
  [key: string]: string[] | undefined;
};

export async function signupUser(
  data: FieldValues,
): Promise<SignUpFieldErrors | undefined> {
  const dataSchemaValidation = signUpSchema.safeParse(data);

  if (dataSchemaValidation.success === false) {
    return dataSchemaValidation.error.formErrors.fieldErrors;
  }

  const email = data.email;
  const fullName = data.fullName;
  const password = data.password;

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
