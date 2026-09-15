# NigeriaMart Marketing Website

Production-oriented one-page marketing site for **NigeriaMart**, an early-stage Nigerian B2B marketplace project.

## Stack

- React 18
- Vite
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

`npm run build` uses Vite when project dependencies are installed. The repository also contains a deterministic offline verification builder used in the delivery environment where the npm registry was unavailable.

## Main structure

- `src/components/` — shared brand, navigation, buttons, reveal primitives and the hero network visual
- `src/sections/` — complete page sections from hero through footer
- `src/data/content.ts` — categories, benefits, concept supplier data and survey URLs
- `src/hooks/` — scroll-spy and reduced-motion support
- `src/styles/index.css` — Tailwind theme tokens plus the custom visual system and responsive rules
- `src/assets/nigeriamart-icon.png` — derived from the supplied NigeriaMart brand artwork
- `public/privacy.html` — simple pre-launch privacy notice

## Survey links

- Buyer: https://forms.gle/2RJ6NG74XtLaBXy28
- Supplier: https://forms.gle/qpTtyupgmuiPeW4i6

## Deployment notes

Before public deployment, set `VITE_CANONICAL_URL` to the confirmed production domain (see `.env.example`). The footer currently uses NigeriaMart's WhatsApp Business number and project email; no social profiles are shown until official accounts exist.

The marketplace UI cards are explicitly labelled as illustrative concepts. No user counts, supplier counts, transaction metrics, partnerships, testimonials or operating-scale claims are fabricated.
