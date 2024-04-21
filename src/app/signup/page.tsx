"use client";

import { GradButton } from "@/components/ui/grad-button";
import SignUpImage from "@/svgs/signup-image";
import { signupUser } from "@/lib/User/actions";
import { signUpSchema } from "@/lib/User/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRef } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

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
              onSubmit={handleSubmit(async () => {
                const errors = await signupUser(new FormData(formRef.current!));
                if (errors && Array.isArray(errors)) {
                  for (const error of errors) {
                    setError(error.path[0] as string, error);
                  }
                }
              })}
              className="w-full"
              noValidate
            >
              <div className="mb-4">
                <input
                  autoFocus
                  autoComplete="name"
                  type="text"
                  placeholder="Full Name"
                  aria-errormessage="fullNameError"
                  className="w-full bg-gray-300 text-black size-12 border px-4 rounded"
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <p id="fullNameError" className="text-red-500 text-sm mt-1">
                    {Array.isArray(errors.fullName) ? (
                      <>{errors.fullName[0]}</>
                    ) : typeof errors.fullName.message === "string" ? (
                      <>{errors.fullName.message}</>
                    ) : (
                      <>Invalid input</>
                    )}
                  </p>
                )}
              </div>
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
              <div className="mb-4">
                <input
                  type="password"
                  autoComplete="new-password"
                  placeholder="Confirm Password"
                  aria-errormessage="confirmPasswordError"
                  className="w-full bg-gray-300 text-black size-12 border px-4 rounded"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p
                    id="confirmPasswordError"
                    className="text-red-500 text-sm mt-1"
                  >
                    {Array.isArray(errors.confirmPassword) ? (
                      <>{errors.confirmPassword[0]}</>
                    ) : typeof errors.confirmPassword.message === "string" ? (
                      <>{errors.confirmPassword.message}</>
                    ) : (
                      <>Invalid input</>
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
