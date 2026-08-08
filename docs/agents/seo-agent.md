# 🤖 SEO Agent

## Purpose

The SEO Agent is responsible for maintaining every aspect of Search Engine Optimization (SEO) throughout the portfolio.

Its responsibility is to ensure the portfolio remains discoverable, correctly indexed, socially shareable, and follows modern SEO best practices.

The SEO Agent owns:

- Metadata
- Open Graph
- Twitter Cards
- JSON-LD
- Sitemap
- Robots
- Canonical URLs
- Manifest
- Favicons
- Search Console
- Analytics verification

---

# Responsibilities

The SEO Agent is responsible for:

- Updating website metadata
- Updating Open Graph content
- Updating Twitter Cards
- Maintaining structured data
- Updating sitemap
- Updating robots.txt
- Managing favicons
- Maintaining canonical URLs
- Updating social preview images
- Validating SEO before deployment

---

# Primary Files

## Global Metadata

```
app/layout.tsx
```

Controls

- Title
- Description
- Keywords
- Authors
- Robots
- OpenGraph
- Twitter
- Icons
- Manifest

---

## Open Graph Image

```
app/opengraph-image.tsx
```

Generates

```
1200 × 630
```

social preview image.

---

## Twitter Image

```
app/twitter-image.tsx
```

Generates

Twitter/X preview image.

---

## JSON-LD

```
components/seo/JsonLd.tsx
```

Contains

- Person Schema
- Website Information
- Social Links
- Skills
- Job Title

---

## Sitemap

```
app/sitemap.ts
```

Contains all public pages.

---

## Robots

```
app/robots.ts
```

Controls search engine crawling.

---

## Manifest

```
app/manifest.ts
```

Controls

- PWA
- Theme
- Icons

---

## Site Configuration

```
data/site.ts
```

Single source of truth.

Contains

- Website URL
- Name
- Description
- Social Links
- Email
- Profile Image

---

# Source of Truth

The following file should contain the portfolio identity.

```
data/site.ts
```

Example

```ts
name

title

url

description

email

github

linkedin

profileImage
```

All SEO files should reference this configuration whenever possible.

---

# Metadata Rules

Always verify

```ts
title

description

keywords
```

Recommended title length

```
50–60 characters
```

Recommended description

```
140–160 characters
```

Avoid duplicate titles.

---

# Website URL

Never leave

```
https://your-domain.vercel.app
```

after deployment.

Replace with

```
https://yourdomain.com
```

Update

```
data/site.ts

layout.tsx

robots.ts

sitemap.ts

JsonLd.tsx
```

---

# Open Graph Rules

File

```
app/opengraph-image.tsx
```

Must contain

- Name
- Title
- Branding
- Technologies

Image Size

```
1200 × 630
```

Always verify after deployment.

---

# Twitter Card Rules

File

```
app/twitter-image.tsx
```

Card Type

```ts
summary_large_image
```

Must include

- Name
- Title
- Description
- Image

---

# JSON-LD Rules

File

```
components/seo/JsonLd.tsx
```

Verify

- Name
- Job Title
- Website
- Email
- GitHub
- LinkedIn
- Skills

Use

```
https://schema.org
```

Person schema.

---

# Sitemap Rules

File

```
app/sitemap.ts
```

Every public page must appear.

Example

```
/

blog

projects
```

Update whenever new pages are added.

---

# Robots Rules

File

```
app/robots.ts
```

Verify

```
Allow: /

Host:

Sitemap:
```

Never block

```
/
```

unless intentionally creating a private site.

---

# Manifest Rules

File

```
app/manifest.ts
```

Verify

- Name
- Short Name
- Theme Color
- Icons
- Background Color

---

# Favicons

Files

```
public/favicon.ico

public/apple-touch-icon.png

public/icon-192.png

public/icon-512.png
```

Replace placeholder icons before deployment.

---

# Search Console

After deployment

Add property

```
https://yourdomain.com
```

Submit

```
/sitemap.xml
```

Verification code belongs in

```
app/layout.tsx
```

---

# Bing Webmaster

After deployment

Submit

```
https://yourdomain.com
```

Submit sitemap.

Add verification code.

---

# Analytics

Recommended

- Vercel Analytics
- Google Analytics
- Microsoft Clarity

Verify analytics after every deployment.

---

# Canonical URL

Every page should have a canonical URL.

Example

```ts
alternates:{

canonical:"https://yourdomain.com"
}
```

Avoid duplicate content.

---

# Image Optimization

Use

```
next/image
```

for website images.

Social images remain generated via

```
next/og
```

---

# Validation Workflow

After every SEO change

Run

```
npm run build
```

Deploy

↓

Verify

```
robots.txt
```

↓

Verify

```
sitemap.xml
```

↓

Validate

Rich Results

↓

Validate

Open Graph

↓

Validate

Twitter Card

↓

Request Indexing

Google Search Console

---

# SEO Validation Checklist

Metadata

- [ ] Title
- [ ] Description
- [ ] Keywords

---

Branding

- [ ] Website URL
- [ ] Email
- [ ] Profile Image
- [ ] Social Links

---

Open Graph

- [ ] Image Generated
- [ ] Correct Branding
- [ ] Correct Title

---

Twitter

- [ ] Large Image Card
- [ ] Description
- [ ] Preview Works

---

JSON-LD

- [ ] Valid
- [ ] Name Updated
- [ ] Website Updated
- [ ] Social Links Updated

---

Manifest

- [ ] Icons
- [ ] Theme Color
- [ ] App Name

---

Robots

- [ ] Accessible

---

Sitemap

- [ ] Accessible

---

Search Console

- [ ] Domain Verified
- [ ] Sitemap Submitted

---

Analytics

- [ ] Tracking Working

---

# Common Mistakes

❌ Forgetting to replace

```
your-domain.vercel.app
```

Always use the production domain.

---

❌ Using placeholder GitHub or LinkedIn URLs.

Replace every placeholder before deployment.

---

❌ Forgetting to update JSON-LD.

Metadata and JSON-LD should always match.

---

❌ Missing Open Graph image.

Always verify social previews.

---

❌ Forgetting to submit sitemap.

Submit after every production deployment.

---

❌ Duplicate page titles.

Every page should have a unique title and description.

---

# Best Practices

- Keep all branding information centralized in `data/site.ts`.
- Use descriptive page titles and meta descriptions.
- Validate SEO after every deployment.
- Test Open Graph and Twitter cards whenever branding changes.
- Keep structured data synchronized with the visible content.
- Regularly review Search Console for indexing or crawl issues.

---

# Success Criteria

The SEO update is complete when:

- Website metadata is accurate.
- Open Graph and Twitter previews render correctly.
- JSON-LD validates successfully.
- Robots and sitemap are accessible.
- Search Console and Bing Webmaster are configured.
- Analytics is collecting data.
- Lighthouse SEO score is **95–100**.
- All branding values are consistent across the site.