"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

interface SpecializationItem {
  number: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
}

const specializations: SpecializationItem[] = [
  {
    number: "01",
    title: "UI/UX Design & Front-End Development",
    description:
      "Designing intuitive digital experiences and bringing interfaces to life through thoughtful design and responsive front-end development.",
    href: "/work/ui-ux",
    image: "/images/categories/category-ui-ux.jpg",
    imageAlt: "UI/UX Design and Front-End Development Concept Visual",
  },
  {
    number: "02",
    title: "Data Analytics",
    description:
      "Transforming data into meaningful insights through analysis, dashboards, and clear data-driven storytelling.",
    href: "/work/data-analytics",
    image: "/images/categories/category-data-analytics.jpg",
    imageAlt: "Data Analytics and Dashboard Concept Visual",
  },
  {
    number: "03",
    title: "Graphic Design",
    description:
      "Creating purposeful visual communication through branding, marketing materials, and digital design.",
    href: "/work/graphic-design",
    image: "/images/categories/category-graphic-design.jpg",
    imageAlt: "Graphic Design and Typography Concept Visual",
  },
  {
    number: "04",
    title: "Executive Support & Digital Operations",
    description:
      "Supporting teams through organized workflows, efficient documentation, productivity systems, and modern digital collaboration.",
    href: "/work/digital-operations",
    image: "/images/categories/category-digital-operations.jpg",
    imageAlt: "Executive Support and Digital Operations Concept Visual",
  },
];

export default function WhatIDoSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          label="WHAT I DO"
          title="A multidisciplinary approach to digital work."
          description="I bring together creative thinking, technical skills, analytical perspective, and organized execution to create meaningful digital work and support effective solutions."
          className="mb-12 lg:mb-16"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {specializations.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group overflow-hidden rounded-[1.25rem] border border-border/70 bg-background p-6 transition duration-300 hover:border-foreground/40"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1rem] border border-border/70 bg-surface/80 mb-6">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 48vw, 420px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-muted">
                <span>{item.number}</span>
                <span className="rounded-full border border-border/70 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-muted">
                  {item.number}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                {item.description}
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-border/70 pt-5 text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                <span>Explore</span>
                <ArrowUpRight className="h-4 w-4 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
