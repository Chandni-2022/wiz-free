// "use client"

// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Card } from "@/components/ui/card"
// import { ChevronDown } from "lucide-react"

// const graphData = [
//   { date: "3rd Jan", score: 42 },
//   { date: "4th Jan", score: 32 },
//   { date: "7th Jan", score: 25 },
//   { date: "11 Jan", score: 34 },
//   { date: "13 Jan", score: 28 },
//   { date: "15 Jan", score: 38 },
//   { date: "16th Jan", score: 30 },
// ]

// export function ProgressGraph() {
//   return (
//     <Card className="p-6 bg-[#272856] border border-gray-700 rounded-xl">
//       <h3 className="text-white mb-4">Progress Graph</h3>

//       {/* Score selector row */}
//       <div className="flex flex-col gap-3 mb-6 relative">
//   <span className="text-sm text-gray-300">Score</span>
//   <Select defaultValue="ui-ux">
//     <SelectTrigger className="w-[100px] bg-[#CAC9FF] border-0 text-black">
//       <SelectValue>UI UX</SelectValue>
//     </SelectTrigger>
//     <SelectContent className="bg-white border-gray-700 text-black absolute mt-1 z-50">
//       <SelectItem value="ui-ux">UI UX</SelectItem>
//       <SelectItem value="frontend">Frontend</SelectItem>
//       <SelectItem value="backend">Backend</SelectItem>
//     </SelectContent>
//   </Select>
// </div>


//       {/* Graph container */}
//       <div className="relative h-[300px] mt-8">
//         {/* Y-axis grid lines and labels */}
//         <div className="absolute inset-0 flex flex-col justify-between">
//           {[50, 40, 30, 20, 0].map((value) => (
//             <div key={value} className="relative flex items-center w-full">
//               <span className="text-xs text-gray-400 w-6">{value}</span>
//               <div className="flex-1 border-t border-dotted border-gray-700 ml-2" />
//             </div>
//           ))}
//         </div>

//         {/* Bars */}
//         <div className="absolute inset-x-10 inset-y-0 flex items-end justify-between">
//           {graphData.map((item, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <div
//                 className="w-8 bg-[#8787c5] rounded-sm transition-all duration-300"
//                 style={{
//                   height: `${(item.score / 10) * 100}%`,
//                 }}
//               />
//               <span className="text-xs text-gray-400 mt-2">{item.date}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* X-axis label */}
//       <div className="flex justify-end mt-2">
//         <span className="text-xs text-gray-400">Dates</span>
//       </div>
//     </Card>
//   )
// }

