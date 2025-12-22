export type Category =
  |"all"
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

export type Season = "summer" | "winter" | "all";

export type WardrobeItem = {
  id: string;
  name: string;
  itemType: ItemType;
  image:string;
  category: Category;
  color: string;
  fit?: Fit;
  brand?: string;
  season?: Season[];
  tags?: string[]; // wide, neutral, layering, casual, formal, street
};

export type FitPrefence = Fit | "any";