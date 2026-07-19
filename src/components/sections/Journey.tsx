"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Recycle, Sprout, Tractor, UserCheck } from "lucide-react";

interface JourneyStep {
  id: string;
  stage: string;
  title: string;
  description: string;
  location: string;
  icon: React.ReactNode;
  svgVisual: React.ReactNode;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: "farm",
    stage: "01. The Farm",
    title: "Organic Sourcing",
    description: "Our cork is sustainably harvested from Mediterranean cork oaks (Quercus suber) in managed forests where trees are never cut down—only the bark is gently stripped every nine years, causing the trees to absorb 3-5x more CO₂.",
    location: "Alentejo, Portugal & Extremadura, Spain",
    icon: <Tractor className="w-5 h-5" />,
    svgVisual: (
      <svg viewBox="0 0 100 100" fill="none" className="w-64 h-64 text-moss">
        {/* Cork tree forest */}
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
        <path d="M50 85 V50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 60 Q38 45 42 35 Q50 30 50 50" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
        <path d="M50 55 Q62 42 58 32 Q50 30 50 48" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
        {/* Tree canopy */}
        <circle cx="50" cy="30" r="16" fill="currentColor" opacity="0.15" />
        <circle cx="50" cy="30" r="16" stroke="currentColor" strokeWidth="2" />
        {/* Bark stripping marks */}
        <line x1="48" y1="62" x2="48" y2="78" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="52" y1="64" x2="52" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    )
  },
  {
    id: "ingredients",
    stage: "02. Raw Materials",
    title: "Clean Ingredients",
    description: "Reclaimed oak barks are ground and blended with agricultural residues, plant starches, and flax fibers. We embed organic wildflower seed pods directly into the material matrix.",
    location: "Material Science Lab, Ecolery HQ",
    icon: <Sprout className="w-5 h-5" />,
    svgVisual: (
      <svg viewBox="0 0 100 100" fill="none" className="w-64 h-64 text-cork">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
        {/* Plant fibers / ingredients */}
        <path d="M30 45 Q40 50 50 35 Q60 20 70 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M25 65 Q45 55 55 70 Q65 85 75 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Seed particles */}
        <circle cx="35" cy="35" r="3" fill="currentColor" />
        <circle cx="65" cy="55" r="3.5" fill="currentColor" />
        <path d="M48 55 Q50 50 52 55 Q50 60 48 55 Z" fill="currentColor" />
      </svg>
    )
  },
  {
    id: "production",
    stage: "03. Compression",
    title: "Zero-Chemical Pressing",
    description: "No resins. No synthetic binders. The mixture is placed in custom metal molds and heat-bonded using clean, high-pressure steam, activating natural plant hemicellulose to lock fibers together.",
    location: "Green Assembly Facility, EU",
    icon: <Recycle className="w-5 h-5" />,
    svgVisual: (
      <svg viewBox="0 0 100 100" fill="none" className="w-64 h-64 text-rust">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
        {/* Press molds coming together */}
        <path d="M25 25 H75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M25 75 H75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M35 35 H65 L60 65 H40 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
        {/* Heat steam waves */}
        <path d="M28 50 Q30 40 32 50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <path d="M72 50 Q70 40 68 50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
    )
  },
  {
    id: "customer",
    stage: "04. Culinary Service",
    title: "Enjoyed Globally",
    description: "Shipped directly to forward-thinking cafes, eco-hotels, and green conferences. Used as a sturdy vessel for espresso, hot cocoa, or soups. Serves as a tactile talking point for customers.",
    location: "Over 8,000+ Eco Partner Locations",
    icon: <UserCheck className="w-5 h-5" />,
    svgVisual: (
      <svg viewBox="0 0 100 100" fill="none" className="w-64 h-64 text-moss-light">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
        {/* Coffee pouring into Ecolery cup */}
        <path d="M33 45 H67 L62 82 H38 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
        <path d="M48 15 V45" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
        <path d="M52 15 V45" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
        <circle cx="50" cy="46" r="2.5" fill="currentColor" />
        {/* Steam waves */}
        <path d="M38 32 Q42 22 40 18" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <path d="M62 32 Q58 22 60 18" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      </svg>
    )
  },
  {
    id: "nature",
    stage: "05. Composting",
    title: "Returning to Earth",
    description: "Once discarded, moisture, temperature, and soil microorganisms break down the natural plant binding bonds. The cup dissolves gracefully, returning mineral fibers back to soil layers.",
    location: "Home Garden or Organic Compost Bin",
    icon: <Recycle className="w-5 h-5" />,
    svgVisual: (
      <svg viewBox="0 0 100 100" fill="none" className="w-64 h-64 text-cork-dark">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
        {/* Cup collapsing in soil */}
        <path d="M35 75 Q40 68 50 68 Q60 68 65 75" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
        <path d="M38 78 C32 75 30 70 34 68 C38 66 45 68 45 68" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Worm/roots */}
        <path d="M20 85 Q35 78 40 85 Q45 92 65 85" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        {/* Rain drop */}
        <path d="M50 20 Q50 30 46 28 Q50 32 50 20" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      </svg>
    )
  },
  {
    id: "earth",
    stage: "06. Sprouting Life",
    title: "Plant Growth Cycle",
    description: "The embedded seed pods take root in the composted soil. Wildflowers, clover, or grass sprouts, absorbing CO₂ and producing oxygen, closing the cycle and starting the loop anew.",
    location: "Soil Ecosystem & Backyard Gardens",
    icon: <Sprout className="w-5 h-5" />,
    svgVisual: (
      <svg viewBox="0 0 100 100" fill="none" className="w-64 h-64 text-moss">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
        {/* Green sprouts from compost */}
        <path d="M15 85 Q50 78 85 85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M50 80 V55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M50 55 Q62 44 60 55" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
        <path d="M50 62 Q38 52 40 62" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
        <path d="M30 82 V68" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M30 68 Q36 60 35 68" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.1" />
        {/* Sun shine */}
        <circle cx="80" cy="25" r="6" stroke="currentColor" strokeWidth="1.5" />
        <line x1="80" y1="14" x2="80" y2="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="69" y1="25" x2="65" y2="25" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  }
];

export function Journey() {
  const [activeStep, setActiveStep] = useState(0);
  const scrollRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let currentActive = 0;
      scrollRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const absoluteTop = rect.top + window.scrollY;
          if (scrollPosition >= absoluteTop) {
            currentActive = index;
          }
        }
      });
      setActiveStep(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="journey" className="py-24 md:py-32 bg-cream-2/40 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Intro */}
        <div className="mb-20">
          <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
            our cradle-to-cradle loop
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-tight font-medium max-w-4xl">
            A journey from seed, <br />
            <span className="text-moss italic font-normal">back into the organic soil.</span>
          </h2>
        </div>

        {/* Sticky Visual Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Scrollable Story Panels (Left Column) */}
          <div className="lg:col-span-7 space-y-24 md:space-y-36">
            {JOURNEY_STEPS.map((step, idx) => (
              <div
                key={step.id}
                ref={(el) => {
                  if (el) scrollRefs.current[idx] = el;
                }}
                className={`transition-all duration-700 pt-6 border-t border-stone-300/40 flex flex-col justify-between min-h-[300px] ${
                  activeStep === idx ? "opacity-100 pl-4 md:pl-6 border-moss" : "opacity-35 pl-0"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-moss font-semibold">
                      {step.stage}
                    </span>
                    <div className={`p-1.5 rounded-full bg-cream ${activeStep === idx ? "text-moss scale-110" : "text-ink/35"} transition-all duration-350`}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-4">
                    {step.title}
                  </h3>
                  <p className="text-ink/80 text-sm md:text-base leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-ink/50 bg-cream/30 border border-stone-300/20 px-3.5 py-2 rounded-xl w-max">
                  <MapPin className="w-3.5 h-3.5 text-rust shrink-0" />
                  <span>{step.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Visual Stage (Right Column) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28 select-none">
            <div className="bg-cream rounded-[2.5rem] border border-stone-300/30 p-8 flex flex-col items-center justify-center min-h-[500px] shadow-sm relative overflow-hidden">
              {/* Radial gradient backing */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-200/20" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -15 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                >
                  <div className="mb-6">
                    {JOURNEY_STEPS[activeStep].svgVisual}
                  </div>
                  
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40 bg-stone-200/50 px-3.5 py-1 rounded-full">
                    Active Lifecycle Stage
                  </span>
                  
                  <h4 className="font-display font-bold text-lg text-ink mt-3">
                    {JOURNEY_STEPS[activeStep].title}
                  </h4>
                </motion.div>
              </AnimatePresence>

              {/* Progress counter indicators dots */}
              <div className="absolute bottom-6 flex gap-2">
                {JOURNEY_STEPS.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeStep === idx ? "bg-moss w-6" : "bg-stone-300"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
