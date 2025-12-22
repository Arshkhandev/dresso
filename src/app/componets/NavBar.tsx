"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto max-w-350 px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <h1 className="text-lg font-semibold tracking-wide text-white">
          Dresso
        </h1>

        {/* Right actions */}
        <div className="flex items-center gap-4 text-sm text-zinc-400">
          <button className="hover:text-white transition">Wardrobe</button>
          <button className="hover:text-white transition">Outfits</button>
          <button className="hover:text-white transition">Profile</button>
        </div>
      </div>
    </nav>
  );
}
