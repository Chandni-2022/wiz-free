"use client";
import * as React from 'react';
import { QuizCardProps } from './types';


// export const QuizCard: React.FC<QuizCardProps> = ({
//   title,
//   description,
//   // iconSrc,
//   isHighlighted
// }) => {
//   return (
//     <div className="flex flex-col grow shrink justify-center items-center self-stretch p-5 my-auto bg-white rounded-lg min-w-[240px] w-[200px]">
//       <div className="flex flex-col max-w-full w-[210px]">
//         <div className="flex flex-col justify-center items-center px-5 py-6 bg-indigo-300 rounded-lg max-md:px-5">
//           <div className="flex shrink-0 bg-white h-[100px] rounded-[50px] w-[100px]" role="img" aria-label={`${title} icon`} />
//         </div>
//       </div>
//       <div className="flex flex-col items-center mt-1.5 max-w-full text-center min-h-[52px] w-[210px]">
//         <h3 className="text-xl leading-none text-black">{title}</h3>
//         <p className="text-base leading-loose text-black text-opacity-50">{description}</p>
//       </div>

//       <button
//         className="flex overflow-hidden flex-col justify-center items-center mt-1.5 w-20 text-sm font-medium leading-6 text-black"
//         aria-label={`Take ${title} test`}
//       >
//         <span className="py-2 pr-2.5 pl-2.5 w-full bg-indigo-300 rounded-lg min-h-[40px]">Take Test</span>
//       </button>

//     </div>
//   );
// };


export const QuizCard: React.FC<QuizCardProps> = ({
  title,
  description,
  isHighlighted,
}) => {
  return (
    <div className="relative flex flex-col grow shrink justify-center items-center self-stretch p-5 my-auto bg-white rounded-lg min-w-[240px] w-[200px]">
      <div className="flex flex-col max-w-full w-[210px] relative">
        <div className="flex flex-col justify-center items-center px-5 py-6 bg-indigo-300 rounded-lg max-md:px-5 relative">
          {/* Highlighted Badge */}
          {isHighlighted && (
            <div className="absolute -top-3 -right-3 z-10 flex items-center justify-center h-[30px] w-[30px] bg-violet-400 bg-opacity-50 rounded-full shadow-md">
            <img
              src="/svg/heart.svg"
              alt="Heart"
              className="h-[20px] w-[20px]"
            />
          </div>
          
          )}
          {/* Icon Placeholder */}
          <div
            className="flex shrink-0 bg-white h-[100px] rounded-full w-[100px]"
            role="img"
            aria-label={`${title} icon`}
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-1.5 max-w-full text-center min-h-[52px] w-[210px]">
        <h3 className="text-xl leading-none text-black">{title}</h3>
        <p className="text-base leading-loose text-black text-opacity-50">{description}</p>
      </div>

      <button
        className="flex overflow-hidden flex-col justify-center items-center mt-1.5 w-20 text-sm font-medium leading-6 text-black"
        aria-label={`Take ${title} test`}
      >
        <span className="py-2 pr-2.5 pl-2.5 w-full bg-indigo-300 rounded-lg min-h-[40px]">
          Take Test
        </span>
      </button>
    </div>
  );
};
