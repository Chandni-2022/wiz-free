import * as React from "react";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { Image } from "./Image";
import Link from "next/link";
import '../styles/custom.css';
export const LoginPage: React.FC = () => {
  return (
    <main className="h-screen fixed flex flex-col md:flex-row lg:flex-row items-center w-full bg-indigo-950 relative">
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
        <form className="flex flex-col w-full max-w-[615px] md:max-w-[615px]">
          <h1 className="text-5xl font-bold text-white  text-start">Login</h1>
          <div className="mt-10 w-full">
            <InputField label="Email" type="email" placeholder="Enter your email" id="email" />
          </div>
          <div className="mt-8 w-full">
            <InputField label="Password" type="password" placeholder="Enter your password" id="password" />
          </div>
          <div className="flex flex-col sm:flex-col md:flex-row gap-6 items-center mt-8 justify-between">
            <Button variant="secondary">Forgot Password?</Button>
            <Link href="/quizdashboard" passHref legacyBehavior>
              <a className="flex justify-center md:w-auto w-full">
                <Button variant="primary">Login</Button>
              </a>
            </Link>
          </div>
          <div className="flex flex-col justify-between mt-20 sm:flex-row md:flex-row items-center sm:flex-col space-y-2">
            <div className="flex flex-col text-center md:text-left  md:w-1/2 space-y-4">
              <h2 className="text-2xl font-bold text-white">New User?</h2>
              <p className="text-base text-white ">Create an account.</p>
            </div>
            <Link href="/signup" passHref legacyBehavior>
              <a className="w-full flex justify-end md:w-auto md:justify-center md:ml-auto">
                <Button variant="primary">Sign-Up</Button>
              </a>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};


//   return (
//     <main className="h-screen fixed flex flex-col md:flex-row items-center w-full bg-indigo-950 relative">
//       {/* Image section - Hidden for medium and larger screens */}
//       <div className="relative flex w-full justify-center md:w-1/2 md:h-screen md:hidden lg:hidden">
//         <Image
//           src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/c620a29220752ac913cfee97b3aff92262f00205b5458015fc6029d7e15e9868?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//           alt="Wave login"
//           className="object-contain w-full h-auto md:h-screen"
//         />

//         {/* Mascot image - slightly bigger (60%) and centered */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="relative w-[60%] h-[60%] max-w-[300px] md:max-w-[350px]">
//             <Image
//               src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/1697f35c1acef68c11d70943644d60c4d52452d0fa30577381523729dc4d02eb?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//               alt="Mascot image"
//               className="object-contain w-full h-full"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Login Form - Full width for medium screens */}
//       <section className="md:p-12 lg:p-16 flex flex-col justify-center items-center w-full md:w-full p-5 md:p-16">
//         <form className="flex flex-col w-full max-w-md">
//           <h1 className="text-5xl font-bold text-white text-center">Login</h1>

//           <div className="mt-10 w-full">
//             <InputField label="Email" type="email" placeholder="Enter your email" id="email" />
//           </div>

//           <div className="mt-8 w-full">
//             <InputField label="Password" type="password" placeholder="Enter your password" id="password" />
//           </div>

//           <div className="flex flex-col sm:flex-col md:flex-row gap-6 items-center mt-8 justify-center">
//             <Button variant="secondary">Forgot Password?</Button>
//             <Link href="/quizdashbord" passHref legacyBehavior>
//               <a className="flex justify-center md:w-auto w-full">
//                 <Button variant="primary">Login</Button>
//               </a>
//             </Link>
//           </div>




//           <div className="flex justify-between items-center mt-10 sm:flex-row">
//             <div className="flex flex-col">
//               <h2 className="text-2xl font-bold text-white">New User?</h2>
//               <p className="text-base text-white mt-3">Create an account.</p>
//             </div>
//             <Link href="/signup" passHref legacyBehavior>
//               <a className="w-1/2 flex justify-center">
//                 <Button variant="primary">Sign-Up</Button>
//               </a>
//             </Link>
//           </div>
//         </form>
//       </section>
//     </main>
//   );
// };







// export const LoginPage: React.FC = () => {
//   return (
//     <main className="h-screen fixed flex flex-col md:flex-row items-center w-full bg-indigo-950 relative">
//       {/* Image section - Hidden for medium screens */}
//       <div className="relative flex w-full justify-center md:w-1/2 md:h-screen md:hidden">
//         <Image
//           src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/c620a29220752ac913cfee97b3aff92262f00205b5458015fc6029d7e15e9868?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//           alt="Wave login"
//           className="object-contain w-full h-auto md:h-screen"
//         />

//         {/* Mascot image - slightly bigger (60%) and centered */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="relative w-[60%] h-[60%] max-w-[300px] md:max-w-[350px]">
//             <Image
//               src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/1697f35c1acef68c11d70943644d60c4d52452d0fa30577381523729dc4d02eb?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//               alt="Mascot image"
//               className="object-contain w-full h-full"
//             />
//           </div>
//         </div>
//       </div>

//       <section className="flex flex-col justify-between items-center w-full md:w-full p-5 md:p-16 ">
//         <div className="flex flex-col w-full max-w-md flex-grow justify-center">
//           <h1 className="text-5xl font-bold text-white text-center">Login</h1>

//           <div className="mt-10 w-full">
//             <InputField label="Email" type="email" placeholder="Enter your email" id="email" />
//           </div>

//           <div className="mt-8 w-full">
//             <InputField label="Password" type="password" placeholder="Enter your password" id="password" />
//           </div>

//           <div className="flex flex-wrap gap-6 items-center mt-8 justify-center w-full">
//             <Button variant="secondary">Forgot Password?</Button>
//             <Link href="/quizdashboard" passHref legacyBehavior>
//               <a className="w-full flex justify-center">
//                 <Button variant="primary">Log in</Button>
//               </a>
//             </Link>
//           </div>

//           <div className="flex justify-between items-center mt-10 sm:flex-row">
//             <div className="flex flex-col">
//               <h2 className="text-2xl font-bold text-white">New User?</h2>
//               <p className="text-base text-white mt-3">Create an account.</p>
//             </div>
//             <Link href="/signup" passHref legacyBehavior>
//               <a className="w-1/2 flex justify-center">
//                 <Button variant="primary">Sign-Up</Button>
//               </a>
//             </Link>
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// };




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