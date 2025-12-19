import { WardrobeItem } from "../types/wadrobe";

type Props = {
  item: WardrobeItem;
};

const WardrobeCard = ({ item }: Props) => {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl
        border border-zinc-200 bg-white p-5
        shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        dark:border-zinc-800 dark:bg-zinc-900
      "
    >
      {/* Item name */}
      <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {item.name}
      </h3>

      {/* Meta info */}
      <div className="mt-3 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
        <p><span className="font-medium">Color:</span> {item.color}</p>
        {item.fit && <p><span className="font-medium">Fit:</span> {item.fit}</p>}
        {item.season && (
          <p><span className="font-medium">Season:</span> {item.season.join(", ")}</p>
        )}
        <p><span className="font-medium">Category:</span> {item.category}</p>
        <p><span className="font-medium">Type:</span> {item.itemType}</p>
      </div>

      {/* Accent hover glow */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
          bg-linear-to-br from-transparent via-transparent to-black/5
          dark:to-white/5
        "
      />
    </div>
  );
};

export default WardrobeCard;
