// "use client";
// import * as React from 'react';
// import { QuizCard } from './QuizCard';
// import { SearchBar } from './SearchBar';
// import { Header } from './Header';
// import Link from "next/link";

// const quizCategories = [
//   { title: "Technology", description: "Test knowledge of tech " },
//   { title: "History", description: "Discover past events" },
//   { title: "Science", description: "Explore the world of science" },
//   { title: "Math Basic", description: "Test your math skills" },
// ];

// export const QuizDashboard: React.FC = () => {
//   return (
//     <main className="flex relative flex-col pt-20 bg-indigo-950" role="main">
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/00b496098a4d6d978602cbf3828adcf0d38f97bb224e82dcedef7a8a27411088?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//         alt=""
//         className="object-contain z-0 self-center w-full aspect-[11.49] max-md:max-w-full"
//       />
      
//       <div className="flex overflow-hidden z-0 flex-wrap gap-10 justify-center items-center px-44 py-8 w-full text-2xl font-bold leading-none text-white min-h-[130px] max-md:px-5 max-md:max-w-full">
//         <div className="flex shrink-0 self-stretch my-auto bg-white h-[70px] rounded-[50px] w-[70px]" role="img" aria-label="User avatar" />
//         <div className="flex-1 shrink self-stretch my-auto min-w-[240px] max-md:max-w-full">
//           Hello, [User Name]
//         </div>
//       </div>

//       <Header userName="User" />

//       <section className="flex z-0 flex-col self-center max-w-full text-base font-medium text-white whitespace-nowrap w-[1441px]">
//         <div className="flex overflow-hidden flex-col w-full h-[108px]">
//           <div className="flex flex-col justify-center px-44 py-8 w-full bg-indigo-300 max-md:px-5 max-md:max-w-full">
//             <div className="flex flex-col justify-center items-center px-96 w-full max-md:px-5 max-md:max-w-full">
//               <div className="flex overflow-hidden flex-col max-w-full min-h-[55px] w-[190px]">
//               <Link href="/rule">
//               <button className="px-3 py-4 w-full rounded-lg bg-indigo-950 min-h-[55px] text-center">
//                   Rules
//                   </button>
//                   </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="flex overflow-hidden z-0 gap-10 items-center px-44 py-9 w-full min-h-[130px] max-md:px-5 max-md:max-w-full">
//         <SearchBar onSearch={() => {}} />
//       </section>

//       <section className="flex overflow-hidden z-0 flex-col justify-center items-center px-44 py-8 w-full bg-indigo-950 max-md:px-5 max-md:max-w-full">
//         <div className="flex flex-col justify-center w-full max-w-[1090px] max-md:max-w-full">
//           <div className="flex flex-wrap gap-8 justify-center items-center w-full max-md:max-w-full">
//             {quizCategories.map((category, index) => (
//               <QuizCard
//                 key={index}
//                 title={category.title}
//                 description={category.description}
//                 isHighlighted={index === 0}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-col justify-center mt-16 w-full max-w-[1090px] max-md:mt-10 max-md:max-w-full">
//           <div className="flex flex-wrap gap-8 justify-center items-center w-full max-md:max-w-full">
//             {quizCategories.map((category, index) => (
//               <QuizCard
//                 key={`second-${index}`}
//                 title={category.title}
//                 description={category.description}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/9c960803e56a2dae921f7d6f813459133b06fc721c6a5a3f1f0e3a6c294cf209?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//         alt=""
//         className="object-contain z-0 self-center w-full aspect-[7.19] max-md:max-w-full"
//       />
//     </main>
//   );
// };

// "use client";
// import * as React from "react";
// import { QuizCard } from "./QuizCard";
// import { SearchBar } from "./SearchBar";
// import { Header } from "./Header";
// import Instructions from "../Rule/index";

// const quizCategories = [
//   { title: "Technology", description: "Test knowledge of tech " },
//   { title: "History", description: "Discover past events" },
//   { title: "Science", description: "Explore the world of science" },
//   { title: "Math Basic", description: "Test your math skills" },
// ];

// export const QuizDashboard: React.FC = () => {
//   const [isRulesOpen, setIsRulesOpen] = React.useState(false);

//   const toggleRules = () => {
//     setIsRulesOpen(!isRulesOpen); // Toggle dropdown visibility
//   };

//   return (
//     <main className="flex relative flex-col pt-20 bg-indigo-950" role="main">
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/00b496098a4d6d978602cbf3828adcf0d38f97bb224e82dcedef7a8a27411088?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//         alt=""
//         className="object-contain z-0 self-center w-full aspect-[11.49] max-md:max-w-full"
//       />

//       <div className="flex overflow-hidden z-0 flex-wrap gap-10 justify-center items-center px-44 py-8 w-full text-2xl font-bold leading-none text-white min-h-[130px] max-md:px-5 max-md:max-w-full">
//         <div className="flex shrink-0 self-stretch my-auto bg-white h-[70px] rounded-[50px] w-[70px]" role="img" aria-label="User avatar" />
//         <div className="flex-1 shrink self-stretch my-auto min-w-[240px] max-md:max-w-full">
//           Hello, [User Name]
//         </div>
//       </div>

//       <Header userName="User" />

//       {/* Rules Section with Toggle */}
//       <section className="flex z-0 flex-col self-center max-w-full text-base font-medium text-white whitespace-nowrap w-[1441px]">
//         <div className="flex overflow-hidden flex-col w-full h-[108px]">
//           <div className="flex flex-col justify-center px-44 py-8 w-full bg-indigo-300 max-md:px-5 max-md:max-w-full">
//             <div className="flex flex-col justify-center items-center px-96 w-full max-md:px-5 max-md:max-w-full">
//               <div className="flex overflow-hidden flex-col max-w-full min-h-[55px] w-[190px]">
//                 <button
//                   onClick={toggleRules} // Toggle dropdown visibility
//                   className="px-3 py-4 w-full rounded-lg bg-indigo-950 min-h-[55px] text-center"
//                 >
//                   {isRulesOpen ? "Close" : "Rules"} {/* Toggle button text */}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Dropdown Content (Rules) */}
//         <div
//           className={`${
//             isRulesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//           } overflow-hidden transition-all duration-500 ease-in-out`}
//         >
//           <div className="p-4 bg-gray-100 text-black mt-4 rounded-lg">
//             <h2 className="text-xl font-semibold">Rules</h2>
//             <p className="text-base">
//               Here are the rules for the quiz. Make sure to read them carefully before starting!
//             </p>
//             {/* Add more content here as needed */}
//           </div>
//         </div>
//       </section>

//       {/* Search Section */}
//       <section className="flex overflow-hidden z-0 gap-10 items-center px-44 py-9 w-full min-h-[130px] max-md:px-5 max-md:max-w-full">
//         <SearchBar onSearch={() => {}} />
//       </section>

//       {/* Quiz Categories Section */}
//       <section className="flex overflow-hidden z-0 flex-col justify-center items-center px-44 py-8 w-full bg-indigo-950 max-md:px-5 max-md:max-w-full">
//         <div className="flex flex-col justify-center w-full max-w-[1090px] max-md:max-w-full">
//           <div className="flex flex-wrap gap-8 justify-center items-center w-full max-md:max-w-full">
//             {quizCategories.map((category, index) => (
//               <QuizCard
//                 key={index}
//                 title={category.title}
//                 description={category.description}
//                 isHighlighted={index === 0}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-col justify-center mt-16 w-full max-w-[1090px] max-md:mt-10 max-md:max-w-full">
//           <div className="flex flex-wrap gap-8 justify-center items-center w-full max-md:max-w-full">
//             {quizCategories.map((category, index) => (
//               <QuizCard
//                 key={`second-${index}`}
//                 title={category.title}
//                 description={category.description}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/9c960803e56a2dae921f7d6f813459133b06fc721c6a5a3f1f0e3a6c294cf209?apiKey=415d78a55fd94a108248afe5c238a8ae&"
//         alt=""
//         className="object-contain z-0 self-center w-full aspect-[7.19] max-md:max-w-full"
//       />
//     </main>
//   );
// };

"use client";
import * as React from "react";
import { QuizCard } from "./QuizCard";
import { SearchBar } from "./SearchBar";
import { Header } from "./Header";
import Rules from "../Rule/index";


const quizCategories = [
  { title: "Technology", description: "Test knowledge of tech " },
  { title: "History", description: "Discover past events" },
  { title: "Science", description: "Explore the world of science" },
  { title: "Math Basic", description: "Test your math skills" },
];

export const QuizDashboard: React.FC = () => {
  const [isRulesOpen, setIsRulesOpen] = React.useState(false);

  const toggleRules = () => {
    setIsRulesOpen(!isRulesOpen); 
  };

  return (
    <main className="flex relative flex-col pt-20 bg-indigo-950" role="main">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/00b496098a4d6d978602cbf3828adcf0d38f97bb224e82dcedef7a8a27411088?apiKey=415d78a55fd94a108248afe5c238a8ae&"
        alt=""
        width={1441}
        height={125}
        className="object-contain z-0 self-center w-full aspect-[11.49] max-md:max-w-full"
      />

      <div className="flex overflow-hidden z-0 flex-wrap gap-10 justify-center items-center px-44 py-8 w-full text-2xl font-bold leading-none text-white min-h-[130px] max-md:px-5 max-md:max-w-full">
        <div className="flex shrink-0 self-stretch my-auto bg-white h-[70px] rounded-[50px] w-[70px]" role="img" aria-label="User avatar" />
        <div className="flex-1 shrink self-stretch my-auto min-w-[240px] max-md:max-w-full">
          Hello, [User Name]
        </div>
      </div>

      <Header userName="User" />

      {/* Rules Section with Toggle */}
      <section className="flex z-0 flex-col self-center max-w-full text-base font-medium text-white whitespace-nowrap w-[1441px]">
        <div className="flex overflow-hidden flex-col w-full h-[108px]">
          <div className="flex flex-col justify-center px-44 py-8 w-full bg-indigo-300 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col justify-center items-center px-96 w-full max-md:px-5 max-md:max-w-full">
              <div className="flex overflow-hidden flex-col max-w-full min-h-[55px] w-[190px]">
                <button
                  onClick={toggleRules} // Toggle dropdown visibility
                  className="px-3 py-4 w-full rounded-lg bg-indigo-950 min-h-[55px] text-center"
                >
                  {isRulesOpen ? "Close" : "Rules"} {/* Toggle button text */}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Dropdown Content (Rules) */}
        <div
          className={`${
            isRulesOpen ? "max-h-[590px] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <Rules />
           {/* Reusable Rules content component */}
        </div>
      </section>

      {/* Search Section */}
      <section className="flex overflow-hidden z-0 gap-10 items-center px-44 py-9 w-full min-h-[130px] max-md:px-5 max-md:max-w-full">
        <SearchBar onSearch={() => {}} />
      </section>

      {/* Quiz Categories Section */}
      <section className="flex overflow-hidden z-0 flex-col justify-center items-center px-44 py-8 w-full bg-indigo-950 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center w-full max-w-[1090px] max-md:max-w-full">
          <div className="flex flex-wrap gap-8 justify-center items-center w-full max-md:max-w-full">
            {quizCategories.map((category, index) => (
              <QuizCard
                key={index}
                title={category.title}
                description={category.description}
                isHighlighted={index === 0}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center mt-16 w-full max-w-[1090px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-8 justify-center items-center w-full max-md:max-w-full">
            {quizCategories.map((category, index) => (
              <QuizCard
                key={`second-${index}`}
                title={category.title}
                description={category.description}
              />
            ))}
          </div>
        </div>
      </section>

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/9c960803e56a2dae921f7d6f813459133b06fc721c6a5a3f1f0e3a6c294cf209?apiKey=415d78a55fd94a108248afe5c238a8ae&"
        alt=""
        width={1440}
        height={200}
        className="object-contain z-0 self-center w-full aspect-[7.19] max-md:max-w-full"
      />
    </main>
  );
};
