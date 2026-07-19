"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Clock, ArrowRight, BookOpen } from "lucide-react";

interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  popular?: boolean;
}

const ARTICLES_DATABASE: Article[] = [
  {
    id: "post-1",
    title: "The Molecular Chemistry of Edible Tableware",
    category: "Innovation",
    excerpt: "How high-pressure steam and natural agricultural cellulose cross-link to mold rigid, heat-safe vessels without synthetic resins, microplastics, or toxic glues.",
    author: "Dr. Amelia Vance",
    date: "July 12, 2026",
    readTime: "5 min read",
  },
  {
    id: "post-2",
    title: "Why Cork Harvesting Actually Saves Forests",
    category: "Sourcing",
    excerpt: "Understanding the unique biology of Mediterranean cork oaks: how stripping bark stimulates tree cellular activity, causing it to absorb up to 5x more atmospheric carbon.",
    author: "Sofia Diaz",
    date: "June 28, 2026",
    readTime: "4 min read",
    popular: true,
  },
  {
    id: "post-3",
    title: "Zero-Waste Cafe Guide: Moving Past Paper Cups",
    category: "Zero Waste",
    excerpt: "Commercial takeaway dining is overdue for a clean loop upgrade. We map out costs, customer feedback, and soil advantages when switching to edible cups.",
    author: "Nils Lindqvist",
    date: "May 15, 2026",
    readTime: "6 min read",
    popular: true,
  },
  {
    id: "post-4",
    title: "Seaweed Starches: The Future of Flexible Wrapping",
    category: "Innovation",
    excerpt: "Flexible plastic bags are a massive ecological issue. Discover how brown seaweed extract is synthesized into clear, soluble protective wrappers that degrade in 14 days.",
    author: "Dr. Amelia Vance",
    date: "April 09, 2026",
    readTime: "4 min read",
  },
  {
    id: "post-5",
    title: "Understanding the Global Biodegradation Protocols",
    category: "Sourcing",
    excerpt: "Not all bioplastics are created equal. We break down the differences between industrial composting requirements (PLA) and backyard-safe compostables.",
    author: "Sofia Diaz",
    date: "March 22, 2026",
    readTime: "7 min read",
    popular: true,
  }
];

const CATEGORIES = ["All", "Innovation", "Sourcing", "Zero Waste"];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = ARTICLES_DATABASE.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = ARTICLES_DATABASE[0];
  const remainingArticles = filteredArticles.filter((a) => a.id !== featuredArticle.id);
  const popularArticles = ARTICLES_DATABASE.filter((a) => a.popular);

  return (
    <main className="py-20 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Heading */}
        <div className="mb-20">
          <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
            journal & editorials
          </span>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] text-ink tracking-tight">
            The Circular Journal
          </h1>
          <p className="text-ink/75 text-sm md:text-base leading-relaxed mt-6 max-w-xl">
            Thought leadership, biological studies, and hospitality manuals from our materials lab.
          </p>
        </div>

        {/* Large Broadside Featured Cover */}
        {activeCategory === "All" && searchQuery === "" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-stone-300 pb-16 mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-4 text-xs font-semibold text-moss">
                  <span className="bg-rust text-cream text-[10px] uppercase font-bold tracking-widest px-3.5 py-1 rounded-full">
                    {featuredArticle.category}
                  </span>
                  <span>{featuredArticle.date}</span>
                </div>
                
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-tight tracking-tight">
                  {featuredArticle.title}
                </h2>
                
                {/* Comfortable reading line length */}
                <p className="text-ink/80 text-sm md:text-base leading-relaxed max-w-prose">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center gap-6 text-xs text-ink/65 pt-4">
                  <span className="flex items-center gap-1.5 font-bold"><User className="w-4 h-4 text-rust" /> By {featuredArticle.author}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featuredArticle.readTime}</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end py-4">
                <a
                  href={`#read-${featuredArticle.id}`}
                  className="w-16 h-16 rounded-full bg-rust hover:bg-rust/95 text-cream flex items-center justify-center transition-all hover:scale-105 shadow-md group"
                  aria-label="Read featured article"
                >
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

            </div>
          </motion.div>
        )}

        {/* Categories Tab & Search (Journal Ledger) */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-6 mb-16 border-b border-stone-300/30 pb-8 select-none">
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-moss text-cream shadow-sm"
                    : "bg-cream-2 text-ink/75 hover:bg-stone-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center border border-stone-300/40 bg-cream-2/50 rounded-full px-4.5 py-2.5 max-w-sm w-full focus-within:ring-2 focus-within:ring-moss/45 transition-all">
            <Search className="w-4 h-4 text-ink/40 mr-2.5" />
            <input
              type="text"
              placeholder="Search journals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-0 text-xs md:text-sm text-ink outline-none w-full placeholder:text-ink/35"
              aria-label="Search journals input"
            />
          </div>

        </div>

        {/* Asymmetrical Broadsheet Layout (Left: Post catalog, Right: Sticky sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Asymmetric Post Feed (col-span-8) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="popLayout">
              {filteredArticles.length > 0 ? (
                <div className="space-y-12">
                  {/* Alternating list mapping */}
                  {(activeCategory !== "All" || searchQuery !== ""
                    ? filteredArticles
                    : remainingArticles
                  ).map((article) => {
                    return (
                      <motion.article
                        key={article.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className={`bg-cream-2/30 hover:bg-cream-2 border border-stone-300/30 rounded-[2.5rem_1rem_2.5rem_1rem] p-8 md:p-12 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group`}
                      >
                        
                        <div>
                          <div className="flex items-center gap-4 text-xs font-semibold text-moss mb-4">
                            <span className="bg-moss/5 px-3 py-1 rounded-full uppercase tracking-wider text-[10px]">
                              {article.category}
                            </span>
                            <span className="text-[11px] text-ink/45 flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {article.readTime}
                            </span>
                          </div>

                          <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-4 group-hover:text-moss transition-colors leading-snug">
                            {article.title}
                          </h3>

                          <p className="text-ink/75 text-xs md:text-sm leading-relaxed max-w-prose mb-8">
                            {article.excerpt}
                          </p>
                        </div>

                        <div className="pt-6 border-t border-stone-300/30 flex justify-between items-center text-xs text-ink/65">
                          <span className="font-bold text-ink/85 flex items-center gap-1.5">
                            <User className="w-4 h-4 text-rust" /> {article.author}
                          </span>
                          <span>{article.date}</span>
                        </div>

                      </motion.article>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-24 bg-cream-2/30 rounded-3xl border border-stone-300/30">
                  <h3 className="font-display text-xl font-bold text-ink mb-2">No journals found</h3>
                  <p className="text-ink/65 text-xs">Try adjusting your filters or keyword query.</p>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Sticky Sidebar Highlights & Newsletter (col-span-4) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-8">
            
            {/* Popular Highlights card */}
            <div className="bg-cream-2 border border-stone-300/30 rounded-[2rem] p-8 shadow-sm">
              <h3 className="font-display font-bold text-lg text-ink mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-rust" />
                Popular Highlights
              </h3>

              <div className="space-y-6">
                {popularArticles.map((article, idx) => (
                  <a
                    key={article.id}
                    href={`#read-${article.id}`}
                    className="block group border-b border-stone-300/30 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="font-mono text-xs text-clay font-bold block">0{idx + 1} {"//"} {article.category}</span>
                    <h4 className="font-display font-bold text-sm text-ink leading-snug mt-1.5 group-hover:text-rust transition-colors">
                      {article.title}
                    </h4>
                  </a>
                ))}
              </div>
            </div>

            {/* Subscriptions card */}
            <div className="bg-moss text-cream rounded-[2rem] p-8 border border-moss-light/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-stone-900/10 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 6%, transparent 7%)", backgroundSize: "10px 10px" }} />
              
              <div className="relative z-10 space-y-4">
                <span className="text-[9px] font-mono uppercase bg-cream/10 px-3 py-1 rounded-full text-cream-2 inline-block">Wholesale News</span>
                <h3 className="font-display text-xl font-bold leading-tight">
                  Delivered straight to your café or office.
                </h3>
                <p className="text-cream-2/80 text-xs leading-relaxed mb-4">
                  Access raw sourcing indexes, case studies, and notification on wholesales samples launch.
                </p>

                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2 mt-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-cream/10 border border-cream/20 rounded-full px-4 py-2.5 text-xs text-cream outline-none focus:ring-1 focus:ring-rust placeholder:text-cream-2/40"
                    required
                    aria-label="Email subscription input for sidebar"
                  />
                  <button
                    type="submit"
                    className="bg-rust text-cream hover:bg-rust/95 font-semibold rounded-full py-2.5 text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
