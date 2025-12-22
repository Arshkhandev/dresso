
"use client"
import React from 'react'


type Props = {
  value: string;
  onchange: (value: string) => void;
};
const SearchBar = ({ value, onchange }: Props) => {
  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={(e) => onchange(e.target.value)}
        placeholder="Search wardrobe…"
        className="w-full h-12 rounded-lg bg-white/70 backdrop-blur-xl border border-zinc-300/60 px-4 pr-10 text-sm tracking-wide text-zinc-900 placeholder-zinc-500 transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 dark:bg-zinc-900/70 dark:border-zinc-800 dark:text-zinc-100"
      />
      <span className="absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-emerald-500 opacity-70" />
    </div>
  );
};



export default SearchBar;