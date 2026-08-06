"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Member = {
  name: string;
  role: string;
  seed: string;
  initials: string;
};

const team: Member[] = [
  { name: "Nafesa Anzum Helaly", role: "Co-founder", seed: "ecolery-nafesa", initials: "NH" },
  { name: "Shabiha Sultana Nuha", role: "Co-founder", seed: "ecolery-nuha", initials: "SN" },
  { name: "Sharif Bin Abu Shahriar", role: "Co-founder", seed: "ecolery-sharif", initials: "SS" },
  { name: "Yeamin Islam Tabin", role: "COO", seed: "ecolery-tabin", initials: "YT" },
  { name: "Rakib Hassan Siam", role: "Chief Sustainability Officer", seed: "ecolery-siam", initials: "RS" },
  { name: "Sabrin Akter Riha", role: "Chief Business Officer", seed: "ecolery-riha", initials: "SR" },
  { name: "Tabia Tahsin", role: "Chief International Officer", seed: "ecolery-tahsin", initials: "TT" },
  { name: "Ramim Al Rafi Nasim", role: "Head of Operations", seed: "ecolery-ramim", initials: "RN" },
  { name: "SM Anirban Azad", role: "Head of Finance", seed: "ecolery-anirban", initials: "SA" },
  { name: "Sameer", role: "Global Partnerships Lead", seed: "ecolery-sameer", initials: "S" },
  { name: "Hasnat Zahin", role: "Volunteer", seed: "ecolery-zahin", initials: "HZ" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TeamAvatar({ member }: { member: Member }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="bg-moss/10 flex aspect-square w-full items-center justify-center rounded-full">
        <span className="font-display text-moss/50 text-xl font-bold">{member.initials}</span>
      </div>
    );
  }

  return (
    <div className="ring-black/10 relative aspect-square w-full overflow-hidden rounded-full ring-1 transition-all duration-500 group-hover:ring-primary/50">
      <Image
        src={`https://picsum.photos/seed/${member.seed}/400/400`}
        alt={`Portrait of ${member.name}`}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
        className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        onError={() => setError(true)}
      />
    </div>
  );
}

function LinkedInChip({ member }: { member: Member }) {
  return (
    <a
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${member.name} on LinkedIn`}
      className="bg-primary/5 border-primary/20 text-primary mt-4 flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-300 hover:bg-primary hover:text-cream"
    >
      <LinkedInIcon className="h-4 w-4" />
    </a>
  );
}

export function AboutTeam() {
  const founders = team.filter((member) => member.role === "Co-founder");
  const leadership = team.filter((member) => member.role !== "Co-founder");

  return (
    <section id="team" className="bg-cream-2 scroll-mt-24 px-6 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="mx-auto max-w-6xl"
      >
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <motion.div variants={itemVariants}>
            <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
              Our people
            </span>
            <h2 className="font-fraunces text-ink mt-4 text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
              Meet the <span className="text-primary-dark">Team.</span>
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-body text-ink/80 text-[15px] leading-relaxed font-semibold md:max-w-md md:justify-self-end"
          >
            The people turning everyday choices into environmental change — from our co-founders to
            the volunteers who make it possible.
          </motion.p>
        </div>

        <div className="mt-16">
          <motion.p
            variants={itemVariants}
            className="font-body text-primary text-[12px] font-semibold tracking-[0.2em] uppercase"
          >
            Co-founders
          </motion.p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {founders.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="border-black/5 bg-white group flex flex-col items-center gap-5 rounded-2xl border p-6 text-center sm:flex-row sm:text-left"
              >
                <div className="w-24 shrink-0 sm:w-28">
                  <TeamAvatar member={member} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-fraunces text-ink text-xl font-bold tracking-tight">
                    {member.name}
                  </h3>
                  <p className="font-body text-ink/70 mt-1 text-[12px] font-semibold tracking-[0.18em] uppercase">
                    {member.role}
                  </p>
                  <div className="flex justify-center sm:justify-start">
                    <LinkedInChip member={member} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-black/5 pt-14">
          <motion.p
            variants={itemVariants}
            className="font-body text-primary text-[12px] font-semibold tracking-[0.2em] uppercase"
          >
            Leadership &amp; team
          </motion.p>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            {leadership.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="group flex flex-col items-center text-center"
              >
                <div className="w-28 sm:w-32 lg:w-36">
                  <TeamAvatar member={member} />
                </div>
                <h3 className="font-fraunces text-ink mt-5 text-lg font-bold tracking-tight">
                  {member.name}
                </h3>
                <p className="font-body text-ink/70 mt-1 text-[13px] font-semibold">
                  {member.role}
                </p>
                <LinkedInChip member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
