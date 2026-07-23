"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

interface FeaturedProject {
  id: string;
  number: string;
  type: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  ctaText: string;
}

const projects: FeaturedProject[] = [
  {
    id: "system-project",
    number: "01",
    type: "TEAM PROJECT · SYSTEM DEVELOPMENT",
    title: "Attendance Management System",
    description:
      "A collaborative system project demonstrating teamwork, structured development, problem-solving, and the ability to contribute to a larger digital solution.",
    href: "/work/system-project",
    image: "/images/projects/project-system.jpg",
    imageAlt: "System Development Project Visual Representation",
    ctaText: "View System Project",
  },
  {
    id: "frontend-project",
    number: "02",
    type: "FRONT-END DEVELOPMENT",
    title: "Personal Career Platform",
    description:
      "A frontend project demonstrating the ability to translate design ideas into functional, responsive, and user-focused digital interfaces.",
    href: "/work/frontend-project",
    image: "/images/projects/project-frontend.jpg",
    imageAlt: "Front-End Development Project Visual Representation",
    ctaText: "View Front-End Project",
  },
  {
    id: "ui-ux-project",
    number: "03",
    type: "UI/UX DESIGN · CASE STUDY",
    title: "User Experience Case Study",
    description:
      "A selected UI/UX project that demonstrates the process of understanding a problem, developing a design solution, and creating a thoughtful digital experience.",
    href: "/work/ui-ux",
    image: "/images/projects/project-ui-ux.jpg",
    imageAlt: "UI/UX Design Case Study Visual Representation",
    ctaText: "View Case Study",
  },
];

export default function FeaturedWorkSection() {
  const mainProject = projects[0];
  const secondaryProjects = projects.slice(1);

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <SectionHeader
          label="FEATURED WORK"
          title="Selected projects and digital solutions."
          description="A curated collection of work showcasing system development, front-end engineering, and user-centered design thinking."
          className="mb-12 lg:mb-16"
        />

        {/* Editorial Layout */}
        <div className="flex flex-col gap-8 lg:gap-10">
          {/* Main Large Featured Project (01 System Project) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={mainProject.href}
              className="group flex flex-col rounded-2xl border border-border/80 bg-surface/30 p-6 lg:p-10 transition-all duration-300 hover:border-foreground/40 hover:bg-surface/90 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center"
            >
              {/* Left Side: Large Visual */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-border/40 border border-border/60 lg:col-span-7">
                <Image
                  src={mainProject.image}
                  alt={mainProject.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-md bg-background/80 backdrop-blur-md px-3 py-1 text-xs font-semibold tracking-widest uppercase text-foreground border border-border/50">
                  {mainProject.number}
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="mt-6 flex flex-col justify-between lg:mt-0 lg:col-span-5 lg:h-full lg:py-2">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-muted">
                    {mainProject.type}
                  </div>

                  <h3 className="mt-3 font-serif text-2xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-foreground lg:text-3xl">
                    {mainProject.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-foreground/80 lg:text-base">
                    {mainProject.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-muted group-hover:text-foreground transition-colors">
                  <span>{mainProject.ctaText}</span>
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-background text-muted transition-all duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Secondary 2-Column Supporting Projects (02 & 03) */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            {secondaryProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full"
              >
                <Link
                  href={project.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-surface/30 p-6 transition-all duration-300 hover:border-foreground/40 hover:bg-surface/90 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
                >
                  <div>
                    {/* Visual Area */}
                    <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl bg-border/40 border border-border/60 mb-6">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 550px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 rounded-md bg-background/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold tracking-widest uppercase text-foreground border border-border/50">
                        {project.number}
                      </div>
                    </div>

                    <div className="text-[11px] font-semibold uppercase tracking-widest text-muted">
                      {project.type}
                    </div>

                    <h3 className="mt-2.5 font-serif text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-foreground lg:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-xs leading-relaxed text-muted transition-colors duration-300 group-hover:text-foreground/80 sm:text-sm">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-muted group-hover:text-foreground transition-colors">
                    <span>{project.ctaText}</span>
                    <div className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border/70 bg-background text-muted transition-all duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
