"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Shield, Verified } from "lucide-react";

interface Badge {
  name: string;
  agency: string;
  icon: React.ReactNode;
}

const BADGES: Badge[] = [
  {
    name: "FDA Food Contact Approved",
    agency: "US FDA Food Safety Compliance",
    icon: <Shield className="w-5 h-5 text-rust shrink-0" />,
  },
  {
    name: "USDA 100% Biobased Material",
    agency: "United States Department of Agriculture",
    icon: <Award className="w-5 h-5 text-moss shrink-0" />,
  },
  {
    name: "DIN CERTCO Home Compostable",
    agency: "European Compostability Testing",
    icon: <CheckCircle className="w-5 h-5 text-moss-light shrink-0" />,
  },
  {
    name: "FSC Certified Reclaimed Wood/Cork",
    agency: "Forest Stewardship Council",
    icon: <Verified className="w-5 h-5 text-cork-dark shrink-0" />,
  },
  {
    name: "ISO 22000 Certified Quality",
    agency: "International Food Safety Standard",
    icon: <Shield className="w-5 h-5 text-rust shrink-0" />,
  },
  {
    name: "B Corp Circular Enterprise",
    agency: "Certified Benefit Corporation",
    icon: <Award className="w-5 h-5 text-moss shrink-0" />,
  }
];

export function Certifications() {
  // Duplicate badges list to enable smooth loop transition
  const duplicatedBadges = [...BADGES, ...BADGES, ...BADGES];

  return (
    <section className="py-16 bg-cream-2 border-t border-b border-stone-300/40 relative overflow-hidden select-none">
      
      {/* Ticker Row */}
      <div className="flex overflow-x-hidden relative w-full mask-gradient">
        {/* Soft edge blur overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-cream-2 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-cream-2 to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex gap-8 shrink-0 whitespace-nowrap"
        >
          {duplicatedBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-cream/70 border border-stone-300/20 px-6 py-4 rounded-2xl shadow-inner min-w-[280px]"
            >
              {/* Badge Icon */}
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center shadow-sm">
                {badge.icon}
              </div>

              {/* Agency and Details */}
              <div className="flex flex-col">
                <span className="font-display font-bold text-ink text-sm">
                  {badge.name}
                </span>
                <span className="font-body text-[10px] text-ink/50 uppercase tracking-wider mt-0.5">
                  {badge.agency}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
