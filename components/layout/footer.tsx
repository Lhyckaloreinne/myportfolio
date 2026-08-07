import Link from "next/link";
import { ArrowUpRight, Link2, Mail } from "lucide-react";
import { SiBehance, SiGithub } from "react-icons/si";

const footerLinks = [
  { label: "ABOUT", href: "/#about" },
  { label: "WORK", href: "/#work" },
  { label: "SPECIALIZATIONS", href: "/#what-i-do" },
  { label: "CAPABILITIES", href: "/#skills" },
  { label: "ACADEMICS", href: "/#education" },
  { label: "CREDENTIALS", href: "/#certifications" },
  { label: "CONTACT", href: "/#contact" },
];

const socialLinks = [
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/",
    icon: Link2,
  },
  {
    label: "GITHUB",
    href: "https://github.com/",
    icon: SiGithub,
  },
  {
    label: "BEHANCE",
    href: "https://www.behance.net/",
    icon: SiBehance,
  },
  {
    label: "EMAIL",
    href: "mailto:hello@example.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/80 bg-background text-foreground pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Top Centered Vogue Masthead */}
        <div className="flex flex-col items-center text-center pb-12 border-b border-border/60">
          <Link
            href="/"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[0.2em] text-foreground hover:text-gold transition-colors"
          >
            LHYCKA LOREINNE
          </Link>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.45em] text-gold">
            VOGUE PORTFOLIO · ISSUE N° 01 · 2026
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted font-light">
            An IT Graduate &amp; Digital Professional delivering high-precision front-end engineering, UI/UX design, data analytics, and digital operations.
          </p>
        </div>

        {/* Links & Navigation */}
        <div className="py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:items-center">
          
          <nav aria-label="Footer navigation" className="lg:col-span-8">
            <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-semibold uppercase tracking-[0.3em] text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end gap-6">
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
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-surface/50 text-foreground transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden={true} />
                </a>
              );
            })}
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="border-t border-border/60 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] uppercase tracking-[0.25em] text-muted gap-4">
          <p>© {new Date().getFullYear()} LHYCKA LOREINNE SULIT. ALL RIGHTS RESERVED.</p>
          <p className="text-gold">DESIGNED WITH ELEGANCE &amp; LUXURY PRECISION.</p>
        </div>

      </div>
    </footer>
  );
}