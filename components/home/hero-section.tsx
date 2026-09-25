"use client"; 
 
import Image from "next/image"; 
import Link from "next/link"; 
import { motion } from "framer-motion"; 
import { ArrowUpRight, Sparkles } from "lucide-react"; 
 
export default function HeroSection() { 
  return ( 
    <section className="relative w-full overflow-hidden bg-background py-16 md:py-24 lg:py-28"> 
      
      {/* Background Decorative Gold Accent Rays */} 
      <div className="pointer-events-none absolute -right-32 -top-32 h-125 w-125 rounded-full bg-gold/5 blur-3xl" /> 
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-125 w-125 rounded-full bg-gold/5 blur-3xl" /> 
 
      {/* Background Decorative Metallic Glows */} 
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-gold/10 blur-3xl" /> 
      <div className="pointer-events-none absolute -right-40 bottom-10 h-150 w-150 rounded-full bg-gold/10 blur-3xl" /> 
 
      <div className="mx-auto max-w-7xl px-6 lg:px-12"> 
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16"> 
           
          {/* Left Editorial Copy */} 
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} 
            className="flex flex-col items-start lg:col-span-7" 
          > 
            
            {/* Portfolio Eyebrow */} 
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-surface/80 px-4 py-1.5 backdrop-blur-xs"> 
              <Sparkles className="h-3.5 w-3.5 text-gold" /> 
              <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-foreground"> 
                PERSONAL PORTFOLIO 
              </span> 
            </div> 
 
            {/* Main Heading */} 
            <h1 className="font-serif text-5xl font-normal tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl lg:leading-[0.98]"> 
              Crafting{" "} 
              <span className="font-serif italic text-gold font-light"> 
                Timeless 
              </span> 
              <br /> 
              <span className="whitespace-nowrap"> 
                Digital Experiences. 
              </span> 
            </h1> 
 
            {/* Subtitle Paragraph */} 
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-muted sm:text-lg lg:text-"> 
              I am an IT graduate combining UI/UX design, front-end development, data analytics, graphic design, and digital operations to build refined digital solutions . 
            </p> 
 
            {/* Luxury Action Buttons */} 
            <div className="mt-20 flex flex-wrap items-center gap-5 sm:mt-20"> 
              <Link 
                href="/#work" 
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-background shadow-md transition-all duration-300 hover:bg-gold hover:text-white active:scale-95" 
              > 
                <span>Explore Work</span> 
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> 
              </Link> 
 
              <Link 
                href="/#about" 
                className="inline-flex items-center justify-center rounded-full border border-gold/70 bg-transparent px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-foreground transition-all duration-300 hover:border-foreground hover:bg-surface active:scale-95" 
              > 
                Philosophy 
              </Link> 
            </div> 
          </motion.div> 
 
          {/* Right Portrait - No Arch / No Frame */}
<motion.div 
  initial={{ opacity: 0, scale: 0.95 }} 
  animate={{ opacity: 1, scale: 1 }} 
  transition={{ 
    duration: 0.8, 
    delay: 0.15, 
    ease: [0.16, 1, 0.3, 1], 
  }} 
  className="w-full lg:col-span-5"
> 
  <div className="relative mx-auto flex w-[160%] max-w-none items-center justify-center lg:-translate-x-28"> 
    
    {/* Soft Gold Glow Behind Portrait */} 
    <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" /> 

    {/* Background-Removed Portrait */} 
    <Image 
      src="/images/Lhycka_Picc.png"
      alt="Lhycka Loreinne Sulit - IT Graduate & Digital Professional" 
      width={900} 
      height={1100} 
      priority 
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 700px" 
      className="relative z-10 h-auto w-full max-w-2xl object-contain transition-transform duration-700 hover:scale-[1.02]" 
    /> 

  </div> 
</motion.div>
 
        </div> 
      </div> 
    </section> 
  ); 
}