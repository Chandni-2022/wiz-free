// // "use client";
// // import * as React from "react";
// // import { QuizOption } from "./QuizOption";
// // import { QuizNavigation } from "./QuizNavigation";
// // import type { QuizQuestion as QuizQuestionType } from "./types";

// // interface QuizQuestionProps {
// //   question: QuizQuestionType;
// //   onAnswerSelect: (value: string) => void;
// //   onNext: () => void;
// //   onFinish: () => void;
// //   showTimeUp?: boolean;
// // }

// // export const QuizQuestion: React.FC<QuizQuestionProps> = ({
// //   question,
// //   onAnswerSelect,
// //   onNext,
// //   onFinish,
// //   showTimeUp
// // }) => {
// //   return (
// //     <div className="flex overflow-hidden flex-wrap gap-5  items-center self-center px-[170px] py-[30px] w-full bg-indigo-950 max-md:px-5 max-md:max-w-full">

// //       <div className="flex flex-col grow shrink self-stretch my-auto text-white min-h-[363px] min-w-[240px] w-[395px] max-md:max-w-full">
// //         <h2 className="text-4xl font-bold leading-none">Question {question.questionNumber}</h2>
// //         <p className="mt-6 text-xl leading-tight">{question.questionText}</p>
// //       </div>

// //       <div className="flex gap-[20px] flex-col grow shrink justify-center self-stretch py-7 my-auto text-base font-medium leading-loose text-white min-h-[403px] min-w-[240px] w-[421px] max-md:max-w-full">
// //         {/* <div className="flex overflow-hidden grow shrink gap-2 items-center self-stretch px-1.5 py-1 my-auto w-10 min-h-[50px]">
// //           <img
// //             loading="lazy"
// //             src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/c80a8bd71b399363a8d967952fd589f61038a2a24af88b5e8c0e239d98136de1?apiKey=415d78a55fd94a108248afe5c238a8ae&"
// //             className="object-contain self-stretch my-auto aspect-[0.88] w-[38px]"
// //             alt=""
// //             width={50}
// //             height={50}
// //           />
// //         </div> */}
// //         {question.options.map((option) => (
// //           <QuizOption
// //             key={option.id}
// //             text={option.text}
// //             value={option.value}
// //             name={`question-${question.id}`}
// //             onChange={onAnswerSelect}
// //           />
// //         ))}
// //         <div className="flex flex-col grow shrink justify-between self-stretch my-auto   max-md:max-w-full">
// //           <div className="flex flex-wrap gap-10 items-start w-full text-base font-medium max-md:max-w-full">
// //             <button
// //               onClick={onNext}
// //               className="flex overflow-hidden flex-col grow shrink text-black whitespace-nowrap min-h-[55px] w-[152px]"
// //             >
// //               <div className="px-3 py-4 max-w-full bg-sky-300 rounded-lg min-h-[55px] w-[190px]">
// //                 Next
// //               </div>
// //             </button>
// //             <button
// //               onClick={onFinish}
// //               className="flex overflow-hidden flex-col grow shrink text-white min-h-[55px] w-[152px]"
// //             >
// //               <div className="px-3 py-4 max-w-full rounded-lg border border-white border-solid min-h-[55px] w-[190px]">
// //                 Finish Text
// //               </div>
// //             </button>
// //           </div>
// //           {showTimeUp && (
// //             <div className="gap-2 self-stretch p-2 mt-5 w-full text-2xl font-bold leading-10 text-white max-md:max-w-full">
// //               Time is up! Moving to the next question
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //       <QuizNavigation
// //         onNext={onNext}
// //         onFinish={onFinish}
// //         showTimeUp={showTimeUp}
// //       />

// //     </div>
// //   );
// // };

// "use client";
// import * as React from "react";
// import { QuizOption } from "./QuizOption";
// import type { QuizQuestion as QuizQuestionType } from "./types";

// interface QuizQuestionProps {
//   question: QuizQuestionType;
//   onAnswerSelect: (value: string) => void;
//   onNext: () => void;
//   onFinish: () => void;
//   showTimeUp?: boolean;
// }

// export const QuizQuestion: React.FC<QuizQuestionProps> = ({
//   question,
//   onAnswerSelect,
//   onNext,
//   onFinish,
//   showTimeUp
// }) => {
//   return (
//     <div className="flex overflow-hidden flex-wrap gap-5 items-center self-center px-[170px] py-[30px] w-full bg-indigo-950 max-md:px-5 max-md:max-w-full">
      
//       <div className="flex flex-col grow shrink self-stretch my-auto text-white min-h-[363px] min-w-[240px] w-[395px] max-md:max-w-full">
//         <h2 className="text-4xl font-bold leading-none">Question {question.questionNumber}</h2>
//         <p className="mt-6 text-xl leading-tight">{question.questionText}</p>
        
//       </div>
     
//       <div className="flex gap-[20px] flex-col grow shrink justify-center self-stretch  my-auto text-base font-medium leading-loose text-white min-h-[403px] min-w-[240px] w-[421px] max-md:max-w-full">
//       <div className="flex overflow-hidden grow shrink gap-2 items-center self-stretch px-1.5 py-1 my-auto w-10 min-h-[50px]">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/c80a8bd71b399363a8d967952fd589f61038a2a24af88b5e8c0e239d98136de1?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//             className="object-contain self-stretch my-auto aspect-[0.88] w-[38px]"
//             alt=""
//             width={50}
//             height={50}
//           />
//         </div> 
//         {question.options.map((option) => (
//           <QuizOption
//             key={option.id}
//             text={option.text}
//             value={option.value}
//             name={`question-${question.id}`}
//             onChange={onAnswerSelect}
//           />
//         ))}
        
//         <div className="flex justify-between items-center mt-5 w-full">
//           <button
//             onClick={onNext}
//             className="px-3 py-4 bg-sky-300 rounded-lg text-black min-w-[152px] w-[190px] text-base font-medium"
//           >
//             Next
//           </button>
//           <button
//             onClick={onFinish}
//             className="px-3 py-4 bg-transparent rounded-lg text-white border border-white min-w-[152px] w-[190px] text-base font-medium"
//           >
//             Finish
//           </button>
//         </div>

//         {showTimeUp && (
//           <div className="gap-2 self-stretch p-2 mt-5 w-full text-2xl font-bold leading-10 text-white max-md:max-w-full">
//             Time is up! Moving to the next question
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


// "use client";
// import * as React from "react";
// import { useState, useEffect } from "react";
// import { QuizOption } from "./QuizOption";
// import { useRouter } from "next/navigation";
// import type { QuizQuestion as QuizQuestionType } from "./types";

// interface QuizQuestionProps {
//   question: QuizQuestionType;
//   questionIndex: number;
//   totalQuestions: number;
//   onAnswerSelect: (questionId: string, selectedValue: string) => void;
//   onNext: () => void;
//   onFinish: () => void;
// }

// export const QuizQuestion: React.FC<QuizQuestionProps> = ({
//   question,
//   questionIndex,
//   totalQuestions,
//   onAnswerSelect,
//   onNext,
//   onFinish,
// }) => {
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);
//   const [timeLeft, setTimeLeft] = useState<number>(30); // Timer duration (30 seconds)
//   const router = useRouter();

//   // Handle timer countdown
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     if (timeLeft === 0) {
//       handleNext();
//     }

//     return () => clearInterval(timer);
//   }, [timeLeft]);

//   // Handle option selection
//   const handleOptionSelect = (value: string) => {
//     setSelectedOption(value);
//     onAnswerSelect(question.id, value); // Pass selected answer to parent
//   };

//   // Handle next question navigation
//   const handleNext = () => {
//     setSelectedOption(null); // Reset option selection for the next question
//     setTimeLeft(30); // Reset timer
//     onNext();
//   };

//   // Handle quiz finish
//   const handleFinish = () => {
//     router.push("/components/Result"); // Navigate to the ScoreCard
//     onFinish();
//   };

//   return (
//     <div className="flex overflow-hidden flex-wrap gap-5 items-center self-center px-[170px] py-[30px] w-full bg-indigo-950 max-md:px-5 max-md:max-w-full">
//       {/* Question Text */}
//       <div className="flex flex-col grow shrink self-stretch my-auto text-white min-h-[363px] min-w-[240px] w-[395px] max-md:max-w-full">
//         <h2 className="text-4xl font-bold leading-none">
//           Question {questionIndex + 1} of {totalQuestions}
//         </h2>
//         <p className="mt-6 text-xl leading-tight">{question.questionText}</p>
//         <div className="mt-4 text-lg font-bold">
//           Time Left: {timeLeft} seconds
//         </div>
//       </div>

//       {/* Options */}
//       <div className="flex gap-[20px] flex-col grow shrink justify-center self-stretch my-auto text-base font-medium leading-loose text-white min-h-[403px] min-w-[240px] w-[421px] max-md:max-w-full">
//         {question.options.map((option) => (
//           <QuizOption
//             key={option.id}
//             text={option.text}
//             value={option.value}
//             name={`question-${question.id}`}
//             onChange={handleOptionSelect}
//           />
//         ))}

//         {/* Navigation Buttons */}
//         <div className="flex justify-between items-center mt-5 w-full">
//           {questionIndex < totalQuestions - 1 ? (
//             <button
//               onClick={handleNext}
//               disabled={!selectedOption}
//               className={`px-3 py-4 ${
//                 selectedOption ? "bg-sky-300" : "bg-gray-400"
//               } rounded-lg text-black min-w-[152px] w-[190px] text-base font-medium`}
//             >
//               Next
//             </button>
//           ) : (
//             <button
//               onClick={handleFinish}
//               disabled={!selectedOption}
//               className={`px-3 py-4 ${
//                 selectedOption ? "bg-sky-300" : "bg-gray-400"
//               } rounded-lg text-black min-w-[152px] w-[190px] text-base font-medium`}
//             >
//               Finish
//             </button>
//           )}
          
//         </div>
//       </div>
//     </div>
//   );
// };


// "use client";
// import * as React from "react";
// import { QuizOption } from "./QuizOption";
// import type { QuizQuestion as QuizQuestionType } from "./types";

// interface QuizQuestionProps {
//   question: QuizQuestionType;
//   onAnswerSelect: (value: string) => void;
//   onNext: () => void;
//   onFinish: () => void;
//   showTimeUp?: boolean; // Added showTimeUp prop
// }

// export const QuizQuestion: React.FC<QuizQuestionProps> = ({
//   question,
//   onAnswerSelect,
//   onNext,
//   onFinish,
//   showTimeUp,
// }) => {
//   const isLastQuestion = question.isLast;

//   return (
//     <div className="flex overflow-hidden flex-wrap gap-5 items-center self-center px-[170px] py-[30px] w-full bg-indigo-950 max-md:px-5 max-md:max-w-full">
//       <div className="flex flex-col grow shrink self-stretch my-auto text-white min-h-[363px] min-w-[240px] w-[395px] max-md:max-w-full">
//         <h2 className="text-4xl font-bold leading-none">
//           Question {question.questionNumber}
//         </h2>
//         <p className="mt-6 text-xl leading-tight">{question.questionText}</p>
//       </div>
//       <div className="flex gap-[20px] flex-col grow shrink justify-center self-stretch my-auto text-base font-medium leading-loose text-white min-h-[403px] min-w-[240px] w-[421px] max-md:max-w-full">
//         {question.options.map((option) => (
//           <QuizOption
//             key={option.id}
//             text={option.text}
//             value={option.value}
//             name={`question-${question.id}`}
//             onChange={onAnswerSelect}
//           />
//         ))}

//         <div className="flex justify-between items-center mt-5 w-full">
//           {!isLastQuestion && (
//             <button
//               onClick={onNext}
//               className="px-3 py-4 bg-sky-300 rounded-lg text-black min-w-[152px] w-[190px] text-base font-medium"
//             >
//               Next
//             </button>
//           )}
//           {isLastQuestion && (
//             <button
//               onClick={onFinish}
//               className="px-3 py-4 bg-transparent rounded-lg text-white border border-white min-w-[152px] w-[190px] text-base font-medium"
//             >
//               Finish
//             </button>
//           )}
//         </div>

//         {showTimeUp && (
//           <div className="gap-2 self-stretch p-2 mt-5 w-full text-2xl font-bold leading-10 text-white max-md:max-w-full">
//             Time is up! Moving to the next question
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


"use client";
import * as React from "react";
import { QuizOption } from "./QuizOption";
import type { QuizQuestion as QuizQuestionType } from "./types";
import Link from "next/link";

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswerSelect: (value: string) => void;
  onNext: () => void;
  onFinish: () => void;
  showTimeUp?: boolean; // Added showTimeUp prop
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  onAnswerSelect,
  onNext,
  
  showTimeUp,
}) => {
  return (
    <div className="flex overflow-hidden flex-wrap gap-5 items-center self-center px-[170px] py-[30px] w-full bg-indigo-950 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col grow shrink self-stretch my-auto text-white min-h-[363px] min-w-[240px] w-[395px] max-md:max-w-full">
        <h2 className="text-4xl font-bold leading-none">
          Question {question.questionNumber}
        </h2>
        <p className="mt-6 text-xl leading-tight">{question.questionText}</p>
      </div>
      <div className="flex gap-[20px] flex-col grow shrink justify-center self-stretch my-auto text-base font-medium leading-loose text-white min-h-[403px] min-w-[240px] w-[421px] max-md:max-w-full">
        {question.options.map((option) => (
          <QuizOption
            key={option.id}
            text={option.text}
            value={option.value}
            name={`question-${question.id}`}
            onChange={onAnswerSelect}
          />
        ))}

        <div className="flex justify-between items-center mt-5 w-full">
          <button
            onClick={onNext}
            className="px-3 py-4 bg-sky-300 rounded-lg text-black min-w-[152px] w-[190px] text-base font-medium"
          >
            Next
          </button>
          <Link href="/result">
          <button
            // onClick={onFinish}
            className="px-3 py-4 bg-transparent rounded-lg text-white border border-white min-w-[152px] w-[190px] text-base font-medium"
          >
            Finish
          </button>
          </Link>
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
