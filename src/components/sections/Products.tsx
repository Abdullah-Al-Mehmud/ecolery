"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ShoppingCart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specs: string[];
  material: string;
  tempLimit: string;
  ctaText: string;
  layoutClass: string; // Tailwind grid mapping for asymmetrical layout
  accentColor: string;
  imagePath: string;
}

const PRODUCTS: Product[] = [
  {
    id: "coffee-cup",
    name: "The Edible Coffee Cup",
    category: "Tableware",
    description: "Pressed from reclaimed organic cork and grain husks. Neutral taste profile that doesn't interfere with coffee notes, remaining leak-proof for over 45 minutes.",
    specs: ["Capacity: 8oz / 230ml", "100% Edible & Biodegradable", "Neutral or Vanilla Flavor"],
    material: "Reclaimed Cork & Cereal Fibers",
    tempLimit: "Up to 90°C / 194°F",
    ctaText: "Order Samples",
    layoutClass: "md:col-span-7",
    accentColor: "bg-cork/10 text-cork-dark border-cork/20",
    imagePath: "/hero_cup_splash.png",
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
  }
];

export function Products() {
  const productBorders = [
    "rounded-[3rem_1.2rem_2.5rem_1.5rem]",
    "rounded-[1.5rem_3rem_1rem_2.5rem]",
    "rounded-[2.5rem_1rem_3rem_1.2rem]",
    "rounded-[1.8rem_2.5rem_1.2rem_3rem]"
  ];

  return (
    <section id="products" className="py-20 md:py-32 bg-cream px-6 relative overflow-hidden">
      
      {/* Background Organic Ambient Light */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div aria-hidden className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-cork/5 blur-[120px]" />
        <div aria-hidden className="absolute bottom-[20%] right-[-15%] w-[600px] h-[600px] rounded-full bg-moss/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="mb-16 md:mb-24">
          <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
            our collection
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink font-bold leading-[1.05] tracking-tight">
              Made of nature, <br />
              <span className="text-rust font-light italic">made to be consumed.</span>
            </h2>
            <p className="text-ink/75 text-sm md:text-base leading-relaxed max-w-lg mt-4 md:mt-0">
              Each product is an engineering milestone in food science. Fully compliant with FDA food safety standards, structurally sound, and crafted to enrich soils instead of poisoning landfills.
            </p>
          </div>
        </div>

        {/* Asymmetrical Grid of Products */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`${product.layoutClass} bg-cream-2/70 border border-clay/30 flex flex-col justify-between group transition-all duration-500 shadow-sm hover:shadow-md hover:-translate-y-1 ${productBorders[idx]}`}
            >
              
              {/* Product Info Row */}
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="font-mono text-clay text-[10px] font-bold uppercase tracking-widest">
                      {product.category}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mt-1">
                      {product.name}
                    </h3>
                  </div>
                  <span className={`text-xs px-3.5 py-1.5 rounded-full border uppercase tracking-wider font-semibold ${product.accentColor}`}>
                    {product.material}
                  </span>
                </div>

                <p className="text-ink/75 text-xs md:text-sm leading-relaxed mb-8 max-w-xl">
                  {product.description}
                </p>
              </div>

              {/* Product Centerpiece Visual + Details */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                
                {/* Specs List (Left) */}
                <div className="sm:col-span-6 space-y-3 order-2 sm:order-1">
                  {product.specs.map((spec, specIdx) => (
                    <div key={specIdx} className="flex items-center gap-2 text-xs md:text-sm text-ink/70 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-rust" />
                      <span>{spec}</span>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-stone-300/40 mt-2 flex items-center gap-2 text-xs text-ink/50">
                    <span>Thermal Tolerance:</span>
                    <span className="font-bold text-moss">{product.tempLimit}</span>
                  </div>
                </div>

                {/* Photography Centerpiece (Right) */}
                <div className="sm:col-span-6 flex justify-center items-center order-1 sm:order-2 py-4">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-stone-300/35 shadow-inner bg-cream-2">
                    <Image
                      src={product.imagePath}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-w-md) 100vw, 240px"
                    />
                  </div>
                </div>

              </div>

              {/* CTA Row */}
              <div className="mt-8 pt-6 border-t border-stone-300/40 flex justify-between items-center select-none">
                <Link
                  href="/contact"
                  className="bg-ink text-cream hover:bg-rust rounded-full px-6 py-3 text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm flex items-center gap-1.5"
                >
                  <span>{product.ctaText}</span>
                  <ShoppingCart className="w-3.5 h-3.5" />
                </Link>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-moss">
                  <ShieldCheck className="w-4.5 h-4.5 text-rust shrink-0" />
                  FDA Certified Food Safe
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
