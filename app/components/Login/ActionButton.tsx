// "use client";
// import * as React from 'react';
// import { ActionButtonProps } from './types';


// export const ActionButton: React.FC<ActionButtonProps> = ({ text, variant, onClick }) => {
//   const baseClasses = "px-3 py-4 w-60 min-h-[55px]";
//   const variantClasses = variant === 'primary' 
//     ? "text-black bg-sky-300 rounded-lg"
//     : "text-white rounded-lg border border-white border-solid";

//   return (
//     <button
//       onClick={onClick}
//       className={`${baseClasses} ${variantClasses}`}
//       aria-label={text}
//     >
//       {text}
//     </button>
//   );
// }


"use client";

import * as React from "react";
import { ActionButtonProps } from "./types";

export const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  variant,
  onClick,
}) => {
  const baseClasses = "px-3 py-4 w-60 min-h-[55px]";
  const variantClasses =
    variant === "primary"
      ? "text-black bg-sky-300 rounded-lg"
      : "text-white rounded-lg border border-white border-solid";

  return (
    <button
      onClick={onClick} // Handle click events
      className={`${baseClasses} ${variantClasses}`}
      aria-label={text}
    >
      {text}
    </button>
  );
};
