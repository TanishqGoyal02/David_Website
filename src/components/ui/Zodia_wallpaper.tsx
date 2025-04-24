// components/ZodiacWallpaper.tsx
import React from "react";
import { RightZodiac, LeftZodiac } from "@/components/ui/zodiac_control";

interface Props {
  rows?: number; // how many horizontal strips
  cols?: number; // icons per strip
  tile?: number; // icon square size in px (default 48 = 3 rem)
}

// ⚠️ only change shown lines
const ZodiacWallpaper: React.FC<Props> = ({
  rows = 14,
  /* ↓↓↓  1 column only  ↓↓↓ */
  cols = 1,
  /* ←—  make the tile big enough for the SVG */
  tile = 64,
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
      {Array.from({ length: rows }).map((_, row) => (
        <div
          key={row}
          className={`${row % 2 ? "justify-end" : "justify-start"} flex w-full`}
          style={{ height: tile }}
        >
          {/* just ONE icon per strip */}
          <div
            style={{ width: tile, height: tile }}
            className="flex items-center justify-center opacity-5 md:opacity-10"
          >
            {row % 2 ? <RightZodiac /> : <LeftZodiac />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ZodiacWallpaper;
