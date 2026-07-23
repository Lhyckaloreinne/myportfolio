# Tech Stack

## Purpose

This document defines the technologies, frameworks, libraries, tools, and engineering conventions used to build the Personal Career Platform.

The chosen stack reflects modern front-end development practices and is intentionally selected to balance learning, maintainability, scalability, performance, and developer experience.

Rather than choosing technologies because they are popular, every decision should support the project's long-term vision and provide hands-on experience with tools commonly used in professional software development.

---

# Technology Stack Overview

| Category             | Technology              |
| -------------------- | ----------------------- |
| Framework            | Next.js 15 (App Router) |
| UI Library           | React 19                |
| Programming Language | TypeScript              |
| Styling              | Tailwind CSS            |
| UI Components        | shadcn/ui               |
| Animation            | Framer Motion           |
| Icons                | Lucide React            |
| Code Quality         | ESLint                  |
| Code Formatter       | Prettier                |
| Package Manager      | npm                     |
| Version Control      | Git & GitHub            |
| IDE                  | Visual Studio Code      |
| Deployment           | Vercel                  |

---

# Technology Decisions

## Next.js

### Purpose

Application framework responsible for routing, layouts, rendering, optimization, and application structure.

### Why We Chose It

Next.js is the industry standard React framework for building production-ready web applications.

It provides:

- File-based routing
- Layout system
- Metadata management
- Image optimization
- Font optimization
- Excellent performance
- Seamless Vercel deployment

Using Next.js allows this portfolio to follow modern software engineering practices rather than functioning as a simple static website.

---

## React

### Purpose

Component-based UI library.

### Why We Chose It

React enables the application to be built using reusable and maintainable components.

Every page within the portfolio is composed of reusable React components that improve consistency, scalability, and maintainability.

Next.js is built on top of React, meaning React remains the core technology used throughout the project.

---

## TypeScript

### Purpose

Primary programming language.

### Why We Chose It

TypeScript provides static typing, better IntelliSense, and earlier error detection.

Learning TypeScript through a real-world project helps establish strong development habits and reflects technologies commonly used in professional front-end teams.

---

## Tailwind CSS

### Purpose

Utility-first styling framework.

### Why We Chose It

Tailwind CSS enables rapid interface development while maintaining a consistent design language.

Its utility-based approach complements reusable React components and simplifies responsive development.

---

## shadcn/ui

### Purpose

Reusable UI component collection.

### Why We Chose It

Rather than relying on opinionated UI frameworks, shadcn/ui provides accessible and customizable components that can be adapted to match the project's own design system.

---

## Framer Motion

### Purpose

Animation library.

### Why We Chose It

Framer Motion enables smooth page transitions and micro-interactions while maintaining excellent performance.

Animations should enhance usability rather than distract from the content.

---

## Lucide React

### Purpose

Icon library.

### Why We Chose It

Lucide provides lightweight, modern, and consistent icons that align with the portfolio's minimalist visual language.

---

## ESLint

### Purpose

Code quality and static analysis.

### Why We Chose It

ESLint helps identify potential issues early, encourages clean coding practices, and promotes consistency throughout the project.

---

## Prettier

### Purpose

Automatic code formatting.

### Why We Chose It

Prettier ensures a consistent code style across the entire project, reducing unnecessary formatting discussions and improving readability.

---

## Git & GitHub

### Purpose

Version control and repository management.

### Why We Chose It

Git tracks project history while GitHub serves as the central repository for collaboration, documentation, version control, and deployment integration.

---

## Visual Studio Code

### Purpose

Integrated Development Environment.

### Why We Chose It

Visual Studio Code provides an excellent development experience with strong support for TypeScript, React, Git, debugging, and modern web development.

---

## Vercel

### Purpose

Hosting and deployment platform.

### Why We Chose It

Vercel offers first-class support for Next.js, automatic deployments, preview environments, HTTPS, and excellent performance.

---

# Engineering Conventions

To maintain consistency throughout the project, the following engineering standards will be followed.

## Application Architecture

- Use the Next.js App Router.
- Organize code using feature-based and component-based architecture.
- Keep components modular and reusable.
- Separate presentation from business logic whenever practical.

---

## Component Development

- Build reusable components whenever possible.
- Each component should have a single responsibility.
- Avoid duplicate UI implementations.
- Keep components small and maintainable.

---

## Styling

- Follow the Design System.
- Use Tailwind CSS utilities.
- Maintain consistent spacing and typography.
- Prefer reusable UI components over custom implementations.

---

## Responsive Development

- Mobile-first approach.
- Design for desktop, tablet, and mobile.
- Ensure layouts adapt naturally across screen sizes.

---

## Accessibility

- Use semantic HTML.
- Ensure sufficient color contrast.
- Support keyboard navigation.
- Provide meaningful labels where appropriate.

---

## Version Control

- Commit small, meaningful changes.
- Write descriptive commit messages.
- Maintain a clean Git history.

---

# Future Technologies

As the project grows, additional technologies may be introduced if they provide meaningful value.

Potential additions include:

- MDX
- Supabase
- Content Management System (CMS)
- Analytics Integration
- Automated Testing
- CI/CD Pipelines

Future technologies should support the project's goals without introducing unnecessary complexity.

---

# Revision History

| Version | Date       | Author                | Summary                                                                                                                                 |
| ------- | ---------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 2.0     | 2026-07-16 | Lhycka Loreinne Sulit | Updated technology stack to use Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, and modern engineering conventions. |
