"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Shop", href: "#shop" },
  { label: "Our Process", href: "#process" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      // className="relative z-40 flex items-center justify-between px-6 py-6 md:px-12"
      className="max-w-8xl mx-auto flex items-center gap-96 py-2"
    >
      <a href="#" className="flex items-center gap-2">
        {/* fork · plate · spoon mark, echoing the logo */}

        <Image
          src="/logo.png"
          alt="Ecolery logo"
          width={92}
          height={92}
          className="h-16 w-16 object-contain"
        />
      </a>

      <nav className="hidden items-center gap-9 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:text-ink text-[13px] font-semibold tracking-[0.08em] text-gray-600 uppercase transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="#shop"
        className="bg-ink text-cream hover:bg-moss rounded-full px-5 py-2.5 text-[13px] font-medium transition-colors"
      >
        Shop now
      </a>
    </motion.header>
  );
}
