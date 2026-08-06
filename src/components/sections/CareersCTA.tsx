"use client";

import { useState } from "react";

const roleOptions = ["Volunteer", "Part-Time Employee", "Full-Time Employee"] as const;

const MARQUEE_HALF_LENGTH = 3;

function Tagline() {
  return (
    <span className="font-display text-cream text-4xl font-bold tracking-tight whitespace-nowrap md:text-6xl">
      Ready to build a plastic-free future? Join our team!{" "}
      <span className="text-primary-light">✦</span> Turn your passion for the planet into a career{" "}
      <span className="text-primary-light">✦</span>
    </span>
  );
}

export function CareersCTA() {
  const [selected, setSelected] = useState<string>("");

  return (
    <section className="bg-moss overflow-hidden py-24 md:py-32">
      <div className="relative overflow-hidden border-y border-white/10 py-6 md:py-8">
        <div className="from-moss pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r to-transparent" />
        <div className="from-moss pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l to-transparent" />

        <div className="flex w-max animate-marquee items-center gap-12">
          <div className="flex shrink-0 items-center gap-12">
            {Array.from({ length: MARQUEE_HALF_LENGTH }).map((_, i) => (
              <Tagline key={i} />
            ))}
          </div>
          <div aria-hidden className="flex shrink-0 items-center gap-12">
            {Array.from({ length: MARQUEE_HALF_LENGTH }).map((_, i) => (
              <Tagline key={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col items-center px-6">
        <a
          href="#careers"
          className="bg-primary text-cream hover:bg-primary-dark rounded-full px-8 py-3.5 text-[14px] font-semibold transition-colors duration-300"
        >
          View Open Roles
        </a>

        <div className="mt-16 w-full max-w-2xl">
          <p className="font-body text-center text-[14px] font-semibold text-white/70">
            What type of role are you looking to take on?
          </p>

          <form className="mt-5 flex flex-wrap justify-center gap-3">
            {roleOptions.map((role) => (
              <label
                key={role}
                className="bg-cream-2 has-[:checked]:border-primary has-[:focus-visible]:ring-primary flex cursor-pointer items-center gap-3 rounded-full border border-white/15 px-6 py-3 transition-colors duration-300 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-moss"
              >
                <input
                  type="radio"
                  name="role"
                  value={role}
                  checked={selected === role}
                  onChange={() => setSelected(role)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden
                  className="border-white/40 peer-checked:border-primary peer-checked:bg-primary h-4 w-4 shrink-0 rounded-full border-2 transition-colors duration-300"
                />
                <span className="font-body text-ink text-[13px] font-semibold">{role}</span>
              </label>
            ))}
          </form>

          {selected && (
            <p className="font-body text-primary-light mt-6 text-center text-[13px] font-semibold">
              Showing {selected.toLowerCase()} opportunities
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
