"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GraphicItem } from "@/lib/data/graphic-designs";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: GraphicItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}: ImageLightboxProps) {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    if (items.length <= 1) return;
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (items.length <= 1) return;
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation & ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Handle swipe gesture on mobile
  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      handlePrev();
    } else if (info.offset.x < -swipeThreshold) {
      handleNext();
    }
  };

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#121110]/95 backdrop-blur-md p-4 sm:p-6 select-none"
        onClick={onClose}
      >
        {/* Floating Top Header: Minimal Counter & Close */}
        <div
          className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-30 flex items-center justify-between pointer-events-none"
        >
          {/* Subtle Minimal Counter */}
          <div className="pointer-events-auto rounded-full border border-[#2e2c2a] bg-[#1a1918]/90 backdrop-blur-md px-3.5 py-1 text-xs font-mono text-[#c5a059] tracking-wider shadow-lg">
            {String(currentIndex + 1).padStart(2, "0")}{" "}
            <span className="text-[#7e756b] mx-1">/</span>{" "}
            {String(items.length).padStart(2, "0")}
          </div>

          {/* Minimal Close Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close Lightbox (ESC)"
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#2e2c2a] bg-[#1a1918]/90 backdrop-blur-md text-[#faf7f2] transition-colors hover:border-[#c5a059] hover:bg-[#c5a059] hover:text-[#121110] focus:outline-none focus:ring-2 focus:ring-[#c5a059] shadow-lg"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Previous Navigation Button */}
        {items.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 z-30 hidden sm:inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#2e2c2a] bg-[#1a1918]/85 backdrop-blur-md text-[#faf7f2] transition-all hover:border-[#c5a059] hover:bg-[#c5a059] hover:text-[#121110] focus:outline-none focus:ring-2 focus:ring-[#c5a059] shadow-xl"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        {/* Next Navigation Button */}
        {items.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 z-30 hidden sm:inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#2e2c2a] bg-[#1a1918]/85 backdrop-blur-md text-[#faf7f2] transition-all hover:border-[#c5a059] hover:bg-[#c5a059] hover:text-[#121110] focus:outline-none focus:ring-2 focus:ring-[#c5a059] shadow-xl"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}

        {/* Center Large Image Presentation */}
        <motion.div
          key={currentItem.id}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.25}
          onDragEnd={handleDragEnd}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center max-h-[86vh] sm:max-h-[90vh] max-w-[92vw] sm:max-w-[88vw] cursor-grab active:cursor-grabbing z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative max-h-[86vh] sm:max-h-[90vh] max-w-[92vw] sm:max-w-[88vw] flex items-center justify-center">
            <Image
              src={currentItem.src}
              alt={currentItem.title}
              width={2200}
              height={1800}
              className="max-h-[86vh] sm:max-h-[90vh] max-w-[92vw] sm:max-w-[88vw] w-auto h-auto object-contain rounded-xl shadow-2xl border border-[#2e2c2a]/90"
              priority
              unoptimized
              sizes="(max-width: 768px) 95vw, 90vw"
            />
          </div>
        </motion.div>

        {/* Mobile Navigation Bar (Bottom) */}
        {items.length > 1 && (
          <div
            className="absolute bottom-4 left-4 right-4 z-30 flex sm:hidden items-center justify-between gap-3 pointer-events-none"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="pointer-events-auto inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-[#2e2c2a] bg-[#1a1918]/90 backdrop-blur-md py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#faf7f2] active:bg-[#c5a059] active:text-[#121110] shadow-lg"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Prev</span>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="pointer-events-auto inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-[#2e2c2a] bg-[#1a1918]/90 backdrop-blur-md py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#faf7f2] active:bg-[#c5a059] active:text-[#121110] shadow-lg"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
