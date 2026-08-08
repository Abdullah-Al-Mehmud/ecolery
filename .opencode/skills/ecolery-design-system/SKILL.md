---
name: ecolery-design-system
description: >
  Enforces the Ecolery brand design system — exact colors, fonts, spacing, radii, button styles, and section layout patterns — whenever writing, editing, or reviewing any UI code (React/TSX components, Tailwind classes, CSS, globals.css @theme tokens) for the Ecolery Next.js site. Use this skill for ANY task that touches visual styling, including creating new components or sections, editing existing ones, adding buttons/cards/badges, changing colors or fonts, adjusting spacing/layout, adding animations, or reviewing a PR/diff for design consistency. Trigger even if the user doesn't explicitly say "design system" or "brand" — any mention of styling, Tailwind classes, a new section, a new page, a component, wanting something to look a certain way, or a UI bug fix should consult this skill first. This is a premium, classic-modern, high-end eco brand — never substitute arbitrary hex codes, generic Tailwind grays or blues, default shadcn styling, or off-brand fonts.
---

# Ecolery Design System Guardrails

Ecolery is a premium, warm, organic, "classic-modern" eco brand. Every UI decision must trace back to the tokens and patterns below — never invent new colors, fonts, spacing values, or radii, even if they seem reasonable in isolation. Consistency is the whole point of a premium brand; one off-token green or one default-blue button breaks it.

## How to use this skill

1. Before writing or editing any UI code, re-read the **Locked Tokens** section below and hold yourself to it.
2. For anything beyond the quick reference (full section-by-section layout, animation specs, known gotchas), read `references/full-design-system.md` — it's the authoritative source of truth, pulled directly from the project's own design doc.
3. Before finishing any task that touched styling, run through the **Pre-ship checklist** at the bottom.
4. If a request would require breaking a rule below (e.g. "make this button blue"), don't silently comply — flag it: tell the user this deviates from the locked design system and confirm they actually want an exception, or propose the closest on-brand alternative first.

## Locked Tokens — never substitute

### Colors (Tailwind v4 `@theme` tokens in globals.css — use these class names, never raw hex)

| Token | Hex | Use for |
|---|---|---|
| `cream` | #f6f2e9 | Page background (base) |
| `cream-2` | #efe9da | Alternate light band (e.g. marquee) |
| `ink` | #1c2018 | Primary text / near-black, primary CTA background |
| `primary` | #1e9e5a | Brand green — buttons, links, accents |
| `primary-light` | #4fc077 | Gradient start only |
| `primary-dark` | #0f6b3d | Gradient end, headline keyword highlights |
| `moss` | #33452b | Dark green section backgrounds |
| `rust` | #c1622b | Declared but **not currently used** — don't introduce without asking |
| `cork` | #c08a54 | Declared but **not currently used** — don't introduce without asking |

Hardcoded one-offs that are still canon (not tokens, but intentional exceptions):
- Footer background: `#07120D`
- Comparison-section left panel: `linear-gradient(180deg, #EDF0F1 0%, #DADFE1 100%)`
- Footer radial glow: `radial-gradient(60% 100% at 50% 0%, rgba(140,199,140,0.06), transparent)`

Secondary/muted text uses plain Tailwind gray scale + opacity modifiers only: `gray-500/600/700/900`, `text-black/60`, `text-white/70`, `border-black/5`, `border-white/10` — never a random gray hex, never `slate`/`zinc`/`neutral` scales.

**Never use:** default Tailwind `blue-*`, `red-*` (except semantic destructive states), `green-*` (use the brand `primary`/`moss` tokens instead), or any raw hex not listed above, without explicit user sign-off.

### Fonts

- Headings, numbers, logo text, big stats → `font-display` (Sora, 400–700)
- Everything else (body copy, nav, labels) → `font-body` (Manrope, 400–600), body tag also carries `antialiased`
- Never introduce a third font family.

### Typography scale (use these exact patterns, don't freelance new sizes)

- Eyebrow/kicker: `text-[13px] font-semibold uppercase tracking-[0.2em]` — `text-primary` on light bg, `text-white/50` on dark bg
- H1 (hero): `text-[2.75rem] leading-[1.05] font-bold tracking-tight sm:text-6xl md:text-7xl font-display`
- H2 (section): `text-3xl md:text-4xl` (or `md:text-5xl` for hero-adjacent sections), `leading-[1.1] font-bold tracking-tight`
- H3: `text-2xl md:text-3xl`
- Body: `text-[15px] leading-relaxed font-semibold`, `text-gray-600`/`text-gray-700` on light, `text-white/70` on dark
- Big stats: `text-4xl md:text-5xl font-bold` (display font)
- Small uppercase labels: `text-[10px]–[13px] font-semibold uppercase tracking-[0.14em]`/`[0.18em]`, muted (`text-gray-500`, `text-white/50`, `text-white/30`)
- Headline keyword highlight pattern: wrap the emphasized word(s) in `<span className="text-primary-dark">` (or `text-white/60` in the footer) — don't bold/underline/color emphasis any other way

### Spacing (Tailwind v4 defaults only — no arbitrary px paddings unless matching an existing pattern below)

- Section vertical rhythm: `py-24 md:py-32` (major sections), `py-20 md:py-28` (bands), `py-16` / `py-10` (strips)
- Horizontal gutter: always `px-6`
- Containers: `max-w-6xl` standard, `max-w-3xl` centered CTA, body copy `max-w-md`/`max-w-lg`/`max-w-2xl`
- Eyebrow→headline: `mt-4`; headline→body: `mt-6`; copy→CTA/list: `mt-8`–`mt-10`; header→grid: `mt-10`–`mt-16`
- Grid gaps: `gap-5`/`gap-6` (cards), `gap-10` (stat columns), `gap-12`/`gap-14` (two-column sections)
- Hairline dividers: `border-black/5` on light, `border-white/10` on dark
- Dark glass card pattern: `border-white/10 bg-white/[0.06] backdrop-blur-sm rounded-2xl p-8`

### Border radius vocabulary (pick from this list only)

- `rounded-full` — pill buttons, avatars, selector pills
- `rounded-2xl` — SDG icon tiles, dark metric/endorsement cards
- `rounded-3xl` — bento gallery cards, testimonial spotlight cards
- `rounded-[2rem]` — large feature imagery
- `rounded-xl` — marquee logo chips
- `rounded-lg` — shadcn Button default only

### Buttons

- Primary site CTA (pill): `bg-ink text-cream hover:bg-moss rounded-full px-8 py-3.5 text-[14px] font-semibold transition-colors` (navbar variant: `px-5 py-2.5 text-[13px] font-medium`)
- On dark surfaces: `bg-white/[0.04] border border-white/15 hover:bg-white/[0.08] rounded-full`
- shadcn `Button` default variant uses `bg-primary text-primary-foreground hover:bg-primary/80` — this is the only shadcn variant actually wired to brand tokens; be cautious with `outline`/`secondary`/`ghost`/`destructive` since some reference undefined tokens (see gotchas in the reference file)
- Never use a default/unstyled shadcn button, a generic rounded-md button, or any button color outside `ink`/`primary`/`moss`/white-glass

### Icons

`lucide-react`, `strokeWidth={1.75}` for feature icons, colored `text-primary` unless the context calls for muted/white per the sections above.

## Pre-ship checklist

Before considering any styling task done, verify:
- [ ] Every color used is one of the tokens above (or an approved hardcoded exception) — no raw hex, no default Tailwind blue/red/green/slate/zinc
- [ ] Headings use `font-display`, body text uses `font-body` — nothing else
- [ ] Spacing matches the scale above — no arbitrary one-off `p-[17px]`-style values
- [ ] Border radius comes from the approved list, matched to the correct component type
- [ ] Buttons match one of the three approved patterns
- [ ] If this is a new section, its structure/animation approach is consistent with `references/full-design-system.md` (Lenis + GSAP ScrollTrigger reveal pattern, hover transitions at `duration-300`/`duration-700`)
- [ ] If anything above required breaking a rule, you flagged it to the user instead of silently doing it

For full section-by-section layout specs (Hero, Impact, Comparison, Careers CTA, Partner Endorsements/Marquee, SDG Strip, Testimonials, Footer), animation/motion specs, brand assets, and known codebase gotchas (stale nav data, unused Footer component, undefined shadcn tokens, etc.), read `references/full-design-system.md`.