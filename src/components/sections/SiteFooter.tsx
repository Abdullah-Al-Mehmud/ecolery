import { Mail, MapPin, Phone } from "lucide-react";

import { StellarWormCredit } from "@/components/sections/StellarWormCredit";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const quickLinks = [
  { label: "About US", href: "#about" },
  { label: "Our Products", href: "#product" },
  { label: "Impact", href: "#impact" },
  { label: "Explore", href: "#explore" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#07120D] px-6 pt-24 pb-8">
      {/* subtle radial glow so the dark field doesn't read flat */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(140,199,140,0.06) 0%, rgba(140,199,140,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* ---- Top: brand + CTA ---- */}
        <div className="flex flex-col items-start justify-center gap-10 border-b border-white/10 pb-14 text-center md:flex-row md:items-end">
          <div className="max-w-lg">
            <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
              Eat, re-eat, forget
            </span>
            <h3 className="font-display mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Sustainability, <span className="text-white/60">served fresh.</span>
            </h3>
          </div>
        </div>

        {/* ---- Middle: mission / links / contact ---- */}
        <div className="grid gap-12 py-14 md:grid-cols-[1.2fr_0.8fr_1fr]">
          {/* Mission */}
          <div>
            <p className="font-body text-[14px] leading-relaxed font-semibold text-white/60">
              Driven by a passion for environmental advocacy and community transformation, we
              combine eco-friendly innovation with deep social impact by creating green jobs for
              underprivileged rural women and educating the next generation on the vital importance
              of sustainability.
            </p>
            <p className="font-body mt-6 text-[12px] font-semibold tracking-[0.14em] text-white/30 uppercase">
              Patent filed · 2019
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-body mb-5 text-[12px] font-semibold tracking-[0.18em] text-white/40 uppercase">
              Explore
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-[14px] font-semibold text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <p className="font-body mb-1 text-[12px] font-semibold tracking-[0.18em] text-white/40 uppercase">
              Reach us
            </p>

            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
              <p className="font-body text-[14px] font-semibold text-white/70">
                12, Hasina Badar Villa, Sheikh Shaheb Bazar, Dhaka – 1211
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-primary h-4 w-4 shrink-0" strokeWidth={1.75} />
              <a
                href="tel:+881326677272"
                className="font-body text-[14px] font-semibold text-white/70 transition-colors hover:text-white"
              >
                +088 1326677272
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-primary h-4 w-4 shrink-0" strokeWidth={1.75} />
              <a
                href="mailto:ecolery.bangladesh@gmail.com"
                className="font-body text-[14px] font-semibold text-white/70 transition-colors hover:text-white"
              >
                ecolery.bangladesh@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 pt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/30 hover:text-white"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/30 hover:text-white"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* ---- Bottom bar ---- */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="font-body text-[12px] font-semibold text-white/30">
            &copy; {new Date().getFullYear()} Ecolery. All rights reserved.
          </p>
          <StellarWormCredit />
        </div>
      </div>
    </footer>
  );
}
