import { WardrobeItem,FitPrefence,Season,ItemType,Category,OutfitSlot,Outfit,OutfitSlots } from "../types/wadrobe";
import { wardrobe } from "../data/wadrobe";
import WadrobeList from "../componets/WadrobeList";

export function getItemByFit(preffit:FitPrefence){
    if(preffit === "any"){
        return wardrobe;
    }
    const filterItem = wardrobe.filter((item) => {
        return item.fit === preffit;
    });

    return filterItem;
}


export function getItemBySeason(season:Season){
    if(season === "all"){
        return wardrobe;
    }
    return wardrobe.filter(item =>
    item.season?.includes(season)
  );
}


export function getItemByCategory (cat:Category){
  return wardrobe.filter((item) => item.category === cat);
}

export function getItemByType(type:ItemType){
    return wardrobe.filter(item => 
     item.itemType === type
    );
}

export function getItemByName(name: string) {
  const q = name.toLowerCase();

  return wardrobe.filter(item => {
    const matchName = item.name.toLowerCase().includes(q);
    const matchColor = item.color.toLowerCase().includes(q);
    const matchBrand = item.brand
      ? item.brand.toLowerCase().includes(q)
      : false;
    const matchTags = item.tags?.some(tag =>
      tag.toLowerCase().includes(q)
    ) ?? false;

    return matchName || matchColor || matchBrand || matchTags;
  });
}


export function GetOutfit(outfit:string){
  wardrobe.filter((item) => {
    return item.category === outfit
  })
}





export function addToOutfit(
  currentOutfit: Outfit,
  item: WardrobeItem
): Outfit {
  const slot = item.category as OutfitSlot;

  return {
    ...currentOutfit,
    [slot]: item,
  };
}



export function removeFromOutfit(
  currentOutfit: Outfit,
  slot: OutfitSlot
): Outfit {
  return {
    ...currentOutfit,
    [slot]: undefined,
  };
}



export function isItemInOutfit(
  outfit: OutfitSlots,
  item: WardrobeItem
): boolean {
  return Object.values(outfit).some(
    (outfitItem) => outfitItem?.id === item.id
  );
}
