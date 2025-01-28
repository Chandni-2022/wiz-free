"use client";
import * as React from 'react';
import { QuizCardProps } from './types';


export const QuizCard: React.FC<QuizCardProps> = ({
  title,
  description,
  // iconSrc,
  isHighlighted
}) => {
  return (
    <div className="flex flex-col grow shrink justify-center items-center self-stretch p-5 my-auto bg-white rounded-lg min-w-[240px] w-[200px]">
      <div className="flex flex-col max-w-full w-[210px]">
        <div className="flex flex-col justify-center items-center px-5 py-6 bg-indigo-300 rounded-lg max-md:px-5">
          <div className="flex shrink-0 bg-white h-[100px] rounded-[50px] w-[100px]" role="img" aria-label={`${title} icon`} />
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
        <span className="py-2 pr-2.5 pl-2.5 w-full bg-indigo-300 rounded-lg min-h-[40px]">Take Test</span>
      </button>
      {isHighlighted && (
        <div className="flex absolute top-2/4 z-0 gap-1.5 items-start self-start py-1.5 rounded-2xl -translate-y-2/4 bg-violet-400 bg-opacity-50 h-[30px] min-h-[30px] right-[5px] translate-x-[0%] w-[30px]" />
      )}
    </div>
  );
};