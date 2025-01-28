// "use client";

// import { LoginPage } from "../components/Login/LoginPage";
// import { useRouter } from "next/navigation";
// import { SignUpPage } from "../components/Signup/SignUpPage";
// import { QuizDashboard } from "../components/Home/QuizDashBoard";

// export default function Login() {
//   const router = useRouter();

//   const handleSignup = () => {
//     router.push("/signup");
//   };

//   return (
//     <main className="flex min-h-screen items-center justify-center bg-indigo-950">
//       <LoginPage onSignup={handleSignup} />
//       <SignUpPage/>
//     </main>
   
//   );
// }

"use client";

import { LoginPage } from "../components/Login/LoginPage";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleSignup = () => {
    router.push("/signup"); // Navigate to Sign-Up page
  };

  const handleLogin = () => {
    router.push("/quizdashboard"); // Navigate to QuizDashBoard page
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-indigo-950">
      <LoginPage onSignup={handleSignup} onLogin={handleLogin} />
    </main>
  );
}
