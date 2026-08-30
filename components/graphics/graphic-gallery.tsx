"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import {
  ALL_GRAPHIC_ITEMS,
  MARILAG_ITEMS,
  BULSU_ITEMS,
  BRANDING_ITEMS,
  MARKETING_ITEMS,
  ORGANIZATIONAL_ITEMS,
  GraphicItem,
} from "@/lib/data/graphic-designs";
import GalleryCard from "./gallery-card";
import MarilagShowcase from "./marilag-showcase";
import ImageLightbox from "./image-lightbox";

export default function GraphicGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxItems, setLightboxItems] = useState<GraphicItem[]>(ALL_GRAPHIC_ITEMS);

  const openLightbox = useCallback((item: GraphicItem, scopeItems?: GraphicItem[]) => {
    const targetList = scopeItems || ALL_GRAPHIC_ITEMS;
    const index = targetList.findIndex((i) => i.id === item.id);
    setLightboxItems(targetList);
    setLightboxIndex(index >= 0 ? index : 0);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  return (
    <div className="space-y-20 md:space-y-28">
      {/* ========================================================
          01 — CLIENT WORK (19 Total Images: 15 Marilag + 4 BulSU)
          ======================================================== */}
      <section className="space-y-12">
        <div className="flex items-center justify-between border-b border-[#e5ddd3] pb-4">
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#c5a059]">
            01 / CLIENT WORK
          </span>
          <span className="text-xs font-mono text-[#7e756b]">19 Images (15 Marilag · 4 BulSU)</span>
        </div>

        {/* Marilag Bridal Fair (All 15 Images) */}
        <div className="space-y-6">
          <MarilagShowcase
            onOpenLightbox={(item) => openLightbox(item, MARILAG_ITEMS)}
          />
        </div>

        {/* BulSU Sambalaran (All 4 Images Visible Simultaneously) */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between border-b border-[#e5ddd3] pb-2">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#c5a059]">
              BULSU SAMBALARAN (ALL 4 DESIGNS)
            </span>
            <span className="text-xs font-mono text-[#7e756b]">4 Images</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {BULSU_ITEMS.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => openLightbox(item, BULSU_ITEMS)}
                aspectRatioClass="aspect-[3/4]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          02 — BRANDING (1 Image)
          ======================================================== */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#e5ddd3] pb-2">
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#c5a059]">
            02 / BRANDING
          </span>
          <span className="text-xs font-mono text-[#7e756b]">1 Image</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANDING_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-[#e5ddd3] bg-[#faf8f5] p-6 transition-all duration-500 hover:border-[#c5a059] hover:shadow-xl hover:shadow-[#c5a059]/10"
              onClick={() => openLightbox(item, BRANDING_ITEMS)}
            >
              <div className="relative aspect-square w-full flex items-center justify-center overflow-hidden rounded-2xl border border-[#e5ddd3]/60 bg-[#faf8f5] p-6 transition-transform duration-500 group-hover:scale-102">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#121110]/80 text-[#faf7f2] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-[#c5a059] group-hover:text-[#121110]">
                  <Maximize2 className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================
          03 — MARKETING COLLATERAL (3 Images)
          ======================================================== */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#e5ddd3] pb-2">
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#c5a059]">
            03 / MARKETING COLLATERAL (PRODUCT CATALOG)
          </span>
          <span className="text-xs font-mono text-[#7e756b]">3 Images</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {MARKETING_ITEMS.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => openLightbox(item, MARKETING_ITEMS)}
              aspectRatioClass="aspect-[4/3] sm:aspect-[16/10]"
            />
          ))}
        </div>
      </section>

      {/* ========================================================
          04 — ORGANIZATIONAL WORK (5 Images)
          ======================================================== */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#e5ddd3] pb-2">
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#c5a059]">
            04 / ORGANIZATIONAL WORK (PUBMATS, POSTERS, LANYARDS)
          </span>
          <span className="text-xs font-mono text-[#7e756b]">5 Images</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {ORGANIZATIONAL_ITEMS.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => openLightbox(item, ORGANIZATIONAL_ITEMS)}
              aspectRatioClass={item.aspectRatio === "square" ? "aspect-square" : "aspect-[3/4]"}
            />
          ))}
        </div>
      </section>

      {/* Global Interactive Image Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
