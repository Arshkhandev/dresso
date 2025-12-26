export type OutfitSlot =
  | "top"
  | "bottom"
  | "outerwear"
  | "footwear"
  | "accessory";

export type Category = OutfitSlot | "all";

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

export type FitPreference = Fit | "any";

export type Season = "summer" | "winter" | "all";

export const ItemTypeToSlot: Record<ItemType, OutfitSlot> = {
  shirt: "top",
  tshirt: "top",
  polo: "top",
  sweater: "top",
  hoodie: "top",
  tank: "top",
  flannel: "top",
  jacket: "outerwear",
  pants: "bottom",
  shorts: "bottom",
  shoes: "footwear",
  boots: "footwear",
};

export type WardrobeItem = {
  id: string;
  name: string;
  itemType: ItemType;
  category: OutfitSlot;
  image: string;
  color: string;
  fit?: Fit;
  brand?: string;
  season?: Season[];
  tags?: string[];
};

export type OutfitSlots = Partial<Record<OutfitSlot, WardrobeItem>>;

export type Outfit = {
  id: string;
  name: string;
  items: OutfitSlots;
};

export type OutfitCollection = Outfit[];

export type OutfitRule = {
  requiredSlots: OutfitSlot[];
  optionalSlots?: OutfitSlot[];
};

export const BASIC_OUTFIT_RULE: OutfitRule = {
  requiredSlots: ["top", "bottom", "footwear"],
  optionalSlots: ["outerwear", "accessory"],
};
