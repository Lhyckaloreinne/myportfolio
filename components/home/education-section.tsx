"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="w-full border-t border-border/80 bg-surface/30 py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          label="ACADEMICS"
          title="Academic Foundation & Distinctions"
          description="Grounding digital innovation in rigorous technical education and academic excellence."
          className="mb-14 lg:mb-20"
        />

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-gold/30 bg-background p-8 md:p-12 lg:p-14 shadow-md"
        >
          {/* Top Gold Ribbon Accent */}
          <div className="absolute top-0 right-0 h-32 w-32 bg-gold/5 rounded-bl-full pointer-events-none" />

          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/50 bg-gold/10 text-gold shadow-xs md:col-span-2">
              <GraduationCap className="h-7 w-7" aria-hidden={true} />
            </div>

            <div className="md:col-span-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
                    BULACAN STATE UNIVERSITY · 2022–2026
                  </span>
                  <h3 className="mt-2 font-serif text-3xl font-normal tracking-tight text-foreground lg:text-4xl">
                    Bachelor of Science in Information Technology
                  </h3>
                  <p className="mt-1 font-serif italic text-lg text-gold-dark font-light">
                    Major in Web &amp; Mobile Application Development
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">
                  <Award className="h-3.5 w-3.5" /> Cum Laude
                </span>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted font-light sm:text-base">
                Curriculum focused on advanced web &amp; mobile software engineering, database management systems, UI/UX architecture, data analytics, and digital project governance.
              </p>

              <div className="mt-10 border-t border-border/60 pt-8">
                <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
                  ACADEMIC HONORS &amp; RECOGNITION
                </span>
                <ul className="mt-6 grid gap-4 text-sm text-foreground sm:grid-cols-2">
                  <li className="flex items-center gap-3.5 rounded-xl border border-border/70 bg-surface/50 p-4">
                    <span className="h-2 w-2 rounded-full bg-gold shrink-0" />
                    <span className="font-medium">Graduated Cum Laude</span>
                  </li>
                  <li className="flex items-center gap-3.5 rounded-xl border border-border/70 bg-surface/50 p-4">
                    <span className="h-2 w-2 rounded-full bg-gold shrink-0" />
                    <span className="font-medium">Dean&apos;s List Honor, A.Y. 2022–2023</span>
                  </li>
                  <li className="flex items-center gap-3.5 rounded-xl border border-border/70 bg-surface/50 p-4">
                    <span className="h-2 w-2 rounded-full bg-gold shrink-0" />
                    <span className="font-medium">Dean&apos;s List Honor, A.Y. 2023–2024</span>
                  </li>
                  <li className="flex items-center gap-3.5 rounded-xl border border-border/70 bg-surface/50 p-4">
                    <span className="h-2 w-2 rounded-full bg-gold shrink-0" />
                    <span className="font-medium">Student Leadership Recognition, A.Y. 2025–2026</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}