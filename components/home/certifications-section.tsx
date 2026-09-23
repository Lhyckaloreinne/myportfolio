"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

const certificates = [
  {
    title: "Data Analytics Essentials & Visualization",
    organization: "CISCO NETWORKING ACADEMY",
    issued: "Issued May 2026",
    image: "/certificates/Certificate 2 (2).jpg",
    alt: "Cisco Networking Academy certificate for Data Analytics Essentials",
  },
  {
    title: "HSI On-the-Job Training Program",
    organization: "Highly Succeed Inc.",
    issued: "Issued March 2026",
    image: "/certificates/Certificate 3.jpg",
    alt: "Certificate of completion for HSI On-the-Job Training Program",
  },
  {
    title: "Excel Macros & VBA Automation for Beginners",
    organization: "SIMPLILEARN · SKILLUP",
    issued: "Issued April 2026",
    image: "/certificates/Certificate 2 (1).jpg",
    alt: "Completion certificate for Excel Macros and VBA for Beginners",
  },
];

export default function CertificationsSection() {
  // Duplicate the certificates so the marquee can loop seamlessly.
  const marqueeCertificates = [...certificates, ...certificates];

  return (
    <section
      id="certifications"
      className="w-full border-t border-border/80 bg-background py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          label="CREDENTIALS"
          title="Certifications & Continuous Learning"
          description="Verified professional credentials in automated productivity and data analytics."
          className="mb-14 lg:mb-20"
        />

        {/* Continuous marquee viewport */}
        <div className="overflow-hidden">
          <motion.div
            className="flex w-max gap-8"
            animate={{
              x: ["0%", "calc(-50% - 1rem)"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {marqueeCertificates.map((certificate, index) => (
              <article
                key={`${certificate.title}-${index}`}
                className="group w-[calc((100vw-3rem)/1)] shrink-0 overflow-hidden rounded-3xl border border-border/80 bg-surface/30 transition-all duration-500 hover:border-gold/60 hover:shadow-md sm:w-[calc((100vw-4rem)/1)] lg:w-[calc((min(80rem,100vw-6rem)-2rem)/2)]"
              >
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${certificate.title} certificate image`}
                  className="block focus-visible:outline-none"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-border/70 bg-white p-4 sm:p-6">
                    <Image
                      src={certificate.image}
                      alt={certificate.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.03] sm:p-6"
                    />

                    <div className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-background/90 text-gold shadow-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <ArrowUpRight
                        className="h-4 w-4"
                        aria-hidden={true}
                      />
                    </div>
                  </div>
                </a>

                <div className="p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
                        {certificate.organization}
                      </span>

                      <h3 className="mt-2.5 font-serif text-2xl font-normal tracking-tight text-foreground lg:text-3xl">
                        {certificate.title}
                      </h3>

                      <p className="mt-3 text-xs uppercase tracking-widest text-muted">
                        {certificate.issued}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                      <Award
                        className="h-5 w-5"
                        aria-hidden={true}
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}