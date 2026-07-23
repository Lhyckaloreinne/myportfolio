"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  ChartNoAxesCombined,
  Code2,
  FileSpreadsheet,
  FileText,
  Lightbulb,
  ListChecks,
  LayoutDashboard,
  LayoutTemplate,
  Palette,
  RefreshCw,
  Route,
  Search,
  Workflow,
} from "lucide-react";
import {
  SiCss,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import SectionHeader from "@/components/ui/section-header";

type SkillIcon = ComponentType<{
  className?: string;
  "aria-hidden"?: boolean;
}>;

interface Skill {
  name: string;
  icon: SkillIcon;
}

interface SkillGroup {
  number: string;
  title: string;
  description: string;
  skills: Skill[];
  icon: typeof Code2;
}

const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Front-End Development",
    description:
      "Building responsive interfaces with a focus on clarity, structure, and maintainable implementation.",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    icon: Code2,
  },
  {
    number: "02",
    title: "UI/UX & Design",
    description:
      "Shaping thoughtful digital experiences through visual hierarchy, prototyping, and user-centered design.",
    skills: [
      { name: "Figma", icon: SiFigma },
      { name: "User Flows", icon: Route },
      { name: "Wireframing", icon: LayoutTemplate },
      { name: "Prototyping", icon: Palette },
      { name: "Design Systems", icon: LayoutDashboard },
    ],
    icon: Palette,
  },
  {
    number: "03",
    title: "Data & Analytics",
    description:
      "Turning information into useful insights through organized analysis and clear visual storytelling.",
    skills: [
      { name: "Data Analysis", icon: FileSpreadsheet },
      { name: "Data Visualization", icon: ChartNoAxesCombined },
      { name: "Dashboard Design", icon: LayoutDashboard },
      { name: "Insight Communication", icon: Lightbulb },
    ],
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Digital Operations",
    description:
      "Creating organized systems, documentation, and workflows that help teams work more effectively.",
    skills: [
      { name: "Documentation", icon: FileText },
      { name: "Workflow Organization", icon: Workflow },
      { name: "Research", icon: Search },
      { name: "Task Coordination", icon: ListChecks },
      { name: "Process Improvement", icon: RefreshCw },
    ],
    icon: Workflow,
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full border-t border-border/60 bg-surface/40 py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          label="SKILLS & TOOLS"
          title="The tools and thinking behind the work."
          description="A focused overview of the capabilities I bring to digital projects, from the first idea to the finished solution."
          className="mb-12 lg:mb-16"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-2xl border border-border/80 bg-background p-6 lg:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-surface text-foreground">
                    <Icon className="h-5 w-5" aria-hidden={true} />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-muted">
                    {group.number}
                  </span>
                </div>

                <h3 className="mt-8 font-serif text-xl font-bold tracking-tight text-foreground lg:text-2xl">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {group.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <li
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface px-3 py-1.5 text-xs font-medium text-foreground"
                      >
                        <SkillIcon
                          className="h-3.5 w-3.5 shrink-0 text-muted"
                          aria-hidden={true}
                        />
                        <span>{skill.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}