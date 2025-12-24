"use client";

import { useEffect, useState } from "react";
import { Outfit } from "../types/wadrobe";
import Navbar from "../componets/NavBar";

export default function OutfitsPage() {
  const [outfits, setOutfits] = useState<Outfit[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("outfits");
    if (saved) setOutfits(JSON.parse(saved));
  }, []);

  return (
    
    <main className="max-w-350 mx-auto px-6 py-10">
        <Navbar/>
      <h1 className="text-3xl font-semibold text-white mb-8">
        My Outfits
      </h1>

      {outfits.length === 0 ? (
        <p className="text-zinc-400">No outfits saved</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outfits.map((outfit) => (
            <div
              key={outfit.id}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {outfit.name}
              </h3>

              <ul className="text-sm text-zinc-400 space-y-1">
                {Object.values(outfit.items).map(
                  (item) =>
                    item && <li key={item.id}>{item.name}</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
