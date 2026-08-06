"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const STELLAR_WORM_URL = "https://www.stellarworm.com/";

export function StellarWormCredit() {
  return (
    <motion.a
      href={STELLAR_WORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover="hover"
      className="group font-body text-cream/60 hover:text-cream inline-flex items-center gap-2.5 text-[12px] font-semibold transition-colors duration-300"
    >
      <span
        aria-hidden
        className="border-primary-light/70 text-primary-light group-hover:bg-primary-light/10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-300"
      >
        <span className="text-[10px] font-bold tracking-tight">SW</span>
      </span>

      <span>
        <span>Site crafted by </span>
        <span className="text-primary-light relative">
          Stellar Worm
          <span
            aria-hidden
            className="bg-primary-light absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
          />
        </span>
      </span>

      <motion.span
        aria-hidden
        variants={{
          hover: {
            scale: [1, 1.4, 1],
            rotate: [0, 180, 0],
            transition: { duration: 0.7, ease: "easeInOut" },
          },
        }}
        className="text-primary-light"
      >
        <Sparkles className="h-3 w-3" strokeWidth={1.75} />
      </motion.span>
    </motion.a>
  );
}
