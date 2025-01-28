"use client";
import * as React from 'react';
import { InputFieldProps } from './types';

export const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder, id }) => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
      <label htmlFor={id} className="text-base font-medium leading-none text-white max-md:max-w-full">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        aria-label={label}
        className="flex-1 shrink gap-1 self-stretch px-3 py-2 mt-1.5 w-full text-sm leading-none bg-white rounded-md border border-white border-solid text-black text-opacity-50 max-md:max-w-full"
      />
    </div>
  );
}