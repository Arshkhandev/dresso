"use client";
import React, { useRef } from "react";

type Props = {
  value: string;
  onchange: (value: string) => void;
};

const SearchBar = ({ value, onchange }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ref.current.style.setProperty("--x", `${x}px`);
    ref.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className="relative w-full group">
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(120px at var(--x) var(--y), rgba(16,185,129,0.25), transparent 70%)" }}
      />

      <input
        value={value}
        onChange={(e) => onchange(e.target.value)}
        placeholder="Search wardrobe…"
        className="relative z-10 w-full h-12 rounded-xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-300/60 dark:border-zinc-800 px-4 pr-10 text-sm tracking-wide text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30"
      />

      <span className="absolute right-4 top-1/2 z-20 h-2 w-2 -translate-y-1/2 rounded-full bg-emerald-500 opacity-70" />
    </div>
  );
};

export default SearchBar;
