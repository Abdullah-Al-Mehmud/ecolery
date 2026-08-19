"use client";

import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { blogCategoryStyles, getFeaturedBlogs, type BlogPost } from "@/lib/blogs";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

function HeroCard({ post }: { post: BlogPost }) {
  return (
    <motion.a
      href={`/blog/${post.slug}`}
      variants={itemVariants}
      className="group relative overflow-hidden rounded-3xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl md:aspect-[2.2/1]">
        <ImageWithFallback
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(min-width: 768px) 66vw, 100vw"
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
          fallbackLabel={post.category}
        />
        <div className="from-ink/80 via-ink/30 to-ink/5 absolute inset-0 rounded-3xl bg-gradient-to-t" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
        <div className="flex items-center gap-3">
          <span
            className={`rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase ${blogCategoryStyles[post.category]}`}
          >
            {post.category}
          </span>
          <div className="flex items-center gap-1.5 text-white/50">
            <Clock className="h-3 w-3" strokeWidth={1.75} />
            <span className="text-[10px] font-semibold tracking-wider uppercase">
              {post.readTime}
            </span>
          </div>
        </div>

        <h3 className="font-display mt-4 max-w-2xl text-xl leading-[1.15] font-bold tracking-tight text-white md:text-3xl">
          {post.title}
        </h3>

        <p className="font-body mt-3 line-clamp-2 max-w-lg text-[14px] leading-relaxed font-semibold text-white/70 md:text-[15px]">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center gap-2">
          <span className="text-[13px] font-semibold text-white/90">Read article</span>
          <ArrowRight
            className="h-4 w-4 text-white/90 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={1.75}
          />
        </div>
      </div>
    </motion.a>
  );
}

function CompactCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.a
      href={`/blog/${post.slug}`}
      variants={itemVariants}
      className="group relative overflow-hidden rounded-2xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <ImageWithFallback
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
          fallbackLabel={post.category}
        />
        <div className="from-ink/70 via-ink/10 absolute inset-0 rounded-2xl bg-gradient-to-t to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
        <span
          className={`w-fit rounded-full px-2.5 py-0.5 text-[9px] font-semibold tracking-[0.14em] uppercase ${blogCategoryStyles[post.category]}`}
        >
          {post.category}
        </span>
        <h3 className="font-display mt-2 text-[14px] leading-snug font-bold tracking-tight text-white md:text-[15px]">
          {post.title}
        </h3>
        <div className="mt-2 flex items-center gap-2 text-white/50">
          <Clock className="h-3 w-3" strokeWidth={1.75} />
          <span className="text-[10px] font-semibold tracking-wider uppercase">
            {post.readTime}
          </span>
          <span className="text-white/20">·</span>
          <span className="text-[10px] font-semibold tracking-wider uppercase">{post.date}</span>
        </div>
      </div>
    </motion.a>
  );
}

export function BlogSection() {
  const [featured, ...rest] = getFeaturedBlogs(4);
  const sidePosts = rest.slice(0, 3);

  return (
    <section className="bg-cream px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
                  From the blog
                </span>
              </div>
              <h2 className="font-display text-ink mt-4 text-3xl leading-[1.1] font-bold tracking-tight md:text-4xl">
                Stories of <span className="text-primary-dark">impact.</span>
              </h2>
            </div>
            <a
              href="/blog"
              className="group text-ink hover:text-primary inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-300"
            >
              View all posts
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </a>
          </motion.div>

          {featured && (
            <motion.div variants={containerVariants} className="mt-10">
              <HeroCard post={featured} />
            </motion.div>
          )}

          <motion.div variants={containerVariants} className="mt-5 grid grid-cols-3 gap-4 md:gap-5">
            {sidePosts.map((post, i) => (
              <CompactCard key={post.slug} post={post} index={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
