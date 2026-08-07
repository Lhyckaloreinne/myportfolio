"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

const principles = [
  {
    number: "01",
    title: "Curious by Nature",
    description:
      "Continuous learning across design, technology, data analytics, and digital operations allows me to approach complex problems with fresh perspective.",
  },
  {
    number: "02",
    title: "Thoughtful in Process",
    description:
      "Clear planning, systematic documentation, and intentional design choices ensure every project is built for clarity and long-term utility.",
  },
  {
    number: "03",
    title: "Focused on People",
    description:
      "Whether shaping an intuitive user interface or structuring an operational workflow, I create practical solutions tailored for human experience.",
  },
];

const quotes = [
  {
    quote:
      "Design is not just what it looks and feels like. Design is how it works — and how gracefully it solves the problem.",
    author: "Lhycka Loreinne",
    role: "IT Graduate & Digital Professional",
  },
  {
    quote:
      "Bringing order to complexity through thoughtful design, structured code, and actionable data insights.",
    author: "Core Philosophy",
    role: "Multidisciplinary Approach",
  },
];

export default function AboutSection() {
  const [currentQuote, setCurrentQuote] = useState(0);

  const nextQuote = () => setCurrentQuote((prev) => (prev + 1) % quotes.length);
  const prevQuote = () => setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);

  return (
    <section
      id="about"
      className="w-full border-t border-border/80 bg-surface/40 py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          
          <SectionHeader
            label="THE PHILOSOPHY"
            title="A multidisciplinary lens for the digital age."
            description="I operate at the intersection of creative design, front-end technology, data-driven analysis, and systematic digital operations."
            className="lg:col-span-5"
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {/* Narrative Body Copy */}
            <div className="space-y-6 border-l-2 border-gold/40 pl-6 text-base leading-relaxed text-foreground sm:text-lg lg:text-xl font-light">
              <p>
                As a graduate in Information Technology, I specialize in synthesizing visual aesthetics with structural precision. I translate strategic concepts into clean user interfaces, responsive code, and organized operational workflows.
              </p>
              <p className="text-muted text-base leading-relaxed">
                My work is driven by relentless curiosity, precise craftsmanship, and a commitment to elegant execution across every touchpoint.
              </p>
            </div>

            {/* Principles Cards with Giant Serif Numerals */}
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative rounded-2xl border border-border/70 bg-background/80 p-6 backdrop-blur-xs transition-all duration-300 hover:border-gold/60"
                >
                  <span className="font-serif text-5xl font-light text-gold/30">
                    {principle.number}
                  </span>
                  <h3 className="mt-3 font-serif text-xl font-semibold tracking-tight text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Vogue Testimonial / Editorial Quote Banner (Ref 2 & Ref 3) */}
        <div className="mt-20 rounded-3xl border border-gold/30 bg-surface p-8 md:p-12 lg:p-16 shadow-xs relative overflow-hidden">
          <div className="absolute top-6 right-8 opacity-10">
            <Quote className="h-32 w-32 text-gold" />
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center"
              >
                <p className="font-serif italic text-2xl font-light leading-relaxed text-foreground sm:text-3xl lg:text-4xl">
                  &ldquo;{quotes[currentQuote].quote}&rdquo;
                </p>
                <div className="mt-6 inline-flex items-center gap-3">
                  <span className="h-px w-8 bg-gold" />
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
                    {quotes[currentQuote].author}
                  </span>
                  <span className="text-xs text-gold">•</span>
                  <span className="text-xs font-light text-muted">
                    {quotes[currentQuote].role}
                  </span>
                  <span className="h-px w-8 bg-gold" />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prevQuote}
                aria-label="Previous Quote"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-gold hover:text-gold"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {quotes.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentQuote(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentQuote ? "w-6 bg-gold" : "w-2 bg-border"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={nextQuote}
                aria-label="Next Quote"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-gold hover:text-gold"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}