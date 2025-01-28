"use client";
import * as React from "react";


interface QuizNavigationProps {
  onNext: () => void;
  onFinish: () => void;
  showTimeUp?: boolean;
}

export const QuizNavigation: React.FC<QuizNavigationProps> = ({ onNext, onFinish, showTimeUp }) => {
  return (
    <div className="flex flex-wrap grow shrink items-center self-stretch pb-8 my-auto min-w-[240px] w-[963px] max-md:max-w-full">
      <div className="flex overflow-hidden grow shrink gap-2 items-center self-stretch px-1.5 py-1 my-auto w-10 min-h-[50px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/c80a8bd71b399363a8d967952fd589f61038a2a24af88b5e8c0e239d98136de1?apiKey=415d78a55fd94a108248afe5c238a8ae&"
          className="object-contain self-stretch my-auto aspect-[0.88] w-[38px]"
          alt=""
          width={50}
          height={50}
        />
      </div>
      <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[510px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start w-full text-base font-medium max-md:max-w-full">
          <button
            onClick={onNext}
            className="flex overflow-hidden flex-col grow shrink text-black whitespace-nowrap min-h-[55px] w-[152px]"
          >
            <div className="px-3 py-4 max-w-full bg-sky-300 rounded-lg min-h-[55px] w-[190px]">
              Next
            </div>
          </button>
          <button
            onClick={onFinish}
            className="flex overflow-hidden flex-col grow shrink text-white min-h-[55px] w-[152px]"
          >
            <div className="px-3 py-4 max-w-full rounded-lg border border-white border-solid min-h-[55px] w-[190px]">
              Finish Text
            </div>
          </button>
        </div>
        {showTimeUp && (
          <div className="gap-2 self-stretch p-2 mt-5 w-full text-2xl font-bold leading-10 text-white max-md:max-w-full">
            Time is up! Moving to the next question
          </div>
        )}
      </div>
    </div>
  );
};