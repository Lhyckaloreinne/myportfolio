"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

interface SpecializationItem {
  number: string;
  title: string;
  category: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
}

const specializations: SpecializationItem[] = [
  {
    number: "01",
    title: "UI/UX Design & Front-End Development",
    category: "DESIGN & ENGINEERING",
    description:
      "Crafting intuitive user journeys, wireframes, prototypes, and bringing designs to life through clean, responsive front-end development.",
    href: "/ui-ux",
    image: "/images/categories/category-ui-ux.jpg",
    imageAlt: "UI/UX Design and Front-End Development Visual",
  },
  {
    number: "02",
    title: "Data Analytics & Storytelling",
    category: "ANALYTICS & INSIGHTS",
    description:
      "Transforming raw datasets into compelling visual dashboards, structured reporting, and actionable business insights.",
    href: "/data-analytics",
    image: "/images/categories/category-data-analytics.jpg",
    imageAlt: "Data Analytics and Dashboard Concept Visual",
  },
  {
    number: "03",
    title: "Graphic Design & Visual Brand",
    category: "CREATIVE & BRANDING",
    description:
      "Developing sophisticated visual identities, high-impact marketing assets, digital graphics, and refined editorial typography.",
    href: "/graphic-design",
    image: "/images/categories/category-graphic-design.jpg",
    imageAlt: "Graphic Design and Typography Visual",
  },
  {
    number: "04",
    title: "Digital Operations & Executive Support",
    category: "SYSTEMS & WORKFLOWS",
    description:
      "Empowering organizational efficiency through structured digital workflows, documentation, process optimization, and executive assistance.",
    href: "/digital-operations",
    image: "/images/categories/category-digital-operations.jpg",
    imageAlt: "Digital Operations and Workflow Visual",
  },
];

export default function WhatIDoSection() {
  return (
    <section
      id="what-i-do"
      className="w-full py-20 md:py-28 lg:py-32 bg-[#F6F2E9] border-t border-[#E6DAC6]"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8 xl:px-12">
        <SectionHeader
          label="WHAT I DO"
          title="Multidisciplinary Expertise & Specializations"
          description="Combining aesthetic sensibility with technical execution across four core domains."
          className="mb-12 lg:mb-16"
        />

        {/* 1 Horizontal Row on Desktop (lg:grid-cols-4), 2 on Tablet (md:grid-cols-2), 1 on Mobile */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-6">
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
              className="h-full"
            >
              <Link
                href={item.href}
                className="group flex flex-col justify-between h-full rounded-2xl border border-[#E6DAC6] bg-[#FBF8F1] p-5 sm:p-6 lg:p-5 xl:p-6 transition-all duration-500 hover:border-[#C8A35B]/70 hover:shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A35B]"
              >
                <div>
                  {/* Vaulted  Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#E6DAC6] bg-[#F6F2E9] mb-6">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 rounded-full border border-[#C8A35B]/40 bg-[#FBF8F1]/90 backdrop-blur-xs px-3 py-1 text-[9px] font-semibold tracking-[0.25em] uppercase text-[#C8A35B]">
                      {item.category}
                    </div>
                  </div>

                  {/* Eyebrow & Number */}
                  <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8A35B] mb-2">
                    <span>SPECIALIZATION</span>
                    <span className="font-serif text-lg font-light text-[#C8A35B]/60">
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-normal tracking-tight text-[#1A1714] sm:text-xl lg:text-lg xl:text-xl leading-snug transition-colors group-hover:text-[#C8A35B]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-relaxed text-[#6E665C] font-light">
                    {item.description}
                  </p>
                </div>

                {/* Bottom CTA Link */}
                <div className="mt-6 pt-4 border-t border-[#E6DAC6]">
                  <div className="inline-flex items-center justify-between w-full text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1A1714] transition-colors group-hover:text-[#C8A35B]">
                    <span>Explore</span>
                    <div className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#C8A35B]/50 bg-[#F6F2E9] text-[#1A1714] transition-all duration-300 group-hover:border-[#C8A35B] group-hover:bg-[#C8A35B] group-hover:text-white">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
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
