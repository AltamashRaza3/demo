# W R Enterprises — Premium Business Showcase Website

A premium, Awwwards-style showcase website for **W R Enterprises**, a hardware,
electrical, plumbing and paint supplier based in Siwan, Bihar. Built as a
non-ecommerce showcase — no cart, no checkout — focused on trust, brand
quality and lead generation (calls, WhatsApp, quote requests).

## Tech Stack

- React 19 + Vite
- Tailwind CSS 3
- React Router DOM
- Framer Motion (page transitions, lightbox)
- GSAP + ScrollTrigger (hero text reveal, scroll reveals, pinned horizontal
  category rail)
- Lenis (smooth scroll, synced to GSAP's ticker)
- React CountUp (animated stats)
- Lucide React (icons)
- React Helmet Async (per-page SEO)

## Getting Started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`. Production build:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  assets/            # (empty — see "Images" below)
  components/
    layout/          # Navbar, Footer, Layout shell, FloatingActions
    ui/               # Reusable primitives: buttons, cards, headings, SEO
    sections/         # Page-section blocks composed on Home and elsewhere
  data/
    site.js          # All copy/content in one place — no hardcoded strings
                      # in components
  hooks/
    useLenis.js
    useScrollToTop.js
    useScrollReveal.js
  pages/
    Home.jsx, About.jsx, Products.jsx, Services.jsx,
    Brands.jsx, Gallery.jsx, Contact.jsx, NotFound.jsx
  styles/
    index.css        # Tailwind layers + design-system utility classes
  App.jsx             # Route table
  main.jsx            # Entry point (Router + Helmet providers)
```

## Design System

- **Palette:** white / smoke grey / light grey base, near-black ink for
  text, a single professional-blue accent (`#2A4FD9` family) — no red,
  orange, or dark-mode surfaces.
- **Type:** Manrope for display/headings, Inter for body copy.
- **Signature element:** the `CategoriesShowcase` section on the homepage —
  a pinned, horizontally-scrolling "inventory rail" of the four product
  categories, echoing a stockist's ledger rather than a generic slider.

## Images

Every image slot in this project (`.wr-media` blocks) currently uses a
CSS gradient + subtle grain texture, color-coded per category
(electrical / plumbing / paint / hardware), instead of raster photos. This
was a deliberate placeholder choice so the project runs immediately with
zero broken image links and no external asset dependencies.

**Before going live**, replace these with real photography or generated
imagery:

1. Drop images into `src/assets/images/` (suggested names:
   `hero-composition.jpg`, `category-electrical.jpg`,
   `category-plumbing.jpg`, `category-paint.jpg`, `category-hardware.jpg`,
   `gallery-01.jpg` … `gallery-12.jpg`, `owner-asif.jpg`,
   `owner-yasir.jpg`, `storefront.jpg`).
2. Import them where the corresponding `.wr-media` / `wr-media-*` div
   currently sits (in `Hero.jsx`, `CategoryCard.jsx`, `ProductCard.jsx`,
   `GalleryPreview.jsx`, `Gallery.jsx`, `Brands.jsx`, `About.jsx`) and
   swap the div for an `<img>` with the same rounded/aspect-ratio classes.
3. Replace `/public/favicon.svg` and `/public/og-cover.svg` with final
   brand assets.

## Content Editing

All business copy — address, phone, hours, categories, products, services,
brands, timeline, values, reviews, FAQs — lives in `src/data/site.js`.
Edit that file to update content anywhere on the site without touching
component code.

## Contact Form

The form on the Contact page is UI-only (`Contact.jsx`) — it does not
submit anywhere yet. Wire it to your preferred backend (Formspree, a
serverless function, EmailJS, etc.) by replacing the `handleSubmit`
function.

## Map Embed

Both the homepage `LocationCTA` and the Contact page currently show a
placeholder map card. Replace with a real Google Maps `<iframe>` embed
once you have the business's exact map pin.

## Accessibility & Performance Notes

- All interactive elements are keyboard-reachable with visible focus
  rings (`:focus-visible` in `index.css`).
- `prefers-reduced-motion` disables Lenis smoothing and shortens/limits
  animation.
- Semantic HTML (`header`, `nav`, `main`, `footer`, `section`, heading
  hierarchy) is used throughout.
- `index.html` includes Open Graph, Twitter Card, and Schema.org
  `HardwareStore` (LocalBusiness) structured data — update the
  placeholder phone number and canonical URL before deploying.

## What's Placeholder vs. Real

- ✅ Real: business info, category/product/service/brand lists, address,
  hours (as provided in the brief).
- ⚠️ Placeholder: phone number digits, WhatsApp number, all imagery,
  review author names/quotes, canonical/OG URLs — replace before launch.
