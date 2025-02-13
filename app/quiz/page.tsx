// app/quiz/page.tsx
import React from "react";
import Quiz  from "../components/Quiz/Quiz";
// import { quizData } from "../Data/quizData"; // Importing the quiz data

const QuizInstructionsPage = () => {
  // const selectedQuiz = quizData[0]; // Example: Select the first topic (Math Basics)

  return (
    <div className="min-h-screen bg-indigo-950 ">
      <Quiz  />
    </div>
  );
};

export default QuizInstructionsPage;
