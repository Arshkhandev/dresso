"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `transition ${
      pathname === path
        ? "text-white"
        : "text-zinc-400 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto max-w-350 px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-wide text-white">
          Dresso
        </h1>

        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className={linkClass("/")}>
            Wardrobe
          </Link>

          <Link href="/outfits" className={linkClass("/outfits")}>
            Outfits
          </Link>

          <Link href="/profile" className={linkClass("/profile")}>
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
