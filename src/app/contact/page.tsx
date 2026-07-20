"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FAQ } from "@/components/sections/FAQ";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send, Globe, MessageSquare } from "lucide-react";

const PRODUCT_NAMES: Record<string, string> = {
  "coffee-cup": "The Edible Coffee Cup",
  "food-bowl": "The Organic Grain Bowl",
  "cutlery-spoon": "The Edible Table Spoon",
  "eco-packaging": "Zero-Waste Plant Wrapping"
};

function ContactForm() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product");
  
  const selectedProductName = productParam ? PRODUCT_NAMES[productParam] : "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: productParam ? "Commercial Sample Kits" : "Wholesale Options",
    message: selectedProductName 
      ? `We would like to request samples of: ${selectedProductName}. Please advise on sample availability and logistics.`
      : "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", category: "Wholesale Options", message: "" });
    }, 4500);
  };

  return (
    <div className="bg-cream-2 border border-clay/35 rounded-[3rem_1rem_4rem_2rem] p-8 md:p-12 shadow-sm flex-1">
      <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-clay font-bold border-b border-stone-300/40 pb-4 mb-8">
        <span>INQUIRY FORM // PARTNER_PORTAL</span>
        <span>SECURE SSL</span>
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-moss/10 border border-moss/20 rounded-2xl p-8 text-center text-moss"
        >
          <h3 className="font-display font-bold text-xl mb-2">Inquiry Submitted Successfully</h3>
          <p className="text-xs md:text-sm leading-relaxed max-w-md mx-auto text-ink/75">
            Thank you. We have logged your request. A circular packaging coordinator will contact you at your business address within 24 hours.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* Letter-style interactive fields */}
          <div className="font-display text-lg sm:text-xl md:text-2xl text-ink/90 leading-loose text-justify">
            Hello Ecolery, my name is{" "}
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Elena Rostova"
              className="border-b border-stone-400 bg-transparent text-ink placeholder:text-stone-400/50 focus:border-moss focus:placeholder:opacity-30 outline-none rounded-none py-1 px-1 transition-colors font-bold inline-block w-48 text-center"
              aria-label="Your full name"
            />{" "}
            and I represent{" "}
            <input
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Nordic Brew"
              className="border-b border-stone-400 bg-transparent text-ink placeholder:text-stone-400/50 focus:border-moss focus:placeholder:opacity-30 outline-none rounded-none py-1 px-1 transition-colors font-bold inline-block w-44 text-center"
              aria-label="Your company name"
            />
            . You can contact me at my business email{" "}
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="elena@brew.dk"
              className="border-b border-stone-400 bg-transparent text-ink placeholder:text-stone-400/50 focus:border-moss focus:placeholder:opacity-30 outline-none rounded-none py-1 px-1 transition-colors font-bold inline-block w-64 text-center"
              aria-label="Your business email"
            />
            . We are interested in exploring{" "}
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="border-b border-stone-400 bg-transparent text-ink focus:border-moss outline-none rounded-none py-1 px-2 font-bold cursor-pointer inline-block"
              aria-label="Inquiry category"
            >
              <option>Wholesale Options</option>
              <option>Commercial Sample Kits</option>
              <option>Sourcing Alliances</option>
              <option>Media Requests</option>
            </select>
            . Here are our specific volume requirements or questions:
          </div>

          <div className="flex flex-col">
            <textarea
              rows={3}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe your project, timeline, or branding requirements..."
              className="bg-cream border border-stone-300/40 rounded-2xl px-4 py-4 text-xs md:text-sm text-ink outline-none focus:ring-2 focus:ring-moss/45 resize-none placeholder:text-stone-400/60"
              aria-label="Detailed message"
            />
          </div>

          <button
            type="submit"
            className="bg-rust text-cream hover:bg-rust/95 hover:scale-[1.02] active:scale-[0.98] transition-all font-semibold rounded-full px-8 py-4 text-xs md:text-sm flex items-center justify-center gap-2 shadow-md w-full sm:w-auto"
          >
            Submit Letter Inquiry
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="py-20 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-4xl"
        >
          <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-6">
            contact coordinates & inquiries
          </span>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] text-ink tracking-tight">
            Connect with our <br />
            <span className="text-rust font-light italic">sourcing loop.</span>
          </h1>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-32">
          
          {/* Left Column: Letter-Style Interactive Form (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            <Suspense fallback={
              <div className="bg-cream-2 border border-clay/35 rounded-[3rem_1rem_4rem_2rem] p-8 md:p-12 animate-pulse h-[400px] flex items-center justify-center text-clay font-mono text-[10px] tracking-widest">
                LOADING PORTAL...
              </div>
            }>
              <ContactForm />
            </Suspense>

            {/* Quick-action email linkers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a href="mailto:wholesale@ecolery.com" className="bg-cream-2/40 border border-stone-300/30 rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-full bg-rust/10 text-rust flex items-center justify-center shrink-0"><MessageSquare className="w-5 h-5" /></div>
                <div>
                  <h3 className="font-display font-bold text-sm text-ink group-hover:text-rust transition-colors">Wholesale Support</h3>
                  <p className="text-[11px] text-ink/60 mt-1">Get custom quotes for franchise cafés and catering.</p>
                </div>
              </a>
              <a href="mailto:partner@ecolery.com" className="bg-cream-2/40 border border-stone-300/30 rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-full bg-moss/10 text-moss flex items-center justify-center shrink-0"><Globe className="w-5 h-5" /></div>
                <div>
                  <h3 className="font-display font-bold text-sm text-ink group-hover:text-moss transition-colors">Sourcing Teams</h3>
                  <p className="text-[11px] text-ink/60 mt-1">Sell agricultural byproducts or cork oak feedstocks.</p>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Office coordinates & SVG Copenhagen Grid Map (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Coordination sheet */}
            <div className="bg-cream-2 border border-clay/35 rounded-[2rem_3rem_1.5rem_4rem] p-10 shadow-sm space-y-8 flex-grow">
              <div className="w-full flex justify-between items-center text-[10px] font-mono tracking-widest text-clay font-bold border-b border-stone-300/40 pb-4">
                <span>COORDINATES // COPENHAGEN_HQ</span>
                <span>DENMARK</span>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-rust shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-body font-bold text-ink text-sm">Headquarters</h4>
                    <p className="text-xs text-ink/75 leading-relaxed mt-1">
                      Nørrebrogade 124, 2200 <br />
                      Copenhagen, Denmark
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-moss shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-body font-bold text-ink text-sm">General Email</h4>
                    <p className="text-xs text-ink/75 mt-1">hello@ecolery.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-clay shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-body font-bold text-ink text-sm">Phone Line</h4>
                    <p className="text-xs text-ink/75 mt-1">+45 82 91 30 22</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-moss-light shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-body font-bold text-ink text-sm">Support Hours</h4>
                    <p className="text-xs text-ink/75 mt-1">
                      Monday &ndash; Friday <br />
                      09:00 &ndash; 17:00 CET
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SVG Office Grid Map */}
            <div className="bg-cream rounded-[3rem_1.5rem_4rem_2rem] border border-stone-300/35 p-6 shadow-sm overflow-hidden min-h-[250px] relative group flex flex-col justify-end">
              <div className="absolute inset-0 bg-stone-100/40 pointer-events-none" />
              
              {/* SVG Denmark Copenhagen Grid */}
              <svg viewBox="0 0 100 100" fill="none" className="absolute inset-0 w-full h-full text-stone-300/80 pointer-events-none group-hover:scale-102 transition-transform duration-1000">
                <line x1="5" y1="0" x2="35" y2="100" stroke="currentColor" strokeWidth="0.8" />
                <line x1="45" y1="0" x2="55" y2="100" stroke="currentColor" strokeWidth="0.8" />
                <line x1="75" y1="0" x2="95" y2="100" stroke="currentColor" strokeWidth="1.2" />
                <line x1="0" y1="25" x2="100" y2="35" stroke="currentColor" strokeWidth="1" />
                <line x1="0" y1="65" x2="100" y2="75" stroke="currentColor" strokeWidth="0.8" />
                
                {/* Node coordinates map */}
                <circle cx="50" cy="50" r="4.5" fill="var(--color-rust)" className="animate-ping" style={{ animationDuration: "2.5s" }} />
                <circle cx="50" cy="50" r="3" fill="var(--color-rust)" />
              </svg>

              <div className="relative z-10 p-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-ink/40 bg-cream border border-stone-300/40 px-3.5 py-1 rounded-full inline-block">
                  Copenhagen Office View
                </span>
                <span className="text-[10px] font-mono text-ink/50 mt-1.5 block">55.6983° N, 12.5539° E</span>
              </div>
            </div>

          </div>

        </div>

        {/* FAQs Accordion */}
        <FAQ />

      </div>
    </main>
  );
}
