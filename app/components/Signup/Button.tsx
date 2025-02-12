import * as React from 'react';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
  const baseStyles = "px-3 py-4 w-60 text-base font-medium rounded-lg cursor-pointer min-h-[55px] max-md:w-full";
  const variantStyles = {
    primary: "text-black bg-sky-300 border-[none]",
    secondary: "text-white border border-white border-solid"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
      type="button"
    >
      {children}
    </button>
  );
};