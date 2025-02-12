import * as React from 'react';
import { InputFieldProps } from './types';

export const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder, id }) => {
  return (
    <div className="flex flex-col w-full max-w-[40rem] min-w-[20vw] max-md:max-w-full">
      <label htmlFor={id} className="text-base font-medium leading-none text-white mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="px-4 py-3 mt-1.5 w-full text-sm sm:text-base leading-none bg-white rounded-md border border-solid border-white text-black placeholder:text-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        aria-label={label}
      />
    </div>
  );
};
