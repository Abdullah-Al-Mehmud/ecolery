"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

interface Metric {
  percentage: number;
  label: string;
  subLabel: string;
  description: string;
  metricIcon: string;
}

const METRICS_LIST: Metric[] = [
  {
    percentage: 92,
    label: "Solid Waste Prevention",
    subLabel: "92% less solid landfill footprint",
    description: "Replaces traditional single-use petroleum lining. Composts at home within 30 days.",
    metricIcon: "🗑️",
  },
  {
    percentage: 85,
    label: "Atmospheric Carbon Offset",
    subLabel: "85% fewer greenhouse emissions",
    description: "Harvesting local cork bark and wheat husk byproduct lowers freight and production energy.",
    metricIcon: "🌱",
  },
  {
    percentage: 70,
    label: "Aquatic Conservation",
    subLabel: "70% water savings in processing",
    description: "Unlike paper manufacture, which requires chemical washing, our press process uses minimal moisture.",
    metricIcon: "💧",
  },
  {
    percentage: 100,
    label: "Cradle-to-Cradle Integrity",
    subLabel: "100% organic return",
    description: "Every scrap of material returns to earth as biological feedstock, closing the loop completely.",
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
    <section ref={containerRef} className="py-20 md:py-32 bg-cream px-6 relative overflow-hidden">
      
      {/* Organic background light */}
      <div className="absolute top-[30%] left-[-15%] w-[600px] h-[600px] rounded-full bg-cork/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-moss/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-8">
            <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
              environmental metrics
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-tight">
              Measurable impact, <br />
              <span className="text-rust font-light italic">transparent responsibility.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-ink/75 text-sm md:text-base leading-relaxed max-w-sm">
              We track our carbon, water, and waste cycles from soil to kitchen, validating that every product represents a net-positive environmental gain.
            </p>
          </div>
        </div>

        {/* Asymmetrical Metric Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Giant SVG Circular Economy Dial (col-span-5) */}
          <div className="lg:col-span-5 bg-cream-2 border border-clay/30 rounded-[3rem_1rem_4rem_2rem] p-10 flex flex-col justify-between items-center shadow-sm relative overflow-hidden min-h-[420px]">
            <div className="absolute inset-0 bg-stone-900/5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#232017 6%, transparent 7%)", backgroundSize: "10px 10px" }} />
            
            <div className="w-full relative z-10 flex justify-between items-center border-b border-stone-300 pb-4 mb-4">
              <span className="font-mono text-[10px] text-clay uppercase tracking-widest font-bold">circular metric dial</span>
              <span className="text-[10px] font-mono text-ink/40">SYS // CR-98</span>
            </div>

            {/* Giant Circular Dial */}
            <div className="relative w-48 h-48 flex items-center justify-center my-6 z-10">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  className="stroke-stone-300"
                  strokeWidth="4"
                  fill="transparent"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  className="stroke-moss transition-all duration-[2s] ease-out"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 80}
                  strokeDashoffset={inView ? (2 * Math.PI * 80) * (1 - 0.984) : 2 * Math.PI * 80}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="font-display text-4xl font-extrabold text-ink">98.4</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-clay mt-1">ECOLERY INDEX</span>
              </div>
            </div>

            <div className="w-full relative z-10 border-t border-stone-300 pt-4 text-center">
              <p className="text-xs text-ink/65 leading-relaxed max-w-xs mx-auto">
                <strong>Ecolery Index</strong> evaluates sourcing renewal, clean thermal press energy, and absolute chemical absence.
              </p>
            </div>

          </div>

          {/* Right Column: Flat Technical Metrics List (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {METRICS_LIST.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-cream-2/30 border border-stone-300/30 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center shadow-inner shrink-0 text-lg">
                      {metric.metricIcon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-ink">{metric.label}</h3>
                      <p className="text-xs text-ink/70 leading-relaxed mt-1 max-w-md">{metric.description}</p>
                    </div>
                  </div>
                  
                  {/* Stats display */}
                  <div className="sm:text-right shrink-0 border-l sm:border-l-0 sm:border-t-0 pl-4 sm:pl-0 pt-2 sm:pt-0 border-stone-300/50 flex flex-col items-start sm:items-end">
                    <span className="font-display text-2xl font-black text-moss">{metric.percentage}%</span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-clay font-bold mt-0.5">{metric.subLabel.split(" ")[0]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Closed Loop Panel */}
        <div className="mt-16 bg-moss text-cream rounded-[3rem_1rem_4rem_2rem] p-8 md:p-16 border border-moss-light/35 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="absolute inset-0 bg-stone-900/10 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 6%, transparent 7%)", backgroundSize: "12px 12px" }} />

          <div className="max-w-2xl relative z-10">
            <div className="flex items-center gap-2 mb-4 bg-cream/10 px-3.5 py-1.5 rounded-full w-max text-cream-2 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-rust animate-bounce" />
              closed loop technology
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
              Restoring the Earth, one coffee cup at a time.
            </h3>
            <p className="text-cream-2/80 text-sm md:text-base leading-relaxed">
              Standard bioplastics (PLA) require industrial composting facilities reaching 60°C to break down, taking years in typical backyard soil. Ecolery requires zero infrastructure. It decomposes anywhere water and microbes exist, returning vital minerals to local micro-ecology.
            </p>
          </div>

          <div className="relative z-10 w-full lg:w-[320px] shrink-0 border border-cream/20 bg-cream/5 backdrop-blur-md rounded-3xl p-6 md:p-8">
            <h4 className="font-display font-medium text-lg text-cream mb-4">
              Soil-to-Soil Checklist
            </h4>
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rust text-cream flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✓</div>
                <div>Zero microplastics left in soils.</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rust text-cream flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✓</div>
                <div>Chemical-free thermal bonding.</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rust text-cream flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✓</div>
                <div>Natural mineral restoration (nitrogen-rich).</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
