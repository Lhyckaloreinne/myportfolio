"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  const isDark = !mounted || theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`group relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-surface/50 text-foreground transition-all duration-300 hover:border-gold hover:text-gold hover:bg-surface active:scale-95 shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold ${className}`}
    >
      {/* Editorial subtle icon */}
      {isDark ? (
        <Sun className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}
