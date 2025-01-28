"use client";
import * as React from "react";
import { QuizQuestion } from "./QuizQuestion";
import type { QuizQuestion as QuizQuestionType } from "./types";

interface QuizProps {
  topicName: string;
  questions: QuizQuestionType[];
}

export const Quiz: React.FC<QuizProps> = ({ topicName, questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [selectedAnswers, setSelectedAnswers] = React.useState<Record<string, string>>({});

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questions[currentQuestionIndex].id]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handleFinish = () => {
    console.log("Quiz finished", selectedAnswers);
  };

  return (
    <main className="flex flex-col bg-indigo-950">
      <header className="flex overflow-hidden gap-10 justify-center items-center px-44 py-14 w-full text-5xl font-bold leading-none text-center text-white min-h-[156px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <h1 className="flex-1 shrink self-stretch my-auto w-full min-w-[240px] max-md:max-w-full max-md:text-4xl">
          {topicName}
        </h1>
      </header>
      <QuizQuestion
        question={questions[currentQuestionIndex]}
        onAnswerSelect={handleAnswerSelect}
        onNext={handleNext}
        onFinish={handleFinish}
        showTimeUp={false}
      />
    </main>
  );
};