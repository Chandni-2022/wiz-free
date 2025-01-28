"use client";
import * as React from 'react';
import { NavigationProps } from './types';

export const Navigation: React.FC<NavigationProps> = ({
  onHomeClick,
  onProfileClick,
  onLogoutClick
}) => {
  return (
    <nav className="flex gap-10 justify-center items-center self-stretch my-auto text-base whitespace-nowrap">
      <button onClick={onHomeClick} className="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-white">Home</button>
      <button onClick={onProfileClick} className="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-white">Profile</button>
      <button onClick={onLogoutClick} className="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-white">Logout</button>
    </nav>
  );
};