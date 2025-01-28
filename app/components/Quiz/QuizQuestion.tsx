"use client";
import * as React from "react";
import { QuizOption } from "./QuizOption";
import { QuizNavigation } from "./QuizNavigation";
import type { QuizQuestion as QuizQuestionType } from "./types";

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswerSelect: (value: string) => void;
  onNext: () => void;
  onFinish: () => void;
  showTimeUp?: boolean;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  onAnswerSelect,
  onNext,
  onFinish,
  showTimeUp
}) => {
  return (
    <div className="flex overflow-hidden flex-wrap gap-5 justify-center items-center self-center px-12 py-2.5 w-full bg-indigo-950 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col grow shrink self-stretch my-auto text-white min-h-[363px] min-w-[240px] w-[395px] max-md:max-w-full">
        <h2 className="text-4xl font-bold leading-none">Question {question.questionNumber}</h2>
        <p className="mt-6 text-xl leading-tight">{question.questionText}</p>
      </div>
      <div className="flex flex-col grow shrink justify-center self-stretch py-7 my-auto text-base font-medium leading-loose text-white min-h-[403px] min-w-[240px] w-[421px] max-md:max-w-full">
        {question.options.map((option) => (
          <QuizOption
            key={option.id}
            text={option.text}
            value={option.value}
            name={`question-${question.id}`}
            onChange={onAnswerSelect}
          />
        ))}
      </div>
      <QuizNavigation 
        onNext={onNext}
        onFinish={onFinish}
        showTimeUp={showTimeUp}
      />
    </div>
  );
};