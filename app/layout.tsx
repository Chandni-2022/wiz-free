// import { Roboto } from "next/font/google";
// import "./globals.css";

// const roboto = Roboto({
//   subsets: ["latin"], // Specify the character subset(s) you need
//   variable: "--font-roboto", // Create a CSS variable for the font
//   weight: ["400", "700"], // Specify font weights (e.g., regular and bold)
// });

// import "./globals.css";
// export const metadata = {
//   title: "Glarimy-wiz Project ",
//   description: "A Next.js app For Quiz",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       {/* overflow-hidden */}
//       <body className="min-h-screen  relative mx-auto  lg:max-w-[70rem] xl:max-w-[92rem] 2xl:max-w-[92rem] ">
//         {children}
//       </body>
//     </html>
//   );
// }


import React from "react";
import "./globals.css";

export const metadata = {
  title: "Glarimy-wiz Project",
  description: "A Next.js app for Quiz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-indigo-950">
        {children}
      </body>
    </html>
  );
}
