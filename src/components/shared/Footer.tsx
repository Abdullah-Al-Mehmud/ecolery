"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE_NAME } from "@/lib/constants";
import { ArrowRight, Leaf } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const containerRef = useRef<HTMLElement>(null!);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={containerRef}
      className="bg-ink text-cream border-t border-stone-800 px-6 py-16 md:py-24 md:px-12 relative overflow-hidden"
    >
      {/* Background graphic */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] text-stone-800/10 pointer-events-none select-none blur-sm translate-x-12 translate-y-12">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <path d="M50 15 L85 80 H15 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-stone-800">
          
          {/* Column 1: Brand & Logo */}
          <div className="md:col-span-4 flex flex-col items-start">
            <a href="#" className="flex items-center gap-2 mb-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                className="text-rust"
              >
                <line x1="5" y1="2" x2="5" y2="22" />
                <line x1="3" y1="2" x2="3" y2="8" />
                <line x1="7" y1="2" x2="7" y2="8" />
                <circle cx="12.5" cy="12" r="4.3" />
                <path d="M19 2v9c0 1.4-1 2.4-2 2.6V22" />
              </svg>
              <span className="font-display text-cream text-2xl font-bold tracking-tight">ecolery</span>
            </a>
            <p className="text-cream-2/70 text-sm leading-relaxed mb-6 max-w-sm">
              We design and manufacture high-tech, organic edible cups, bowls, and cutlery that replace plastics and return nutrients back to earth.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-rust bg-cream/5 px-3 py-1.5 rounded-full border border-cream/10">
              <Leaf className="w-3.5 h-3.5" />
              <span>Certified B Corp & 100% Circular</span>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="md:col-span-2 col-span-2">
            <h4 className="font-display text-sm font-semibold text-cream uppercase tracking-wider mb-6">
              Collection
            </h4>
            <ul className="space-y-3.5 text-cream-2/75 text-sm">
              <li><a href="#products" className="hover:text-rust transition-colors">Edible Coffee Cups</a></li>
              <li><a href="#products" className="hover:text-rust transition-colors">Grain Takeaway Bowls</a></li>
              <li><a href="#products" className="hover:text-rust transition-colors">Baked Cereal Spoons</a></li>
              <li><a href="#products" className="hover:text-rust transition-colors">Plant Wrappers</a></li>
              <li><a href="#products" className="hover:text-rust transition-colors">Custom Branding</a></li>
            </ul>
          </div>

          {/* Column 3: Sustainability */}
          <div className="md:col-span-2 col-span-2">
            <h4 className="font-display text-sm font-semibold text-cream uppercase tracking-wider mb-6">
              Sustainability
            </h4>
            <ul className="space-y-3.5 text-cream-2/75 text-sm">
              <li><a href="#process" className="hover:text-rust transition-colors">How it Works</a></li>
              <li><a href="#journey" className="hover:text-rust transition-colors">Cradle-to-Cradle Loop</a></li>
              <li><a href="#journey" className="hover:text-rust transition-colors">Sourcing Standards</a></li>
              <li><a href="#process" className="hover:text-rust transition-colors">Environmental Impact</a></li>
              <li><a href="#journey" className="hover:text-rust transition-colors">Our Certifications</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter signup */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="font-display text-sm font-semibold text-cream uppercase tracking-wider mb-6">
              Subscribe to Loop News
            </h4>
            <p className="text-cream-2/70 text-xs md:text-sm leading-relaxed mb-6">
              Get raw material updates, case studies, and notifications on wholesale sample launches.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-stretch border border-cream/10 bg-cream/5 rounded-full w-full p-1.5 focus-within:ring-2 focus-within:ring-rust/50 transition-all">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-0 px-4 py-2 flex-grow text-xs text-cream outline-none focus:ring-0 placeholder:text-cream/35"
                required
                aria-label="Email subscription input"
              />
              <button
                type="submit"
                className="bg-rust text-cream hover:bg-rust/95 p-2 rounded-full transition-colors flex items-center justify-center shrink-0"
                aria-label="Submit newsletter subscription"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Lower Row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[12px] text-cream-2/55">
            &copy; {new Date().getFullYear()} {SITE_NAME}. Tableware for the next century. All rights reserved.
          </p>
          <div className="flex gap-6 text-[12px] text-cream-2/55">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <span className="text-stone-700">|</span>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
            <span className="text-stone-700">|</span>
            <a href="#" className="hover:text-cream transition-colors">Wholesale Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

