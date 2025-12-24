"use client";

import { Category, FitPrefence, Season } from "../types/wadrobe";

type Props = {
  category: Category;
  setCategory: (c: Category) => void;

  fit: FitPrefence;
  setFit: (f: FitPrefence) => void;

  season: Season;
  setSeason: (s: Season) => void;
};

export default function FilterSidebar({
  category,
  setCategory,
  fit,
  setFit,
  season,
  setSeason,
}: Props) {
  return (
   <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-5 space-y-6">
      {/* CATEGORY */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-white">
          Category
        </h3>
        <div className="flex flex-col gap-2">
          {["all", "top", "bottom", "footwear"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat as Category)}
              className={`px-3 py-2 rounded-lg text-left text-sm transition
                ${
                  category === cat
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FIT */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-white">
          Fit
        </h3>
        <div className="flex flex-col gap-2">
          {["any", "slim", "regular", "oversized"].map((f) => (
            <button
              key={f}
              onClick={() => setFit(f as FitPrefence)}
              className={`px-3 py-2 rounded-lg text-left text-sm transition
                ${
                  fit === f
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* SEASON */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-white">
          Season
        </h3>
        <div className="flex flex-col gap-2">
          {["all", "summer", "winter"].map((s) => (
            <button
              key={s}
              onClick={() => setSeason(s as Season)}
              className={`px-3 py-2 rounded-lg text-left text-sm transition
                ${
                  season === s
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
