"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Dribbble,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

const contactLinks = [
  {
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/your-profile",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/your-username",
    href: "https://github.com/",
    icon: Github,
  },
  {
    label: "Behance",
    value: "behance.net/your-profile",
    href: "https://www.behance.net/",
    icon: Dribbble,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full border-t border-border/60 bg-background py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <SectionHeader
            label="CONTACT"
            title="Let&apos;s build something thoughtful."
            description="I&apos;m open to opportunities, collaborations, and conversations about meaningful digital work."
            className="lg:col-span-5"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="grid border-y border-border/70 sm:grid-cols-2">
              {contactLinks.map((contact, index) => {
                const Icon = contact.icon;

                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                    className={`group flex items-start justify-between gap-4 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-inset sm:px-5 lg:py-8 ${
                      index % 2 === 0 ? "sm:border-r sm:border-border/70" : ""
                    } ${index < 2 ? "border-b border-border/70" : ""}`}
                  >
                    <span className="flex items-start gap-3">
                      <Icon
                        className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-foreground"
                        aria-hidden={true}
                      />
                      <span>
                        <span className="block text-[11px] font-semibold uppercase tracking-widest text-muted">
                          {contact.label}
                        </span>
                        <span className="mt-2 block break-all text-sm text-foreground transition-colors group-hover:text-muted">
                          {contact.value}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                      aria-hidden={true}
                    />
                  </a>
                );
              })}
            </div>

            <a
              href="mailto:hello@example.com"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-background transition-colors hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
            >
              Send an email
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden={true}
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}