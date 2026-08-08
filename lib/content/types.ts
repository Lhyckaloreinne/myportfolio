/**
 * Core TypeScript models for portfolio content architecture.
 * Designed to be extensible across all expertise domains:
 * - UI/UX Design & Front-End Development
 * - Data Analytics
 * - Graphic Design
 * - Digital Operations
 */

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  category: string;
  projectType?: string;
  status?: string;
  year?: string;
  duration?: string;
  client?: string;
  platform?: string;
  role?: string;
  team?: string;
  tools?: string[];
  cover?: string;
  featured?: boolean;
  tags?: string[];
  order?: number;
  [key: string]: unknown; // Extensible for domain-specific custom fields
}

export interface ProjectMetadata {
  slug: string;
  category: string;
  filePath: string;
  frontmatter: ProjectFrontmatter;
  summary?: string;
  readingTimeMinutes?: number;
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
  section?: string;
}

export interface ProjectSection {
  id: string;
  title: string;
  level: number;
  content: string;
  images?: ProjectImage[];
  subsections?: ProjectSection[];
}

export interface ProjectExternalLinks {
  figma?: string;
  github?: string;
  liveDemo?: string;
  prototype?: string;
  other?: Record<string, string>;
}

export interface Project {
  metadata: ProjectMetadata;
  content: string;
  htmlContent: string;
  sections: ProjectSection[];
  images: ProjectImage[];
  externalLinks?: ProjectExternalLinks;
}
