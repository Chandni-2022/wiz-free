"use client";

import { FileText, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import Link from "next/link";


// Sample data for the score distribution chart
const distributionData = [9, 6, 4, 6, 4, 7, 5];

export default function QuizResults() {
  return (
    <div className="w-full min-h-screen flex flex-col text-white">
      {/* Header */}
      <div className="flex justify-between p-6 w-full">
        <div className="flex gap-3 items-center">
          <div className="h-8 w-8 rounded-full bg-white" />
          <span className="text-lg font-medium">Quiz Breakdown</span>
        </div>
         <Link href="/quizdashboard" passHref legacyBehavior>
          <Button className="text-white text-lg">
           Dashboard
          </Button>
          </Link>
      </div>

      {/* Main Content */}
      <div className="px-6 lg:px-32 pb-32 max-w-[1110px] mx-auto flex-grow">
        {/* Main Title */}
        <h1 className="text-center text-4xl font-bold mb-16">Quiz Results</h1>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-16">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6" />
            <div>
              <div className="text-xl font-bold">Total Score</div>
            </div>
          </div>
          <div className="text-xl font-semibold">85%</div>
          <div className="flex items-center gap-3">
            <HelpCircle className="h-6 w-6" />
            <div className="text-xl font-semibold">20 / 25</div>
          </div>
          <div className="text-xl font-semibold">Questions Answered</div>
        </div>

        {/* Score Distribution */}
        <div className="mb-16 p-6 border border-white rounded-lg">
          <h3 className="font-medium mb-6">Score Distribution</h3>
          <div className="text-sm text-white mb-2">Number of Questions</div>

          {/* Graph Container */}
          <div className="relative h-48 w-full mx-auto">
            {/* Horizontal Dotted Lines */}
            {/* Horizontal Dotted Lines */}
            <div className="absolute inset-0 flex flex-col justify-between w-full">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="border-t border-dotted border-white w-[102%] h-0 -ml-[1%]"
                />
              ))}
            </div>


            {/* Bars */}
            <div className="relative flex items-end gap-10 h-full">
              {distributionData.map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#B1B2FF] transition-all duration-300"
                  style={{ height: `${height * 10}%`, width: "12%" }}
                />
              ))}
            </div>
          </div>

          <div className="text-right text-sm text-white mt-2">Score</div>
        </div>

        {/* Question Breakdown */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Question Breakdown</h2>
          <p className="text-gray-300 mb-8">Review how you answered each question.</p>

         {/* Question Breakdown */}
<div className="h-80 overflow-y-auto pr-4">
  {/* Question 1 */}
  <div className="mb-8">
    <h3 className="font-medium mb-2">Question 1</h3>
    <p className="mb-4">What is the capital of France?</p>
    <div className="flex items-center gap-2 mb-4">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white">
        <Check size={16} />
      </div>
      <span>A: Paris</span>
    </div>
    <div className="bg-white/5 rounded p-4 space-y-2">
      <p><strong>Correct Answer:</strong> Option A: Paris</p>
      <p className="text-gray-300">
        <strong>Explanation:</strong> Paris is the capital of France and one of its most populous cities. It has
        been the center of French culture, politics, and history for centuries.
      </p>
    </div>
  </div>

  {/* Question 2 */}
  <div className="mb-8">
    <h3 className="font-medium mb-2">Question 2</h3>
    <p className="mb-4">What is the capital of France?</p>
    <div className="flex items-center gap-2">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white">
        <X size={16} />
      </div>
      <span>B: Rome</span>
    </div>
  </div>

  {/* Question 3 (Hidden initially, scroll to see) */}
  <div className="mb-8">
    <h3 className="font-medium mb-2">Question 3</h3>
    <p className="mb-4">Which planet is known as the Red Planet?</p>
    <div className="flex items-center gap-2">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white">
        <Check size={16} />
      </div>
      <span>A: Mars</span>
    </div>
  </div>
  <div className="mb-8">
    <h3 className="font-medium mb-2">Question 4</h3>
    <p className="mb-4">Which planet is known as the Red Planet?</p>
    <div className="flex items-center gap-2">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white">
        <Check size={16} />
      </div>
      <span>A: Mars</span>
    </div>
  </div>
  <div className="mb-8">
    <h3 className="font-medium mb-2">Question 5</h3>
    <p className="mb-4">Which planet is known as the Red Planet?</p>
    <div className="flex items-center gap-2">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white">
        <Check size={16} />
      </div>
      <span>A: Mars</span>
    </div>
  </div>
  <div className="mb-8">
    <h3 className="font-medium mb-2">Question 6</h3>
    <p className="mb-4">What is the capital of France?</p>
    <div className="flex items-center gap-2">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white">
        <X size={16} />
      </div>
      <span>B: Rome</span>
    </div>
  </div>

</div>

        </div>

        {/* Return Button */}
        <div className="flex justify-center mt-12">
        <Link href="/quizdashboard" passHref legacyBehavior>
          <Button className="bg-[#5AC8FA] hover:bg-[#5AC8FA]/90 text-white px-8 py-2 rounded">
            Return to Dashboard
          </Button>
          </Link>
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="mt-auto w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/9c960803e56a2dae921f7d6f813459133b06fc721c6a5a3f1f0e3a6c294cf209?apiKey=415d78a55fd94a108248afe5c238a8ae&"
          alt=""
          width={1440}
          height={200}
          className="w-full object-cover"
        />
      </div>
    </div>
  );

}
