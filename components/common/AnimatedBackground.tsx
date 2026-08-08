"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        -z-10
        overflow-hidden
      "
    >
      {/* Background */}

      <div className="absolute inset-0 bg-background" />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          dark:opacity-[0.06]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(148 163 184 / 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(148 163 184 / 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top Left Orb */}

      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, 60, -40, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/15
          blur-[140px]
        "
      />

      {/* Center Orb */}

      <motion.div
        animate={{
          x: [0, -60, 80, 0],
          y: [0, 50, -30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-500/10
          blur-[180px]
        "
      />

      {/* Bottom Right Orb */}

      <motion.div
        animate={{
          x: [0, -70, 40, 0],
          y: [0, -70, 30, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-44
          -right-44
          h-[550px]
          w-[550px]
          rounded-full
          bg-cyan-500/12
          blur-[160px]
        "
      />

      {/* Small Floating Orb */}

      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 25, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[20%]
          top-[65%]
          h-36
          w-36
          rounded-full
          bg-sky-400/15
          blur-[70px]
        "
      />

      {/* Noise Overlay */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.02]
          mix-blend-soft-light
        "
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Bottom Fade */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-72
          bg-gradient-to-t
          from-background
          to-transparent
        "
      />
    </div>
  );
}