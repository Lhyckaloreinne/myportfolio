import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/content/projects";
import UiUxCaseStudy from "@/components/projects/ui-ux-case-study";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs("ui-ux");
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug, "ui-ux");

  if (!project) {
    return {
      title: "Project Not Found | Portfolio",
    };
  }

  return {
    title: `${project.metadata.frontmatter.title} | UI/UX Case Study`,
    description: project.metadata.summary || `UI/UX design case study for ${project.metadata.frontmatter.title}`,
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug, "ui-ux");

  if (!project) {
    notFound();
  }

  return <UiUxCaseStudy project={project} />;
}

