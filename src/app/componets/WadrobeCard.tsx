"use client";

import { OutfitSlots, OutfitSlot, WardrobeItem } from "../types/wadrobe";

type Props = {
  item: WardrobeItem;
  outfit: OutfitSlots;
  onAddToOutfit: (item: WardrobeItem) => void;
  onRemoveFromOutfit: (slot: OutfitSlot) => void;
};

const WardrobeCard = ({ item, outfit, onAddToOutfit, onRemoveFromOutfit }: Props) => {
  const isSelected = outfit[item.category]?.id === item.id;

  return (
    <div className="group relative overflow-hidden rounded-xl border border-zinc-200/60 bg-white/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300/80 hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.45)] dark:border-zinc-800/60 dark:bg-zinc-900/70 dark:hover:border-zinc-700 dark:hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)]">
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {item.name}
        </h3>

        <div className="mt-3 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
          <p>Color: {item.color}</p>
          {item.fit && <p>Fit: {item.fit}</p>}
          {item.season && <p>Season: {item.season.join(", ")}</p>}
        </div>

        <button
          onClick={() =>
            isSelected
              ? onRemoveFromOutfit(item.category)
              : onAddToOutfit(item)
          }
          className={`mt-5 w-full h-11 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 ${
            isSelected
              ? "bg-zinc-800 text-white hover:bg-zinc-900 focus:ring-zinc-500/40"
              : "bg-black text-white hover:bg-zinc-900 hover:shadow-[0_18px_40px_-14px_rgba(0,0,0,0.9)] focus:ring-zinc-500/40"
          }`}
        >
          {isSelected ? "Remove" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default WardrobeCard;
