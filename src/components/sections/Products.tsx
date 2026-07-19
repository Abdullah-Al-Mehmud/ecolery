"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

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
  svgIcon: React.ReactNode;
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
    svgIcon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-48 h-48 text-cork opacity-85 group-hover:scale-105 transition-transform duration-700">
        {/* Edible Cup Vector Drawing */}
        <path d="M25 20 H75 L67 85 C66.5 90 62 94 57 94 H43 C38 94 33.5 90 33 85 Z" fill="currentColor" opacity="0.15" />
        <path d="M25 20 H75 L67 85 C66.5 90 62 94 57 94 H43 C38 94 33.5 90 33 85 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Sleeve */}
        <path d="M27.5 40 H72.5 L69.5 70 H30.5 Z" fill="currentColor" opacity="0.25" />
        <path d="M27.5 40 H72.5 L69.5 70 H30.5 Z" stroke="currentColor" strokeWidth="2" />
        {/* Steam line */}
        <path d="M40 10 Q45 5 45 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M50 12 Q55 7 52 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <path d="M60 10 Q65 5 62 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      </svg>
    )
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
    svgIcon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-44 h-44 text-moss-light opacity-80 group-hover:scale-105 transition-transform duration-700">
        {/* Edible Bowl Vector */}
        <path d="M10 40 C10 40 10 85 50 85 C90 85 90 40 90 40 Z" fill="currentColor" opacity="0.15" />
        <path d="M10 40 C10 40 10 85 50 85 C90 85 90 40 90 40 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="40" x2="92" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        {/* Base */}
        <path d="M35 85 H65" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="60" r="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    )
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
    svgIcon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-44 h-44 text-rust opacity-80 group-hover:scale-105 transition-transform duration-700">
        {/* Edible Spoon Vector */}
        <g transform="rotate(-45 50 50)">
          <path d="M44 20 C40 30 40 45 48 45 C56 45 56 30 52 20 C49 14 47 14 44 20 Z" fill="currentColor" opacity="0.15" />
          <path d="M44 20 C40 30 40 45 48 45 C56 45 56 30 52 20 C49 14 47 14 44 20 Z" stroke="currentColor" strokeWidth="2" />
          <path d="M48 45 L48 85" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M46 85 C46 87 50 87 50 85" stroke="currentColor" strokeWidth="2" />
        </g>
      </svg>
    )
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
    svgIcon: (
      <svg viewBox="0 0 100 100" fill="none" className="w-48 h-48 text-moss-light opacity-80 group-hover:scale-105 transition-transform duration-700">
        {/* Plant Packaging Vector */}
        <rect x="25" y="25" width="50" height="50" rx="6" fill="currentColor" opacity="0.15" />
        <rect x="25" y="25" width="50" height="50" rx="6" stroke="currentColor" strokeWidth="2" />
        <path d="M20 35 L80 65" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M30 20 L70 80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        {/* Leaf sprout inside */}
        <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M50 44 Q50 54 56 50" stroke="currentColor" strokeWidth="2" />
        <path d="M50 48 Q44 48 46 54" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }
];

export function Products() {
  return (
    <section id="products" className="py-24 md:py-32 bg-cream px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-16 md:mb-24">
          <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
            our collection
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-none font-medium">
              Made of nature, <br />
              <span className="text-rust italic font-normal">made to be consumed.</span>
            </h2>
            <p className="text-ink/75 text-base md:text-lg leading-relaxed max-w-lg mt-4 md:mt-0">
              Each product is an engineering milestone in food science. Fully compliant with FDA food safety standards, structurally sound, and crafted to enrich soils instead of poisoning landfills.
            </p>
          </div>
        </div>

        {/* Asymmetrical Grid of Products */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`${product.layoutClass} bg-cream-2/50 hover:bg-cream-2 border border-stone-300/30 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between group transition-all duration-500 shadow-sm hover:shadow-md hover:-translate-y-1`}
            >
              
              {/* Product Info Row */}
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-ink/40 font-semibold font-body">
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

                <p className="text-ink/75 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                  {product.description}
                </p>
              </div>

              {/* Product Centerpiece Visual + Details */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                
                {/* Specs List (Left) */}
                <div className="sm:col-span-6 space-y-3 order-2 sm:order-1">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-ink/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-rust" />
                      <span>{spec}</span>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-stone-300/40 mt-2 flex items-center gap-2 text-xs text-ink/50">
                    <span>Temperature Range:</span>
                    <span className="font-semibold text-moss">{product.tempLimit}</span>
                  </div>
                </div>

                {/* SVG Visual (Right) */}
                <div className="sm:col-span-6 flex justify-center items-center order-1 sm:order-2 py-4">
                  {product.svgIcon}
                </div>

              </div>

              {/* CTA Row */}
              <div className="mt-8 pt-6 border-t border-stone-300/40 flex justify-between items-center">
                <a
                  href="#contact"
                  className="bg-ink text-cream hover:bg-moss rounded-full px-6 py-2.5 text-[13px] font-medium transition-colors cursor-pointer"
                >
                  {product.ctaText}
                </a>
                <div className="flex items-center gap-2 text-xs font-semibold text-moss">
                  <ShieldCheck className="w-4 h-4" />
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
