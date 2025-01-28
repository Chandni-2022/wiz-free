// "use client";
// import * as React from "react";
// import { SignUpForm } from "./SignUpForm";
// interface SignUpPageProps {
//   onLogin: () => void;
// }
// export const SignUpPage: React.FC = ({ onLogin }) => {
//   return (
//     <main className="flex relative items-center pr-16 bg-indigo-950 max-md:pr-5">
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/a5c813bd0f17167552339badf499adf90c927a593e82ffe7d4a48a54953f383c?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//         alt=""
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

"use client";
import * as React from "react";
import { SignUpForm } from "./SignUpForm";

interface SignUpPageProps {
  onLogin: () => void;
}

export const SignUpPage: React.FC<SignUpPageProps> = ({ onLogin }) => {
  return (
    <main className="flex relative items-center pr-16 bg-indigo-950 max-md:pr-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/a5c813bd0f17167552339badf499adf90c927a593e82ffe7d4a48a54953f383c?apiKey=415d78a55fd94a108248afe5c238a8ae&"
        alt=""
        width={726}
        height={1072}
        className="object-contain z-0 self-stretch my-auto aspect-[0.68] min-w-[240px] w-[726px] max-md:max-w-full"
      />
      <div className="flex z-0 flex-col justify-center items-end self-stretch my-auto min-w-[240px] w-[615px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-col justify-center py-16 pr-12 pl-11 max-w-full w-[615px] max-md:px-5">
          <h1 className="w-full text-5xl font-bold leading-none text-white whitespace-nowrap max-md:max-w-full max-md:text-4xl">
            Sign-Up
          </h1>
          <SignUpForm />
        </div>
        <div className="flex overflow-hidden flex-wrap gap-10 justify-center items-end p-12 max-w-full w-[615px] max-md:px-5">
          <div className="flex flex-col flex-1 shrink text-white basis-0 min-h-[68px] min-w-[240px]">
            <h2 className="text-2xl font-bold leading-none">
              Existing User?
            </h2>
            <p className="mt-3 text-base">Already have an account?</p>
          </div>
          <button 
            onClick={onLogin}
            className="flex overflow-hidden flex-col text-base font-medium text-black min-h-[55px] w-[190px]"
          >
            <span className="px-3 py-4 max-w-full bg-sky-300 rounded-lg min-h-[55px] w-[190px]">
              Log in
            </span>
          </button>
        </div>
      </div>
      <div className="flex absolute z-0 flex-col justify-center self-start bottom-[114px] h-[844px] left-[150px] min-h-[844px] min-w-[240px] w-[400px]">
        <div className="flex flex-col justify-center items-center max-w-full w-[400px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/d22fd652f2947c8e8b105011a1ad75a85547fb35946adecf72db88adaf246219?apiKey=415d78a55fd94a108248afe5c238a8ae&"
            alt=""
            className="object-contain w-full aspect-[0.61]"
          />
        </div>
      </div>
    </main>
  );
};





