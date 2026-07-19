"use client";

import { WhyEdible } from "@/components/sections/WhyEdible";
import { Impact } from "@/components/sections/Impact";
import { Certifications } from "@/components/sections/Certifications";
import { motion } from "framer-motion";

export default function SustainabilityPage() {
  return (
    <main className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        
        {/* Editorial Sourcing Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-4xl"
        >
          <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
            our ecological loop
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-ink tracking-tight">
            Designed for soil, <br />
            <span className="text-moss italic font-normal">backed by food science.</span>
          </h1>
        </motion.div>

      </div>

      {/* Why Edible Section (Slider) */}
      <WhyEdible />

      {/* Environmental Impact (Progress Circle) */}
      <Impact />

      {/* Certifications (Loop Banner) */}
      <div className="py-12 bg-cream-2/30">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <h2 className="font-display text-2xl font-bold text-ink">
            Compliance & Eco-Certification Credentials
          </h2>
          <p className="text-ink/60 text-xs md:text-sm mt-2 max-w-xl mx-auto">
            Our material configurations are officially tested, conforming to FDA and European Union food contact safety and biodegradation protocols.
          </p>
        </div>
        <Certifications />
      </div>

    </main>
  );
}
