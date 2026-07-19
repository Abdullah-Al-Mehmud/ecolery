"use client";

import { motion } from "framer-motion";
import { Coffee, Calendar, Hotel, Plane, UtensilsCrossed, Leaf } from "lucide-react";

interface Industry {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  useCase: string;
}

const INDUSTRIES: Industry[] = [
  {
    id: "coffee-shops",
    name: "Specialty Coffee",
    icon: <Coffee className="w-6 h-6 stroke-[1.6]" />,
    description: "Upgrade your takeaway ritual. Stand out from typical paper cups and demonstrate true zero-waste action directly to coffee lovers.",
    useCase: "8oz & 12oz cups with customization",
  },
  {
    id: "events",
    name: "Festivals & Events",
    icon: <Calendar className="w-6 h-6 stroke-[1.6]" />,
    description: "Eliminate waste bins and sorting fees. Ecolery cups and plates can be composted in batch along with organic food scraps on-site.",
    useCase: "High volume supply & bulk composting",
  },
  {
    id: "hotels",
    name: "Boutique Hotels",
    icon: <Hotel className="w-6 h-6 stroke-[1.6]" />,
    description: "Offer a premium, eco-luxury experience in lounges and in-room bars, showing guests a dedication to deep sustainability.",
    useCase: "Branded cups, spoons & amenities",
  },
  {
    id: "airlines",
    name: "Airlines & Transit",
    icon: <Plane className="w-6 h-6 stroke-[1.6]" />,
    description: "Lightweight, space-saving tableware that reduces weight on board and is 100% compostable in transit facilities.",
    useCase: "Custom high-durability nesting bowls",
  },
  {
    id: "restaurants",
    name: "Eco Restaurants",
    icon: <UtensilsCrossed className="w-6 h-6 stroke-[1.6]" />,
    description: "Replace single-use catering plastics with organic bowls and edible spoons that delight guests and enhance plating styles.",
    useCase: "Tasting spoons and takeout containers",
  },
  {
    id: "eco-brands",
    name: "Circular Brands",
    icon: <Leaf className="w-6 h-6 stroke-[1.6]" />,
    description: "Partner with Ecolery for custom co-branded packaging wraps, cereal bases, and molded organic parts tailored to your product.",
    useCase: "Custom bio-molded packaging shells",
  },
];

export function Industries() {
  return (
    <section className="py-24 md:py-32 bg-cream-2/40 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
            industries we serve
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-tight font-medium">
            Designed for commercial scale, <br />
            <span className="text-moss italic font-normal">tailored for experience.</span>
          </h2>
          <p className="text-ink/75 text-sm md:text-base leading-relaxed mt-6">
            Ecolery supports partners across key hospitality and corporate sectors, simplifying disposal logistics while boosting brand trust through tangible circular practices.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry, idx) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-cream border border-stone-300/30 rounded-[2rem] p-8 flex flex-col justify-between group shadow-sm hover:shadow-md transition-all duration-300 hover:bg-cream-2/30"
            >
              
              <div>
                {/* Custom Icon container */}
                <div className="w-12 h-12 rounded-2xl bg-moss/5 text-moss group-hover:bg-moss group-hover:text-cream flex items-center justify-center mb-6 transition-all duration-350 shadow-inner">
                  {industry.icon}
                </div>

                <h3 className="font-display text-xl font-bold text-ink mb-3 group-hover:text-moss transition-colors">
                  {industry.name}
                </h3>
                
                <p className="text-ink/70 text-xs md:text-sm leading-relaxed mb-6">
                  {industry.description}
                </p>
              </div>

              {/* Use Case Footnote */}
              <div className="pt-4 border-t border-stone-300/30 flex justify-between items-center text-[11px] font-mono uppercase tracking-wider text-ink/40 font-semibold">
                <span>Standard App:</span>
                <span className="text-rust">{industry.useCase}</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
