"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { pressCategoryStyles, type PressArticle } from "@/lib/press";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface ArticleDetailModalProps {
  article: PressArticle | null;
  onClose: () => void;
}

export function ArticleDetailModal({ article, onClose }: ArticleDetailModalProps) {
  useEffect(() => {
    if (!article) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [article, onClose]);

  return (
    <AnimatePresence>
      {article && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-6"
        >
          <button
            type="button"
            aria-label="Close article"
            onClick={onClose}
            className="bg-ink/40 absolute inset-0 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: "tween", ease: EASE, duration: 0.4 }}
            className="bg-cream relative max-h-[85vh] w-full max-w-[680px] overflow-y-auto rounded-3xl shadow-2xl"
          >
            <div className="bg-cream/90 border-black/5 sticky top-0 z-10 flex items-center justify-between border-b px-6 py-4 backdrop-blur-sm md:px-10">
              <span
                className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${pressCategoryStyles[article.category]}`}
              >
                {article.category}
              </span>
              <button
                type="button"
                aria-label="Close article"
                onClick={onClose}
                className="bg-ink text-cream hover:bg-moss rounded-full p-2 transition-colors duration-300"
              >
                <X className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>

            <div className="px-6 py-10 md:px-10 md:py-12">
              <p className="font-body text-ink/50 text-[12px] font-semibold uppercase tracking-[0.14em]">
                {article.date}
              </p>

              <h2 className="font-fraunces text-ink mt-3 text-3xl leading-[1.15] font-semibold tracking-tight md:text-4xl">
                {article.headline}
              </h2>

              <div className="bg-primary mt-6 h-1 w-12 rounded-full" />

              <div className="mt-8 space-y-6">
                {article.body.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-body text-ink/80 text-[15px] leading-[1.7] font-semibold md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="border-black/5 mt-12 border-t pt-6">
                <p className="font-body text-ink/50 text-[12px] font-semibold uppercase tracking-[0.14em]">
                  Ecolery · Impact report 2025
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
