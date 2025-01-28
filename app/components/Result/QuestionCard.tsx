"use client";
import * as React from "react";
import { QuestionProps } from "./types";
import Image from "next/image";

export const QuestionCard: React.FC<QuestionProps> = ({
  questionNumber,
  questionText,
  options,
  correctAnswer,
  explanation
}) => (
  <div className="flex flex-col justify-center w-full max-md:max-w-full">
    <div className="flex gap-10 items-start w-full max-md:max-w-full">
      <div className="flex flex-1 shrink gap-4 justify-center items-center py-2.5 w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex-1 shrink gap-2 self-stretch py-1.5 w-full text-xl leading-snug max-md:max-w-full">
              Question {questionNumber}
            </div>
            <div className="flex-1 shrink gap-2 self-stretch py-1.5 w-full text-base max-md:max-w-full">
              {questionText}
            </div>
          </div>
          <div className="flex flex-col justify-center mt-1.5 w-full text-base bg-indigo-950 max-md:max-w-full">
            {options.map((option, index) => (
              <div key={index} className="flex gap-10 items-center mt-1.5 w-full leading-7 max-md:max-w-full">
                <div className="flex overflow-hidden flex-wrap gap-4 items-center self-stretch px-2.5 my-auto min-h-[35px] min-w-[240px] w-[1070px]">
                  <div className="self-stretch my-auto">{option.label}: {option.text}</div>
                  {option.isSelected && (
                    <Image
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/7f09e7d6b9e1f566d216b34a32ac53fedca4b489404d9ee22098d4ca6ffc9725?apiKey=415d78a55fd94a108248afe5c238a8ae&"
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[25px]"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          {explanation && (
            <div className="flex flex-col justify-center py-2.5 mt-1.5 w-full text-base leading-7 max-md:max-w-full">
              <div className="flex gap-10 items-center w-full max-md:max-w-full">
                <div className="flex-1 shrink self-stretch my-auto w-full min-w-[240px] max-md:max-w-full">
                  <span className="font-medium">Correct Answer:</span> {correctAnswer}
                  <br />
                  <span className="font-medium">Explanation:</span> {explanation}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);