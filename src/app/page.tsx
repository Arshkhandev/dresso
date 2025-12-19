"use client";

import { useState } from "react";
import WadrobeList from "./componets/WadrobeList";
import SearchBar from "./componets/SearchBar";
import { getItemByName } from "./engine/outfitEngine";

export default function Home() {
  const [query, setQuery] = useState("");
  const items = getItemByName(query);

  return (
    <main className="mx-auto max-w-5xl p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-black dark:text-white">
        My Wardrobe
      </h1>

      <SearchBar value={query} onchange={setQuery} />

      <WadrobeList items={items} />
    </main>
  );
}
