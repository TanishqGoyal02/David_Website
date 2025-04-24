"use client";
import React from "react";
import { Spotlight } from "../ui/Spotlight";
import PortfolioCarousel from "../sub/workcontent";
import { FlipWords } from "../ui/flip-words";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const Work = () => {
  const words = ["destination", "zenith", "aspiration"];

  return (
    <section
      id="work"
      className="h-full w-full rounded-md flex md:justify-center antialiased relative text-slate-100"
    >
      <Spotlight fill="#DA70D6" className="-mt-[200px] md:-mt-[500px]" />
      <Spotlight className="-mt-[120px] md:-mt-[400px]" />
      <motion.div
        className="flex flex-col w-full items-center text-center justify-center px-12 z-10"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-row items-center justify-center font-bold md:text-6xl text-3xl mx-auto h-2"
        >
          <span> The Pilgrim’s Journey: All paths lead to the same</span>
          <FlipWords words={words} duration={4000} />
        </motion.div>

        <motion.p
          variants={slideInFromRight(0.5)}
          className="md:text-2xl mt-10 text-1xl"
        >
          Life as a pilgrimage from birth to death has many fleeting stations.
          Journeying through existence, while reflecting on our individual
          experiences, we realize a sense of uniqueness that defines us. Some
          seem predestined for a privileged, prestigious life, while others
          depend on the sweat of their labor and perseverance. The spectrum of
          suffering and pleasure pervades every condition and limitation of our
          existence. Witnessing such polar fates can be perplexing, and only
          with knowledge can we begin to understand. And through knowledge, the
          realization of our supreme identity is attained as eternal
          consciousness in motion. This consciousness is driven by its innate
          cosmic purpose, to know itself, and reunite with the infinite source:
          the primordial, undifferentiated divine consciousness of the universe,
          who we call
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            God.{" "}
          </span>
        </motion.p>
        <PortfolioCarousel />
      </motion.div>
    </section>
  );
};

export default Work;
