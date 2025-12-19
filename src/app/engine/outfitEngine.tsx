import { WardrobeItem,FitPrefence,Season,ItemType,Category } from "../types/wadrobe";
import { wardrobe } from "../data/wadrobe";

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


