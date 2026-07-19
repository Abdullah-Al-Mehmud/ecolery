"use client";

import { ArrowRight, Compass, HelpCircle } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-20 md:py-32 bg-cream px-6 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div aria-hidden className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-moss/5 blur-[120px]" />
        <div aria-hidden className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cork/5 blur-[120px]" />
      </div>

      {/* Main organic card container */}
      <div className="max-w-7xl mx-auto bg-moss text-cream rounded-[3.5rem_2rem_4rem_2rem] border border-moss-light/30 p-8 md:p-20 relative overflow-hidden shadow-xl text-center">
        
        {/* Subtle texture layout */}
        <div className="absolute inset-0 bg-stone-900/10 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 7%, transparent 8%)", backgroundSize: "12px 12px" }} />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          
          <span className="font-body text-cream-2 text-xs md:text-sm tracking-[0.25em] uppercase bg-cream/10 px-5 py-2 rounded-full inline-block mb-6">
            join the circular economy
          </span>

          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8">
            The future of packaging is <span className="text-cream-2 font-light italic">organic.</span>
          </h2>

          <p className="text-cream-2/80 text-sm md:text-base leading-relaxed mb-12 max-w-2xl text-balance">
            Replaces synthetic materials with plants. Eliminate recycling backlogs and waste management costs. Partner with Ecolery to reshape your customer experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="/contact"
              className="w-full sm:w-auto bg-rust text-cream hover:bg-rust/95 hover:scale-[1.02] active:scale-[0.98] transition-all font-semibold rounded-full px-8 py-4 text-xs md:text-sm shadow-md flex items-center justify-center gap-2 group"
            >
              Order Sample Kit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="mailto:partner@ecolery.com"
              className="w-full sm:w-auto border border-cream/20 bg-cream/5 hover:bg-cream/10 text-cream font-semibold rounded-full px-8 py-4 text-xs md:text-sm transition-colors flex items-center justify-center gap-2"
            >
              Request Custom Quote
            </a>
          </div>

          {/* Quick trust metrics row */}
          <div className="mt-16 pt-8 border-t border-cream/10 flex flex-wrap justify-center gap-x-12 gap-y-4 text-xs text-cream/60">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-rust" />
              <span>Ships globally within 7 days</span>
            </div>
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-rust" />
              <span>FSC Certified Raw Material</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
