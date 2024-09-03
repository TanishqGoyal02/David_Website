"use client";
import React from "react";
import { Spotlight } from "../ui/Spotlight";
import PortfolioCarousel from "../sub/workcontent";
import { FlipWords } from "../ui/flip-words";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const Work = () => {
  const words = ["Purpose", "Passion", "Dreams", "Goals"];

  return (
    <section
      id="work"
      className="h-full w-full rounded-md flex md:justify-center antialiased relative text-slate-100"
    >
      {/* Adjust the position with className */}
      <Spotlight fill="#DA70D6" />
      <Spotlight />
      <motion.div
        className="flex flex-col w-full items-center text-center justify-center px-12 z-10"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-row items-center justify-center font-bold md:text-6xl text-3xl mx-auto h-2"
        >
          <span> My Life&#39;s</span>
          <FlipWords words={words} duration={4000} />
        </motion.div>

        <motion.p
          variants={slideInFromRight(0.5)}
          className="md:text-2xl mt-10 text-1xl"
        >
          I am a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <PortfolioCarousel />
      </motion.div>
    </section>
  );
};

export default Work;
