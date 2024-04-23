"use client";

import { Spinner } from "@/components/loaders/spinner";
import { GradButton } from "@/components/ui/grad-button";
import { Input } from "@/components/ui/input";
import { signinUser } from "@/lib/User/actions";
import { signInSchema } from "@/lib/User/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRef } from "react";
import { useForm } from "react-hook-form";

export const SignInForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  return (
    <form
      className="flex flex-col gap-6 w-full"
      ref={formRef}
      onSubmit={handleSubmit(async () => {
        if (isSubmitting) {
          return;
        }

        const errors = await signinUser(new FormData(formRef.current!));
        if (errors && Array.isArray(errors)) {
          for (const error of errors) {
            setError(error.path[0] as string, error);
          }
        }
      })}
      noValidate
    >
      <div>
        <label className="sr-only" htmlFor="emailInput">
          Email
        </label>
        <Input
          id="emailInput"
          type="email"
          autoComplete="email"
          placeholder="Email"
          aria-errormessage="emailError"
          aria-required
          {...register("email")}
        />
        <small id="emailError" className="text-red-500 text-sm mt-1">
          {errors.email && (
            <>
              {Array.isArray(errors.email) ? (
                <>{errors.email[0]}</>
              ) : typeof errors.email.message === "string" ? (
                <>{errors.email.message}</>
              ) : (
                <>Invalid input</>
              )}
            </>
          )}
        </small>
      </div>
      <div>
        <label className="sr-only" htmlFor="passwordInput">
          Enter your current password
        </label>
        <Input
          id="passwordInput"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          aria-errormessage="passwordError"
          aria-required
          {...register("password")}
        />
        <div className="flex justify-between gap-3">
          <small id="passwordError" className="text-red-500 text-sm mt-1">
            {errors.password && (
              <>
                {Array.isArray(errors.password) ? (
                  <>{errors.password[0]}</>
                ) : typeof errors.password.message === "string" ? (
                  <>{errors.password.message}</>
                ) : (
                  <>Invalid input</>
                )}
              </>
            )}
          </small>
          <div className="text-sm flex items-center">
            <Link href="/forgot-password" className="text-blue-500">
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
      <GradButton
        disabled={isSubmitting}
        variant="default"
        className="mt-6 py-4 text-lg gap-3"
      >
        Sign In
        {isSubmitting && <Spinner />}
      </GradButton>
    </form>
  );
};
