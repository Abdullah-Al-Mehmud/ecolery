"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-cream/70 backdrop-blur-md border-b border-stone-300/20"
    >
      <Link href="/" className="flex items-center gap-2 group">
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

      <Link
        href="/contact"
        className="bg-ink text-cream hover:bg-moss hover:scale-[1.02] active:scale-[0.98] rounded-full px-5 py-2 text-[13px] font-medium transition-all shadow-sm"
      >
        Inquire Now
      </Link>
    </motion.header>
  );
}

