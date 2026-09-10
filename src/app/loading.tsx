"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="bg-cream flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-12 w-12">
          <motion.div
            className="border-primary/20 absolute inset-0 rounded-full border-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="border-primary absolute inset-0 rounded-full border-2 border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <motion.p
          className="font-body text-ink/40 text-[13px] font-semibold tracking-[0.14em] uppercase"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          Loading
        </motion.p>
      </div>
    </div>
  );
}
