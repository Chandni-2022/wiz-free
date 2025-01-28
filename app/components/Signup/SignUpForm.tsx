// "use client";
import * as React from "react";
import { InputField } from "./InputField";
import Link from "next/link";

export const SignUpForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const formFields = [
    { id: "name", label: "Name", placeholder: "Enter your name" },
    { id: "email", label: "Email", placeholder: "Enter your email", type: "email" },
    { id: "password", label: "Password", placeholder: "Enter your password", type: "password" },
    { id: "confirmPassword", label: "Confirm Password", placeholder: "Confirm your password", type: "password" }
  ];

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center self-end mt-16 w-full max-w-[520px] max-md:mt-10 max-md:max-w-full">
      {formFields.map((field, index) => (
        <div key={field.id} className={`flex gap-10 items-start w-full ${index > 0 ? 'mt-8' : ''} max-md:max-w-full`}>
          <InputField {...field} />
        </div>
      ))}
      <Link href="/login">
      <button 
        type="submit"
        className="px-3 py-4 mt-8 w-60 max-w-full text-base font-medium text-black whitespace-nowrap bg-sky-300 rounded-lg min-h-[55px]"
      >
        Sign-Up
      </button>
      </Link>
    </form>
  );
};

