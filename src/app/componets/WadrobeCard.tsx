"use client";

import { OutfitSlots, OutfitSlot, WardrobeItem } from "../types/wadrobe";

type Props = {
  item: WardrobeItem; // ✅ FIXED (single item)
  outfit: OutfitSlots;
  onAddToOutfit: (item: WardrobeItem) => void;
  onRemoveFromOutfit: (slot: OutfitSlot) => void;
};

const WardrobeCard = ({
  item,
  outfit,
  onAddToOutfit,
  onRemoveFromOutfit,
}: Props) => {

  // ✅ SAFE & CORRECT
  const isSelected =
    outfit[item.category]?.id === item.id;

  return (
    <div className="group relative overflow-hidden rounded-xl border border-zinc-200/60 bg-white/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_25px_60px_-20px_rgba(16,185,129,0.45)] dark:border-zinc-800/60 dark:bg-zinc-900/70">
      
      {/* IMAGE */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={item.image ?? "/placeholder.png"}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {item.name}
        </h3>

        <div className="mt-3 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
          <p><span className="font-medium">Color:</span> {item.color}</p>
          {item.fit && (
            <p><span className="font-medium">Fit:</span> {item.fit}</p>
          )}
          {item.season && (
            <p>
              <span className="font-medium">Season:</span>{" "}
              {item.season.join(", ")}
            </p>
          )}
          <p><span className="font-medium">Category:</span> {item.category}</p>
          <p><span className="font-medium">Type:</span> {item.itemType}</p>
        </div>

        {/* ACTION BUTTON */}
        <button
          onClick={() =>
            isSelected
              ? onRemoveFromOutfit(item.category)
              : onAddToOutfit(item)
          }
          className={`mt-5 w-full h-11 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 ${
            isSelected
              ? "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500/40"
              : "bg-linear-to-r from-black to-zinc-900 text-white hover:from-emerald-600 hover:to-emerald-700 hover:shadow-[0_15px_35px_-12px_rgba(16,185,129,0.6)] focus:ring-emerald-500/40"
          }`}
        >
          {isSelected ? "Remove" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default WardrobeCard;
