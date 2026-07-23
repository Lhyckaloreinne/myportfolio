"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="w-full border-t border-border/60 bg-background py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          label="EDUCATION"
          title="A foundation for continuous learning."
          description="My academic background gave me a broad foundation in technology and continues to shape how I approach digital work."
          className="mb-12 lg:mb-16"
        />

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-8 rounded-2xl border border-border/80 bg-surface/50 p-6 md:grid-cols-[auto_1fr_auto] md:items-start md:p-8"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/70 bg-background text-foreground">
            <GraduationCap className="h-6 w-6" aria-hidden={true} />
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted">
              Academic Background
            </p>
            <h3 className="mt-3 font-serif text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
              Bachelor of Science in Information Technology
            </h3>
            <p className="mt-2 text-sm font-medium text-foreground sm:text-base">
              Major in Web and Mobile Development
            </p>
            <p className="mt-1 text-sm text-muted sm:text-base">
              Bulacan State University · 2022–2026
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              My studies developed a broad foundation in software development,
              digital systems, web and mobile technologies, and structured
              problem-solving.
            </p>

            <div className="mt-6 border-t border-border/70 pt-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted">
                Academic Achievements
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-foreground sm:grid-cols-2">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  <span>Graduated Cum Laude</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  <span>Dean&apos;s List, A.Y. 2022–2023</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  <span>Dean&apos;s List, A.Y. 2023–2024</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  <span>Student Leadership Award, A.Y. 2025–2026</span>
                </li>
              </ul>
            </div>
          </div>

          <span className="text-sm font-medium text-muted md:col-start-3 md:row-start-1 md:pt-1">
            IT Graduate
          </span>
        </motion.article>
      </div>
    </section>
  );
}