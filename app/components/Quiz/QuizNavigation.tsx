// "use client";
// import * as React from "react";


// interface QuizNavigationProps {
//   onNext: () => void;
//   onFinish: () => void;
//   showTimeUp?: boolean;
// }

// export const QuizNavigation: React.FC<QuizNavigationProps> = ({ onNext, onFinish, showTimeUp }) => {
//   return (
//     <div className="flex flex-wrap justify-end self-stretch pb-8 my-auto min-w-[240px] max-w-full">
//     <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] max-w-full md:w-[510px]">
//       <div className="flex flex-wrap gap-5 items-start w-full text-base font-medium">
//         <button
//           onClick={onNext}
//           className="flex overflow-hidden flex-col grow shrink text-black whitespace-nowrap min-h-[55px] w-full sm:w-[152px]"
//         >
//           <div className="px-3 py-4 bg-sky-300 rounded-lg min-h-[55px] w-full sm:w-[190px] text-center">
//             Next
//           </div>
//         </button>
//         <button
//           onClick={onFinish}
//           className="flex overflow-hidden flex-col grow shrink text-white min-h-[55px] w-full sm:w-[152px]"
//         >
//           <div className="px-3 py-4 rounded-lg border border-white border-solid min-h-[55px] w-full sm:w-[190px] text-center">
//             Finish Test
//           </div>
//         </button>
//       </div>
//       {showTimeUp && (
//         <div className="gap-2 self-stretch p-2 mt-5 w-full text-2xl font-bold leading-10 text-white text-center">
//           Time is up! Moving to the next question
//         </div>
//       )}
//     </div>
//   </div>
  
//   );
// };