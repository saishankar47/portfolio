"use client";

import { motion } from "framer-motion";

import type { Project } from "@/data/projects";

import ProjectTechStack from "./ProjectTechStack";
import ProjectMetrics from "./ProjectMetrics";
import ProjectActions from "./ProjectActions";

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({
  project,
}: ProjectContentProps) {
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
      className="space-y-8 p-8"
    >
      {/* Title */}

      <div>
        <motion.h3
          whileHover={{
            x: 4,
          }}
          className="
            text-2xl
            font-bold
            transition-colors
            duration-300
            group-hover:text-blue-400
          "
        >
          {project.title}
        </motion.h3>

        <p
          className="
            mt-4
            leading-8
            text-muted-foreground
          "
        >
          {project.description}
        </p>
      </div>

      {/* Divider */}

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Technologies */}

      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
          Technologies
        </h4>

        <ProjectTechStack
          technologies={project.technologies}
        />
      </div>

      {/* Metrics */}

      {project.metrics.length > 0 && (
        <>
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Project Highlights
            </h4>

            <ProjectMetrics
              metrics={project.metrics}
            />
          </div>
        </>
      )}

      {/* Divider */}

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Actions */}

      <ProjectActions
        github={project.github}
        demo={project.demo}
      />
    </motion.div>
  );
}