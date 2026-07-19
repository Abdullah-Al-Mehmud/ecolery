"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ShoppingCart } from "lucide-react";

interface ProductSpec {
  catalogRef: string;
  name: string;
  category: "Tableware" | "Containers" | "Cutlery" | "Packaging";
  description: string;
  rawMaterials: string;
  thickness: string;
  resilience: string;
  degradability: string;
  baseFlavor: string;
  svgDrawing: React.ReactNode;
}

const PRODUCTS_SPECS: ProductSpec[] = [
  {
    catalogRef: "EC-01 // COFFEE CUP",
    name: "The Edible Coffee Cup",
    category: "Tableware",
    description: "Thermal steam-pressed cup made from reclaimed organic cork. Features natural anti-microbial protection and absolute leak protection for hot espresso beverages.",
    rawMaterials: "Reclaimed Mediterranean cork oak bark & wheat husks",
    thickness: "3.2 mm wall thickness",
    resilience: "Up to 90°C (194°F) for over 45 minutes",
    degradability: "100% Home compostable in 30 days in backyard soil",
    baseFlavor: "Neutral cereal profile (option: Sweet Cacao)",
    svgDrawing: (
      <svg viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-48 h-48 text-cork">
        {/* Technical drafting lines */}
        <line x1="10" y1="20" x2="90" y2="20" strokeDasharray="3 3" opacity="0.4" />
        <line x1="15" y1="100" x2="85" y2="100" strokeDasharray="3 3" opacity="0.4" />
        <line x1="50" y1="5" x2="50" y2="115" strokeDasharray="2 2" opacity="0.3" />
        {/* Cup body */}
        <path d="M22 20 H78 L69 95 C68.5 99 65 102 61 102 H39 C35 102 31.5 99 31 95 Z" fill="currentColor" opacity="0.08" />
        <path d="M22 20 H78 L69 95 C68.5 99 65 102 61 102 H39 C35 102 31.5 99 31 95 Z" strokeWidth="1.5" />
        {/* Handle attachment */}
        <rect x="71" y="45" width="8" height="24" rx="2" fill="currentColor" opacity="0.25" />
        <rect x="71" y="45" width="8" height="24" rx="2" />
        {/* Dimension labels */}
        <text x="5" y="65" fontSize="6" fontFamily="monospace" fill="currentColor" opacity="0.6">3.2mm</text>
        <text x="45" y="114" fontSize="6" fontFamily="monospace" fill="currentColor" opacity="0.6">Ø 60mm</text>
        <text x="43" y="14" fontSize="6" fontFamily="monospace" fill="currentColor" opacity="0.6">Ø 80mm</text>
      </svg>
    )
  },
  {
    catalogRef: "EC-02 // GRAIN BOWL",
    name: "The Organic Grain Bowl",
    category: "Containers",
    description: "Pressed food container formulated from clean wheat straw and bagasse residues. Designed for heavy commercial catering applications, microwave and oven safe.",
    rawMaterials: "Wheat straw fibers & sugarcane bagasse pulp",
    thickness: "2.8 mm wall thickness",
    resilience: "Up to 120°C (248°F), microwavable up to 3 mins",
    degradability: "100% Biodegradable in soil in 45 days",
    baseFlavor: "Neutral flavorless profile",
    svgDrawing: (
      <svg viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-48 h-48 text-moss-light">
        {/* Technical drafting lines */}
        <line x1="5" y1="35" x2="115" y2="35" strokeDasharray="3 3" opacity="0.4" />
        <line x1="60" y1="5" x2="60" y2="95" strokeDasharray="2 2" opacity="0.3" />
        {/* Bowl body */}
        <path d="M10 35 C10 35 12 85 60 85 C108 85 110 35 110 35 Z" fill="currentColor" opacity="0.08" />
        <path d="M10 35 C10 35 12 85 60 85 C108 85 110 35 110 35 Z" strokeWidth="1.5" />
        {/* Base line */}
        <line x1="42" y1="85" x2="78" y2="85" strokeWidth="2.5" />
        {/* Dimension labels */}
        <text x="50" y="30" fontSize="6" fontFamily="monospace" fill="currentColor" opacity="0.6">Ø 140mm</text>
        <text x="50" y="94" fontSize="6" fontFamily="monospace" fill="currentColor" opacity="0.6">Ø 70mm</text>
      </svg>
    )
  },
  {
    catalogRef: "EC-03 // CUTLERY SPOON",
    name: "The Baked Table Spoon",
    category: "Cutlery",
    description: "Crispy table spoon baked from structural organic grain flour. Serves as a perfect zero-waste tool for warm stews, yogurt, and ice cream.",
    rawMaterials: "Baked organic oat flour, wheat flour & plant seed pod fibers",
    thickness: "4.5 mm average density",
    resilience: "Up to 80°C (176°F) for 20 minutes",
    degradability: "Fully edible; degrades in backyard compost in 10 days",
    baseFlavor: "Toasted Oats (options: Cacao, Cardamom Spiced)",
    svgDrawing: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-48 h-48 text-rust" transform="rotate(-30)">
        {/* Drafting lines */}
        <line x1="50" y1="5" x2="50" y2="95" strokeDasharray="2 2" opacity="0.3" />
        {/* Spoon head */}
        <path d="M42 25 C38 35 38 50 50 50 C62 50 62 35 58 25 C54 18 46 18 42 25 Z" fill="currentColor" opacity="0.08" />
        <path d="M42 25 C38 35 38 50 50 50 C62 50 62 35 58 25 C54 18 46 18 42 25 Z" strokeWidth="1.5" />
        {/* Spoon handle */}
        <line x1="50" y1="50" x2="50" y2="90" strokeWidth="2" strokeLinecap="round" />
        <circle cx="50" cy="90" r="2" fill="currentColor" />
        {/* Label */}
        <text x="60" y="38" fontSize="6" fontFamily="monospace" fill="currentColor" opacity="0.6">14cm length</text>
      </svg>
    )
  },
  {
    catalogRef: "EC-04 // FLEX WRAPPING",
    name: "Translucent Seaweed Wrapping",
    category: "Packaging",
    description: "Flexible, protective film wrap synthesized from natural kelp starch. Replaces plastic wrapping for dry goods, single items, and direct food protection.",
    rawMaterials: "Brown seaweed extract, potato starch & natural plant glycerine",
    thickness: "40 microns thickness",
    resilience: "Up to 60°C (140°F), fully water-soluble options available",
    degradability: "Composts in 14 days; dissolves completely in warm water",
    baseFlavor: "Neutral flavorless profile",
    svgDrawing: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-48 h-48 text-moss">
        {/* Drafting square */}
        <rect x="25" y="25" width="50" height="50" rx="4" fill="currentColor" opacity="0.08" />
        <rect x="25" y="25" width="50" height="50" rx="4" strokeWidth="1.5" />
        {/* Fold marks */}
        <line x1="20" y1="35" x2="80" y2="65" strokeDasharray="3 3" opacity="0.4" />
        <line x1="35" y1="20" x2="65" y2="80" strokeDasharray="3 3" opacity="0.4" />
        {/* Leaf sprout inside */}
        <circle cx="50" cy="50" r="10" strokeDasharray="2 2" />
        <path d="M50 46 Q50 54 54 50" strokeWidth="1.5" />
        <path d="M50 50 Q46 50 48 54" strokeWidth="1.5" />
        <text x="25" y="20" fontSize="6" fontFamily="monospace" fill="currentColor" opacity="0.6">40 microns</text>
      </svg>
    )
  }
];

const TABS: ("All" | "Tableware" | "Containers" | "Cutlery" | "Packaging")[] = [
  "All", "Tableware", "Containers", "Cutlery", "Packaging"
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<"All" | "Tableware" | "Containers" | "Cutlery" | "Packaging">("All");

  const filteredSpecs = PRODUCTS_SPECS.filter(
    (product) => activeTab === "All" || product.category === activeTab
  );

  return (
    <main className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="mb-16">
          <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
            blueprint & specifications
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-bold leading-[0.95] text-ink tracking-tight">
            Ecolery Technical <br />
            <span className="text-moss font-light italic">specifications register.</span>
          </h1>
          <p className="text-ink/75 text-sm md:text-base leading-relaxed mt-6 max-w-xl">
            A comprehensive catalog detailing the material metrics, physical geometries, thermal thresholds, and biological degradation timelines of our tableware.
          </p>
        </div>

        {/* Categories Tab Selector with Framer Motion layoutId */}
        <div className="flex flex-wrap gap-2 border-b border-stone-300/30 pb-6 mb-16 select-none">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-colors duration-300 ${
                  isActive ? "text-cream" : "text-ink/65 hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-moss rounded-full z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>

        {/* Blueprint Specs Catalog */}
        <div className="space-y-24 md:space-y-36">
          <AnimatePresence mode="popLayout">
            {filteredSpecs.map((product, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={product.catalogRef}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch"
                >
                  
                  {/* Left Box: SVG Drafting Drawing (asymmetric grid) */}
                  <div className={`lg:col-span-5 bg-cream-2 border border-clay/30 rounded-[3rem_1rem_4rem_1.5rem] p-8 flex flex-col justify-between items-center shadow-sm relative overflow-hidden min-h-[340px] ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}>
                    
                    {/* Catalog reference index */}
                    <div className="w-full flex justify-between items-center text-[10px] font-mono tracking-widest text-clay font-bold border-b border-stone-300/40 pb-4 mb-4">
                      <span>REF // {product.catalogRef}</span>
                      <span className="text-moss uppercase">{product.category}</span>
                    </div>

                    {/* SVG Centerpiece */}
                    <div className="flex-grow flex items-center justify-center">
                      {product.svgDrawing}
                    </div>

                    <div className="w-full border-t border-stone-300/40 pt-4 mt-4 flex justify-between items-center text-[9px] font-mono text-ink/40">
                      <span>CAD SCHEMATIC ACCREDITED</span>
                      <span>1:1 SCALE VECTOR</span>
                    </div>

                  </div>

                  {/* Right Box: Tabular Spec Sheet (asymmetric grid) */}
                  <div className={`lg:col-span-7 flex flex-col justify-between ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}>
                    
                    <div>
                      <h2 className="font-display text-3xl font-bold text-ink mb-4">
                        {product.name}
                      </h2>
                      <p className="text-ink/80 text-sm leading-relaxed mb-8 max-w-xl">
                        {product.description}
                      </p>

                      {/* Technical Specs Blueprint Table */}
                      <div className="border-t border-stone-400/30 font-body text-xs md:text-sm">
                        
                        <div className="grid grid-cols-12 py-3.5 border-b border-stone-300/20">
                          <span className="col-span-4 font-mono text-[10px] text-clay uppercase tracking-wider">Raw Material Composition</span>
                          <span className="col-span-8 text-ink/85 font-medium">{product.rawMaterials}</span>
                        </div>

                        <div className="grid grid-cols-12 py-3.5 border-b border-stone-300/20">
                          <span className="col-span-4 font-mono text-[10px] text-clay uppercase tracking-wider">Density / Thickness</span>
                          <span className="col-span-8 text-ink/85 font-medium">{product.thickness}</span>
                        </div>

                        <div className="grid grid-cols-12 py-3.5 border-b border-stone-300/20">
                          <span className="col-span-4 font-mono text-[10px] text-clay uppercase tracking-wider">Thermal Tolerance</span>
                          <span className="col-span-8 text-ink/85 font-medium text-moss font-semibold">{product.resilience}</span>
                        </div>

                        <div className="grid grid-cols-12 py-3.5 border-b border-stone-300/20">
                          <span className="col-span-4 font-mono text-[10px] text-clay uppercase tracking-wider">Home Degradation Rate</span>
                          <span className="col-span-8 text-ink/85 font-medium text-rust font-semibold">{product.degradability}</span>
                        </div>

                        <div className="grid grid-cols-12 py-3.5 border-b border-stone-400/30">
                          <span className="col-span-4 font-mono text-[10px] text-clay uppercase tracking-wider">Base Taste Profile</span>
                          <span className="col-span-8 text-ink/85 font-medium">{product.baseFlavor}</span>
                        </div>

                      </div>
                    </div>

                    <div className="mt-8 pt-6 flex flex-wrap justify-between items-center gap-4 border-t border-stone-300/30">
                      <a
                        href="/contact"
                        className="bg-ink text-cream hover:bg-moss rounded-full px-8 py-3.5 text-xs md:text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm flex items-center gap-2"
                      >
                        Request Sample Kit
                        <ShoppingCart className="w-4 h-4" />
                      </a>
                      <div className="flex items-center gap-2 text-xs font-semibold text-moss">
                        <ShieldCheck className="w-4.5 h-4.5 text-rust shrink-0" />
                        FDA Certified Food Safe Compliance
                      </div>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Customization Details Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 bg-cream-2 border border-stone-300/35 rounded-[3rem_1rem_4rem_2rem] p-8 md:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-stone-900/5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#232017 6%, transparent 7%)", backgroundSize: "12px 12px" }} />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-moss text-xs font-semibold uppercase tracking-widest bg-moss/5 px-4 py-1.5 rounded-full inline-block">
                Custom Branding & Inking
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
                Emboss your café&rsquo;s credentials directly onto the cork.
              </h2>
              <p className="text-ink/80 text-sm leading-relaxed max-w-xl">
                We support zero-chemical branding using high-precision laser etching and organic soy-ink embossing. Showcase your logo, carbon stats, or compost instructions directly on our cups, spoons, and containers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-ink/75">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-rust text-cream flex items-center justify-center text-[10px] font-bold">✓</div>
                  <span>Laser engraving leaves zero residues</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-rust text-cream flex items-center justify-center text-[10px] font-bold">✓</div>
                  <span>Natural soy inks degrade in soil</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-cream rounded-3xl p-8 border border-stone-300/30 flex flex-col justify-between h-full shadow-sm">
              <h3 className="font-display font-bold text-lg text-ink mb-4">
                Commercial Inquiry
              </h3>
              <p className="text-ink/70 text-xs md:text-sm leading-relaxed mb-6">
                Ready to trial edible packaging in your business? Order our commercial Sample Kit which includes 10 Edible Cups, 20 Cereal Spoons, and 5 Grain Bowls.
              </p>
              <a
                href="/contact"
                className="bg-moss hover:bg-moss/95 text-cream hover:scale-[1.02] active:scale-[0.98] transition-all font-semibold rounded-full px-6 py-3.5 text-xs md:text-sm text-center flex items-center justify-center gap-2"
              >
                Inquire Samples Now
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </main>
  );
}
