import Image from "next/image";

const sdgGoals = [
  {
    number: 5,
    label: "Gender\nEquality",
    image: "Sustainable_Development_Goal_05GenderEquality.svg.png",
  },
  {
    number: 11,
    label: "Sustainable Cities\n& Communities",
    image: "E-WEB-Goal-11.png",
  },
  { number: 13, label: "Climate\nAction", image: "E-WEB-Goal-13.png" },
  {
    number: 14,
    label: "Life Below\nWater",
    image: "E_SDG_goals_icons-individual-rgb-14.png",
  },
  { number: 15, label: "Life on\nLand", image: "OIP (3).webp" },
  {
    number: 17,
    label: "Partnerships for\nthe Goals",
    image: "images (2).png",
  },
];

export function SDGStrip() {
  return (
    <section
      id="explore"
      className="bg-cream scroll-mt-28 border-y border-black/5 px-6 py-20 md:py-24"
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

        <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-5 lg:grid-cols-6">
          {sdgGoals.map(({ number, label, image }) => (
            <figure key={number} className="group">
              <div className="group-hover:border-primary/25 relative aspect-square w-full overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-black/5">
                <Image
                  src={`/sdg/${image}`}
                  alt={`UN Sustainable Development Goal ${number}: ${label.replace(/\n/g, " ")}`}
                  fill
                  sizes="(max-width: 1024px) 33vw, 16vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 text-center">
                <p className="font-display text-ink text-sm font-bold">{number}</p>
                <p className="font-body mt-1 text-[10px] leading-snug font-semibold tracking-[0.14em] whitespace-pre-line text-gray-500 uppercase">
                  {label}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
