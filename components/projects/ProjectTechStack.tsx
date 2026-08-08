"use client";

import { motion } from "framer-motion";

import {
  FaJava,
  FaReact,
  FaAws,
  FaDocker,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiPostgresql,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiApachekafka,
  SiMongodb,
  SiKubernetes,
  SiJenkins,
  SiGithub,
} from "react-icons/si";

interface ProjectTechStackProps {
  technologies: string[];
}

const techIcons: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Java: FaJava,
  React: FaReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Spring Boot": SiSpringboot,
  AWS: FaAws,
  Docker: FaDocker,
  Kafka: SiApachekafka,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Kubernetes: SiKubernetes,
  Jenkins: SiJenkins,
  Git: FaGitAlt,
  GitHub: SiGithub,
  "Node.js": FaNodeJs,
};

export default function ProjectTechStack({
  technologies,
}: ProjectTechStackProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech, index) => {
        const Icon = techIcons[tech];

        return (
          <motion.div
            key={tech}
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            whileHover={{
              scale: 1.08,
              y: -2,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.05,
              duration: 0.3,
            }}
            className="
              group
              flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-500/20
              bg-background/70
              px-4
              py-2
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-blue-400/40
              hover:bg-blue-500/10
              hover:shadow-lg
              hover:shadow-blue-500/20
            "
          >
            {Icon && (
              <Icon
                size={16}
                className="
                  text-blue-400
                  transition-transform
                  duration-300
                  group-hover:rotate-6
                  group-hover:scale-110
                "
              />
            )}

            <span
              className="
                text-sm
                font-medium
                text-foreground
              "
            >
              {tech}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}