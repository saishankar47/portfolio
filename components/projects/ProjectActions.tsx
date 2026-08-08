"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectActionsProps {
  github: string;
  demo: string;
}

export default function ProjectActions({
  github,
  demo,
}: ProjectActionsProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className="flex flex-col gap-4 sm:flex-row"
    >
      {/* GitHub Button */}

      <motion.div
        whileHover={{
          y: -3,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="flex-1"
      >
        <Link
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View project source code on GitHub"
          className="
            group
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-xl
            border
            border-white/10
            bg-background/70
            px-5
            py-3
            font-medium
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-blue-500/30
            hover:bg-blue-500/10
            hover:shadow-lg
            hover:shadow-blue-500/20
          "
        >
          <FaGithub
            size={20}
            className="
              transition-transform
              duration-300
              group-hover:rotate-6
            "
          />

          <span>GitHub</span>
        </Link>
      </motion.div>

      {/* Live Demo Button */}

      <motion.div
        whileHover={{
          y: -3,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="flex-1"
      >
        <Link
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open live project demo"
          className="
            group
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-blue-700
            px-5
            py-3
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:shadow-blue-500/40
          "
        >
          <span>Live Demo</span>

          <ArrowUpRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
            "
          />
        </Link>
      </motion.div>
    </motion.div>
  );
}