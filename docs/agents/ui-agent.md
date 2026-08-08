# 🤖 UI Agent

## Purpose

The UI Agent is responsible for maintaining the visual quality, consistency, responsiveness, accessibility, and overall user experience of the portfolio.

The goal is to ensure every section follows the same design language and provides a polished, premium experience across all devices.

The UI Agent owns:

- Design System
- Layout
- Typography
- Colors
- Spacing
- Animations
- Responsiveness
- Accessibility
- Visual Consistency
- Component Reusability

---

# Responsibilities

The UI Agent is responsible for

- Maintaining visual consistency
- Improving user experience
- Keeping spacing consistent
- Maintaining typography
- Managing animations
- Verifying responsive layouts
- Maintaining accessibility
- Reviewing new components
- Preventing duplicate UI
- Enforcing design standards

---

# Primary Folders

```
components/

common/

hero/

about/

skills/

experience/

projects/

contact/

footer/

navbar/
```

---

# Global Files

```
app/layout.tsx

app/globals.css

tailwind.config.ts
```

---

# Shared Components

```
components/common/

Reveal.tsx

LoadingScreen.tsx

MouseGlow.tsx

AnimatedBackground.tsx

ScrollProgress.tsx

ThemeProvider.tsx
```

Always reuse these components before creating new ones.

---

# Design Philosophy

The portfolio follows these principles

- Minimal
- Modern
- Premium
- Enterprise
- Responsive
- Accessible
- Reusable

Every new component should follow the existing design language.

---

# Design System

## Primary Color

```
Blue
```

Example

```
text-blue-500

bg-blue-500

border-blue-500
```

Avoid introducing multiple accent colors.

---

## Background

Preferred

```
Dark

Glass

Gradient
```

Avoid

- Bright backgrounds
- Heavy textures
- Busy patterns

---

## Typography

Primary Font

```
Inter
```

Future Options

```
Outfit

Poppins

Geist
```

Use only one font family across the application.

---

# Typography Scale

Heading

```
text-5xl

font-bold
```

Section Title

```
text-4xl
```

Card Title

```
text-xl
```

Paragraph

```
text-base

text-gray-400
```

Caption

```
text-sm
```

Maintain consistent hierarchy.

---

# Layout Standards

Every section should use

```
max-w-7xl

mx-auto

px-6

py-24
```

Never hardcode page widths.

---

# Spacing Rules

Preferred spacing

```
Section

py-24
```

Cards

```
p-6

p-8
```

Gap

```
gap-6

gap-8
```

Avoid inconsistent spacing.

---

# Border Radius

Cards

```
rounded-xl

rounded-2xl
```

Buttons

```
rounded-full
```

Keep radius consistent across the application.

---

# Shadows

Use subtle shadows.

Preferred

```
shadow-lg

shadow-xl
```

Avoid

Large dark shadows.

---

# Glassmorphism

Preferred

```
bg-white/5

backdrop-blur-xl

border-white/10
```

All glass cards should follow this style.

---

# Icons

Preferred Libraries

```
lucide-react

react-icons
```

Avoid mixing multiple icon styles.

---

# Buttons

Primary Button

```
Blue Background

White Text
```

Secondary Button

```
Transparent

Border

Hover Effect
```

All buttons should have

- Hover Animation
- Focus State
- Keyboard Accessibility

---

# Animations

Library

```
Framer Motion
```

Preferred Animations

```
Fade

Slide

Scale

Hover

Reveal
```

Avoid excessive animation.

Animations should support the content rather than distract from it.

---

# Animation Timing

Preferred

```
Duration

0.4–0.8 seconds
```

Hover

```
0.2–0.3 seconds
```

Keep animation speeds consistent.

---

# Hover Effects

Cards

```
Lift

Shadow

Border Glow
```

Buttons

```
Scale

Color Transition
```

Icons

```
Rotate

Scale
```

Avoid dramatic movement.

---

# Responsive Design

Support

```
Mobile

Tablet

Laptop

Desktop
```

Primary Breakpoints

```
sm

md

lg

xl

2xl
```

Every new component must be tested at all breakpoints.

---

# Accessibility

Every component should support

- Keyboard Navigation
- Focus States
- Screen Readers
- Sufficient Color Contrast
- Semantic HTML

---

# Images

Always use

```
next/image
```

unless a specific use case requires otherwise.

Images belong inside

```
public/
```

---

# Navigation

Navigation should provide

- Smooth Scrolling
- Active Link Highlight
- Mobile Drawer
- Theme Toggle

Future Improvements

- Scroll Spy
- Hide On Scroll
- Animated Underline

---

# Hero

Must include

- Strong headline
- Professional summary
- CTA Buttons
- Social Links
- Hero Image

Avoid overcrowding.

---

# Cards

All cards should have

- Consistent padding
- Rounded corners
- Hover effect
- Border
- Background blur

Avoid inconsistent layouts.

---

# Forms

Every form should support

- Validation
- Error Messages
- Loading State
- Success State
- Keyboard Navigation

---

# Theme Support

All components must support

```
Dark Mode

Light Mode
```

Avoid hardcoded colors that break theme switching.

---

# Reusability Rules

Before creating a new component

Check

```
components/common/
```

If functionality already exists

Reuse it.

Do not duplicate UI.

---

# Component Review Checklist

Before approving a new component

- [ ] Responsive
- [ ] Accessible
- [ ] Reusable
- [ ] TypeScript Typed
- [ ] Mobile Friendly
- [ ] Uses Shared Components
- [ ] Uses Existing Colors
- [ ] Uses Existing Typography
- [ ] Uses Existing Spacing
- [ ] Uses Existing Animations

---

# Common Mistakes

❌ Hardcoded colors

Prefer

```
Tailwind utility classes

or

CSS variables
```

---

❌ Different spacing in every section

Maintain consistent spacing.

---

❌ Different button styles

Reuse existing button components.

---

❌ Different animation styles

Use the shared animation language.

---

❌ Creating duplicate components

Always check

```
components/common/
```

first.

---

# UI Quality Checklist

Before committing

## Visual

- [ ] No overflow
- [ ] Proper spacing
- [ ] Consistent typography
- [ ] Proper alignment
- [ ] Consistent colors

---

## Responsive

- [ ] Mobile
- [ ] Tablet
- [ ] Laptop
- [ ] Desktop

---

## Accessibility

- [ ] Keyboard navigation
- [ ] Focus states
- [ ] Alt text
- [ ] Labels
- [ ] Color contrast

---

## Performance

- [ ] Images optimized
- [ ] Animations smooth
- [ ] No layout shift

---

# Future UI Improvements

Potential enhancements

- Scroll Spy Navigation
- Page Transitions
- Command Palette
- Interactive Cursor
- Skeleton Loading
- Animated Counters
- Floating Navigation
- Dynamic Theme Presets
- Custom Cursor Trails
- Micro-interactions
- Project Filtering
- Project Search

---

# Success Criteria

A UI update is considered complete when

- The component matches the existing design language.
- Responsive layouts are verified.
- Accessibility standards are met.
- Animations feel smooth and purposeful.
- Shared components are reused whenever possible.
- There are no visual regressions.
- Build and TypeScript checks pass.
- The portfolio maintains a consistent, premium appearance across all sections.

---

# UI Design Principles

Every UI change should improve at least one of the following:

- Clarity
- Consistency
- Accessibility
- Performance
- Maintainability
- Responsiveness
- User Experience

If a change does not improve one of these areas, reconsider whether it belongs in the project.