import { z } from "zod";
import { passwordRegex } from "@/lib/utils";

const MIN_NAME_LENGTH = 3;
const MAX_NAME_LENGTH = 30;

export const signUpSchema = z
  .object({
    fullName: z
      .string()
      .min(MIN_NAME_LENGTH, {
        message: `Name must be at least ${MIN_NAME_LENGTH} characters long`,
      })
      .max(MAX_NAME_LENGTH, {
        message: `Name must be no more than ${MAX_NAME_LENGTH} characters long`,
      })
      .regex(/^[a-zA-Z'-]+(?: [a-zA-Z'-]+)*$/, {
        message:
          "Name can only include alphabetical characters, hyphens, apostrophes, and internal spaces",
      }),
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(passwordRegex, {
        message:
          "Password must include uppercase, lowercase, number, and special character",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
