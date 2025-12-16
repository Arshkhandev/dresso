// data/wardrobe.ts
import { WardrobeItem } from "@/app/types/wadrobe";

export const wardrobe: WardrobeItem[] = [
  // ================= TOPS =================

  // Shirts – Solids
  { id: "shirt-01", name: "White solid shirt", itemType: "shirt", category: "top", color: "white", fit: "regular", season: ["all"], tags: ["neutral", "formal"] },
  { id: "shirt-02", name: "Maroon solid shirt", itemType: "shirt", category: "top", color: "maroon", fit: "regular", season: ["all"] },
  { id: "shirt-03", name: "Periwinkle shirt", itemType: "shirt", category: "top", color: "periwinkle", fit: "regular", season: ["summer"] },
  { id: "shirt-04", name: "Sky blue shirt", itemType: "shirt", category: "top", color: "sky blue", fit: "regular", season: ["summer"] },
  { id: "shirt-05", name: "Pink shirt", itemType: "shirt", category: "top", color: "pink", fit: "regular", season: ["summer"] },
  { id: "shirt-06", name: "Olive shirt", itemType: "shirt", category: "top", color: "olive", fit: "regular", season: ["all"] },
  { id: "shirt-07", name: "Dark green shirt", itemType: "shirt", category: "top", color: "dark green", fit: "regular", season: ["all"] },
  { id: "shirt-08", name: "Yellow shirt", itemType: "shirt", category: "top", color: "yellow", fit: "regular", season: ["summer"] },
  { id: "shirt-09", name: "Black shirt", itemType: "shirt", category: "top", color: "black", fit: "regular", season: ["all"] },
  { id: "shirt-10", name: "Husky tone shirt", itemType: "shirt", category: "top", color: "beige-green", fit: "regular", season: ["all"] },
  { id: "shirt-11", name: "Sky blue relaxed shirt", itemType: "shirt", category: "top", color: "sky blue", fit: "relaxed", season: ["summer"] },
  { id: "shirt-12", name: "White slim fit cotton shirt", itemType: "shirt", category: "top", color: "white", fit: "slim", season: ["all"] },

  // Pattern / Stripe Shirts
  { id: "shirt-13", name: "White transparent floral shirt", itemType: "shirt", category: "top", color: "white", fit: "regular", season: ["summer"] },
  { id: "shirt-14", name: "Beige small box pattern shirt", itemType: "shirt", category: "top", color: "beige", fit: "regular", season: ["all"] },
  { id: "shirt-15", name: "Maroon black box pattern shirt", itemType: "shirt", category: "top", color: "multicolor", fit: "regular", season: ["all"] },
  { id: "shirt-16", name: "Blue & white striped shirt", itemType: "shirt", category: "top", color: "blue/white", fit: "regular", season: ["summer"] },
  { id: "shirt-17", name: "Green & white striped shirt", itemType: "shirt", category: "top", color: "green/white", fit: "regular", season: ["summer"] },
  { id: "shirt-18", name: "Beige & white striped shirt", itemType: "shirt", category: "top", color: "beige/white", fit: "regular", season: ["summer"] },

  // Half sleeve / boxy
  { id: "shirt-19", name: "Black boxy half sleeve shirt", itemType: "shirt", category: "top", color: "black", fit: "boxy", season: ["summer"] },
  { id: "shirt-20", name: "Vintage red boxy half sleeve shirt", itemType: "shirt", category: "top", color: "red/white", fit: "boxy", season: ["summer"] },

  // T-shirts
  { id: "tee-01", name: "White oversized tee", itemType: "tshirt", category: "top", color: "white", fit: "oversized", season: ["all"], tags: ["neutral"] },
  { id: "tee-02", name: "Sky blue oversized tee", itemType: "tshirt", category: "top", color: "sky blue", fit: "oversized", season: ["summer"] },
  { id: "tee-03", name: "Coffee oversized tee", itemType: "tshirt", category: "top", color: "coffee", fit: "oversized", season: ["all"] },
  { id: "tee-04", name: "Dark brown oversized tee", itemType: "tshirt", category: "top", color: "dark brown", fit: "oversized", season: ["all"] },
  { id: "tee-05", name: "Maroon oversized tee", itemType: "tshirt", category: "top", color: "maroon", fit: "oversized", season: ["all"] },
  { id: "tee-06", name: "Smoke grey tee", itemType: "tshirt", category: "top", color: "grey", fit: "regular", season: ["all"] },
  { id: "tee-07", name: "Slim fit black tee", itemType: "tshirt", category: "top", color: "black", fit: "slim", season: ["all"] },
  { id: "tee-08", name: "Slim fit platinum grey tee", itemType: "tshirt", category: "top", color: "grey", fit: "slim", season: ["all"] },

  // Polos
  { id: "polo-01", name: "Cable knit polo black", itemType: "polo", category: "top", color: "black", fit: "regular", season: ["winter"] },
  { id: "polo-02", name: "Cable knit polo lavender", itemType: "polo", category: "top", color: "lavender", fit: "regular", season: ["winter"] },
  { id: "polo-03", name: "Off white polo", itemType: "polo", category: "top", color: "off white", fit: "regular", season: ["summer"] },
  { id: "polo-04", name: "Blue maroon polo", itemType: "polo", category: "top", color: "blue/maroon", fit: "regular", season: ["summer"] },
  { id: "polo-05", name: "Pink white polo", itemType: "polo", category: "top", color: "pink/white", fit: "regular", season: ["summer"] },

  // Tanks
  { id: "tank-01", name: "White tank", itemType: "tank", category: "top", color: "white", season: ["summer"] },
  { id: "tank-02", name: "Black tank", itemType: "tank", category: "top", color: "black", season: ["summer"] },
  { id: "tank-03", name: "Beige tank", itemType: "tank", category: "top", color: "beige", season: ["summer"] },
  { id: "tank-04", name: "Soymilk tank", itemType: "tank", category: "top", color: "cream", season: ["summer"] },
  { id: "tank-05", name: "Brown tank", itemType: "tank", category: "top", color: "brown", season: ["summer"] },
  { id: "tank-06", name: "Grey tank", itemType: "tank", category: "top", color: "grey", season: ["summer"] },

  // ================= BOTTOMS =================
  { id: "pants-01", name: "Blue wide leg jeans", itemType: "pants", category: "bottom", color: "blue", fit: "wide", brand: "Bofrike", season: ["all"] },
  { id: "pants-02", name: "Black wash jeans", itemType: "pants", category: "bottom", color: "black", fit: "regular", season: ["all"] },
  { id: "pants-03", name: "Black tailored pants", itemType: "pants", category: "bottom", color: "black", fit: "regular", season: ["all"] },
  { id: "pants-04", name: "Grey pinstripe pants", itemType: "pants", category: "bottom", color: "grey", fit: "regular", season: ["all"] },
  { id: "pants-05", name: "Beige linen pants", itemType: "pants", category: "bottom", color: "beige", fit: "relaxed", season: ["summer"] },
  { id: "pants-06", name: "Brown lounge pants", itemType: "pants", category: "bottom", color: "brown", fit: "relaxed", season: ["all"] },
  { id: "pants-07", name: "Black parachute pants", itemType: "pants", category: "bottom", color: "black", fit: "wide", season: ["all"] },
  { id: "pants-08", name: "Mocha balloon pants", itemType: "pants", category: "bottom", color: "mocha", fit: "balloon", season: ["all"] },

  // ================= OUTERWEAR =================
  { id: "jacket-01", name: "Light wash denim jacket", itemType: "jacket", category: "outerwear", color: "blue", brand: "Levi’s", season: ["winter"] },
  { id: "jacket-02", name: "Black denim jacket", itemType: "jacket", category: "outerwear", color: "black", brand: "H&M", season: ["winter"] },
  { id: "jacket-03", name: "Brown leather jacket", itemType: "jacket", category: "outerwear", color: "brown", brand: "Teethys", season: ["winter"] },
  { id: "jacket-04", name: "Black puffer jacket", itemType: "jacket", category: "outerwear", color: "black", season: ["winter"] },

  // ================= FOOTWEAR =================
  { id: "shoe-01", name: "Converse Chuck 70 Plus", itemType: "shoes", category: "footwear", color: "black/white", season: ["all"] },
  { id: "shoe-02", name: "Converse Chuck 70", itemType: "shoes", category: "footwear", color: "pale yellow", season: ["all"] },
  { id: "shoe-03", name: "Adidas Campus 00s", itemType: "shoes", category: "footwear", color: "grey/white", season: ["all"] },
  { id: "shoe-04", name: "Puma Palermo", itemType: "shoes", category: "footwear", color: "green/orange", season: ["all"] },
  { id: "shoe-05", name: "New Balance 530", itemType: "shoes", category: "footwear", color: "silver", season: ["all"] },
  { id: "shoe-06", name: "Adidas Samba", itemType: "shoes", category: "footwear", color: "red", season: ["all"] },
  { id: "boot-01", name: "Black Chelsea boots", itemType: "boots", category: "footwear", color: "black", season: ["winter"] },
];
