import React from "react";

const zodiacIcons = [
  {
    src: "https://img.icons8.com/ios-filled/100/ffffff/aries.png",
    alt: "Aries",
  },
  {
    src: "https://img.icons8.com/ios-filled/100/ffffff/taurus.png",
    alt: "Taurus",
  },
  {
    src: "https://img.icons8.com/ios-filled/100/ffffff/gemini.png",
    alt: "Gemini",
  },
  {
    src: "https://img.icons8.com/ios-filled/100/ffffff/cancer.png",
    alt: "Cancer",
  },
  { src: "https://img.icons8.com/ios-filled/100/ffffff/leo.png", alt: "Leo" },
  {
    src: "https://img.icons8.com/ios-filled/100/ffffff/virgo.png",
    alt: "Virgo",
  },
  {
    src: "https://img.icons8.com/ios-filled/100/ffffff/libra.png",
    alt: "Libra",
  },
  {
    src: "https://img.icons8.com/ios-filled/100/ffffff/scorpio.png",
    alt: "Scorpio",
  },
  {
    src: "https://img.icons8.com/ios-filled/100/ffffff/sagittarius.png",
    alt: "Sagittarius",
  },
  {
    src: "https://img.icons8.com/ios-filled/100/ffffff/capricorn.png",
    alt: "Capricorn",
  },
  {
    src: "https://img.icons8.com/ios-filled/100/ffffff/aquarius.png",
    alt: "Aquarius",
  },
  {
    src: "https://img.icons8.com/ios-filled/100/ffffff/pisces.png",
    alt: "Pisces",
  },
];

const ZodiacCarousel: React.FC = () => {
  const doubledIcons = [...zodiacIcons, ...zodiacIcons];

  return (
    <section className=" text-white pt-8 pb-4">
      <div className="overflow-hidden py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className="flex animate-slide-left-infinite w-max gap-x-16">
          {doubledIcons.map((icon, index) => (
            <img key={index} className="h-16" src={icon.src} alt={icon.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZodiacCarousel;
