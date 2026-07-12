# Ecolery

A modern, minimal digital experience studio website built with Next.js, Tailwind CSS v4, and a premium animation stack.

## Tech Stack

| Category          | Libraries                                                    |
| ----------------- | ------------------------------------------------------------ |
| Framework         | Next.js 16 (App Router, React Server Components)             |
| Styling           | Tailwind CSS v4                                              |
| Language          | TypeScript (strict mode)                                     |
| Smooth Scroll     | Lenis (v2)                                                   |
| Scroll Animations | GSAP + ScrollTrigger + `@gsap/react`                         |
| Micro-interactions| Framer Motion                                                |
| Icons             | lucide-react                                                 |
| Utilities         | clsx, tailwind-merge (`cn()`)                                |

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `pnpm dev`        | Start dev server               |
| `pnpm build`      | Production build               |
| `pnpm start`      | Start production server        |
| `pnpm lint`       | Run ESLint                     |
| `pnpm format`     | Format with Prettier           |
| `pnpm typecheck`  | Run TypeScript check           |

## Animation Approach

We use a layered animation system:

- **Framer Motion** — UI micro-interactions, page transitions, hover/tap states, and component-level `motion.div` animations. Use for any isolated, declarative animation that doesn't depend on scroll position.
- **GSAP + ScrollTrigger** — complex scroll-driven timelines, sequenced reveals, parallax effects, and anything that needs precise timeline control. Use GSAP when you need to orchestrate multiple elements or tie animations to scroll progress.
- **Lenis** — smooth scrolling is wrapped at the app root. GSAP ScrollTrigger is synced to Lenis's scroll events so all scroll-based animations stay perfectly in sync.

### When to use what

```
Framer Motion:   Simple fades, slides, hover/tap, layout animations
GSAP:            Scroll-triggered timelines, parallax, multi-step reveals
Lenis:           Always on (smooth scroll). GSAP listens to Lenis, not the native scroll.
```

### Accessibility

All animations respect `prefers-reduced-motion`. When the user's OS setting requests reduced motion, animations are disabled or simplified via the `@media (prefers-reduced-motion: reduce)` cascade in `globals.css`.
