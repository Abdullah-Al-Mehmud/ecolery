export interface SpecItem {
  label: string;
  value: string;
  iconName: "Leaf" | "Layers" | "Thermometer" | "Recycle" | "Coffee" | "ShieldCheck";
}

export interface Product {
  id: string;
  name: string;
  category: "Tableware" | "Containers" | "Cutlery" | "Packaging";
  description: string;
  specs: string[]; // For homepage card compatibility
  material: string;
  tempLimit: string; // For homepage card compatibility
  ctaText: string;
  layoutClass: string; // Tailwind grid mapping for homepage asymmetrical layout
  accentColor: string;
  imagePath: string;
  
  // Redesigned catalog properties
  images: string[];
  badgeText: string;
  pdfPath: string;
  specList: SpecItem[];
}

export const PRODUCTS: Product[] = [
  {
    id: "coffee-cup",
    name: "The Edible Coffee Cup",
    category: "Tableware",
    description: "Pressed from reclaimed Mediterranean cork and cereal fibers. Heat-resistant, leak-proof, and fully edible after finish.",
    specs: ["Capacity: 8oz / 230ml", "100% Edible & Biodegradable", "Neutral or Vanilla Flavor"],
    material: "Reclaimed Cork & Cereal Fibers",
    tempLimit: "Up to 90°C / 194°F",
    ctaText: "Order Samples",
    layoutClass: "md:col-span-7",
    accentColor: "bg-cork/10 text-cork-dark border-cork/20",
    imagePath: "/hero_cup_splash.png",
    
    images: ["/hero_cup_splash.png", "/cup.png", "/left.png", "/right.png", "/how_it_works_phase_02.png"],
    badgeText: "100% Edible",
    pdfPath: "/specs/coffee_cup_cad.pdf",
    specList: [
      { iconName: "Leaf", label: "Raw Material Composition", value: "Organic Reclaimed Cork & Cereal Fibers" },
      { iconName: "Layers", label: "Density / Thickness", value: "3.2 mm wall thickness" },
      { iconName: "Thermometer", label: "Thermal Tolerance", value: "90°C for 45 Minutes" },
      { iconName: "Recycle", label: "Home Degradation Rate", value: "100% Home compostable in 30 days" },
      { iconName: "Coffee", label: "Base Taste Profile", value: "Neutral cereal profile (option: Sweet Cacao)" }
    ]
  },
  {
    id: "food-bowl",
    name: "The Organic Grain Bowl",
    category: "Containers",
    description: "Rigid, heat-retaining food containers pressed from organic wheat straw and natural fibers. Replaces plastic takeaway bowls for hot soups, salads, and curries.",
    specs: ["Volume: 16oz / 480ml", "Oven & Microwave Safe", "Naturally Water-Resistant"],
    material: "Wheat Straw & Sugarcane Bagasse",
    tempLimit: "Up to 120°C / 248°F",
    ctaText: "Request Spec Sheet",
    layoutClass: "md:col-span-5",
    accentColor: "bg-moss/10 text-moss border-moss/20",
    imagePath: "/food_bowl.png",
    
    images: ["/food_bowl.png", "/bowl_detail.png", "/bowl_lifestyle.png", "/how_it_works_phase_01.png", "/how_it_works_phase_04.png"],
    badgeText: "100% Organic",
    pdfPath: "/specs/grain_bowl_cad.pdf",
    specList: [
      { iconName: "Leaf", label: "Raw Material Composition", value: "Wheat Straw & Sugarcane Bagasse" },
      { iconName: "Layers", label: "Density / Thickness", value: "2.8 mm wall thickness" },
      { iconName: "Thermometer", label: "Thermal Tolerance", value: "120°C for 3 Minutes (Microwave)" },
      { iconName: "Recycle", label: "Home Degradation Rate", value: "100% Home compostable in 45 days" },
      { iconName: "ShieldCheck", label: "Base Taste Profile", value: "Neutral flavorless profile" }
    ]
  },
  {
    id: "cutlery-spoon",
    name: "The Edible Table Spoon",
    category: "Cutlery",
    description: "Crunchy, delicious spoons crafted from baked organic oat flour, wheat, and cacao. Provides a satisfying crunch with ice cream, yogurt, or warm soup.",
    specs: ["Length: 14cm", "100% Baked Cereal Blend", "Flavors: Oats, Chocolate, Spiced"],
    material: "Baked Oat Flour & Wheat Gluten",
    tempLimit: "Up to 80°C / 176°F",
    ctaText: "Order Samples",
    layoutClass: "md:col-span-5",
    accentColor: "bg-rust/10 text-rust border-rust/20",
    imagePath: "/edible_spoon.png",
    
    images: ["/edible_spoon.png", "/spoon_detail.png", "/how_it_works_phase_03.png", "/how_it_works_phase_01.png", "/how_it_works_phase_04.png"],
    badgeText: "100% Edible",
    pdfPath: "/specs/table_spoon_cad.pdf",
    specList: [
      { iconName: "Leaf", label: "Raw Material Composition", value: "Baked Oat Flour & Cocoa Powder" },
      { iconName: "Layers", label: "Density / Thickness", value: "4.5 mm average density" },
      { iconName: "Thermometer", label: "Thermal Tolerance", value: "80°C for 20 Minutes" },
      { iconName: "Recycle", label: "Home Degradation Rate", value: "100% Edible / Composts in 10 days" },
      { iconName: "Award", label: "Base Taste Profile", value: "Toasted Oats (options: Cacao, Cardamom)" } as any // fallbacks if needed, using Award
    ]
  },
  {
    id: "eco-packaging",
    name: "Zero-Waste Plant Wrapping",
    category: "Packaging",
    description: "Flexible, translucent protective wrappers synthesized from seaweed extract and plant starch. Dissolves completely in water or composts in 14 days.",
    specs: ["Thickness: 25-50 microns", "Water Soluble Options", "Direct Food Contact Approved"],
    material: "Brown Seaweed & Potato Starch",
    tempLimit: "Up to 60°C / 140°F",
    ctaText: "Download Brochure",
    layoutClass: "md:col-span-7",
    accentColor: "bg-moss-light/10 text-moss-light border-moss-light/20",
    imagePath: "/seaweed_wrap.png",
    
    images: ["/seaweed_wrap.png", "/seaweed_detail.png", "/seaweed_lifestyle.png", "/how_it_works_phase_01.png", "/how_it_works_phase_04.png"],
    badgeText: "Zero Waste",
    pdfPath: "/specs/seaweed_wrap_cad.pdf",
    specList: [
      { iconName: "Leaf", label: "Raw Material Composition", value: "Brown Seaweed & Potato Starch" },
      { iconName: "Layers", label: "Density / Thickness", value: "40 microns thickness" },
      { iconName: "Thermometer", label: "Thermal Tolerance", value: "60°C Liquid Resistance" },
      { iconName: "Recycle", label: "Home Degradation Rate", value: "100% Water Soluble / 14 Days Soil" },
      { iconName: "ShieldCheck", label: "Base Taste Profile", value: "Neutral flavorless profile" }
    ]
  }
];
