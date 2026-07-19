"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
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
    <section className="relative min-h-screen flex flex-col justify-between bg-cream overflow-hidden px-6 pt-12 pb-8 md:px-12 md:pt-20">
      
      {/* Background Organic Ambient Light */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div aria-hidden className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-cork/10 blur-[130px]" />
        <div aria-hidden className="absolute bottom-[20%] right-[-15%] w-[700px] h-[700px] rounded-full bg-moss/10 blur-[140px]" />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center relative z-10 my-8">
        
        {/* Giant Overlapping Editorial Heading */}
        <div className="w-full mb-12 md:mb-16 select-none relative">
          
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          >
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold leading-[0.9] text-ink tracking-tight">
              Cradled by <span className="text-moss font-light italic">nature.</span>
            </h1>
            
            {/* Metadata Tag */}
            <div className="font-mono text-[10px] text-clay uppercase tracking-[0.2em] border border-stone-300/40 px-3.5 py-1.5 rounded-full bg-cream-2/45 hidden lg:block mb-3">
              COMPOST_BOUND / MAT-08
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-right mt-2"
          >
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold leading-[0.9] text-ink tracking-tight">
              Eaten by the <span className="text-rust font-light italic">earth.</span>
            </h1>
          </motion.div>

        </div>

        {/* Asymmetrical Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Left Side: Short Editorial Copy & Actions (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-start relative z-20">
            
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-2 bg-moss/5 border border-moss/10 px-4 py-1.5 rounded-full mb-6 text-moss text-xs font-semibold uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 text-rust animate-pulse" />
              <span>Modern Circular Sourcing</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-ink/80 text-sm md:text-base leading-relaxed max-w-md text-balance"
            >
              We harvest local agricultural fibers and reclaimed cork oak bark to bind premium, heat-resistant edible coffee cups, containers, and tableware. We replace petrochemical plastic with biological loops, leaving exactly zero waste.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href="/products"
                className="w-full sm:w-auto bg-rust text-cream hover:bg-rust/95 hover:scale-[1.02] active:scale-[0.98] transition-all font-semibold px-8 py-4 rounded-full text-xs md:text-sm shadow-md hover:shadow-rust/20 flex items-center justify-center gap-2 group"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="/sustainability"
                className="w-full sm:w-auto border border-moss/20 text-moss hover:bg-moss/5 font-semibold px-8 py-4 rounded-full text-xs md:text-sm transition-colors text-center"
              >
                Sustainability Mission
              </Link>
            </motion.div>

          </div>

          {/* Right Side: Collaged Product Centerpiece (col-span-7) */}
          <div className="lg:col-span-7 flex justify-center items-center relative">
            
            {/* Background Botanical Line Sketch SVG */}
            <div className="absolute top-[-10%] right-[-5%] w-[120%] h-[120%] text-moss/5 pointer-events-none select-none z-0">
              <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-full h-full">
                <path d="M20 180 C80 150 120 80 180 20" strokeLinecap="round" />
                <path d="M100 100 Q80 70 60 90 Q85 105 100 100 Z" fill="currentColor" opacity="0.4" />
                <path d="M140 60 Q120 30 110 50 Q130 70 140 60 Z" fill="currentColor" opacity="0.4" />
                <circle cx="65" cy="95" r="2" fill="currentColor" />
                <circle cx="125" cy="55" r="2.5" fill="currentColor" />
              </svg>
            </div>

            {/* Asymmetric curved product photo border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[550px] aspect-[4/3] rounded-[4rem_1.5rem_5rem_2rem] overflow-hidden border border-stone-300/35 shadow-xl group z-10 bg-cream-2"
            >
              <Image
                src="/hero_cup_splash.png"
                alt="Ecolery premium organic cup dynamic photography"
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-[6s] ease-out"
                priority
                sizes="(max-w-7xl) 100vw, 550px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Overlay spec ledger card */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute bottom-[-10px] left-[-15px] bg-cream-2/95 border border-clay/35 backdrop-blur-md rounded-2xl p-4 shadow-lg hidden sm:flex items-center gap-3.5 z-20 max-w-[220px]"
            >
              <div className="w-9 h-9 rounded-full bg-rust/10 flex items-center justify-center text-rust shrink-0 font-bold text-xs">
                OK
              </div>
              <div>
                <h4 className="font-display font-bold text-xs text-ink">Biological Cradle</h4>
                <p className="text-[10px] text-ink/65 mt-0.5 font-mono">100% Home Compostable</p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* Flat Technical Statistics Ledger Table (No generic card columns) */}
      <div className="max-w-7xl mx-auto w-full mt-12 pt-6 border-t border-clay/30 select-none">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          
          <div className="flex flex-col py-2">
            <span className="font-mono text-[9px] text-clay uppercase tracking-widest">ledger // waste</span>
            <span className="font-display text-2xl md:text-3xl font-bold text-moss mt-1">
              <Counter value={4251820} suffix="+" />
            </span>
            <span className="font-body text-ink/70 text-xs mt-0.5">
              Plastic Cups Saved
            </span>
          </div>

          <div className="flex flex-col py-2 border-l border-clay/20 pl-4 lg:pl-6">
            <span className="font-mono text-[9px] text-clay uppercase tracking-widest">ledger // carbon</span>
            <span className="font-display text-2xl md:text-3xl font-bold text-moss mt-1">
              <Counter value={850} suffix=" Tons" />
            </span>
            <span className="font-body text-ink/70 text-xs mt-0.5">
              CO₂ Emissions Saved
            </span>
          </div>

          <div className="flex flex-col py-2 border-l border-clay/20 pl-4 lg:pl-6">
            <span className="font-mono text-[9px] text-clay uppercase tracking-widest">ledger // global</span>
            <span className="font-display text-2xl md:text-3xl font-bold text-moss mt-1">
              <Counter value={28} />
            </span>
            <span className="font-body text-ink/70 text-xs mt-0.5">
              Countries Replaced Plastic
            </span>
          </div>

          <div className="flex flex-col py-2 border-l border-clay/20 pl-4 lg:pl-6">
            <span className="font-mono text-[9px] text-clay uppercase tracking-widest">ledger // loyalty</span>
            <span className="font-display text-2xl md:text-3xl font-bold text-moss mt-1">
              <Counter value={99} suffix=".6%" duration={1.5} />
            </span>
            <span className="font-body text-ink/70 text-xs mt-0.5">
              Partnership Loyalty
            </span>
          </div>

        </div>
      </div>

    </section>
  );
}



