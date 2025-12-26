import {
  WardrobeItem,
  FitPreference,
  Season,
  ItemType,
  Category,
  OutfitSlot,
  OutfitSlots,
  BASIC_OUTFIT_RULE,
} from "../types/wadrobe";
import { wardrobe } from "../data/wadrobe";



export function getItemsByFit(fit: FitPreference): WardrobeItem[] {
  if (fit === "any") return wardrobe;
  return wardrobe.filter(item => item.fit === fit);
}

export function getItemsBySeason(season: Season): WardrobeItem[] {
  if (season === "all") return wardrobe;
  return wardrobe.filter(item => item.season?.includes(season));
}

export function getItemsByCategory(category: Category): WardrobeItem[] {
  if (category === "all") return wardrobe;
  return wardrobe.filter(item => item.category === category);
}

export function getItemsByType(type: ItemType): WardrobeItem[] {
  return wardrobe.filter(item => item.itemType === type);
}

export function searchItems(query: string): WardrobeItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return wardrobe;

  return wardrobe.filter(item => {
    return (
      item.name.toLowerCase().includes(q) ||
      item.color.toLowerCase().includes(q) ||
      item.brand?.toLowerCase().includes(q) ||
      item.tags?.some(tag => tag.toLowerCase().includes(q))
    );
  });
}


export function addToOutfit(
  outfit: OutfitSlots,
  item: WardrobeItem
): OutfitSlots {
  return {
    ...outfit,
    [item.category]: item,
  };
}

export function removeFromOutfit(
  outfit: OutfitSlots,
  slot: OutfitSlot
): OutfitSlots {
  const next = { ...outfit };
  delete next[slot];
  return next;
}

export function isItemInOutfit(
  outfit: OutfitSlots,
  item: WardrobeItem
): boolean {
  return Object.values(outfit).some(
    outfitItem => outfitItem?.id === item.id
  );
}


export function isOutfitValid(outfit: OutfitSlots): boolean {
  return BASIC_OUTFIT_RULE.requiredSlots.every(
    slot => Boolean(outfit[slot])
  );
}

export function getMissingSlots(outfit: OutfitSlots): OutfitSlot[] {
  return BASIC_OUTFIT_RULE.requiredSlots.filter(
    slot => !outfit[slot]
  );
}
