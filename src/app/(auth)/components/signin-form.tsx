"use client";

import { GradButton } from "@/components/ui/grad-button";
import { signinUser } from "@/lib/User/actions";
import { signInSchema } from "@/lib/User/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useForm } from "react-hook-form";

export const SignInForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  return (
    <div className="w-full">
      <form
        ref={formRef}
        onSubmit={handleSubmit(async () => {
          const errors = await signinUser(new FormData(formRef.current!));
          if (errors && Array.isArray(errors)) {
            for (const error of errors) {
              setError(error.path[0] as string, error);
            }
          }
        })}
        noValidate
      >
        <div className="mb-4">
          <input
            type="email"
            autoComplete="email"
            placeholder="Email"
            aria-errormessage="emailError"
            className="w-full bg-gray-300 text-black size-12 border px-4 rounded"
            {...register("email")}
          />
          {errors.email && (
            <p id="emailError" className="text-red-500 text-sm mt-1">
              {Array.isArray(errors.email) ? (
                <>{errors.email[0]}</>
              ) : typeof errors.email.message === "string" ? (
                <>{errors.email.message}</>
              ) : (
                <>Invalid input</>
              )}
            </p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="password"
            autoComplete="new-password"
            placeholder="Password"
            aria-errormessage="passwordError"
            className="w-full bg-gray-300 text-black size-12 border px-4 rounded"
            {...register("password")}
          />
          {errors.password && (
            <p id="passwordError" className="text-red-500 text-sm mt-1">
              {Array.isArray(errors.password) ? (
                <>{errors.password[0]}</>
              ) : typeof errors.password.message === "string" ? (
                <>{errors.password.message}</>
              ) : (
                <>Invalid input</>
              )}
            </p>
          )}
        </div>
        <div className="mb-10">
          <GradButton variant="default" className="w-full">
            Sign In
          </GradButton>
        </div>
        <div className="flex justify-center mb-5">
          <p className="text-black font-semibold text-xl">or sign in with</p>
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
      <hr className="mt-10 mb-10" />
      <div className="flex justify-center mb-5">
        <p className="text-black font-semibold text-xl">
          Don&apos;t have an account?
        </p>
      </div>
      <div className="mx-20 my-10">
        <Link href="/signup">
          <GradButton variant="default" className="w-full">
            Sign Up
          </GradButton>
        </Link>
      </div>
    </div>
  );
};
