import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import {
  Project,
  ProjectExternalLinks,
  ProjectFrontmatter,
  ProjectImage,
  ProjectMetadata,
  ProjectSection,
} from "./types";

/**
 * Parses raw file content using gray-matter for YAML frontmatter extraction.
 */
export function parseFrontmatter(rawContent: string): {
  data: Record<string, unknown>;
  content: string;
} {
  const parsed = matter(rawContent);
  return {
    data: parsed.data,
    content: parsed.content,
  };
}

/**
 * Helper to slugify heading titles for HTML section IDs.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Extracts fallback metadata when explicit YAML frontmatter is absent or incomplete.
 * Reads titles, markdown metadata tables, and blockquotes from existing documentation files.
 */
export function extractFallbackFrontmatter(
  markdownContent: string,
  slug: string,
  category: string,
  parsedData: Record<string, unknown> = {}
): ProjectFrontmatter {
  // 1. Title fallback
  let title = (parsedData.title as string) || "";
  if (!title) {
    const h1Match = markdownContent.match(/^#\s+(.+)$/m);
    if (h1Match) {
      title = h1Match[1].replace(/\s*Metadata\s*$/i, "").trim();
    } else {
      title = slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    }
  }

  // 2. Extract key-value metadata from Markdown tables if present (e.g. | Project Title | Northern Cuts |)
  const tableData: Record<string, string> = {};
  const tableRowRegex = /^\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|$/gm;
  let match: RegExpExecArray | null;

  while ((match = tableRowRegex.exec(markdownContent)) !== null) {
    const key = match[1].trim().toLowerCase();
    const value = match[2].trim();
    if (key && value && !key.startsWith("---") && key !== "item") {
      tableData[key] = value;
    }
  }

  // 3. Extract tools if formatted as comma separated string or array
  let tools: string[] = [];
  if (Array.isArray(parsedData.tools)) {
    tools = parsedData.tools.map(String);
  } else if (typeof parsedData.tools === "string") {
    tools = parsedData.tools.split(",").map((t) => t.trim());
  } else if (tableData["tools"]) {
    tools = tableData["tools"].split(",").map((t) => t.trim());
  }

  // 4. Extract tags if array or string
  let tags: string[] = [];
  if (Array.isArray(parsedData.tags)) {
    tags = parsedData.tags.map(String);
  } else if (typeof parsedData.tags === "string") {
    tags = parsedData.tags.split(",").map((t) => t.trim());
  }

  return {
    title: title || (tableData["project title"] ?? "Untitled Project"),
    slug: (parsedData.slug as string) || slug,
    category: (parsedData.category as string) || tableData["category"] || category,
    projectType: (parsedData.projectType as string) || tableData["project type"],
    status: (parsedData.status as string) || tableData["status"],
    year: (parsedData.year as string) || tableData["year"]?.replace(/[\[\]]/g, ""),
    duration: (parsedData.duration as string) || tableData["duration"]?.replace(/[\[\]]/g, ""),
    client: (parsedData.client as string) || tableData["client"],
    platform: (parsedData.platform as string) || tableData["platform"],
    role: (parsedData.role as string) || tableData["role"],
    team: (parsedData.team as string) || tableData["team"]?.replace(/[\[\]]/g, ""),
    tools,
    cover: (parsedData.cover as string) || undefined,
    featured: typeof parsedData.featured === "boolean" ? parsedData.featured : false,
    tags,
    order: typeof parsedData.order === "number" ? parsedData.order : undefined,
    ...parsedData,
  };
}

/**
 * Compiles raw markdown text into sanitized HTML using remark, remark-gfm, and remark-html.
 */
export async function parseMarkdownToHtml(markdownContent: string): Promise<string> {
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(markdownContent);

  return processedContent.toString();
}

/**
 * Parses markdown headings to extract a structured section tree.
 */
export function extractSections(markdownContent: string): ProjectSection[] {
  const lines = markdownContent.split("\n");
  const sections: ProjectSection[] = [];
  let currentSection: ProjectSection | null = null;

  for (const line of lines) {
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const title = headingMatch[2].trim();
      const id = slugify(title);

      const newSection: ProjectSection = {
        id,
        title,
        level,
        content: "",
        images: [],
        subsections: [],
      };

      if (level <= 2 || !currentSection) {
        sections.push(newSection);
        currentSection = newSection;
      } else {
        if (!currentSection.subsections) {
          currentSection.subsections = [];
        }
        currentSection.subsections.push(newSection);
      }
    } else if (currentSection) {
      currentSection.content += line + "\n";
    }
  }

  return sections;
}

/**
 * Extracts image references (standard markdown image links and asset bullet points).
 */
export function extractImages(markdownContent: string): ProjectImage[] {
  const images: ProjectImage[] = [];

  // Standard markdown image pattern: ![alt](url)
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  let match: RegExpExecArray | null;

  while ((match = imageRegex.exec(markdownContent)) !== null) {
    images.push({
      alt: match[1] || "Project Image",
      url: match[2],
    });
  }

  // Bullet point asset pattern: - cover.png, - Landing Page.png
  const assetBulletRegex = /^-\s+([\w\s-]+\.(?:png|jpg|jpeg|webp|svg))$/gm;
  while ((match = assetBulletRegex.exec(markdownContent)) !== null) {
    const filename = match[1].trim();
    if (!images.some((img) => img.url.endsWith(filename))) {
      images.push({
        alt: filename.replace(/\.[^/.]+$/, ""),
        url: filename,
      });
    }
  }

  return images;
}

/**
 * Parses external link references from markdown content (Figma, GitHub, Live Demo, Prototype).
 */
export function extractExternalLinks(markdownContent: string): ProjectExternalLinks {
  const links: ProjectExternalLinks = {};

  const figmaMatch = markdownContent.match(/Figma:\s*\[?([^\]\n]+)\]?/i);
  if (figmaMatch && !figmaMatch[1].includes("Add Link")) {
    links.figma = figmaMatch[1].trim();
  }

  const githubMatch = markdownContent.match(/GitHub:\s*\[?([^\]\n]+)\]?/i);
  if (githubMatch && !githubMatch[1].includes("Add Link")) {
    links.github = githubMatch[1].trim();
  }

  const liveDemoMatch = markdownContent.match(/(?:Live Website|Live Demo):\s*\[?([^\]\n]+)\]?/i);
  if (liveDemoMatch && !liveDemoMatch[1].includes("Add Link")) {
    links.liveDemo = liveDemoMatch[1].trim();
  }

  const prototypeMatch = markdownContent.match(/Prototype:\s*\[?([^\]\n]+)\]?/i);
  if (prototypeMatch && !prototypeMatch[1].includes("Add Link")) {
    links.prototype = prototypeMatch[1].trim();
  }

  return links;
}

/**
 * Estimate reading time in minutes based on average 200 words per minute.
 */
export function calculateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * Main parser entry point. Takes raw file content and compiles a full Project model.
 */
export async function parseProjectFile(
  rawFileContent: string,
  slug: string,
  category: string,
  filePath: string
): Promise<Project> {
  const { data, content } = parseFrontmatter(rawFileContent);
  const frontmatter = extractFallbackFrontmatter(content, slug, category, data);
  const htmlContent = await parseMarkdownToHtml(content);
  const sections = extractSections(content);
  const images = extractImages(content);
  const externalLinks = extractExternalLinks(content);
  const readingTimeMinutes = calculateReadingTime(content);

  const metadata: ProjectMetadata = {
    slug: frontmatter.slug || slug,
    category: frontmatter.category || category,
    filePath,
    frontmatter,
    summary: frontmatter.description as string | undefined,
    readingTimeMinutes,
  };

  return {
    metadata,
    content,
    htmlContent,
    sections,
    images,
    externalLinks,
  };
}
