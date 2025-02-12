import * as React from "react";
import { InstructionSection } from "./InstructionSection";
import { QuizInstructionsProps } from "./types";
import Image from "next/image";

export const QuizInstructions: React.FC<QuizInstructionsProps> = ({ title, subtitle, sections }) => {
  return (
<div className="w-full relative px-16">
  <main className="max-h-[590px] flex flex-col pt-6 text-black bg-indigo-950 
    sm:px-6 md:px-12 lg:px-16 xl:px-20">
    
    {/* Quiz Instructions */}
    <article className="pb-10 mb-6 relative z-10 overflow-hidden flex flex-col self-center 
      px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-6 
      w-full bg-white rounded-lg max-w-[1101px] max-w-full 
      break-words whitespace-normal mt-[-10px]">
      
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight 
        text-center break-words whitespace-normal">
        {title}
      </h1>

      <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base text-center 
        break-words whitespace-normal text-wrap leading-relaxed max-w-full">
        {subtitle}
      </p>

      {sections.map((section, index) => (
        <InstructionSection key={index} title={section.title} content={section.content} />
      ))}

    </article>

    {/* Footer Image */}
    <img
      src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/9c960803e56a2dae921f7d6f813459133b06fc721c6a5a3f1f0e3a6c294cf209?apiKey=415d78a55fd94a108248afe5c238a8ae&"
      alt="footer"
      className="absolute left-0 bottom-0 w-full object-cover z-0"
    />
  </main>
</div>




  );
}
