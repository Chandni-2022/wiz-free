"use client";  // Add this directive to mark the component as client-side

import  QuizResults  from "../components/Result/quiz-result";
// import { useRouter } from "next/navigation";

export default function Result() {
//   const router = useRouter();

//   const handleFinish = () => {
//     // Use relative path or absolute URL for debugging
//     router.push("/result");  // This should route correctly to app/result/page.tsx
//   };

  // const scoreData = [
  //       {
  //         icon: "https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/8d98e2c0e424ded1964d46a95fdaf75fb111c34ba8fee7f10eca99499dcb19e1?apiKey=415d78a55fd94a108248afe5c238a8ae&",
  //         label: "Total Score", // This is required
  //         value: "85%"         // This is required
  //       },
  //       {
  //         label: "Questions Answered", // This is required
  //         value: "5/5"             // This is required
  //       }
  //     ];
      

  return (
    <main className="flex min-h-screen items-center justify-center bg-indigo-950">
      {/* {scoreData.map((data, index) => (
        <ScoreCard key={index} label={data.label} value={data.value} />
      ))} */}
     
        <QuizResults />
    
    </main>
  );
}
