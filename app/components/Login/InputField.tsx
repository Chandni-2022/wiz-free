// "use client";
// import * as React from 'react';
// import { InputFieldProps } from './types';

// export const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder, id }) => {
//   return (
//     <div className="flex overflow-hidden flex-col flex-1 shrink justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
//       <label htmlFor={id} className="text-base font-medium leading-none text-white max-md:max-w-full">
//         {label}
//       </label>
//       <input
//         type={type}
//         id={id}
//         placeholder={placeholder}
//         aria-label={label}
//         className="flex-1 shrink gap-1 self-stretch px-3 py-2 mt-1.5 w-full text-sm leading-none bg-white rounded-md border border-white border-solid text-black text-opacity-50 max-md:max-w-full"
//       />
//     </div>
//   );
// }


// "use client";
// import * as React from "react";
// import { InputFieldProps } from "./types";

// export const InputField: React.FC<InputFieldProps> = ({
//   label,
//   type,
//   placeholder,
//   id,
// }) => {
//   return (
//     <div className="flex flex-col w-full max-w-full">
//       <label
//         htmlFor={id}
//         className="text-base font-medium leading-none text-white mb-2"
//       >
//         {label}
//       </label>
//       <input
//         type={type}
//         id={id}
//         placeholder={placeholder}
//         aria-label={label}
//         className="px-4 py-2 mt-1.5 w-full text-sm leading-none bg-white rounded-md border border-solid border-white text-black placeholder:text-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//       />
//     </div>
//   );
// };


// import * as React from 'react';
// import { InputFieldProps } from './types';

// export const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder, id }) => {
//   return (
//     <div className="flex overflow-hidden flex-col flex-1 justify-center w-full basis-0  min-w-[20vw] max-md:max-w-full">
//       <label htmlFor={id} className="text-base font-medium leading-none text-white max-md:max-w-full">
//         {label}
//       </label>
//       <input
//         type={type}
//         id={id}
//         placeholder={placeholder}
//         className="flex-1 self-stretch px-3 py-2 w-full text-sm leading-none bg-white rounded-md border border-white border-solid text-black text-opacity-50 max-md:max-w-full"
//         aria-label={label}
//       />
//     </div>
//   );
// };

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
