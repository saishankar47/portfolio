# 🤖 Project Update Agent

## Purpose

The Project Update Agent is responsible for maintaining everything related to portfolio projects.

Whenever a project is added, removed, or modified, this agent ensures the application, data, assets, and documentation remain consistent.

---

# Responsibilities

The agent is responsible for:

- Adding new projects
- Updating existing projects
- Removing projects
- Updating project screenshots
- Updating technologies
- Updating project metrics
- Validating links
- Keeping documentation synchronized

---

# Primary Files

## Data

```
data/projects.ts
```

This is the primary source of truth.

Never hardcode projects inside components.

---

## Components

```
components/projects/

Projects.tsx

ProjectCard.tsx

ProjectContent.tsx

ProjectMetrics.tsx

ProjectTechStack.tsx

ProjectActions.tsx
```

---

## Images

```
public/projects/
```

Every project image must be stored here.

Example

```
banking.png

portfolio.png

resume-analyzer.png
```

---

# Project Structure

Each project should contain

```ts
{
id:

title:

description:

image:

github:

demo:

featured:

technologies:[]

metrics:[]
}
```

---

# Rules

## IDs

Every project ID must be unique.

Example

```
1

2

3

4
```

Never duplicate IDs.

---

## Images

Every project image

Must exist inside

```
public/projects/
```

Image names should match

```
image:
"/projects/project-name.png"
```

---

## GitHub Links

Always verify

```
github
```

is valid.

Avoid

```
https://github.com/yourusername
```

Replace placeholder URLs before deployment.

---

## Demo Links

If no live demo exists

Use

```
""
```

instead of fake URLs.

---

## Descriptions

Descriptions should answer

- What was built?
- Why was it built?
- Technologies used?
- Impact?
- Scale?

Recommended length

```
2–4 sentences
```

---

## Technologies

List only technologies actually used.

Preferred order

- Language
- Framework
- Database
- Cloud
- DevOps
- Other

Example

```
Java

Spring Boot

Kafka

PostgreSQL

AWS

Docker
```

---

## Metrics

Examples

```
Users

Requests

Team

Performance

Duration
```

Avoid fake metrics.

---

# When Adding a Project

Step 1

Add object

```
data/projects.ts
```

---

Step 2

Add screenshot

```
public/projects/
```

---

Step 3

Verify

```
npm run build
```

---

Step 4

Test

Projects page

---

Step 5

Update documentation if needed

```
docs/data-model.md
```

---

# When Removing a Project

Remove

```
projects.ts
```

Delete

```
public/projects/image.png
```

Verify

No broken links.

---

# Updating Technologies

If a new technology is added

Example

```
Terraform
```

Verify

```
ProjectTechStack.tsx
```

supports its icon or badge styling.

---

# Updating Featured Projects

Modify

```ts
featured: true
```

Projects marked as featured may be displayed first depending on the UI implementation.

---

# Validation Checklist

Before committing changes

- [ ] Project title updated
- [ ] Description reviewed
- [ ] Screenshot exists
- [ ] GitHub URL verified
- [ ] Demo URL verified
- [ ] Technologies reviewed
- [ ] Metrics reviewed
- [ ] Build passes
- [ ] Mobile layout checked

---

# Common Mistakes

❌ Hardcoding projects inside components

✅ Store all project data in

```
data/projects.ts
```

---

❌ Using placeholder GitHub links

✅ Replace with actual repository URLs

---

❌ Missing project screenshots

✅ Store images in

```
public/projects/
```

---

❌ Duplicate IDs

✅ Ensure every project has a unique ID

---

# Best Practices

- Keep projects ordered from newest to oldest.
- Feature only your strongest work.
- Keep screenshots high quality and consistently sized.
- Use concise, impact-focused descriptions.
- Remove outdated or unfinished projects that no longer represent your current skill level.
- Validate all external links before deployment.

---

# Success Criteria

A project update is complete when:

- The new or updated project appears correctly.
- Images load without errors.
- All links work.
- Responsive layout is preserved.
- No TypeScript or build errors occur.
- Documentation remains accurate.