"use client";

import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

export interface GalleryCategory {
  slug: string;
  label: string;
  images: string[];
}

interface GalleryImage {
  src: string;
  label: string;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const INITIAL_VISIBLE = 12;
const CHUNK_SIZE = 12;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function GallerySection({ categories }: { categories: GalleryCategory[] }) {
  const [active, setActive] = useState("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const allImages: GalleryImage[] = useMemo(
    () => categories.flatMap((c) => c.images.map((src) => ({ src, label: c.label }))),
    [categories],
  );

  const filtered = useMemo(() => {
    if (active === "all") return allImages;
    const category = categories.find((c) => c.slug === active);
    return category ? category.images.map((src) => ({ src, label: category.label })) : [];
  }, [active, allImages, categories]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleSelect = (slug: string) => {
    setActive(slug);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const handleLoadMore = () => {
    setVisibleCount((count) => Math.min(count + CHUNK_SIZE, filtered.length));
  };

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const goNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((i) => (i! + 1) % visible.length);
  }, [selectedIndex, visible.length]);

  const goPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((i) => (i! - 1 + visible.length) % visible.length);
  }, [selectedIndex, visible.length]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, closeLightbox, goNext, goPrev]);

  const pills = [{ slug: "all", label: "All" }, ...categories];

  return (
    <section className="bg-cream px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
                Gallery
              </span>
              <h1 className="font-fraunces text-ink mt-4 text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
                Moments from the <span className="text-primary-dark">journey.</span>
              </h1>
            </div>
            <p className="font-body text-ink/80 text-[15px] leading-relaxed font-semibold md:mb-1 md:max-w-sm md:justify-self-end">
              Field visits, partnerships, campaigns and recognition — a visual record of the mission
              in motion.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap items-center gap-3">
            {pills.map((pill) => (
              <button
                key={pill.slug}
                type="button"
                onClick={() => handleSelect(pill.slug)}
                aria-pressed={active === pill.slug}
                className={`rounded-full px-5 py-2.5 text-[13px] font-semibold transition-colors duration-300 ${
                  active === pill.slug
                    ? "bg-moss text-cream"
                    : "text-ink hover:bg-cream-2 border-black/10 bg-white hover:border-black/25"
                }`}
              >
                {pill.label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: EASE }}
          className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3"
        >
          {visible.map((img, idx) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              onClick={() => setSelectedIndex(idx)}
              className="bg-moss/10 group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
            >
              <ImageWithFallback
                src={img.src}
                alt={`${img.label} photo`}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                fallbackLabel={img.label}
              />
              <div className="from-ink/70 absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-90" />
              <figcaption className="absolute bottom-0 left-0 p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="font-body text-[11px] font-semibold tracking-[0.14em] text-white/80 uppercase">
                  {img.label}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        {hasMore && (
          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={handleLoadMore}
              className="bg-moss text-cream hover:bg-moss rounded-full px-8 py-3.5 text-[14px] font-semibold transition-colors"
            >
              Load more
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <>
            <motion.button
              key="lightbox-backdrop"
              type="button"
              aria-label="Close preview"
              onClick={closeLightbox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-ink/80 fixed inset-0 z-[80]"
            />
            <motion.div
              key="lightbox-content"
              role="dialog"
              aria-label="Image preview"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-8"
            >
              <button
                type="button"
                aria-label="Close preview"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-[100] rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:top-6 md:right-6"
              >
                <X className="h-6 w-6" strokeWidth={1.75} />
              </button>

              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-2 z-[100] rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:left-4 md:p-3"
              >
                <ChevronLeft className="h-6 w-6" strokeWidth={1.75} />
              </button>

              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-2 z-[100] rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:right-4 md:p-3"
              >
                <ChevronRight className="h-6 w-6" strokeWidth={1.75} />
              </button>

              <div className="relative h-full max-h-[80vh] w-full max-w-5xl">
                <ImageWithFallback
                  src={visible[selectedIndex].src}
                  alt={`${visible[selectedIndex].label} photo`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  fallbackLabel={visible[selectedIndex].label}
                />
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <p className="font-body text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
                  {visible[selectedIndex].label}
                  <span className="ml-3 text-white/50">
                    {selectedIndex + 1} / {visible.length}
                  </span>
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
