"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Base Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Aurora Glow 1 */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-40
          -top-40
          h-[550px]
          w-[550px]
          rounded-full
          bg-blue-500/20
          blur-[120px]
        "
      />

      {/* Aurora Glow 2 */}
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-220px]
          top-[25%]
          h-[650px]
          w-[650px]
          rounded-full
          bg-cyan-500/15
          blur-[140px]
        "
      />

      {/* Aurora Glow 3 */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -50, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-250px]
          left-[30%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-violet-500/20
          blur-[160px]
        "
      />

      {/* Grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Radial Vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.35)_70%,rgba(0,0,0,0.8)_100%)]
        "
      />

      {/* Center Highlight */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/5
          blur-[100px]
        "
      />
    </div>
  );
}