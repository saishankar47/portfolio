# 🤖 Skills Update Agent

## Purpose

The Skills Update Agent is responsible for maintaining the **Skills** section of the portfolio.

The goal is to ensure the skills displayed always reflect the technologies used in professional experience and personal projects while keeping the UI clean, organized, and relevant.

The Skills section should represent current expertise—not every technology ever used.

---

# Responsibilities

The Skills Update Agent is responsible for:

- Adding new skills
- Removing outdated skills
- Updating skill categories
- Maintaining icon mappings
- Keeping technologies synchronized with Projects
- Keeping technologies synchronized with Experience
- Preventing duplicate skills
- Maintaining display order

---

# Primary Files

## Data

```
data/skills.ts
```

This is the source of truth.

Never hardcode skills inside components.

---

## Components

```
components/skills/

Skills.tsx

SkillCard.tsx

SkillCategory.tsx

SkillBadge.tsx
```

---

## Related Components

```
components/projects/

ProjectTechStack.tsx

ProjectCard.tsx
```

---

## Documentation

If the skill structure changes

Update

```
docs/data-model.md
```

---

# Skills Structure

Every category should follow

```ts
{
  category: string,

  skills: [
    {
      name: string,

      icon: string,

      level?: string,

      featured?: boolean
    }
  ]
}
```

If the project currently stores skills as strings, keep that structure until the application is refactored.

---

# Recommended Categories

```
Languages

Backend

Frontend

Databases

Cloud

DevOps

Testing

Tools

Architecture
```

Example

```
Languages

Java

TypeScript

JavaScript

SQL
```

---

# Recommended Display Order

```
Languages

↓

Backend

↓

Frontend

↓

Databases

↓

Cloud

↓

DevOps

↓

Tools
```

Keep categories consistent.

---

# Skill Guidelines

A technology should only appear if it has been used in

- Professional Experience

or

- Significant Personal Projects

Avoid adding technologies you have only experimented with briefly.

---

# Skill Levels (Optional)

If skill levels are used later

Use

```
Expert

Advanced

Intermediate

Beginner
```

Avoid percentages.

Example

```
Java

Expert
```

---

# Featured Skills

Featured skills are displayed first.

Examples

```
Java

Spring Boot

React

AWS

Next.js
```

Only mark technologies as featured if they represent your strongest skills.

---

# Synchronization Rules

Whenever a skill is added

Verify

```
Experience

↓

Projects

↓

Skills
```

All three should remain consistent.

---

# Experience Synchronization

If

```
Terraform
```

is added to

```
experience.ts
```

verify it also exists inside

```
skills.ts
```

---

# Project Synchronization

If a project uses

```
Kafka
```

ensure

```
Kafka
```

exists inside

```
skills.ts
```

---

# Hero Synchronization

If Hero statistics contain

```
Technologies

5+
```

Update

```
data/stats.ts
```

when significant changes occur.

---

# Icon Mapping

Every displayed skill should have an icon.

Examples

```
Java

Spring Boot

React

AWS

Docker
```

If an icon doesn't exist

Use

```
Code

Server

Cloud

Database
```

until a proper icon is added.

---

# Adding a New Skill

Step 1

Open

```
data/skills.ts
```

---

Step 2

Find the appropriate category.

Example

```
Cloud
```

---

Step 3

Add

```ts
"AWS CDK"
```

or

```ts
{
name:"AWS CDK"
}
```

depending on the current structure.

---

Step 4

Verify icon mapping.

---

Step 5

Run

```bash
npm run build
```

---

Step 6

Verify

Desktop

Tablet

Mobile

---

# Removing a Skill

Delete the skill from

```
data/skills.ts
```

Then verify

- No empty category remains
- Layout still looks balanced
- No references remain in Projects or Experience

---

# Creating a New Category

Example

```
AI & Machine Learning
```

Add

```ts
{
category:"AI & Machine Learning",

skills:[
"OpenAI",

"LangChain"
]
}
```

Only create new categories when at least three related skills exist.

---

# Naming Conventions

Use official names.

Correct

```
Spring Boot

Next.js

PostgreSQL

GitHub Actions

AWS
```

Avoid

```
Spring

Next

Postgres

Github

Amazon AWS
```

---

# Duplicate Prevention

Incorrect

```
Java

Java

Spring Boot
```

Correct

```
Java

Spring Boot
```

Every skill should appear only once.

---

# Validation Checklist

Before committing

- [ ] Skill added to correct category
- [ ] No duplicate skills
- [ ] Icons display correctly
- [ ] Experience synchronized
- [ ] Projects synchronized
- [ ] Hero stats reviewed
- [ ] Responsive layout verified
- [ ] Build passes
- [ ] No TypeScript errors

---

# Common Mistakes

❌ Hardcoding skills inside components

✅ Store all skills in

```
data/skills.ts
```

---

❌ Creating too many categories

Prefer fewer, well-organized categories.

---

❌ Listing every technology ever used

Only include technologies that represent your current professional skill set.

---

❌ Duplicate technologies

A technology should belong to one category only.

---

❌ Using inconsistent names

Use official technology names.

---

# Best Practices

- Highlight your strongest technologies first.
- Keep categories balanced.
- Review skills after every major project.
- Remove outdated technologies that no longer reflect your expertise.
- Ensure skills match your resume and LinkedIn profile.
- Keep naming consistent across Projects, Experience, and Skills.

---

# Success Criteria

A skills update is complete when:

- Skills display correctly in the UI.
- Categories remain organized.
- Icons render correctly.
- Projects and Experience use the same technology names.
- No duplicate skills exist.
- Responsive layouts remain intact.
- Build and TypeScript checks pass.
- Documentation remains accurate.
```