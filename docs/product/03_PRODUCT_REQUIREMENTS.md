# Product Requirements

## Purpose

This document defines the functional and non-functional requirements of the Personal Career Platform. It describes what the product should do, how users are expected to interact with it, and the conditions required for each feature to be considered complete.

---

# Requirement Priority

The project follows the MoSCoW prioritization method.

- **Must Have** – Essential for the MVP.
- **Should Have** – Important but can be added after the MVP.
- **Could Have** – Nice-to-have enhancements.
- **Won't Have (for now)** – Planned for future iterations.

---

# Feature 1 — Personal Introduction

## Description

Introduce visitors to who I am, what I do, and the value I can provide.

## User Story

As a recruiter,

I want to quickly understand who the candidate is,

So that I can determine whether to continue exploring the portfolio.

## Functional Requirements

The system shall:

- Display my full name.
- Display a professional headline.
- Display a short professional introduction.
- Provide a clear call-to-action.
- Allow visitors to download my resume.
- Allow visitors to navigate directly to my work.

## Acceptance Criteria

- Introduction is immediately visible upon page load.
- Resume download works.
- CTA buttons navigate correctly.
- Content remains readable on all screen sizes.

Priority: **Must Have**

---

# Feature 2 — Recruiter Journey

## Description

Allow visitors to choose the professional specialization most relevant to their hiring needs.

## User Story

As a recruiter,

I want to browse only the work related to my hiring needs,

So that I can evaluate the candidate efficiently.

## Functional Requirements

The system shall provide four dedicated specialization experiences:

- UI/UX Design & Front-End Development
- Data Analytics
- Graphic Design
- Executive Support & Digital Operations

Each specialization shall present content tailored to the expectations of that profession while maintaining a consistent visual identity and user experience.

Each specialization should contain:

### UI/UX Design & Front-End Development

- Overview
- UX Case Studies
- UI Projects
- Front-End Projects
- Skills & Tools

### Data Analytics

- Overview
- Dashboard Projects
- Data Analysis Projects
- Insights
- Skills & Tools

### Graphic Design

- Overview
- Design Gallery
- Branding Projects
- Social Media Designs
- Marketing Materials

### Executive Support & Digital Operations

- Overview
- Productivity Systems
- Documentation
- Workflow Organization
- Administrative Support Samples
- Collaboration Tools
- Skills & Tools

## Acceptance Criteria

- Visitors can easily switch between specialization pages.
- Each specialization presents only relevant projects and experiences.
- The design language remains consistent across all specializations.
- Navigation feels cohesive regardless of specialization.

Priority: **Must Have**

---

# Feature 3 — Project Showcase

## Description

Display projects in an organized and visually engaging manner.

## User Story

As a recruiter,

I want to review projects,

So that I can evaluate practical experience.

## Functional Requirements

Each project shall include:

- Cover image
- Title
- Description
- Category
- Technologies used
- Project role
- Link to detailed case study

## Acceptance Criteria

- Projects display consistently.
- Images load correctly.
- Project cards remain responsive.

Priority: **Must Have**

---

# Feature 4 — Project Details

## Description

Provide comprehensive project information.

## Functional Requirements

Each project page should support:

- Overview
- Objectives
- Problem Statement
- Process
- Research (if applicable)
- Wireframes
- Design System
- Screenshots
- Technologies
- Challenges
- Learnings
- Final Outcome

Priority: **Must Have**

---

# Feature 5 — Skills & Tools

## Description

Display technical and professional skills.

## Functional Requirements

Organize skills into categories.

Example:

- Programming Languages
- Front-End Technologies
- Design Tools
- Analytics Tools
- Productivity Tools

Priority: **Must Have**

---

# Feature 6 — Education

## Description

Present educational background.

## Functional Requirements

Display:

- Degree
- University
- Graduation Year
- Relevant Coursework (optional)

Priority: **Must Have**

---

# Feature 7 — Certifications

## Description

Display professional certifications.

## Functional Requirements

Each certification shall include:

- Title
- Organization
- Date Earned

Priority: **Should Have**

---

# Feature 8 — Resume Download

## Description

Allow recruiters to download the latest resume.

## Functional Requirements

The system shall:

- Provide a downloadable PDF.
- Open or download correctly.
- Always reference the latest resume version.

Priority: **Must Have**

---

# Feature 9 — Contact

## Description

Allow visitors to contact me.

## Functional Requirements

Support:

- Email
- LinkedIn
- GitHub
- Behance
- Contact Form (optional)

Priority: **Must Have**

---

# Feature 10 — Responsive Design

## Description

Provide an optimal experience across devices.

## Functional Requirements

Support:

- Desktop
- Laptop
- Tablet
- Mobile

Priority: **Must Have**

---

# Feature 11 — Accessibility

## Description

Provide an accessible experience.

## Functional Requirements

The application should:

- Support keyboard navigation.
- Maintain sufficient color contrast.
- Include alt text for images.
- Use semantic HTML.
- Support screen readers where appropriate.

Priority: **Should Have**

---

# Feature 12 — Performance

## Description

Provide a fast browsing experience.

## Functional Requirements

The application should:

- Optimize images.
- Lazy load media where appropriate.
- Minimize unnecessary JavaScript.
- Maintain smooth animations.
- Load quickly on common network conditions.

Priority: **Should Have**

---

# Feature 13 — Theme Switching

## Description

Allow visitors to switch between light and dark mode.

Priority: **Could Have**

---

# Feature 14 — Search

## Description

Allow visitors to search projects.

Priority: **Could Have**

---

# Non-Functional Requirements

The application should be:

- Responsive
- Secure
- Maintainable
- Scalable
- Reusable
- Accessible
- Performant
- Easy to navigate
- Easy to update
- SEO-friendly

---

# Out of Scope

The MVP will not include:

- Authentication
- User accounts
- Content Management System
- Blog
- Comments
- Analytics Dashboard
- AI Assistant

These may be considered for future versions.

---

# Revision History

| Version | Date | Author | Summary |
|----------|------|--------|---------|
| 1.0 | 2026-07-16 | Lhycka Loreinne Sulit | Initial Product Requirements |