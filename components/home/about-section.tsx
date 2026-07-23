"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";

const principles = [
  {
    number: "01",
    title: "Curious by nature",
    description:
      "I keep learning across design, technology, data, and digital operations so I can approach unfamiliar problems with perspective.",
  },
  {
    number: "02",
    title: "Thoughtful in process",
    description:
      "I value clear planning, useful documentation, and decisions that make the work easier to understand and improve.",
  },
  {
    number: "03",
    title: "Focused on people",
    description:
      "Whether I am shaping an interface or organizing a workflow, I look for practical solutions that support the people using them.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full border-t border-border/60 bg-surface/40 py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <SectionHeader
            label="ABOUT ME"
            title="A digital professional with a wide lens."
            className="lg:col-span-5"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="max-w-2xl text-base leading-relaxed text-foreground sm:text-lg lg:text-xl">
              I&apos;m an Information Technology graduate building a career at
              the intersection of creative thinking, technology, data, and
              organization. I enjoy turning ideas into clear digital
              experiences and practical systems that help people work better.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              My work is guided by curiosity, thoughtful problem-solving, and
              a belief that good outcomes come from both the final result and
              the process behind it. This portfolio brings those interests
              together in one evolving platform.
            </p>

            <div className="mt-10 grid gap-6 border-t border-border/70 pt-6 sm:grid-cols-3 lg:mt-14">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-muted">
                    {principle.number}
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-bold tracking-tight text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}