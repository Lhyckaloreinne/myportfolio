import Link from "next/link";
import { ArrowUpRight, Link2, Mail } from "lucide-react";
import { SiBehance, SiGithub } from "react-icons/si";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Specializations", href: "/#what-i-do" },
  { label: "Capabilities", href: "/#skills" },
  { label: "Academics", href: "/#education" },
  { label: "Credentials", href: "/#certifications" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: Link2,
  },
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
    <footer className="border-t border-border/70 bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Main Footer */}
        <div className="grid gap-14 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">

          {/* Brand / Introduction */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-block font-serif text-2xl tracking-[0.12em] text-foreground transition-colors duration-300 hover:text-gold"
            >
              LHYCKA LOREINNE
            </Link>

            <div className="mt-5 h-px w-12 bg-gold" />

            <p className="mt-6 max-w-md text-sm leading-7 text-muted">
              IT graduate and digital professional working across
              front-end development, UI/UX design, data analytics,
              and digital operations.
            </p>

            <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
              Digital • Design • Technology
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-4">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">
              Explore
            </p>

            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-300 hover:text-foreground"
                    >
                      <span>{link.label}</span>

                      <ArrowUpRight
                        className="h-3 w-3 -translate-y-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-gold"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div className="lg:col-span-3">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">
              Connect
            </p>

            <div className="space-y-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                const isExternal = link.href.startsWith("http");

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    aria-label={link.label}
                    className="group flex w-fit items-center gap-3 text-sm text-muted transition-colors duration-300 hover:text-foreground"
                  >
                    <span className="flex h-7 w-7 items-center justify-center border border-border/70 transition-all duration-300 group-hover:border-gold group-hover:text-gold">
                      <Icon
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                    </span>

                    <span>{link.label}</span>

                    <ArrowUpRight
                      className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-gold"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Accent Divider */}
        <div className="relative">
          <div className="h-px w-full bg-border/70" />

          <div className="absolute left-0 top-0 h-px w-16 bg-gold" />
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}
          <p className="text-[10px] uppercase tracking-[0.22em] text-muted">
            © {new Date().getFullYear()} Lhycka Loreinne Sulit
          </p>

          {/* Meta / Back to Top */}
          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted">
              Based in the Philippines
            </span>

            <span className="hidden h-3 w-px bg-border sm:block" />

            <Link
              href="/"
              className="text-[10px] uppercase tracking-[0.22em] text-gold transition-colors duration-300 hover:text-foreground"
            >
              Back to Top ↑
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}