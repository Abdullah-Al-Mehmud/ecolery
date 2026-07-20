"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Leaf, 
  Layers, 
  Thermometer, 
  Recycle, 
  Coffee, 
  ShieldCheck, 
  Award,
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  ArrowRight,
  ShoppingCart
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, Product, SpecItem } from "@/lib/products";

const TABS: ("All" | "Tableware" | "Containers" | "Cutlery" | "Packaging")[] = [
  "All",
  "Tableware",
  "Containers",
  "Cutlery",
  "Packaging"
];

const ICON_MAP = {
  Leaf,
  Layers,
  Thermometer,
  Recycle,
  Coffee,
  ShieldCheck,
  Award
};

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<"All" | "Tableware" | "Containers" | "Cutlery" | "Packaging">("All");

  const filteredProducts = PRODUCTS.filter(
    (product) => activeTab === "All" || product.category === activeTab
  );

  return (
    <main className="py-20 md:py-32 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="mb-16">
          <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
            our collection
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-bold leading-[0.95] text-ink tracking-tight">
            Ecolery Products <br />
            <span className="text-moss font-light italic">catalog register.</span>
          </h1>
          <p className="text-ink/75 text-sm md:text-base leading-relaxed mt-6 max-w-xl">
            Each product is an engineering milestone in food science. Fully compliant with FDA food safety standards, structurally sound, and crafted to enrich soils instead of poisoning landfills.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-2 border-b border-stone-300/30 pb-6 mb-16 select-none">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-colors duration-300 focus:outline-none ${
                  isActive ? "text-cream" : "text-ink/65 hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-moss rounded-full z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>

        {/* Products List - 1 column list of wide split cards */}
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </main>
  );
}

// Reusable Product Card Component
export function ProductCard({ product }: { product: Product }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  return (
    <div className="bg-cream-2/70 border border-[#E8E4DC] rounded-[24px] p-6 lg:p-8 flex flex-col lg:flex-row gap-8 items-stretch group hover:-translate-y-1 hover:shadow-sm transition-all duration-300 w-full">
      {/* Left Column (55%) - Large rounded image gallery */}
      <div className="lg:w-[55%] w-full flex flex-col justify-between">
        <ProductGallery 
          product={product} 
          activeImageIdx={activeImageIdx} 
          setActiveImageIdx={setActiveImageIdx} 
        />
      </div>

      {/* Right Column (45%) - Product details & specifications list */}
      <div className="lg:w-[45%] w-full flex flex-col justify-between pl-0 lg:pl-4">
        <div>
          {/* Category label */}
          <div className="font-mono text-[9px] text-clay uppercase tracking-[0.25em] mb-2 leading-none">
            {product.category}
          </div>
          
          {/* Title */}
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight mb-3">
            {product.name}
          </h2>
          
          {/* Short description */}
          <p className="font-body text-xs md:text-sm text-ink/75 leading-relaxed mb-6 line-clamp-3 text-balance">
            {product.description}
          </p>

          {/* Outlined specifications list */}
          <ProductSpecifications specs={product.specList} />
        </div>

        {/* Call to actions */}
        <div className="mt-6">
          <ProductActions product={product} />
        </div>
      </div>
    </div>
  );
}

// Reusable Product Gallery Component
export function ProductGallery({ 
  product, 
  activeImageIdx, 
  setActiveImageIdx 
}: { 
  product: Product; 
  activeImageIdx: number; 
  setActiveImageIdx: React.Dispatch<React.SetStateAction<number>>; 
}) {
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Main visual */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8E4DC] bg-cream-2/30">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImageIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={product.images[activeImageIdx]}
              alt={`${product.name} view`}
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-w-5xl) 50vw, 100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Ambient Dark Gradient Layer at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

        {/* Floating Certification Badge with float animation */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-3 left-3 px-3.5 py-1.5 rounded-full bg-rust text-cream font-display font-medium text-[10px] tracking-wide shadow-sm z-10 flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cream animate-pulse" />
          {product.badgeText}
        </motion.div>

        {/* Counter */}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-[#FAF8F4]/90 backdrop-blur-sm border border-[#E8E4DC] font-mono text-[9px] text-ink font-bold z-10 shadow-sm">
          {String(activeImageIdx + 1).padStart(2, "0")} / {String(product.images.length).padStart(2, "0")}
        </div>

        {/* Slide controls */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FAF8F4]/85 border border-[#E8E4DC] flex items-center justify-center text-ink hover:bg-[#FAF8F4] hover:scale-105 active:scale-95 transition-all shadow-sm z-10 focus:outline-none"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FAF8F4]/85 border border-[#E8E4DC] flex items-center justify-center text-ink hover:bg-[#FAF8F4] hover:scale-105 active:scale-95 transition-all shadow-sm z-10 focus:outline-none"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Thumbnail strip */}
      <ProductThumbnailGallery 
        images={product.images} 
        activeImageIdx={activeImageIdx} 
        setActiveImageIdx={setActiveImageIdx} 
      />
    </div>
  );
}

// Reusable Product Thumbnail Gallery Component
export function ProductThumbnailGallery({
  images,
  activeImageIdx,
  setActiveImageIdx
}: {
  images: string[];
  activeImageIdx: number;
  setActiveImageIdx: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex gap-2.5 mt-3 overflow-x-auto pb-1 scrollbar-none snap-x">
      {images.map((img, idx) => (
        <button
          key={idx}
          onClick={(e) => { e.stopPropagation(); setActiveImageIdx(idx); }}
          className={`relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all duration-300 hover:scale-105 snap-start focus:outline-none ${
            activeImageIdx === idx ? "border-moss shadow-sm" : "border-transparent"
          }`}
        >
          <Image
            src={img}
            alt="thumbnail view"
            fill
            className="object-cover"
            sizes="64px"
            loading="lazy"
          />
        </button>
      ))}
    </div>
  );
}

// Reusable Product Specifications List Component
export function ProductSpecifications({ specs }: { specs: SpecItem[] }) {
  return (
    <div className="border-t border-[#E8E4DC] mb-4">
      {specs.map((spec, specIdx) => {
        const Icon = ICON_MAP[spec.iconName] || Leaf;
        return (
          <div 
            key={specIdx} 
            className="h-[64px] flex items-center border-b border-[#E8E4DC] gap-4"
          >
            {/* Outlined Icon Badge */}
            <div className="w-8 h-8 rounded-full border border-moss/20 flex items-center justify-center text-moss shrink-0">
              <Icon className="w-4 h-4 stroke-[1.5]" />
            </div>
            
            {/* Label and Value */}
            <div className="flex flex-col justify-center flex-grow">
              <span className="font-mono text-[8px] text-clay uppercase tracking-[0.2em] mb-0.5 leading-none">
                {spec.label}
              </span>
              <span className="font-body text-xs md:text-sm font-semibold text-ink leading-tight">
                {spec.value}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Reusable Product Actions Component
export function ProductActions({ product }: { product: Product }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-stretch select-none">
      <Link
        href={`/contact?product=${product.id}`}
        className="bg-moss text-cream hover:bg-moss/95 active:scale-[0.98] transition-all font-semibold rounded-full px-6 py-3 text-xs shadow-sm flex items-center justify-center gap-1.5 group hover:-translate-y-0.5"
      >
        <span>Request Sample</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </Link>
      
      <a
        href={product.pdfPath}
        download
        className="border border-moss/20 text-moss hover:bg-moss/5 active:scale-[0.98] transition-all font-semibold rounded-full px-6 py-3 text-xs flex items-center justify-center gap-1.5 focus:outline-none"
      >
        <FileText className="w-3.5 h-3.5" />
        <span>Download Spec Sheet</span>
      </a>
    </div>
  );
}
