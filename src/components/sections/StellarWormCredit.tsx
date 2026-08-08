"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
      <span className="flex items-center gap-1">
        <span>Site crafted by </span>
        <Image width={100} height={20} src="/stellarLogo.png" alt="Stellar Worm Logo" />
      </span>
    </motion.a>
  );
}
