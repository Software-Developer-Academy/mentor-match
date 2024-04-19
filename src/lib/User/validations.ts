import { passwordRegex } from "@/lib/utils";
import { z } from "zod";

export const EMAIL_ALREADY_EXISTS_MSG =
  "An account with this email already exists.";
export const SIGNUP_MIN_NAME_LENGTH = 3;
export const SIGNUP_MAX_NAME_LENGTH = 30;
export const SIGNUP_MAX_EMAIL_LENGTH = 200;
export const SIGNUP_MAX_PASSWORD_LENGTH = 64;
export const SIGNUP_MIN_PASSWORD_LENGTH = 8;
export const SIGNUP_FULLNAME_REGEX = /^[a-zA-Z'-]+(?: [a-zA-Z'-]+)*$/;

export const signUpFullNameValdator = z
  .string()
  .min(SIGNUP_MIN_NAME_LENGTH, {
    message: `Name must be at least ${SIGNUP_MIN_NAME_LENGTH} characters long`,
  })
  .max(SIGNUP_MAX_NAME_LENGTH, {
    message: `Name must be no more than ${SIGNUP_MAX_NAME_LENGTH} characters long`,
  })
  .regex(SIGNUP_FULLNAME_REGEX, {
    message:
      "Name can only include alphabetical characters, hyphens, apostrophes, and internal spaces",
  });
export const signUpEmailValidator = z
  .string()
  .email({ message: "Please enter a valid email" })
  .max(SIGNUP_MAX_EMAIL_LENGTH, {
    message: `Email must be no more than ${SIGNUP_MAX_EMAIL_LENGTH} characters long`,
  });
export const signUpPasswordValidator = z
  .string()
  .min(SIGNUP_MIN_PASSWORD_LENGTH, {
    message: `Password must be at least ${SIGNUP_MIN_PASSWORD_LENGTH} characters long`,
  })
  .max(SIGNUP_MAX_PASSWORD_LENGTH, {
    message: `Password must be no more than ${SIGNUP_MAX_PASSWORD_LENGTH} characters long`,
  })
  .regex(passwordRegex, {
    message:
      "Password must include uppercase, lowercase, number, and special character",
  });
export const signUpConfirmPasswordValidator = z.string();

export const signUpSchema = z
  .object({
    fullName: signUpFullNameValdator,
    email: signUpEmailValidator,
    password: signUpPasswordValidator,
    confirmPassword: signUpConfirmPasswordValidator,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
