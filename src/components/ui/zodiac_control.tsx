"use client"; // If using Next 13+ with app router and client components

import React from "react";
import ZodiacCarousel from "./ZodiacCarousel";

/** A right-scrolling Zodiac row */
export function RightZodiac() {
  return (
    <main>
      <ZodiacCarousel
        direction="right"
        speed="slow"
        pauseOnHover={true}
        className="my-10"
      />
    </main>
  );
}

/** A left-scrolling Zodiac row */
export function LeftZodiac() {
  return (
    <main>
      <ZodiacCarousel
        direction="left"
        speed="slow"
        pauseOnHover={true}
        className="my-10"
      />
    </main>
  );
}
