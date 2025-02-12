// // "use client";
// // import * as React from "react";
// // import { SignUpForm } from "./SignUpForm";
// // interface SignUpPageProps {
// //   onLogin: () => void;
// // }
// // export const SignUpPage: React.FC = ({ onLogin }) => {
// //   return (
// //     <main className="flex relative items-center pr-16 bg-indigo-950 max-md:pr-5">
// //       <img
// //         loading="lazy"
// //         src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/a5c813bd0f17167552339badf499adf90c927a593e82ffe7d4a48a54953f383c?apiKey=415d78a55fd94a108248afe5c238a8ae&"
// //         alt=""
// //         className="object-contain z-0 self-stretch my-auto aspect-[0.68] min-w-[240px] w-[726px] max-md:max-w-full"
// //       />
// //       <div className="flex z-0 flex-col justify-center items-end self-stretch my-auto min-w-[240px] w-[615px] max-md:max-w-full">
// //         <div className="flex overflow-hidden flex-col justify-center py-16 pr-12 pl-11 max-w-full w-[615px] max-md:px-5">
// //           <h1 className="w-full text-5xl font-bold leading-none text-white whitespace-nowrap max-md:max-w-full max-md:text-4xl">
// //             Sign-Up
// //           </h1>
// //           <SignUpForm />
// //         </div>
// //         <div className="flex overflow-hidden flex-wrap gap-10 justify-center items-end p-12 max-w-full w-[615px] max-md:px-5">
// //           <div className="flex flex-col flex-1 shrink text-white basis-0 min-h-[68px] min-w-[240px]">
// //             <h2 className="text-2xl font-bold leading-none">
// //               Existing User?
// //             </h2>
// //             <p className="mt-3 text-base">Already have an account?</p>
// //           </div>
// //           <button 
// //             onClick={onLogin}
// //             className="flex overflow-hidden flex-col text-base font-medium text-black min-h-[55px] w-[190px]"
// //           >
// //             <span className="px-3 py-4 max-w-full bg-sky-300 rounded-lg min-h-[55px] w-[190px]">
// //               Log in
// //             </span>
// //           </button>
// //         </div>
// //       </div>
// //       <div className="flex absolute z-0 flex-col justify-center self-start bottom-[114px] h-[844px] left-[150px] min-h-[844px] min-w-[240px] w-[400px]">
// //         <div className="flex flex-col justify-center items-center max-w-full w-[400px]">
// //           <img
// //             loading="lazy"
// //             src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/d22fd652f2947c8e8b105011a1ad75a85547fb35946adecf72db88adaf246219?apiKey=415d78a55fd94a108248afe5c238a8ae&"
// //             alt=""
// //             className="object-contain w-full aspect-[0.61]"
// //           />
// //         </div>
// //       </div>
// //     </main>
// //   );
// // };

// "use client";
// import * as React from "react";
// import { SignUpForm } from "./SignUpForm";

// interface SignUpPageProps {
//   onLogin: () => void;
// }

// export const SignUpPage: React.FC<SignUpPageProps> = ({ onLogin }) => {
//   return (
//     <main className="flex relative items-center pr-16 bg-indigo-950 max-md:pr-5">
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/a5c813bd0f17167552339badf499adf90c927a593e82ffe7d4a48a54953f383c?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//         alt=""
//         width={726}
//         height={1072}
//         className="object-contain z-0 self-stretch my-auto aspect-[0.68] min-w-[240px] w-[726px] max-md:max-w-full"
//       />
//       <div className="flex z-0 flex-col justify-center items-end self-stretch my-auto min-w-[240px] w-[615px] max-md:max-w-full">
//         <div className="flex overflow-hidden flex-col justify-center py-16 pr-12 pl-11 max-w-full w-[615px] max-md:px-5">
//           <h1 className="w-full text-5xl font-bold leading-none text-white whitespace-nowrap max-md:max-w-full max-md:text-4xl">
//             Sign-Up
//           </h1>
//           <SignUpForm />
//         </div>
//         <div className="flex overflow-hidden flex-wrap gap-10 justify-center items-end p-12 max-w-full w-[615px] max-md:px-5">
//           <div className="flex flex-col flex-1 shrink text-white basis-0 min-h-[68px] min-w-[240px]">
//             <h2 className="text-2xl font-bold leading-none">
//               Existing User?
//             </h2>
//             <p className="mt-3 text-base">Already have an account?</p>
//           </div>
//           <button 
//             onClick={onLogin}
//             className="flex overflow-hidden flex-col text-base font-medium text-black min-h-[55px] w-[190px]"
//           >
//             <span className="px-3 py-4 max-w-full bg-sky-300 rounded-lg min-h-[55px] w-[190px]">
//               Log in
//             </span>
//           </button>
//         </div>
//       </div>
//       <div className="flex absolute z-0 flex-col justify-center self-start bottom-[114px] h-[844px] left-[150px] min-h-[844px] min-w-[240px] w-[400px]">
//         <div className="flex flex-col justify-center items-center max-w-full w-[400px]">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/d22fd652f2947c8e8b105011a1ad75a85547fb35946adecf72db88adaf246219?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//             alt=""
//             className="object-contain w-full aspect-[0.61]"
//           />
//         </div>
//       </div>
//     </main>
//   );
// };





// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import React from "react";

// export default function SignUpPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   })

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Add your sign-up logic here
//   }

//   return (
//     <div className="flex min-h-screen bg-[#1e2147]">
//       {/* Left Section with illustration - full height and 50% width on large screens */}
//       <div className="hidden lg:block lg:w-1/2 relative">
//       <div className="relative w-full h-screen">
//       <img
//   src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/c620a29220752ac913cfee97b3aff92262f00205b5458015fc6029d7e15e9868?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//   alt="Sign-up decoration"
//   className="object-contain w-[50%] h-auto"
// />

// </div>

//       </div>

//       {/* Right Section - full width on smaller screens, 50% on larger screens */}
//       <div className="flex w-full lg:w-1/2 flex-col justify-center px-6 py-12 lg:px-12">
//         <div className="mx-auto w-full max-w-md">
//           <h1 className="mb-8 text-3xl font-bold text-white text-center lg:text-left">Sign-Up</h1>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-2">
//               <Label htmlFor="name" className="text-white">
//                 Name
//               </Label>
//               <Input
//                 id="name"
//                 placeholder="Enter your name"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 className="bg-white w-full"
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="email" className="text-white">
//                 Email
//               </Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 className="bg-white w-full"
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="password" className="text-white">
//                 Password
//               </Label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                 className="bg-white w-full"
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="confirm-password" className="text-white">
//                 Confirm Password
//               </Label>
//               <Input
//                 id="confirm-password"
//                 type="password"
//                 placeholder="Confirm your password"
//                 value={formData.confirmPassword}
//                 onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                 className="bg-white w-full"
//                 required
//               />
//             </div>

//             <Button type="submit" className="w-full bg-[#5BB4F7] hover:bg-[#4a9fe0]">
//               Sign-Up
//             </Button>
//           </form>

//           <div className="mt-8 flex flex-col sm:flex-row items-center justify-between">
//             <div className="text-white mb-4 sm:mb-0">
//               <span>Already have an account?</span>
//             </div>
//             <Link href="/login">
//               <Button variant="secondary" className="bg-[#5BB4F7] text-white hover:bg-[#4a9fe0] w-full sm:w-auto">
//                 Log in
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



// import { useState } from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Button } from './Button';

// export default function SignUp() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   })

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Add your sign-up logic here
//   }

//   return (

//     <div className="flex    w-full min-h-screen bg-indigo-950">
//       {/* Left Section with illustration - full height and 50% width on large screens */}
//       <div className="hidden lg:block lg:w-1/2 relative">
//         <div className="flex w-full h-screen max-md:hidden  ">
//           <img
//             src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/c620a29220752ac913cfee97b3aff92262f00205b5458015fc6029d7e15e9868?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//             alt="Sign-up decoration"
//             className="object-contain z-0 self-stretch my-auto aspect-[0.77] min-w-[240px] w-[665px] h-screen max-md:hidden max-md:max-w-full "
//           />
//         </div>
//       </div>

//       {/* Right Section - full width on smaller screens, 50% on larger screens */}
//       <div className="flex w-full lg:w-1/2 flex-col justify-center px-6 py-12 lg:px-12 max-w-[615px] w-full  ">
//         <div className="mx-auto  w-full max-w-md">
//           <h1 className="mb-8 text-3xl font-bold text-white text-center lg:text-left w-full text-5xl font-bold leading-none text-white whitespace-nowrap max-md:max-w-full max-md:text-4xl max-md:text-center">Sign-Up</h1>

//           <form onSubmit={handleSubmit} className="space-y-6 max-w-[615px] w-full  mx-auto">
//             <div className="space-y-6">
//               <div className="flex flex-col w-full max-w-[40rem] min-w-[20vw] max-md:max-w-full">
//                 <label
//                   htmlFor="name"
//                   className="text-base font-medium leading-none text-white mb-2"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   placeholder="Enter your name"
//                   className="px-4 py-3 mt-1.5 w-full text-sm sm:text-base leading-none bg-white rounded-md border border-solid border-white text-black placeholder:text-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   required
//                 />
//               </div>

//               <div className="flex flex-col w-full max-w-[40rem] min-w-[20vw] max-md:max-w-full">
//                 <label
//                   htmlFor="email"
//                   className="text-base font-medium leading-none text-white mb-2"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="Enter your email"
//                   className="px-4 py-3 mt-1.5 w-full text-sm sm:text-base leading-none bg-white rounded-md border border-solid border-white text-black placeholder:text-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   required
//                 />
//               </div>

//               <div className="flex flex-col w-full max-w-[40rem] min-w-[20vw] max-md:max-w-full">
//                 <label
//                   htmlFor="password"
//                   className="text-base font-medium leading-none text-white mb-2"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder="Enter your password"
//                   className="px-4 py-3 mt-1.5 w-full text-sm sm:text-base leading-none bg-white rounded-md border border-solid border-white text-black placeholder:text-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                   value={formData.password}
//                   onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                   required
//                 />
//               </div>

//               <div className="flex flex-col w-full max-w-[40rem] min-w-[20vw] max-md:max-w-full">
//                 <label
//                   htmlFor="confirm-password"
//                   className="text-base font-medium leading-none text-white mb-2"
//                 >
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   id="confirm-password"
//                   placeholder="Confirm your password"
//                   className="px-4 py-3 mt-1.5 w-full text-sm sm:text-base leading-none bg-white rounded-md border border-solid border-white text-black placeholder:text-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                   value={formData.confirmPassword}
//                   onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                   required
//                 />
//               </div>
//             </div>

//             <Button type="submit" variant="primary" className="w-[50%]">
//               Sign-Up
//             </Button>

//           </form>

//           <div className="mt-8 flex flex-col sm:flex-row items-center justify-between ">
//             <div className="text-white mb-4 sm:mb-0">
//               <span>Already have an account?</span>
//             </div>
//             <Link href="/login">
//               <Button type="submit" variant="primary" className="p-0">
//                 Log-in
//               </Button>
//             </Link>
//           </div>
//         </div>
//          <div className="md:visible  flex absolute bottom-24 z-0 flex-col justify-center self-start left-[110px] min-w-[240px] w-[430px] max-md:hidden">
//                 <img
//                   src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/1697f35c1acef68c11d70943644d60c4d52452d0fa30577381523729dc4d02eb?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//                   alt="Decorative footer image"
//                   className="object-contain max-w-full aspect-[0.65] w-[430px] "
//                 />
//               </div>
//       </div>
      
//     </div>
//   )
// }

"use client"
import * as React from "react";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { Image } from "./Image";
import Link from "next/link";
import '../styles/custom.css';
export const SignUpPage: React.FC = () => {
  return (
    <main className="h-screen fixed flex flex-col md:flex-row lg:flex-row items-center w-full bg-indigo-950 relative ">
      <div className="relative flex w-full md:hidden lg:flex lg:w-1/2 h-screen lg:items-center lg:justify-start">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-[#FFF9EF]  hidden-lg-custom "></div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/c620a29220752ac913cfee97b3aff92262f00205b5458015fc6029d7e15e9868?apiKey=415d78a55fd94a108248afe5c238a8ae&"
          alt="Wave login"
          className="object-contain w-full h-full md:h-screen"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[60%] h-[60%] max-w-[300px] md:max-w-[350px]">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/1697f35c1acef68c11d70943644d60c4d52452d0fa30577381523729dc4d02eb?apiKey=415d78a55fd94a108248afe5c238a8ae&"
              alt="Mascot image"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
      <section className="md:p-12 lg:p-16 flex flex-col justify-center items-center w-full md:w-full lg:w-1/2 p-5 md:p-16 ">
        <form className="flex flex-col w-full max-w-[520px] md:max-w-[615px]">
          <h1 className="text-5xl font-bold text-white  text-start">Sign Up</h1>
          <div className="mt-10 w-full">
            <InputField label="Name" type="text" placeholder="Enter your name" id="name" />
          </div>
          <div className="mt-8 w-full">
            <InputField label="Email" type="email" placeholder="Enter your email" id="email" />
          </div>
          <div className="mt-8 w-full">
            <InputField label="Password" type="password" placeholder="Enter your password" id="password" />
          </div>
          <div className="mt-8 w-full">
            <InputField label="Confirm Password" type="password" placeholder="Enter your confirm password" id="password" />
          </div>
          <div className="flex flex-col sm:flex-col md:flex-row gap-6 items-center mt-8 justify-start">
          
            <Link href="login" passHref legacyBehavior>
              <a className="flex justify-center md:w-auto w-full">
                <Button variant="primary">Sign-Up</Button>
              </a>
            </Link>
          </div>
          <div className="flex flex-col justify-between mt-20 sm:flex-row md:flex-row items-center sm:flex-col space-y-2">
            <div className="flex flex-col text-center md:text-left space-y-4 md:w-1/2">
              <h2 className="text-2xl font-bold text-white">Existing User?</h2>
              <p className="text-base text-white ">Already have an account?</p>
            </div>
            <Link href="/login" passHref legacyBehavior>
              <a className="w-full flex justify-end md:w-auto md:justify-center md:ml-auto">
                <Button variant="primary">Login</Button>
              </a>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};


