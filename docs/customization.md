# 🎨 Portfolio Customization Guide

This guide explains how to customize every part of the portfolio without needing to understand the entire codebase.

Whether you're updating your personal information, adding a new project, replacing images, or changing colors, this document tells you exactly where to make the change.

---

# Table of Contents

1. Personal Information
2. Profile Picture
3. Resume
4. Navigation
5. Hero Section
6. About Section
7. Skills
8. Experience
9. Projects
10. Contact
11. Footer
12. Theme & Colors
13. Animations
14. SEO
15. Images
16. Icons
17. Fonts
18. Adding a New Section
19. Common Customizations
20. Pre-Deployment Checklist

---

# 1. Personal Information

## File

```
data/site.ts
```

Update:

- Name
- Job Title
- Headline
- Description
- Website URL
- Social Links
- Email
- Phone
- Resume URL
- Profile Image

Example

```ts
export const siteConfig = {
  name: "Saishankar Vanam",

  title: "Software Engineer",

  email: "your@email.com",

  github: "https://github.com/username",

  linkedin: "https://linkedin.com/in/username",
};
```

---

# 2. Change Profile Picture

Replace

```
public/profile.jpg
```

Recommended

- JPG
- Square Image
- 800×800
- Professional Headshot

No code changes required.

---

# 3. Change Resume

Replace

```
public/resume.pdf
```

Verify

```
data/site.ts
```

Example

```ts
resume: "/resume.pdf"
```

---

# 4. Update Navigation

File

```
constants/navigation.ts
```

Example

```ts
{
    title: "Projects",

    href:"#projects"
}
```

If adding a new menu item

Also create

```
<section id="projects">
```

inside the corresponding component.

---

# 5. Customize Hero Section

Folder

```
components/hero/
```

Editable Files

```
HeroContent.tsx

HeroImage.tsx

CTAButtons.tsx

SocialLinks.tsx

Stats.tsx
```

Update

- Greeting
- Professional Summary
- Hero Image
- CTA Buttons
- Statistics

---

# 6. Customize About Section

Folder

```
components/about/
```

Update

- Biography
- Education
- Career Summary
- Highlights
- Certifications

Recommended

Move all text into

```
data/about.ts
```

for easier maintenance.

---

# 7. Update Skills

File

```
data/skills.ts
```

Example

```ts
{
category:"Cloud",

skills:[

"AWS",

"Docker",

"Kubernetes"
]
}
```

The UI updates automatically.

---

# 8. Update Experience

File

```
data/experience.ts
```

Each experience contains

- Company
- Role
- Duration
- Description
- Technologies
- Achievements

Example

```ts
{
company:"ABC",

role:"Software Engineer",

duration:"2024-Present",

technologies:[

"Java",

"Spring Boot"
]
}
```

---

# 9. Update Projects

File

```
data/projects.ts
```

Every project contains

```
Title

Description

Image

GitHub

Demo

Technologies

Metrics

Featured
```

Example

```ts
{
title:"Portfolio",

image:"/projects/portfolio.png"
}
```

Project images belong inside

```
public/projects/
```

---

# 10. Update Contact Information

Files

```
data/contact.ts

data/site.ts
```

Update

- Email
- Phone
- LinkedIn
- GitHub
- Resume
- Availability

No component changes needed.

---

# 11. Customize Footer

Folder

```
components/footer/
```

Update

- Branding
- Copyright
- Social Links
- Resume Button

Most information comes from

```
data/site.ts
```

---

# 12. Change Theme Colors

Global Colors

```
app/globals.css
```

Tailwind Classes

```
text-blue-500

bg-blue-500

border-blue-500
```

Recommended

Use CSS variables instead of hardcoded colors.

---

# 13. Customize Animations

Folder

```
components/common/
```

Files

```
Reveal.tsx

MouseGlow.tsx

AnimatedBackground.tsx

LoadingScreen.tsx

ScrollProgress.tsx
```

Animation timing

```ts
duration

delay

ease

stiffness
```

can be modified inside these files.

---

# 14. SEO

Files

```
app/layout.tsx

app/sitemap.ts

app/robots.ts

app/manifest.ts

components/seo/JsonLd.tsx

app/opengraph-image.tsx

app/twitter-image.tsx
```

Update

- Website URL
- Title
- Description
- Keywords
- OpenGraph
- Twitter Card

---

# 15. Replace Images

Folder

```
public/
```

Contains

```
profile.jpg

resume.pdf

favicon.ico

projects/

icons/
```

Always replace images here.

Avoid importing local images into components unless using `next/image` intentionally.

---

# 16. Change Icons

Icons come from

```
lucide-react

react-icons
```

Example

```tsx
import { Github } from "lucide-react";
```

or

```tsx
import { FaGithub } from "react-icons/fa";
```

---

# 17. Change Font

File

```
app/layout.tsx
```

Current

```tsx
import { Inter } from "next/font/google";
```

Change to

```tsx
import { Poppins } from "next/font/google";
```

or

```tsx
import { Outfit } from "next/font/google";
```

No other changes required.

---

# 18. Add a New Section

Example

```
Certifications
```

Step 1

Create

```
components/certifications/
```

Step 2

Create

```
Certifications.tsx
```

Step 3

Add

```
data/certifications.ts
```

Step 4

Import into

```
app/page.tsx
```

Step 5

Update

```
constants/navigation.ts
```

Step 6

Add

```tsx
<section id="certifications">
```

Done.

---

# 19. Common Customizations

## Change Name

```
data/site.ts
```

---

## Change Email

```
data/site.ts

or

data/contact.ts
```

---

## Change Resume

```
public/resume.pdf
```

---

## Change LinkedIn

```
data/site.ts
```

---

## Change GitHub

```
data/site.ts
```

---

## Change Hero Text

```
HeroContent.tsx

or

data/site.ts
```

---

## Change Experience

```
data/experience.ts
```

---

## Change Skills

```
data/skills.ts
```

---

## Add Project

```
data/projects.ts
```

---

## Replace Project Image

```
public/projects/
```

---

## Replace Profile Image

```
public/profile.jpg
```

---

## Change Theme Color

```
globals.css
```

---

## Change Favicon

```
public/favicon.ico
```

---

## Change Website URL

```
data/site.ts

layout.tsx

robots.ts

sitemap.ts
```

---

# 20. Pre-Deployment Checklist

Before deploying, verify the following:

## Personal Information

- [ ] Name updated
- [ ] Job title updated
- [ ] Email updated
- [ ] Phone updated
- [ ] LinkedIn updated
- [ ] GitHub updated
- [ ] Resume replaced

---

## Images

- [ ] Profile photo replaced
- [ ] Project screenshots added
- [ ] Open Graph image verified
- [ ] Twitter image verified
- [ ] Favicon replaced

---

## Projects

- [ ] Placeholder projects removed
- [ ] GitHub links updated
- [ ] Demo links updated
- [ ] Project descriptions reviewed

---

## SEO

- [ ] Domain updated
- [ ] Metadata updated
- [ ] Sitemap verified
- [ ] Robots verified
- [ ] JSON-LD updated

---

## Deployment

- [ ] Production build successful
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Mobile responsive
- [ ] Contact form tested
- [ ] Resume download tested
- [ ] Navigation tested
- [ ] Lighthouse score checked

---

# Customization Philosophy

The portfolio is designed so that most changes require editing **configuration and data files**, not UI components.

Preferred workflow:

```
Need to update content?

↓

Check data/

↓

Need to update appearance?

↓

Check components/

↓

Need to update branding?

↓

Check site.ts

↓

Need to update assets?

↓

Check public/

↓

Need to update SEO?

↓

Check app/ + components/seo/
```

Following this workflow keeps the project clean, maintainable, and easy to customize over time.