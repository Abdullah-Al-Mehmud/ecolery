"use client";

import { motion } from "framer-motion";

interface Review {
  name: string;
  role: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Faiza Rahman",
    role: "Marketing Executive",
    text: "The cup held my tea for 30 to 40 minutes without going soggy. That alone sold me.",
  },
  {
    name: "Zubair Hossain",
    role: "Event Manager",
    text: "Used for a corporate CSR event. It became the talking point of the entire evening.",
  },
  {
    name: "Reza Abdullah",
    role: "Startup Founder",
    text: "Held cold lacchi with zero leakage. This cup is built for Bangladesh summers.",
  },
  {
    name: "Ruma Akter",
    role: "Homemaker",
    text: "Used Ecolery at a birthday party instead of plastic cups. Guests were genuinely curious.",
  },
  {
    name: "Arif Arnob",
    role: "Café Owner",
    text: "Customer feedback is overwhelmingly positive. It sets our café apart from everywhere else.",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function ReviewCard({ name, role, text }: Review) {
  return (
    <article data-card className="flex w-[210px] shrink-0 sm:w-[260px] md:w-[300px]">
      <div className="bg-cream flex h-full w-full flex-col rounded-2xl p-5 sm:rounded-3xl sm:p-6 md:p-8">
        <p className="font-body text-ink/85 mt-2 flex-1 text-[13px] leading-relaxed font-semibold sm:mt-4 sm:text-[14px] md:mt-6 md:text-[15px]">
          &ldquo;{text}&rdquo;
        </p>

        <div className="border-ink/10 mt-5 border-t pt-4 sm:mt-6 sm:pt-5 md:mt-8 md:pt-6">
          <p className="font-body text-ink text-xs font-bold sm:text-sm">{name}</p>
          <p className="font-body text-ink/70 mt-0.5 text-[10px] font-semibold tracking-wider uppercase sm:text-[11px] md:text-[12px]">
            {role}
          </p>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  // duplicate the list once so the loop point is invisible
  const track = [...reviews, ...reviews];

  return (
    <section className="bg-cream-2 overflow-hidden px-4 py-16 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl"
        >
          <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
            What people say
          </span>
          <h2 className="font-display text-ink mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Real voices, <span className="text-primary-dark">real impact.</span>
          </h2>
        </motion.div>
      </div>

      {/* full-bleed auto-scrolling track, fades out at both edges */}
      <div
        className="group relative mt-8 w-full px-4 sm:mt-12 sm:px-16 md:px-32"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <motion.div
          className="flex w-max gap-4 sm:gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        >
          {track.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} {...review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
