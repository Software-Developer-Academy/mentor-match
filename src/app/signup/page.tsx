"use client";

import { GradButton } from "@/components/ui/grad-button";
import SignUpImage from "@/components/ui/signup-image";
import { signupUser } from "@/lib/User/actions";
import {
  SIGNUP_MAX_EMAIL_LENGTH,
  SIGNUP_MAX_NAME_LENGTH,
  SIGNUP_MAX_PASSWORD_LENGTH,
  SIGNUP_MIN_NAME_LENGTH,
  SIGNUP_MIN_PASSWORD_LENGTH,
} from "@/lib/User/validations";
import Image from "next/image";
import { Fragment } from "react";
import { useFormState } from "react-dom";

const SignUp = () => {
  const [state, formAction] = useFormState(signupUser, undefined);

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
            <form action={formAction} className="w-full">
              <div className="mb-4">
                <input
                  autoFocus
                  autoComplete="given-name"
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  maxLength={SIGNUP_MAX_NAME_LENGTH}
                  minLength={SIGNUP_MIN_NAME_LENGTH}
                  aria-errormessage="fullNameError"
                  className="w-full bg-gray-300 text-black size-12 border px-4 rounded"
                  required
                />
                {state && state.fullName && (
                  <p id="fullNameError" className="text-red-500 text-sm mt-1">
                    {state.fullName && <Fragment>{state.fullName[0]}</Fragment>}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email"
                  maxLength={SIGNUP_MAX_EMAIL_LENGTH}
                  aria-errormessage="emailError"
                  className="w-full bg-gray-300 text-black size-12 border px-4 rounded"
                  required
                />
                {state && state.email && (
                  <p id="emailError" className="text-red-500 text-sm mt-1">
                    {state.email && <Fragment>{state.email[0]}</Fragment>}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  placeholder="Password"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$"
                  maxLength={SIGNUP_MAX_PASSWORD_LENGTH}
                  minLength={SIGNUP_MIN_PASSWORD_LENGTH}
                  aria-errormessage="passwordError"
                  className="w-full bg-gray-300 text-black size-12 border px-4 rounded"
                  required
                />
                {state && state.password && (
                  <p id="passwordError" className="text-red-500 text-sm mt-1">
                    {state.password && <Fragment>{state.password[0]}</Fragment>}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  name="confirmPassword"
                  autoComplete="new-password"
                  placeholder="Confirm Password"
                  maxLength={SIGNUP_MAX_PASSWORD_LENGTH}
                  minLength={SIGNUP_MIN_PASSWORD_LENGTH}
                  aria-errormessage="confirmPasswordError"
                  className="w-full bg-gray-300 text-black size-12 border px-4 rounded"
                  required
                />
                {state && state.confirmPassword && (
                  <p
                    id="confirmPasswordError"
                    className="text-red-500 text-sm mt-1"
                  >
                    {state.confirmPassword && (
                      <Fragment>{state.confirmPassword[0]}</Fragment>
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
