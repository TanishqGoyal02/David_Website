import React from "react";
import Image from "next/image";

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

const ZodiacCarousel: React.FC = () => {
  const doubledIcons = [...zodiacIcons, ...zodiacIcons];

  return (
    <section className=" text-white pt-8 pb-4">
      <div className="overflow-hidden py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className="flex animate-slide-left-infinite w-max gap-x-16">
          {doubledIcons.map((icon, index) => (
            <Image
              key={index}
              src={icon.src}
              alt={icon.alt}
              width={64}
              height={64}
              className="invert" // Makes dark icons light on black background
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZodiacCarousel;
