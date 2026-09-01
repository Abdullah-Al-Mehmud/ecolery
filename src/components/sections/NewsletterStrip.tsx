"use client";

import { useState, type FormEvent } from "react";

export function NewsletterStrip() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-moss border-t border-white/10 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-fraunces text-white text-3xl font-semibold tracking-tight md:text-4xl">
          Stay in the loop
        </h2>

        {submitted ? (
          <p className="font-body text-primary-light mt-6 text-[15px] font-semibold">
            Thanks, you&apos;re on the list. We&apos;ll be in touch.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="bg-cream text-ink placeholder:text-ink/40 focus:border-primary focus:ring-primary/30 w-full rounded-full border border-ink/20 px-6 py-3.5 text-[14px] font-semibold transition focus:outline-none focus:ring-2"
            />
            <button
              type="submit"
              className="bg-primary text-cream hover:bg-primary-dark rounded-full px-8 py-3.5 text-[14px] font-semibold whitespace-nowrap transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
