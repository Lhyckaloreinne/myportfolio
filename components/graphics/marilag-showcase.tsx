"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { MARILAG_ITEMS, GraphicItem } from "@/lib/data/graphic-designs";
import GalleryCard from "./gallery-card";

interface MarilagShowcaseProps {
  onOpenLightbox: (item: GraphicItem) => void;
}

export default function MarilagShowcase({ onOpenLightbox }: MarilagShowcaseProps) {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const featuredItem = MARILAG_ITEMS[featuredIndex];

  const handlePrevFeatured = () => {
    setFeaturedIndex((prev) => (prev - 1 + MARILAG_ITEMS.length) % MARILAG_ITEMS.length);
  };

  const handleNextFeatured = () => {
    setFeaturedIndex((prev) => (prev + 1) % MARILAG_ITEMS.length);
  };

  return (
    <div className="space-y-8">
      {/* 1. CURATED SPOTLIGHT HERO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl border border-border bg-surface-card p-4 sm:p-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Main Featured Image Display */}
          <div className="lg:col-span-8">
            <div
              className="group relative aspect-[3/4] sm:aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-surface cursor-pointer"
              onClick={() => onOpenLightbox(featuredItem)}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  key={featuredItem.id}
                  src={featuredItem.src}
                  alt={featuredItem.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 850px"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-card/90 backdrop-blur-xs px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors group-hover:bg-gold group-hover:text-white shadow-sm">
                <Maximize2 className="h-3.5 w-3.5" />
                <span>Expand</span>
              </div>
            </div>
          </div>

          {/* Quick Carousel Controls & Thumbnail Strip */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                FEATURED SPOTLIGHT
              </span>
              <div className="text-xs font-mono text-muted">
                <span className="text-gold font-semibold">{String(featuredIndex + 1).padStart(2, "0")}</span> / {String(MARILAG_ITEMS.length).padStart(2, "0")}
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-5 gap-2 max-h-[220px] overflow-y-auto pr-1">
              {MARILAG_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFeaturedIndex(idx)}
                  aria-label={`Select item ${idx + 1}`}
                  className={`relative aspect-[3/4] overflow-hidden rounded-lg border transition-all duration-300 ${
                    featuredIndex === idx
                      ? "border-gold ring-2 ring-gold/40 scale-105"
                      : "border-border opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-3 pt-2 border-t border-border">
              <button
                type="button"
                onClick={handlePrevFeatured}
                aria-label="Previous design"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border bg-surface-card py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-gold hover:bg-gold hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Prev</span>
              </button>
              <button
                type="button"
                onClick={handleNextFeatured}
                aria-label="Next design"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border bg-surface-card py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-gold hover:bg-gold hover:text-white"
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. COMPLETE VISUAL GRID: ALL 15 MARILAG DESIGNS DISPLAYED */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-2">
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gold">
            MARILAG COLLECTION (ALL 15 DESIGNS)
          </span>
          <span className="text-xs font-mono text-muted">15 Images</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {MARILAG_ITEMS.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => onOpenLightbox(item)}
              aspectRatioClass="aspect-[3/4]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
