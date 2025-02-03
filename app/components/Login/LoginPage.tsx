
// import * as React from 'react';
// import { InputField } from "./InputField";
// import { ActionButton } from './ActionButton';

// export const LoginPage: React.FC = () => {
//   return (
//     <main className="flex relative gap-10 items-center pr-16 bg-indigo-950 max-md:pr-5">
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/c620a29220752ac913cfee97b3aff92262f00205b5458015fc6029d7e15e9868?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//         alt=""
//         className="object-contain z-0 self-stretch my-auto aspect-[0.77] min-w-[240px] w-[665px] max-md:max-w-full"
//       />
//       <div className="flex z-0 flex-col justify-center items-end self-stretch my-auto min-w-[240px] w-[615px] max-md:max-w-full">
//         <form className="flex overflow-hidden flex-col justify-center py-16 pr-12 pl-11 max-w-full w-[615px] max-md:px-5">
//           <h1 className="w-full text-5xl font-bold leading-none text-white whitespace-nowrap max-md:max-w-full max-md:text-4xl">
//             Login
//           </h1>
//           <div className="flex flex-col justify-center self-end mt-16 w-full max-w-[520px] max-md:mt-10 max-md:max-w-full">
//             <div className="flex gap-10 items-start w-full max-md:max-w-full">
//               <InputField
//                 label="Email"
//                 type="email"
//                 placeholder="Enter your email"
//                 id="email"
//               />
//             </div>
//             <div className="flex gap-10 items-start mt-8 w-full max-md:max-w-full">
//               <InputField
//                 label="Password"
//                 type="password"
//                 placeholder="Enter your password"
//                 id="password"
//               />
//             </div>
//             <div className="flex overflow-hidden flex-wrap gap-10 items-start mt-8 text-base font-medium max-md:max-w-full">
//               <ActionButton text="Forgot Password?" variant="secondary" />
//               <ActionButton text="Login" variant="primary" />
//             </div>
//           </div>
//         </form>
//         <div className="flex overflow-hidden flex-wrap gap-10 justify-center items-center p-12 max-w-full w-[615px] max-md:px-5">
//           <div className="flex flex-col grow shrink justify-center self-stretch my-auto text-white min-w-[240px] w-[239px]">
//             <h2 className="text-2xl font-bold leading-none">New User?</h2>
//             <p className="mt-3 text-base">Create an account.</p>
//           </div>
//           <div className="flex overflow-hidden flex-col grow shrink self-stretch my-auto text-base font-medium text-black whitespace-nowrap min-h-[55px] w-[152px]">
//             <ActionButton text="Sign-Up" variant="primary" />
//           </div>
//         </div>
//       </div>
//       <div className="flex absolute bottom-24 z-0 flex-col justify-center self-start left-[110px] min-w-[240px] w-[430px] max-md:max-w-full">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/1697f35c1acef68c11d70943644d60c4d52452d0fa30577381523729dc4d02eb?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//           alt=""
//           className="object-contain max-w-full aspect-[0.65] w-[430px]"
//         />
//       </div>
//     </main>
//   );
// }

// "use client";

// import * as React from "react";
// import { InputField } from "./InputField";
// import { ActionButton } from "./ActionButton";
// import Link from "next/link";

// interface LoginPageProps {
//   onSignup: () => void; // Handles navigation to Sign-Up page
//   onLogin: () => void; // Handles navigation to QuizDashBoard
// }

// // , onLogin
// export const LoginPage: React.FC<LoginPageProps> = ({ onSignup }) => {
//   return (
//     <main className="flex relative gap-10 items-center pr-16 bg-indigo-950 max-md:pr-5 ">
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/a5c813bd0f17167552339badf499adf90c927a593e82ffe7d4a48a54953f383c?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//         alt=""
//         width={726}
//         height={1072}
//         className=" object-contain z-0 self-stretch my-auto aspect-[0.68] min-w-[240px] w-[726px] max-md:max-w-full"
//       />
//       <div className="flex z-0 flex-col justify-center items-end self-stretch my-auto min-w-[240px] w-[615px] max-md:max-w-full">
//         <form className="flex overflow-hidden flex-col justify-center py-16 pr-12 pl-11 max-w-full w-[615px] max-md:px-5">
//           <h1 className="w-full text-5xl font-bold leading-none text-white whitespace-nowrap max-md:max-w-full max-md:text-4xl">
//             Login
//           </h1>
//           <div className="flex flex-col justify-center self-end mt-16 w-full max-w-[520px] max-md:mt-10 max-md:max-w-full">
//             <div className="flex gap-10 items-start w-full max-md:max-w-full">
//               <InputField
//                 label="Email"
//                 type="email"
//                 placeholder="Enter your email"
//                 id="email"
//               />
//             </div>
//             <div className="flex gap-10 items-start mt-8 w-full max-md:max-w-full">
//               <InputField
//                 label="Password"
//                 type="password"
//                 placeholder="Enter your password"
//                 id="password"
//               />
//             </div>
//             <div className="flex  flex-wrap justify-between item-center mt-8 text-base font-medium max-md:flex-col max-w-full w-[615px]  max-md:gap-5">

//               {/* Left-aligned "Forgot Password?" button */}
//               <div className="flex">
//                 <ActionButton text="Forgot Password?" variant="secondary" />
//               </div>
//               {/* Right-aligned "Login" button */}
//               <div className="flex">
//                 <Link href="/quizdashboard">
//                   <button
//                     className="flex overflow-hidden flex-col text-base font-medium text-black min-h-[55px] w-[240px]"
//                   >
//                     <span className="px-3 py-4 max-w-full bg-sky-300 rounded-lg min-h-[55px] w-[240px]">
//                       Log in
//                     </span>
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </form>
//         <div className="flex overflow-hidden flex-wrap gap-10 justify-center items-center p-12 max-w-full w-[615px] max-md:px-5">
//           <div className="flex flex-col grow shrink justify-center self-stretch my-auto text-white min-w-[240px] w-[239px]">
//             <h2 className="text-2xl font-bold leading-none">New User?</h2>
//             <p className="mt-3 text-base">Create an account.</p>
//           </div>
//           <div className="flex   justify-between item-center  text-base font-medium ">
//             {/* Pass the onSignup function to the ActionButton */}
//             {/* <ActionButton text="Sign-Up" variant="primary" onClick={onSignup}  /> */}
//             <button
//               onClick={onSignup}
//               className="flex overflow-hidden flex-col text-base font-medium text-black min-h-[55px] w-[190px]"
//             >
//               <span className="px-3 py-4 max-w-full bg-sky-300 rounded-lg min-h-[55px] w-[190px]">
//                 Signup
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* <div className="flex absolute bottom-24 z-0 flex-col justify-center self-start left-[110px] min-w-[240px] w-[430px] max-md:max-w-full"> */}
//       {/* <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/1697f35c1acef68c11d70943644d60c4d52452d0fa30577381523729dc4d02eb?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//           alt=""
//           width={429.6}
//           height={660}
//           className="object-contain max-w-full aspect-[0.65] w-[430px]"
//         /> */}
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
//       {/* </div> */}
//     </main>
//   );
// };




//Responsive design

import * as React from 'react';
import { InputField } from './InputField';
import { Button } from './Button';
import { Image } from './Image';
import Link from "next/link";

export const LoginPage: React.FC = () => {
  return (
    // pr-6
    <main className="flex relative gap-10 items-center  w-full min-h-screen bg-indigo-950 max-md:flex-col max-md:p-5" role="main">
      {/* <Image
        src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/c620a29220752ac913cfee97b3aff92262f00205b5458015fc6029d7e15e9868?apiKey=415d78a55fd94a108248afe5c238a8ae&"
        alt="Login page decoration"
        className="object-contain z-0 self-stretch my-auto aspect-[0.77] min-w-[240px] w-[665px] max-md:hidden max-md:max-w-full"
      /> */}
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/c620a29220752ac913cfee97b3aff92262f00205b5458015fc6029d7e15e9868?apiKey=415d78a55fd94a108248afe5c238a8ae&"
        alt="Login page decoration"
        className="object-contain z-0 self-stretch my-auto aspect-[0.77] min-w-[240px] w-[665px] h-screen max-md:hidden max-md:max-w-full"
      />

      <section className="flex z-0 flex-col justify-center items-end self-stretch my-auto min-w-[240px] w-[615px] max-md:items-center max-md:w-full max-md:max-w-full">
        <form className="flex overflow-hidden flex-col justify-center py-16 pr-12 pl-11 max-w-full w-[615px] max-md:p-5 max-md:w-full">
          <h1 className="w-full text-5xl font-bold leading-none text-white whitespace-nowrap max-md:max-w-full max-md:text-4xl max-md:text-center">
            Login
          </h1>

          <div className="flex flex-col justify-center self-end mt-16 w-full max-w-[520px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-10 items-start w-full max-md:max-w-full">
              <InputField
                label="Email"
                type="email"
                placeholder="Enter your email"
                id="email"
              />
            </div>

            <div className="flex gap-10 items-start mt-8 w-full max-md:max-w-full">
              <InputField
                label="Password"
                type="password"
                placeholder="Enter your password"
                id="password"
              />
            </div>

            <div className="flex overflow-hidden flex-wrap gap-10 items-start mt-8 text-base font-medium max-md:justify-center max-md:max-w-full">
              <Button variant="secondary">Forgot Password?</Button>
              {/* <Link href="/quizdashboard">
              <Button variant="primary">Login</Button>
              </Link> */}
              <div className="flex overflow-hidden flex-col grow self-stretch my-auto text-base font-medium text-black whitespace-nowrap min-h-[55px] w-[152px] max-md:w-full">
                <Link href="/quizdashboard">
                  <Button variant="primary">Log in</Button>
                </Link>
              </div>
            </div>
          </div>
        </form>

        <div className="flex justify-between  p-12 max-w-full w-[615px] max-md:p-5">
          {/* // overflow-hidden flex-wrap gap-10 justify-center items-center p-12 max-w-full w-[615px] max-md:p-5" */}
          <div className="flex flex-col grow justify-center self-stretch my-auto text-white min-w-[240px] w-[239px]">
            <h2 className="text-2xl font-bold leading-none">New User?</h2>
            <p className="mt-3 text-base">Create an account.</p>
          </div>
          <div className="flex overflow-hidden flex-col grow self-stretch my-auto text-base font-medium text-black whitespace-nowrap min-h-[55px] w-[200px] max-md:w-full">
            <Link href="/signup">
              <Button variant="primary">Sign-Up</Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="flex absolute bottom-24 z-0 flex-col justify-center self-start left-[110px] min-w-[240px] w-[430px] max-md:hidden">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/1697f35c1acef68c11d70943644d60c4d52452d0fa30577381523729dc4d02eb?apiKey=415d78a55fd94a108248afe5c238a8ae&"
          alt="Decorative footer image"
          className="object-contain max-w-full aspect-[0.65] w-[430px]"
        />
      </div>
    </main>
  );
};


// export const LoginPage: React.FC = () => {
//   return (
//     <main className="flex relative gap-10 items-center w-full min-h-screen h-screen bg-indigo-950 max-md:flex-col max-md:p-5" role="main">
//       {/* Left-side decorative image */}
//       <div className="flex w-[50%] h-screen max-md:hidden">
//         <Image
//           src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/c620a29220752ac913cfee97b3aff92262f00205b5458015fc6029d7e15e9868?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//           alt="Login page decoration"
//           className="object-cover w-full h-full"
//         />
//       </div>

//       {/* Right-side form section */}
//       <section className="flex z-0 flex-col justify-center items-end self-stretch my-auto w-[50%] max-md:w-full max-md:max-w-full">
//         <form className="flex overflow-hidden flex-col justify-center py-16 pr-12 pl-11 max-w-full w-[615px] max-md:p-5 max-md:w-full">
//           <h1 className="w-full text-5xl font-bold leading-none text-white whitespace-nowrap max-md:max-w-full max-md:text-4xl max-md:text-center">
//             Login
//           </h1>

//           <div className="flex flex-col justify-center self-end mt-16 w-full max-w-[520px] max-md:mt-10 max-md:max-w-full">
//             <div className="flex gap-10 items-start w-full max-md:max-w-full">
//               <InputField
//                 label="Email"
//                 type="email"
//                 placeholder="Enter your email"
//                 id="email"
//               />
//             </div>

//             <div className="flex gap-10 items-start mt-8 w-full max-md:max-w-full">
//               <InputField
//                 label="Password"
//                 type="password"
//                 placeholder="Enter your password"
//                 id="password"
//               />
//             </div>

//             <div className="flex overflow-hidden flex-wrap gap-10 items-start mt-8 text-base font-medium max-md:justify-center max-md:max-w-full">
//               <Button variant="secondary">Forgot Password?</Button>
//               <div className="flex overflow-hidden flex-col grow self-stretch my-auto text-base font-medium text-black whitespace-nowrap min-h-[55px] w-[152px] max-md:w-full">
//                 <Link href="/quizdashboard">
//                   <Button variant="primary">Log in</Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </form>

//         <div className="flex justify-between p-12 max-w-full w-[615px] max-md:p-5">
//           <div className="flex flex-col grow justify-center self-stretch my-auto text-white min-w-[240px] w-[239px]">
//             <h2 className="text-2xl font-bold leading-none">New User?</h2>
//             <p className="mt-3 text-base">Create an account.</p>
//           </div>
//           <div className="flex overflow-hidden flex-col grow self-stretch my-auto text-base font-medium text-black whitespace-nowrap min-h-[55px] w-[200px] max-md:w-full">
//             <Link href="/signup">
//               <Button variant="primary">Sign-Up</Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Decorative footer image */}
//       <div className="flex absolute bottom-24 z-0 flex-col justify-center self-start left-[110px] min-w-[240px] w-[430px] max-md:hidden">
//         <Image
//           src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/1697f35c1acef68c11d70943644d60c4d52452d0fa30577381523729dc4d02eb?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//           alt="Decorative footer image"
//           className="object-contain max-w-full aspect-[0.65] w-[430px]"
//         />
//       </div>
//     </main>
//   );
// };


// export const LoginPage: React.FC = () => {
//   return (
//     <main className="flex relative gap-10 items-center w-full min-h-screen bg-indigo-950 max-md:flex-col max-md:p-5" role="main">
//       {/* Left-side decorative image */}
//       <div className="flex w-[50%] h-screen overflow-hidden max-md:hidden">
//         <Image
//           src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/c620a29220752ac913cfee97b3aff92262f00205b5458015fc6029d7e15e9868?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//           alt="Login page decoration"
//           className="object-cover w-full h-full"
//         />
//       </div>

//       {/* Right-side form section */}
//       <section className="flex z-0 flex-col justify-center items-end self-stretch my-auto w-[50%] max-md:w-full max-md:max-w-full">
//         <form className="flex overflow-hidden flex-col justify-center py-16 pr-12 pl-11 max-w-full w-[615px] max-md:p-5 max-md:w-full">
//           <h1 className="w-full text-5xl font-bold leading-none text-white whitespace-nowrap max-md:max-w-full max-md:text-4xl max-md:text-center">
//             Login
//           </h1>

//           <div className="flex flex-col justify-center self-end mt-16 w-full max-w-[520px] max-md:mt-10 max-md:max-w-full">
//             <div className="flex gap-10 items-start w-full max-md:max-w-full">
//               <InputField
//                 label="Email"
//                 type="email"
//                 placeholder="Enter your email"
//                 id="email"
//               />
//             </div>

//             <div className="flex gap-10 items-start mt-8 w-full max-md:max-w-full">
//               <InputField
//                 label="Password"
//                 type="password"
//                 placeholder="Enter your password"
//                 id="password"
//               />
//             </div>

//             <div className="flex overflow-hidden flex-wrap gap-10 items-start mt-8 text-base font-medium max-md:justify-center max-md:max-w-full">
//               <Button variant="secondary">Forgot Password?</Button>
//               <div className="flex overflow-hidden flex-col grow self-stretch my-auto text-base font-medium text-black whitespace-nowrap min-h-[55px] w-[152px] max-md:w-full">
//                 <Link href="/quizdashboard">
//                   <Button variant="primary">Log in</Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </form>

//         <div className="flex justify-between p-12 max-w-full w-[615px] max-md:p-5">
//           <div className="flex flex-col grow justify-center self-stretch my-auto text-white min-w-[240px] w-[239px]">
//             <h2 className="text-2xl font-bold leading-none">New User?</h2>
//             <p className="mt-3 text-base">Create an account.</p>
//           </div>
//           <div className="flex overflow-hidden flex-col grow self-stretch my-auto text-base font-medium text-black whitespace-nowrap min-h-[55px] w-[200px] max-md:w-full">
//             <Link href="/signup">
//               <Button variant="primary">Sign-Up</Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Decorative footer image */}
//       <div className="flex absolute bottom-24 z-0 flex-col justify-center self-start left-[110px] min-w-[240px] w-[430px] max-md:hidden">
//         <Image
//           src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/1697f35c1acef68c11d70943644d60c4d52452d0fa30577381523729dc4d02eb?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//           alt="Decorative footer image"
//           className="object-contain max-w-full aspect-[0.65] w-[430px]"
//         />
//       </div>
//     </main>
//   );
// };