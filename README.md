# NigeriaMart Marketing Website

Production-ready one-page marketing site for **NigeriaMart**, an early-stage Nigerian B2B marketplace project.

## Stack

- React 18
- Vite
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Run locally

```bash
npm ci
npm run dev
```

Production checks:

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

## GitHub Pages

This project is configured for:

- Repository: `unon4all/nigeriamart-website`
- Vite base: `/nigeriamart-website/`
- Expected Pages URL: `https://unon4all.github.io/nigeriamart-website/`

The included `.github/workflows/deploy.yml` builds with Node 22 and publishes `dist/` to GitHub Pages. In GitHub, set **Settings → Pages → Source** to **GitHub Actions**.

GitHub Pages itself must be enabled for the repository. If GitHub returns a Pages API `404 Not Found`, that is a repository/Pages configuration issue rather than a Vite or React build failure.

## Main structure

- `src/components/` — shared brand, navigation, buttons, reveal primitives and hero network visual
- `src/sections/` — complete page sections from hero through footer
- `src/data/content.ts` — categories, benefits, concept supplier data and survey URLs
- `src/hooks/` — scroll-spy and reduced-motion support
- `src/styles/index.css` — Tailwind theme tokens plus the custom visual system and responsive rules
- `src/assets/nigeriamart-icon.png` — NigeriaMart brand icon
- `public/privacy.html` — simple pre-launch privacy notice

## Survey links

- Buyer: https://forms.gle/SwiAMdvSeLEMvsv37
- Supplier: https://forms.gle/SwiAMdvSeLEMvsv37

The marketplace UI cards are explicitly labelled as illustrative concepts. Concept-only controls are rendered as non-interactive visual elements rather than fake buttons. No user counts, supplier counts, transaction metrics, partnerships, testimonials or operating-scale claims are fabricated.
