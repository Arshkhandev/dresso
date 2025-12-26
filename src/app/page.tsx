"use client";

import { useEffect, useState } from "react";
import Navbar from "./componets/NavBar";
import SearchBar from "./componets/SearchBar";
import WadrobeList from "./componets/WadrobeList";
import FilterSidebar from "./componets/FilterSidebar";

import { wardrobe } from "./data/wadrobe";

import {
  OutfitSlots,
  OutfitSlot,
  WardrobeItem,
  Category,
  FitPreference,
  Season,
  Outfit,
} from "./types/wadrobe";

export default function Home() {
  const [currentOutfit, setCurrentOutfit] = useState<OutfitSlots>({});
  const [outfits, setOutfits] = useState<Outfit[]>([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("all");
  const [fit, setFit] = useState<FitPreference>("any");
  const [season, setSeason] = useState<Season>("all");

  useEffect(() => {
    const saved = localStorage.getItem("outfits");
    if (saved) setOutfits(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("outfits", JSON.stringify(outfits));
  }, [outfits]);

  const handleAddToOutfit = (item: WardrobeItem) => {
    setCurrentOutfit((prev) => ({
      ...prev,
      [item.category]: item,
    }));
  };

  const handleRemoveFromOutfit = (slot: OutfitSlot) => {
    setCurrentOutfit((prev) => ({
      ...prev,
      [slot]: undefined,
    }));
  };

  const handleSaveOutfit = () => {
    if (!Object.values(currentOutfit).some(Boolean)) return;

    setOutfits((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: `Outfit ${prev.length + 1}`,
        items: currentOutfit,
      },
    ]);

    setCurrentOutfit({});
  };

  const filteredItems = wardrobe.filter((item) => {
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "all" || item.category === category;

    const matchFit =
      fit === "any" || item.fit === fit;

    const matchSeason =
      season === "all" || item.season?.includes(season);

    return matchSearch && matchCategory && matchFit && matchSeason;
  });

  return (
    <>
      <Navbar />

      <main className="max-w-350 mx-auto px-6 py-10">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white">
              My Wardrobe
            </h1>
            <p className="mt-1 text-sm text-zinc-400">
              {filteredItems.length} items
            </p>
          </div>

          <button
            onClick={handleSaveOutfit}
            className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:cursor-pointer hover:bg-white hover:text-green-600"
          >
            Save Outfit
          </button>
        </header>

        <div className="mb-8">
          <SearchBar value={search} onchange={setSearch} />
        </div>

        <div className="grid grid-cols-12 gap-8">
          <aside className="col-span-12 lg:col-span-3">
            <FilterSidebar
              category={category}
              setCategory={setCategory}
              fit={fit}
              setFit={setFit}
              season={season}
              setSeason={setSeason}
            />
          </aside>

          <section className="col-span-12 lg:col-span-9">
            <WadrobeList
              items={filteredItems}
              outfit={currentOutfit}
              onAddToOutfit={handleAddToOutfit}
              onRemoveFromOutfit={handleRemoveFromOutfit}
            />
          </section>
        </div>
      </main>
    </>
  );
}
