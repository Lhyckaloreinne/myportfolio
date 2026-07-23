"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

const certificates = [
  {
    title: "Excel Macros & VBA for Beginners",
    organization: "Simplilearn · SkillUp",
    issued: "Issued April 10, 2026",
    image: "/certificates/Certificate 2 (1).jpg",
    alt: "Declaration of completion certificate for Excel Macros and VBA for Beginners",
  },
  {
    title: "Data Analytics Essentials",
    organization: "Cisco Networking Academy",
    issued: "Issued May 5, 2026",
    image: "/certificates/Certificate 2 (2).jpg",
    alt: "Cisco Networking Academy certificate for Data Analytics Essentials",
  },
];

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="w-full border-t border-border/60 bg-surface/40 py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          label="CERTIFICATIONS"
          title="Proof of continued learning."
          description="Selected certificates that reflect my growing skills in productivity tools and data analytics."
          className="mb-12 lg:mb-16"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden rounded-2xl border border-border/80 bg-background"
            >
              <a
                href={certificate.image}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${certificate.title} certificate image`}
                className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-inset"
              >
                <div className="relative aspect-4/3 overflow-hidden border-b border-border/70 bg-white p-3 sm:p-5">
                  <Image
                    src={certificate.image}
                    alt={certificate.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02] sm:p-5"
                  />
                  <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/90 text-foreground opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" aria-hidden={true} />
                  </span>
                </div>
              </a>

              <div className="p-6 lg:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-muted">
                      {certificate.organization}
                    </p>
                    <h3 className="mt-3 font-serif text-xl font-bold tracking-tight text-foreground lg:text-2xl">
                      {certificate.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted">{certificate.issued}</p>
                  </div>
                  <Award
                    className="mt-1 h-5 w-5 shrink-0 text-muted"
                    aria-hidden={true}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}