"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Impact", href: "#impact" },
  { label: "Explore", href: "#explore" },
  { label: "Contact Us", href: "#contact" },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mql.matches) setMenuOpen(false);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{
          opacity: 0,
          y: -16,
          backgroundColor: "#f6f2e9",
          borderBottomColor: "rgba(28, 32, 24, 0)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          backgroundColor: scrolled ? "#efe9da" : "#f6f2e9",
          borderBottomColor: scrolled ? "rgba(28, 32, 24, 0.1)" : "rgba(28, 32, 24, 0)",
        }}
        transition={{
          opacity: { duration: 0.7, ease: EASE },
          y: { duration: 0.7, ease: EASE },
          backgroundColor: { duration: 0.3, ease: "easeOut" },
          borderBottomColor: { duration: 0.3, ease: "easeOut" },
        }}
        className="fixed inset-x-0 top-0 z-50 h-18 border-b"
      >
        <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-6 md:grid md:grid-cols-[auto_1fr_auto]">
          <a href="#" aria-label="Ecolery home" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Ecolery logo"
              width={92}
              height={92}
              className="h-12 w-12 object-contain"
            />
          </a>

          <nav className="hidden items-center justify-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-[13px] font-semibold tracking-[0.08em] text-ink uppercase transition-colors duration-300 hover:text-primary"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-primary px-5 py-2.5 text-[13px] font-medium text-cream transition-colors duration-300 hover:bg-primary-dark md:inline-block"
            >
              Get a Quote
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="text-ink rounded-full p-2 transition-colors duration-300 hover:bg-ink/5 md:hidden"
            >
              <Menu className="h-6 w-6" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              key="nav-backdrop"
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-ink/30"
            />
            <motion.aside
              key="nav-panel"
              role="dialog"
              aria-label="Menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: EASE, duration: 0.4 }}
              className="bg-cream-2 fixed inset-y-0 right-0 z-[70] flex w-full max-w-xs flex-col px-6 py-4"
            >
              <div className="flex items-center justify-between">
                <Image
                  src="/logo.png"
                  alt="Ecolery logo"
                  width={92}
                  height={92}
                  className="h-12 w-12 object-contain"
                />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="text-ink rounded-full p-2 transition-colors duration-300 hover:bg-ink/5"
                >
                  <X className="h-6 w-6" strokeWidth={1.75} />
                </button>
              </div>

              <nav className="mt-10 flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group relative w-fit text-[14px] font-semibold tracking-[0.08em] text-ink uppercase transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                ))}
              </nav>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-auto rounded-full bg-primary px-5 py-3 text-center text-[13px] font-medium text-cream transition-colors duration-300 hover:bg-primary-dark"
              >
                Get a Quote
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
