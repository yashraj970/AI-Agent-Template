"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/hooks/use-mobile";

interface LogoCloudCarouselProps {
  logos: {
    name: string;
    url: string;
    darkUrl?: string;
  }[];
}

interface MarqueeRowProps {
  direction: "left" | "right";
  speed: number;
  logos: any[];
  resolvedTheme?: string;
  isMobile: boolean;
}

export function LogoCloud() {
  const logos = [
    {
      name: "Company 1",
      url: "https://images.pexels.com/photos/954559/pexels-photo-954559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Company 2",
      url: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Company 3",
      url: "https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Company 4",
      url: "https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Company 5",
      url: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return <LogoCloudCarousel logos={logos} />;
}

function LogoCloudCarousel({ logos }: LogoCloudCarouselProps) {
  const { resolvedTheme } = useTheme();
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div className="w-full py-20 overflow-hidden bg-gradient-to-b from-background to-background/80">
      <div className="container" ref={containerRef}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

          <MarqueeRow
            direction="left"
            speed={40}
            logos={logos}
            resolvedTheme={resolvedTheme}
            isMobile={isMobile}
          />

          <MarqueeRow
            direction="right"
            speed={40}
            logos={logos}
            resolvedTheme={resolvedTheme}
            isMobile={isMobile}
            className="mt-8"
          />
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  direction,
  speed,
  logos,
  isMobile,
  className = "",
}: MarqueeRowProps & { className?: string }) {
  const duplicatedLogos = [...logos, ...logos];
  const translateValue = isMobile ? "100%" : "50%";

  return (
    <motion.div
      className={`flex space-x-8 ${className}`}
      initial={{ x: direction === "left" ? 0 : `-${translateValue}` }}
      animate={{ x: direction === "left" ? `-${translateValue}` : 0 }}
      transition={{
        repeat: Infinity,
        duration: speed,
        ease: "linear",
      }}
    >
      {duplicatedLogos.map((logo, index) => (
        <motion.div
          key={`${direction}-${index}`}
          className="flex-shrink-0 flex items-center justify-center h-16 w-32 rounded-xl bg-background/50 backdrop-blur-sm border"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
            borderColor: "rgba(var(--primary), 0.3)",
          }}
        >
          <img
            src={logo.url}
            alt={logo.name}
            className="max-h-12 max-w-full object-contain rounded-sm"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}