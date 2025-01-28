"use client";
import * as React from 'react';
import { SearchBarProps } from './types';
import Image from "next/image";
// { onSearch }
export const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <form className="flex overflow-hidden gap-4 items-center self-stretch px-2 my-auto bg-white rounded-xl border-2 border-white border-solid shadow-sm min-h-[60px] min-w-[240px] w-[450px]" role="search">
      <label htmlFor="searchInput" className="sr-only">Search quizzes</label>
      <input
        id="searchInput"
        type="search"
        className="flex-1 shrink gap-2.5 self-stretch px-2.5 my-auto text-base min-w-[240px] text-black text-opacity-50"
        placeholder="Search ..."
        aria-label="Search quizzes"
      />
      <button 
        type="submit"
        className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-11 h-11 bg-indigo-300 rounded-md"
        aria-label="Submit search"
      >
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/4beaf84afea3433ac939406c655cb6f15545babf6973bb4e8f7d265f572c42f7?apiKey=415d78a55fd94a108248afe5c238a8ae&"
          alt=""
          className="object-contain self-stretch my-auto w-6 aspect-square"
        />
      </button>
    </form>
  );
};