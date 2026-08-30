"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { GraphicItem } from "@/lib/data/graphic-designs";

interface GalleryCardProps {
  item: GraphicItem;
  onClick: () => void;
  aspectRatioClass?: string;
  priority?: boolean;
}

export default function GalleryCard({
  item,
  onClick,
  aspectRatioClass = "aspect-[3/4]",
  priority = false,
}: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#e5ddd3] bg-[#faf8f5] p-2 sm:p-2.5 transition-all duration-500 hover:border-[#c5a059] hover:shadow-xl hover:shadow-[#c5a059]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
      onClick={onClick}
    >
      {/* Pure Image Container */}
      <div
        className={`relative w-full overflow-hidden rounded-xl border border-[#e5ddd3]/60 bg-[#f4efea] ${aspectRatioClass}`}
      >
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority={priority}
        />

        {/* Minimal Hover Expand Icon */}
        <div className="absolute inset-0 bg-[#121110]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#121110]/80 text-[#faf7f2] backdrop-blur-sm border border-[#c5a059]/60 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Maximize2 className="h-4 w-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
