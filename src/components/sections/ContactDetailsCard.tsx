"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const channels = [
  {
    label: "Phone",
    value: "+088 1326677272",
    href: "tel:+881326677272",
    icon: Phone,
    external: false,
  },
  {
    label: "Email",
    value: "ecolery.bangladesh@gmail.com",
    href: "mailto:ecolery.bangladesh@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Connect with Ecolery",
    href: "https://linkedin.com",
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: "Facebook",
    value: "Follow the journey",
    href: "https://facebook.com",
    icon: FacebookIcon,
    external: true,
  },
];

export function ContactDetailsCard() {
  return (
    <section className="bg-moss relative overflow-hidden px-6 py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(60%_100%_at_50%_0%,rgba(140,199,140,0.07),transparent)]"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative mx-auto max-w-6xl"
      >
        <motion.div variants={itemVariants} className="max-w-2xl">
          <span className="font-body text-[13px] font-semibold tracking-[0.2em] text-white/50 uppercase">
            Direct lines
          </span>
          <h2 className="font-fraunces text-cream mt-4 text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
            Get in <span className="text-primary-light">touch</span> with us
          </h2>
        </motion.div>

        <div className="mt-12">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            const isExternal = channel.external;

            return (
              <motion.a
                key={channel.label}
                href={channel.href}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                variants={itemVariants}
                className={`group flex items-center gap-5 py-6 transition-colors duration-300 hover:bg-white/[0.06] md:-mx-6 md:gap-8 md:px-6 md:py-7 ${
                  index > 0 ? "border-t border-white/10" : ""
                }`}
              >
                <span className="font-fraunces w-10 shrink-0 text-2xl font-semibold text-white/20">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="border-primary-light/25 text-primary-light group-hover:bg-primary-light group-hover:text-moss flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-white/[0.04] transition-colors duration-300">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="font-body block text-[12px] font-semibold tracking-[0.14em] text-white/50 uppercase">
                    {channel.label}
                  </span>
                  <span className="font-body text-cream mt-1 block text-[15px] leading-snug font-semibold break-words">
                    {channel.value}
                  </span>
                </span>

                <span className="group-hover:border-primary-light group-hover:bg-primary-light group-hover:text-moss hidden shrink-0 rounded-full border border-white/15 p-2.5 text-white/70 transition-colors duration-300 sm:inline-flex">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                </span>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
