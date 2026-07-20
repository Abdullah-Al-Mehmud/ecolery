"use client";

import { Quote } from "lucide-react";

const spotlightQuotes = [
  {
    text: "The chocolate-flavored cup is an absolute cheat code — no leaks, zero waste, and a 56-calorie snack after my coffee. It solves the daily takeaway guilt I never knew I carried.",
    name: "University Student",
    role: "Student Review",
  },
  {
    text: "Paired with local cha, the vanilla cup held piping hot tea sturdily for over half an hour. No sogginess, no compromise — just a genuinely better way to drink.",
    name: "Tea Enthusiast",
    role: "Daily Commuter",
  },
  {
    text: "Switching to Ecolery helped us eliminate thousands of plastic cups from our operations. It's not just sustainable — it's a statement your team and clients actually notice.",
    name: "ESG Program Director",
    role: "Corporate Partner",
  },
];

const pullQuotes = [
  {
    text: "The cup held my tea for 30 to 40 minutes without going soggy. That alone sold me.",
    name: "Faiza Rahman",
    role: "Marketing Executive",
  },
  {
    text: "Zero waste left behind. I loved the concept from the first sip.",
    name: "Tanvir Hasan",
    role: "University Student",
  },
  {
    text: "We used Ecolery for a green week promo at the café. Now it's a permanent eco-menu item.",
    name: "Rakib Ahmed",
    role: "Café Owner",
  },
  {
    text: "Works great for cold drinks. It softens slightly with very hot fill, but overall brilliant.",
    name: "Imran Sarker",
    role: "Software Engineer",
  },
  {
    text: "The B2B pricing is reasonable and our customers love the concept. Positive response all around.",
    name: "Farzana Tabassum",
    role: "Restaurant Owner",
  },
  {
    text: "Used for a corporate CSR event — it became the talking point of the entire evening.",
    name: "Zubair Hossain",
    role: "Event Manager",
  },
  {
    text: "Held cold lacchi with zero leakage. This cup is built for Bangladesh summers.",
    name: "Reza Abdullah",
    role: "Startup Founder",
  },
  {
    text: "Used Ecolery at a birthday party instead of plastic cups. Guests were genuinely curious.",
    name: "Ruma Akter",
    role: "Homemaker",
  },
  {
    text: "Sparked real conversations about plastic pollution at our community event. That's impact.",
    name: "Nayeem Islam",
    role: "Environmental Activist",
  },
  {
    text: "Customer feedback is overwhelmingly positive. It sets our café apart from everywhere else.",
    name: "Arif Arnob",
    role: "Café Owner, Little Italy",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-cream px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
            What people say
          </span>
          <h2 className="font-display text-ink mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Real voices, <span className="text-primary-dark">real impact.</span>
          </h2>
        </div>

        {/* ---- Spotlight Tier ---- */}
        <div className="grid gap-6 md:grid-cols-3">
          {spotlightQuotes.map((q) => (
            <div
              key={q.name}
              className="rounded-3xl border border-black/5 bg-white p-8"
            >
              <Quote className="text-primary/30 h-8 w-8" strokeWidth={1.5} />
              <p className="font-body mt-6 text-[15px] leading-relaxed font-semibold text-gray-700">
                &ldquo;{q.text}&rdquo;
              </p>
              <div className="mt-8 border-t border-black/5 pt-6">
                <p className="font-display text-ink text-sm font-bold">{q.name}</p>
                <p className="font-body mt-0.5 text-[12px] font-semibold text-gray-500 uppercase tracking-wider">
                  {q.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ---- Pull Quotes Grid ---- */}
        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {pullQuotes.map((q) => (
            <div key={q.name} className="border-l border-black/10 pl-6">
              <p className="font-body text-ink text-[14px] leading-relaxed font-semibold">
                &ldquo;{q.text}&rdquo;
              </p>
              <div className="mt-4">
                <p className="font-display text-ink text-sm font-bold">{q.name}</p>
                <p className="font-body mt-0.5 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                  {q.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
