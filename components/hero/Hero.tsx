"use client";

import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import BackgroundEffects from "./BackgroundEffects";
import Reveal from "@/components/common/Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        px-6
        pt-36
        pb-24
        lg:pb-32
    "
    >
      <Reveal>
      <BackgroundEffects />
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-16
          lg:min-h-[700px]
          lg:grid-cols-2
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <HeroContent />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="flex justify-center"
        >
          <HeroImage />
        </motion.div>
      </div>

      {/* <Stats /> */}
      </Reveal>
    </section>
  );
}