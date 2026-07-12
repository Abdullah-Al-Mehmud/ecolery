"use client";

import { motion } from "framer-motion";

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
      className="relative z-40 flex items-center justify-between px-6 py-6 md:px-12"
    >
      <a href="#" className="flex items-center gap-2">
        {/* fork · plate · spoon mark, echoing the logo */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          className="text-moss"
        >
          <line x1="5" y1="2" x2="5" y2="22" />
          <line x1="3" y1="2" x2="3" y2="8" />
          <line x1="7" y1="2" x2="7" y2="8" />
          <circle cx="12.5" cy="12" r="4.3" />
          <path d="M19 2v9c0 1.4-1 2.4-2 2.6V22" />
        </svg>
        <span className="font-display text-ink text-lg font-medium tracking-tight">ecolery</span>
      </a>

      <nav className="hidden items-center gap-9 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-body text-ink/70 hover:text-ink text-[13px] tracking-[0.08em] uppercase transition-colors"
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
