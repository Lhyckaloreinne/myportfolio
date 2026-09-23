"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import SectionHeader from "@/components/ui/section-header";

const tabs = ["EDUCATION", "RECOGNITION", "LEADERSHIP & INVOLVEMENT"] as const;
type Tab = (typeof tabs)[number];

const leadershipMoments = [
  "/images/leadership/IMG20240607083538.jpg",
  "/images/leadership/IMG20240607230516.jpg",
];

const graduationImages = [
  "/images/graduation/1.JPG",
  "/images/graduation/2.JPG",
  "/images/graduation/3.JPG",
  "/images/graduation/4.JPG",
];

export default function EducationSection() {
  const [activeTab, setActiveTab] = useState<Tab>("EDUCATION");
  const [showMoments, setShowMoments] = useState(false);
  const [graduationIndex, setGraduationIndex] = useState(0);

  const changeGraduationImage = (direction: number) => {
    setGraduationIndex(
      (currentIndex) =>
        (currentIndex + direction + graduationImages.length) % graduationImages.length,
    );
  };

  return (
    <section
      id="education"
      className="w-full border-t border-border/80 bg-surface/30 py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <SectionHeader
        label="ACADEMIC FOUNDATION"
        title="Academic Foundation"
        description="The education, recognition, and experiences that shaped how I learn and work."
        className="mb-12 lg:mb-16"
      />

      <div className="border-b border-border/70" role="tablist" aria-label="Academic foundation sections">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className="relative px-3 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.22em] text-muted transition-colors hover:text-gold sm:text-center"
            >
              {tab}
              {activeTab === tab && (
                <motion.span
                  layoutId="academicTabIndicator"
                  className="absolute inset-x-3 bottom-0 h-0.5 bg-gold"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={activeTab}
        role="tabpanel"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="pt-12 lg:pt-16"
      >
        {activeTab === "EDUCATION" && (
  <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
    
    {/* Education Timeline */}
    <div className="relative border-l border-gold/40 pl-6 md:pl-10">
      
      {/* College */}
      <div className="relative pb-16">
        <span className="absolute left-[-2.05rem] top-1 h-3 w-3 rounded-full border-2 border-gold bg-background md:left-[-2.65rem]" />

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          2022–2026 · Bulacan State University
        </span>

        <h3 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
          Bachelor of Science in Information Technology
        </h3>

        <p className="mt-1 font-serif text-lg italic text-gold-dark">
          Major in Web &amp; Mobile Application Development
        </p>

        <p className="mt-3 max-w-3xl text-sm font-light leading-relaxed text-muted">
          Curriculum focused on advanced web &amp; mobile software engineering,
          database management systems, UI/UX architecture, data analytics, and
          digital project governance.
        </p>

        <span className="mt-6 inline-flex border border-gold/60 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">
          Cum Laude
        </span>
      </div>

      {/* High School */}
      <div className="relative">
        <span className="absolute left-[-2.05rem] top-1 h-3 w-3 rounded-full border-2 border-border bg-background md:left-[-2.65rem]" />

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          2016–2022
        </span>

        <h3 className="mt-3 font-serif text-3xl text-foreground">
          Kapitangan National High School
        </h3>

        <p className="mt-1 font-serif text-lg italic text-gold-dark">
          Secondary Education
        </p>

        <p className="mt-1 text-sm text-muted">
          Valedictorian · With High Honors
        </p>
      </div>
    </div>

    {/* Graduation Gallery */}
    <figure className="lg:pt-1">
      <div className="relative aspect-[3/4] overflow-hidden border border-border/70 bg-surface">
        <motion.div
          key={graduationImages[graduationIndex]}
          initial={{ opacity: 0.35, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={graduationImages[graduationIndex]}
            alt="Lhycka Loreinne at graduation"
            fill
            sizes="(max-width: 1024px) 100vw, 320px"
            className="object-cover object-top"
          />
        </motion.div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <figcaption className="text-[10px] uppercase tracking-[0.25em] text-muted">
          Graduation Day · 2026
        </figcaption>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => changeGraduationImage(-1)}
            aria-label="Previous graduation image"
            className="text-muted transition-colors hover:text-gold"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
            {graduationIndex + 1} / {graduationImages.length}
          </span>

          <button
            type="button"
            onClick={() => changeGraduationImage(1)}
            aria-label="Next graduation image"
            className="text-muted transition-colors hover:text-gold"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </figure>
  </div>
)}

        {activeTab === "RECOGNITION" && (
          <div>
            <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
              <div className="border border-gold/40 bg-background p-8 shadow-md lg:p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Highest Distinction
                </span>
                <h3 className="mt-4 font-serif text-5xl text-foreground md:text-6xl">Cum Laude</h3>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
                  Academic distinction earned through sustained excellence in the Bachelor of Science in Information Technology program.
                </p>
              </div>
              <div className="divide-y divide-border/70 border-y border-border/70">
                {[
                  ["Dean's List", "A.Y. 2022–2023"],
                  ["Dean's List", "A.Y. 2023–2024"],
                  ["Student Leadership Recognition", "A.Y. 2025–2026"],
                  ["Valedictorian", "A.Y. 2021–2022"],
                  ["With High Honors", ""],
                ].map(([title, detail]) => (
                  <div key={`${title}-${detail}`} className="flex flex-wrap items-baseline justify-between gap-3 px-5 py-5">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">{title}</h3>
                    {detail && <p className="text-sm text-muted">{detail}</p>}
                  </div>
                ))}
              </div>
            </div>
            {/* <p className="mt-8 text-sm leading-relaxed text-muted sm:text-base">
              Consistent honor student from elementary through secondary education.
            </p> */}
          </div>
        )}

       {activeTab === "LEADERSHIP & INVOLVEMENT" && (
  <div>
    <div className="max-w-2xl">
      <h3 className="font-serif text-3xl text-foreground">
        LEADERSHIP &amp; INVOLVEMENT
      </h3>

      {/* <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
        Roles that gave me opportunities to contribute, coordinate, and work with others.
      </p> */}
    </div>

    {/* Organization Directory */}
    <div className="mt-10 divide-y divide-border/70 border-y border-border/70">
      
      {/* POSHED — Secretary */}
      <div className="grid grid-cols-[64px_1fr_auto] items-center gap-6 py-7">
        {/* Logo */}
        <div className="flex h-14 w-14 items-center justify-center border border-gold/30 bg-gold/5">
          <Image
            src="/images/leadership/Logo/POSHED-LOGO.jpg"
            alt="POSHED logo"
            width={42}
            height={42}
            className="object-contain"
          />
        </div>

        {/* Organization */}
        <div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
            2024–2025
          </p>

          <h4 className="font-serif text-2xl text-foreground">
            POSHED
          </h4>

          <p className="mt-1 text-sm text-muted">
            Prestigious Organization of Software and Hardware Elite Developers
          </p>
        </div>

        {/* Role */}
        <div className="text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Secretary
          </p>
          <p className="mt-1 text-xs text-muted">
            2024–2025
          </p>
        </div>
      </div>

      {/* Rotaract Club — Secretary */}
      <div className="grid grid-cols-[64px_1fr_auto] items-center gap-6 py-7">
        {/* Logo */}
        <div className="flex h-14 w-14 items-center justify-center border border-border/70 bg-surface">
          <Image
            src="/images/leadership/Logo/RAC-LOGO.jpg"
            alt="Rotaract Club logo"
            width={42}
            height={42}
            className="object-contain"
          />
        </div>

        {/* Organization */}
        <div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
            2024–2025
          </p>

          <h4 className="font-serif text-2xl text-foreground">
            Rotaract Club
          </h4>

          <p className="mt-1 text-sm text-muted">
            University organization and community service
          </p>
        </div>

        {/* Role */}
        <div className="text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Secretary
          </p>
          <p className="mt-1 text-xs text-muted">
            2024–2025
          </p>
        </div>
      </div>

      {/* POSHED — Treasurer */}
      <div className="grid grid-cols-[64px_1fr_auto] items-center gap-6 py-7">
        {/* Logo */}
        <div className="flex h-14 w-14 items-center justify-center border border-border/70 bg-surface">
          <Image
            src="/images/leadership/Logo/POSHED-LOGO.jpg"
            alt="POSHED logo"
            width={42}
            height={42}
            className="object-contain"
          />
        </div>

        {/* Organization */}
        <div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
            2023–2024
          </p>

          <h4 className="font-serif text-2xl text-foreground">
            POSHED
          </h4>

          <p className="mt-1 text-sm text-muted">
            Prestigious Organization of Software and Hardware Elite Developers
          </p>
        </div>

        {/* Role */}
        <div className="text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Treasurer
          </p>
          <p className="mt-1 text-xs text-muted">
            2023–2024
          </p>
        </div>
      </div>

      {/* Supreme Student Government */}
      <div className="grid grid-cols-[64px_1fr_auto] items-center gap-6 py-7">
        {/* Logo */}
        <div className="flex h-14 w-14 items-center justify-center border border-border/70 bg-surface">
          <Image
            src="/images/leadership/Logo/SSG-LOGO.jpg"
            alt="Supreme Student Government logo"
            width={42}
            height={42}
            className="object-contain"
          />
        </div>

        {/* Organization */}
        <div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
            2021–2022
          </p>

          <h4 className="font-serif text-2xl text-foreground">
            Supreme Student Government
          </h4>

          <p className="mt-1 text-sm text-muted">
            Kapitangan National High School
          </p>
        </div>

        {/* Role */}
        <div className="text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            President
          </p>
          <p className="mt-1 text-xs text-muted">
            2021–2022
          </p>
        </div>
      </div>
    </div>

    {/* Browse Moments */}
    <button
      type="button"
      onClick={() => setShowMoments((shown) => !shown)}
      className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-gold transition-colors hover:text-gold-dark"
    >
      {showMoments ? "Hide Moments ↑" : "Browse Moments →"}
    </button>

    {/* Leadership Photos */}
    {showMoments && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        transition={{ duration: 0.35 }}
        className="mt-8 grid gap-4 sm:grid-cols-2"
      >
        {leadershipMoments.map((src) => (
          <div
            key={src}
            className="relative aspect-16/10 overflow-hidden border border-border/70 bg-surface"
          >
            <Image
              src={src}
              alt="Leadership and involvement moment"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    )}
  </div>
)}
      </motion.div>
    </div>
  </section>
  );
}
