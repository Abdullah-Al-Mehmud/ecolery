"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownLeft, Sparkles } from "lucide-react";

interface Metric {
  percentage: number;
  label: string;
  subLabel: string;
  description: string;
  strokeColor: string;
  metricIcon: string;
}

const METRICS: Metric[] = [
  {
    percentage: 92,
    label: "Landfill Reduction",
    subLabel: "92% less solid waste",
    description: "Replaces traditional single-use petroleum lining. Composts at home within 30 days.",
    strokeColor: "stroke-rust",
    metricIcon: "🗑️",
  },
  {
    percentage: 85,
    label: "Carbon Offset",
    subLabel: "85% fewer greenhouse emissions",
    description: "Harvesting local cork bark and wheat husk byproduct lowers freight and production energy.",
    strokeColor: "stroke-moss",
    metricIcon: "🌱",
  },
  {
    percentage: 70,
    label: "Water Conservation",
    subLabel: "70% water savings",
    description: "Unlike paper manufacture, which requires chemical washing and bleach, our thermal press process uses minimal moisture.",
    strokeColor: "stroke-cork",
    metricIcon: "💧",
  },
  {
    percentage: 100,
    label: "Circular Integrity",
    subLabel: "100% bio-restorative",
    description: "Every scrap of material returns to earth as biological feedstock, closing the loop completely.",
    strokeColor: "stroke-moss-light",
    metricIcon: "🔄",
  },
];

export function Impact() {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-cream px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[40%] left-[-15%] w-[600px] h-[600px] text-cork/5 pointer-events-none select-none blur-3xl rounded-full bg-cork/10" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] text-moss/5 pointer-events-none select-none blur-3xl rounded-full bg-moss/10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-8">
            <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
              environmental metrics
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-tight font-medium">
              Measurable impact, <br />
              <span className="text-rust italic font-normal">transparent responsibility.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-ink/75 text-sm md:text-base leading-relaxed max-w-sm">
              We track our carbon, water, and waste cycles from soil to kitchen, validating that every product represents a net-positive environmental gain.
            </p>
          </div>
        </div>

        {/* Circular Progress Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICS.map((metric, idx) => {
            const radius = 50;
            const strokeWidth = 8;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = inView
              ? circumference - (metric.percentage / 100) * circumference
              : circumference;

            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="bg-cream-2/50 border border-stone-300/30 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 hover:bg-cream-2/80 relative group"
              >
                {/* SVG Circular Progress Bar */}
                <div className="relative w-36 h-36 flex items-center justify-center mb-6">
                  <svg className="w-full h-full transform -rotate-90">
                    {/* Background track circle */}
                    <circle
                      cx="72"
                      cy="72"
                      r={radius}
                      className="stroke-stone-200"
                      strokeWidth={strokeWidth}
                      fill="transparent"
                    />
                    {/* Animated progress circle */}
                    <circle
                      cx="72"
                      cy="72"
                      r={radius}
                      className={`transition-all duration-[1.5s] ease-out ${metric.strokeColor}`}
                      strokeWidth={strokeWidth}
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Centered Percentage and Emoji */}
                  <div className="absolute flex flex-col items-center">
                    <span className="text-[11px] text-ink/40 uppercase tracking-widest font-mono">
                      {metric.metricIcon}
                    </span>
                    <span className="font-display text-2xl font-bold text-ink mt-0.5">
                      {metric.percentage}%
                    </span>
                  </div>
                </div>

                {/* Metric Copy */}
                <h3 className="font-display font-semibold text-lg text-ink mb-1">
                  {metric.label}
                </h3>
                <span className="text-xs text-moss font-semibold uppercase tracking-wider mb-3 block">
                  {metric.subLabel}
                </span>
                <p className="text-xs md:text-sm text-ink/70 leading-relaxed">
                  {metric.description}
                </p>
                
                {/* Decorative border element */}
                <div className="absolute top-4 right-4 text-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowDownLeft className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Circular Economy Visualization Panel */}
        <div className="mt-16 bg-moss text-cream rounded-[2.5rem] p-8 md:p-12 border border-moss-light/35 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative">
          
          {/* Subtle overlay texture */}
          <div className="absolute inset-0 bg-stone-900/10 opacity-30" style={{ backgroundImage: "radial-gradient(#ffffff 6%, transparent 7%)", backgroundSize: "10px 10px" }} />

          <div className="max-w-2xl relative z-10">
            <div className="flex items-center gap-2 mb-4 bg-cream/10 px-3.5 py-1.5 rounded-full w-max text-cream-2 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-rust animate-bounce" />
              closed loop technology
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
              Restoring the Earth, one coffee cup at a time.
            </h3>
            <p className="text-cream/80 text-sm md:text-base leading-relaxed">
              Standard bioplastics (PLA) require industrial composting facilities reaching 60°C to break down, taking years in typical backyard soil. Ecolery requires zero infrastructure. It decomposes anywhere water and microbes exist, returning vital minerals to local micro-ecology.
            </p>
          </div>

          <div className="relative z-10 w-full lg:w-[320px] shrink-0 border border-cream/20 bg-cream/5 backdrop-blur-md rounded-3xl p-6 md:p-8">
            <h4 className="font-display font-medium text-lg text-cream mb-4">
              Soil-to-Soil Checklist
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rust text-cream flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</div>
                <div className="text-xs text-cream/95">Zero microplastics left in soils.</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rust text-cream flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</div>
                <div className="text-xs text-cream/95">Chemical-free thermal bonding.</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rust text-cream flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</div>
                <div className="text-xs text-cream/95">Natural mineral restoration (nitrogen-rich).</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
