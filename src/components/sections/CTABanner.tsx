"use client";

import { ArrowRight, Compass, HelpCircle } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-24 md:py-32 bg-cream px-6 relative overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute top-[-30%] left-[-20%] w-[800px] h-[800px] bg-moss/5 rounded-full blur-3xl pointer-events-none select-none" />
      <div className="absolute bottom-[-30%] right-[-20%] w-[800px] h-[800px] bg-rust/5 rounded-full blur-3xl pointer-events-none select-none" />

      {/* Main glass card container */}
      <div className="max-w-7xl mx-auto bg-moss text-cream rounded-[3rem] border border-moss-light/30 p-8 md:p-20 relative overflow-hidden shadow-xl text-center">
        
        {/* Subtle texture layout */}
        <div className="absolute inset-0 bg-stone-900/10 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 7%, transparent 8%)", backgroundSize: "12px 12px" }} />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          
          <span className="font-body text-cream-2 text-xs md:text-sm tracking-[0.25em] uppercase bg-cream/10 px-5 py-2 rounded-full inline-block mb-6">
            join the circular economy
          </span>

          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8">
            The future of packaging is <span className="text-cream-2 italic font-normal">organic.</span>
          </h2>

          <p className="text-cream-2/80 text-base md:text-xl leading-relaxed mb-12 max-w-2xl text-balance">
            Replaces synthetic materials with plants. Eliminate recycling backlogs and waste management costs. Partner with Ecolery to reshape your customer experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-rust text-cream hover:bg-rust/95 font-medium rounded-full px-8 py-4 text-[14px] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md flex items-center justify-center gap-2 group"
            >
              Order Sample Kit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="mailto:partner@ecolery.com"
              className="w-full sm:w-auto border border-cream/20 bg-cream/5 hover:bg-cream/10 text-cream font-medium rounded-full px-8 py-4 text-[14px] transition-colors flex items-center justify-center gap-2"
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
