# 🛠 Troubleshooting Guide

This document contains the most common issues you may encounter while developing, building, deploying, or customizing the portfolio.

Whenever something doesn't work as expected, check this guide before making major code changes.

---

# Table of Contents

1. Installation Issues
2. Development Server
3. Build Errors
4. TypeScript Errors
5. Tailwind CSS Issues
6. Theme Issues
7. Navigation Issues
8. Hero Section Issues
9. Projects Issues
10. Contact Form Issues
11. Images Not Loading
12. Animation Issues
13. SEO Issues
14. Deployment Issues
15. Performance Issues
16. Git Issues
17. Frequently Asked Questions

---

# 1. Installation Issues

## npm install fails

### Symptoms

```
npm ERR! code ERESOLVE
```

### Solution

Delete

```
node_modules
```

Delete

```
package-lock.json
```

Run

```bash
npm install
```

---

## Module Not Found

Example

```
Cannot find module
```

### Solution

Install the missing package

Example

```bash
npm install framer-motion
```

or

```bash
npm install react-icons
```

---

# 2. Development Server Issues

## Port Already in Use

Error

```
Port 3000 is already in use
```

### Solution

Run

```bash
npm run dev -- -p 3001
```

or stop the process using port 3000.

---

## Changes Not Reflecting

### Solution

Stop the server

```bash
Ctrl + C
```

Restart

```bash
npm run dev
```

---

# 3. Build Errors

## Production Build Failed

Run

```bash
npm run build
```

Read the first error carefully.

Common causes

- Missing imports
- Wrong paths
- TypeScript errors
- Missing files

---

## Import Error

Example

```
Module not found
```

### Solution

Verify

```
import Something from "@/components/..."
```

Check

- File exists
- Correct filename
- Correct capitalization

---

# 4. TypeScript Errors

## Property Does Not Exist

Example

```
Property 'title' does not exist
```

### Solution

Update the interface.

Example

```ts
interface Project {

title:string
}
```

---

## Missing Export

Example

```
Module has no exported member
```

### Solution

Verify

```tsx
export default
```

vs

```tsx
export const
```

Import correctly.

---

# 5. Tailwind CSS Issues

## Styles Not Applying

Check

```
tailwind.config.ts
```

Verify

```
content:[
"./app/**/*",
"./components/**/*"
]
```

---

## Class Not Working

Restart

```
npm run dev
```

Sometimes Tailwind cache needs refreshing.

---

# 6. Theme Issues

## Theme Not Changing

Check

```
ThemeProvider
```

inside

```
layout.tsx
```

Verify

```
ThemeSwitcher
```

exists.

---

## Hydration Warning

Use

```tsx
<html
lang="en"
suppressHydrationWarning
>
```

---

# 7. Navigation Issues

## Clicking Navigation Returns 404

### Cause

Using

```
/about
```

instead of

```
#about
```

### Correct

```ts
{
title:"About",

href:"#about"
}
```

---

## Navigation Doesn't Scroll

Verify

```tsx
<section id="about">
```

matches

```
href:"#about"
```

---

## Active Navigation Incorrect

Current implementation may use

```
usePathname()
```

For a single-page portfolio, prefer a scroll-spy implementation using the Intersection Observer API.

---

## Mobile Menu Doesn't Close

Verify

```
onNavigate()
```

is passed correctly.

---

# 8. Hero Section Issues

## Resume Button Doesn't Work

Verify

```
public/resume.pdf
```

exists.

Check

```
data/site.ts
```

```
resume:"/resume.pdf"
```

---

## Profile Image Missing

Verify

```
public/profile.jpg
```

Check

```tsx
<Image

src="/profile.jpg"
/>
```

---

# 9. Projects Issues

## Project Not Showing

Check

```
data/projects.ts
```

Verify

```
featured
```

filters if applicable.

---

## Project Image Missing

Verify

```
public/projects/
```

Example

```
banking.png
```

---

## GitHub Button Wrong

Update

```
github:
```

inside

```
projects.ts
```

---

# 10. Contact Form Issues

## Form Not Sending

Current template

```
UI only
```

Integrate

- EmailJS
- Resend
- API Route

---

## Validation Not Working

Verify

```
react-hook-form
```

and

```
zod
```

are installed.

---

## Toast Not Showing

Verify

```tsx
<Toaster/>
```

exists inside

```
layout.tsx
```

---

# 11. Images Not Loading

## 404 Image

Verify

```
public/
```

contains

```
profile.jpg
```

Correct

```tsx
src="/profile.jpg"
```

Incorrect

```tsx
src="./profile.jpg"
```

---

## Next Image Error

Always include

```tsx
width

height

alt
```

when required.

---

# 12. Animation Issues

## Framer Motion Not Working

Verify

```bash
npm install framer-motion
```

---

## Reveal Animation Doesn't Trigger

Check

```tsx
viewport={{
once:true
}}
```

---

## Mouse Glow Missing

Verify

```
MouseGlow
```

is included in

```
layout.tsx
```

---

## Loading Screen Never Disappears

Check

```
sessionStorage
```

logic.

Clear browser storage if testing repeatedly.

---

# 13. SEO Issues

## robots.txt Missing

Verify

```
app/robots.ts
```

Visit

```
/robots.txt
```

---

## sitemap.xml Missing

Verify

```
app/sitemap.ts
```

Visit

```
/sitemap.xml
```

---

## Open Graph Image Missing

Verify

```
app/opengraph-image.tsx
```

---

## Twitter Card Missing

Verify

```
app/twitter-image.tsx
```

---

## JSON-LD Not Valid

Test

Google Rich Results Test

---

# 14. Deployment Issues

## Vercel Build Failed

Run locally

```bash
npm run build
```

Fix all errors before pushing.

---

## Wrong Website URL

Update

```
data/site.ts
```

Replace

```
https://your-domain.vercel.app
```

---

## Resume Download Broken

Verify

```
public/resume.pdf
```

exists.

---

# 15. Performance Issues

## Slow Loading

Optimize

- Images
- Fonts
- Animations

---

## Lighthouse Low Score

Check

- Large images
- Unused JavaScript
- Missing metadata
- Accessibility

---

# 16. Git Issues

## Detached HEAD

Example

```
HEAD detached
```

Create a branch

```bash
git checkout -b feature-name
```

---

## Push Rejected

Run

```bash
git pull --rebase
```

Then

```bash
git push
```

---

## Wrong Branch

Check

```bash
git branch
```

Switch

```bash
git checkout main
```

---

# 17. Frequently Asked Questions

---

## Where do I change my name?

```
data/site.ts
```

---

## Where do I change projects?

```
data/projects.ts
```

---

## Where do I change experience?

```
data/experience.ts
```

---

## Where do I change skills?

```
data/skills.ts
```

---

## Where do I change contact details?

```
data/contact.ts
```

or

```
data/site.ts
```

---

## Where do I replace my resume?

```
public/resume.pdf
```

---

## Where do I replace my profile picture?

```
public/profile.jpg
```

---

## Where do I update SEO?

```
app/layout.tsx

app/sitemap.ts

app/robots.ts

components/seo/JsonLd.tsx
```

---

## Where do I change the website URL?

Update

```
data/site.ts
```

and verify

```
app/layout.tsx

app/robots.ts

app/sitemap.ts

components/seo/JsonLd.tsx
```

---

# Debugging Workflow

When something breaks, follow this process:

```
1. Read the error message carefully
        ↓
2. Identify the affected file
        ↓
3. Verify imports and exports
        ↓
4. Check data source
        ↓
5. Run npm run build
        ↓
6. Fix TypeScript errors
        ↓
7. Test in browser
        ↓
8. Commit changes
```

---

# Useful Commands

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Create production build

```bash
npm run build
```

Start production server

```bash
npm start
```

Run linter

```bash
npm run lint
```

Type check (if configured)

```bash
npx tsc --noEmit
```

---

# Summary

Most issues fall into one of these categories:

- ✅ Missing or incorrect imports
- ✅ Incorrect file paths
- ✅ Mismatched navigation links and section IDs
- ✅ Missing assets in `public/`
- ✅ Incorrect data in `data/`
- ✅ TypeScript type mismatches
- ✅ Missing dependencies
- ✅ Deployment configuration issues

Following this guide should resolve the majority of development and deployment problems while keeping the codebase stable and maintainable.