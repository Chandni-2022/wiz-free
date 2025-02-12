"use client";

import {SignUpPage} from "../components/Signup/SignUpPage";

// import { useRouter } from "next/navigation";

export default function Signup() {
//   const router = useRouter();

//   const handleLogin = () => {
//     router.push("/login");
//   };

  return (
    <main className="flex min-h-screen items-center justify-center bg-indigo-950">
      <SignUpPage />
      {/* onLogin={handleLogin}  */}
    </main>
  );
}
