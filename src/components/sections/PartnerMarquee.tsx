"use client";

const logos = [
  "bKash",
  "Perfetti Van Melle",
  "Shikho",
  "Sailor",
  "SMC",
  "Aarong",
  "Robi",
  "Marico",
  "Trust Bank",
  "Bikroy.com",
  "BRAC Bank",
  "IDLC",
  "BAT Bangladesh",
  "IPDC",
  "Yellow",
  "Carnival",
  "Bagosh",
  "Daraz",
];

export function PartnerMarquee() {
  return (
    <section className="bg-cream-2 border-y border-black/5 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="font-body text-ink text-center text-[13px] font-semibold tracking-[0.14em] uppercase">
          A growing family of companies investing in the next generation of professionals.
        </p>

        <div className="group relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream-2 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream-2 to-transparent" />

          <div className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="text-ink/25 hover:text-ink flex h-14 w-36 shrink-0 items-center justify-center rounded-xl border border-black/5 bg-white/60 px-5 transition-colors duration-300"
              >
                <span className="font-display text-[13px] font-bold tracking-wide text-center leading-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
