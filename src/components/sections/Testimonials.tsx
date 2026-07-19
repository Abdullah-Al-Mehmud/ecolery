"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  avatarLetter: string;
  companyLogo: React.ReactNode;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "Our customers were initially surprised to realize they could eat the cup, but it quickly became an absolute sensation. It has reduced our waste disposal costs by 40% and generated immense social buzz.",
    author: "Elena Rostova",
    role: "Director of Operations",
    company: "Nordic Brew Cafés",
    industry: "Specialty Coffee",
    avatarLetter: "E",
    companyLogo: (
      <svg viewBox="0 0 120 40" fill="none" className="h-6 text-ink/40">
        {/* Mock logo Nordic Brew */}
        <text x="5" y="25" fontFamily="var(--font-display)" fontSize="16" fontWeight="bold" fill="currentColor">NordicBrew</text>
        <circle cx="100" cy="20" r="4" fill="currentColor" />
      </svg>
    )
  },
  {
    id: "test-2",
    quote: "Serving dessert with edible spiced oat spoons was a major differentiator at our annual global summit. We replaced over 25,000 plastic cutlery sets and left exactly zero trash behind. An engineering masterpiece.",
    author: "Marcus Vance",
    role: "Head of Corporate Hospitality",
    company: "SustainCorp Events",
    industry: "Major Events",
    avatarLetter: "M",
    companyLogo: (
      <svg viewBox="0 0 120 40" fill="none" className="h-6 text-ink/40">
        {/* Mock logo SustainCorp */}
        <text x="5" y="25" fontFamily="var(--font-body)" fontSize="15" fontWeight="bold" letterSpacing="0.08em" fill="currentColor">SUSTAIN</text>
      </svg>
    )
  },
  {
    id: "test-3",
    quote: "The organic wheat straw food bowls have replaced all plastic takeaway containers across our restaurant network. They are sturdy, microwavable, and compost beautifully. The future of food packaging.",
    author: "Chef Kenji Sato",
    role: "Executive Culinary Director",
    company: "Sato Organics",
    industry: "Restaurants",
    avatarLetter: "K",
    companyLogo: (
      <svg viewBox="0 0 120 40" fill="none" className="h-6 text-ink/40">
        {/* Mock logo Sato */}
        <text x="5" y="25" fontFamily="var(--font-display)" fontSize="18" fontStyle="italic" fill="currentColor">Sato&rsquo;s</text>
      </svg>
    )
  }
];

export function Testimonials() {
  const cardBorders = [
    "rounded-[3rem_1.2rem_2.5rem_1.5rem]",
    "rounded-[1.5rem_3rem_1rem_2.5rem]",
    "rounded-[2.5rem_1rem_3rem_1.2rem]"
  ];

  return (
    <section className="py-20 md:py-32 bg-cream px-6 relative overflow-hidden">
      
      {/* Background Organic Ambient Light */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div aria-hidden className="absolute top-[30%] left-[-15%] w-[600px] h-[600px] rounded-full bg-cork/5 blur-[120px]" />
        <div aria-hidden className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-moss/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="mb-16 md:mb-24">
          <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
            client voices
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink font-bold leading-[1.05] tracking-tight max-w-3xl">
            Trusted by organizations <br />
            <span className="text-rust italic font-normal">changing the food system.</span>
          </h2>
        </div>

        {/* Editorial Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-cream-2/70 border border-clay/30 p-8 md:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group ${cardBorders[idx]}`}
            >
              
              {/* Quote Mark & Text */}
              <div>
                <Quote className="w-10 h-10 text-rust/20 mb-6 group-hover:text-rust transition-colors duration-500" />
                <p className="font-display text-lg md:text-xl font-medium text-ink leading-relaxed italic mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-6 border-t border-stone-300/30 flex flex-col justify-end">
                <div className="flex items-center gap-4 mb-4">
                  {/* Styled Monogram Avatar */}
                  <div className="w-12 h-12 rounded-full bg-moss text-cream flex items-center justify-center font-display font-semibold text-lg shrink-0 shadow-sm">
                    {testimonial.avatarLetter}
                  </div>
                  <div>
                    <h4 className="font-body font-bold text-ink text-sm md:text-base">
                      {testimonial.author}
                    </h4>
                    <p className="text-ink/60 text-xs mt-0.5">
                      {testimonial.role}, <span className="font-semibold text-moss">{testimonial.industry}</span>
                    </p>
                  </div>
                </div>

                {/* Company Logo Row */}
                <div className="flex items-center justify-between mt-2">
                  {testimonial.companyLogo}
                  <span className="text-[9px] font-mono uppercase bg-stone-300/30 text-ink/65 px-2.5 py-1 rounded-full font-semibold">
                    Verified Partner
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
