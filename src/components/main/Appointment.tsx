"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamptest";

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
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Book Appointment
        </motion.h1>
      </LampContainer>
      <div className="relative flex justify-center items-center w-full h-[700px] min-w-[320px] -mt-72">
        <div
          className="calendly-inline-widget w-full h-full"
          data-url="https://calendly.com/tanishqgoyal"
        ></div>
      </div>
      ;
    </section>
  );
};

export default Appointment;
