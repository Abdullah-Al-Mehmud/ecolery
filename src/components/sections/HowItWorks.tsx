"use client";

import { motion } from "framer-motion";
import { Hammer, Coffee, Apple, Leaf, Compass } from "lucide-react";

interface Step {
  phase: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  illustration: React.ReactNode;
}

const STEPS: Step[] = [
  {
    phase: "Phase 01",
    title: "Eco-Tech Manufacturing",
    description: "Reclaimed cork bark and agricultural grain husks are collected. We press and heat-bind them using water vapor, molding the fibers without toxic adhesives or plastics.",
    icon: <Hammer className="w-5 h-5" />,
    illustration: (
      <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 text-cork">
        {/* Mold Pressing Graphic */}
        <path d="M20 20 H80 V30 H20 Z" stroke="currentColor" strokeWidth="2" />
        <path d="M30 30 L35 70 H65 L70 30 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
        {/* Pressure indicators */}
        <path d="M50 10 V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M45 15 L50 18 L55 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    )
  },
  {
    phase: "Phase 02",
    title: "Premium Use",
    description: "Serve hot or cold drinks up to 90°C. The natural waterproofing properties of cork keep the cup perfectly sturdy, insulated, and dry for over 45 minutes of sipping.",
    icon: <Coffee className="w-5 h-5" />,
    illustration: (
      <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 text-moss">
        {/* Pouring/Drinking Graphic */}
        <path d="M30 30 H70 L64 80 H36 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
        <path d="M70 40 H76 C80 40 82 43 82 47 V53 C82 57 80 60 76 60 H68" stroke="currentColor" strokeWidth="2" />
        <path d="M40 10 C45 20 35 25 50 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        <path d="M50 8 Q55 18 45 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </svg>
    )
  },
  {
    phase: "Phase 03",
    title: "Edible Snack",
    description: "After drinking, bite right in. Our cups are baked to have a light, cracker-like crunch. They are high-fiber, vegan, sugar-free, and come in toasted oats or cacao flavors.",
    icon: <Apple className="w-5 h-5" />,
    illustration: (
      <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 text-rust">
        {/* Bitten Cup Graphic */}
        <path d="M30 30 H70 L64 80 H36 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
        {/* Bite mark out of the top right */}
        <path d="M60 30 C60 30 63 20 70 25 C75 30 70 38 70 38" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Crunch stars */}
        <path d="M75 15 L78 20 L83 18 L80 23 L84 27 L79 28" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    phase: "Phase 04",
    title: "Nutrient Compost",
    description: "Don't want to eat it? Simply toss it into the compost or directly onto soil. The cup breaks down naturally in 30 days, feeding plants and enriching local biodiversity.",
    icon: <Leaf className="w-5 h-5" />,
    illustration: (
      <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 text-moss-light">
        {/* Sprouting compost */}
        <path d="M20 80 Q50 65 80 80" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M50 72 V50" stroke="currentColor" strokeWidth="2" />
        {/* Sprouting leaf */}
        <path d="M50 50 Q58 42 58 50 Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
        <path d="M50 56 Q42 48 42 56 Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
        {/* Rain particles */}
        <line x1="35" y1="20" x2="33" y2="30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <line x1="50" y1="15" x2="48" y2="25" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <line x1="65" y1="20" x2="63" y2="30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
    )
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-cream-2 px-6 relative overflow-hidden">
      {/* Background organic waves */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] text-stone-300/20 pointer-events-none select-none">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
          <path d="M40,-53C54.3,-46.8,69.9,-37.6,76.5,-23.7C83.2,-9.9,80.9,8.7,73.5,23.8C66.1,38.9,53.6,50.6,39.3,58C25,65.4,8.8,68.5,-7.4,67C-23.7,65.6,-40,59.6,-51.7,48.7C-63.5,37.8,-70.7,21.9,-71.7,5.7C-72.7,-10.5,-67.5,-27,-57.3,-36C-47,-45,-31.6,-46.6,-18.2,-53.4C-4.8,-60.1,6.5,-72,18.4,-72C30.3,-72,40.1,-60.1,40,-53Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
            the product lifecycle
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-tight font-medium">
            From the branch to the cup, <br />
            <span className="text-moss italic font-normal">back to the earth.</span>
          </h2>
          <p className="text-ink/75 text-base md:text-lg leading-relaxed mt-6">
            We close the loop entirely. Ecolery products follow a zero-waste loop. Our packaging does not end in land reclamation or ocean dumps—it returns to natural organic cycle.
          </p>
        </div>

        {/* Step Cards with Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-cream p-8 rounded-[2rem] border border-stone-300/30 flex flex-col justify-between items-start relative group shadow-sm hover:shadow-md transition-all duration-300"
            >
              
              {/* Upper Header */}
              <div className="w-full">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-body text-ink/40 text-xs font-semibold uppercase tracking-wider">
                    {step.phase}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-cream-2 flex items-center justify-center text-moss group-hover:scale-110 transition-transform duration-350">
                    {step.icon}
                  </div>
                </div>

                <div className="h-32 flex items-center justify-center mb-6 border-b border-stone-200/50 pb-6 w-full">
                  {step.illustration}
                </div>
              </div>

              {/* Title & Desc */}
              <div>
                <h3 className="font-display text-lg md:text-xl font-bold text-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-ink/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting arrow indicators on larger screens */}
              {idx < 3 && (
                <div className="hidden lg:block absolute top-[50%] right-[-18px] translate-y-[-50%] z-20 pointer-events-none">
                  <svg width="12" height="24" viewBox="0 0 12 24" fill="none" className="text-stone-300 animate-pulse">
                    <path d="M2 2 L10 12 L2 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

            </motion.div>
          ))}
          
        </div>

        {/* Informative Cradle-to-Cradle Summary */}
        <div className="mt-16 bg-cream border border-stone-300/30 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-moss/10 flex items-center justify-center text-moss shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-base text-ink">
                Circular Cradle-to-Cradle Loop
              </h4>
              <p className="text-xs md:text-sm text-ink/65">
                Our materials are 100% renewable, certified pesticide-free, and leave no carbon or toxic trace.
              </p>
            </div>
          </div>
          <a
            href="#journey"
            className="bg-rust text-cream hover:bg-rust/95 rounded-full px-6 py-3 text-xs md:text-sm font-medium transition-colors shrink-0 text-center w-full sm:w-auto"
          >
            Trace Our Materials
          </a>
        </div>

      </div>
    </section>
  );
}
