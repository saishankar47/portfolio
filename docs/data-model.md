# 📊 Data Model Documentation

This document explains every data file used in the portfolio, what it controls, and how to update it safely.

> **Rule of Thumb**
>
> If you need to change text, links, personal information, projects, experience, or skills, you should update the **data** folder—not the UI components.

---

# Table of Contents

1. Overview
2. Data Folder Structure
3. site.ts
4. navigation.ts
5. contact.ts
6. projects.ts
7. experience.ts
8. skills.ts
9. stats.ts
10. Assets
11. Data Relationships
12. Adding New Data
13. Best Practices
14. Quick Reference

---

# 1. Overview

The portfolio separates **content** from **presentation**.

Instead of hardcoding values inside React components, all editable information should be stored inside the **data** folder.

Example:

❌ Avoid

```tsx
<h1>Saishankar Vanam</h1>
```

✅ Prefer

```tsx
<h1>{siteConfig.name}</h1>
```

This makes future updates much easier.

---

# 2. Data Folder Structure

```
data/

site.ts

contact.ts

projects.ts

experience.ts

skills.ts

stats.ts
```

Each file has a single responsibility.

---

# 3. site.ts

Location

```
data/site.ts
```

## Purpose

This is the **master configuration** of the portfolio.

Most components read from this file.

---

## Controls

- Name
- Title
- Headline
- Description
- Website URL
- Email
- Phone
- Location
- Resume
- Profile Image
- Social Links
- SEO Keywords

---

## Used By

```
Hero

Navbar

Footer

SEO

Contact

OpenGraph

Twitter Image

JsonLd
```

---

## Example

```ts
name: "Saishankar Vanam"

title: "Software Engineer"

email: "your@email.com"

github: "https://github.com/username"

linkedin: "https://linkedin.com/in/username"

resume: "/resume.pdf"
```

---

## When To Edit

Change

- Name
- Job Title
- Social Media
- Resume
- Website URL
- Profile Image

---

# 4. navigation.ts

Location

```
constants/navigation.ts
```

## Purpose

Controls every navigation item displayed in the Navbar and Footer.

---

## Example

```ts
[
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Projects",
    href: "#projects",
  },
]
```

---

## Used By

Navbar

Footer

Mobile Menu

---

## Important

The `href` **must** match the section id.

Example

```
href

↓

#projects

↓

<section id="projects">
```

If these don't match, navigation will fail.

---

# 5. contact.ts

Location

```
data/contact.ts
```

## Purpose

Stores contact information.

---

## Controls

- Email
- Phone
- Location
- LinkedIn
- GitHub
- Resume
- Availability

---

## Used By

```
ContactInfo

SocialButtons

FooterSocial
```

---

## Example

```ts
email: "abc@gmail.com"

phone: "+1 555 555 5555"

location: "Charlotte, NC"

resume: "/resume.pdf"
```

---

# 6. projects.ts

Location

```
data/projects.ts
```

## Purpose

Stores every project displayed in the portfolio.

Projects render automatically.

---

## Structure

```ts
Project

↓

Title

Description

Image

Technologies

Metrics

GitHub

Demo

Featured
```

---

## Example

```ts
{
    id:1,

    title:"Enterprise Banking",

    description:"...",

    image:"/projects/banking.png",

    github:"...",

    demo:"...",

    featured:true,

    technologies:[...],

    metrics:[...]
}
```

---

## Used By

```
Projects.tsx

↓

ProjectCard.tsx

↓

ProjectContent.tsx

↓

ProjectActions.tsx

↓

ProjectMetrics.tsx
```

---

## Add New Project

1.

Open

```
data/projects.ts
```

2.

Copy existing project

3.

Update values

4.

Save

The UI updates automatically.

---

## Project Images

Images belong inside

```
public/projects/
```

Example

```
public/projects/

banking.png

resume.png

portfolio.png
```

---

# 7. experience.ts

Location

```
data/experience.ts
```

## Purpose

Stores professional work experience.

---

## Example

```ts
Company

Role

Duration

Location

Description

Technologies

Achievements
```

---

## Used By

```
Experience.tsx

↓

ExperienceCard.tsx
```

---

## Add Experience

Simply append another object.

No component changes required.

---

# 8. skills.ts

Location

```
data/skills.ts
```

## Purpose

Stores every technology.

---

## Categories

Example

```
Frontend

Backend

Cloud

Database

Tools

Languages
```

---

## Used By

```
Skills.tsx

↓

SkillCard.tsx
```

---

## Example

```ts
{
 category:"Backend",

 skills:[

"Java",

"Spring Boot",

"Kafka"
]
}
```

---

# 9. stats.ts

Location

```
data/stats.ts
```

## Purpose

Controls Hero statistics.

Example

```
3+

Years

20+

Projects

5+

Technologies

AWS Certified
```

---

## Used By

```
Hero

↓

Stats.tsx
```

---

# 10. Assets

Static assets belong inside

```
public/
```

---

## Profile Picture

```
public/profile.jpg
```

---

## Resume

```
public/resume.pdf
```

---

## Project Images

```
public/projects/
```

---

## Icons

```
public/icons/
```

---

## Favicons

```
public/favicon.ico

public/apple-touch-icon.png

public/icon-192.png

public/icon-512.png
```

---

# 11. Data Relationships

```
site.ts

│

├── Hero

├── Footer

├── Contact

├── SEO

└── Navbar


projects.ts

↓

Projects

↓

ProjectCard


experience.ts

↓

Experience

↓

ExperienceCard


skills.ts

↓

Skills

↓

SkillCard


contact.ts

↓

ContactInfo

↓

SocialButtons
```

---

# 12. Adding New Data

Example

Adding Certifications

Step 1

```
data/certifications.ts
```

Step 2

```
components/certifications/
```

Step 3

Import

```
page.tsx
```

Done.

---

# 13. Best Practices

✅ Keep all editable content inside the **data** folder.

✅ Do not hardcode personal information inside components.

✅ Store images in the **public** folder.

✅ Use TypeScript interfaces for all data.

✅ Keep URLs in one place (`site.ts` or `contact.ts`).

✅ Reuse data instead of duplicating it.

---

# 14. Quick Reference

| I want to change... | File |
|----------------------|------|
| Name | `data/site.ts` |
| Job Title | `data/site.ts` |
| Headline | `data/site.ts` |
| Description | `data/site.ts` |
| Email | `data/site.ts` or `data/contact.ts` |
| Phone | `data/contact.ts` |
| Resume | `public/resume.pdf` + `data/site.ts` |
| GitHub | `data/site.ts` |
| LinkedIn | `data/site.ts` |
| LeetCode | `data/site.ts` |
| Navigation Menu | `constants/navigation.ts` |
| Hero Stats | `data/stats.ts` |
| Skills | `data/skills.ts` |
| Experience | `data/experience.ts` |
| Projects | `data/projects.ts` |
| Project Images | `public/projects/` |
| Profile Photo | `public/profile.jpg` |
| Favicon | `public/favicon.ico` |
| SEO URL | `data/site.ts` + `app/layout.tsx` |
| Open Graph Image | `app/opengraph-image.tsx` |
| Twitter Image | `app/twitter-image.tsx` |

---

# Summary

The **data folder is the single source of truth** for the portfolio.

Whenever possible:

- Update **data**, not components.
- Store content separately from UI.
- Keep assets in `public/`.
- Keep navigation in `constants/`.
- Keep SEO configuration centralized through `site.ts`.

Following this approach makes the portfolio easier to maintain, scale, and personalize without modifying the UI logic.