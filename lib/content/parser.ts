import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import {
  CaseStudyData,
  KeyDecision,
  Project,
  ProjectExternalLinks,
  ProjectFrontmatter,
  ProjectImage,
  ProjectMetadata,
  ProjectSection,
  WalkthroughGroup,
  WalkthroughItem,
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
 * Generic asset discovery helper that scans public/projects/ directory
 * matching folder names against slug keywords without hardcoding project names.
 */
export function discoverProjectPreviewImages(slug: string, category: string): string[] {
  const processCwd = process.cwd();
  const candidateDirs = [
    path.join(processCwd, "public", "projects", `${category} designs`),
    path.join(processCwd, "public", "projects", category),
    path.join(processCwd, "public", "projects"),
  ];

  const slugWords = slug.toLowerCase().split("-").filter((w) => w.length > 2);

  for (const baseDir of candidateDirs) {
    if (!fs.existsSync(baseDir)) continue;

    try {
      const entries = fs.readdirSync(baseDir, { withFileTypes: true });
      const matchedFolder = entries.find((entry) => {
        if (!entry.isDirectory()) return false;
        const folderLower = entry.name.toLowerCase();
        const matchedCount = slugWords.filter((word) => folderLower.includes(word)).length;
        return matchedCount === slugWords.length || (slugWords.length >= 2 && matchedCount >= 2);
      });

      if (matchedFolder) {
        const folderPath = path.join(baseDir, matchedFolder.name);
        const images: string[] = [];

        const readDirRecursive = (dirPath: string) => {
          const files = fs.readdirSync(dirPath, { withFileTypes: true });
          for (const file of files) {
            const fullPath = path.join(dirPath, file.name);
            if (file.isDirectory()) {
              readDirRecursive(fullPath);
            } else if (/\.(png|jpe?g|webp|svg)$/i.test(file.name)) {
              const relativePath = path.relative(path.join(processCwd, "public"), fullPath);
              const webUrl = "/" + relativePath.split(path.sep).join("/");
              images.push(webUrl);
            }
          }
        };

        readDirRecursive(folderPath);
        if (images.length > 0) return images;
      }
    } catch {
      // Ignore reading errors on fallback
    }
  }

  return [];
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
      if (title.includes(":")) {
        const parts = title.split(":");
        if (slug.toLowerCase() === parts[0].trim().toLowerCase()) {
          title = parts[0].trim();
        }
      }
    } else {
      title = slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    }
  }

  // 2. Extract key-value metadata from Markdown tables if present
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

  // 2b. Extract key-value metadata from blockquotes if present
  const blockquoteRegex = />\s*\*\*([^*:]+):\*\*\s*([^\n]+)/g;
  while ((match = blockquoteRegex.exec(markdownContent)) !== null) {
    const key = match[1].trim().toLowerCase();
    const value = match[2].trim();
    if (key && value && !tableData[key]) {
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

  // 5. Extract previews array generically
  let previews: string[] = [];
  if (Array.isArray(parsedData.previews)) {
    previews = parsedData.previews.map(String);
  } else if (Array.isArray(parsedData.previewImages)) {
    previews = parsedData.previewImages.map(String);
  } else {
    previews = discoverProjectPreviewImages(slug, category);
  }

  const projectType =
    (parsedData.projectType as string) || tableData["project type"] || tableData["category"];
  const platform =
    (parsedData.platform as string) ||
    tableData["platform"] ||
    (projectType?.toLowerCase().includes("mobile")
      ? "Mobile Application"
      : projectType?.toLowerCase().includes("web")
      ? "Responsive Web"
      : undefined);

  return {
    title: title || (tableData["project title"] ?? "Untitled Project"),
    slug: (parsedData.slug as string) || slug,
    category: (parsedData.category as string) || tableData["category"] || category,
    projectType,
    status: (parsedData.status as string) || tableData["status"],
    year: (parsedData.year as string) || tableData["year"]?.replace(/[\[\]]/g, ""),
    duration: (parsedData.duration as string) || tableData["duration"]?.replace(/[\[\]]/g, ""),
    client: (parsedData.client as string) || tableData["client"],
    platform,
    role: (parsedData.role as string) || tableData["role"],
    team: (parsedData.team as string) || tableData["team"]?.replace(/[\[\]]/g, ""),
    tools,
    cover: (parsedData.cover as string) || previews[0] || undefined,
    previews,
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
 * Extracts structured case study sections from project markdown content.
 * Normalizes headings across different case study markdown formats.
 */
export function extractCaseStudyData(
  markdownContent: string,
  defaultPreviews: string[] = []
): CaseStudyData {
  const result: CaseStudyData = {};
  const lines = markdownContent.split("\n");

  const getSectionContent = (headingRegex: RegExp): string => {
    let capturing = false;
    const captured: string[] = [];

    for (const line of lines) {
      if (/^#\s+/.test(line)) {
        if (headingRegex.test(line)) {
          capturing = true;
          continue;
        } else if (capturing) {
          break;
        }
      }
      if (capturing) {
        captured.push(line);
      }
    }

    return captured
      .join("\n")
      .replace(/^---$/gm, "")
      .replace(/>\s*[*_][^*_]+[*_]:[^\n]*/g, "")
      .trim();
  };

  // 1. Overview & Context
  const overviewText = getSectionContent(/overview|summary|short description/i);
  const contextText = getSectionContent(/context|background/i);
  result.overview = overviewText || undefined;
  result.businessContext = contextText || undefined;

  // 2. Challenge
  const challengeText = getSectionContent(/problem|challenge/i);
  result.challenge = challengeText || undefined;

  // 3. Goals
  const goalsSection = getSectionContent(/goal/i);
  if (goalsSection) {
    const bizGoals: string[] = [];
    const uxGoals: string[] = [];
    let currentGoalType: "biz" | "ux" | null = null;

    for (const line of goalsSection.split("\n")) {
      if (/business goal/i.test(line)) {
        currentGoalType = "biz";
      } else if (/user experience|ux goal/i.test(line)) {
        currentGoalType = "ux";
      } else if (/^[-*]\s+(.+)/.test(line)) {
        const itemMatch = line.match(/^[-*]\s+(.+)/);
        if (itemMatch) {
          const goalText = itemMatch[1].trim();
          if (currentGoalType === "ux") uxGoals.push(goalText);
          else if (currentGoalType === "biz") bizGoals.push(goalText);
          else bizGoals.push(goalText);
        }
      }
    }
    if (bizGoals.length > 0) result.businessGoals = bizGoals;
    if (uxGoals.length > 0) result.uxGoals = uxGoals;
  }

  // 4. Role & Responsibilities
  const roleSection = getSectionContent(/responsibilities|my role/i);
  if (roleSection) {
    const resp: string[] = [];
    for (const line of roleSection.split("\n")) {
      const match = line.match(/^[-*]\s+(.+)/);
      if (match) {
        resp.push(match[1].trim());
      }
    }
    if (resp.length > 0) result.roleResponsibilities = resp;
  }

  // 5. Approach & Design Thinking / Visual Direction
  const approachText = getSectionContent(/approach|design consideration/i);
  const visualText = getSectionContent(/visual direction|visual design/i);
  result.approach = approachText || undefined;
  result.visualDirection = visualText || undefined;

  // 6. Key Design Decisions
  const decisionsSection = getSectionContent(/key design decision|key decision/i);
  if (decisionsSection) {
    const decisions: KeyDecision[] = [];
    const blocks = decisionsSection.split(/^#{2,3}\s+/m).filter(Boolean);

    for (const block of blocks) {
      const blockLines = block.split("\n");
      const title = blockLines[0].replace(/^(?:\d+[\s—-]+)+/g, "").trim();
      if (!title) continue;

      let reason = "";
      let impact = "";
      let rawText = "";

      const reasonMatch = block.match(/Reason:\s*\n*([\s\S]*?)(?=Impact:|\n#{2,3}|$)/i);
      const impactMatch = block.match(/Impact:\s*\n*([\s\S]*?)(?=\n#{2,3}|$)/i);

      if (reasonMatch) reason = reasonMatch[1].trim();
      if (impactMatch) impact = impactMatch[1].trim();

      if (!reason && !impact) {
        rawText = blockLines.slice(1).join("\n").trim();
      }

      decisions.push({
        title,
        reason: reason || undefined,
        impact: impact || undefined,
        rawText: rawText || undefined,
      });
    }

    if (decisions.length > 0) result.keyDecisions = decisions;
  }

  // 7. Final Experience / Walkthrough Groups
  const walkthroughSection = getSectionContent(/experience walkthrough|resident mobile experience|final experience/i);
  if (walkthroughSection) {
    const groups: WalkthroughGroup[] = [];
    const groupBlocks = walkthroughSection.split(/^#{2}\s+/m).filter(Boolean);

    for (const gBlock of groupBlocks) {
      const lines = gBlock.split("\n");
      const groupTitle = lines[0].trim();
      const items: WalkthroughItem[] = [];

      const itemBlocks = gBlock.split(/^#{3}\s+/m).slice(1);
      for (const iBlock of itemBlocks) {
        const iLines = iBlock.split("\n");
        const title = iLines[0].trim();

        let imageFilename = "";
        const imgMatch = iBlock.match(/`([^`]+\.(?:png|jpg|jpeg|webp))`|!\[[^\]]*\]\(([^)]+)\)/i);
        if (imgMatch) {
          imageFilename = imgMatch[1] || imgMatch[2];
        }

        let purpose = "";
        const purposeMatch = iBlock.match(/Purpose\s*\n*([\s\S]*?)(?=\n---|#{1,3}|$)/i);
        if (purposeMatch) {
          purpose = purposeMatch[1].trim();
        } else {
          purpose = iLines.slice(1).filter((l) => !l.startsWith("**Image") && !l.startsWith("`")).join("\n").trim();
        }

        let resolvedImageUrl: string | undefined = undefined;
        if (imageFilename) {
          if (imageFilename.startsWith("/")) {
            resolvedImageUrl = imageFilename;
          } else {
            const found = defaultPreviews.find(
              (p) => p.endsWith(imageFilename) || p.toLowerCase().includes(imageFilename.toLowerCase())
            );
            if (found) resolvedImageUrl = found;
          }
        }

        items.push({
          title,
          image: resolvedImageUrl,
          purpose: purpose || undefined,
        });
      }

      if (items.length > 0) {
        groups.push({
          groupTitle,
          items,
        });
      }
    }

    if (groups.length > 0) result.walkthroughGroups = groups;
  }

  // 8. Outcome & Reflection
  const outcomeText = getSectionContent(/outcome|result/i);
  const reflectionText = getSectionContent(/reflection|lesson/i);
  result.outcome = outcomeText || undefined;
  result.reflection = reflectionText || undefined;

  return result;
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
  const caseStudyData = extractCaseStudyData(content, frontmatter.previews || []);

  let summary = (frontmatter.description as string) || (frontmatter.summary as string) || "";
  if (!summary) {
    const summaryMatch = content.match(/(?:# Project Summary|## Short Description)\s*\n+([\s\S]*?)(?=\n#|\n##|\n---|$)/i);
    if (summaryMatch) {
      summary = summaryMatch[1].replace(/>[^\n]*/g, "").trim().split("\n\n")[0].replace(/\n/g, " ");
    }
  }

  const metadata: ProjectMetadata = {
    slug: frontmatter.slug || slug,
    category: frontmatter.category || category,
    filePath,
    frontmatter,
    summary,
    previews: frontmatter.previews,
    readingTimeMinutes,
  };

  return {
    metadata,
    content,
    htmlContent,
    sections,
    images,
    externalLinks,
    caseStudyData,
  };
}

