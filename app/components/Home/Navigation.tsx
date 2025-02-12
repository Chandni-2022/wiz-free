// "use client";
// import * as React from 'react';
// import { NavigationProps } from './types';

// export const Navigation: React.FC<NavigationProps> = ({
//   onHomeClick,
//   onProfileClick,
//   onLogoutClick
// }) => {
//   return (
//     <nav className="flex gap-10 justify-center items-center self-stretch my-auto text-base whitespace-nowrap">
//       <button onClick={onHomeClick} className="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-white">Home</button>
//       <button onClick={onProfileClick} className="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-white">Profile</button>
//       <button onClick={onLogoutClick} className="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-white">Logout</button>
//     </nav>
//   );
// };



"use client";
import React, { useState } from "react";
import { NavigationProps } from "./types";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Importing icons for better UI

export const Navigation: React.FC<NavigationProps> = ({
  onHomeClick,
  onProfileClick,
  onLogoutClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-navy-950">
      <div className="flex justify-end items-center py-4">
       

        {/* Hamburger Menu Button - Visible only on small screens */}
        <button
          type="button"
          className="md:hidden text-white dark:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 text-lg">
          <button
            onClick={onHomeClick}
            className="py-2 px-4 text-white hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
          >
            Home
          </button>
          <button
            onClick={onProfileClick}
            className="py-2 px-4 text-white hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
          >
            Profile
          </button>
          <Link href="/login" passHref legacyBehavior>
          <button
            onClick={onLogoutClick}
            className="py-2 px-4 text-white hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
          >
            Logout
          </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Overlay) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-[300px] bg-[#CAC9FF] dark:bg-gray-800 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex flex-col gap-5 py-6 px-6">
          <button
            onClick={onHomeClick}
            className="text-lg text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
          >
            Home
          </button>
          <button
            onClick={onProfileClick}
            className="text-lg text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
          >
            Profile
          </button>
          <Link href="/login" passHref legacyBehavior>
          <button
            onClick={onLogoutClick}
            className="text-lg text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
          >
            Logout
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
