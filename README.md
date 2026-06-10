# Bhadama Admin

Standalone admin dashboard for the Bhadama platform. Extracted from the main frontend so admin code no longer ships with the customer site.

**Stack:** Next.js 16 (App Router), React 19, Tailwind CSS 4.

## Getting started

```bash
npm install
cp .env.example .env.local   # point NEXT_PUBLIC_API_URL at bhadama-backend
npm run dev                  # http://localhost:3001
```

Sign in at `/auth/login` with an account whose role is ADMIN / SUPER_ADMIN / MODERATOR / SUPPORT. Dashboard lives at `/admin/dashboard`.

## Features

Overview metrics, user management, listings, bookings, reviews, moderation, featured promotions, analytics, audit logs, tier management, role/admin management, support tickets, host-story moderation, platform settings.

## Deploy

Intended for a separate origin (e.g. `admin.bhadama.com`). `robots` is set to noindex. Restrict access further at the edge (IP allowlist / SSO) if possible.
