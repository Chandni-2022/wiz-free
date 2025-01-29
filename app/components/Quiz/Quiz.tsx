// "use client";
// import * as React from "react";
// import { QuizQuestion } from "./QuizQuestion";
// import type { QuizQuestion as QuizQuestionType } from "./types";

// interface QuizProps {
//   topicName: string;
//   questions: QuizQuestionType[];
// }

// export const Quiz: React.FC<QuizProps> = ({ topicName, questions }) => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
//   const [selectedAnswers, setSelectedAnswers] = React.useState<Record<string, string>>({});

//   const handleAnswerSelect = (value: string) => {
//     setSelectedAnswers(prev => ({
//       ...prev,
//       [questions[currentQuestionIndex].id]: value
//     }));
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(prev => prev + 1);
//     }
//   };

//   const handleFinish = () => {
//     console.log("Quiz finished", selectedAnswers);
//   };

//   return (
//     <main className="flex flex-col bg-indigo-950">
//       <header className="flex overflow-hidden gap-10 justify-center items-center px-44 py-14 w-full text-5xl font-bold leading-none text-center text-white min-h-[156px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
//         <h1 className="flex-1 shrink self-stretch my-auto w-full min-w-[240px] max-md:max-w-full max-md:text-4xl">
//           {topicName}
//         </h1>
//       </header>
//       <QuizQuestion
//         question={questions[currentQuestionIndex]}
//         onAnswerSelect={handleAnswerSelect}
//         onNext={handleNext}
//         onFinish={handleFinish}
//         showTimeUp={false}
//       />
//     </main>
//   );
// };

// "use client";
// import * as React from "react";
// import { useRouter } from "next/navigation";
// import { QuizQuestion } from "./QuizQuestion";
// import type { QuizQuestion as QuizQuestionType } from "./types";

// interface QuizProps {
//   topicName: string;
//   questions: QuizQuestionType[];
// }

// export const Quiz: React.FC<QuizProps> = ({ topicName, questions }) => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
//   const [selectedAnswers, setSelectedAnswers] = React.useState<Record<string, string>>({});
//   const [timeLeft, setTimeLeft] = React.useState(30); // Timer for each question (30 seconds)
//   const [showTimeUp, setShowTimeUp] = React.useState(false);
//   const router = useRouter(); // To navigate to the scorecard

//   React.useEffect(() => {
//     // Reset timer when the question changes
//     setTimeLeft(30);
//     setShowTimeUp(false);

//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev <= 1) {
//           clearInterval(timer);
//           setShowTimeUp(true);
//           handleNext();
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [currentQuestionIndex]);

//   const handleAnswerSelect = (value: string) => {
//     setSelectedAnswers((prev) => ({
//       ...prev,
//       [questions[currentQuestionIndex].id]: value,
//     }));
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//     }
//   };

//   const handleFinish = () => {
//     console.log("Quiz finished", selectedAnswers);
//     // Navigate to the scorecard page with results
//     router.push("/components/Result");
//   };

//   return (
//     <main className="flex flex-col bg-indigo-950">
//       {/* Header */}
//       <header className="flex overflow-hidden gap-10 justify-center items-center px-44 py-14 w-full text-5xl font-bold leading-none text-center text-white min-h-[156px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
//         <h1 className="flex-1 shrink self-stretch my-auto w-full min-w-[240px] max-md:max-w-full max-md:text-4xl">
//           {topicName}
//         </h1>
//       </header>

//       {/* Timer */}
//       <div className="text-2xl text-white text-center mb-4">
//         Time left: {timeLeft} seconds
//       </div>

//       {/* Current Question */}
//       <QuizQuestion
//         question={questions[currentQuestionIndex]}
//         onAnswerSelect={handleAnswerSelect}
//         onNext={handleNext}
//         onFinish={handleFinish}
//         showTimeUp={showTimeUp}
//       />

//       {/* Finish Button */}
//       {currentQuestionIndex === questions.length - 1 && (
//         <div className="flex justify-center mt-6">
//           <button
//             onClick={handleFinish}
//             className="px-4 py-2 bg-sky-500 text-white font-bold rounded-lg"
//           >
//             Finish Quiz
//           </button>
//         </div>
//       )}
//     </main>
//   );
// };

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
  const [showTimeUp, setShowTimeUp] = React.useState(false);
  const timerDuration = 30; // 30 seconds per question
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questions[currentQuestionIndex].id]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      resetTimer();
    }
  };

  const handleFinish = () => {
    console.log("Quiz finished", selectedAnswers);
    // Navigate to the results page or show scoreCard
    window.location.href = "/components/Result";
  };

  const startTimer = () => {
    setShowTimeUp(false);
    timerRef.current = setTimeout(() => {
      setShowTimeUp(true);
      handleNext();
    }, timerDuration * 1000);
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    startTimer();
  };

  React.useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentQuestionIndex]);

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
        showTimeUp={showTimeUp}
        
      />
    </main>
  );
};
