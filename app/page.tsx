// // import { QuizDashboard } from "./components/Home/QuizDashBoard";
// // import { LoginPage } from "./components/Login/LoginPage";
// // import { Quiz } from "./components/Quiz/Quiz";
// // import { ScoreCard } from "./components/Result/ScoreCard";
// // import { SignUpPage } from "./components/Signup/SignUpPage";

// // export default function Home() {
// //   return (
// //     <div>
// //       <LoginPage/>
// //       <SignUpPage/>

      
// //     </div>
// //   );
// // }
// "use client";

// import { QuizDashboard } from "./components/Home/QuizDashBoard";
// import { LoginPage } from "./components/Login/LoginPage";
// import { Quiz } from "./components/Quiz/Quiz";
// import { SignUpPage } from "./components/Signup/SignUpPage";
// import { QuizQuestion } from "./components/Quiz/types";
// import { ScoreCard } from "./components/Result/ScoreCard";

// export default function Home() {
//   Sample questions
//   const sampleQuestions: QuizQuestion[] = [
//     {
//       id: "1",
//       questionNumber: 1,
//       questionText: "What is the capital of France?",
//       options: [
//         { id: "1", text: "Paris", value: "A" },
//         { id: "2", text: "Rome", value: "B" },
//         { id: "3", text: "London", value: "C" },
//         { id: "4", text: "Berlin", value: "D" },
//       ],
//     },
//   ];

//   const scoreData = [
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/8d98e2c0e424ded1964d46a95fdaf75fb111c34ba8fee7f10eca99499dcb19e1?apiKey=415d78a55fd94a108248afe5c238a8ae&",
//       label: "Total Score", // This is required
//       value: "85%"         // This is required
//     },
//     {
//       label: "Questions Answered", // This is required
//       value: "20 / 25"             // This is required
//     }
//   ];
  

//   return (
//     <div>
//       <LoginPage />
//       {/* <SignUpPage />
//       // <QuizDashboard/> */}
//       {/* Use map to render multiple ScoreCards */}

//       {scoreData.map((data, index) => (
//         <ScoreCard key={index} {...data} />
//       ))}

//       {/* <Quiz topicName="General Knowledge Quiz" questions={sampleQuestions} /> */}
//     </div>
//   );
// }


// "use client";

// import { QuizDashboard } from "./components/Home/QuizDashBoard";
// import { LoginPage } from "./components/Login/LoginPage";
// import { useRouter } from "next/navigation";
// import { ScoreCard } from "./components/Result/ScoreCard";

// export default function Home() {
//   const router = useRouter();

//   // Handle navigation to signup page
//   const handleSignup = () => {
//     router.push("/signup");
//   };

//   return (
//     <div>
     
//       <LoginPage onSignup={handleSignup} />
//       {/* <QuizDashboard/> */}
      
     
//     </div>
//   );
// }

"use client";

import { LoginPage } from "./components/Login/LoginPage";
// import { useRouter } from "next/navigation";


export default function Login() {
  // const router = useRouter();

  // const handleSignup = () => {
  //   router.push("/signup"); // Navigate to Sign-Up page
  // };

  // const handleLogin = () => {
  //   console.log("Login button clicked");
   
  // };

  return (
    <main className="flex min-h-screen items-center justify-center bg-indigo-950">
      <LoginPage />
      {/* onSignup={handleSignup} onLogin={handleLogin}  */}
   
    </main>
  );
}
