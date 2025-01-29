"use client";

import React from "react";
import Instructions from "../components/Rule/index"; // Correct way to import the default export

const QuizInstructionsPage = () => {
  return (
    <div className="">
      <Instructions /> {/* Render your QuizInstructions component here */}
    </div>
  );
};

export default QuizInstructionsPage;
