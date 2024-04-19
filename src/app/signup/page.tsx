"use client";

import { GradButton } from "@/components/ui/grad-button";
import SignUpImage from "@/components/ui/signup-image";
import { signupUser } from "@/lib/User/actions";
import { passwordRegex } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignUp = () => {
  const MIN_NAME_LENGTH = 3;
  const MAX_NAME_LENGTH = 30;
  const MAX_EMAIL_LENGTH = 200;
  const MAX_PASSWORD_LENGTH = 64;

  const signUpSchema = z
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

  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(signupUser, undefined);
  const previousEmailValue = useMemo(() => {
    return state
      ? state.find((s) => s.field === "email")?.previousValue?.toString() || ""
      : "";
  }, [state]);
  const previousFullNameValue = useMemo(() => {
    return state
      ? state.find((s) => s.field === "fullName")?.previousValue?.toString() ||
          ""
      : "";
  }, [state]);
  const previousPasswordValue = useMemo(() => {
    return state
      ? state.find((s) => s.field === "password")?.previousValue?.toString() ||
          ""
      : "";
  }, [state]);
  const previousConfirmPasswordValue = useMemo(() => {
    return state
      ? state
          .find((s) => s.field === "confirmPassword")
          ?.previousValue?.toString() || ""
      : "";
  }, [state]);
  const emailError = useMemo(() => {
    return state?.find((error) => error.field === "email")?.message;
  }, [state]);

  const [showEmailStateError, setShowEmailStateError] = useState(
    previousEmailValue !== "",
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: previousFullNameValue || "",
      email: previousEmailValue || "",
      password: previousPasswordValue || "",
      confirmPassword: previousConfirmPasswordValue || "",
    },
  });

  const emailValidator = register("email");

  return (
    <section className="h-full">
      <div className="flex flex-1 self-center">
        <div className="flex flex-col w-1/2 bg-[#00658A] h-full rounded-r-full">
          <div className="flex flex-col w-3/5 ms-24 mt-24">
            <h1 className="flex flex-col font-bold text-6xl text-white mb-5">
              Welcome to
            </h1>
            <h1 className="flex flex-col text-6xl text-[#87ce64] mb-10">
              Mentor Match
            </h1>
            <p className="flex text-3xl text-white">
              Connecting aspiring talent with experienced professionals
            </p>
          </div>
          <div className="flex mt-24">
            <SignUpImage />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-10 mb-10 w-1/2">
          <div className="flex mb-10 justify-center">
            <Image
              src="/images/Logo.png"
              width={75}
              height={75}
              alt="Mentor Match Logo"
            />
          </div>
          <div className="flex flex-col mb-10 w-full ms-24">
            <h2 className="text-3xl mb-5 font-semibold">Create your account</h2>
          </div>
          <div className="flex items-center px-12 mb-10 w-full">
            <form
              ref={formRef}
              action={formAction}
              onSubmit={handleSubmit(() => formRef.current?.submit())}
              className="w-full"
            >
              <div className="mb-4">
                <input
                  autoFocus
                  autoComplete="given-name"
                  type="text"
                  placeholder="Full Name"
                  maxLength={MAX_EMAIL_LENGTH}
                  defaultValue={previousFullNameValue}
                  className="w-full bg-gray-300 text-black size-12 border px-4 rounded"
                  {...register("fullName")}
                />
                {errors.fullName?.message &&
                  typeof errors.fullName.message === "string" && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  maxLength={MAX_EMAIL_LENGTH}
                  defaultValue={previousEmailValue}
                  className="w-full bg-gray-300 text-black size-12 border px-4 rounded"
                  ref={emailValidator.ref}
                  onBlur={emailValidator.onBlur}
                  name={emailValidator.name}
                  onChange={(evt) => {
                    if (previousEmailValue) {
                      setShowEmailStateError(
                        evt.target.value === previousEmailValue,
                      );
                    }

                    emailValidator.onChange(evt);
                  }}
                />
                {errors.email?.message &&
                  !showEmailStateError &&
                  typeof errors.email.message === "string" && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                {emailError && showEmailStateError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  autoComplete="new-password"
                  placeholder="Password"
                  defaultValue={previousPasswordValue}
                  maxLength={MAX_PASSWORD_LENGTH}
                  className="w-full bg-gray-300 text-black size-12 border px-4 rounded"
                  {...register("password")}
                />
                {errors.password?.message &&
                  typeof errors.password.message === "string" && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  autoComplete="new-password"
                  placeholder="Confirm Password"
                  maxLength={MAX_PASSWORD_LENGTH}
                  defaultValue={previousConfirmPasswordValue}
                  className="w-full bg-gray-300 text-black size-12 border px-4 rounded"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword?.message &&
                  typeof errors.confirmPassword.message === "string" && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
              </div>
              <div className="mb-10">
                <GradButton variant="default" className="w-full">
                  Sign Up
                </GradButton>
              </div>
              <div className="flex justify-center mb-5 ">
                <p className="text-black font-semibold text-xl">
                  or sign up with
                </p>
              </div>
              <div className="flex justify-center mb-5 space-x-10">
                <Image
                  src="/images/facebook.png"
                  width={64}
                  height={64}
                  alt="Facebook icon"
                />
                <Image
                  src="/images/google-icon.png"
                  width={64}
                  height={64}
                  alt="Google icon"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
