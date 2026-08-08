const endorsements = [
  {
    initials: "MMH",
    name: "Md. Muyeed Hasan",
    company: "Recover™",
    quote:
      "As a circular fashion model, we found Ecolery a true collaborator in packaging design — their commitment to sustainability aligns perfectly with our mission to close the loop.",
  },
  {
    initials: "RUMC",
    name: "Riyadh Uddin Mahmood Chowdhury",
    company: "Fabrilife",
    quote:
      "Ecolery enhanced our premium customer experience with durable, sustainable mailer bags. Their attention to quality and environmental responsibility is unmatched.",
  },
  {
    initials: "MKA",
    name: "Md. Kawser Ali",
    company: "Radisson Blu Dhaka",
    quote:
      "Ecolery's customized waste bags reflect positively on hotel cleanliness and guest experience. A small change that speaks volumes about our values.",
  },
];

export function PartnerEndorsements() {
  return (
    <section className="bg-moss relative overflow-hidden px-6 py-20 md:py-28">
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="font-body text-[13px] font-semibold tracking-[0.2em] text-white/50 uppercase">
            Trusted by
          </span>
          <h2 className="font-display mt-4 text-2xl font-bold text-white md:text-3xl">
            Partner organisations
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {endorsements.map((e) => (
            <div key={e.company} className="rounded-2xl bg-white/[0.06] p-8 backdrop-blur-sm">
              <div className="bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full">
                <span className="font-display text-primary text-sm font-bold">{e.initials}</span>
              </div>

              <div className="mt-6">
                <p className="font-display text-sm font-bold text-white">{e.name}</p>
                <p className="font-body mt-0.5 text-[12px] font-semibold tracking-wider text-white/50 uppercase">
                  {e.company}
                </p>
              </div>

              <p className="font-body mt-5 text-[14px] leading-relaxed font-semibold text-white/70">
                &ldquo;{e.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
