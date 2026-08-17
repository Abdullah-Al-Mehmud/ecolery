"use client";

import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import {
  blogs,
  blogCategoryStyles,
  type BlogCategory,
  type BlogPost,
} from "@/lib/blogs";
import { motion } from "framer-motion";
import { ArrowRight, Clock, ArrowLeft } from "lucide-react";
import { useMemo, useState } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const ALL_CATEGORIES: Array<"All" | BlogCategory> = [
  "All",
  "Award",
  "Impact",
  "Innovation",
  "Community",
  "Program",
];

function FeaturedHero({ post }: { post: BlogPost }) {
  return (
    <motion.a
      href={`/blog/${post.slug}`}
      variants={itemVariants}
      className="group border-black/5 bg-white overflow-hidden rounded-3xl border transition-all duration-500 hover:shadow-xl"
    >
      <div className="relative aspect-[16/9] overflow-hidden md:aspect-[21/9]">
        <ImageWithFallback
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          fallbackLabel={post.category}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 md:p-10">
          <span
            className={`inline-block rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase ${blogCategoryStyles[post.category]}`}
          >
            {post.category}
          </span>
          <h2 className="font-display text-white mt-3 text-xl font-bold leading-snug tracking-tight md:text-3xl">
            {post.title}
          </h2>
          <p className="font-body text-white/80 mt-3 max-w-2xl text-[14px] leading-relaxed font-semibold line-clamp-2 md:text-[15px]">
            {post.excerpt}
          </p>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-white/60">
              <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
              <span className="text-[11px] font-semibold tracking-wider uppercase">
                {post.readTime}
              </span>
            </div>
            <span className="text-white/60 text-[11px] font-semibold tracking-wider uppercase">
              {post.date}
            </span>
            <span className="text-white/90 ml-auto hidden items-center gap-1 text-[13px] font-semibold sm:flex">
              Read article
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.75} />
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.a
      href={`/blog/${post.slug}`}
      variants={itemVariants}
      className="group border-black/5 bg-white overflow-hidden rounded-3xl border transition-all duration-500 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <ImageWithFallback
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          fallbackLabel={post.category}
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3">
          <span
            className={`rounded-full px-2.5 py-0.5 text-[9px] font-semibold tracking-[0.14em] uppercase ${blogCategoryStyles[post.category]}`}
          >
            {post.category}
          </span>
          <span className="text-ink/35 text-[10px] font-semibold tracking-wider uppercase">
            {post.date}
          </span>
        </div>
        <h3 className="font-display text-ink mt-3 text-[15px] font-bold leading-snug tracking-tight">
          {post.title}
        </h3>
        <p className="font-body text-ink/55 mt-2 text-[13px] leading-relaxed font-semibold line-clamp-2">
          {post.excerpt}
        </p>
        <div className="border-ink/10 mt-4 flex items-center justify-between border-t pt-3">
          <div className="flex items-center gap-1.5 text-ink/35">
            <Clock className="h-3 w-3" strokeWidth={1.75} />
            <span className="text-[10px] font-semibold tracking-wider uppercase">
              {post.readTime}
            </span>
          </div>
          <span className="text-primary flex items-center gap-1 text-[12px] font-semibold transition-colors duration-300 group-hover:text-primary-dark">
            Read more
            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.75} />
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export default function BlogPageClient() {
  const [active, setActive] = useState<"All" | BlogCategory>("All");

  const filtered = useMemo(() => {
    if (active === "All") return blogs;
    return blogs.filter((b) => b.category === active);
  }, [active]);

  const [first, ...rest] = filtered;

  return (
    <main className="bg-cream min-h-screen">
      <section className="px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <a
            href="/"
            className="text-ink/40 hover:text-ink inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-wider uppercase transition-colors duration-300"
          >
            <ArrowLeft className="h-3 w-3" strokeWidth={1.75} />
            Home
          </a>

          <div className="mt-6">
            <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
              Blog
            </span>
            <h1 className="font-display text-ink mt-3 text-3xl leading-[1.1] font-bold tracking-tight md:text-5xl">
              Stories of <span className="text-primary-dark">impact.</span>
            </h1>
            <p className="font-body text-ink/65 mt-4 max-w-xl text-[15px] leading-relaxed font-semibold">
              Awards, programs, field work and the journey toward a plastic-free future — all in one place.
            </p>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mt-10 flex flex-wrap items-center gap-2.5"
          >
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-2 text-[12px] font-semibold transition-colors duration-300 ${
                  active === cat
                    ? "bg-moss text-cream"
                    : "text-ink hover:bg-cream-2 border-black/10 bg-white hover:border-black/25"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {first && (
            <motion.div
              key={`featured-${active}`}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="mt-10"
            >
              <FeaturedHero post={first} />
            </motion.div>
          )}

          {rest.length > 0 && (
            <motion.div
              key={`grid-${active}`}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {rest.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
