"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Text & Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start lg:col-span-7"
          >
            {/* Eyebrow */}
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-6 bg-foreground/30" />
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                IT GRADUATE · DIGITAL PROFESSIONAL
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.12]">
              I create thoughtful digital experiences and organized solutions.
            </h1>

            {/* Supporting Description */}
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg lg:text-xl lg:leading-relaxed max-w-2xl">
              I&apos;m an IT graduate who combines design, technology, data,
              and organization to create meaningful digital work and solve
              problems thoughtfully.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-xs font-medium uppercase tracking-wider text-background transition-all duration-200 hover:bg-foreground/85 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
              >
                <span>View My Work</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-7 py-3.5 text-xs font-medium uppercase tracking-wider text-foreground transition-all duration-200 hover:border-foreground/40 hover:bg-border/30 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
              >
                About Me
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Editorial Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:col-span-5"
          >
            <div className="relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden rounded-2xl bg-border/40 border border-border/60 shadow-sm lg:max-w-none">
              <Image
                src="/images/lhycka_profile.JPG"
                alt="Lhycka Loreinne Sulit - IT Graduate and Digital Professional"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 450px"
                className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
