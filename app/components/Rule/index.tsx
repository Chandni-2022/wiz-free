import * as React from "react";
import { QuizInstructions } from "./QuizInstructions";

export default function QuizInstructionsPage() {
  const instructionsData = {
    title: "Quiz Instructions",
    subtitle: "Please read the instructions carefully before starting the quiz.",
    sections: [
      {
        title: "General Instructions",
        content: [
          "You can only attempt one quiz per day.",
          "You cannot go back to previous questions once you move forward."
        ]
      },
      {
        title: "Question Attempt Rules",
        content: [
          "You may skip or attempt as many questions as you like.",
          "Use the Next button to move to the next question.",
          "Use the Finish button to complete the quiz at any point.",
          "The quiz will auto-submit if multiple questions are left unanswered or if 'Next' is not clicked for consecutive questions. ",
          "When you reach the end of the quiz, you will see a message: \"No more questions available.\""
        ]
      },
      {
        title: "Results",
        content: [
          "Your quiz results will be displayed immediately after evaluation.",
          "A summary of your performance will also be emailed to you."
        ]
      }
    ]
  };

  return <QuizInstructions {...instructionsData} />;
}
