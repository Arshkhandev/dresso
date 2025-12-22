"use client";

import { useState } from "react";
import Navbar from "./componets/NavBar";
import SearchBar from "./componets/SearchBar";
import WadrobeList from "./componets/WadrobeList";
import FilterSidebar from "./componets/FilterSidebar";

import { wardrobe } from "./data/wadrobe";
import { Category, FitPrefence, Season } from "./types/wadrobe";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("all");
  const [fit, setFit] = useState<FitPrefence>("any");
  const [season, setSeason] = useState<Season>("all");

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
        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-white">
            My Wardrobe
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            {filteredItems.length} items
          </p>
        </header>

        {/* SEARCH */}
        <div className="mb-8">
          <SearchBar value={search} onchange={setSearch} />
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-12 gap-8">
          {/* SIDEBAR */}
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

          {/* CONTENT */}
          <section className="col-span-12 lg:col-span-9">
            <WadrobeList items={filteredItems} />
          </section>
        </div>
      </main>
    </>
  );
}
