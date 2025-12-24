export type Category =
  | "all"
  | "top"
  | "bottom"
  | "outerwear"
  | "footwear"
  | "accessory";

export type OutfitSlot =
  | "top"
  | "bottom"
  | "outerwear"
  | "footwear"
  | "accessory";

export type ItemType =
  | "shirt"
  | "tshirt"
  | "polo"
  | "sweater"
  | "hoodie"
  | "tank"
  | "flannel"
  | "jacket"
  | "pants"
  | "shorts"
  | "shoes"
  | "boots";

export type Fit =
  | "slim"
  | "regular"
  | "relaxed"
  | "oversized"
  | "wide"
  | "boxy"
  | "balloon";

export type FitPrefence = Fit | "any";

export type Season = "summer" | "winter" | "all";

// 👕 Item
export type WardrobeItem = {
  id: string;
  name: string;
  itemType: ItemType;
  image: string;
  category: OutfitSlot;
  color: string;
  fit?: Fit;
  brand?: string;
  season?: Season[];
  tags?: string[];
};

// 🧩 Editable outfit (draft)
export type OutfitSlots = {
  top?: WardrobeItem;
  bottom?: WardrobeItem;
  outerwear?: WardrobeItem;
  footwear?: WardrobeItem;
  accessory?: WardrobeItem;
};

// 👗 Saved outfit
export type Outfit = {
  id: string;
  name: string;
  items: OutfitSlots;
};

// 📦 Outfit list
export type OutfitCollection = Outfit[];
