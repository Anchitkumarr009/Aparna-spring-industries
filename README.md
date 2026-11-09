# Aparna Springs Industries Website

Single-page marketing site built with **React + TypeScript + Vite + Tailwind CSS v4**.

## Quick start

```bash
npm install
npm run dev       # dev server with hot reload at http://localhost:5173
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build locally
```

Requires Node 18+.

## Where to change things

| I want to change...                                   | Edit this                          |
| ----------------------------------------------------- | ---------------------------------- |
| Phone, email, address, hours, map, social links       | `src/data/content.ts` (`company`)  |
| Hero slides, products, values, team photos, videos, reviews, nav, footer links | `src/data/content.ts` |
| Images                                                | `public/images/` (use `/images/<name>` in content.ts) |
| Brand colors, radius, font                            | `src/index.css` (`:root`)          |
| Layout / markup of a section                          | `src/components/<Section>.tsx`     |
| Order of sections                                     | `src/App.tsx`                      |

## Project layout

```
public/                 static files served as-is (images, favicon)
src/
  main.tsx              entry point
  App.tsx               page = list of sections
  index.css             Tailwind + theme colors
  data/content.ts       ALL text, contact info and image paths
  lib/cn.ts             class-name helper
  components/
    TopBar, Header, Hero, About, Products, Values,
    Team, Videos, Testimonials, Contact, Footer    one file per section
    SocialIcons.tsx     social links shared by TopBar and Footer
    ui/Button.tsx       shared button
    ui/SectionHeading.tsx  shared "eyebrow + title + description" block
```

Section ids used for in-page links: `home`, `about`, `products`, `values`, `team`,
`videos`, `testimonials`, `contact`.

## Notes

- The contact form is UI only; submitting does nothing yet. Wire `onSubmit` in
  `src/components/Contact.tsx` to an email service or API when needed.
- Facebook and LinkedIn links in `content.ts` are placeholders (`#`).
- The header "Call Now" button uses `company.callNowPhone` (same as the main phone).
- Elements carry `data-testid` attributes for end-to-end tests.
- Deploy: `npm run build`, then upload the `dist/` folder to any static host
  (Netlify, Vercel, GitHub Pages, S3, ...).
