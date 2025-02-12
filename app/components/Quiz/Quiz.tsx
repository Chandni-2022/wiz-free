// "use client"
// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button"; // Ensure correct import
// import { Timer as TimerIcon, CheckCircle } from "lucide-react";

// const questions = [
//   { id: 1, text: "What is the capital of France?", options: ["Paris", "Rome", "London", "New York"], correct: "A" },
//   { id: 2, text: "What is 2 + 2?", options: ["3", "4", "5", "6"], correct: "B" },
//   { id: 3, text: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], correct: "B" },
//   { id: 4, text: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens", "Austen", "Tolstoy"], correct: "A" },
//   { id: 5, text: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "NaCl"], correct: "B" },
// ];

// export default function Quiz() {
//   const [currentQuestion, setCurrentQuestion] = useState<number>(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<string>("");
//   const [timeUp, setTimeUp] = useState<boolean>(false);
//   const [timeLeft, setTimeLeft] = useState<number>(9);
//   const [showFinalMessage, setShowFinalMessage] = useState<boolean>(false);
//   const [buttonsToggled, setButtonsToggled] = useState<boolean>(false);

//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setTimeUp(true);
//       if (currentQuestion === questions.length - 1) {
//         setShowFinalMessage(true);
//         setButtonsToggled(true);
//       }
//     }
//   }, [timeLeft]);

//   useEffect(() => {
//     if (timeUp && currentQuestion < questions.length - 1) {
//       const timer = setTimeout(() => handleNext(), 2000);
//       return () => clearTimeout(timer);
//     }
//   }, [timeUp, selectedAnswer]);

//   const handleNext = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//       setSelectedAnswer("");
//       setTimeUp(false);
//       setTimeLeft(9);
//     }
//   };

//   return (
//     <div className="min-h-screen text-white p-4 md:p-8 lg:px-32">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-12">Topic Name</h1>
//         <div className="flex justify-center items-center gap-3 mb-16">
//           <TimerIcon className="w-8 h-8" />
//           <span className="text-2xl font-mono">0:{timeLeft.toString().padStart(2, "0")}</span>
//         </div>
//         <div className="grid md:grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-3xl font-bold mb-4">Question {currentQuestion + 1}</h2>
//             <p className="text-xl">{questions[currentQuestion].text}</p>
//           </div>
//           <div>
//             <div className="space-y-8 mb-8">
//               {questions[currentQuestion].options.map((option, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedAnswer(option)}
//                   className={`w-full p-4 rounded-lg border border-white hover:bg-[#2A2B4A] transition-colors
//                     flex items-center gap-4 text-left
//                     ${selectedAnswer === option ? "bg-[#2A2B4A]" : ""}
//                   `}
//                 >
//                   <div className="w-6 h-6 border border-white rounded flex-shrink-0 flex items-center justify-center">
//                     {selectedAnswer === option && <CheckCircle className="w-5 h-5 text-blue-400" />}
//                   </div>
//                   <span className="text-lg">
//                     {String.fromCharCode(65 + index)}: {option}
//                   </span>
//                 </button>
//               ))}
//             </div>
//             <div className="flex justify-between gap-16 mt-10">
//               <Button 
//                 onClick={handleNext} 
//                 className={`flex-1 py-6 text-lg text-white ${buttonsToggled ? "bg-[#F77F00]" : "bg-[#5CC1E6] hover:bg-[#4BA1C6]"}`}
//               >
//                 {buttonsToggled ? "Evaluate Quiz" : "Next"}
//               </Button>
//               <Button 
//                 variant="outline" 
//                 className={`flex-1 py-6 text-lg ${buttonsToggled ? "bg-gray-500 text-white border-none" : "border-white text-white hover:bg-white/10"}`}
//               >
//                 {buttonsToggled ? "No More Questions" : "Finish Test"}
//               </Button>
//             </div>
//             {timeUp && !selectedAnswer && currentQuestion < questions.length - 1 && (
//               <div className="mt-10 text-center text-xl">Time's up! Moving to the next question</div>
//             )}
//           </div>
//         </div>
//       </div>
//       {showFinalMessage && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowFinalMessage(false)}>
//           <div className="bg-white text-black rounded-lg p-8 max-w-md w-full text-center">
//             <div className="bg-[#B1C6FF] p-4">
//               <p className="text-2xl font-semibold mb-2">Time's up!</p>
//               <p className="text-lg">Your quiz will be submitted automatically</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client"
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Ensure correct import
import { Timer as TimerIcon, CheckCircle } from "lucide-react";
import Link from "next/link";

const questions = [
  { id: 1, text: "What is the capital of France?", options: ["Paris", "Rome", "London", "New York"], correct: "A" },
  { id: 2, text: "What is 2 + 2?", options: ["3", "4", "5", "6"], correct: "B" },
  { id: 3, text: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], correct: "B" },
  { id: 4, text: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens", "Austen", "Tolstoy"], correct: "A" },
  { id: 5, text: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "NaCl"], correct: "B" },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [timeUp, setTimeUp] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(9);
  const [showFinalMessage, setShowFinalMessage] = useState<boolean>(false);
  const [buttonsToggled, setButtonsToggled] = useState<boolean>(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setTimeUp(true);
      if (currentQuestion === questions.length - 1) {
        setShowFinalMessage(true);
        setButtonsToggled(true);
      }
    }
  }, [timeLeft]);

  useEffect(() => {
    if (timeUp && currentQuestion < questions.length - 1) {
      const timer = setTimeout(() => handleNext(), 2000);
      return () => clearTimeout(timer);
    }
  }, [timeUp, selectedAnswer]);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setTimeUp(false);
      setTimeLeft(9);
    }
  };

  return (
    <div className="min-h-screen text-white p-4 md:p-8 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Topic Name</h1>
        <div className="flex justify-center items-center gap-3 mb-16">
          <TimerIcon className="w-8 h-8" />
          <span className="text-2xl font-mono">0:{timeLeft.toString().padStart(2, "0")}</span>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Question {currentQuestion + 1}</h2>
            <p className="text-xl">{questions[currentQuestion].text}</p>
          </div>
          <div>
            <div className="space-y-8 mb-8">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!(timeUp && currentQuestion === questions.length - 1)) {
                      setSelectedAnswer(option);
                    }
                  }}
                  className={`w-full p-4 rounded-lg border border-white hover:bg-[#2A2B4A] transition-colors
                    flex items-center gap-4 text-left
                    ${selectedAnswer === option ? "bg-[#2A2B4A]" : ""}
                    ${timeUp && currentQuestion === questions.length - 1 ? "cursor-not-allowed opacity-50" : ""}
                  `}
                  disabled={timeUp && currentQuestion === questions.length - 1}
                >
                  <div className="w-6 h-6 border border-white rounded flex-shrink-0 flex items-center justify-center">
                    {selectedAnswer === option && <CheckCircle className="w-5 h-5 text-blue-400" />}
                  </div>
                  <span className="text-lg">
                    {String.fromCharCode(65 + index)}: {option}
                  </span>
                </button>
              ))}
            </div>
            <div className="flex justify-between gap-16 mt-10">
              <Button
                onClick={handleNext}
                className={`flex-1 py-6 text-lg text-white ${buttonsToggled ? "bg-[#5CC1E6]" : "bg-[#5CC1E6] hover:bg-[#5CC1E6]"}`}
              >
                {buttonsToggled ? "Evaluate Quiz" : "Next"}
              </Button>
              <Link href="/result" passHref legacyBehavior>
              <Button
                variant="outline"
                className="flex-1 py-6 text-lg border-white text-white hover:bg-white/10"
              >
                Finish Test
              </Button>
              </Link>

            </div>
            {timeUp && !selectedAnswer && currentQuestion < questions.length - 1 && (
              <div className="mt-10 text-center text-xl">Time's up! Moving to the next question</div>
            )}
          </div>
        </div>
      </div>
      {showFinalMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowFinalMessage(false)}>
          <div className="bg-white text-black rounded-lg p-8 max-w-md w-full text-center">
            <div className="bg-[#B1C6FF] p-4">
              <p className="text-2xl font-semibold mb-2">Time's up!</p>
              <p className="text-lg">Your quiz will be submitted automatically</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}