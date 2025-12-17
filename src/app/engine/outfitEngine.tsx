import { WardrobeItem,FitPrefence,Season } from "../types/wadrobe";
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


export function getItemBySeason(preffit:Season){
    if(preffit === "all"){
        return wardrobe;
    }
   return wardrobe.filter((item) => {
      item.season?.includes(preffit);
   });
}