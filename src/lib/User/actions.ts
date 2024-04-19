"use server";
import { redirect } from "next/navigation";
import { connectMongo } from "../db";
import UserModel from "./model";
import { EMAIL_ALREADY_EXISTS_MSG, signUpSchema } from "./validations";
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
  const dataSchemaValidation = signUpSchema.safeParse({
    fullName: fullName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  });

  if (dataSchemaValidation.success === false) {
    const fullNameError =
      dataSchemaValidation.error.formErrors.fieldErrors.fullName;
    const emailError = dataSchemaValidation.error.formErrors.fieldErrors.email;
    const passwordError =
      dataSchemaValidation.error.formErrors.fieldErrors.password;
    const confirmPasswordError =
      dataSchemaValidation.error.formErrors.fieldErrors.confirmPassword;

    return [
      {
        field: "fullName",
        previousValue: fullName,
        message: fullNameError?.join(",") ?? "",
      },
      {
        field: "email",
        previousValue: email,
        message: emailError?.join(",") ?? "",
      },
      {
        field: "password",
        previousValue: password,
        message: passwordError?.join(",") ?? "",
      },
      {
        field: "confirmPassword",
        previousValue: confirmPassword,
        message: confirmPasswordError?.join(",") ?? "",
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
        message: EMAIL_ALREADY_EXISTS_MSG,
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
