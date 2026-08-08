# 🤖 Experience Update Agent

## Purpose

The Experience Update Agent is responsible for maintaining the **Professional Experience** section of the portfolio.

This includes:

- Adding new jobs
- Updating existing experience
- Managing promotions
- Updating achievements
- Maintaining technology lists
- Keeping the timeline accurate
- Ensuring consistency across the portfolio

The agent must always preserve chronological order, professional wording, and data consistency.

---

# Responsibilities

The Experience Update Agent is responsible for:

- Adding a new company
- Updating an existing company
- Recording promotions
- Updating job titles
- Updating responsibilities
- Updating achievements
- Updating technologies
- Updating employment dates
- Updating location
- Maintaining timeline order

---

# Primary Files

## Data

```
data/experience.ts
```

This is the source of truth.

Never hardcode experience inside components.

---

## Components

```
components/experience/

Experience.tsx

ExperienceTimeline.tsx

ExperienceCard.tsx

ExperienceHeader.tsx
```

---

## Documentation

If the data model changes, update:

```
docs/data-model.md
```

---

# Experience Structure

Every experience should follow this structure.

```ts
{
  id: number,

  company: string,

  position: string,

  employmentType: string,

  location: string,

  startDate: string,

  endDate: string,

  current: boolean,

  description: string,

  achievements: string[],

  technologies: string[]
}
```

---

# Required Fields

Every experience should include:

- Company Name
- Job Title
- Employment Type
- Location
- Start Date
- End Date (or Present)
- Summary
- Achievements
- Technologies

Never leave required fields empty.

---

# Employment Types

Use consistent values.

Examples

```
Full-time

Part-time

Contract

Internship

Freelance
```

Avoid abbreviations.

---

# Dates

Preferred format

```
Jan 2024

Aug 2025
```

For current employment

```ts
current: true

endDate: "Present"
```

Do not use today's date for ongoing roles.

---

# Experience Ordering

Always display experience from newest to oldest.

Correct

```
Current Company

↓

Previous Company

↓

Older Company
```

Never sort alphabetically.

---

# Job Titles

Use the official title.

Examples

```
Software Engineer

Software Developer

Senior Software Engineer

Full Stack Developer
```

Avoid internal abbreviations.

---

# Company Names

Use official company names.

Examples

```
Bank of America

Infosys

Accenture
```

Avoid shortened versions unless they are the official brand.

---

# Description Guidelines

The summary should explain:

- What the role involved
- What systems were built
- Business domain
- Primary responsibilities

Recommended length

```
2–4 sentences
```

Example

```
Developed scalable enterprise banking applications using Java,
Spring Boot, Kafka, PostgreSQL, and AWS.

Designed REST APIs, optimized backend performance,
and collaborated with cross-functional teams
to deliver cloud-native microservices.
```

---

# Achievements

Achievements should be measurable whenever possible.

Good Examples

```
Reduced API response time by 35%.

Migrated legacy services to Spring Boot.

Designed REST APIs used by multiple applications.

Automated CI/CD deployment pipeline.

Improved application performance.

Implemented Kafka event processing.
```

Avoid vague statements like

```
Worked on Java.

Helped team.

Fixed bugs.
```

---

# Technologies

Only list technologies actually used.

Preferred order

```
Language

Framework

Database

Messaging

Cloud

DevOps

Tools
```

Example

```
Java

Spring Boot

Spring Security

Kafka

PostgreSQL

AWS

Docker

Git
```

---

# Promotions

If promoted within the same company:

Preferred

```
Company

├── Senior Software Engineer

└── Software Engineer
```

Instead of creating duplicate companies.

If the UI doesn't support nested roles,
create separate entries while maintaining
chronological order.

---

# Current Employment

Only one experience should have

```ts
current: true
```

Example

```ts
{
current:true,

endDate:"Present"
}
```

---

# Adding a New Experience

Step 1

Open

```
data/experience.ts
```

---

Step 2

Copy an existing object.

---

Step 3

Update

- Company
- Position
- Dates
- Description
- Achievements
- Technologies

---

Step 4

Verify timeline ordering.

Newest experience should appear first.

---

Step 5

Run

```bash
npm run build
```

---

Step 6

Verify

- Desktop
- Tablet
- Mobile

---

# Updating Existing Experience

When updating a role:

Review

- Job title
- Description
- Achievements
- Technologies
- Employment dates

Do not change IDs.

---

# Removing Experience

Delete

```
experience object
```

Verify

- Timeline spacing
- Animations
- No empty sections

---

# Synchronization Rules

Whenever experience changes, verify:

## Skills

If a new technology appears

Example

```
Terraform
```

Ensure it also exists in

```
data/skills.ts
```

---

## Projects

If an experience references a major project,
consider adding that project to

```
data/projects.ts
```

---

## Hero Statistics

If experience changes

Example

```
3 Years

↓

4 Years
```

Update

```
data/stats.ts
```

---

## About Section

Review

```
components/about/
```

to ensure career summary still reflects current experience.

---

## Resume

If experience changes significantly

Update

```
public/resume.pdf
```

---

# Validation Checklist

Before committing

- [ ] Company verified
- [ ] Position verified
- [ ] Dates correct
- [ ] Current job marked correctly
- [ ] Description reviewed
- [ ] Achievements updated
- [ ] Technologies updated
- [ ] Skills synchronized
- [ ] Resume updated (if needed)
- [ ] Timeline order verified
- [ ] Mobile layout tested
- [ ] Build passes
- [ ] TypeScript passes

---

# Common Mistakes

❌ Hardcoding experience inside components

✅ Store all experience in

```
data/experience.ts
```

---

❌ Using inconsistent date formats

Correct

```
Jan 2024

Present
```

---

❌ Listing every technology ever used

Only include technologies actively used in that role.

---

❌ Duplicate company entries

Prefer grouping promotions where possible.

---

❌ Vague achievements

Instead of

```
Worked on APIs.
```

Use

```
Designed and implemented secure REST APIs
used by enterprise banking applications.
```

---

# Best Practices

- Focus on business impact.
- Quantify achievements whenever possible.
- Use action verbs.
- Keep technology lists concise.
- Keep descriptions professional.
- Maintain reverse chronological order.
- Ensure the experience aligns with the resume.

---

# Success Criteria

An experience update is complete when:

- Experience appears correctly in the timeline.
- Dates are accurate.
- Technologies are synchronized with the Skills section.
- Resume reflects the latest experience.
- About section remains consistent.
- No TypeScript or build errors exist.
- Mobile and desktop layouts render correctly.
- Documentation remains accurate.