# Ecolery — Full Design System Reference

This is the authoritative, complete design reference for the Ecolery site. Read this when the quick reference in SKILL.md isn't enough — e.g. when building a new section, working on animation, or needing exact codebase context.

## 1. Project Overview

Ecolery is a Next.js 16 (App Router, RSC) marketing site for a Dhaka-based startup selling cork-pressed, edible, fully compostable cups/cutlery. Brand voice: eco/sustainability, warm & organic.

Homepage section order (`src/app/page.tsx`):
Hero → Impact (About + Certifications + Metrics + Stats + Bento gallery) → Comparison (Plastic vs Ecolery) → Careers CTA → Partner Endorsements → Partner Marquee → SDG Strip → Testimonials → Site Footer

## 2. Tech Stack

- Framework: Next.js 16.2.10, React 19.2, TypeScript strict
- Styling: Tailwind CSS v4 (CSS-first config via `@theme` in `globals.css`, no `tailwind.config.js`), `@tailwindcss/postcss`
- UI: shadcn/ui (style `base-nova`, baseColor `neutral`) built on `@base-ui/react`; `class-variance-authority`; `cn()` helper (clsx + tailwind-merge) in `src/lib/utils.ts`
- Icons: `lucide-react` (`strokeWidth={1.75}` standard for feature icons)
- Animation stack: Lenis (smooth scroll, duration 1.2, ease `1.001 - 2^(-10t)`, synced to GSAP ScrollTrigger via `gsap.ticker`), GSAP + ScrollTrigger + `@gsap/react`, Framer Motion (micro-interactions)
- Images: `next/image`, remotePatterns allows picsum.photos
- Fonts: Google via `next/font/google`

## 3. Design Tokens (`src/app/globals.css` `@theme`)

| Token | Hex | Role |
|---|---|---|
| cream | #f6f2e9 | Page background (base) |
| cream-2 | #efe9da | Alternate light band (marquee) |
| ink | #1c2018 | Primary text / near-black |
| primary | #1e9e5a | Brand green (buttons, accents, links) |
| primary-light | #4fc077 | Lighter green (gradient start) |
| primary-dark | #0f6b3d | Deeper green (gradient end, headline highlights) |
| moss | #33452b | Dark green section backgrounds |
| rust | #c1622b | Warm accent (declared, not currently used) |
| cork | #c08a54 | Warm accent (declared, not currently used) |
| --animate-marquee | marquee 40s linear infinite | Animation token |

Hardcoded extras:
- Footer bg: `#07120D` (very dark green-black)
- Comparison left bg gradient: `linear-gradient(180deg, #EDF0F1 0%, #DADFE1 100%)`
- Footer radial glow: `radial-gradient(60% 100% at 50% 0%, rgba(140,199,140,0.06), transparent)`

Fonts: `--font-display`: Sora (weights 400–700) for headings/numbers/logo text; `--font-body`: Manrope (weights 400–600) for everything else. Body has `antialiased`, `font-body`.

## 4. Typography Scale

- Eyebrow/section kicker: `text-[13px] font-semibold uppercase tracking-[0.2em]` — always `text-primary` on light, `text-white/50` on dark
- H1 (hero): `text-[2.75rem] leading-[1.05] font-bold tracking-tight sm:text-6xl md:text-7xl`, `font-display`
- H2 (section): `text-3xl md:text-4xl` or `md:text-5xl`, `leading-[1.1]`, `font-bold tracking-tight`
- H3 (sub-bands): `text-2xl md:text-3xl`
- Body copy: `text-[15px] leading-relaxed font-semibold`, color `text-gray-600`/`text-gray-700` on light, `text-white/70` on dark
- Big stats: `text-4xl md:text-5xl font-bold` (display font)
- Small uppercase labels: `text-[10px]–[13px] font-semibold uppercase tracking-[0.14em]`/`[0.18em]`, muted (`text-gray-500`, `text-white/50`, `text-white/30`)
- Nav links: `text-[13px] font-semibold uppercase tracking-[0.08em] text-gray-600 hover:text-ink`
- Headline highlight pattern: keywords wrapped in `<span className="text-primary-dark">` (or `text-white/60` in footer). Example: "Eat, Re-eat and Forget."
- Tailwind gray scale used for secondary text: gray-500/600/700/900; black/white opacity modifiers (`text-black/60`, `text-white/85`, `border-black/5`, `border-black/10`) throughout.

## 5. Spacing System (all Tailwind v4 defaults)

- Section vertical rhythm: `py-24 md:py-32` (major), `py-20 md:py-28` (bands), `py-16`, `py-10` (strips). Horizontal gutters always `px-6`.
- Content containers: `max-w-6xl` (standard), `max-w-3xl` (centered CTA), body copy `max-w-md`/`max-w-lg`/`max-w-2xl`
- Headline→body margin: `mt-6`; eyebrow→headline: `mt-4`; lists/CTAs below copy: `mt-8`–`mt-10`; grids below header: `mt-10`–`mt-14`/`mt-16`
- Grid gaps: `gap-5`/`gap-6` (cards), `gap-10` (stat columns), `gap-12`/`gap-14` (two-col sections)
- Hairline dividers: `border-black/5` (light) or `border-white/10` (dark), used on `border-t`, `border-b`, `border-y`
- Dark-surface cards: `border-white/10 bg-white/[0.06] backdrop-blur-sm rounded-2xl p-8` (metrics + endorsements)

## 6. Border Radii

- `rounded-full` — pill buttons, avatars, role-selector pills
- `rounded-2xl` — SDG icon tiles, dark metric/endorsement cards
- `rounded-3xl` — bento gallery cards, testimonial spotlight cards
- `rounded-[2rem]` — large feature image (about section)
- `rounded-xl` — marquee logo chips
- `rounded-lg` — shadcn Button default

## 7. Buttons / CTAs

Primary site CTA (pill): `bg-ink text-cream hover:bg-moss rounded-full px-8 py-3.5 text-[14px] font-semibold transition-colors` (Navbar variant: `px-5 py-2.5 text-[13px] font-medium`). Text on dark surfaces: `bg-white/[0.04] border border-white/15 hover:bg-white/[0.08] rounded-full` (currently commented out in code).

shadcn Button (`src/components/ui/button.tsx`, Base UI primitive): variants `default` (`bg-primary text-primary-foreground hover:bg-primary/80`), `outline`, `secondary`, `ghost`, `destructive`, `link`; sizes `default`/`xs`/`sm`/`lg`/`icon`/`icon-xs`/`icon-sm`/`icon-lg`. References `--radius-md`, ring/foreground tokens that are **not defined** in globals.css — default `bg-primary` is the only variant actually styled by brand tokens. Be careful using the other variants without checking they render correctly.

## 8. Section-by-Section Design Structure

**Hero** — `bg-cream min-h-screen`; floating glow blob `bg-primary/20 rounded-full blur-[110px]` at 38% top center (420px); Navbar; centered headline + sub; large product image `cup2.png` (~850px) overflowing bottom; bottom fade `bg-gradient-to-t from-white/25`.

**Impact** (`template/ImpactSection.tsx`) — 5 stacked bands:
1. About: 2-col grid, `rounded-[2rem]` `aspect-[4/5]` image (`cup.png`) w/ fallback component `ImageWithFallback` (`bg-moss/10` placeholder).
2. Certification strip: `border-y border-black/5`, 6 lucide icons `text-primary h-6 w-6 strokeWidth 1.75`.
3. Metrics band: `bg-moss`, dark glass cards, values like "180 days / 100% / 5.5kgs CFP".
4. Stats: `text-primary-dark` numbers (160,000+ / 962+ / 1,500+).
5. Bento gallery: `grid-cols-3 auto-rows-[180px] md:auto-rows-[220px] gap-5`, gridTemplateAreas: `"a b c" / "a d d" / "e f f"`, picsum images, hover `scale-105 duration-700`, caption overlay `from-ink/85 bg-gradient-to-t`.

**Comparison** — split `md:grid-cols-2`; left = grey gradient bg + X-marked plastic cons (black-on-light), right = `bg-primary` + Check-marked Ecolery pros (white-on-green); oversized ghost words PLASTIC/ECOLERY (`text-black/[0.04]` / `text-white/[0.06]`); merged product image `plastic-ecolery.png` locked to center seam; decorative `bg-white/30 w-px` seam line.

**CareersCTA** — centered `max-w-3xl`; pill "View Open Roles"; interactive role-selector pills (selected = `border-ink bg-ink text-cream`, unselected = `border-black/10 bg-white text-ink hover:border-black/20`).

**PartnerEndorsements** — `bg-moss`, 3 glass cards; avatar circle `bg-primary/20 h-12 w-12 rounded-full` with `text-primary` initials.

**PartnerMarquee** — `bg-cream-2` band; infinite CSS marquee (`--animate-marquee`, 40s, translateX 0→-50%, `group-hover:[animation-play-state:paused]`); chips `bg-white/60 border-black/5 text-ink/25 hover:text-ink`; masked edges with `from-cream-2` gradients.

**SDGStrip** — 6 SDG tiles: icon chip `border-primary/20 bg-primary/5 h-16 w-16 rounded-2xl`, `text-primary h-7 w-7` icons.

**Testimonials** — 3 spotlight cards (`bg-white rounded-3xl border-black/5 p-8`, Quote icon `text-primary/30`); 10 pull-quotes in `border-l border-black/10` with names + uppercase roles.

**SiteFooter** — `bg-[#07120D]`, radial green glow top, `text-primary` eyebrow "Eat, re-eat, forget", brand/links/contact 3-col grid (`md:grid-cols-[1.2fr_0.8fr_1fr]`), inline Facebook/LinkedIn SVG icons in `border-white/10 rounded-full` circles, bottom bar `border-white/10`.

## 9. Animation & Motion

- CSS: `@keyframes marquee` (translateX 0 → -50%); `prefers-reduced-motion` disables smooth-scroll and pauses marquee
- Lenis: duration 1.2, easing `min(1, 1.001 - 2^(-10t))`, synced with ScrollTrigger (`Providers.tsx`)
- GSAP: `useScrollAnimation` hook — fade/translate reveals at `start: "top 85%"`, `toggleActions: "play none none reverse"`, `ease power2.out`
- Framer Motion: Navbar header entrance, `ease [0.22, 1, 0.36, 1]`, 0.7s
- Hover states: image `scale-105 transition-transform duration-700 ease-out`, color/opacity `transition-colors duration-300`

## 10. Brand Assets (`public/`)

`logo.png` (displayed 64×64, `object-contain`), `cup.png`, `cup2.png`, `plastic-ecolery.png` (all product photography, PNG), plus unused Next defaults (`next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`) and `left.png`/`right.png` (unused).

## 11. Notable Gotchas

- Tailwind v4 — tokens live in `@theme`, no `tailwind.config.js`; brand colors = `bg-cream`, `text-primary-dark`, etc.
- `constants.ts` has stale nav (About/Services/Work/Contact); the real nav lives inline in `Navbar.tsx` (Shop/Our Process/Sustainability/Contact).
- `shared/Footer.tsx` is unused (`SiteFooter` is the active one). Don't edit it expecting it to show up.
- `useLenis.ts` is a duplicate of `Providers.tsx` logic — be aware both exist.
- `rust` and `cork` tokens are defined but unused; the button component references some undefined semantic tokens (`--radius-md`, ring) — don't assume all shadcn Button variants are fully wired to brand colors.
- Fonts imported via `next/font/google` with CSS vars `--font-sora`/`--font-manrope` wired to `--font-display`/`--font-body`.
