"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/#about" },
  { name: "WORK", href: "/#work" },
  { name: "SKILLS", href: "/#skills" },
  { name: "CONTACT", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/90 backdrop-blur-md transition-all duration-300">
      {/* Top Vogue Editorial Ticker */}
      <div className="hidden border-b border-border/50 bg-surface/80 py-1.5 text-center text-[10px] uppercase tracking-[0.4em] text-muted md:block">
        <span>ISSUE N° 01</span>
        <span className="mx-4 text-gold">•</span>
        <span>IT GRADUATE &amp; DIGITAL PROFESSIONAL</span>
        <span className="mx-4 text-gold">•</span>
        <span>MANILA, PHILIPPINES</span>
      </div>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Masthead / Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex flex-col items-start focus-visible:outline-none"
        >
          <span className="font-serif text-2xl font-semibold tracking-[0.18em] text-foreground transition-colors group-hover:text-gold lg:text-3xl">
            LHYCKA LOREINNE
          </span>
          <span className="text-[9px] font-medium uppercase tracking-[0.45em] text-gold">
            Vogue Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden items-center gap-10 md:flex"
        >
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href.startsWith("/#") && pathname === "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative py-1 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/80 transition-colors duration-200 hover:text-gold"
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 h-[2px] w-full bg-gold"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Contact CTA Button */}
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full border border-gold/70 bg-transparent px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground transition-all duration-300 hover:bg-gold hover:text-white active:scale-95 shadow-xs"
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex items-center justify-center rounded-full border border-border/80 p-2.5 text-foreground transition-colors hover:border-gold hover:text-gold md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border/60 bg-background md:hidden"
          >
            <nav
              aria-label="Mobile Navigation"
              className="flex flex-col px-6 py-8"
            >
              <ul className="flex flex-col space-y-5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block py-1 text-sm font-semibold uppercase tracking-[0.3em] text-foreground transition-colors hover:text-gold"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-border/60 pt-6">
                <Link
                  href="/#contact"
                  onClick={closeMenu}
                  className="inline-flex w-full items-center justify-center rounded-full bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:bg-gold-dark"
                >
                  Get In Touch
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
