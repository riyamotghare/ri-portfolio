# Riya Motghare — Portfolio

A modern, Awwwards-inspired developer/data-science portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui-style components.

Theme: dark navy background with a gold accent palette, serif display headings, and monospace labels for a premium, editorial feel.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Editing Your Content

**You do not need to touch component code to update your content.** Everything lives in one file:

```
lib/data.ts
```

Edit this file to update your:
- Profile info, tagline, email, socials
- About section paragraphs & highlight stats
- Skills (grouped by category)
- Projects (title, problem, approach, stack, outcome, GitHub link)
- Experience & Education entries
- Certifications (images or PDF files)
- Achievements

## Adding Your Resume

Drop your resume PDF into:
```
public/resume/Riya_Motghare_Resume.pdf
```
The "Resume" button in the navbar and hero section link here automatically. See `public/resume/README.txt`.

## Adding/Updating Certificates

Certificate images and files live in `public/certificates/`. Two certificates are pre-loaded:
- `gfg-summer-skillup.png` (GeeksforGeeks Summer SkillUp)
- `simplilearn-ai-chatbot.pdf` (Simplilearn AI Chatbot workshop)

Add new ones to this folder and reference them in the `certifications` array in `lib/data.ts`.

## Project Structure

```
app/
  layout.tsx        — root layout, fonts, SEO metadata
  page.tsx           — assembles all sections
  globals.css        — theme tokens, custom scrollbar, effects
  sitemap.ts          — dynamic sitemap for SEO
components/
  navbar.tsx
  footer.tsx
  section-heading.tsx
  ui/                 — button, card, badge (shadcn-style primitives)
  sections/           — hero, about, skills, projects, experience,
                        education, certifications, achievements, contact
lib/
  data.ts             — ALL content (single source of truth)
  utils.ts            — cn() className helper
public/
  images/             — profile photo
  certificates/        — certificate images/PDFs
  resume/             — drop your resume PDF here
```

## Customizing the Theme

Color tokens (background, surface, gold accent shades) are defined in `tailwind.config.ts` under `theme.extend.colors`. Update the `gold` and `navy` values to shift the palette without touching any component.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for scroll-triggered and staggered animations
- **shadcn/ui-style primitives** (Button, Card, Badge) built with `class-variance-authority` + Radix Slot
- **lucide-react** icons
- **next/font** for optimized Google Fonts (Inter, Playfair Display, JetBrains Mono)

## Deployment

The easiest path is [Vercel](https://vercel.com):

1. Push this project to a GitHub repository
2. Import it at https://vercel.com/new
3. Vercel auto-detects Next.js — no config needed
4. Deploy

Alternatively, build and self-host:

```bash
npm run build
npm run start
```

## SEO Notes

- Update `siteUrl` in `app/layout.tsx` and `app/sitemap.ts` once you have a real domain
- `public/robots.txt` is already configured to point to `/sitemap.xml`
- Metadata (title, description, Open Graph, Twitter card) is centralized in `app/layout.tsx`
