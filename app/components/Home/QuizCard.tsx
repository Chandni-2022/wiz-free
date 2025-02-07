// "use client";
// import * as React from 'react';
// import { QuizCardProps } from './types';


// // export const QuizCard: React.FC<QuizCardProps> = ({
// //   title,
// //   description,
// //   // iconSrc,
// //   isHighlighted
// // }) => {
// //   return (
// //     <div className="flex flex-col grow shrink justify-center items-center self-stretch p-5 my-auto bg-white rounded-lg min-w-[240px] w-[200px]">
// //       <div className="flex flex-col max-w-full w-[210px]">
// //         <div className="flex flex-col justify-center items-center px-5 py-6 bg-indigo-300 rounded-lg max-md:px-5">
// //           <div className="flex shrink-0 bg-white h-[100px] rounded-[50px] w-[100px]" role="img" aria-label={`${title} icon`} />
// //         </div>
// //       </div>
// //       <div className="flex flex-col items-center mt-1.5 max-w-full text-center min-h-[52px] w-[210px]">
// //         <h3 className="text-xl leading-none text-black">{title}</h3>
// //         <p className="text-base leading-loose text-black text-opacity-50">{description}</p>
// //       </div>

// //       <button
// //         className="flex overflow-hidden flex-col justify-center items-center mt-1.5 w-20 text-sm font-medium leading-6 text-black"
// //         aria-label={`Take ${title} test`}
// //       >
// //         <span className="py-2 pr-2.5 pl-2.5 w-full bg-indigo-300 rounded-lg min-h-[40px]">Take Test</span>
// //       </button>

// //     </div>
// //   );
// // };


// export const QuizCard: React.FC<QuizCardProps> = ({
//   title,
//   description,
//   isHighlighted,
// }) => {
//   return (
//     <div className="relative flex flex-col grow shrink justify-center items-center self-stretch p-5 my-auto bg-white rounded-lg min-w-[240px] w-[200px]">
//       <div className="flex flex-col max-w-full w-[210px] relative">
//         <div className="flex flex-col justify-center items-center px-5 py-6 bg-indigo-300 rounded-lg max-md:px-5 relative">
//           {/* Highlighted Badge */}
//           {isHighlighted && (
//             <div className="absolute -top-3 -right-3 z-10 flex items-center justify-center h-[30px] w-[30px] bg-violet-400 bg-opacity-50 rounded-full shadow-md">
//             <img
//               src="/svg/heart.svg"
//               alt="Heart"
//               className="h-[20px] w-[20px]"
//             />
//           </div>
          
//           )}
//           {/* Icon Placeholder */}
//           <div
//             className="flex shrink-0 bg-white h-[100px] rounded-full w-[100px]"
//             role="img"
//             aria-label={`${title} icon`}
//           />
//         </div>
//       </div>
//       <div className="flex flex-col items-center mt-1.5 max-w-full text-center min-h-[52px] w-[210px]">
//         <h3 className="text-xl leading-none text-black">{title}</h3>
//         <p className="text-base leading-loose text-black text-opacity-50">{description}</p>
//       </div>

//       <button
//         className="flex overflow-hidden flex-col justify-center items-center mt-1.5 w-20 text-sm font-medium leading-6 text-black"
//         aria-label={`Take ${title} test`}
//       >
//         <span className="py-2 pr-2.5 pl-2.5 w-full bg-indigo-300 rounded-lg min-h-[40px]">
//           Take Test
//         </span>
//       </button>
//     </div>
//   );
// };

// import React, { useState } from "react";

// interface QuizCardProps {
//   title: string;
//   description: string;
//   isHighlighted: boolean;
// }

// export const QuizCard: React.FC<QuizCardProps> = ({
//   title,
//   description,
//   isHighlighted,
// }) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div className="relative flex flex-col grow shrink justify-center items-center self-stretch p-5 my-auto bg-white rounded-lg min-w-[240px] w-[200px]">
//       <div
//         className="flex flex-col max-w-full w-[210px] relative"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         <div
//           className={`flex flex-col justify-center items-center px-5 py-6 rounded-lg max-md:px-5 relative ${
//             hovered ? "bg-indigo-500" : "bg-indigo-300"
//           } transition-all duration-300`}
//         >
//           {/* Highlighted Badge */}
//           {isHighlighted && (
//             <div className="absolute -top-3 -right-3 z-10 flex items-center justify-center h-[30px] w-[30px] bg-violet-400 bg-opacity-50 rounded-full shadow-md">
//               <img
//                 src="/svg/heart.svg"
//                 alt="Heart"
//                 className="h-[20px] w-[20px]"
//               />
//             </div>
//           )}
//           {/* Icon Placeholder */}
//           <div
//             className="flex shrink-0 bg-white h-[100px] rounded-full w-[100px]"
//             role="img"
//             aria-label={`${title} icon`}
//           />
//           {/* Hover Text */}
//           {hovered && (
//             <div className="absolute flex flex-col items-center justify-center text-white text-sm font-medium leading-tight">
//               <p>Click to start</p>
//               <p>Improve your skills</p>
//               <p>Have fun!</p>
//             </div>
//           )}
//         </div>
//       </div>
      
//       <div className="flex flex-col items-center mt-1.5 max-w-full text-center min-h-[52px] w-[210px]">
//         <h3 className="text-xl leading-none text-black">{title}</h3>
//         <p className="text-base leading-loose text-black text-opacity-50">
//           {description}
//         </p>
//       </div>

//       <button
//         className="flex overflow-hidden flex-col justify-center items-center mt-1.5 w-20 text-sm font-medium leading-6 text-black"
//         aria-label={`Take ${title} test`}
//       >
//         <span className="py-2 pr-2.5 pl-2.5 w-full bg-indigo-300 rounded-lg min-h-[40px]">
//           Take Test
//         </span>
//       </button>
//     </div>
//   );
// };

// import React, { useState } from "react";

// interface QuizCardProps {
//   title: string;
//   description: string;
//   isHighlighted: boolean;
// }

// export const QuizCard: React.FC<QuizCardProps> = ({
//   title,
//   description,
//   isHighlighted,
// }) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div className="relative flex flex-col grow shrink justify-center items-center self-stretch p-5 my-auto bg-white rounded-lg min-w-[240px] w-[200px]">
//       <div
//         className="flex flex-col max-w-full w-[210px] relative"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         <div
//           className={`flex flex-col justify-center items-center px-5 py-6 rounded-lg max-md:px-5 relative transition-all duration-300`}
//           style={{
//             backgroundColor: hovered ? "white" : "#A5B4FC", // white on hover, light blue when not hovered
//             height: "150px", // Fixed height to maintain consistency
//           }}
//         >
//           {/* Highlighted Badge */}
//           {isHighlighted && (
//             <div className="absolute -top-3 -right-3 z-10 flex items-center justify-center h-[30px] w-[30px] bg-violet-400 bg-opacity-50 rounded-full shadow-md">
//               <img
//                 src="/svg/heart.svg"
//                 alt="Heart"
//                 className="h-[20px] w-[20px]"
//               />
//             </div>
//           )}

//           {/* On Mouse Enter - Show Description */}
//           {hovered ? (
//             <div className="absolute flex flex-col items-center justify-center text-black text-sm font-medium leading-tight px-4 py-2">
//               <p>{description}</p>
//             </div>
//           ) : (
//             // On Mouse Leave - Show Circle
//             <div
//               className="flex shrink-0 bg-white h-[100px] rounded-full w-[100px]"
//               role="img"
//               aria-label={`${title} icon`}
//             />
//           )}
//         </div>
//       </div>
//       <div className="flex flex-col items-center mt-1.5 max-w-full text-center min-h-[52px] w-[210px]">
//         <h3 className="text-xl leading-none text-black">{title}</h3>
//         <p className="text-base leading-loose text-black text-opacity-50">
//           {description}
//         </p>
//       </div>

//       <button
//         className="flex overflow-hidden flex-col justify-center items-center mt-1.5 w-20 text-sm font-medium leading-6 text-black"
//         aria-label={`Take ${title} test`}
//       >
//         <span className="py-2 pr-2.5 pl-2.5 w-full bg-indigo-300 rounded-lg min-h-[40px]">
//           Take Test
//         </span>
//       </button>
//     </div>
//   );
// };

// import React, { useState } from "react";
// import { cardData } from "../../data/cardData";  // Import the data

// interface QuizCardProps {
//   title: string;
//   description: string;
//   isHighlighted: boolean;
// }

// export const QuizCard: React.FC<QuizCardProps> = ({
//   title,
//   description,
//   isHighlighted,
// }) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div className="relative flex flex-col grow shrink justify-center items-center self-stretch p-5 my-auto bg-white rounded-lg min-w-[240px] w-[200px]">
//       <div
//         className="flex flex-col max-w-full w-[210px] relative"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         <div
//           className={`flex flex-col justify-center items-center px-5 py-6 rounded-lg max-md:px-5 relative transition-all duration-300`}
//           style={{
//             backgroundColor: hovered ? "white" : "#A5B4FC", // white on hover, light blue when not hovered
//             height: "150px", // Fixed height to maintain consistency
//           }}
//         >
//           {/* Highlighted Badge */}
//           {isHighlighted && (
//             <div className="absolute -top-3 -right-3 z-10 flex items-center justify-center h-[30px] w-[30px] bg-violet-400 bg-opacity-50 rounded-full shadow-md">
//               <img
//                 src="/svg/heart.svg"
//                 alt="Heart"
//                 className="h-[20px] w-[20px]"
//               />
//             </div>
//           )}

//           {/* On Mouse Enter - Show Description */}
//           {hovered ? (
//             <div className="absolute flex flex-col items-center justify-center text-black text-sm font-medium leading-tight px-4 py-2">
//               <p>{description}</p>
//             </div>
//           ) : (
//             // On Mouse Leave - Show Circle
//             <div
//               className="flex shrink-0 bg-white h-[100px] rounded-full w-[100px]"
//               role="img"
//               aria-label={`${title} icon`}
//             />
//           )}
//         </div>
//       </div>
//       <div className="flex flex-col items-center mt-1.5 max-w-full text-center min-h-[52px] w-[210px]">
//         <h3 className="text-xl leading-none text-black">{title}</h3>
//         <p className="text-base leading-loose text-black text-opacity-50">
//           {description}
//         </p>
//       </div>

//       <button
//         className="flex overflow-hidden flex-col justify-center items-center mt-1.5 w-20 text-sm font-medium leading-6 text-black"
//         aria-label={`Take ${title} test`}
//       >
//         <span className="py-2 pr-2.5 pl-2.5 w-full bg-indigo-300 rounded-lg min-h-[40px]">
//           Take Test
//         </span>
//       </button>
//     </div>
//   );
// };

import React, { useState } from "react";
import Link from "next/link";

interface QuizCardProps {
  title: string;
  description: string;
  isHighlighted: boolean;
  showDescription:string;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  title,
  description,
  isHighlighted,
  showDescription,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex flex-col grow shrink justify-center items-center self-stretch p-5 my-auto bg-white rounded-lg min-w-[240px] w-[200px]">
      <div
        className="flex flex-col max-w-full w-[210px] relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`flex flex-col justify-center items-center px-5 py-6 rounded-lg max-md:px-5 relative transition-all duration-300`}
          style={{
            backgroundColor: hovered ? "white" : "#A5B4FC", // white on hover, light blue when not hovered
            height: "150px", // Fixed height to maintain consistency
          }}
        >
          {/* Highlighted Badge */}
          {isHighlighted && (
            <div className="absolute -top-3 -right-3 z-10 flex items-center justify-center h-[30px] w-[30px] bg-violet-400 bg-opacity-50 rounded-full shadow-md">
              <img
                src="/svg/heart.svg"
                alt="Heart"
                className="h-[20px] w-[20px]"
              />
            </div>
          )}

          {/* On Mouse Enter - Show Description */}
          {hovered ? (
            <div className="absolute flex flex-col items-center justify-center text-black text-sm font-medium leading-tight px-4 py-2">
              <p>{showDescription}</p> {/* Displaying description from cardData */}
            </div>
          ) : (
            // On Mouse Leave - Show Circle
            <div
              className="flex shrink-0 bg-white h-[100px] rounded-full w-[100px]"
              role="img"
              aria-label={`${title} icon`}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col items-center mt-1.5 max-w-full text-center min-h-[52px] w-[210px]">
        <h3 className="text-xl leading-none text-black">{title}</h3>
        <p className="text-base leading-loose text-black text-opacity-50">
          {description}
        </p>
      </div>
      <Link href="/quiz">
      <button
        className="flex overflow-hidden flex-col justify-center items-center mt-1.5 w-20 text-sm font-medium leading-6 text-black"
        aria-label={`Take ${title} test`}
      >
        <span className="py-2 pr-2.5 pl-2.5 w-full bg-indigo-300 rounded-lg min-h-[40px]">
          Take Test
        </span>
      </button>
      </Link>
    </div>
  );
};
