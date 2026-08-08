# 🧩 Components Documentation

This document explains every component in the portfolio, its purpose, dependencies, editable areas, and how it fits into the application.

---

# Table of Contents

1. Component Philosophy
2. Folder Structure
3. Navbar Components
4. Hero Components
5. About Components
6. Skills Components
7. Experience Components
8. Projects Components
9. Contact Components
10. Footer Components
11. Common Components
12. SEO Components
13. Component Communication
14. Best Practices
15. Adding New Components

---

# 1. Component Philosophy

The portfolio follows the **Single Responsibility Principle (SRP)**.

Each component should have **one responsibility only**.

Example:

```
Hero

↓

HeroContent

↓

HeroImage

↓

CTAButtons

↓

SocialLinks
```

Avoid creating one file that contains an entire section.

---

# 2. Folder Structure

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

Each folder represents one section of the portfolio.

---

# 3. Navbar Components

Folder

```
components/navbar/
```

---

## Navbar.tsx

### Purpose

Main navigation container.

Responsible for:

- Sticky navigation
- Scroll detection
- Mobile menu state
- Desktop layout
- Glassmorphism effect

### Uses

```
NavLinks

MobileMenu

ThemeSwitcher
```

### Editable

Layout

Logo

Buttons

Spacing

---

## NavLinks.tsx

### Purpose

Displays navigation links.

### Reads From

```
constants/navigation.ts
```

### Responsibilities

- Navigation items
- Active link
- Smooth scrolling
- Mobile/Desktop support

### Update When

Adding a new section.

---

## MobileMenu.tsx

### Purpose

Responsive navigation drawer.

### Features

- Slide animation
- ESC key support
- Click outside to close
- Theme switcher
- Responsive menu

---

# 4. Hero Components

Folder

```
components/hero/
```

---

## Hero.tsx

Top-level Hero section.

Contains:

```
HeroContent

HeroImage

BackgroundEffects

Stats
```

Usually does not contain business logic.

---

## HeroContent.tsx

Contains

- Greeting
- Name
- Description
- Typing Animation
- CTA Buttons
- Social Links

### Editable

Professional summary

Title

Resume

---

## HeroImage.tsx

Displays

Profile picture

Background glow

Floating animation

### Editable

```
public/profile.jpg
```

---

## CTAButtons.tsx

Contains

Resume Download

Contact Me

Buttons

### Editable

Button text

Icons

URLs

---

## SocialLinks.tsx

Displays

GitHub

LinkedIn

Email

LeetCode

### Reads From

```
data/site.ts
```

---

## BackgroundEffects.tsx

Contains decorative animations.

No business logic.

---

## Stats.tsx

Displays

Years Experience

Projects

Technologies

Certification

### Reads From

Internal data.

Can later be moved to

```
data/stats.ts
```

---

# 5. About Components

Folder

```
components/about/
```

---

## About.tsx

Contains

Introduction

Education

Highlights

Professional summary

### Editable

Professional information.

---

# 6. Skills Components

Folder

```
components/skills/
```

---

## Skills.tsx

Main skills section.

Displays

Categories

Cards

Icons

### Reads From

```
data/skills.ts
```

---

## SkillCard.tsx

Reusable card.

Displays

Skill

Icon

Experience

Hover animation

---

# 7. Experience Components

Folder

```
components/experience/
```

---

## Experience.tsx

Timeline container.

Reads

```
data/experience.ts
```

---

## ExperienceCard.tsx

Displays

Company

Role

Duration

Achievements

Technologies

---

# 8. Projects Components

Folder

```
components/projects/
```

---

## Projects.tsx

Main project section.

Reads

```
data/projects.ts
```

Maps projects into cards.

---

## ProjectCard.tsx

Displays

Project image

Title

Description

Actions

Metrics

Technology stack

---

## ProjectContent.tsx

Responsible for

Title

Description

Featured badge

---

## ProjectMetrics.tsx

Displays

Team Size

Users

Duration

Performance

---

## ProjectTechStack.tsx

Displays

Technology chips

Icons

Hover effects

### Editable

Add icon mappings when adding new technologies.

---

## ProjectActions.tsx

Contains

GitHub Button

Demo Button

Future additions

- Case Study
- Video Demo

---

# 9. Contact Components

Folder

```
components/contact/
```

---

## Contact.tsx

Main contact section.

Contains

```
ContactHeader

ContactInfo

SocialButtons

ContactForm
```

---

## ContactHeader.tsx

Section title.

Subtitle.

---

## ContactInfo.tsx

Displays

Email

Phone

Location

Resume

Availability

Reads

```
data/contact.ts
```

---

## ContactCard.tsx

Reusable information card.

---

## SocialButtons.tsx

Displays

GitHub

LinkedIn

Email

Instagram (optional)

Reads

```
data/contact.ts
```

---

## ContactForm.tsx

Contains

React Hook Form

Validation

Toast

Email Integration

Future

EmailJS

Resend

API Route

---

# 10. Footer Components

Folder

```
components/footer/
```

---

## Footer.tsx

Footer container.

Contains

```
FooterBrand

FooterLinks

FooterSocial

ScrollToTop
```

---

## FooterBrand.tsx

Brand information.

Open to Work badge.

---

## FooterLinks.tsx

Quick links.

Reads

```
constants/navigation.ts
```

---

## FooterSocial.tsx

Social icons.

Resume.

Reads

```
data/site.ts
```

---

## ScrollToTop.tsx

Floating button.

Appears after scrolling.

---

# 11. Common Components

Folder

```
components/common/
```

Reusable across the project.

---

## ThemeSwitcher.tsx

Dark/Light mode toggle.

---

## LoadingScreen.tsx

Displays before first page load.

---

## ScrollProgress.tsx

Top progress indicator.

---

## MouseGlow.tsx

Cursor glow effect.

---

## AnimatedBackground.tsx

Animated mesh background.

---

## Reveal.tsx

Reusable reveal animation.

Wraps sections like:

```
<Reveal>

Projects

</Reveal>
```

---

# 12. SEO Components

Folder

```
components/seo/
```

---

## JsonLd.tsx

Injects structured data.

Used by Google.

---

# 13. Component Communication

```
Data

↓

Section Component

↓

Child Component

↓

Reusable Component

↓

UI
```

Example

```
projects.ts

↓

Projects.tsx

↓

ProjectCard.tsx

↓

ProjectMetrics.tsx
```

---

# 14. Best Practices

✅ One responsibility per component

✅ Avoid files larger than ~300 lines where practical

✅ Keep reusable UI in `common/`

✅ Keep content in `data/`

✅ Keep navigation in `constants/`

✅ Strong TypeScript typing

✅ Prefer composition over duplication

---

# 15. Adding a New Component

Example

Adding a Certifications section.

Step 1

```
components/certifications/
```

Step 2

```
Certifications.tsx
```

Step 3

```
data/certifications.ts
```

Step 4

Import into

```
app/page.tsx
```

Step 5

Add navigation

```
constants/navigation.ts
```

Step 6

Add section id

```
<section id="certifications">
```

---

# Component Dependency Summary

```
layout.tsx

│

├── Navbar

├── LoadingScreen

├── MouseGlow

├── AnimatedBackground

├── ScrollProgress

│

└── page.tsx

      │

      ├── Hero

      ├── About

      ├── Skills

      ├── Experience

      ├── Projects

      ├── Contact

      └── Footer
```

---

# Summary

The portfolio is built using a modular, reusable component architecture.

- **UI** belongs in `components/`
- **Content** belongs in `data/`
- **Navigation** belongs in `constants/`
- **SEO** belongs in `app/` and `components/seo/`
- **Reusable functionality** belongs in `components/common/`

Following this structure keeps the codebase maintainable, scalable, and easy to extend.