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

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-moss relative overflow-hidden px-6 pt-24 pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.8fr_1fr]">
          {/* ---- Mission ---- */}
          <div>
            <p className="font-body text-cream/60 text-[12px] font-semibold tracking-[0.18em] uppercase">
              Our mission
            </p>
            <p className="font-body mt-5 max-w-xs text-[14px] leading-relaxed font-semibold text-cream/60">
              Driven by a passion for environmental advocacy, we combine eco-friendly innovation
              with deep social impact — creating green jobs for rural women and educating the next
              generation on the importance of sustainability.
            </p>
          </div>

          {/* ---- Office Location ---- */}
          <div>
            <p className="font-body text-cream/60 text-[12px] font-semibold tracking-[0.18em] uppercase">
              Office location
            </p>
            <p className="font-body mt-5 text-[14px] leading-relaxed font-semibold text-cream/60">
              12, Hasina Badar Villa,
              <br />
              Sheikh Shaheb Bazar,
              <br />
              Dhaka-1211
            </p>
          </div>

          {/* ---- Follow Us ---- */}
          <div>
            <p className="font-body text-cream/60 text-[12px] font-semibold tracking-[0.18em] uppercase">
              Follow us
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:border-primary-light/40 hover:text-primary-light flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream transition-colors duration-300"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:border-primary-light/40 hover:text-primary-light flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream transition-colors duration-300"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* ---- Contact ---- */}
          <div>
            <p className="font-body text-cream/60 text-[12px] font-semibold tracking-[0.18em] uppercase">
              Contact
            </p>
            <div className="mt-5 space-y-3">
              <a
                href="tel:+881326677272"
                className="font-body block text-[14px] font-semibold text-cream/60 transition-colors duration-300 hover:text-cream"
              >
                +088 1326677272
              </a>
              <a
                href="mailto:ecolery.bangladesh@gmail.com"
                className="font-body block text-[14px] font-semibold text-cream/60 transition-colors duration-300 hover:text-cream"
              >
                ecolery.bangladesh@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* ---- Bottom bar ---- */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 md:flex-row">
          <p className="font-body text-[12px] font-semibold text-cream/60">
            &copy; {new Date().getFullYear()} Ecolery. All rights reserved.
          </p>
          <p className="font-body text-[12px] font-semibold text-cream/60">
            Designed and built in Dhaka, Bangladesh.
          </p>
        </div>

        {/* ---- Credit ---- */}
        <div className="mt-6 flex justify-center border-t border-white/10 pt-6">
          <StellarWormCredit />
        </div>
      </div>
    </footer>
  );
}
