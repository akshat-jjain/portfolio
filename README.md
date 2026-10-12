# Portfolio Website

A production-oriented Next.js portfolio for **Akshat Jain**, focused on full-stack delivery with backend engineering depth.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS v4
- Minimal client-side state (no heavy UI/state libraries)
- Server-side contact route with provider integration (Resend)

## Project Structure

- `src/app/` – routes, layout, SEO metadata, API route
- `src/components/layout/` – header and footer
- `src/components/sections/` – page sections
- `src/components/projects/` – project cards and filters
- `src/components/ui/` – reusable UI primitives
- `src/data/portfolio.ts` – centralized typed content
- `src/lib/` – utilities, contact validation, site config
- `src/types/` – shared TypeScript types
- `public/files/` – resume asset (`resume.pdf`)

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build and Lint

```bash
npm run lint
npm run build
```

## Environment Variables

Copy `.env.example` to `.env.local` and update values:

- `NEXT_PUBLIC_SITE_URL`: deployed canonical URL
- `NEXT_PUBLIC_CONTACT_EMAIL`: optional fallback email shown in UI
- `RESEND_API_KEY`: server-only API key for contact delivery
- `CONTACT_FROM_EMAIL`: verified sender email for provider
- `CONTACT_TO_EMAIL`: destination inbox for form submissions

## Contact Form Behavior

- Form input is validated and sanitized server-side.
- A honeypot field and in-memory rate limiting are applied.
- If provider configuration is missing, API returns a clear error (no fake success).

## Resume Setup

Add your real PDF to:

- `public/files/resume.pdf`

If the file is missing, the current UI note explains the required setup.

## Deployment (Vercel)

1. Import the repository in Vercel.
2. Set environment variables from `.env.example`.
3. Ensure `NEXT_PUBLIC_SITE_URL` matches your production domain.
4. Add `public/files/resume.pdf` before publishing.

## Data Updates

Edit only `src/data/portfolio.ts` to update skills, projects, social links, and placeholders requiring verification.
