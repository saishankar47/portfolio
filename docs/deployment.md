# 🚀 Deployment Guide

This document explains how to deploy the portfolio from local development to production using GitHub and Vercel.

It also covers domain configuration, analytics, SEO verification, troubleshooting, and post-deployment checks.

---

# Table of Contents

1. Deployment Overview
2. Prerequisites
3. Local Development
4. GitHub Setup
5. Vercel Deployment
6. Custom Domain
7. Environment Variables
8. Post Deployment Tasks
9. Analytics
10. Performance Checks
11. Security
12. Maintenance
13. Deployment Checklist
14. Troubleshooting

---

# 1. Deployment Overview

Development Flow

```
Local Development

↓

Git Commit

↓

GitHub

↓

Vercel

↓

Production
```

Every push to the **main** branch automatically redeploys the application.

---

# 2. Prerequisites

Before deployment ensure you have

- Git Installed
- Node.js 20+
- GitHub Account
- Vercel Account

Recommended

```
Node.js

Git

VS Code

GitHub Desktop (Optional)
```

---

# 3. Local Development

Clone repository

```bash
git clone https://github.com/<username>/<repository>.git
```

Move into project

```bash
cd saishankar-portfolio
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

Production build

```bash
npm run build
```

Start production

```bash
npm start
```

Lint

```bash
npm run lint
```

---

# 4. GitHub Setup

## Initialize Repository

```bash
git init
```

---

## Add Remote

```bash
git remote add origin https://github.com/<username>/<repository>.git
```

---

## Verify

```bash
git remote -v
```

---

## Commit

```bash
git add .

git commit -m "Initial Portfolio"
```

---

## Push

```bash
git push -u origin main
```

---

## Recommended Branches

```
main

development

feature/*
```

Example

```
feature/navbar

feature/projects

feature/seo
```

---

# 5. Deploy to Vercel

Visit

```
https://vercel.com
```

---

## Steps

1.

Login

↓

2.

Import Git Repository

↓

3.

Select Portfolio Repository

↓

4.

Framework

```
Next.js
```

↓

5.

Deploy

That's it.

---

## Automatic Deployments

Every push to

```
main
```

creates a production deployment.

Every pull request creates a preview deployment.

---

# 6. Custom Domain

Inside Vercel

```
Project

↓

Settings

↓

Domains
```

Example

```
www.saishankar.dev

portfolio.saishankar.dev
```

or

```
saishankar.dev
```

---

## Update Site Configuration

After your domain is live, update:

```
data/site.ts
```

Replace

```ts
url: "https://your-domain.vercel.app"
```

With

```ts
url: "https://yourdomain.com"
```

---

## Update SEO Files

Verify these files reference the correct domain:

```
app/layout.tsx

app/sitemap.ts

app/robots.ts

components/seo/JsonLd.tsx
```

---

# 7. Environment Variables

Current Portfolio

No environment variables are required.

Future integrations (EmailJS, Resend, GitHub API, Analytics) may require them.

Create a file

```
.env.local
```

Example

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=

EMAILJS_SERVICE_ID=

EMAILJS_TEMPLATE_ID=
```

Never commit

```
.env.local
```

to Git.

---

# 8. Post Deployment Tasks

After deployment

Visit

```
https://yourdomain.com
```

Verify

- Home page
- Navigation
- Theme Switcher
- Hero
- About
- Skills
- Experience
- Projects
- Contact
- Footer

---

## Verify

Resume Download

```
https://yourdomain.com/resume.pdf
```

---

Verify Images

```
Profile

Projects

Icons
```

---

Verify SEO

```
/robots.txt

/sitemap.xml
```

---

# 9. Analytics

Recommended

## Vercel Analytics

Install

```bash
npm install @vercel/analytics
```

Then integrate according to the Vercel documentation.

---

## Optional

Google Analytics

Google Tag Manager

Microsoft Clarity

Plausible Analytics

---

# 10. Performance Checks

Run Lighthouse

Target

| Category | Goal |
|----------|------|
| Performance | 95+ |
| Accessibility | 95+ |
| Best Practices | 100 |
| SEO | 100 |

---

## Optimize Images

Use

```
next/image
```

where appropriate.

Avoid

```
<img>
```

---

## Optimize Fonts

Use

```
next/font/google
```

Current

```
Inter
```

---

## Bundle Size

Analyze

```bash
npm run build
```

Future

```
@next/bundle-analyzer
```

---

# 11. Security

Recommended Headers

```
X-Frame-Options

Content-Security-Policy

Referrer-Policy

Permissions-Policy
```

These can be configured in:

```
next.config.ts
```

---

Never expose

- API Keys
- Secrets
- Tokens

Use environment variables.

---

# 12. Maintenance

Whenever updating the portfolio

Update

```
Projects

Experience

Skills

Resume

SEO

Metadata
```

Then

```bash
npm run build
```

Verify

No errors.

Commit

Push

Vercel redeploys automatically.

---

# 13. Deployment Checklist

## Code

- [ ] Build succeeds
- [ ] ESLint passes
- [ ] No TypeScript errors
- [ ] Responsive layout verified

---

## Assets

- [ ] Profile image replaced
- [ ] Resume updated
- [ ] Project screenshots verified
- [ ] Favicon configured

---

## SEO

- [ ] Metadata updated
- [ ] Domain updated
- [ ] Sitemap working
- [ ] Robots working
- [ ] Open Graph image verified
- [ ] Twitter image verified
- [ ] JSON-LD validated

---

## Navigation

- [ ] All links working
- [ ] Smooth scrolling works
- [ ] Mobile menu works
- [ ] Scroll-to-top button works

---

## Contact

- [ ] Email verified
- [ ] Social links verified
- [ ] Resume download works
- [ ] Contact form tested

---

## Browser Testing

Verify on

- Chrome
- Edge
- Firefox
- Safari (if available)

---

## Responsive Testing

Verify on

- Desktop
- Laptop
- Tablet
- Mobile

---

# 14. Troubleshooting

## Build Fails

Run

```bash
npm run build
```

Fix

- TypeScript errors
- ESLint issues
- Missing imports

---

## Images Missing

Verify files exist in

```
public/
```

Check image paths begin with `/`.

---

## Navigation Returns 404

Ensure navigation uses section anchors

```
#home

#about

#projects
```

instead of routes like

```
/about

/projects
```

Each section must have a matching `id`.

---

## Resume Not Downloading

Verify

```
public/resume.pdf
```

exists and `data/site.ts` points to `/resume.pdf`.

---

## Open Graph Not Updating

Social platforms cache previews.

Use the appropriate sharing debugger (for example, LinkedIn Post Inspector or Facebook Sharing Debugger) to refresh the cache after deploying updates.

---

## Theme Not Working

Verify

- ThemeProvider wraps the application
- ThemeSwitcher is rendered
- Tailwind dark mode is configured

---

# Production Maintenance Workflow

```
Update Content

↓

Run

npm run lint

↓

Run

npm run build

↓

Commit

↓

Push to GitHub

↓

Automatic Vercel Deployment

↓

Verify Live Site

↓

Done
```

---

# Deployment Summary

The portfolio is designed for continuous deployment:

```
Developer

↓

GitHub

↓

Vercel

↓

Production
```

With this workflow, every change is:

- Version controlled in Git
- Automatically built by Vercel
- Deployed with minimal manual effort
- Easy to roll back if needed

Following this process helps keep the portfolio stable, maintainable, and ready to showcase at any time.