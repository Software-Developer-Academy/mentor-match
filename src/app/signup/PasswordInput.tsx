


import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface PasswordInputProps {
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  error?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  placeholder,
  register,
  name,
  error,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Update the form state using react-hook-form register
    register(name).onChange(value);

    // Show the password temporarily and then hide it again
    setShowPassword(true);
    setTimeout(() => {
      setShowPassword(false);
    }, 500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="mb-4 relative">
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          className="w-full bg-gray-300 text-black size-12 placeholder:text-black border px-4 rounded"
        />
        {/* Password visibility toggle button */}
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center px-4 focus:outline-none"
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.18 19a10 10 0 01-14.36 0m14.36 0a10 10 0 10-14.36 0"
              />
            </svg>
          )}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PasswordInput;
