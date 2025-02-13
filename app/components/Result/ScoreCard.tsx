// // // // "use client";
// // // // import * as React from "react";
// // // // import { ScoreCardProps } from "./types";
// // // // export const ScoreCard: React.FC<ScoreCardProps> = ({ icon, label, value }) => (
// // // //   <div className="flex overflow-hidden flex-wrap grow shrink gap-10 items-center py-5 pl-8 h-full rounded-md min-w-[240px] w-[408px] max-md:max-w-full">
// // // //     <div className="flex gap-3 items-center self-stretch my-auto min-w-[240px]">
// // // //       {icon && (
// // // //         <img
// // // //           loading="lazy"
// // // //           src={icon}
// // // //           alt=""
// // // //           width={40}
// // // //           height={40}
// // // //           className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
// // // //         />
// // // //       )}
// // // //       <div className="flex-1 shrink gap-2 self-stretch my-auto w-[222px]">
// // // //         {label}
// // // //       </div>
// // // //     </div>
// // // //     <div className="flex-1 grow shrink gap-2 self-stretch my-auto whitespace-nowrap w-[71px]">
// // // //       {value}
// // // //     </div>
// // // //   </div>
// // // // );

// // // "use client";
// // // import * as React from "react";
// // // import { ScoreCardProps } from "./types";

// // // export const ScoreCard: React.FC<ScoreCardProps> = ({ icon, label, value }) => (
// // //   <div className="flex flex-col sm:flex-row gap-4 items-center py-5 px-6 bg-indigo-950 rounded-md w-full sm:w-[408px]">
// // //     <div className="flex items-center gap-3">
// // //       {icon && (
// // //         <img
// // //           loading="lazy"
// // //           src={icon}
// // //           alt={label || "Score Icon"}
// // //           width={40}
// // //           height={40}
// // //           className="object-contain w-10 h-10"
// // //         />
// // //       )}
// // //       <div className="text-lg font-medium">{label}</div>
// // //     </div>

// // //     <div className="text-xl font-bold ml-auto">{value}</div>
// // //   </div>
// // // );


// // // ScoreCard.tsx
// // // ScoreCard.tsx

// // interface ScoreCardProps {
// //   icon?: string;  // The icon is optional, so it can be a string (URL) or undefined.
// //   label: string;  // The label is required.
// //   value: string;  // The value is required and should be a string.
// // }

// // export const ScoreCard: React.FC<ScoreCardProps> = ({ icon, label, value }) => (
// //   <div className="flex flex-col sm:flex-row gap-4 items-center py-5 px-6 bg-indigo-950 rounded-md w-full sm:w-[408px]">
// //     <div className="flex items-center gap-3">
// //       {icon && (
// //         <img
// //           loading="lazy"
// //           src={icon}
// //           alt={label || "Score Icon"}
// //           width={40}
// //           height={40}
// //           className="object-contain w-10 h-10"
// //         />
// //       )}
// //       <div className="text-lg font-medium">{label}</div>
// //     </div>
// //     <div className="text-xl font-bold ml-auto">{value}</div>
// //   </div>
// // );
// import * as React from "react";
// import { ScoreCardProps } from "./types";

// export const ScoreCard: React.FC<ScoreCardProps> = ({ icon, label, value }) => {
//   return (
//     <div className="flex overflow-hidden flex-wrap grow shrink gap-10 items-center py-5 pl-8 h-full rounded-md min-w-[240px] w-[408px] max-md:max-w-full">
//       <div className="flex gap-3 items-center self-stretch my-auto min-w-[240px]">
//         {icon && (
//           <img
//             loading="lazy"
//             src={icon}
//             alt=""
//             className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
//           />
//         )}
//         <div className="flex-1 shrink gap-2 self-stretch my-auto w-[222px]">
//           {label}
//         </div>
//       </div>
//       <div className="flex-1 grow shrink gap-2 self-stretch my-auto whitespace-nowrap w-[71px]">
//         {value}
//       </div>
//     </div>
//   );
// };