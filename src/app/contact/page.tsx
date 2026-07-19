"use client";

import { useState } from "react";
import { FAQ } from "@/components/sections/FAQ";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send, Globe, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "Wholesale Order",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", category: "Wholesale Order", message: "" });
    }, 4000);
  };

  return (
    <main className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-4xl"
        >
          <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
            connect with us
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-ink tracking-tight">
            Let&rsquo;s build a <br />
            <span className="text-rust italic font-normal">zero-waste partnership.</span>
          </h1>
        </motion.div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-24">
          
          {/* Left Column: Form & Quick Inquiries */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            
            {/* Main Form Card */}
            <div className="bg-cream-2/40 border border-stone-300/35 rounded-[2.5rem] p-8 md:p-12 shadow-sm flex-1">
              <h2 className="font-display text-2xl font-bold text-ink mb-6">
                Inquire Commercial Options
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-moss/10 border border-moss/20 rounded-2xl p-6 text-center text-moss"
                >
                  <h3 className="font-display font-bold text-lg mb-1">Message Sent Successfully!</h3>
                  <p className="text-xs leading-relaxed">
                    Thank you for reaching out. A circular packaging coordinator will contact you at your email address within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label htmlFor="name" className="text-xs uppercase tracking-wider text-ink/60 mb-2 font-semibold font-body">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-cream border border-stone-300/40 rounded-xl px-4 py-3 text-xs md:text-sm text-ink outline-none focus:ring-2 focus:ring-moss/45"
                        placeholder="Elena Rostova"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="company" className="text-xs uppercase tracking-wider text-ink/60 mb-2 font-semibold font-body">Company / Café</label>
                      <input
                        id="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-cream border border-stone-300/40 rounded-xl px-4 py-3 text-xs md:text-sm text-ink outline-none focus:ring-2 focus:ring-moss/45"
                        placeholder="Nordic Brew"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-xs uppercase tracking-wider text-ink/60 mb-2 font-semibold font-body">Business Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-cream border border-stone-300/40 rounded-xl px-4 py-3 text-xs md:text-sm text-ink outline-none focus:ring-2 focus:ring-moss/45"
                        placeholder="elena@nordicbrew.com"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="category" className="text-xs uppercase tracking-wider text-ink/60 mb-2 font-semibold font-body">Inquiry Purpose</label>
                      <select
                        id="category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="bg-cream border border-stone-300/40 rounded-xl px-4 py-3 text-xs md:text-sm text-ink outline-none focus:ring-2 focus:ring-moss/45 font-medium"
                      >
                        <option>Wholesale Order</option>
                        <option>Request Sample Kit</option>
                        <option>Sourcing Partnership</option>
                        <option>Media Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-xs uppercase tracking-wider text-ink/60 mb-2 font-semibold font-body">Message / Requirements</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-cream border border-stone-300/40 rounded-xl px-4 py-3 text-xs md:text-sm text-ink outline-none focus:ring-2 focus:ring-moss/45 resize-none"
                      placeholder="Tell us about your volume requirement, branding needs, or setup details..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-rust text-cream hover:bg-rust/95 hover:scale-[1.02] active:scale-[0.98] transition-all font-semibold rounded-full px-8 py-3.5 text-xs md:text-sm flex items-center justify-center gap-2 shadow-md w-full sm:w-auto"
                  >
                    Submit Inquiry
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Quick Inquiry Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a href="mailto:wholesale@ecolery.com" className="bg-cream border border-stone-300/30 rounded-3xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-full bg-rust/10 text-rust flex items-center justify-center shrink-0"><MessageSquare className="w-5 h-5" /></div>
                <div>
                  <h3 className="font-display font-semibold text-sm text-ink group-hover:text-rust transition-colors">Wholesale Support</h3>
                  <p className="text-[11px] text-ink/60 mt-1">Get custom quotes for franchise cafes and events.</p>
                </div>
              </a>
              <a href="mailto:partner@ecolery.com" className="bg-cream border border-stone-300/30 rounded-3xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-full bg-moss/10 text-moss flex items-center justify-center shrink-0"><Globe className="w-5 h-5" /></div>
                <div>
                  <h3 className="font-display font-semibold text-sm text-ink group-hover:text-moss transition-colors">Sourcing Teams</h3>
                  <p className="text-[11px] text-ink/60 mt-1">Sell agricultural byproducts or cork oak feedstocks.</p>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Company Info & Google Map placeholder */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Info Cards */}
            <div className="bg-cream-2 border border-stone-300/30 rounded-[2.5rem] p-8 md:p-10 shadow-sm space-y-8">
              <h2 className="font-display text-xl font-bold text-ink border-b border-stone-300/20 pb-4">
                Corporate Coordinates
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-rust shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-body font-bold text-ink text-sm">Headquarters</h4>
                    <p className="text-xs text-ink/70 leading-relaxed mt-1">
                      Nørrebrogade 124, 2200 <br />
                      Copenhagen, Denmark
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-moss shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-body font-bold text-ink text-sm">General Email</h4>
                    <p className="text-xs text-ink/70 mt-1">hello@ecolery.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-cork-dark shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-body font-bold text-ink text-sm">Phone Line</h4>
                    <p className="text-xs text-ink/70 mt-1">+45 82 91 30 22</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-moss-light shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-body font-bold text-ink text-sm">Support Hours</h4>
                    <p className="text-xs text-ink/70 mt-1">
                      Monday &ndash; Friday <br />
                      09:00 &ndash; 17:00 CET
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map placeholder */}
            <div className="bg-cream rounded-[2.5rem] border border-stone-300/30 p-4 shadow-sm overflow-hidden flex-1 flex flex-col justify-between min-h-[220px] relative group">
              <div className="absolute inset-0 bg-stone-100 pointer-events-none opacity-40" />
              
              {/* Stylized SVG Map vector representing Copenhagen grid */}
              <svg viewBox="0 0 100 100" fill="none" className="absolute inset-0 w-full h-full text-stone-300 pointer-events-none group-hover:scale-105 transition-transform duration-700">
                <line x1="10" y1="0" x2="30" y2="100" stroke="currentColor" strokeWidth="1" />
                <line x1="40" y1="0" x2="60" y2="100" stroke="currentColor" strokeWidth="1" />
                <line x1="80" y1="0" x2="90" y2="100" stroke="currentColor" strokeWidth="1.5" />
                <line x1="0" y1="30" x2="100" y2="40" stroke="currentColor" strokeWidth="1.2" />
                <line x1="0" y1="70" x2="100" y2="80" stroke="currentColor" strokeWidth="1" />
                
                {/* Node coordinates */}
                <circle cx="52" cy="62" r="4" fill="var(--color-rust)" className="animate-ping" style={{ animationDuration: "2s" }} />
                <circle cx="52" cy="62" r="3" fill="var(--color-rust)" />
              </svg>

              <div className="relative z-10 flex flex-col justify-end h-full p-4 w-full">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-ink/40 bg-cream border border-stone-300/40 px-3 py-1 rounded-full w-max">
                  Map View: Copenhagen Office
                </span>
                <span className="text-[10px] font-mono text-ink/50 mt-1 block">55.6983° N, 12.5539° E</span>
              </div>
            </div>

          </div>

        </div>

        {/* FAQ Accordion Section */}
        <FAQ />

      </div>
    </main>
  );
}
