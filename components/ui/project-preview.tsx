"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe } from "lucide-react";

interface ProjectPreviewProps {
  images: string[];
  platform?: string;
  title: string;
}

const subscribeReducedMotion = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
};

const getReducedMotionSnapshot = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const getReducedMotionServerSnapshot = () => false;

export default function ProjectPreview({
  images = [],
  platform = "web",
  title,
}: ProjectPreviewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const isWeb =
    platform.toLowerCase().includes("web") ||
    platform.toLowerCase().includes("responsive");

  const nextSlide = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-cycle effect
  useEffect(() => {
    if (images.length <= 1 || isHovered || prefersReducedMotion) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3800);

    return () => clearInterval(timer);
  }, [images.length, isHovered, prefersReducedMotion, nextSlide]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[16/10] bg-[#f4efea] rounded-xl flex items-center justify-center border border-[#e5ddd3] text-xs text-[#7e756b]">
        No preview images available
      </div>
    );
  }

  const activeImage = images[currentIndex];
  // Format URL safely for public static assets
  const safeImageUrl = encodeURI(activeImage);

  // Address bar display domain based on title
  const domainSlug =
    title.toLowerCase().replace(/[^a-z0-9]/g, "") +
    (isWeb ? ".design" : ".app");

  if (isWeb) {
    return (
      <div
        className="group relative w-full overflow-hidden rounded-xl border border-[#e5ddd3] bg-[#faf7f2] shadow-sm transition-all duration-300 hover:border-[#c5a059]/40 hover:shadow-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Browser Header Bar */}
        <div className="flex h-9 items-center justify-between border-b border-[#e5ddd3] bg-[#f4efea]/90 px-4 backdrop-blur-sm">
          {/* Window Control Buttons */}
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e5ddd3]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#c5a059]/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#7e756b]/30" />
          </div>

          {/* Browser Address Bar */}
          <div className="flex items-center gap-1.5 rounded-md border border-[#e5ddd3]/70 bg-[#faf8f5] px-3 py-0.5 text-[11px] font-mono text-[#7e756b]/90 shadow-inner">
            <Globe className="h-3 w-3 text-[#c5a059]" />
            <span className="truncate max-w-[160px] sm:max-w-[220px]">
              https://{domainSlug}
            </span>
          </div>

          {/* Spacer to align center */}
          <div className="w-10 text-right text-[10px] text-[#7e756b]/60 font-mono hidden sm:block">
            {currentIndex + 1}/{images.length}
          </div>
        </div>

        {/* Browser Screen Content Area */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e5ddd3]/30">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={safeImageUrl}
              alt={`${title} screenshot ${currentIndex + 1}`}
              className="h-full w-full object-cover object-top"
              initial={{ opacity: prefersReducedMotion ? 1 : 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: prefersReducedMotion ? 1 : 0 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            />
          </AnimatePresence>

          {/* Manual Arrow Controls (visible on hover) */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-[#e5ddd3] bg-[#faf7f2]/90 p-1.5 text-[#121110] opacity-0 backdrop-blur-sm transition-opacity duration-200 hover:bg-[#c5a059] hover:text-white group-hover:opacity-100 focus:opacity-100"
                aria-label="Previous screen"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-[#e5ddd3] bg-[#faf7f2]/90 p-1.5 text-[#121110] opacity-0 backdrop-blur-sm transition-opacity duration-200 hover:bg-[#c5a059] hover:text-white group-hover:opacity-100 focus:opacity-100"
                aria-label="Next screen"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}

          {/* Pagination Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/20 bg-[#121110]/50 px-2.5 py-1 backdrop-blur-md">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-5 bg-[#c5a059]"
                      : "w-1.5 bg-white/60 hover:bg-white"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Mobile App Phone Mockup Frame
  return (
    <div
      className="group relative w-full overflow-hidden rounded-xl border border-[#e5ddd3] bg-[#f4efea]/60 p-4 sm:p-6 md:p-8 flex items-center justify-center transition-all duration-300 hover:border-[#c5a059]/40 hover:bg-[#f4efea]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Phone Device Frame */}
      <div className="relative aspect-[9/18.5] w-[180px] sm:w-[200px] md:w-[210px] rounded-[2.2rem] border-[6px] border-[#1f1e1c] bg-[#121110] shadow-xl shadow-black/10 overflow-hidden">
        {/* Top Notch / Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 h-3.5 w-16 rounded-full bg-[#121110] border border-[#2e2c2a] flex items-center justify-end px-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2e2c2a]" />
        </div>

        {/* Mobile Screen Container */}
        <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-[#121110]">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={safeImageUrl}
              alt={`${title} mobile screen ${currentIndex + 1}`}
              className="h-full w-full object-cover object-top"
              initial={{ opacity: prefersReducedMotion ? 1 : 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: prefersReducedMotion ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            />
          </AnimatePresence>

          {/* Bottom Home Indicator Bar */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-20 h-1 w-16 rounded-full bg-white/40" />
        </div>
      </div>

      {/* Manual Arrow Controls (visible on hover) */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-[#e5ddd3] bg-[#faf7f2]/90 p-1.5 text-[#121110] opacity-0 backdrop-blur-sm transition-opacity duration-200 hover:bg-[#c5a059] hover:text-white group-hover:opacity-100 focus:opacity-100"
            aria-label="Previous screen"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-[#e5ddd3] bg-[#faf7f2]/90 p-1.5 text-[#121110] opacity-0 backdrop-blur-sm transition-opacity duration-200 hover:bg-[#c5a059] hover:text-white group-hover:opacity-100 focus:opacity-100"
            aria-label="Next screen"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}

      {/* Pagination Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-[#e5ddd3] bg-[#faf7f2]/90 px-2.5 py-1 backdrop-blur-md">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-5 bg-[#c5a059]"
                  : "w-1.5 bg-[#7e756b]/40 hover:bg-[#7e756b]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
