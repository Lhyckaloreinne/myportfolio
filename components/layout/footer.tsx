import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { SiBehance, SiGithub } from "react-icons/si";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: SiGithub,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/",
    icon: SiBehance,
  },
  {
    label: "Email",
    href: "mailto:hello@example.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-start md:gap-8 lg:gap-12">
          <div className="md:col-span-6">
            <Link
              href="/"
              className="font-serif text-2xl font-bold tracking-tight transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50"
            >
              Lhycka Loreinne
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-background/65">
              A multidisciplinary digital professional exploring thoughtful
              experiences, useful systems, and continuous learning.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="md:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-background/50">
              Explore
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/75 transition-colors hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-background/50">
              Connect
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                const isExternal = link.href.startsWith("http");

                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="group inline-flex items-center gap-2 text-background/75 transition-colors hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50"
                    >
                      <Icon className="h-4 w-4" aria-hidden={true} />
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden={true} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-background/15 pt-5 text-xs text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Lhycka Loreinne. All rights reserved.</p>
          <p>Designed and built with intention.</p>
        </div>
      </div>
    </footer>
  );
}