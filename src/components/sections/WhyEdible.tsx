"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Calendar, RefreshCw } from "lucide-react";

interface CompareStage {
  label: string;
  plasticTitle: string;
  plasticDesc: string;
  plasticClass: string;
  edibleTitle: string;
  edibleDesc: string;
  edibleClass: string;
  bgFilter: string;
}

const STAGES: CompareStage[] = [
  {
    label: "Day 1: Disposal",
    plasticTitle: "Discarded Plastic Cup",
    plasticDesc: "Enters the waste stream. It will sit in a landfill, get burned releasing toxins, or end up floating in our oceans.",
    plasticClass: "opacity-100 scale-100",
    edibleTitle: "Ecolery Edible Cup",
    edibleDesc: "Enjoyed with a hot espresso, then either eaten as a nutritious cereal snack or thrown onto the soil.",
    edibleClass: "opacity-100 scale-100 rotate-0",
    bgFilter: "bg-moss/5",
  },
  {
    label: "Day 10: The Return",
    plasticTitle: "Intact & Unchanged",
    plasticDesc: "Sunlight and rain have zero effect. The molecular bond of petroleum remains completely unbreakable.",
    plasticClass: "opacity-100 scale-100",
    edibleTitle: "Organic Softening",
    edibleDesc: "If discarded in nature, water begins breaking down the cork and plant fibers, returning natural nutrients to the topsoil.",
    edibleClass: "opacity-85 scale-95 rotate-3 blur-[0.5px]",
    bgFilter: "bg-cork/5",
  },
  {
    label: "Day 20: Bio-Absorption",
    plasticTitle: "Fragmenting (Microplastics)",
    plasticDesc: "Breaks into smaller, sharp micro-fragments. These attract toxins and easily enter the marine food chain.",
    plasticClass: "opacity-95 scale-98 translate-y-1 rotate-1 text-red-800",
    edibleTitle: "Nutritious Composting",
    edibleDesc: "Fungi and earthworms consume the remaining cellulose fibers. The cup is now 80% natural rich soil compost.",
    edibleClass: "opacity-50 scale-75 rotate-6 blur-[1.5px]",
    bgFilter: "bg-rust/5",
  },
  {
    label: "Day 30+: Life Cycle Complete",
    plasticTitle: "Toxic Heritage (500 Years)",
    plasticDesc: "Will outlive your grandchildren. Releases synthetic pollutants that poison the local water table forever.",
    plasticClass: "opacity-90 scale-95 border-red-500/20",
    edibleTitle: "Sprouting New Life",
    edibleDesc: "The cup has fully returned to the earth. Reclaimed seeds embedded in the cork begin to sprout green leaves.",
    edibleClass: "opacity-20 scale-50 rotate-12 blur-[3px]",
    bgFilter: "bg-moss-light/5",
  },
];

export function WhyEdible() {
  const [stageIndex, setStageIndex] = useState(0);
  const currentStage = STAGES[stageIndex];

  return (
    <section id="process" className="py-24 md:py-32 bg-cream-2/40 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7">
            <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
              the plastic paradox
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-tight font-medium">
              We design packaging that behaves like <span className="text-moss italic font-normal">fruit.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink/75 text-base md:text-lg leading-relaxed max-w-md">
              Over 500 billion single-use plastic cups are consumed annually. We asked: what if your cup was made of natural plant matter and could disappear as quickly as an apple core?
            </p>
          </div>
        </div>

        {/* Asymmetrical Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel: Info & Controls */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-cream p-8 md:p-12 rounded-[2rem] border border-stone-300/40 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-3xl text-ink font-semibold mb-6">
                Decomposition Timeline
              </h3>
              <p className="text-ink/65 text-sm md:text-base leading-relaxed mb-8">
                Drag the slider or click the stages to see how petroleum plastics lock away waste for centuries, while Ecolery tableware cycles seamlessly back into the biosphere.
              </p>

              {/* Range Slider */}
              <div className="mb-10">
                <div className="flex justify-between text-xs font-semibold text-ink/40 uppercase tracking-wider mb-3">
                  <span>Day 1</span>
                  <span>Day 10</span>
                  <span>Day 20</span>
                  <span>Day 30+</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="3"
                  value={stageIndex}
                  onChange={(e) => setStageIndex(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-moss focus:outline-none"
                  aria-label="Decomposition timeline slider"
                />
              </div>

              {/* Stage Buttons */}
              <div className="grid grid-cols-2 gap-3">
                {STAGES.map((stage, idx) => (
                  <button
                    key={stage.label}
                    onClick={() => setStageIndex(idx)}
                    className={`py-3 px-4 rounded-xl text-xs md:text-sm font-medium border transition-all ${
                      stageIndex === idx
                        ? "bg-moss text-cream border-moss shadow-sm"
                        : "bg-cream-2 text-ink/75 border-stone-300/40 hover:bg-stone-100"
                    }`}
                  >
                    {stage.label.split(":")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Micro-insight bottom badge */}
            <div className="mt-8 border-t border-stone-200/50 pt-6 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-rust shrink-0 mt-0.5" />
              <p className="text-xs text-ink/60 leading-relaxed">
                <strong>Did you know?</strong> Reclaimed cork is naturally antimicrobial and acts as a organic fertilizer once broken down in garden soil.
              </p>
            </div>
          </div>

          {/* Right panel: Side-by-Side Visual Comparison */}
          <div className={`lg:col-span-7 rounded-[2rem] border border-stone-300/40 p-8 md:p-12 transition-colors duration-750 overflow-hidden flex flex-col justify-between ${currentStage.bgFilter}`}>
            
            <div className="flex justify-between items-center mb-8 border-b border-stone-300/20 pb-4">
              <span className="font-display font-medium text-lg md:text-xl text-ink">
                {currentStage.label}
              </span>
              <span className="text-xs text-ink/50 flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "8s" }} />
                Circular Comparison
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-6">
              
              {/* Plastic Column */}
              <div className="flex flex-col items-center text-center p-6 bg-cream/40 rounded-2xl border border-red-950/5 relative overflow-hidden group">
                <div className="absolute top-3 left-3 bg-red-100 text-red-800 text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full">
                  Petroleum Plastic
                </div>
                
                {/* Visual Representation of Plastic Cup */}
                <div className="h-44 flex items-center justify-center mb-6">
                  <div className={`w-28 h-36 bg-sky-200/40 rounded-b-3xl rounded-t-lg border-2 border-sky-300/40 relative shadow-inner transition-all duration-700 ${currentStage.plasticClass}`}>
                    {/* Ripple Lines */}
                    <div className="absolute top-6 left-0 right-0 h-0.5 bg-sky-300/20" />
                    <div className="absolute top-12 left-0 right-0 h-0.5 bg-sky-300/20" />
                    <div className="absolute top-18 left-0 right-0 h-0.5 bg-sky-300/20" />
                    {/* Garbage indicators at final stages */}
                    {stageIndex >= 2 && (
                      <div className="absolute inset-0 flex flex-wrap gap-1 p-3 items-center justify-center opacity-65">
                        <span className="w-2 h-2 rounded-full bg-red-600/60" />
                        <span className="w-3 h-1 rounded bg-red-500/50" />
                        <span className="w-1.5 h-3 rounded bg-red-700/60" />
                      </div>
                    )}
                  </div>
                </div>

                <h4 className="font-display font-semibold text-lg text-ink mb-2">
                  {currentStage.plasticTitle}
                </h4>
                <p className="text-xs text-ink/70 leading-relaxed min-h-[64px]">
                  {currentStage.plasticDesc}
                </p>
              </div>

              {/* Edible/Compostable Column */}
              <div className="flex flex-col items-center text-center p-6 bg-moss/5 rounded-2xl border border-moss/10 relative overflow-hidden group">
                <div className="absolute top-3 left-3 bg-moss text-cream text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full">
                  Ecolery Organic
                </div>

                {/* Visual Representation of Edible Cup */}
                <div className="h-44 flex items-center justify-center mb-6">
                  <div className={`w-28 h-36 bg-cork/85 rounded-b-3xl rounded-t-lg border border-cork-dark relative shadow-md transition-all duration-700 ${currentStage.edibleClass}`}>
                    {/* Coffee stains / Organic texture */}
                    <div className="absolute inset-0 bg-stone-900/10 opacity-30 rounded-b-3xl rounded-t-lg" style={{ backgroundImage: "radial-gradient(#232017 10%, transparent 11%)", backgroundSize: "6px 6px" }} />
                    
                    {/* Cup degradation visual elements */}
                    {stageIndex === 1 && (
                      <div className="absolute -bottom-2 -left-2 -right-2 h-10 bg-moss/20 rounded-full blur-md" />
                    )}
                    {stageIndex === 2 && (
                      <div className="absolute inset-0 bg-moss/10 flex items-center justify-center">
                        <span className="w-4 h-4 text-moss-light"><Calendar className="w-full h-full" /></span>
                      </div>
                    )}
                    {stageIndex === 3 && (
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                        {/* A tiny growing seedling */}
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                          className="w-1.5 h-8 bg-moss-light rounded-full relative"
                        >
                          <div className="absolute -top-1 -left-2.5 w-3 h-2 bg-moss rounded-full rotate-[-30deg]" />
                          <div className="absolute top-1 -right-2.5 w-3 h-2 bg-moss rounded-full rotate-[30deg]" />
                        </motion.div>
                      </div>
                    )}
                  </div>
                </div>

                <h4 className="font-display font-semibold text-lg text-moss mb-2">
                  {currentStage.edibleTitle}
                </h4>
                <p className="text-xs text-ink/70 leading-relaxed min-h-[64px]">
                  {currentStage.edibleDesc}
                </p>
              </div>

            </div>

            <div className="text-center text-[11px] text-ink/40 font-mono mt-4">
              *Ecolery edible products leave exactly 0% microplastics, 0% chemicals, and 100% natural compost.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
