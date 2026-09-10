"use client";

import { useEffect, useMemo, useState } from "react";
import { BadgeCheck, ChevronDown, Clock, ShieldCheck, type LucideIcon } from "lucide-react";
import { CUP_META, formatBDT, getQuote, type CupSize } from "@/lib/pricing";

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-cream-2 px-4 py-3 font-body text-[14px] font-semibold text-ink outline-none transition-colors duration-300 placeholder:text-ink/40 focus:border-primary focus:ring-2 focus:ring-primary/40";

const labelClasses =
  "mb-2 block font-body text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/60";

const trustPoints: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: Clock,
    title: "Fast turnaround",
    copy: "Quotes land in your inbox within one business day.",
  },
  {
    icon: BadgeCheck,
    title: "Honest minimums",
    copy: "Retail from a single cup, wholesale tiers from 501 cups.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent pricing",
    copy: "Published volume tiers: ৳10–৳15 for 90 ml, ৳25–৳30 for 210 ml.",
  },
];

export function ProductQuoteForm() {
  const [size, setSize] = useState<CupSize>("90ml");
  const [qty, setQty] = useState<string>("1000");

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ size: CupSize; qty: number }>).detail;
      if (!detail) return;
      setSize(detail.size);
      setQty(String(detail.qty));
    };
    window.addEventListener("ecolery:quote", handler);
    return () => window.removeEventListener("ecolery:quote", handler);
  }, []);

  const qtyNum = Number(qty.replace(/,/g, ""));
  const quote = useMemo(
    () => getQuote(size, Number.isFinite(qtyNum) ? Math.floor(qtyNum) : 0),
    [size, qtyNum]
  );

  return (
    <section id="quote" className="bg-cream scroll-mt-24 px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
            Get a quote
          </span>
          <h2 className="font-display text-ink mt-4 text-3xl leading-[1.1] font-bold tracking-tight md:text-5xl">
            Let&apos;s talk <span className="text-primary-dark">volume.</span>
          </h2>
          <p className="font-body text-ink/80 mt-6 max-w-md text-[15px] leading-relaxed font-semibold">
            Tell us how many cups you need and we&apos;ll handle the rest, from pricing to
            nationwide delivery.
          </p>

          {/* Price-at-a-glance */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {(Object.keys(CUP_META) as CupSize[]).map((s) => (
              <div key={s} className="rounded-2xl border border-black/5 bg-white p-5">
                <p className="font-body text-[11px] font-semibold tracking-[0.16em] text-gray-500 uppercase">
                  {CUP_META[s].name}
                </p>
                <p className="font-display text-ink mt-1 text-xl font-bold">
                  {formatBDT(s === "90ml" ? 10 : 25)} – {formatBDT(s === "90ml" ? 15 : 30)}
                  <span className="font-body ml-1 text-[12px] font-semibold text-gray-500">
                    / cup
                  </span>
                </p>
                <p className="font-body mt-1 text-[12px] font-semibold text-gray-500">
                  B2B {CUP_META[s].b2bRange} · B2C {formatBDT(CUP_META[s].b2cPrice)}
                </p>
              </div>
            ))}
          </div>

          <ul className="mt-8 space-y-5">
            {trustPoints.map(({ icon: Icon, title, copy }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="border-primary/20 bg-primary/5 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full border">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-display text-ink text-[14px] font-bold">{title}</p>
                  <p className="font-body text-ink/60 mt-0.5 text-[13px] leading-relaxed font-semibold">
                    {copy}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form className="bg-white rounded-2xl p-6 shadow-sm md:p-8">
          <h3 className="font-display text-ink text-2xl font-bold tracking-tight">
            Request your quote
          </h3>
          <p className="font-body text-ink/60 mt-2 text-[13px] font-semibold">
            We reply within one business day.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="cup-size" className={labelClasses}>
                Cup Size
              </label>
              <div className="relative">
                <select
                  id="cup-size"
                  name="cup-size"
                  value={size}
                  onChange={(e) => setSize(e.target.value as CupSize)}
                  className={`${inputClasses} appearance-none pr-10`}
                >
                  <option value="90ml">Classic | 90 ml (৳10–৳15)</option>
                  <option value="210ml">Grande | 210 ml (৳25–৳30)</option>
                </select>
                <ChevronDown
                  className="text-ink/50 pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2"
                  strokeWidth={1.75}
                />
              </div>
            </div>

            <div>
              <label htmlFor="quantity" className={labelClasses}>
                Quantity
              </label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                placeholder="e.g. 10,000"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="business-type" className={labelClasses}>
                Business Type
              </label>
              <div className="relative">
                <select
                  id="business-type"
                  name="business-type"
                  defaultValue=""
                  className={`${inputClasses} appearance-none pr-10`}
                >
                  <option value="" disabled>
                    Select a type
                  </option>
                  <option value="cafe">Café / Restaurant</option>
                  <option value="retail">Retail</option>
                  <option value="corporate">Corporate / Office</option>
                  <option value="distributor">Distributor</option>
                  <option value="event">Events / Catering</option>
                  <option value="individual">Individual (B2C)</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown
                  className="text-ink/50 pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2"
                  strokeWidth={1.75}
                />
              </div>
            </div>

            <div>
              <label htmlFor="delivery-location" className={labelClasses}>
                Delivery Location
              </label>
              <input
                id="delivery-location"
                name="delivery-location"
                type="text"
                placeholder="City, Area"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClasses}>
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+880 1XXX-XXXXXX"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="name" className={labelClasses}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                className={inputClasses}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className={labelClasses}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@business.com"
                className={inputClasses}
              />
            </div>
          </div>

          {/* Live estimate */}
          <div className="bg-cream mt-6 rounded-2xl border border-black/5 p-5">
            {quote && !quote.needsContact ? (
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-body text-[11px] font-semibold tracking-[0.16em] text-gray-500 uppercase">
                    Instant estimate · {CUP_META[size].short}
                  </p>
                  <p className="font-display text-ink mt-1 text-2xl font-bold">
                    {formatBDT(quote.total)}
                    <span className="font-body ml-2 text-[12px] font-semibold text-gray-500">
                      {formatBDT(quote.unitPrice)} / cup
                    </span>
                  </p>
                </div>
                {quote.savingsPct > 0 && (
                  <span className="bg-primary rounded-full px-3 py-1 text-[11px] font-bold text-white">
                    Save {quote.savingsPct}%
                  </span>
                )}
              </div>
            ) : quote?.needsContact ? (
              <p className="font-body text-[13px] leading-relaxed font-semibold text-ink/70">
                10,000+ cups qualifies for a{" "}
                <span className="text-ink font-bold">custom factory rate</span>, submit the form
                and we&apos;ll quote within one business day.
              </p>
            ) : (
              <p className="font-body text-[13px] font-semibold text-ink/50">
                Enter a quantity to see your instant estimate. Try the{" "}
                <a href="#pricing" className="text-primary font-bold underline-offset-2 hover:underline">
                  pricing calculator
                </a>
                .
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-primary text-cream hover:bg-primary-dark mt-6 w-full rounded-full px-8 py-3.5 text-[14px] font-semibold transition-colors"
          >
            {quote && !quote.needsContact
              ? `Request quote: ${formatBDT(quote.total)}`
              : "Get a Quote"}
          </button>
          <p className="font-body mt-3 text-center text-[12px] font-semibold text-ink/40">
            No payment now · Final quote confirmed by email within one business day.
          </p>
        </form>
      </div>
    </section>
  );
}
