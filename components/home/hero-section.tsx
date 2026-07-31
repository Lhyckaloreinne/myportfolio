"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start lg:col-span-7"
          >
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-foreground/20" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-muted">
                IT GRADUATE · DIGITAL PROFESSIONAL
              </span>
            </div>

            <h1 className="font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl lg:leading-[0.96] max-w-3xl">
              I create thoughtful digital experiences and organized solutions.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg lg:text-xl">
              I&apos;m an IT graduate who combines design, technology, data, and organization to create meaningful digital work and solve problems thoughtfully.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 sm:mt-12">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-background transition duration-200 hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/10"
              >
                <span>View My Work</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-border/80 bg-background px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-foreground transition duration-200 hover:border-foreground/60 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/10"
              >
                About Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:col-span-5"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[1.5rem] border border-border/60 bg-surface shadow-sm">
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
