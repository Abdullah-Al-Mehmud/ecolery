"use client";

import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import {
  blogCategoryStyles,
  getRelatedBlogs,
  type BlogPost,
} from "@/lib/blogs";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="bg-primary fixed top-0 left-0 z-[100] h-[3px] w-full"
    />
  );
}

function RelatedCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="group border-black/5 bg-white overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <ImageWithFallback
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          fallbackLabel={post.category}
        />
      </div>
      <div className="p-4">
        <span
          className={`inline-block rounded-full px-2.5 py-0.5 text-[9px] font-semibold tracking-[0.14em] uppercase ${blogCategoryStyles[post.category]}`}
        >
          {post.category}
        </span>
        <h3 className="font-display text-ink mt-2 text-[14px] font-bold leading-snug tracking-tight">
          {post.title}
        </h3>
        <p className="font-body text-ink/50 mt-1.5 text-[12px] leading-relaxed font-semibold line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </a>
  );
}

export default function BlogDetailClient({
  post,
  prevPost,
  nextPost,
}: {
  post: BlogPost;
  prevPost: BlogPost;
  nextPost: BlogPost;
}) {
  const related = getRelatedBlogs(post.slug, 3);
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ReadingProgress />

      <main className="bg-cream min-h-screen">
        <article className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-3xl">
            <a
              href="/blog"
              className="text-ink/40 hover:text-ink inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-wider uppercase transition-colors duration-300"
            >
              <ArrowLeft className="h-3 w-3" strokeWidth={1.75} />
              All posts
            </a>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase ${blogCategoryStyles[post.category]}`}
                >
                  {post.category}
                </span>
                <span className="text-ink/35 text-[11px] font-semibold tracking-wider uppercase">
                  {post.date}
                </span>
                <span className="text-ink/15">·</span>
                <div className="flex items-center gap-1.5 text-ink/35">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
                  <span className="text-[11px] font-semibold tracking-wider uppercase">
                    {post.readTime}
                  </span>
                </div>
              </div>

              <h1 className="font-display text-ink mt-6 text-[1.75rem] leading-[1.1] font-bold tracking-tight md:text-[2.25rem]">
                {post.title}
              </h1>

              <p className="font-body text-ink/60 mt-4 text-[16px] leading-relaxed font-semibold">
                {post.excerpt}
              </p>
            </motion.div>

            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
              className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl"
            >
              <ImageWithFallback
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                fallbackLabel={post.category}
              />
            </motion.div>
          </div>

          <div className="mx-auto max-w-[680px]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-ink/75 mt-12 space-y-5 text-[16px] leading-[1.85] font-semibold md:text-[17px]"
            >
              {post.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </motion.div>

            <div className="border-ink/10 mt-14 border-t" />

            <nav className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={`/blog/${prevPost.slug}`}
                className="border-black/10 hover:border-primary/30 rounded-2xl border p-5 transition-colors duration-300"
              >
                <span className="text-ink/35 text-[10px] font-semibold tracking-wider uppercase">
                  Previous
                </span>
                <p className="font-display text-ink mt-1.5 text-[14px] font-bold leading-snug">
                  {prevPost.title}
                </p>
              </a>
              <a
                href={`/blog/${nextPost.slug}`}
                className="border-black/10 hover:border-primary/30 rounded-2xl border p-5 text-right transition-colors duration-300"
              >
                <span className="text-ink/35 text-[10px] font-semibold tracking-wider uppercase">
                  Next
                </span>
                <p className="font-display text-ink mt-1.5 text-[14px] font-bold leading-snug">
                  {nextPost.title}
                </p>
              </a>
            </nav>
          </div>
        </article>

        {related.length > 0 && (
          <section className="bg-cream-2 px-6 py-16 md:py-20">
            <div className="mx-auto max-w-6xl">
              <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
                Related posts
              </span>
              <h2 className="font-display text-ink mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                More from the blog
              </h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <RelatedCard key={r.slug} post={r} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
