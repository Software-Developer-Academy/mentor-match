"use client";

import Image from "next/image";
import { GradButton } from "@/components/ui/grad-button";
import SignUpImage from "@/components/ui/signup-image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signupUser } from "@/lib/User/actions";
import { signUpSchema } from "@/lib/User/validations";

import { useState } from 'react';
const SignUp = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setShowPassword(true);

    // Hide the password after 500 milliseconds
    setTimeout(() => {
      setShowPassword(false);
    }, 500);
  };
  const {
    register,
    handleSubmit,
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
              // @ts-expect-error Type mismatch
              onSubmit={handleSubmit((data) => signupUser(data))}
              className="w-full"
            >
              <div className="mb-4">
                <input
                  autoFocus
                  type="text"
                  placeholder="Full Name"
                  maxLength={200}
                  className="w-full bg-gray-300 text-black size-12 placeholder:text-black border px-4 rounded"
                  required
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
                  placeholder="Email"
                  maxLength={200}
                  className="w-full bg-gray-300 text-black size-12 placeholder:text-black border px-4 rounded"
                  required
                  {...register("email")}
                />
                {errors.email?.message &&
                  typeof errors.email.message === "string" && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
              </div>
              <div className="mb-4">
                <input
                     type={showPassword ? 'text' : 'password'}
                     placeholder="Password"
                     value={password}
                     onChange={handlePasswordChange}
                  maxLength={64}
                  className="w-full bg-gray-300 text-black size-12 placeholder:text-black border px-4 rounded"
                  required
                  // {...register("password")}
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
                  placeholder="Confirm Password"
                  maxLength={64}
                  className="w-full bg-gray-300 text-black size-12 placeholder:text-black border px-4 rounded"
                  required
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