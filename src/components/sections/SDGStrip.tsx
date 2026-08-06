import { Briefcase, Building2, CloudRain, Fish, Trees, Users } from "lucide-react";

const sdgGoals = [
  { number: 8, label: "Decent Work &\nEconomic Growth", icon: Briefcase },
  { number: 11, label: "Sustainable Cities\n& Communities", icon: Building2 },
  { number: 13, label: "Climate\nAction", icon: CloudRain },
  { number: 14, label: "Life Below\nWater", icon: Fish },
  { number: 15, label: "Life on\nLand", icon: Trees },
  { number: 17, label: "Partnerships for\nthe Goals", icon: Users },
];

export function SDGStrip() {
  return (
    <section
      id="explore"
      className="bg-cream border-y border-black/5 px-6 py-20 scroll-mt-28 md:py-24"
    >
      <div className="mx-auto max-w-6xl text-center">
        <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
          Aligned with the UN SDGs
        </span>
        <h2 className="font-display text-ink mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          Driving change where it <span className="text-primary-dark">matters most.</span>
        </h2>
        <p className="font-body mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed font-semibold text-gray-600">
          Driven by a passion for environmental advocacy and community transformation, we combine
          eco-friendly innovation with deep social impact by creating green jobs for underprivileged
          rural women and educating the next generation on sustainability.
        </p>

        <div className="mt-14 grid grid-cols-3 gap-6 sm:grid-cols-6">
          {sdgGoals.map(({ number, label, icon: Icon }) => (
            <div key={number} className="flex flex-col items-center gap-3">
              <div className="border-primary/20 bg-primary/5 flex h-16 w-16 items-center justify-center rounded-2xl border">
                <Icon className="text-primary h-7 w-7" strokeWidth={1.75} />
              </div>
              <div className="text-center">
                <p className="font-display text-ink text-sm font-bold">{number}</p>
                <p className="font-body mt-1 text-[10px] leading-snug font-semibold text-gray-500 whitespace-pre-line uppercase tracking-wider">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
