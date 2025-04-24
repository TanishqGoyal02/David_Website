"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils"; // or substitute your own classNames helper

const zodiacIcons = [
  { src: "aquarius-svgrepo-com.svg", alt: "Aquarius" },
  { src: "aries-svgrepo-com.svg", alt: "Aries" },
  { src: "cancer-svgrepo-com.svg", alt: "Cancer" },
  { src: "capricorn-svgrepo-com.svg", alt: "Capricorn" },
  { src: "gemini-svgrepo-com.svg", alt: "Gemini" },
  { src: "leo-svgrepo-com.svg", alt: "Leo" },
  { src: "libra-svgrepo-com.svg", alt: "Libra" },
  { src: "pisces-svgrepo-com.svg", alt: "Pisces" },
  { src: "sagittarius-svgrepo-com.svg", alt: "Sagittarius" },
  { src: "scorpio-svgrepo-com.svg", alt: "Scorpio" },
  { src: "taurus-svgrepo-com.svg", alt: "Taurus" },
  { src: "virgo-svgrepo-com.svg", alt: "Virgo" },
];

interface ZodiacCarouselProps {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

const ZodiacCarousel: React.FC<ZodiacCarouselProps> = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  // Use state to trigger the animation once icons have been duplicated
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      // 1. Duplicate icons to create a seamless scroll
      const childrenArray = Array.from(scrollerRef.current.children);
      childrenArray.forEach((child) => {
        const clone = child.cloneNode(true);
        scrollerRef.current?.appendChild(clone);
      });

      // 2. Set direction with a custom CSS property
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      // 3. Set speed with a custom CSS property
      switch (speed) {
        case "fast":
          containerRef.current.style.setProperty("--animation-duration", "20s");
          break;
        case "normal":
          containerRef.current.style.setProperty("--animation-duration", "60s");
          break;
        case "slow":
          containerRef.current.style.setProperty("--animation-duration", "75s");
          break;
      }

      // 4. Enable animation
      setStart(true);
    }
  }, [direction, speed]);

  return (
    <section className={cn("text-white pt-8 pb-4", className)}>
      <div
        ref={containerRef}
        className={cn(
          "overflow-hidden py-10",
          // Fade out edges horizontally
          "[mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]"
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max flex-nowrap gap-x-16",
            // Only apply the animation class after duplication is done
            start && "animate-scroll",
            // Optionally pause on hover
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {zodiacIcons.map((icon, index) => (
            <li key={index} className="shrink-0">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={64}
                height={64}
                className="invert"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ZodiacCarousel;
