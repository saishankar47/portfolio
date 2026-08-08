# 🚀 Saishankar Portfolio Documentation

Welcome to the developer documentation for the **Saishankar Portfolio** project.

This documentation is intended for anyone maintaining, extending, or customizing the portfolio—including future versions of myself.

Instead of searching through the codebase, use these documents to quickly understand the architecture, where data lives, and how to customize the portfolio safely.

---

# 📌 Project Overview

This portfolio is built using modern web technologies with a focus on:

- Performance
- Accessibility
- Responsive Design
- Reusability
- Maintainability
- SEO
- Modern UI/UX
- Production Readiness

The application follows a **component-driven architecture**, where each section is self-contained and reusable.

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 15 | Framework |
| React 19 | UI Library |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| next-themes | Dark / Light Mode |
| React Icons | Icons |
| Lucide React | UI Icons |
| React Hook Form | Forms |
| Zod | Validation |
| React Hot Toast | Notifications |

---

# 📁 Project Structure

```text
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

## 📂 app/

Contains the application's routing and global configuration.

Examples:

```
app/
│
├── layout.tsx
├── page.tsx
├── robots.ts
├── sitemap.ts
├── manifest.ts
├── opengraph-image.tsx
└── twitter-image.tsx
```

Responsible for:

- Global Layout
- Metadata
- SEO
- OpenGraph
- Routing

---

## 📂 components/

Contains every reusable UI component.

Example:

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

Every section of the portfolio has its own folder.

---

## 📂 data/

Contains all editable content.

Examples:

```
site.ts
projects.ts
contact.ts
experience.ts
skills.ts
```

If you want to change text shown on the website, start here.

---

## 📂 public/

Contains static assets.

Examples

```
profile.jpg

resume.pdf

favicon.ico

projects/

icons/
```

---

## 📂 docs/

Contains developer documentation.

```
README.md

architecture.md

components.md

customization.md

data-model.md

deployment.md

seo.md

troubleshooting.md

roadmap.md
```

---

# 📚 Documentation Index

## architecture.md

Explains:

- Application Architecture
- Rendering Flow
- Data Flow
- Layout Hierarchy

---

## components.md

Documents every component including:

- Purpose
- Props
- Children
- Dependencies
- Editable areas

---

## data-model.md

Documents every file inside the `data` folder.

Examples:

- site.ts
- projects.ts
- experience.ts
- contact.ts

This is the first document to read before changing any content.

---

## customization.md

Step-by-step guide for common tasks.

Examples:

- Change profile picture
- Update resume
- Add a project
- Change social links
- Add a new navigation item
- Update experience
- Change theme colors

---

## seo.md

Explains:

- Metadata
- Robots
- Sitemap
- Manifest
- JSON-LD
- OpenGraph
- Twitter Cards

---

## deployment.md

Deployment guide.

Topics include:

- GitHub
- Vercel
- Custom Domain
- Analytics
- Environment Variables

---

## troubleshooting.md

Common issues and fixes.

Examples:

- Navigation 404
- Missing images
- Theme not changing
- Animation issues
- Build failures

---

## roadmap.md

Future improvements.

Examples:

- GitHub API
- LeetCode
- Blog
- CMS
- Visitor Counter
- Analytics

---

# 🚀 Development Workflow

When making changes, follow this order.

### Content Updates

```
data/

↓

Components

↓

Verify UI

↓

Deploy
```

---

### UI Changes

```
components/

↓

Test Responsiveness

↓

Accessibility

↓

Deploy
```

---

### SEO Changes

```
layout.tsx

↓

SEO Files

↓

Validate

↓

Deploy
```

---

# 📦 Build Commands

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Build production

```bash
npm run build
```

Start production server

```bash
npm start
```

Lint project

```bash
npm run lint
```

---

# 📖 Coding Standards

- Use TypeScript everywhere.
- Prefer reusable components.
- Keep business data inside the `data` directory.
- Avoid hardcoded personal information inside UI components.
- Reuse animations through shared components where practical.
- Follow consistent naming conventions.
- Keep components focused on a single responsibility.

---

# 🎯 Goals

This portfolio aims to demonstrate:

- Enterprise Software Development
- Java
- Spring Boot
- React
- Next.js
- AWS
- Docker
- Kubernetes
- Cloud Architecture
- Full Stack Development

while remaining maintainable, performant, and easy to extend.

---

# 📌 Where to Start

If you are new to the project, read the documentation in this order:

1. **architecture.md**
2. **data-model.md**
3. **components.md**
4. **customization.md**
5. **seo.md**
6. **deployment.md**
7. **troubleshooting.md**
8. **roadmap.md**

Following this order provides a complete understanding of the project before making changes.

---

# 📄 License

This project is maintained as a personal portfolio. Feel free to use it as inspiration, but customize it with your own content, branding, and assets before publishing.