import { WardrobeItem } from "../types/wadrobe";

type Props = {
  item: WardrobeItem;
};

const WardrobeCard = ({ item }: Props) => {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl
        border border-zinc-200 bg-white
        shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        dark:border-zinc-800 dark:bg-zinc-900
      "
    >
      {/* IMAGE */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={item.image ?? "/placeholder.png"}
          alt={item.name}
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* subtle gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {item.name}
        </h3>

        <div className="mt-3 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            <span className="font-medium">Color:</span> {item.color}
          </p>

          {item.fit && (
            <p>
              <span className="font-medium">Fit:</span> {item.fit}
            </p>
          )}

          {item.season && (
            <p>
              <span className="font-medium">Season:</span>{" "}
              {item.season.join(", ")}
            </p>
          )}

          <p>
            <span className="font-medium">Category:</span> {item.category}
          </p>

          <p>
            <span className="font-medium">Type:</span> {item.itemType}
          </p>
         <button
  className="
    group relative inline-flex items-center justify-center
    h-12 px-8
    rounded-xl bg-black
    text-sm font-semibold tracking-wide text-white
    transition-all duration-300
    hover:-translate-y-0.5 hover:bg-green-900
    hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.6)]
    active:translate-y-0
    focus:outline-none focus:ring-2 focus:ring-black/40
  "
>
  Add
</button>
        </div>
      </div>
    </div>
  );
};

export default WardrobeCard;
