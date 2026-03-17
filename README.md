# K M Arafat Islam - Portfolio

This project keeps the existing public portfolio UI unchanged while adding dynamic content management and a protected admin panel.

## Current Stack

- Static multipage frontend: HTML + CSS + vanilla JS
- Serverless API endpoints: Vercel Functions (`api/*`)
- Storage:
    - Production: Vercel KV (if configured)
    - Local fallback: `data/content.runtime.json`

## What Was Added

- Dynamic content architecture using existing hardcoded source content only
- Protected admin panel at `/admin`
- Seed extraction script from existing codebase
- Seed application script for runtime/KV data
- API routes for auth + content CRUD

## Dynamic Content Model

The runtime content object contains only existing structures:

- `index.static` (SEO, hero, contact, footer)
- `index.datasets` (`aboutHighlights`, `publications`, `activities`, `skills`, `internationalEvents`)
- `search.searchIndex`
- `buildsign.static`
- `buildsign.datasets` (`buildsignServices`, `buildsignServicesDetails`, `buildsignProcess`, `buildsignWhy`, `buildsignFAQs`)
- `certificates.certificateFiles`

## Admin Panel

Route:

- `/admin`

Capabilities:

- Secure login/logout with httpOnly cookie session
- Sidebar-based section editor
- Form editor for static fields
- JSON editor for existing datasets
- Validation before save
- Reload latest server content

Admin APIs:

- `POST /api/admin/login`
- `POST /api/admin/logout`
- `GET /api/admin/session`
- `GET /api/admin/content`
- `PUT /api/admin/content`

Public API:

- `GET /api/content`

## Environment Variables

Copy `.env.example` to `.env` and set:

- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET`
- `CONTENT_KV_KEY` (optional override)

If KV is not configured, the app automatically uses local file fallback.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Extract seed from existing hardcoded source:

```bash
npm run extract:seed
```

3. Seed runtime data store:

```bash
npm run seed:content
```

4. Run locally using your preferred static/API workflow (for example `vercel dev`).

## Seed Scripts

- `scripts/extract-seed-from-source.js`
    - Reads existing source files (`script.js`, `search.js`, `buildsign.js`, `certificates.js`, `index.html`, `buildsign.html`)
    - Writes `data/content.seed.json`

- `scripts/seed-content.js`
    - Loads `data/content.seed.json`
    - Saves to KV when configured, otherwise `data/content.runtime.json`

## Vercel Deployment Notes

- `vercel.json` sets Node runtime for all API functions
- Configure env vars in Vercel Project Settings
- Seed data after deployment using your preferred workflow

## Public UI Parity Notes

Public scripts now load dynamic content from `/api/content` and gracefully fallback to original in-file hardcoded datasets if API data is unavailable. Existing classes/layout/styles remain unchanged.

## Files Added

- `api/_lib/store.js`
- `api/_lib/auth.js`
- `api/content.js`
- `api/admin/login.js`
- `api/admin/logout.js`
- `api/admin/session.js`
- `api/admin/content.js`
- `admin/index.html`
- `admin/admin.css`
- `admin/admin.js`
- `scripts/extract-seed-from-source.js`
- `scripts/seed-content.js`
- `data/content.seed.json`
- `data/content.runtime.json` (generated)
- `.env.example`
- `vercel.json`
- `package.json`

## Files Updated

- `script.js`
- `search.js`
- `buildsign.js`
- `certificates.js`
- `tbs-edge.js`

