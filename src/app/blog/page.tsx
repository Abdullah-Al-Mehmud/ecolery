"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Clock, ArrowRight } from "lucide-react";

interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const ARTICLES: Article[] = [
  {
    id: "post-1",
    title: "The Molecular Chemistry of Edible Tableware",
    category: "Innovation",
    excerpt: "How high-pressure steam and natural agricultural cellulose cross-link to mold rigid, heat-safe vessels without synthetic resins, microplastics, or toxic glues.",
    author: "Dr. Amelia Vance",
    date: "July 12, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "post-2",
    title: "Why Cork Harvesting Actually Saves Forests",
    category: "Sourcing",
    excerpt: "Understanding the unique biology of Mediterranean cork oaks: how stripping bark stimulates tree cellular activity, causing it to absorb up to 5x more atmospheric carbon.",
    author: "Sofia Diaz",
    date: "June 28, 2026",
    readTime: "4 min read",
  },
  {
    id: "post-3",
    title: "Zero-Waste Cafe Guide: Moving Past Paper Cups",
    category: "Zero Waste",
    excerpt: "Commercial takeaway dining is overdue for a clean loop upgrade. We map out costs, customer feedback, and soil advantages when switching to edible cups.",
    author: "Nils Lindqvist",
    date: "May 15, 2026",
    readTime: "6 min read",
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
  }
];

const CATEGORIES = ["All", "Innovation", "Sourcing", "Zero Waste"];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = ARTICLES.find((a) => a.featured);
  const regularArticles = filteredArticles.filter((a) => !a.featured);

  return (
    <main className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Title */}
        <div className="mb-16">
          <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
            editorial & articles
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-ink tracking-tight">
            The Circular Journal
          </h1>
        </div>

        {/* Featured Article Hero (Render if search/filter is neutral) */}
        {activeCategory === "All" && searchQuery === "" && featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-moss text-cream rounded-[2.5rem] border border-moss-light/30 p-8 md:p-12 lg:p-16 mb-16 relative overflow-hidden group shadow-lg"
          >
            {/* Visual background lines */}
            <div className="absolute inset-0 bg-stone-900/10 opacity-30" style={{ backgroundImage: "radial-gradient(#ffffff 6%, transparent 7%)", backgroundSize: "14px 14px" }} />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 flex flex-col items-start">
                
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-rust text-cream text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
                    {featuredArticle.category}
                  </span>
                  <span className="text-xs text-cream-2/80 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 group-hover:text-cream-2 transition-colors">
                  {featuredArticle.title}
                </h2>

                <p className="text-cream-2/80 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center gap-6 text-xs text-cream/70">
                  <span className="flex items-center gap-1.5 font-semibold"><User className="w-4 h-4 text-rust" /> By {featuredArticle.author}</span>
                  <span>{featuredArticle.date}</span>
                </div>

              </div>

              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <a
                  href={`#read-${featuredArticle.id}`}
                  className="w-16 h-16 rounded-full bg-rust hover:bg-rust/90 flex items-center justify-center text-cream transition-transform duration-300 group-hover:scale-115 shadow-md"
                  aria-label="Read featured article"
                >
                  <ArrowRight className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-6 mb-12 border-b border-stone-300/30 pb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-moss text-cream shadow-sm"
                    : "bg-cream-2 text-ink/75 hover:bg-stone-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="flex items-center border border-stone-300/40 bg-cream-2/50 rounded-full px-4 py-2.5 max-w-sm w-full focus-within:ring-2 focus-within:ring-moss/40 transition-all">
            <Search className="w-4 h-4 text-ink/40 mr-2.5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-0 text-xs md:text-sm text-ink outline-none w-full placeholder:text-ink/35"
              aria-label="Search articles input"
            />
          </div>

        </div>

        {/* Article Cards Grid */}
        <AnimatePresence mode="wait">
          {filteredArticles.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-24"
            >
              {(activeCategory !== "All" || searchQuery !== ""
                ? filteredArticles
                : regularArticles
              ).map((article) => (
                <motion.article
                  key={article.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="bg-cream-2/40 hover:bg-cream-2 border border-stone-300/30 rounded-[2rem] p-8 flex flex-col justify-between group shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-xs uppercase tracking-wider text-moss font-semibold font-body bg-moss/5 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-[11px] text-ink/45 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-display text-xl md:text-2xl font-bold text-ink leading-snug mb-4 group-hover:text-moss transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-ink/75 text-xs md:text-sm leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-stone-300/30 flex justify-between items-center text-xs text-ink/60">
                    <span className="font-semibold text-ink/75 flex items-center gap-1.5"><User className="w-4 h-4 text-rust" /> {article.author}</span>
                    <span>{article.date}</span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-cream-2/30 rounded-3xl border border-stone-300/30 mb-24"
            >
              <h3 className="font-display text-lg font-bold text-ink mb-2">No articles found</h3>
              <p className="text-ink/60 text-xs">Try adjusting your filters or search query.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Newsletter Signup Banner */}
        <div className="bg-cream-2 border border-stone-300/30 rounded-[2.5rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-rust text-xs font-semibold uppercase tracking-wider bg-rust/5 px-3.5 py-1 rounded-full">Newsletter</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mt-4 mb-3">
              Delivered straight to your lab or café.
            </h2>
            <p className="text-ink/75 text-xs md:text-sm leading-relaxed">
              We publish raw sourcing progress, materials updates, and circular studies. No spam. Dissubscribe anytime.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="flex items-stretch border border-stone-300/40 bg-cream rounded-full w-full lg:w-max p-1.5 focus-within:ring-2 focus-within:ring-rust/50 transition-all max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-0 px-4 py-2 flex-grow text-xs text-ink outline-none focus:ring-0 placeholder:text-ink/35 min-w-[200px]"
              required
              aria-label="Email subscription input for blog"
            />
            <button
              type="submit"
              className="bg-rust text-cream hover:bg-rust/95 px-6 rounded-full text-xs font-semibold transition-colors flex items-center justify-center shrink-0"
              aria-label="Submit subscription form"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}
