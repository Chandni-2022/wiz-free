// "use client";
// import * as React from "react";

// interface QuizOptionProps {
//   text: string;
//   value: string;
//   name: string;
//   onChange: (value: string) => void;
// }

// export const QuizOption: React.FC<QuizOptionProps> = ({ text, value, name, onChange }) => {
//   return (
//     <div className="flex gap-10 items-center w-full max-md:max-w-full">
//       <label className="flex flex-1 shrink gap-4 justify-center items-start self-stretch p-4 my-auto w-full rounded-md border border-white border-solid basis-0 min-w-[240px] max-md:max-w-full">
//         <div className="flex overflow-hidden flex-wrap gap-4 items-center px-2.5 py-1.5 min-w-[240px] w-[485px]">
//           <input
//             type="radio"
//             name={name}
//             value={value}
//             onChange={() => onChange(value)}
//             className="flex shrink-0 self-stretch my-auto bg-white rounded-sm border border-solid border-stone-300 h-[30px] w-[30px]"
//           />
//           <span className="flex-1 shrink self-stretch my-auto basis-0">
//             {text}
//           </span>
//         </div>
//       </label>
//     </div>
//   );
// };


"use client";
import * as React from "react";

interface QuizOptionProps {
  text: string;
  value: string;
  name: string;
  onChange: (value: string) => void;
}

export const QuizOption: React.FC<QuizOptionProps> = ({ text, value, name, onChange }) => {
  return (
    <div className="flex gap-10 items-center w-full max-md:max-w-full">
    <label className="flex flex-1 shrink gap-4 justify-center items-start self-stretch p-4 my-auto w-full rounded-md border border-white border-solid basis-0 min-w-[240px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-wrap gap-4 items-center px-1 py-1.5 min-w-[240px] w-[485px]">
        <div className="h-[30px] w-[30px]">
          <input
            type="radio"
            name={name}
            value={value}
            onChange={() => onChange(value)}
            className="appearance-none h-full w-full bg-white border-2 border-black rounded-[2px] cursor-pointer checked:bg-sky-300"
          />
        </div>
        <span className="flex-1 shrink self-stretch my-auto basis-0">
          {text}
        </span>
      </div>
    </label>
  </div>
  
  );
};
