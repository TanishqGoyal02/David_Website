"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamptest";
import ZodiacCarousel1 from "@/components/ui/ZodiacCarousel1";
import { RightZodiac, LeftZodiac } from "@/components/ui/zodiac_control";
import ZodiacWallpaper from "@/components/ui/Zodia_wallpaper";
const Appointment = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="appointment" className="mt-[-100px]">
      <LampContainer>
        <RightZodiac />
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-1
                 bg-clip-text text-center text-4xl font-medium tracking-tight
                 text-transparent md:text-7xl"
        >
          Consultation
        </motion.h1>
      </LampContainer>

      {/* Calendly container */}
      <div className="relative flex justify-center items-center w-full h-[700px] min-w-[320px] -mt-72">
        {/* parallel left/right wallpaper */}
        <div className="hidden md:block absolute inset-0">
          <ZodiacWallpaper rows={14} tile={48} />
        </div>

        {/* Calendly iframe stays on top */}
        <div
          className="relative z-10 calendly-inline-widget w-full h-full"
          data-url="https://calendly.com/tanishqgoyal"
        />
      </div>
    </section>
  );
};

export default Appointment;
