import { BadgeCheck, ChevronDown, Clock, ShieldCheck, type LucideIcon } from "lucide-react";

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
    copy: "Bulk pricing starts at 1,000 cups, no hidden fees.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent pricing",
    copy: "Volume-based tiers that improve as you scale.",
  },
];

export function ProductQuoteForm() {
  return (
    <section id="quote" className="bg-cream scroll-mt-24 px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
            Get a quote
          </span>
          <h2 className="font-fraunces text-ink mt-4 text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
            Let&apos;s talk <span className="text-primary-dark">volume.</span>
          </h2>
          <p className="font-body text-ink/80 mt-6 max-w-md text-[15px] leading-relaxed font-semibold">
            Tell us how many cups you need and we&apos;ll handle the rest, from pricing to
            nationwide delivery.
          </p>

          <ul className="mt-10 space-y-5">
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
          <h3 className="font-fraunces text-ink text-2xl font-semibold tracking-tight">
            Request your quote
          </h3>
          <p className="font-body text-ink/60 mt-2 text-[13px] font-semibold">
            We reply within one business day.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="quantity" className={labelClasses}>
                Quantity
              </label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                min={1}
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

            <div>
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

          <button
            type="submit"
            className="bg-primary text-cream hover:bg-primary-dark mt-8 w-full rounded-full px-8 py-3.5 text-[14px] font-semibold transition-colors"
          >
            Get a Quote
          </button>
        </form>
      </div>
    </section>
  );
}
