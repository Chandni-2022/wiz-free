import * as React from "react";
import { InstructionSection } from "./InstructionSection";
import { QuizInstructionsProps } from "./types";

export const QuizInstructions: React.FC<QuizInstructionsProps> = ({ title, subtitle, sections }) => {
  return (
    <main className="flex overflow-hidden flex-col pt-10 text-black bg-indigo-950">
      <article className="flex z-10 flex-col self-center px-32 py-8 w-full bg-white rounded-lg max-w-[1101px] max-md:px-5 max-md:max-w-full">
        <h1 className="text-4xl font-bold leading-none text-center max-md:max-w-full">
          {title}
        </h1>
        <p className="mt-5 text-base text-center max-md:max-w-full">
          {subtitle}
        </p>
        {sections.map((section, index) => (
          <InstructionSection
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </article>
     
      {/* <div className="flex py-2 w-full h-full min-h-full max-md:max-w-full" /> */}
    </main>
   

  );
}
