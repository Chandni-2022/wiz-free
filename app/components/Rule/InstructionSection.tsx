"use client";
import * as React from "react";
import { InstructionSectionProps } from "./types";

export const InstructionSection: React.FC<InstructionSectionProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col justify-center mt-5 w-full  max-md:max-w-full">
      <h2 className="text-xl leading-tight max-md:max-w-full">
        {title}
      </h2>
      <div className="mt-2.5 text-base leading-6 max-md:max-w-full">
        {content.map((text, index) => (
          <React.Fragment key={index}>
            {text}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};