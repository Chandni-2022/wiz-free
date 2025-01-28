"use client";
import * as React from "react";
import { ScoreCardProps } from "./types";
export const ScoreCard: React.FC<ScoreCardProps> = ({ icon, label, value }) => (
  <div className="flex overflow-hidden flex-wrap grow shrink gap-10 items-center py-5 pl-8 h-full rounded-md min-w-[240px] w-[408px] max-md:max-w-full">
    <div className="flex gap-3 items-center self-stretch my-auto min-w-[240px]">
      {icon && (
        <img
          loading="lazy"
          src={icon}
          alt=""
          width={40}
          height={40}
          className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
        />
      )}
      <div className="flex-1 shrink gap-2 self-stretch my-auto w-[222px]">
        {label}
      </div>
    </div>
    <div className="flex-1 grow shrink gap-2 self-stretch my-auto whitespace-nowrap w-[71px]">
      {value}
    </div>
  </div>
);