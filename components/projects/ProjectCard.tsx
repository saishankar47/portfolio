"use client";

import { motion } from "framer-motion";

import type { Project } from "@/data/projects";

import ProjectImage from "./ProjectImage";
import ProjectContent from "./ProjectContent";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.4,
      }}
      className="group relative"
    >
      {/* Animated Gradient Border */}

      <div
        className="
          absolute
          -inset-[1px]
          rounded-[30px]
          bg-gradient-to-br
          from-blue-500/40
          via-cyan-400/20
          to-violet-500/40
          opacity-0
          blur-xl
          transition-all
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Card */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-white/10
          bg-background/70
          shadow-xl
          backdrop-blur-2xl
          transition-all
          duration-500
          group-hover:border-blue-500/30
          group-hover:shadow-2xl
          group-hover:shadow-blue-500/10
        "
      >
        <ProjectImage
          image={project.image}
          title={project.title}
          featured={project.featured}
        />

        <ProjectContent
          project={project}
        />
      </div>
    </motion.article>
  );
}