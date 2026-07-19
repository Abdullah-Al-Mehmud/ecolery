"use client";

import { motion } from "framer-motion";
import { Leaf, Award, Sprout, Tractor } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const TIMELINE: Milestone[] = [
  {
    year: "2021",
    title: "Founding in Denmark",
    description: "Ecolery was born in a food science lab in Copenhagen, exploring agricultural residues as clean binders.",
  },
  {
    year: "2022",
    title: "Vapor-Pressing Patent",
    description: "Perfected and patented a clean thermal steam molding technique, eliminating the need for petroleum or chemical resins.",
  },
  {
    year: "2023",
    title: "FDA & EU Approvals",
    description: "Obtained official certifications proving our pressed cork tableware is 100% food safe and chemically inert.",
  },
  {
    year: "2024",
    title: "First Million Replaced",
    description: "Replaced one million single-use plastic cups across Nordic café partnerships, saving tons of landfill waste.",
  },
  {
    year: "2026",
    title: "Serving 28 Countries",
    description: "Now exporting custom-branded circular tableware to cafés, hotels, events, and transit fleets globally.",
  }
];

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initial: string;
}

const TEAM: TeamMember[] = [
  {
    name: "Dr. Amelia Vance",
    role: "Chief Food Scientist & Co-Founder",
    bio: "Over 12 years researching polymer structures and natural cellulose bindings. Formulated our seaweed-starch wrap matrix.",
    initial: "A",
  },
  {
    name: "Nils Lindqvist",
    role: "Chief Creative Director",
    bio: "Passionate about Scandinavian minimalism and tactile packaging. Ensures every item is beautiful to hold and look at.",
    initial: "N",
  },
  {
    name: "Sofia Diaz",
    role: "Director of Sourcing",
    bio: "Coordinates sustainable forestry and grain husks collection networks across southern Europe and North Africa.",
    initial: "S",
  }
];

export default function AboutPage() {
  return (
    <main className="py-20 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Title & Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 max-w-4xl"
        >
          <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-6">
            our story & purpose
          </span>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] text-ink tracking-tight">
            Replacing waste <br />
            <span className="text-moss font-light italic">with biological loops.</span>
          </h1>
        </motion.div>

        {/* Section 1: Editorial Asymmetric Splicing (manifesto) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32 md:mb-48 relative">
          
          {/* Custom Botanical Line Drawing behind column */}
          <div className="absolute right-[50%] top-[-20%] w-[400px] h-[400px] text-moss/5 pointer-events-none select-none hidden lg:block">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
              <path d="M50 0 C50 30 20 50 10 90" strokeLinecap="round" />
              <path d="M50 30 C70 50 80 70 90 90" strokeLinecap="round" />
              <path d="M35 40 Q20 20 10 35 Q25 45 35 40 Z" fill="currentColor" opacity="0.3" />
            </svg>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
              A manifesto against single-use plastics and hidden coatings.
            </h2>
            <p className="text-ink/80 text-sm md:text-base leading-relaxed max-w-2xl">
              Every day, hundreds of millions of plastic coffee cups are tossed away. Even paper cups are lined with polyethylene synthetic films that take decades to decompose, making them virtually impossible to recycle. 
            </p>
            <p className="text-ink/80 text-sm md:text-base leading-relaxed max-w-2xl">
              We founded Ecolery to offer a clean alternative. We did not want to design another container that sits in landfills or floats in the oceans. We set out to design tableware that behaves like fruit—composed entirely of natural plant matter, built to hold your hot beverages, and designed to quietly disappear into garden topsoil.
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream-2/70 border border-stone-300/40 rounded-[3rem_1rem_4rem_2rem] p-8 md:p-12 shadow-sm relative">
            <Leaf className="w-8 h-8 text-rust mb-6" />
            <h3 className="font-display text-xl font-medium text-ink italic leading-relaxed mb-6">
              &ldquo;We harvest agricultural sub-products to shape premium containers that enrich local soil systems instead of poisoning landfills.&rdquo;
            </h3>
            <span className="text-xs uppercase tracking-widest font-mono text-clay">
              [ THE ECOLERY LAB PHILOSOPHY ]
            </span>
          </div>

        </div>

        {/* Section 2: Mission & Vision (Custom overlapping geometry) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-32 md:mb-48">
          
          <div className="lg:col-span-7 bg-moss text-cream rounded-[3.5rem_2rem_3.5rem_2rem] p-10 md:p-16 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-stone-900/10 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 6%, transparent 7%)", backgroundSize: "12px 12px" }} />
            <div className="relative z-10">
              <span className="text-[10px] font-mono uppercase bg-cream/10 px-3.5 py-1.5 rounded-full text-cream-2">Our Mission</span>
              <h3 className="font-display text-3xl md:text-4xl font-bold mt-8 mb-6 leading-tight">
                To eliminate packaging waste from the global hospitality sector by creating functional, edible tableware.
              </h3>
            </div>
            <p className="text-cream-2/80 text-sm md:text-base leading-relaxed relative z-10 max-w-xl">
              By harnessing local materials, agricultural husks, and high-pressure steam, we supply hotels, events, and cafes with zero-waste tableware that doesn&rsquo;t compromise on durability or luxury.
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream-2 border border-stone-300/30 rounded-[2rem_3rem_1.5rem_4rem] p-10 md:p-16 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase bg-moss/5 text-moss px-3.5 py-1.5 rounded-full font-semibold">Our Vision</span>
              <h3 className="font-display text-3xl font-bold mt-8 mb-6 text-ink leading-tight">
                A world where convenience does not write geologic history.
              </h3>
            </div>
            <p className="text-ink/75 text-sm leading-relaxed max-w-sm">
              We envision a fully circular economy where transit, dining, and retail packaging cycles back into agricultural compost. The coffee cup you buy today feeds the wildflowers in your garden next month.
            </p>
          </div>

        </div>

        {/* Section 3: Sourcing & Process Blueprint */}
        <div className="mb-32 md:mb-48">
          <div className="max-w-3xl mb-20">
            <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
              how we source
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-tight">
              Sustainably harvested, <br />
              <span className="text-moss font-light italic">synthesized without chemicals.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream-2/30 border border-stone-300/30 rounded-[2.5rem_1rem_2.5rem_1rem] p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-moss/5 text-moss flex items-center justify-center mb-6"><Tractor className="w-6 h-6" /></div>
              <h3 className="font-display font-bold text-xl text-ink mb-3">Reclaimed Cork Bark</h3>
              <p className="text-ink/75 text-xs md:text-sm leading-relaxed">
                Our raw cork is stripped from living trees in Portugal. Bark harvesting does not harm the oak trees, instead stimulating them to regenerate and absorb 3-5x more atmospheric carbon.
              </p>
            </div>
            <div className="bg-cream-2/30 border border-stone-300/30 rounded-[1rem_2.5rem_1rem_2.5rem] p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-cork/10 flex items-center justify-center text-cork-dark mb-6"><Sprout className="w-6 h-6" /></div>
              <h3 className="font-display font-bold text-xl text-ink mb-3">Agricultural Husks</h3>
              <p className="text-ink/75 text-xs md:text-sm leading-relaxed">
                We collect wheat husks, sugarcane fibers, and oat byproduct residues left over from agricultural processing, giving brand new utility to elements that would otherwise be discarded.
              </p>
            </div>
            <div className="bg-cream-2/30 border border-stone-300/30 rounded-[2.5rem_1rem_2.5rem_1rem] p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-rust/5 text-rust flex items-center justify-center mb-6"><Award className="w-6 h-6" /></div>
              <h3 className="font-display font-bold text-xl text-ink mb-3">Vapor-Thermal Pressing</h3>
              <p className="text-ink/75 text-xs md:text-sm leading-relaxed">
                No synthetic binders or glues are added to the molding mix. High-pressure steam activates the natural bonding properties of plant cellulose, heat-sealing the fibers together.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Vertical Timeline with Alternate Staggering */}
        <div className="mb-32 md:mb-48 relative">
          
          <div className="max-w-3xl mb-20 text-center mx-auto">
            <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
              evolution timeline
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink leading-tight">
              Tracing Our Milestones
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto py-12">
            
            {/* Timeline Center Line */}
            <div className="absolute left-[16px] md:left-1/2 top-0 bottom-0 w-0.5 bg-stone-300/80 -translate-x-1/2" />

            {/* Timeline Milestones */}
            <div className="space-y-16">
              {TIMELINE.map((item, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <div key={item.year} className="relative flex flex-col md:flex-row items-start justify-between w-full group">
                    
                    {/* Circle Node on Timeline Line */}
                    <div className="absolute left-[16px] md:left-1/2 w-8 h-8 rounded-full border-2 border-stone-300 bg-cream flex items-center justify-center text-moss -translate-x-1/2 z-20 group-hover:border-moss transition-colors">
                      <Sprout className="w-4 h-4" />
                    </div>

                    {/* Timeline Block Container */}
                    <div className="w-full md:w-[45%] pl-10 md:pl-0">
                      <div className={`flex flex-col ${isEven ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
                        <span className="font-display text-4xl font-extrabold text-moss/30 group-hover:text-moss transition-colors">
                          {item.year}
                        </span>
                        <h3 className="font-display font-bold text-lg text-ink mt-2 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-ink/75 text-xs md:text-sm leading-relaxed max-w-md">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Empty block on the opposite side to balance grid on desktop */}
                    <div className="hidden md:block w-[45%]" />

                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Section 5: Team Grid */}
        <div className="mb-32">
          <div className="max-w-2xl mb-16">
            <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
              the minds behind the loop
            </span>
            <h2 className="font-display text-4xl font-bold text-ink leading-tight">
              Minds dedicated to circular food science
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-cream-2/45 border border-stone-300/35 rounded-[2.5rem_1rem_2.5rem_1rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-full bg-moss text-cream flex items-center justify-center font-display font-bold text-lg mb-6 shadow-sm">
                    {member.initial}
                  </div>
                  <h3 className="font-display font-bold text-xl text-ink">
                    {member.name}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-moss font-semibold mb-4 block">
                    {member.role}
                  </span>
                  <p className="text-ink/75 text-xs md:text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6: CTA Block */}
        <div className="bg-moss text-cream rounded-[3.5rem_2rem_4rem_2rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-moss-light/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-stone-900/10 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 6%, transparent 7%)", backgroundSize: "12px 12px" }} />
          <div className="max-w-2xl relative z-10">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Join Ecolery as a sustainability partner
            </h3>
            <p className="text-cream-2/80 text-xs md:text-sm leading-relaxed">
              We collaborate with specialty café groups, hotel chains, airline operators, and zero-waste events. Access custom logo-embossed tableware, batch pricing, and materials tracing documentation.
            </p>
          </div>
          <a
            href="/contact"
            className="bg-rust text-cream hover:bg-rust/95 font-semibold px-8 py-4 rounded-full text-xs md:text-sm transition-all hover:scale-[1.02] shrink-0 w-full lg:w-auto text-center shadow-md relative z-10"
          >
            Connect With Sourcing Team
          </a>
        </div>

      </div>
    </main>
  );
}
