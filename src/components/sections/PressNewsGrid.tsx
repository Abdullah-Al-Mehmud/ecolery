"use client";

import { ArticleDetailModal } from "@/components/shared/ArticleDetailModal";
import { pressArticles, pressCategoryStyles, type PressArticle } from "@/lib/press";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function PressNewsGrid() {
  const [selected, setSelected] = useState<PressArticle | null>(null);

  const featured =
    pressArticles.find((article) => article.id === "generation-hope-thailand-win") ??
    pressArticles[0];
  const rest = pressArticles.filter((article) => article.id !== featured.id);

  return (
    <section className="bg-cream-2 px-6 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={itemVariants} className="max-w-2xl">
          <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
            Press &amp; news
          </span>
          <h2 className="font-fraunces text-ink mt-4 text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
            Ecolery in the world&apos;s <span className="text-primary-dark">headlines.</span>
          </h2>
          <p className="font-body text-ink/80 mt-6 max-w-lg text-[15px] leading-relaxed font-semibold">
            Grants, programs and campaigns, a running record of where the mission has taken us.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-14 flex items-center gap-3">
          <div className="bg-primary h-1 w-8 rounded-full" />
          <p className="font-body text-primary text-[12px] font-semibold tracking-[0.14em] uppercase">
            Featured story
          </p>
        </motion.div>

        <motion.button
          type="button"
          variants={itemVariants}
          onClick={() => setSelected(featured)}
          className="bg-moss text-cream group relative mt-6 block w-full overflow-hidden rounded-2xl p-8 text-left md:p-12"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(60%_100%_at_100%_0%,rgba(140,199,140,0.08),transparent)]"
          />
          <div
            aria-hidden
            className="bg-primary/10 absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <span
            aria-hidden
            className="font-fraunces text-cream/5 pointer-events-none absolute -right-6 -bottom-10 text-[9rem] leading-none font-semibold tracking-tight select-none md:text-[13rem]"
          >
            {featured.date.split(" ").pop()}
          </span>

          <div className="relative">
            <div className="flex flex-wrap items-center gap-4">
              <span
                className={`rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.14em] uppercase ${pressCategoryStyles[featured.category]}`}
              >
                {featured.category}
              </span>
              <span className="font-body text-[12px] font-semibold text-white/50">
                {featured.date}
              </span>
            </div>

            <h3 className="font-fraunces text-cream mt-8 max-w-2xl text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
              {featured.headline}
            </h3>

            <p className="font-body mt-6 max-w-xl text-[15px] leading-relaxed font-semibold text-white/70">
              {featured.excerpt}
            </p>

            <div className="mt-9 flex items-center gap-2">
              <span className="font-body text-primary-light text-[12px] font-bold tracking-[0.14em] uppercase">
                Read the story
              </span>
              <span className="border-primary-light/30 text-primary-light group-hover:bg-primary-light group-hover:text-moss rounded-full border p-2 transition-colors duration-300">
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </span>
            </div>
          </div>
        </motion.button>

        <motion.div variants={itemVariants} className="mt-16">
          <div className="flex items-center justify-between border-b border-black/10 pb-3">
            <p className="font-body text-ink/50 text-[12px] font-semibold tracking-[0.14em] uppercase">
              More stories
            </p>
            <p className="font-body text-ink/50 text-[12px] font-semibold">{rest.length} items</p>
          </div>

          {rest.map((article, index) => (
            <motion.button
              key={article.id}
              type="button"
              variants={itemVariants}
              onClick={() => setSelected(article)}
              className={`group grid w-full items-center gap-4 rounded-2xl py-8 text-left transition-colors duration-300 hover:bg-white/60 md:-mx-6 md:grid-cols-12 md:gap-8 md:px-6 ${
                index < rest.length - 1 ? "border-b border-black/10" : ""
              }`}
            >
              <span className="font-fraunces text-primary-dark text-3xl font-semibold tracking-tight md:col-span-2 md:text-5xl">
                {article.date.split(" ").pop()}
              </span>

              <div className="flex flex-col items-start gap-3 md:col-span-3">
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.14em] uppercase ${pressCategoryStyles[article.category]}`}
                >
                  {article.category}
                </span>
                <span className="font-body text-ink/50 text-[12px] font-semibold">
                  {article.date}
                </span>
              </div>

              <div className="md:col-span-6">
                <h3 className="font-fraunces text-ink group-hover:text-primary-dark text-xl leading-snug font-semibold transition-colors duration-300 md:text-2xl">
                  {article.headline}
                </h3>
                <p className="font-body text-ink/60 mt-2 hidden text-[13px] leading-relaxed font-semibold lg:block">
                  {article.excerpt}
                </p>
              </div>

              <div className="flex justify-end md:col-span-1">
                <span className="border-ink/15 bg-cream-2 text-ink group-hover:border-primary group-hover:bg-primary group-hover:text-cream rounded-full border p-2.5 transition-colors duration-300">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      <ArticleDetailModal article={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
