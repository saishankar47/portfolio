# 🔍 SEO Documentation

This document explains every Search Engine Optimization (SEO) feature implemented in the portfolio.

It also explains how to customize SEO settings before deploying the application.

---

# Table of Contents

1. SEO Overview
2. Metadata
3. Open Graph
4. Twitter Cards
5. JSON-LD
6. Robots.txt
7. Sitemap
8. Web App Manifest
9. Favicon & Icons
10. Dynamic Social Images
11. Search Console
12. Bing Webmaster
13. Analytics
14. Performance SEO
15. SEO Checklist
16. Troubleshooting
17. Best Practices

---

# 1. SEO Overview

The portfolio uses the **Next.js Metadata API** instead of manually managing `<head>` tags.

Benefits

- Better indexing
- Automatic metadata generation
- Rich social previews
- Improved Lighthouse SEO score
- Better maintainability

---

# SEO Architecture

```
layout.tsx

↓

Metadata

↓

Open Graph

↓

Twitter Card

↓

JSON-LD

↓

robots.ts

↓

sitemap.ts

↓

manifest.ts

↓

Dynamic Images
```

---

# 2. Metadata

## File

```
app/layout.tsx
```

This file contains the global metadata for the website.

Example

```ts
export const metadata = {

title:

description:

keywords:

authors:

creator:

publisher:

robots:

openGraph:

twitter:

icons:

manifest:
}
```

---

## Change Website Title

Current

```ts
title: "Saishankar Vanam | Software Engineer"
```

Update this to match your profession.

---

## Change Description

```ts
description:
"Software Engineer specializing..."
```

This appears in Google Search.

Recommended length

```
140-160 characters
```

---

## Keywords

Example

```ts
keywords:[
"Java",

"Spring Boot",

"AWS",

"React",

"Portfolio"
]
```

Use keywords relevant to your profile.

Avoid keyword stuffing.

---

# 3. Open Graph

## Purpose

Open Graph controls how your portfolio appears when shared on:

- LinkedIn
- Facebook
- Slack
- Discord
- Teams
- WhatsApp (where supported)

---

## File

```
app/layout.tsx
```

Configuration

```ts
openGraph:{
title:

description:

images:
}
```

---

## Dynamic Image

File

```
app/opengraph-image.tsx
```

This file generates a social preview automatically.

Size

```
1200 × 630
```

---

## Customize

Change

- Name
- Title
- Background
- Skills
- Colors
- Branding

---

# 4. Twitter Cards

## File

```
app/twitter-image.tsx
```

Used by

```
X (Twitter)
```

Configuration

```ts
twitter:{

card:"summary_large_image"

title:

description:

images:
}
```

---

# 5. JSON-LD

## File

```
components/seo/JsonLd.tsx
```

Purpose

Provide structured data for Google.

Current Type

```
Person
```

Contains

- Name
- Job Title
- Website
- Social Links
- Skills
- Email
- Description

---

## Update

Replace

```
GitHub

LinkedIn

LeetCode

Email

Website
```

with your own values.

---

## Validate

Use

```
https://search.google.com/test/rich-results
```

after deployment.

---

# 6. robots.txt

## File

```
app/robots.ts
```

Purpose

Tell search engines what can be indexed.

Example

```
Allow: /

Sitemap:

Host:
```

---

## Update

Replace

```
https://your-domain.vercel.app
```

with

```
https://yourdomain.com
```

---

# 7. Sitemap

## File

```
app/sitemap.ts
```

Purpose

Lists pages available for search engines.

Current

```
/

```

Future

```
/

blog

projects

articles
```

---

## Verify

After deployment

Visit

```
https://yourdomain.com/sitemap.xml
```

---

# 8. Web App Manifest

## File

```
app/manifest.ts
```

Controls

- PWA Name
- Theme Color
- Icons
- Display Mode

---

Current

```ts
name

short_name

theme_color

background_color

icons
```

---

## Icons

Located in

```
public/

icon-192.png

icon-512.png
```

---

# 9. Favicons

Location

```
public/
```

Files

```
favicon.ico

apple-touch-icon.png

icon-192.png

icon-512.png
```

Recommended

Use

```
favicon.io
```

or

```
RealFaviconGenerator
```

to generate all icon sizes.

---

# 10. Dynamic Social Images

Files

```
app/opengraph-image.tsx

app/twitter-image.tsx
```

Generated dynamically using

```
next/og
```

Advantages

- No Photoshop
- Auto branding
- Easy updates
- Fast rendering

---

# 11. Google Search Console

After deployment

Open

```
https://search.google.com/search-console
```

---

## Steps

1.

Add Property

↓

2.

Verify Domain

↓

3.

Submit

```
sitemap.xml
```

↓

4.

Request Indexing

---

## Verification

Add verification code inside

```
app/layout.tsx
```

Example

```ts
verification:{

google:"YOUR_VERIFICATION_CODE"
}
```

---

# 12. Bing Webmaster

Visit

```
https://www.bing.com/webmasters
```

Add

```
https://yourdomain.com
```

Submit

```
sitemap.xml
```

Verification

```ts
verification:{

other:{
msvalidate:"CODE"
}
}
```

---

# 13. Analytics

Recommended

Google Analytics

or

Vercel Analytics

Files

```
app/layout.tsx
```

Future Integration

```
Google Analytics

Google Tag Manager

Vercel Analytics

Microsoft Clarity
```

---

# 14. Performance SEO

Current Optimizations

✅ Next.js Metadata API

✅ Static Rendering

✅ Dynamic OpenGraph

✅ JSON-LD

✅ Robots

✅ Sitemap

---

Future Improvements

- Image Optimization
- Lazy Loading
- Font Optimization
- Code Splitting
- Bundle Analysis
- CDN
- Edge Caching

---

# 15. SEO Checklist

## Before Deployment

### Metadata

- [ ] Website Title
- [ ] Description
- [ ] Keywords
- [ ] Canonical URL

---

### Images

- [ ] Profile Image
- [ ] Open Graph Image
- [ ] Twitter Image
- [ ] Favicon

---

### URLs

- [ ] Replace every

```
https://your-domain.vercel.app
```

with

```
https://yourdomain.com
```

---

### Search Console

- [ ] Google Verified
- [ ] Bing Verified
- [ ] Sitemap Submitted

---

### JSON-LD

- [ ] Social Links Updated
- [ ] Email Updated
- [ ] Website Updated
- [ ] Rich Results Test Passed

---

### Performance

- [ ] Lighthouse SEO >95
- [ ] Mobile Friendly
- [ ] No Broken Links

---

# 16. Troubleshooting

## Google not showing new title

Possible Causes

- Cache
- Google has not re-indexed

Solution

Request indexing in Search Console.

---

## Open Graph image not updating

Platforms cache images.

Use

```
LinkedIn Post Inspector
```

or

```
Facebook Sharing Debugger
```

to refresh the cache.

---

## Sitemap not found

Verify

```
app/sitemap.ts
```

exists.

Visit

```
/sitemap.xml
```

---

## robots.txt missing

Verify

```
app/robots.ts
```

Visit

```
/robots.txt
```

---

## Rich Results failing

Validate

```
JsonLd.tsx
```

using Google's Rich Results Test.

---

# 17. Best Practices

✅ Keep all SEO values centralized using `data/site.ts`

✅ Update metadata before every deployment

✅ Use descriptive titles and descriptions

✅ Keep social links current

✅ Test Open Graph and Twitter cards after deployment

✅ Submit the sitemap to Google and Bing

✅ Re-run Lighthouse after major UI changes

---

# SEO File Reference

| Purpose | File |
|----------|------|
| Metadata | `app/layout.tsx` |
| Sitemap | `app/sitemap.ts` |
| Robots | `app/robots.ts` |
| Manifest | `app/manifest.ts` |
| Open Graph Image | `app/opengraph-image.tsx` |
| Twitter Image | `app/twitter-image.tsx` |
| JSON-LD | `components/seo/JsonLd.tsx` |
| Site Configuration | `data/site.ts` |

---

# Summary

The portfolio follows the modern **Next.js Metadata API** approach.

SEO is distributed across several focused files:

- **Metadata** → `app/layout.tsx`
- **Structured Data** → `components/seo/JsonLd.tsx`
- **Search Engine Crawling** → `app/robots.ts`
- **Site Discovery** → `app/sitemap.ts`
- **Social Sharing** → `app/opengraph-image.tsx` & `app/twitter-image.tsx`
- **PWA Configuration** → `app/manifest.ts`

Keeping all branding values centralized in `data/site.ts` ensures that changing your name, domain, or social links updates the portfolio consistently with minimal effort.