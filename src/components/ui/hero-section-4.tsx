"use client";

// components/ui/hero-section-4.tsx

import * as React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility
import { Button } from "@/components/ui/button"; // Assuming shadcn Button component

// Props interface for type safety
interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
  imageUrl: string;
  imageAlt?: string;
}

// Gentle fade-up for the supporting copy and buttons. The H1 is intentionally
// left out so it paints immediately (it is the LCP element and must not be
// gated behind hydration).
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title,
      subtitle,
      primaryButtonText,
      primaryButtonHref,
      secondaryButtonText,
      secondaryButtonHref,
      imageUrl,
      imageAlt = "Salon de coiffure MB 31 à Toulouse",
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative flex h-screen min-h-[700px] w-full items-center justify-center overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Background image — the LCP element. Optimized and preload-scanned via
            next/image with priority, instead of an un-discoverable CSS url(). */}
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 z-[1] bg-black/40" aria-hidden="true" />

        {/* Content Container */}
        <div className="relative z-10 flex max-w-4xl flex-col items-center justify-center px-5 text-center text-white">
          {/* Title renders immediately — no opacity/transform gate (LCP-safe). */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            {/* Animated Subtitle */}
            <motion.p
              className="mt-6 max-w-2xl text-lg leading-8 md:text-xl"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>

            {/* Animated Button Group */}
            <motion.div
              className="mt-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-x-6"
              variants={itemVariants}
            >
              <Button asChild size="lg" className="h-12 w-full text-base sm:h-11 sm:w-auto">
                <a href={primaryButtonHref}>{primaryButtonText}</a>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="h-12 w-full text-base sm:h-11 sm:w-auto"
              >
                <a href={secondaryButtonHref}>{secondaryButtonText}</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
