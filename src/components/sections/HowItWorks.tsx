"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Compass } from "lucide-react";
import Link from "next/link";

interface Step {
  phaseLabel: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const STEPS: Step[] = [
  {
    phaseLabel: "01 / HARVEST & FORM",
    title: "Eco-Tech Manufacturing",
    subtitle: "Molding raw agricultural fibers using clean energy.",
    description: "Reclaimed cork bark and agricultural grain husks are collected. We press and heat-bind them using water vapor, molding the fibers without toxic adhesives, binders, or synthetic plastics.",
    image: "/how_it_works_phase_01.png"
  },
  {
    phaseLabel: "02 / THERMAL USE",
    title: "Premium Use",
    subtitle: "A durable barrier for specialty hot coffee.",
    description: "Serve hot or cold drinks up to 90°C. The natural waterproofing properties of cork keep the cup perfectly sturdy, insulated, and dry for over 45 minutes of sipping without structural breakdown.",
    image: "/how_it_works_phase_02.png"
  },
  {
    phaseLabel: "03 / CONSUMPTION",
    title: "Edible Snack",
    subtitle: "An organic cracker-like treat to enjoy after use.",
    description: "After drinking, bite right in. Our cups are baked to have a light, satisfying crunch. High-fiber, vegan, and sugar-free, they come in toasted oats or cocoa flavor variations.",
    image: "/how_it_works_phase_03.png"
  },
  {
    phaseLabel: "04 / SOIL RETURN",
    title: "Nutrient Compost",
    subtitle: "Returning carbon and minerals back to earth.",
    description: "Don't want to eat it? Simply toss it into your compost or directly onto soil. The cup decomposes naturally in 30 days, feeding plants and enriching local biodiversity.",
    image: "/how_it_works_phase_04.png"
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-44 bg-cream px-6 relative overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div aria-hidden className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-moss/5 blur-[120px]" />
        <div aria-hidden className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cork/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
          <div className="lg:col-span-7">
            <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
              the product lifecycle
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink font-bold leading-[1.05] tracking-tight">
              From the branch to the cup, <br />
              <span className="text-moss font-light italic">back to the earth.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink/75 text-sm md:text-base leading-relaxed max-w-md">
              We close the loop entirely. Ecolery products follow a zero-waste loop. Our packaging does not end in landfill waste or ocean debris—it returns to natural biological cycle.
            </p>
          </div>
        </div>

        {/* 12-Column Process Index Grid */}
        <div className="border-t border-[#E9E5DD]">
          
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.phaseLabel}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-[#E9E5DD] py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group"
            >
              {/* Left Column (Cols 1-3) - Monospace index */}
              <div className="lg:col-span-3 py-1">
                <span className="font-mono text-[9px] text-moss bg-moss/5 border border-moss/10 px-2.5 py-1 rounded-md tracking-[0.2em] uppercase font-bold leading-none inline-block">
                  {step.phaseLabel}
                </span>
              </div>

              {/* Middle Column (Cols 5-8) - Title and Narrative */}
              <div className="lg:col-span-5 lg:col-start-5">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="font-mono text-[9.5px] text-clay font-bold uppercase tracking-wider mb-4 leading-none">
                  {step.subtitle}
                </p>
                <p className="font-body text-xs md:text-sm text-ink/75 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Right Column (Cols 9-12) - Uniform Visual aspect-4:3 */}
              <div className="lg:col-span-4 lg:col-start-9 w-full">
                <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden border border-[#E9E5DD] bg-cream-2/30 shadow-sm group-hover:shadow transition-shadow duration-300">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    sizes="(max-w-md) 100vw, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom Material Transparency Link */}
        <div className="mt-20 border-t border-[#E9E5DD] pt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 select-none">
          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-moss shrink-0 stroke-[1.5]" />
            <div>
              <span className="font-mono text-[9px] font-bold text-clay uppercase tracking-[0.2em] block mb-0.5 leading-none">
                Label 05 // Transparency Register
              </span>
              <span className="font-body text-xs md:text-sm font-semibold text-ink">
                All Ecolery products are certified zero-waste.
              </span>
            </div>
          </div>
          <Link
            href="/sustainability"
            className="flex items-center gap-1.5 font-semibold text-xs text-moss hover:text-rust transition-colors group cursor-pointer"
          >
            <span>Trace Material Integrity</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
