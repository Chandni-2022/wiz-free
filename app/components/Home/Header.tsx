"use client";
import * as React from 'react';
import { Navigation } from './Navigation';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({ }) => {
  return (
    <header className="fixed w-full  top-0 left-0 right-0 z-50 flex gap-5 justify-between items-center px-12 py-5 w-full h-20 text-white bg-indigo-950 min-h-[80px] max-md:px-5 max-md:max-w-full">
      <div className="flex shrink-0 self-stretch my-auto w-10 h-10 bg-white rounded-[100px]" role="img" aria-label="Logo" />
      <div className="flex-1 shrink self-stretch my-auto text-2xl md:text-2xl text-base font-bold basis-0 max-md:max-w-full w-50 whitespace-nowrap">
        Glarimy Wiz
      </div>

      <Navigation
        onHomeClick={() => { }}
        onProfileClick={() => { }}
        onLogoutClick={() => { }}
      />
    </header>
  );
};
