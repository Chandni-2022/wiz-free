// import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   /* config options here */
// // };

// // export default nextConfig;


// module.exports = {
//   output: 'export',
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.builder.io',
//         pathname: '**',
//       },
//     ],
//   },
  
//   // other configurations if necessary
// }



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.builder.io"],
  },
}

module.exports = nextConfig

