"use client";

import { useState } from "react";

const roleOptions = ["Volunteer", "Part-Time Employee", "Full-Time Employee"] as const;

export function CareersCTA() {
  const [selected, setSelected] = useState<string>("");

  return (
    <section className="bg-cream px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
          Join the team
        </span>
        <h2 className="font-display text-ink mt-4 text-3xl font-bold tracking-tight md:text-5xl">
          Ready to build a <span className="text-primary-dark">plastic-free future</span>?
        </h2>
        <p className="font-body mx-auto mt-6 max-w-lg text-[15px] leading-relaxed font-semibold text-gray-600">
          Turn your passion for the planet into a career. We are looking for passionate minds to help
          scale our impact.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#careers"
            className="bg-ink text-cream hover:bg-moss rounded-full px-8 py-3.5 text-[14px] font-semibold transition-colors"
          >
            View Open Roles
          </a>
        </div>

        {/* ---- Role Selector ---- */}
        <div className="mt-16">
          <p className="font-body text-ink text-[14px] font-semibold">
            What type of role are you looking to take on?
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {roleOptions.map((role) => (
              <button
                key={role}
                onClick={() => setSelected(role)}
                className={`rounded-full border px-6 py-2.5 text-[13px] font-semibold transition-colors ${
                  selected === role
                    ? "border-ink bg-ink text-cream"
                    : "border-black/10 bg-white text-ink hover:border-black/20"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
          {selected && (
            <p className="font-body text-primary-dark mt-6 text-[13px] font-semibold">
              Showing {selected.toLowerCase()} opportunities
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
