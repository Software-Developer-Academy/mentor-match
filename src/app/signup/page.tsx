"use client";

import { GradButton } from "@/components/ui/grad-button";
import SignUpImage from "@/components/ui/signup-image";
import { SignUpFieldErrors, signupUser } from "@/lib/User/actions";
import {
  EMAIL_ALREADY_EXISTS_MSG,
  SIGNUP_MAX_EMAIL_LENGTH,
  SIGNUP_MAX_NAME_LENGTH,
  SIGNUP_MAX_PASSWORD_LENGTH,
  SIGNUP_MIN_NAME_LENGTH,
  SIGNUP_MIN_PASSWORD_LENGTH,
  signUpSchema,
} from "@/lib/User/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Fragment, useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [serverErrors, setServerErrors] = useState<
    SignUpFieldErrors | undefined
  >();
  const [emailBeforeSubmission, setEmailBeforeSubmission] = useState<
    string | undefined
  >("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const combinedErrors = useCallback(() => {
    return {
      ...serverErrors,
      ...errors,
    };
  }, [serverErrors, errors])();

  const emailValidation = register("email");

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
              onSubmit={handleSubmit(async (data) => {
                const error = await signupUser(data);

                if (error?.email?.length) {
                  setEmailBeforeSubmission(data.email);
                }

                setServerErrors((prevError) => {
                  if (!prevError) {
                    return error;
                  } else {
                    return {
                      ...prevError,
                      ...error,
                    };
                  }
                });
              })}
              className="w-full"
              noValidate
            >
              <div className="mb-4">
                <input
                  autoFocus
                  autoComplete="given-name"
                  type="text"
                  placeholder="Full Name"
                  maxLength={SIGNUP_MAX_NAME_LENGTH}
                  minLength={SIGNUP_MIN_NAME_LENGTH}
                  aria-errormessage="fullNameError"
                  className="w-full bg-gray-300 text-black size-12 border px-4 rounded"
                  required
                  {...register("fullName")}
                />
                {combinedErrors.fullName && (
                  <p id="fullNameError" className="text-red-500 text-sm mt-1">
                    {Array.isArray(combinedErrors.fullName) ? (
                      <Fragment>{combinedErrors.fullName[0]}</Fragment>
                    ) : typeof combinedErrors.fullName.message === "string" ? (
                      <Fragment>{combinedErrors.fullName.message}</Fragment>
                    ) : (
                      <Fragment>Invalid input</Fragment>
                    )}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  maxLength={SIGNUP_MAX_EMAIL_LENGTH}
                  aria-errormessage="emailError"
                  className="w-full bg-gray-300 text-black size-12 border px-4 rounded"
                  required
                  {...emailValidation}
                  onChange={(e) => {
                    if (emailBeforeSubmission === e.target.value) {
                      setServerErrors((prevError) => {
                        if (prevError) {
                          return {
                            ...prevError,
                            email: [EMAIL_ALREADY_EXISTS_MSG],
                          };
                        }
                      });
                    } else if (serverErrors?.email) {
                      setServerErrors((prevError) => {
                        if (prevError) {
                          return {
                            ...prevError,
                            email: undefined,
                          };
                        }
                      });
                    }

                    emailValidation.onChange(e);
                  }}
                />
                {combinedErrors.email && (
                  <p id="fullNameError" className="text-red-500 text-sm mt-1">
                    {Array.isArray(combinedErrors.email) ? (
                      <Fragment>{combinedErrors.email[0]}</Fragment>
                    ) : typeof combinedErrors.email.message === "string" ? (
                      <Fragment>{combinedErrors.email.message}</Fragment>
                    ) : (
                      <Fragment>Invalid input</Fragment>
                    )}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  autoComplete="new-password"
                  placeholder="Password"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$"
                  maxLength={SIGNUP_MAX_PASSWORD_LENGTH}
                  minLength={SIGNUP_MIN_PASSWORD_LENGTH}
                  aria-errormessage="passwordError"
                  className="w-full bg-gray-300 text-black size-12 border px-4 rounded"
                  required
                  {...register("password")}
                />
                {combinedErrors.password && (
                  <p id="fullNameError" className="text-red-500 text-sm mt-1">
                    {Array.isArray(combinedErrors.password) ? (
                      <Fragment>{combinedErrors.password[0]}</Fragment>
                    ) : typeof combinedErrors.password.message === "string" ? (
                      <Fragment>{combinedErrors.password.message}</Fragment>
                    ) : (
                      <Fragment>Invalid input</Fragment>
                    )}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  autoComplete="new-password"
                  placeholder="Confirm Password"
                  maxLength={SIGNUP_MAX_PASSWORD_LENGTH}
                  minLength={SIGNUP_MIN_PASSWORD_LENGTH}
                  aria-errormessage="confirmPasswordError"
                  className="w-full bg-gray-300 text-black size-12 border px-4 rounded"
                  required
                  {...register("confirmPassword")}
                />
                {combinedErrors.confirmPassword && (
                  <p id="fullNameError" className="text-red-500 text-sm mt-1">
                    {Array.isArray(combinedErrors.confirmPassword) ? (
                      <Fragment>{combinedErrors.confirmPassword[0]}</Fragment>
                    ) : typeof combinedErrors.confirmPassword.message ===
                      "string" ? (
                      <Fragment>
                        {combinedErrors.confirmPassword.message}
                      </Fragment>
                    ) : (
                      <Fragment>Invalid input</Fragment>
                    )}
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
