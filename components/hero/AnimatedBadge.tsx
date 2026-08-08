"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { profile } from "@/data/profile";

<AnimatedBadge text={profile.availability} />

interface AnimatedBadgeProps {
  text?: string;
}

export default function AnimatedBadge({
  text = "Open to Opportunities",
}: AnimatedBadgeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.03,
      }}
      className="
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-blue-500/30
        bg-blue-500/10
        px-5
        py-2
        backdrop-blur-md
      "
    >
      <motion.span
        animate={{
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          h-3
          w-3
          rounded-full
          bg-emerald-500
        "
      />

      <Briefcase
        size={18}
        className="text-blue-400"
      />

      <span
        className="
          text-sm
          font-medium
          tracking-wide
          text-blue-100
        "
      >
        {text}
      </span>
    </motion.div>
  );
}