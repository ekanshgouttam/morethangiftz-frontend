# MoreThanGiftz — Frontend Assignment

A responsive, component-based recreation of the MoreThanGiftz corporate-gifting homepage, built from the supplied design.

**Live demo:** _add your Vercel URL here_
**Repository:** _add your GitHub URL here_

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS v4 (design tokens in `src/index.css`) |
| Icons | lucide-react (brand icons are small inline SVGs) |
| State | React Context (cart, wishlist, search) |
| Linting | oxlint |
| Deployment | Vercel |

No backend, database, auth or payments — out of scope for a frontend assignment. All data is structured mock data in `src/data`.

## Features

- **Header:** utility bar with copy-to-clipboard promo code, main navigation, category bar with the hanging logo, mobile drawer menu (focus-trapped, Esc to close).
- **Hero** with CTAs; recomposed (not just shrunk) for phones, with a smaller image served to small screens.
- **Shop by Category** grid, **trust strip**, **Featured / Drinkware / Gift Sets** product sections.
- **Reusable product card** (two layouts), price, wishlist, add-to-cart and a WhatsApp enquiry link with a prefilled message.
- **Dependency-free carousel** built on CSS scroll-snap: arrows, page dots, swipe, keyboard scrolling, reduced-motion aware.
- **Search overlay** with live results, plural-insensitive matching, empty / typing / results / no-results states.
- **Cart drawer:** add, increase, decrease, remove, clear, subtotal, empty state, persisted in `localStorage`; "Request quote" sends the cart to WhatsApp.
- **Wishlist** persisted in `localStorage`.
- **Brands, corporate gifting, clients, testimonials** (expandable), **final CTA**, and a **responsive footer** with a validated newsletter form.
- Accessibility: semantic landmarks, one H1, labelled icon buttons, visible focus rings, `aria-live` status messages, focus management for dialogs.

## Quality checks (run locally, production build)

| | Mobile | Desktop |
| --- | --- | --- |
| Lighthouse Performance | 98 | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

axe-core reports 0 violations on the page, with the search overlay, cart drawer and mobile menu open. Layouts were checked at 1440, 1024, 768 and 390px with no horizontal scrolling.

## Project structure

```
src/
├── assets/        images (cropped from the supplied design, WebP)
├── components/    layout, hero, categories, products, brands, corporate,
│                  clients, testimonials, cart, search, trust, ui
├── context/       cart, wishlist, search state
├── data/          products, categories, brands, clients, testimonials, nav, footer
├── hooks/         useCart, useWishlist, useSearch, useModalBehavior
├── types/         shared TypeScript types
└── utils/         formatting, search, WhatsApp links, asset lookup
```

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build locally
npm run lint
```

## Deployment

The project is a standard Vite SPA. Import the GitHub repo into Vercel — the defaults (build command `npm run build`, output directory `dist`) work as-is.

## Notes and known limitations

- **Images** were cropped from screenshots of the supplied design, so some are low-resolution. Swap in originals by replacing files in `src/assets` (same filenames).
- **Demo content:** product names, prices and SKUs are mock values. Client logos (except the first) and testimonials (except the first) are placeholders and are labelled as such on the page. Statistics and claims in the trust strip and footer are copied verbatim from the supplied design.
- **Category cards** open the search overlay with the category name; the mock catalogue has no electronics, so those searches show the no-results state.
- **Not implemented:** checkout, accounts, language/currency switching, and secondary pages (privacy, jobs, FAQs, etc.). Their links scroll to the contact section.
- Social links point to the platforms' home pages; office buttons open a map search. Replace with real URLs in `src/data/footer.ts`.