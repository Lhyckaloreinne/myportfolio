import fs from "fs";
import path from "path";
import { parseProjectFile } from "./parser";
import { Project } from "./types";

/**
 * Returns the base root directory for portfolio markdown content.
 */
export function getProjectsDirectory(category?: string): string {
  const baseDir = path.join(process.cwd(), "docs", "portfolio", "projects");
  return category ? path.join(baseDir, category) : baseDir;
}

/**
 * Scans the docs/portfolio/projects directory to find all available category subdirectories.
 */
export async function getAllCategories(): Promise<string[]> {
  const baseDir = getProjectsDirectory();

  if (!fs.existsSync(baseDir)) {
    return [];
  }

  const entries = await fs.promises.readdir(baseDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

/**
 * Returns all project slugs along with their respective category directory.
 */
export async function getAllProjectSlugs(
  category?: string
): Promise<{ category: string; slug: string }[]> {
  const categories = category ? [category] : await getAllCategories();
  const slugs: { category: string; slug: string }[] = [];

  for (const cat of categories) {
    const catDir = getProjectsDirectory(cat);
    if (fs.existsSync(catDir)) {
      const files = await fs.promises.readdir(catDir);
      for (const file of files) {
        if (file.endsWith(".md")) {
          const slug = file.replace(/\.md$/, "");
          slugs.push({ category: cat, slug });
        }
      }
    }
  }

  return slugs;
}

/**
 * Reads and parses all project Markdown files in a category or across all categories.
 */
export async function getAllProjects(category?: string): Promise<Project[]> {
  const slugs = await getAllProjectSlugs(category);
  const projects: Project[] = [];

  for (const item of slugs) {
    const project = await getProjectBySlug(item.slug, item.category);
    if (project) {
      projects.push(project);
    }
  }

  // Sort projects: featured first, then by year descending, then alphabetically by title
  return projects.sort((a, b) => {
    if (a.metadata.frontmatter.featured && !b.metadata.frontmatter.featured) return -1;
    if (!a.metadata.frontmatter.featured && b.metadata.frontmatter.featured) return 1;

    const yearA = parseInt(a.metadata.frontmatter.year || "0", 10);
    const yearB = parseInt(b.metadata.frontmatter.year || "0", 10);
    if (yearA !== yearB) return yearB - yearA;

    return a.metadata.frontmatter.title.localeCompare(b.metadata.frontmatter.title);
  });
}

/**
 * Loads a single project by its slug and optional category.
 * If category is omitted, searches across all category directories.
 */
export async function getProjectBySlug(
  slug: string,
  category?: string
): Promise<Project | null> {
  const targetCategories = category ? [category] : await getAllCategories();

  for (const cat of targetCategories) {
    const filePath = path.join(getProjectsDirectory(cat), `${slug}.md`);

    if (fs.existsSync(filePath)) {
      try {
        const rawContent = await fs.promises.readFile(filePath, "utf-8");
        return await parseProjectFile(rawContent, slug, cat, filePath);
      } catch (error) {
        console.error(`Error loading project file at ${filePath}:`, error);
        return null;
      }
    }
  }

  return null;
}

/**
 * Returns all featured projects across all categories or within a specific category.
 */
export async function getFeaturedProjects(category?: string): Promise<Project[]> {
  const projects = await getAllProjects(category);
  return projects.filter((project) => Boolean(project.metadata.frontmatter.featured));
}

/**
 * Returns all projects for a specific portfolio category.
 */
export async function getProjectsByCategory(category: string): Promise<Project[]> {
  return getAllProjects(category);
}
