import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/content/types";
import ProjectPreview from "./project-preview";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { metadata } = project;
  const { frontmatter, slug, summary, previews = [] } = metadata;

  const projectType =
    frontmatter.projectType || frontmatter.category || "UI/UX Case Study";
  const platform = frontmatter.platform || "Web";
  const tools = frontmatter.tools || [];
  const year = frontmatter.year;

  return (
    <div className="group flex flex-col h-full rounded-2xl border border-[#e5ddd3] bg-[#faf8f5] p-5 sm:p-6 transition-all duration-300 hover:border-[#c5a059]/50 hover:shadow-lg hover:shadow-[#c5a059]/5">
      {/* Interface Preview Frame */}
      <div className="mb-6 w-full">
        <ProjectPreview
          images={previews}
          platform={platform}
          title={frontmatter.title}
        />
      </div>

      {/* Card Content & Meta */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          {/* Category / Platform Tag & Year */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c5a059]">
              {projectType}
            </span>
            {year && (
              <span className="text-[11px] font-mono text-[#7e756b]/70">
                {year}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#121110] leading-tight mb-3 transition-colors duration-200 group-hover:text-[#c5a059]">
            <Link href={`/ui-ux/${slug}`} className="focus:outline-none">
              {frontmatter.title}
            </Link>
          </h3>

          {/* Short Project Descriptor */}
          {summary && (
            <p className="text-xs sm:text-sm text-[#7e756b] font-light leading-relaxed line-clamp-3 mb-6">
              {summary}
            </p>
          )}
        </div>

        {/* Footer: Tools & Case Study Link */}
        <div className="pt-4 border-t border-[#e5ddd3]/60 flex items-center justify-between gap-4 mt-auto">
          {/* Tools / Tags */}
          <div className="flex flex-wrap gap-1.5 max-w-[70%]">
            {tools.slice(0, 3).map((tool, idx) => (
              <span
                key={idx}
                className="rounded-full border border-[#e5ddd3] bg-[#f4efea] px-2.5 py-0.5 text-[10px] font-medium text-[#7e756b]"
              >
                {tool}
              </span>
            ))}
            {tools.length > 3 && (
              <span className="rounded-full border border-[#e5ddd3] bg-[#f4efea] px-2 py-0.5 text-[10px] font-medium text-[#7e756b]">
                +{tools.length - 3}
              </span>
            )}
          </div>

          {/* View Case Study CTA Link */}
          <Link
            href={`/ui-ux/${slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#121110] tracking-wider uppercase transition-colors duration-200 group-hover:text-[#c5a059]"
          >
            <span>Explore</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
