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
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/90 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-12">
        {/* Brand / Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-baseline gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 rounded-sm"
        >
          <span className="font-serif text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-muted lg:text-2xl">
            Lhycka Loreinne
          </span>
          <span className="hidden text-[10px] font-medium tracking-widest uppercase text-muted sm:inline-block">
            Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden items-center gap-8 md:flex"
        >
          <ul className="flex items-center gap-7 text-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative py-1 text-sm tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 rounded-sm ${
                      isActive
                        ? "font-medium text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 h-[1.5px] w-full bg-foreground"
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

          {/* Contact CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-xs font-medium uppercase tracking-wider text-background transition-all duration-200 hover:bg-foreground/85 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-border/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 md:hidden"
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
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border/60 bg-background md:hidden"
          >
            <nav
              aria-label="Mobile Navigation"
              className="flex flex-col px-6 py-6"
            >
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`block py-1.5 text-base tracking-wide transition-colors ${
                          isActive
                            ? "font-medium text-foreground"
                            : "text-muted hover:text-foreground"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 pt-6 border-t border-border/60">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-3 text-xs font-medium uppercase tracking-wider text-background transition-colors hover:bg-foreground/85 active:scale-95"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
