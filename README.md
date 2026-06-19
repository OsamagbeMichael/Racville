# Racville Education Foundation — Next.js Website

Built with **Next.js 14 (App Router)** · **Tailwind CSS v3** · **TypeScript**

---

## Quick Start

```bash
# 1. Create the Next.js project
npx create-next-app@latest racville --typescript --tailwind --app --src-dir --no-eslint
cd racville

# 2. Replace the generated files with the ones provided:
#    - src/app/globals.css
#    - src/app/layout.tsx
#    - src/app/page.tsx
#    - src/components/  (all .tsx files)
#    - tailwind.config.ts
#    - next.config.ts

# 3. Install dependencies (already handled by create-next-app)
npm install

# 4. Add your images (see below)

# 5. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Images Required

Place these in `public/images/`:

| File                  | Used in    | Description                              |
|-----------------------|------------|------------------------------------------|
| `hero-bg.jpg`         | Hero       | Group of boys smiling (full-bleed bg)    |
| `about-boys.jpg`      | About Us   | Boys walking together from behind        |

**Tip:** Any high-res photos work. Free sources:
- [Unsplash](https://unsplash.com) — search "boys community africa"
- [Pexels](https://pexels.com) — search "children education"

---

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind directives + custom component classes
│   ├── layout.tsx         # Root layout (metadata, fonts)
│   └── page.tsx           # Page — assembles all section components
│
└── components/
    ├── Navbar.tsx          # Sticky nav, mobile hamburger menu
    ├── Hero.tsx            # Full-viewport hero with gradient overlay
    ├── StatsBar.tsx        # 4-column stat strip
    ├── AboutUs.tsx         # 2-col text + photo section
    ├── Programs.tsx        # 4 program cards
    ├── CTABand.tsx         # Dark green donation CTA band
    └── Footer.tsx          # 4-col footer + newsletter input
```

---

## Color System (tailwind.config.ts)

| Token            | Hex       | Usage                            |
|------------------|-----------|----------------------------------|
| `brand-dark`     | `#0f5c2e` | Navbar bg, dark sections, footer |
| `brand`          | `#1a7a3c` | Primary green, headings          |
| `brand-mid`      | `#2db84b` | Accent text, icons, highlights   |
| `brand-light`    | `#e8f7ed` | Hover tints, icon backgrounds    |
| `brand-btn`      | `#1db954` | CTA button green                 |

---

## Customisation

- **Content** — Edit the arrays/strings inside each component file directly
- **Colors** — Change hex values in `tailwind.config.ts`
- **Fonts** — Swap the Google Fonts import in `globals.css`
- **Add sections** — Create a new component in `src/components/`, import it in `page.tsx`
# racville
