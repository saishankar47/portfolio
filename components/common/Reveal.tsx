"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  once?: boolean;
}

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 40,
  once = true,
}: RevealProps) {
  const getHiddenState = () => {
    switch (direction) {
      case "left":
        return {
          opacity: 0,
          x: distance,
        };

      case "right":
        return {
          opacity: 0,
          x: -distance,
        };

      case "down":
        return {
          opacity: 0,
          y: -distance,
        };

      case "none":
        return {
          opacity: 0,
        };

      case "up":
      default:
        return {
          opacity: 0,
          y: distance,
        };
    }
  };

  const variants: Variants = {
    hidden: getHiddenState(),

    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}