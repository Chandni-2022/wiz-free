import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"], // Specify the character subset(s) you need
  variable: "--font-roboto", // Create a CSS variable for the font
  weight: ["400", "700"], // Specify font weights (e.g., regular and bold)
});

export const metadata = {
  title: "My App",
  description: "My Next.js app with Roboto font globally applied",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
