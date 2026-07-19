"use client";

import { Products } from "@/components/sections/Products";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Catalog Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-4xl"
        >
          <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
            our catalog
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-ink tracking-tight">
            High-tech tableware <br />
            <span className="text-rust italic font-normal">made entirely of plants.</span>
          </h1>
        </motion.div>

        {/* Embedded Core Products Component */}
        <Products />

        {/* Wholesale & Customization Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-cream-2 border border-stone-300/35 rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-stone-900/5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#232017 6%, transparent 7%)", backgroundSize: "12px 12px" }} />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-moss text-xs font-semibold uppercase tracking-wider bg-moss/5 px-3 py-1 rounded-full">
                Custom branding & customization
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mt-4 mb-4">
                Emboss your café&rsquo;s credentials directly onto the cork.
              </h2>
              <p className="text-ink/85 text-xs md:text-sm leading-relaxed mb-6 max-w-xl">
                We support zero-chemical branding using high-precision laser etching and organic soy-ink embossing. Showcase your logo, carbon stats, or compost instructions directly on our cups, spoons, and containers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-rust text-cream flex items-center justify-center text-[10px] font-bold">✓</div>
                  <span className="text-xs text-ink/75">Laser engraving leaves zero residues</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-rust text-cream flex items-center justify-center text-[10px] font-bold">✓</div>
                  <span className="text-xs text-ink/75">Natural soy inks degrade in soil</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-cream rounded-3xl p-6 md:p-8 border border-stone-300/30 flex flex-col justify-between h-full">
              <h3 className="font-display font-semibold text-lg text-ink mb-4">
                Wholesale Inquiry
              </h3>
              <p className="text-ink/70 text-xs md:text-sm leading-relaxed mb-6">
                Ready to trial edible packaging in your business? Order our commercial Sample Kit which includes 10 Edible Cups, 20 Cereal Spoons, and 5 Grain Bowls.
              </p>
              <a
                href="/contact"
                className="bg-moss hover:bg-moss/95 text-cream hover:scale-[1.02] active:scale-[0.98] transition-all font-semibold rounded-full px-6 py-3.5 text-xs md:text-sm text-center flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Request Commercial Sample Kit
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
