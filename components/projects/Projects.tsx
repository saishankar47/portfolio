"use client";

import { motion } from "framer-motion";

import { projects } from "@/data/projects";

import ProjectCard from "./ProjectCard";
import ProjectsHeader from "./ProjectsHeader";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        py-32
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)]
        "
      />

      <div className="mx-auto max-w-7xl px-6">
        <ProjectsHeader />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="
            grid
            gap-10
            md:grid-cols-2
          "
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}