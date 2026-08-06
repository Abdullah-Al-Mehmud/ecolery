"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const years = ["2023", "2024", "2025"];
const cups = [12000, 62000, 160000];
const orders = [900, 5200, 19400];

const L = 56;
const R = 56;
const T = 28;
const B = 44;
const W = 640;
const H = 320;
const chartW = W - L - R;
const chartH = H - T - B;

const xs = years.map((_, i) => L + (chartW * i) / (years.length - 1));
const cupsMax = 160000;
const ordersMax = 20000;
const cupsY = cups.map((v) => T + chartH * (1 - v / cupsMax));
const ordersY = orders.map((v) => T + chartH * (1 - v / ordersMax));
const gridYs = [T, T + chartH * 0.25, T + chartH * 0.5, T + chartH * 0.75, T + chartH];
const leftTicks = ["160k", "120k", "80k", "40k", "0"];
const rightTicks = ["20k", "15k", "10k", "5k", "0"];

const cupsLinePath = `M ${xs[0]} ${cupsY[0]} L ${xs[1]} ${cupsY[1]} L ${xs[2]} ${cupsY[2]}`;
const ordersLinePath = `M ${xs[0]} ${ordersY[0]} L ${xs[1]} ${ordersY[1]} L ${xs[2]} ${ordersY[2]}`;
const cupsAreaPath = `${cupsLinePath} L ${xs[2]} ${H - B} L ${xs[0]} ${H - B} Z`;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const dotVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE } },
};

const summary = [
  { value: "12k → 160k", label: "cups replaced" },
  { value: "13×", label: "growth since 2023" },
  { value: "900 → 19.4k", label: "orders delivered" },
];

export function ImpactChart() {
  return (
    <section className="bg-cream px-6 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="mx-auto max-w-6xl"
      >
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <motion.div variants={itemVariants}>
            <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
              Growth
            </span>
            <h2 className="font-fraunces text-ink mt-4 text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
              Impact, year over <span className="text-primary-dark">year.</span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="font-body text-ink/80 max-w-sm text-[15px] leading-relaxed font-semibold md:justify-self-end">
              Two curves, one story: every order delivered becomes cups pulled out of the
              landfill cycle.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-black/5 bg-white relative mt-16 rounded-2xl border p-6 shadow-sm md:p-10"
        >
          <div className="mb-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
            <div>
              <h3 className="font-fraunces text-ink text-2xl font-semibold tracking-tight">
                Three years of growth
              </h3>
              <p className="font-body text-ink/50 mt-1 text-[12px] font-semibold">
                2023 → 2025
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2.5">
                <span className="bg-primary-light h-2.5 w-2.5 rounded-full" />
                <span className="font-body text-ink/70 text-[13px] font-semibold">Cups replaced</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="bg-primary h-2.5 w-2.5 rounded-full" />
                <span className="font-body text-ink/70 text-[13px] font-semibold">Orders delivered</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Growth of cups replaced and orders delivered, 2023 to 2025">
              <defs>
                <linearGradient id="cupsFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4fc077" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#4fc077" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {gridYs.map((y, i) => (
                <g key={y}>
                  <line x1={L} x2={W - R} y1={y} y2={y} className="stroke-cream-2" strokeWidth="1" />
                  <text x={L - 12} y={y + 3.5} textAnchor="end" className="fill-ink/50 font-body text-[10px] font-semibold">
                    {leftTicks[i]}
                  </text>
                  <text x={W - R + 12} y={y + 3.5} textAnchor="start" className="fill-ink/50 font-body text-[10px] font-semibold">
                    {rightTicks[i]}
                  </text>
                </g>
              ))}

              <motion.path
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: EASE }}
                d={cupsAreaPath}
                fill="url(#cupsFill)"
              />

              <motion.path
                d={cupsLinePath}
                fill="none"
                stroke="#4fc077"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.6, ease: EASE }}
              />

              <motion.path
                d={ordersLinePath}
                fill="none"
                stroke="#1e9e5a"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.6, ease: EASE, delay: 0.3 }}
              />

              <motion.g initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} transition={{ delayChildren: 1 }}>
                {cupsY.map((y, i) => (
                  <motion.circle
                    key={`cups-${i}`}
                    variants={dotVariants}
                    cx={xs[i]}
                    cy={y}
                    r="4"
                    fill="#4fc077"
                  />
                ))}
                {ordersY.map((y, i) => (
                  <motion.circle
                    key={`orders-${i}`}
                    variants={dotVariants}
                    cx={xs[i]}
                    cy={y}
                    r="4"
                    fill="#1e9e5a"
                  />
                ))}
              </motion.g>

              {years.map((year, i) => (
                <text
                  key={year}
                  x={xs[i]}
                  y={H - 14}
                  textAnchor="middle"
                  className="fill-ink font-body text-[11px] font-semibold"
                >
                  {year}
                </text>
              ))}
            </svg>

            <div className="border-white/10 bg-moss text-cream absolute top-6 left-[3.5rem] hidden rounded-2xl border px-5 py-4 shadow-lg md:block">
              <p className="font-fraunces text-primary-light text-3xl font-semibold tracking-tight">13×</p>
              <p className="font-body text-white/50 mt-1 text-[11px] font-semibold tracking-[0.14em] uppercase">
                growth since 2023
              </p>
            </div>
          </div>

          <div className="border-black/5 mt-8 grid grid-cols-1 divide-y divide-black/5 border-t sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {summary.map((item) => (
              <div key={item.label} className="py-5 pr-6 sm:px-6 sm:first:pl-0 sm:last:pr-0">
                <p className="font-fraunces text-primary-dark text-2xl font-semibold tracking-tight">
                  {item.value}
                </p>
                <p className="font-body text-ink/50 mt-1 text-[11px] font-semibold tracking-[0.14em] uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <p className="font-body text-ink/50 mt-4 text-[12px] font-semibold">
            Cumulative figures through December 2025.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
