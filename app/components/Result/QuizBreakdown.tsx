"use client";
import * as React from "react";
import { ScoreCard } from "./ScoreCard";
import { QuestionCard } from './QuestionCard';

const scoreData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/8d98e2c0e424ded1964d46a95fdaf75fb111c34ba8fee7f10eca99499dcb19e1?apiKey=415d78a55fd94a108248afe5c238a8ae&",
    label: "Total Score",
    value: "85%"
  },
  {
    label: "Questions Answered",
    value: "20 / 25"
  }
];

const questionsData = [
  {
    questionNumber: 1,
    questionText: "What is the capital of France?",
    options: [
      { label: "A", text: "Paris", isSelected: true, isCorrect: true },
      { label: "B", text: "Rome" },
      { label: "C", text: "London" },
      { label: "D", text: "New York" }
    ],
    correctAnswer: "Option A: Paris",
    explanation: "Paris is the capital of France and one of its most populous cities. It has been the center of French culture, politics, and history for centuries. Known as the \"City of Light,\" Paris is famous for landmarks like the Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral."
  },
  {
    questionNumber: 2,
    questionText: "What is the capital of France?",
    options: [
      { label: "A", text: "Paris" },
      { label: "B", text: "Rome", isSelected: true },
      { label: "C", text: "London" },
      { label: "D", text: "New York" }
    ],
    correctAnswer: "Option A: Paris",
    explanation: ""
  }
];

export default function QuizBreakdown() {
  return (
    <main className="flex relative flex-col pt-20 text-white bg-indigo-950">
      <header className="flex overflow-hidden absolute inset-x-0 top-0 z-0 flex-wrap gap-5 justify-center items-center p-5 w-full h-20 bg-indigo-950 min-h-[80px] shadow-[0px_0px_6px_rgba(0,0,0,0.12)] max-md:max-w-full">
        <div className="flex shrink-0 self-stretch my-auto w-10 h-10 bg-white rounded-[100px]" />
        <h1 className="flex-1 shrink self-stretch my-auto text-2xl font-bold basis-0 max-md:max-w-full">
          Quiz Breakdown
        </h1>
        <nav className="gap-10 self-stretch my-auto text-base whitespace-nowrap bg-indigo-950">
          Dashboard
        </nav>
      </header>

      <section className="flex overflow-hidden z-0 gap-10 justify-center items-center px-44 py-16 w-full text-5xl font-bold leading-none text-center bg-indigo-950 max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <h2 className="flex-1 shrink self-stretch my-auto w-full min-w-[240px] max-md:max-w-full max-md:text-4xl">
          Quiz Results
        </h2>
      </section>

      <section className="flex overflow-hidden z-0 flex-col justify-center px-44 py-12 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center w-full text-2xl font-bold leading-none max-md:max-w-full">
          <div className="flex flex-wrap gap-8 w-full max-md:max-w-full">
            {scoreData.map((score, index) => (
              <ScoreCard key={index} {...score} />
            ))}
          </div>
        </div>

        <div className="flex flex-col mt-12 w-full text-base min-h-[440px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col flex-1 p-5 w-full rounded-md border border-white border-solid max-md:max-w-full">
            <h3 className="text-xl font-bold leading-snug max-md:max-w-full">
              Score Distribution
            </h3>
            <div className="mt-3 max-md:max-w-full">Number of Questions</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/a3da2e6514d888f0b2b46387369875deea22536636c8d91446ad05efda5b4aa9?apiKey=415d78a55fd94a108248afe5c238a8ae&"
              alt="Score distribution graph"
              width={1100}
              height={440}
              className="object-contain flex-1 mt-3 w-full aspect-[3.68] max-md:max-w-full"
            />
            <div className="mt-3 text-right max-md:max-w-full">Score</div>
          </div>
        </div>
      </section>

      <section className="flex overflow-hidden z-0 flex-col justify-center self-center px-44 py-16 w-full bg-indigo-950 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h2 className="text-4xl font-bold leading-none max-md:max-w-full">
            Question Breakdown
          </h2>
          <p className="mt-6 text-base max-md:max-w-full">
            Review how you answered each question.
          </p>
        </div>
        
        {questionsData.map((question, index) => (
          <QuestionCard key={index} {...question} />
        ))}
      </section>

      <footer className="flex overflow-hidden z-0 gap-10 justify-center items-center px-44 py-16 w-full text-base font-medium text-black bg-indigo-950 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink items-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
          <button className="px-3 py-4 w-60 max-w-full bg-sky-300 rounded-lg min-h-[55px]">
            Return to Dashboard
          </button>
        </div>
      </footer>

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/c46f15e2bae0bc557f66810f74596af16de7ab825444e19f3b5f44f86fd894dd?apiKey=415d78a55fd94a108248afe5c238a8ae&"
        alt=""
        width={40}
        height={40}
        className="object-contain z-0 self-center w-full aspect-[5.41] max-md:max-w-full"
      />
    </main>
  );
}