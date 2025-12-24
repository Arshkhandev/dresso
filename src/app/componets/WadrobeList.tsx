"use client";

import { WardrobeItem, Outfit, OutfitSlot } from "../types/wadrobe";
import WardrobeCard from "./WadrobeCard";

type Props = {
  items: WardrobeItem[];
  outfit: Outfit;
  onAddToOutfit: (item: WardrobeItem) => void;
  onRemoveFromOutfit: (slot: OutfitSlot) => void;
};

const WadrobeList = ({
  items,
  outfit,
  onAddToOutfit,
  onRemoveFromOutfit,
}: Props) => {
  if (items.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-zinc-300 p-10 text-center text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
        No products available
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <WardrobeCard
          key={item.id}
          item={item}
          outfit={outfit}
          onAddToOutfit={onAddToOutfit}
          onRemoveFromOutfit={onRemoveFromOutfit}
        />
      ))}
    </div>
  );
};

export default WadrobeList;
