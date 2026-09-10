"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  Check,
  Calculator,
  Copy,
  Mail,
  Phone,
  PhoneCall,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import {
  CUP_META,
  PRICE_TIERS,
  formatBDT,
  getQuote,
  type CupSize,
} from "@/lib/pricing";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const QUICK_QTYS = [500, 2000, 5000, 10000];

const MAX_SLIDER = 10000;

export function ProductPricing() {
  const [size, setSize] = useState<CupSize>("90ml");
  const [qty, setQty] = useState<number>(1000);
  const [contactOpen, setContactOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const quote = useMemo(() => getQuote(size, qty), [size, qty]);
  const tiers = PRICE_TIERS[size];
  const meta = CUP_META[size];

  const clampQty = (v: number) => {
    if (Number.isNaN(v)) return 1;
    return Math.min(12000, Math.max(1, Math.floor(v)));
  };

  // Lock body scroll + close on ESC when modal is open
  useEffect(() => {
    if (!contactOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setContactOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [contactOpen]);

  const copyText = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 1600);
    } catch {
      setCopied(null);
    }
  };

  const quoteSummary =
    quote && !quote.needsContact
      ? `${qty.toLocaleString()} × ${meta.name} ≈ ${formatBDT(quote.total)} (${formatBDT(quote.unitPrice)}/cup)`
      : `${qty.toLocaleString()} × ${meta.name} — custom factory rate (10,000+ tier)`;

  return (
    <section id="pricing" className="bg-cream scroll-mt-24 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
            Pricing &amp; estimator
          </span>
          <h2 className="font-display text-ink mt-4 text-3xl leading-[1.1] font-bold tracking-tight md:text-5xl">
            Simple pricing that{" "}
            <span className="text-primary-dark">scales with you.</span>
          </h2>
          <p className="font-body mt-6 max-w-lg text-[15px] leading-relaxed font-semibold text-gray-600">
            Pick a cup, slide your quantity, and see your instant quotation.
            The more you order, the lower your per-cup price — no hidden fees.
          </p>
        </div>

        {/* B2B / B2C strip */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-white p-6 md:p-7">
            <div className="flex items-center gap-3">
              <span className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
                <Building2 className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-body text-[11px] font-semibold tracking-[0.16em] text-gray-500 uppercase">
                  Wholesale · B2B
                </p>
                <p className="font-display text-ink text-lg font-bold">
                  ৳8–৳12 <span className="text-[13px] font-semibold text-gray-500">/ 90 ml</span>
                  <span className="mx-2 text-gray-300">·</span>
                  ৳18–৳25 <span className="text-[13px] font-semibold text-gray-500">/ 210 ml</span>
                </p>
              </div>
            </div>
            <ul className="mt-5 space-y-2.5">
              {["Volume tiers from 501 cups up", "Custom flavours & branding available", "Nationwide delivery in 3–5 days"].map(
                (t) => (
                  <li key={t} className="font-body flex items-start gap-2 text-[13px] font-semibold text-gray-600">
                    <Check className="text-primary mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
                    {t}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 md:p-7">
            <div className="flex items-center gap-3">
              <span className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
                <ShoppingBag className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-body text-[11px] font-semibold tracking-[0.16em] text-gray-500 uppercase">
                  Retail · B2C
                </p>
                <p className="font-display text-ink text-lg font-bold">
                  ৳15 <span className="text-[13px] font-semibold text-gray-500">/ 90 ml</span>
                  <span className="mx-2 text-gray-300">·</span>
                  ৳30 <span className="text-[13px] font-semibold text-gray-500">/ 210 ml</span>
                </p>
              </div>
            </div>
            <ul className="mt-5 space-y-2.5">
              {["No minimum order — try a few cups first", "Same edible, compostable quality", "Available at partner cafés & stores"].map(
                (t) => (
                  <li key={t} className="font-body flex items-start gap-2 text-[13px] font-semibold text-gray-600">
                    <Check className="text-primary mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
                    {t}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Calculator */}
        <div className="mt-6 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          {/* Left: controls + tier table */}
          <div className="rounded-2xl border border-black/5 bg-white p-6 md:p-8">
            <div className="flex items-center gap-2">
              <Calculator className="text-primary h-4 w-4" strokeWidth={1.75} />
              <p className="font-body text-[12px] font-semibold tracking-[0.14em] text-gray-500 uppercase">
                Instant quotation calculator
              </p>
            </div>

            {/* Cup selector */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              {(Object.keys(CUP_META) as CupSize[]).map((s) => {
                const active = s === size;
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`rounded-2xl border px-5 py-4 text-left transition-colors duration-300 ${
                      active
                        ? "border-primary bg-primary/[0.06]"
                        : "border-black/10 bg-white hover:border-black/20"
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      <span className="font-display text-ink text-[15px] font-bold">
                        {CUP_META[s].name}
                      </span>
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full border transition-colors ${
                          active ? "border-primary bg-primary text-white" : "border-black/20 text-transparent"
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                    </span>
                    <span className="font-body mt-1 block text-[12px] font-semibold text-gray-500">
                      {CUP_META[s].tagline}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <div className="flex items-end justify-between gap-4">
                <label htmlFor="qty" className="font-body text-[12px] font-semibold tracking-[0.14em] text-gray-500 uppercase">
                  Quantity (cups)
                </label>
                <input
                  id="qty-number"
                  type="number"
                  min={1}
                  max={12000}
                  value={qty}
                  onChange={(e) => setQty(clampQty(Number(e.target.value)))}
                  className="font-display text-ink w-32 rounded-xl border border-black/10 bg-cream px-3 py-2 text-right text-lg font-bold outline-none focus:border-primary"
                />
              </div>
              <input
                id="qty"
                type="range"
                min={1}
                max={MAX_SLIDER}
                step={50}
                value={Math.min(qty, MAX_SLIDER)}
                onChange={(e) => setQty(clampQty(Number(e.target.value)))}
                className="mt-4 w-full accent-[#1e9e5a]"
              />
              <div className="mt-3 flex flex-wrap gap-2">
                {QUICK_QTYS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => setQty(q)}
                    className={`rounded-full border px-4 py-1.5 text-[12px] font-semibold transition-colors ${
                      qty === q
                        ? "border-ink bg-ink text-cream"
                        : "border-black/10 bg-white text-gray-600 hover:border-black/25"
                    }`}
                  >
                    {q.toLocaleString()}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setQty(12000)}
                  className={`rounded-full border px-4 py-1.5 text-[12px] font-semibold transition-colors ${
                    qty > 10000
                      ? "border-ink bg-ink text-cream"
                      : "border-black/10 bg-white text-gray-600 hover:border-black/25"
                  }`}
                >
                  10,000+
                </button>
              </div>
            </div>

            {/* Tier table */}
            <div className="mt-7 overflow-hidden rounded-2xl border border-black/5">
              <div className="grid grid-cols-3 bg-cream-2 px-5 py-3">
                {["Quantity", "Per cup", "You save"].map((h) => (
                  <p key={h} className="font-body text-[11px] font-semibold tracking-[0.14em] text-gray-500 uppercase last:text-right">
                    {h}
                  </p>
                ))}
              </div>
              {tiers.map((t) => {
                const isActive = quote && !quote.needsContact && quote.tier.label === t.label;
                const isContact = t.max === null;
                return (
                  <div
                    key={t.label}
                    className={`grid grid-cols-3 items-center px-5 py-3.5 transition-colors ${
                      isActive ? "bg-primary/[0.07]" : "bg-white"
                    } border-t border-black/5`}
                  >
                    <p className="font-body text-[13px] font-semibold text-ink">
                      {t.label}
                      {isActive && (
                        <span className="bg-primary ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase">
                          Your tier
                        </span>
                      )}
                      {isContact && (
                        <span className="ml-2 rounded-full bg-ink px-2 py-0.5 text-[10px] font-bold tracking-wide text-cream uppercase">
                          Custom
                        </span>
                      )}
                    </p>
                    <p className="font-display text-[14px] font-bold text-ink">
                      {isContact ? "Let's talk" : `${formatBDT(t.unitPrice)}`}
                    </p>
                    <p className="font-body text-right text-[12px] font-semibold text-gray-500">
                      {isContact
                        ? "Factory rate"
                        : t.unitPrice === tiers[0].unitPrice
                          ? "Base price"
                          : `−${Math.round(((tiers[0].unitPrice - t.unitPrice) / tiers[0].unitPrice) * 100)}% vs base`}
                    </p>
                  </div>
                );
              })}
            </div>
            <p className="font-body mt-4 text-[12px] leading-relaxed font-semibold text-gray-500">
              {meta.short} cups · Prices in BDT, excluding delivery. Orders above 10,000 cups get a
              custom factory rate — contact us directly.
            </p>
          </div>

          {/* Right: live quotation card */}
          <motion.div
            key={`${size}-${quote?.needsContact ? "contact" : quote?.tier.label}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="flex flex-col rounded-2xl bg-moss p-6 text-white md:p-8"
          >
            <div className="flex items-center justify-between">
              <p className="font-body text-[12px] font-semibold tracking-[0.16em] text-white/50 uppercase">
                Your quotation
              </p>
              <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80">
                <Sparkles className="h-3 w-3" strokeWidth={2} />
                {meta.name}
              </span>
            </div>

            {quote && !quote.needsContact ? (
              <>
                <p className="font-display mt-6 text-5xl font-bold tracking-tight">
                  {formatBDT(quote.total)}
                </p>
                <p className="font-body mt-2 text-[13px] font-semibold text-white/60">
                  {qty.toLocaleString()} cups × {formatBDT(quote.unitPrice)} per cup
                </p>

                <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                  <div className="flex justify-between text-[13px]">
                    <span className="font-body font-semibold text-white/60">Unit price</span>
                    <span className="font-display font-bold">{formatBDT(quote.unitPrice)} / cup</span>
                  </div>
                  <div className="flex justify-between text-[13px]">
                    <span className="font-body font-semibold text-white/60">Volume savings</span>
                    <span className="font-display font-bold text-[#4fc077]">
                      {quote.savingsVsBase > 0
                        ? `−${formatBDT(quote.savingsVsBase)} (${quote.savingsPct}%)`
                        : "Base tier"}
                    </span>
                  </div>
                  <div className="flex justify-between text-[13px]">
                    <span className="font-body font-semibold text-white/60">Tier</span>
                    <span className="font-display font-bold">{quote.tier.label} cups</span>
                  </div>
                </div>

                {quote.nextTierPrice !== null && quote.nextTierAt !== null ? (
                  <p className="font-body mt-6 rounded-xl bg-white/[0.06] p-4 text-[12px] leading-relaxed font-semibold text-white/70">
                    Add {(quote.nextTierAt - qty).toLocaleString()} more cups to unlock{" "}
                    <span className="text-white">{formatBDT(quote.nextTierPrice)}/cup</span> and
                    save even more.
                  </p>
                ) : (
                  <p className="font-body mt-6 rounded-xl bg-white/[0.06] p-4 text-[12px] leading-relaxed font-semibold text-white/70">
                    You&apos;re on our best published tier. Beyond 10,000 cups we sharpen the
                    pencil further — talk to us.
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="group font-body mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-8 py-3.5 text-[14px] font-semibold text-ink transition-colors duration-300 hover:bg-white"
                >
                  <PhoneCall className="h-4 w-4" strokeWidth={2} />
                  Contact us
                </button>
                <p className="font-body mt-3 text-center text-[12px] font-semibold text-white/50">
                  We reply within one business day.
                </p>
              </>
            ) : (
              <>
                <p className="font-display mt-6 text-4xl font-bold tracking-tight">Custom factory rate</p>
                <p className="font-body mt-3 text-[14px] leading-relaxed font-semibold text-white/70">
                  {qty.toLocaleString()} × {meta.short} cups qualifies for our best direct pricing.
                  Tell us where to deliver and we&apos;ll quote within one business day.
                </p>
                <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-white/80">
                    <PhoneCall className="h-4 w-4" strokeWidth={1.75} />
                    Priority B2B line — bulk &amp; distributor rates
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-white/80">
                    <Check className="h-4 w-4" strokeWidth={2} />
                    Custom flavours, branding &amp; delivery slots
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="group font-body mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-8 py-3.5 text-[14px] font-semibold text-ink transition-colors duration-300 hover:bg-white"
                >
                  <PhoneCall className="h-4 w-4" strokeWidth={2} />
                  Contact us
                </button>
              </>
            )}
          </motion.div>
        </div>
      </div>

      {/* Contact modal */}
      <AnimatePresence>
        {contactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            onClick={() => setContactOpen(false)}
            className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/60 p-4 backdrop-blur-sm sm:items-center"
            role="dialog"
            aria-modal="true"
            aria-label="Contact Ecolery"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-body text-[12px] font-semibold tracking-[0.16em] text-primary uppercase">
                    Contact us
                  </p>
                  <h3 className="font-display text-ink mt-2 text-2xl font-bold tracking-tight">
                    Let&apos;s confirm your quote.
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setContactOpen(false)}
                  aria-label="Close contact dialog"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 text-gray-500 transition-colors hover:border-black/20 hover:text-ink"
                >
                  <X className="h-4 w-4" strokeWidth={2} />
                </button>
              </div>

              <div className="mt-4 rounded-2xl border border-black/5 bg-cream px-4 py-3">
                <p className="font-body text-[11px] font-semibold tracking-[0.14em] text-gray-500 uppercase">
                  Your selection
                </p>
                <p className="font-display text-ink mt-1 text-[15px] font-bold">{quoteSummary}</p>
                <p className="font-body mt-1 text-[12px] font-semibold text-gray-500">
                  Mention this when you call or email — we reply within one business day.
                </p>
              </div>

              <div className="mt-4 space-y-3">
                <a
                  href="tel:+881326677272"
                  className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-white px-5 py-4 transition-colors duration-300 hover:border-primary/25"
                >
                  <span className="bg-primary/10 text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
                    <Phone className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="font-body block text-[11px] font-semibold tracking-[0.14em] text-gray-500 uppercase">
                      Phone
                    </span>
                    <span className="font-display text-ink mt-0.5 block text-[15px] font-bold">
                      +088 1326677272
                    </span>
                  </span>
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      copyText("+088 1326677272", "phone");
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") copyText("+088 1326677272", "phone");
                    }}
                    className="flex items-center gap-1 text-[12px] font-semibold text-gray-400 hover:text-primary"
                    title="Copy phone number"
                  >
                    <Copy className="h-4 w-4" strokeWidth={1.75} />
                    {copied === "phone" ? "Copied" : "Copy"}
                  </span>
                </a>

                <a
                  href="mailto:ecolery.bangladesh@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-white px-5 py-4 transition-colors duration-300 hover:border-primary/25"
                >
                  <span className="bg-primary/10 text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
                    <Mail className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="font-body block text-[11px] font-semibold tracking-[0.14em] text-gray-500 uppercase">
                      Email
                    </span>
                    <span className="font-display text-ink mt-0.5 block text-[15px] font-bold break-all">
                      ecolery.bangladesh@gmail.com
                    </span>
                  </span>
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      copyText("ecolery.bangladesh@gmail.com", "email");
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") copyText("ecolery.bangladesh@gmail.com", "email");
                    }}
                    className="flex shrink-0 items-center gap-1 text-[12px] font-semibold text-gray-400 hover:text-primary"
                    title="Copy email address"
                  >
                    <Copy className="h-4 w-4" strokeWidth={1.75} />
                    {copied === "email" ? "Copied" : "Copy"}
                  </span>
                </a>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <a
                  href="tel:+881326677272"
                  className="rounded-full bg-ink px-6 py-3 text-center text-[14px] font-semibold text-cream transition-colors hover:bg-moss"
                >
                  Call now
                </a>
                <a
                  href={`mailto:ecolery.bangladesh@gmail.com?subject=${encodeURIComponent(`Quote request — ${quoteSummary}`)}`}
                  className="rounded-full bg-primary px-6 py-3 text-center text-[14px] font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Email us
                </a>
              </div>
              <p className="font-body mt-4 text-center text-[12px] font-semibold text-gray-500">
                Prefer browsing? Find us on LinkedIn &amp; Facebook via the contact page.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
