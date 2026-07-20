"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-cream/70 backdrop-blur-md border-b border-stone-300/20"
    >
      <Link href="/" className="flex items-center gap-2 group relative z-50">
        {/* fork · plate · spoon mark, echoing the logo */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          className="text-moss group-hover:rotate-[15deg] transition-transform duration-300"
        >
          <line x1="5" y1="2" x2="5" y2="22" />
          <line x1="3" y1="2" x2="3" y2="8" />
          <line x1="7" y1="2" x2="7" y2="8" />
          <circle cx="12.5" cy="12" r="4.3" />
          <path d="M19 2v9c0 1.4-1 2.4-2 2.6V22" />
        </svg>
        <span className="font-display text-ink text-lg font-semibold tracking-tight">ecolery</span>
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`relative font-body text-[13px] tracking-[0.08em] uppercase transition-colors py-1 ${
                isActive ? "text-moss font-semibold" : "text-ink/65 hover:text-ink"
              }`}
            >
              {link.label}
              {isActive && (
                <motion.div
                  layoutId="navActiveLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-rust rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Right Menu Controls (Mobile / CTA) */}
      <div className="flex items-center gap-3">
        <Link
          href="/contact"
          className="bg-ink text-cream hover:bg-moss hover:scale-[1.02] active:scale-[0.98] rounded-full px-5 py-2 text-[13px] font-medium transition-all shadow-sm hidden sm:block"
        >
          Inquire Now
        </Link>
        
        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-full text-ink hover:bg-stone-200/30 transition-colors focus:outline-none relative z-50"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Sliding Navigation Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark background backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-ink z-40 md:hidden"
            />
            {/* Sliding Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 left-0 right-0 bg-[#FAF8F4] border-b border-stone-300/40 shadow-2xl pt-24 pb-8 px-8 flex flex-col gap-6 md:hidden z-40"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-body text-sm tracking-[0.1em] uppercase py-2 border-b border-stone-300/10 transition-colors ${
                      isActive ? "text-moss font-semibold" : "text-ink/65 hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-ink text-cream hover:bg-moss rounded-full py-3 text-center text-xs font-semibold uppercase tracking-wider transition-all mt-4"
              >
                Inquire Now
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
