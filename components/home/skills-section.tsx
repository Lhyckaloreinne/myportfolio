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
      "Building high-performance, accessible, and responsive interfaces with structured component architecture.",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
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
    title: "UI/UX & Visual Design",
    description:
      "Shaping thoughtful user journeys, wireframes, high-fidelity prototypes, and comprehensive design systems.",
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
    title: "Data Analytics & Insights",
    description:
      "Transforming complex data into clear dashboards, visual reports, and data-driven storytelling.",
    skills: [
      { name: "Data Analysis", icon: FileSpreadsheet },
      { name: "Data Visualization", icon: ChartNoAxesCombined },
      { name: "Dashboard Design", icon: LayoutDashboard },
      { name: "Insight Reporting", icon: Lightbulb },
    ],
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Digital Operations & Systems",
    description:
      "Creating structured documentation, workflow automation, and productivity systems that optimize team performance.",
    skills: [
      { name: "Documentation", icon: FileText },
      { name: "Workflow Architecture", icon: Workflow },
      { name: "Research & Analysis", icon: Search },
      { name: "Task Coordination", icon: ListChecks },
      { name: "Process Optimization", icon: RefreshCw },
    ],
    icon: Workflow,
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full border-t border-border/80 bg-background py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          label="CAPABILITIES"
          title="Technical Competencies & Specialized Tools"
          description="A comprehensive inventory of skills bringing conceptual ideas into executed digital products."
          className="mb-14 lg:mb-20"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-3xl border border-border/80 bg-surface/40 p-8 lg:p-10 transition-all duration-300 hover:border-gold/60 hover:bg-surface/80 shadow-xs"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/40 bg-background text-gold shadow-xs transition-colors group-hover:bg-gold group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden={true} />
                  </div>
                  <span className="font-serif text-3xl font-light text-gold/40">
                    {group.number}
                  </span>
                </div>

                <h3 className="mt-8 font-serif text-2xl font-normal tracking-tight text-foreground lg:text-3xl">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted font-light">
                  {group.description}
                </p>

                <ul className="mt-8 flex flex-wrap gap-2.5" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <li
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background px-4 py-2 text-xs font-medium uppercase tracking-wider text-foreground transition-all duration-200 hover:border-gold hover:bg-gold/10"
                      >
                        <SkillIcon
                          className="h-3.5 w-3.5 shrink-0 text-gold"
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