"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Animated counter utility
function Counter({ value, suffix = "", duration = 2.5 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeProgress = progress * (2 - progress); // Ease out quad
      setCount(Math.floor(easeProgress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    if (ref.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            window.requestAnimationFrame(step);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ref.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [value, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-cream overflow-hidden px-6 py-12 md:py-20">
      
      {/* Background Organic Elements & Soft Lights */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Soft glowing ambient circles */}
        <div aria-hidden className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cork/10 blur-[130px]" />
        <div aria-hidden className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-moss/10 blur-[140px]" />

        {/* Ambient floating vector leaves (interactive and organic) */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] w-12 h-12 text-moss/20 hidden lg:block"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M17 8c.98 0 1.76.83 1.94 1.82a6 6 0 0 1-3.64 6.54c-1.42.58-3.08.64-4.52-.08l-.28-.15V21H9v-5.2c-.37-.32-.69-.7-.93-1.12-1.34-2.3-1.07-5.38.65-7.39C9.9 5.86 12 5 14 5v3h3z" />
          </svg>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -10, 0],
            x: [0, -12, 0]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[25%] right-[45%] w-10 h-10 text-cork/20 hidden lg:block"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <ellipse cx="12" cy="12" rx="6" ry="10" transform="rotate(45 12 12)" />
            <path d="M8 8 C11 12, 13 12, 16 16" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center relative z-10">
        
        {/* Left Column: Premium Editorial Content */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 bg-moss/5 border border-moss/10 px-4 py-1.5 rounded-full mb-6 text-moss text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 text-rust animate-pulse" />
            <span>Modern Food Technology</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-ink tracking-tight"
          >
            Sipped by you.
            <br />
            <span className="text-moss font-light italic">Absorbed by earth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-ink/80 text-base md:text-lg leading-relaxed mt-6 max-w-xl text-balance"
          >
            We shape agricultural by-products into premium, heat-resistant edible tableware. Replaces petrochemical plastics entirely, elevating the dining experience to a zero-waste loop.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/products"
              className="w-full sm:w-auto bg-rust text-cream hover:bg-rust/95 hover:scale-[1.02] active:scale-[0.98] transition-all font-semibold px-8 py-4 rounded-full text-sm shadow-md hover:shadow-rust/20 flex items-center justify-center gap-2 group"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              href="/sustainability"
              className="w-full sm:w-auto border border-moss/20 text-moss hover:bg-moss/5 font-semibold px-8 py-4 rounded-full text-sm transition-colors text-center"
            >
              Our Sustainability Loop
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Premium Product Composition */}
        <div className="lg:col-span-6 flex justify-center items-center relative">
          
          {/* Main composition card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[500px] aspect-square rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-stone-300/30 shadow-xl group"
          >
            <Image
              src="/hero_cup_splash.png"
              alt="Ecolery edible coffee cup dynamic photography featuring coffee splash and floating leaves"
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-[6s] ease-out"
              priority
              sizes="(max-w-7xl) 100vw, 500px"
            />
            {/* Soft dark corner vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Floater overlay badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute -bottom-6 -left-6 bg-cream-2/95 border border-stone-300/40 backdrop-blur-md rounded-2xl p-4 shadow-lg hidden sm:flex items-center gap-3.5 z-20 max-w-[200px]"
          >
            <div className="w-9 h-9 rounded-full bg-moss/10 flex items-center justify-center text-moss shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-ink">100% Home Compostable</h4>
              <p className="text-[10px] text-ink/60 mt-0.5">Composts in 30 days in soil.</p>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Trust Indicators Bar */}
      <div className="max-w-7xl mx-auto w-full mt-16 md:mt-24 pt-8 border-t border-stone-300/30">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
          
          <div className="flex flex-col lg:items-start items-center">
            <span className="font-display text-3xl font-bold text-moss">
              <Counter value={4251820} suffix="+" />
            </span>
            <span className="font-body text-ink/55 text-xs uppercase tracking-wider mt-1.5">
              Plastic Cups Saved
            </span>
          </div>

          <div className="flex flex-col lg:items-start items-center border-l-0 lg:border-l border-stone-300/30 lg:pl-8">
            <span className="font-display text-3xl font-bold text-moss">
              <Counter value={850} suffix=" Tons" />
            </span>
            <span className="font-body text-ink/55 text-xs uppercase tracking-wider mt-1.5">
              CO₂ Emissions Saved
            </span>
          </div>

          <div className="flex flex-col lg:items-start items-center border-l-0 lg:border-l border-stone-300/30 lg:pl-8">
            <span className="font-display text-3xl font-bold text-moss">
              <Counter value={28} />
            </span>
            <span className="font-body text-ink/55 text-xs uppercase tracking-wider mt-1.5">
              Countries Replaced Plastic
            </span>
          </div>

          <div className="flex flex-col lg:items-start items-center border-l-0 lg:border-l border-stone-300/30 lg:pl-8">
            <span className="font-display text-3xl font-bold text-moss">
              <Counter value={99} suffix=".6%" duration={1.5} />
            </span>
            <span className="font-body text-ink/55 text-xs uppercase tracking-wider mt-1.5">
              Partnership Loyalty
            </span>
          </div>

        </div>
      </div>

    </section>
  );
}


