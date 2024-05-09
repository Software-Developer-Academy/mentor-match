"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import { Spinner } from "@/components/loaders/spinner";
import { GradButton } from "@/components/ui/grad-button";
import { Input } from "@/components/ui/input";
import { signupUser } from "@/lib/User/actions";
import { signUpSchema } from "@/lib/User/validations/auth";

export const SignUpForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  return (
    <form
      className="flex flex-col gap-6 w-full"
      ref={formRef}
      onSubmit={handleSubmit(async () => {
        if (isSubmitting) {
          return;
        }

        const errors = await signupUser(new FormData(formRef.current!));
        if (errors && Array.isArray(errors)) {
          for (const error of errors) {
            setError(error.path[0] as string, error);
          }
        }
      })}
      noValidate
    >
      <div>
        <label className="sr-only" htmlFor="fullNameInput">
          Full Name
        </label>
        <Input
          id="fullNameInput"
          autoComplete="name"
          type="text"
          placeholder="Full Name"
          aria-errormessage="fullNameError"
          aria-required
          {...register("fullName")}
        />
        <small id="fullNameError" className="text-red-500 text-sm mt-1">
          {errors.fullName && (
            <>
              {Array.isArray(errors.fullName) ? (
                <>{errors.fullName[0]}</>
              ) : typeof errors.fullName.message === "string" ? (
                <>{errors.fullName.message}</>
              ) : (
                <>Invalid input</>
              )}
            </>
          )}
        </small>
      </div>
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
          Password
        </label>
        <Input
          id="passwordInput"
          type="password"
          autoComplete="new-password"
          placeholder="Password"
          aria-errormessage="passwordError"
          aria-required
          {...register("password")}
        />
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
      </div>
      <div>
        <label className="sr-only" htmlFor="confirmPasswordInput">
          Confirm Password
        </label>
        <Input
          id="confirmPasswordInput"
          type="password"
          autoComplete="new-password"
          placeholder="Confirm Password"
          aria-errormessage="confirmPasswordError"
          aria-required
          {...register("confirmPassword")}
        />
        <small id="confirmPasswordError" className="text-red-500 text-sm mt-1">
          {errors.confirmPassword && (
            <>
              {Array.isArray(errors.confirmPassword) ? (
                <>{errors.confirmPassword[0]}</>
              ) : typeof errors.confirmPassword.message === "string" ? (
                <>{errors.confirmPassword.message}</>
              ) : (
                <>Invalid input</>
              )}
            </>
          )}
        </small>
      </div>
      <GradButton
        disabled={isSubmitting}
        variant="default"
        className="mt-6 py-4 text-lg gap-3"
      >
        Sign Up
        {isSubmitting && <Spinner />}
      </GradButton>
    </form>
  );
};
