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
  subtitle: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  ctaText: string;
}

const projects: FeaturedProject[] = [
  {
    id: "tds-level-monitoring-system",
    number: "01",
    type: "WEB DEVELOPMENT · IOT MONITORING",
    title: "TDS Level Monitoring System",
    subtitle: "Hardware-Integrated Water Quality Monitoring",
    description:
      "An IoT-based monitoring system developed for Hagonoy Water District, connecting field sensors and communication hardware with a centralized web monitoring platform across 24 pumping stations.",
    href: "/ui-ux/tds-level-monitoring-system",
    image: "/projects/Development/TDS Level Monitoring System/Dashboard.png",
    imageAlt: "TDS Level Monitoring System Dashboard",
    ctaText: "View Project Case Study",
  },
  {
    id: "northern-cuts",
    number: "02",
    type: "WEB DEVELOPMENT · E-COMMERCE",
    title: "Northern Cuts",
    subtitle: "Handcrafted Furniture E-Commerce Experience",
    description:
      "An e-commerce website designed for a handcrafted furniture business, bringing product discovery, custom furniture inquiries, and online ordering into a centralized digital experience.",
    href: "/ui-ux/northern-cuts",
    image: "/projects/ui-ux designs/UI1_NorthernCuts/01. Discover/Landing Page.png",
    imageAlt: "Northern Cuts E-commerce Website",
    ctaText: "View Project Case Study",
  },
  {
    id: "scenty",
    number: "03",
    type: "WEB DEVELOPMENT · E-COMMERCE",
    title: "Scenty",
    subtitle: "Simple Perfume E-Commerce Experience",
    description:
      "A simple fragrance e-commerce website focused on product discovery, featured perfumes, brand presentation, and a clean browsing experience.",
    href: "/ui-ux/perfume-website",
    image: "/projects/Development/Perfume Website/hero.jpg",
    imageAlt: "Scenty Perfume Website",
    ctaText: "View Project Case Study",
  },
];

export default function FeaturedWorkSection() {
  const mainProject = projects[0];
  const secondaryProjects = projects.slice(1);

  return (
    <section id="work" className="w-full py-20 md:py-28 lg:py-32 bg-surface/30 border-t border-border/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          label="CURATED WORK"
          title="Featured Projects & Solutions"
          description="A selection of digital platforms, front-end engineering, and user experience design."
          className="mb-14 lg:mb-20"
        />

        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Main Hero Featured Project Card (Ref 1 & Ref 4) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="group relative overflow-hidden rounded-3xl border border-gold/30 bg-background p-8 lg:p-12 shadow-md transition-all duration-500 hover:border-gold/60">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 lg:items-center">
                
                {/* Offset Image Container */}
                <div className="vogue-offset-frame relative aspect-video w-full overflow-hidden rounded-2xl border border-border/80 bg-surface lg:col-span-7">
                  <Image
                    src={mainProject.image}
                    alt={mainProject.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 680px"
                    className={
                      mainProject.id === "tds-level-monitoring-system"
                        ? "object-contain"
                        : "object-cover transition-transform duration-700 group-hover:scale-105"
                    }
                  />
                  <div className="absolute top-4 left-4 rounded-full border border-gold/40 bg-background/90 backdrop-blur-md px-3.5 py-1 text-[10px] font-semibold tracking-[0.3em] uppercase text-gold">
                    ISSUE N° {mainProject.number}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-between lg:col-span-5 lg:h-full lg:py-2">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
                      {mainProject.type}
                    </span>

                    <h3 className="mt-3 font-serif text-3xl font-normal tracking-tight text-foreground lg:text-4xl">
                      {mainProject.title}
                    </h3>

                    <p className="mt-2 font-serif italic text-lg text-gold-dark font-light">
                      {mainProject.subtitle}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-muted font-light">
                      {mainProject.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
                    <Link
                      href={mainProject.href}
                      className="group/link inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-foreground transition-colors hover:text-gold"
                    >
                      <span>{mainProject.ctaText}</span>
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 bg-background text-foreground transition-all duration-300 group-hover/link:border-gold group-hover/link:bg-gold group-hover/link:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Secondary 2-Column Projects Grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
            {secondaryProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full"
              >
                <div className="group flex h-full flex-col justify-between rounded-3xl border border-border/80 bg-background p-8 transition-all duration-500 hover:border-gold/60 hover:shadow-md">
                  <div>
                    <div className="vogue-offset-frame relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/80 bg-surface mb-6">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 550px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 rounded-full border border-gold/40 bg-background/90 backdrop-blur-md px-3.5 py-1 text-[10px] font-semibold tracking-[0.3em] uppercase text-gold">
                        ISSUE N° {project.number}
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
                      {project.type}
                    </span>

                    <h3 className="mt-2.5 font-serif text-2xl font-normal tracking-tight text-foreground lg:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-1 font-serif italic text-base text-gold-dark font-light">
                      {project.subtitle}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-muted font-light">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
                    <Link
                      href={project.href}
                      className="group/link inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground transition-colors hover:text-gold"
                    >
                      <span>{project.ctaText}</span>
                      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold/50 bg-background text-foreground transition-all duration-300 group-hover/link:border-gold group-hover/link:bg-gold group-hover/link:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
