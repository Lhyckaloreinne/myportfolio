"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-16 md:py-24 lg:py-28">
      {/* Background Decorative Gold Accent Rays */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-gold/5 blur-3xl" />

     {/* Background Decorative Metallic Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[600px] w-[600px] rounded-full bg-gold/10 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start lg:col-span-7"
          >
            {/* Vogue Issue Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-surface/80 px-4 py-1.5 backdrop-blur-xs">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-foreground">
                PERSONAL PORTFOLIO
              </span>
            </div>


            {/* <h1 className="font-serif text-5xl font-normal tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl lg:leading-[0.98]">
              Crafting <span className="font-serif italic text-gold font-light">Timeless</span> Digital Experiences.
            </h1> */}

            <h1 className="font-serif text-5xl font-normal tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl lg:leading-[0.98]">Crafting{" "}
            <span className="font-serif italic text-gold font-light">Timeless </span><br />
            <span className="whitespace-nowrap">Digital Experiences.</span>
            </h1>

            {/* Italic Sub-Header */}
            <p className="mt-4 font-serif italic text-xl text-gold-dark sm:text-2xl font-light">
              &ldquo;Where design precision meets analytical &amp; technical intelligence.&rdquo;
            </p>

            {/* Subtitle Paragraph */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg lg:text-xl font-light">
              I am an IT graduate combining UI/UX design, front-end development, data analytics, graphic design, and digital operations to build refined digital solutions.
            </p>

            {/* Luxury Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-5 sm:mt-12">
              <Link
                href="/#work"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-background transition-all duration-300 hover:bg-gold hover:text-white shadow-md active:scale-95"
              >
                <span>Explore Work</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/#about"
                className="inline-flex items-center justify-center rounded-full border border-gold/70 bg-transparent px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-foreground transition-all duration-300 hover:border-foreground hover:bg-surface active:scale-95"
              >
                Philosophy
              </Link>
            </div>
          </motion.div>

          {/* Right Image Frame: Vaulted Arch with Gold Offset Outline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-md">
              {/* Vaulted Arch Frame (Reference 3 & Reference 1) */}
              <div className="vogue-offset-frame relative aspect-[4/5] w-full overflow-hidden arch-frame border border-gold/40 bg-surface shadow-xl">
                <Image
                  src="/images/Lhycka_Pic.JPG"
                  alt="Lhycka Loreinne Sulit - IT Graduate & Digital Professional"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                />

                {/* Subtle Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Vogue Glass Badge */}
              <div className="absolute -bottom-5 left-6 right-6 rounded-2xl border border-gold/40 bg-background/90 p-4 shadow-lg backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.4em] text-gold">
                      Academic Distinction
                    </span>
                    <span className="font-serif text-lg font-semibold tracking-wide text-foreground">
                      BS Information Technology
                    </span>
                  </div>
                  <span className="rounded-full border border-gold/60 bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                    Cum Laude
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
