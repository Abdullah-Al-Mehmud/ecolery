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
    <main className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-4xl"
        >
          <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
            our story & purpose
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-ink tracking-tight">
            Replacing waste <br />
            <span className="text-rust italic font-normal">with biological loops.</span>
          </h1>
        </motion.div>

        {/* Section 1: Our Story (Editorial split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start mb-24 md:mb-36">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-6">
              A manifesto against single-use plastics
            </h2>
            <p className="text-ink/80 text-sm md:text-base leading-relaxed mb-6">
              Every day, hundreds of millions of plastic coffee cups are tossed away. Even paper cups are lined with polyethylene synthetic films that take decades to decompose, making them virtually impossible to recycle. 
            </p>
            <p className="text-ink/80 text-sm md:text-base leading-relaxed">
              We founded Ecolery to offer a clean alternative. We did not want to design another container that sits in landfills or floats in the oceans. We set out to design tableware that behaves like fruit—composed entirely of natural plant matter, built to hold your hot beverages, and designed to quietly disappear into garden topsoil.
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream-2 border border-stone-300/30 rounded-[2rem] p-8 md:p-10 shadow-sm relative">
            <Leaf className="w-8 h-8 text-rust mb-6" />
            <h3 className="font-display text-lg font-bold text-ink italic leading-relaxed mb-4">
              &ldquo;We harvest agricultural sub-products to shape premium containers that enrich local soil systems instead of poisoning landfills.&rdquo;
            </h3>
            <span className="text-xs uppercase tracking-wider font-semibold text-moss">
              - The Ecolery Lab Philosophy
            </span>
          </div>
        </div>

        {/* Section 2: Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 md:mb-36">
          <div className="bg-moss text-cream rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-stone-900/5" style={{ backgroundImage: "radial-gradient(#ffffff 6%, transparent 7%)", backgroundSize: "10px 10px" }} />
            <div className="relative z-10">
              <span className="text-[10px] font-mono uppercase bg-cream/10 px-3 py-1 rounded-full text-cream-2">Our Mission</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold mt-6 mb-4">
                To eliminate packaging waste from the global hospitality sector by creating functional, edible tableware.
              </h3>
              <p className="text-cream-2/80 text-xs md:text-sm leading-relaxed">
                By harnessing local materials, agricultural husks, and high-pressure steam, we supply hotels, events, and cafes with zero-waste tableware that doesn&rsquo;t compromise on durability or luxury.
              </p>
            </div>
          </div>

          <div className="bg-cream-2 border border-stone-300/30 rounded-[2.5rem] p-8 md:p-12">
            <span className="text-[10px] font-mono uppercase bg-moss/5 text-moss px-3 py-1 rounded-full font-semibold">Our Vision</span>
            <h3 className="font-display text-2xl md:text-3xl font-bold mt-6 mb-4 text-ink">
              A world where human convenience does not create toxic geological layers.
            </h3>
            <p className="text-ink/75 text-xs md:text-sm leading-relaxed">
              We envision a fully circular economy where transit, dining, and retail packaging cycles back into agricultural compost. The coffee cup you buy today feeds the wildflowers in your garden next month.
            </p>
          </div>
        </div>

        {/* Section 3: Sourcing & Manufacturing Process */}
        <div className="mb-24 md:mb-36">
          <div className="max-w-3xl mb-16">
            <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
              how we source
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-tight">
              Sustainably harvested, <br />
              <span className="text-moss italic font-normal">synthesized without chemicals.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream border border-stone-300/30 rounded-3xl p-8 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-moss/10 flex items-center justify-center text-moss mb-6"><Tractor className="w-5 h-5" /></div>
              <h3 className="font-display font-semibold text-lg text-ink mb-3">Reclaimed Cork Bark</h3>
              <p className="text-ink/70 text-xs md:text-sm leading-relaxed">
                Our raw cork is stripped from living trees in Alentejo. Bark harvesting does not harm the oak trees, instead stimulating them to regenerate and absorb 3-5x more atmospheric carbon.
              </p>
            </div>
            <div className="bg-cream border border-stone-300/30 rounded-3xl p-8 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-cork/10 flex items-center justify-center text-cork-dark mb-6"><Sprout className="w-5 h-5" /></div>
              <h3 className="font-display font-semibold text-lg text-ink mb-3">Agricultural Husks</h3>
              <p className="text-ink/70 text-xs md:text-sm leading-relaxed">
                We collect wheat husks, sugarcane fibers, and oat byproduct residues left over from agricultural processing, giving brand new utility to elements that would otherwise be discarded.
              </p>
            </div>
            <div className="bg-cream border border-stone-300/30 rounded-3xl p-8 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-rust/10 flex items-center justify-center text-rust mb-6"><Award className="w-5 h-5" /></div>
              <h3 className="font-display font-semibold text-lg text-ink mb-3">Vapor-Thermal Pressing</h3>
              <p className="text-ink/70 text-xs md:text-sm leading-relaxed">
                No synthetic binders or glues are added to the molding mix. High-pressure steam activates the natural bonding properties of plant cellulose, heat-sealing the fibers together.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Milestones Timeline */}
        <div className="mb-24 md:mb-36 bg-cream-2/40 border border-stone-300/30 rounded-[2.5rem] p-8 md:p-16">
          <h2 className="font-display text-3xl font-bold text-ink mb-12 text-center">
            Our Journey In Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {TIMELINE.map((item) => (
              <div key={item.year} className="relative group">
                <div className="font-display text-4xl font-extrabold text-moss/30 group-hover:text-moss transition-colors mb-3">
                  {item.year}
                </div>
                <h3 className="font-display font-bold text-sm text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-ink/70 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Team */}
        <div className="mb-24">
          <div className="max-w-2xl mb-16">
            <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
              the minds behind the loop
            </span>
            <h2 className="font-display text-3xl font-bold text-ink">
              Minds dedicated to circular food science
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-cream border border-stone-300/30 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  {/* Monogram avatar */}
                  <div className="w-12 h-12 rounded-full bg-moss text-cream flex items-center justify-center font-display font-semibold text-lg mb-6">
                    {member.initial}
                  </div>
                  <h3 className="font-display font-bold text-lg text-ink">
                    {member.name}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-moss font-semibold mb-4 block">
                    {member.role}
                  </span>
                  <p className="text-ink/70 text-xs md:text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6: Global Impact & Certifications */}
        <div className="bg-moss text-cream rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-moss-light/30">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Join Ecolery as a sustainability partner
            </h3>
            <p className="text-cream-2/80 text-xs md:text-sm leading-relaxed">
              We collaborate with specialty café groups, hotel chains, airline operators, and zero-waste events. Access custom logo-embossed tableware, batch pricing, and materials tracing documentation.
            </p>
          </div>
          <a
            href="/contact"
            className="bg-rust text-cream hover:bg-rust/95 font-semibold px-8 py-3.5 rounded-full text-sm transition-all hover:scale-[1.02] shrink-0 w-full md:w-auto text-center shadow-md"
          >
            Connect With Sourcing Team
          </a>
        </div>

      </div>
    </main>
  );
}
