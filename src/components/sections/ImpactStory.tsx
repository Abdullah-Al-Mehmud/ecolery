"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, type ComponentProps } from "react";

function ImageWithFallback(props: ComponentProps<typeof Image> & { fallbackLabel?: string }) {
  const { fallbackLabel, className, alt, ...rest } = props;
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`bg-moss/10 flex items-center justify-center ${className ?? ""}`}>
        {fallbackLabel && (
          <span className="font-body text-moss/40 text-xs font-semibold tracking-wider uppercase">
            {fallbackLabel}
          </span>
        )}
      </div>
    );
  }

  return <Image {...rest} alt={alt} className={className} onError={() => setError(true)} />;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const textContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function ImpactStory() {
  return (
    <section className="bg-cream overflow-hidden px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <div className="shadow-ink/15 relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl">
          <Image
            src="/ChildPicture.jpg"
            alt="Rural women in training during an Ecolery school sustainability visit"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textContainerVariants}
        >
          <motion.span
            variants={textItemVariants}
            className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase"
          >
            Our impact
          </motion.span>

          <motion.h2
            variants={textItemVariants}
            className="font-fraunces text-ink mt-4 text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl"
          >
            Every child, a <span className="text-primary-dark">climate champion.</span>
          </motion.h2>

          <motion.p
            variants={textItemVariants}
            className="font-body text-ink/80 mt-6 max-w-md text-[15px] leading-relaxed font-semibold"
          >
            Ecolery pairs eco-innovation with real community change, creating green jobs for rural
            women across our supply chain and bringing sustainability education into classrooms, one
            school visit at a time.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
