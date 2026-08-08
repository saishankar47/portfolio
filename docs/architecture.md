# 🏗️ Portfolio Architecture

This document explains the overall architecture of the portfolio, how the application is structured, how data flows through the project, and how each part of the system interacts.

---

# Table of Contents

1. High Level Architecture
2. Folder Structure
3. Application Flow
4. Rendering Flow
5. Component Hierarchy
6. Data Flow
7. Navigation Flow
8. Theme Architecture
9. Animation Architecture
10. SEO Architecture
11. Asset Management
12. Performance Strategy
13. Design Principles
14. Extending the Application

---

# 1. High Level Architecture

The portfolio follows a component-driven architecture using the Next.js App Router.

```
Browser
      │
      ▼
app/layout.tsx
      │
      ▼
Theme Provider
      │
      ▼
Global Components
│
├── Navbar
├── Loading Screen
├── Mouse Glow
├── Scroll Progress
├── Animated Background
└── Footer
      │
      ▼
Current Page
      │
      ▼
app/page.tsx
      │
      ▼
Page Sections
│
├── Hero
├── About
├── Skills
├── Experience
├── Projects
└── Contact
```

---

# 2. Folder Structure

```
app/
components/
constants/
data/
docs/
hooks/
lib/
public/
types/
```

---

## app/

Contains the application entry point.

```
app/

layout.tsx

page.tsx

robots.ts

sitemap.ts

manifest.ts

opengraph-image.tsx

twitter-image.tsx
```

Responsibilities

- Global Layout
- Metadata
- SEO
- Routing
- Providers

---

## components/

Every UI element belongs here.

```
components/

about/

common/

contact/

experience/

footer/

hero/

navbar/

projects/

seo/

skills/
```

Each folder owns one section.

---

## data/

Contains editable content.

No UI logic should live here.

```
site.ts

projects.ts

contact.ts

experience.ts

skills.ts
```

---

## constants/

Application constants.

Examples

```
navigation.ts

theme.ts

animations.ts
```

---

## hooks/

Reusable React hooks.

Examples

```
useMousePosition()

useScrollDirection()

useIntersectionObserver()
```

---

## lib/

Business logic.

Examples

```
github.ts

email.ts

helpers.ts
```

---

## public/

Static assets.

```
profile.jpg

resume.pdf

favicon.ico

projects/

icons/

images/
```

---

# 3. Application Flow

```
Browser

↓

layout.tsx

↓

Theme Provider

↓

Global Components

↓

Current Route

↓

Section Components

↓

Reusable Components

↓

Data Files
```

Every page is wrapped by layout.tsx.

---

# 4. Rendering Flow

The application renders in this order.

```
Loading Screen

↓

Animated Background

↓

Mouse Glow

↓

Scroll Progress

↓

Navbar

↓

Page

↓

Footer
```

This ensures global UI loads before page content.

---

# 5. Component Hierarchy

```
layout.tsx

│

├── ThemeProvider

│

├── LoadingScreen

├── ScrollProgress

├── MouseGlow

├── AnimatedBackground

│

├── Navbar

│

├── main

│     │

│     └── page.tsx

│            │

│            ├── Hero

│            ├── About

│            ├── Skills

│            ├── Experience

│            ├── Projects

│            └── Contact

│

└── Footer
```

---

# Hero Component

```
Hero

│

├── HeroContent

├── HeroImage

├── CTAButtons

├── SocialLinks

├── BackgroundEffects

└── Stats
```

---

# Projects Component

```
Projects

│

├── ProjectCard

│      │

│      ├── ProjectContent

│      ├── ProjectMetrics

│      ├── ProjectTechStack

│      └── ProjectActions
```

---

# Contact Component

```
Contact

│

├── ContactHeader

├── ContactInfo

├── ContactForm

├── ContactCard

└── SocialButtons
```

---

# Footer

```
Footer

│

├── FooterBrand

├── FooterLinks

├── FooterSocial

└── ScrollToTop
```

---

# 6. Data Flow

All editable information starts inside the data folder.

```
data/

↓

Component

↓

UI

↓

Browser
```

Example

```
projects.ts

↓

Projects.tsx

↓

ProjectCard.tsx

↓

ProjectContent.tsx
```

---

# Site Configuration

```
site.ts

↓

Navbar

↓

Hero

↓

Footer

↓

SEO

↓

Contact

↓

OpenGraph
```

One file controls the entire website identity.

---

# 7. Navigation Flow

Navigation is section-based.

```
Navbar

↓

Navigation Links

↓

Section ID

↓

Smooth Scroll
```

Example

```
#home

#about

#skills

#experience

#projects

#contact
```

Each section MUST have a matching id.

Example

```
<section id="about">

<section id="projects">

<section id="contact">
```

---

# 8. Theme Architecture

Dark/Light mode is managed globally.

```
ThemeProvider

↓

ThemeSwitcher

↓

Tailwind Dark Classes

↓

Entire UI
```

No component should manage theme state individually.

---

# 9. Animation Architecture

Animations use Framer Motion.

Global

```
Loading Screen

Mouse Glow

Animated Background

Scroll Progress
```

Section

```
Reveal

↓

Hero

↓

Projects

↓

Footer
```

Component

```
Hover

Tap

Scroll

Fade

Scale

Slide
```

---

# 10. SEO Architecture

```
layout.tsx

↓

Metadata

↓

OpenGraph

↓

Twitter Card

↓

JsonLd

↓

Robots

↓

Sitemap

↓

Manifest
```

Everything related to search engines stays inside app/ or components/seo.

---

# 11. Asset Management

Assets belong inside public/.

```
public/

profile.jpg

resume.pdf

favicon.ico

projects/

icons/

images/
```

Never place images inside components.

---

# 12. Performance Strategy

Current optimizations

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Component splitting
- Static assets
- Metadata API

Future improvements

- Dynamic Imports
- Image Optimization
- GitHub API caching
- Bundle Analysis
- Route-level code splitting

---

# 13. Design Principles

The project follows these principles.

## Single Responsibility

Every component should do one job.

Good

```
HeroImage.tsx
```

Bad

```
Hero.tsx
```

containing 700 lines.

---

## Reusability

Shared UI belongs inside

```
components/common/
```

Examples

- Reveal
- LoadingScreen
- AnimatedBackground
- MouseGlow

---

## Data Driven

Never hardcode personal information inside UI components.

Good

```
data/site.ts
```

Bad

```
const name = "Saishankar";
```

inside HeroContent.tsx.

---

## Separation of Concerns

```
UI

↓

Business Logic

↓

Data

↓

Assets
```

Each layer has one responsibility.

---

# 14. Extending the Application

Adding a new section

```
components/

↓

Create Folder

↓

Create Component

↓

Add Navigation

↓

Import in page.tsx
```

Adding a new project

```
data/projects.ts

↓

Projects.tsx

↓

Automatically Rendered
```

Changing profile image

```
public/profile.jpg
```

Changing resume

```
public/resume.pdf
```

Changing social links

```
data/site.ts
```

---

# Best Practices

✅ Keep UI inside components

✅ Keep data inside data/

✅ Keep assets inside public/

✅ Keep SEO inside app/

✅ Keep reusable utilities inside common/

✅ Prefer reusable components over duplicated code

---

# Architecture Summary

```
User

↓

Browser

↓

layout.tsx

↓

Theme Provider

↓

Global Components

↓

Current Page

↓

Reusable Components

↓

Data Files

↓

Static Assets

↓

Rendered Portfolio
```

The architecture is intentionally modular so that each section can evolve independently while sharing a common design system, animation strategy, and centralized data configuration.