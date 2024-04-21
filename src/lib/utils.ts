import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/*
  Add for a wider range of special characters /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:"<>?;',.\/`~\-=\[\]\\|])[A-Za-z\d!@#$%^&*()_+{}:"<>?;',.\/`~\-=\[\]\\|]{8,}$/

  - One lowercase letter [a-z]
  - One uppercase letter [A-Z]
  - One digit \d
  -One special character from the set [@$!%*?&.]
*/
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;
