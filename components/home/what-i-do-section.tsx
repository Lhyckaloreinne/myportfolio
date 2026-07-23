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
        {/* Section Header */}
        <SectionHeader
          label="WHAT I DO"
          title="A multidisciplinary approach to digital work."
          description="I bring together creative thinking, technical skills, analytical perspective, and organized execution to create meaningful digital work and support effective solutions."
          className="mb-12 lg:mb-16"
        />

        {/* 4 Cards in 1 Horizontal Row on Desktop */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {specializations.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <Link
                href={item.href}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-surface/30 p-5 transition-all duration-300 hover:border-foreground/40 hover:bg-surface/90 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
              >
                <div>
                  {/* Category Image Visual Area */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-border/40 border border-border/60 mb-5">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 rounded-md bg-background/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold tracking-widest uppercase text-foreground border border-border/50">
                      {item.number}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-foreground lg:text-xl">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs leading-relaxed text-muted transition-colors duration-300 group-hover:text-foreground/80 sm:text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Footer Link / Explore Interaction */}
                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-muted group-hover:text-foreground transition-colors">
                  <span>Explore Specialization</span>
                  <div className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border/70 bg-background text-muted transition-all duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
