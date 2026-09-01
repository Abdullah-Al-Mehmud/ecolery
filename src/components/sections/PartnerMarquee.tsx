import Image from "next/image";

type Partner = { src: string; alt: string };

// Give each logo a real, human name — screen readers (and SEO) read
// "Partner logo" 22 times otherwise. Fill in the ones marked TODO.
const partners: Partner[] = [
  { src: "/partners/1711098606440.jpg", alt: "TODO: Partner name" },
  { src: "/partners/1_aIfg2eNYTFNHKjZYPOZVbA.jpg", alt: "TODO: Partner name" },
  { src: "/partners/actionaid-logo-png_seeklogo-2957.png", alt: "ActionAid" },
  { src: "/partners/AIT_globe.jpg", alt: "Asian Institute of Technology" },
  { src: "/partners/Coat_of_arms_of_Germany.svg_-233x300.png", alt: "Federal Republic of Germany" },
  { src: "/partners/escap_logo.png", alt: "UNESCAP" },
  {
    src: "/partners/ict-division-future-is-here-logo-png_seeklogo-369049.png",
    alt: "ICT Division, Bangladesh",
  },
  { src: "/partners/images (3).jpg", alt: "TODO: Partner name" },
  { src: "/partners/impact link.jpg", alt: "Impact Link" },
  { src: "/partners/LOGO_ChildFund-International-2.png", alt: "ChildFund International" },
  { src: "/partners/OIP (1).webp", alt: "TODO: Partner name" },
  { src: "/partners/OIP (2).webp", alt: "TODO: Partner name" },
  { src: "/partners/orange.png", alt: "Orange" },
  { src: "/partners/R.png", alt: "TODO: Partner name" },
  { src: "/partners/SAJIDA-Logo-for-website_OUTLINED-2.png", alt: "SAJIDA Foundation" },
  { src: "/partners/save the children.png", alt: "Save the Children" },
  { src: "/partners/stellarWorm.png", alt: "StellarWorm" },
  { src: "/partners/tzu chi.png", alt: "Tzu Chi Foundation" },
  { src: "/partners/undp.png", alt: "UNDP" },
  { src: "/partners/unfcc.png", alt: "UNFCCC" },
  { src: "/partners/Unilever-Logo.png", alt: "Unilever" },
  { src: "/partners/yecap.jpg", alt: "YECAP" },
];

function LogoCard({ partner }: { partner: Partner }) {
  return (
    <div className="group/card flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl border border-black/[0.06] bg-white px-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-black/10 hover:shadow-[0_10px_24px_rgba(0,0,0,0.07)]">
      <div className="relative h-12 w-32">
        <Image
          src={encodeURI(partner.src)}
          alt={partner.alt}
          fill
          sizes="128px"
          className="object-contain opacity-100 grayscale-0 transition-all duration-300 group-hover/card:opacity-60 group-hover/card:grayscale"
        />
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction }: { items: Partner[]; direction: "left" | "right" }) {
  return (
    <div className="group/row relative overflow-hidden">
      <div className="from-cream-2 pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r to-transparent sm:w-40" />
      <div className="from-cream-2 pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l to-transparent sm:w-40" />

      <div
        className={`flex w-max items-center gap-6 group-hover/row:[animation-play-state:paused] ${
          direction === "left"
            ? "motion-safe:animate-marquee"
            : "motion-safe:animate-marquee-reverse"
        }`}
      >
        {[...items, ...items].map((p, i) => (
          <LogoCard key={`${p.src}-${i}`} partner={p} />
        ))}
      </div>
    </div>
  );
}

export function PartnerMarquee() {
  const mid = Math.ceil(partners.length / 2);
  const rowA = partners.slice(0, mid);
  const rowB = partners.slice(mid);

  return (
    <section className="bg-cream-2 border-y border-black/5 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="font-body text-ink/50 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.24em] uppercase">
            Partnered with
          </span>
        </div>

        <div className="mt-12 space-y-6">
          <MarqueeRow items={rowA} direction="left" />
          <MarqueeRow items={rowB} direction="right" />
        </div>
      </div>
    </section>
  );
}
