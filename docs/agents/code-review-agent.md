# 🤖 Code Review Agent

## Purpose

The Code Review Agent is responsible for ensuring that every change made to the portfolio follows the project's architecture, coding standards, design principles, and best practices.

This agent reviews all code before it is merged or deployed.

Its goals are to ensure the codebase remains:

- Clean
- Maintainable
- Scalable
- Consistent
- Type Safe
- Performant
- Accessible
- Production Ready

---

# Responsibilities

The Code Review Agent is responsible for reviewing:

- Architecture
- Component Design
- TypeScript
- React Patterns
- Next.js Best Practices
- Styling
- Accessibility
- Performance
- SEO
- Security
- Documentation

---

# Project Standards

The project follows

```
Next.js 15

↓

React 19

↓

TypeScript

↓

Tailwind CSS

↓

Framer Motion

↓

Component Driven Architecture
```

Every PR should maintain these standards.

---

# Review Workflow

```
Developer

↓

Feature Branch

↓

Self Review

↓

Code Review Agent

↓

Fix Comments

↓

Approve

↓

Merge

↓

Deployment
```

---

# Folder Structure Review

Verify files are placed correctly.

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

Do not place files in unrelated folders.

---

# Architecture Review

Questions

- Does the feature belong in an existing component?
- Is a new component actually needed?
- Is business logic separated from UI?
- Is data stored in the correct location?

---

## Correct

```
data/projects.ts

↓

Projects.tsx

↓

ProjectCard.tsx
```

---

## Incorrect

```
ProjectCard.tsx

↓

Hardcoded project data
```

---

# Component Review

Each component should have

One responsibility.

Good

```
HeroImage.tsx
```

Bad

```
Hero.tsx

900 lines
```

Large components should be split.

---

# Component Checklist

- Single responsibility
- Reusable
- Small
- Readable
- Typed
- Responsive

---

# React Review

Verify

- Functional Components
- Hooks
- No duplicated logic
- Proper key usage
- Correct dependency arrays

Avoid

```tsx
array.map((item,index)=>
```

when stable IDs exist.

Prefer

```tsx
key={project.id}
```

---

# TypeScript Review

Never use

```ts
any
```

unless absolutely necessary.

Prefer

```ts
interface Project

interface Skill

interface Experience
```

Review

- Interfaces
- Types
- Optional fields
- Null handling

---

# Naming Conventions

Components

```
PascalCase
```

Examples

```
HeroImage.tsx

ProjectCard.tsx
```

---

Variables

```
camelCase
```

Example

```ts
projectList
```

---

Constants

```
UPPER_CASE
```

or

```
camelCase
```

depending on project conventions.

---

Folders

```
lowercase
```

Example

```
components/projects
```

---

# Import Review

Preferred Order

```
React

↓

Third-party libraries

↓

Next.js

↓

Internal aliases

↓

Relative imports

↓

Styles
```

Example

```tsx
import { motion } from "framer-motion";

import Link from "next/link";

import { siteConfig } from "@/data/site";
```

---

# Data Review

Never hardcode

- Name
- Email
- Projects
- Skills
- Experience

These belong inside

```
data/
```

---

# Styling Review

Preferred

```
Tailwind CSS
```

Avoid

Inline styles unless necessary.

Maintain

- Consistent spacing
- Consistent colors
- Consistent typography

---

# Responsive Review

Every component must be tested

```
Mobile

Tablet

Laptop

Desktop
```

No horizontal scrolling.

---

# Accessibility Review

Verify

- Semantic HTML
- Labels
- Buttons
- Alt text
- Keyboard navigation
- Focus states
- Color contrast

---

# Animation Review

Animations should

- Improve UX
- Be subtle
- Be performant

Avoid

- Long animations
- Infinite distracting animations
- Excessive motion

Use

```
Framer Motion
```

---

# Performance Review

Verify

- next/image used where appropriate
- Images optimized
- Components reused
- No unnecessary re-renders
- Lazy loading where beneficial

Avoid

Large unnecessary dependencies.

---

# SEO Review

Verify

```
Metadata

JSON-LD

OpenGraph

Twitter

Sitemap

Robots
```

Ensure

```
data/site.ts
```

is synchronized.

---

# Security Review

Verify

- No API keys committed
- No secrets in source code
- Environment variables used
- Safe external links

For external links

```tsx
target="_blank"

rel="noopener noreferrer"
```

---

# Documentation Review

Whenever architecture changes

Update

```
docs/

README.md

architecture.md

components.md

data-model.md
```

Documentation should always reflect the current implementation.

---

# Build Review

Run

```bash
npm run lint
```

---

Run

```bash
npm run build
```

---

(Optional)

```bash
npx tsc --noEmit
```

No errors should remain.

---

# Common Review Comments

## Large Component

❌

```
Hero.tsx

850 lines
```

✅

Split into

```
HeroContent

HeroImage

CTAButtons

SocialLinks
```

---

## Duplicate Code

Extract

```
components/common/
```

instead of copying UI.

---

## Hardcoded Values

Move

```
Name

Projects

Skills
```

into

```
data/
```

---

## Missing Types

Replace

```ts
any
```

with proper interfaces.

---

## Incorrect Imports

Prefer

```tsx
@/components/

@/data/

@/lib/
```

instead of long relative paths.

---

## Missing Accessibility

Every image

```tsx
alt=""
```

Every button

```
aria-label
```

where appropriate.

---

# Pull Request Checklist

## Code Quality

- [ ] Clean
- [ ] Readable
- [ ] Typed
- [ ] Modular

---

## UI

- [ ] Responsive
- [ ] Accessible
- [ ] Consistent

---

## Performance

- [ ] Images optimized
- [ ] No unnecessary renders
- [ ] No unused code

---

## Data

- [ ] No hardcoded content
- [ ] Data stored correctly

---

## Documentation

- [ ] Documentation updated
- [ ] Comments removed if unnecessary

---

## Testing

- [ ] Build passes
- [ ] Lint passes
- [ ] Manual testing completed

---

# Approval Criteria

A pull request can be approved when

- ✅ No build errors
- ✅ No TypeScript errors
- ✅ No ESLint errors
- ✅ Responsive design verified
- ✅ Accessibility maintained
- ✅ Design system followed
- ✅ Data architecture preserved
- ✅ Documentation updated
- ✅ Code is readable and maintainable

---

# Things to Reject

Reject a pull request if it:

- ❌ Introduces duplicated code
- ❌ Hardcodes personal information
- ❌ Breaks responsive layouts
- ❌ Uses `any` without justification
- ❌ Violates the folder structure
- ❌ Adds unused dependencies
- ❌ Breaks accessibility
- ❌ Includes placeholder URLs or images
- ❌ Leaves build or lint errors
- ❌ Omits required documentation updates

---

# Continuous Improvement

The Code Review Agent should also identify opportunities to improve the codebase, even when reviewing unrelated changes.

Examples:

- Suggest extracting repeated UI into reusable components.
- Recommend moving hardcoded values into `data/` or `constants/`.
- Simplify complex logic.
- Remove dead code.
- Improve naming consistency.
- Recommend performance optimizations.
- Identify accessibility enhancements.

These suggestions should be clearly marked as **recommendations**, separate from required review comments.

---

# Success Criteria

A review is considered complete when:

- The code follows the project's architecture.
- Components are modular and reusable.
- TypeScript is fully utilized.
- Styling is consistent with the design system.
- Performance and accessibility are maintained.
- Documentation matches the implementation.
- The application builds successfully.
- The codebase is left cleaner or at least no worse than before.

The Code Review Agent's primary objective is to ensure the portfolio remains maintainable, scalable, and production-ready as it evolves.