import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiApachekafka,
  SiPostgresql,
  SiMongodb,
  SiKubernetes,
  SiJenkins,
  SiGithub,
} from "react-icons/si";

import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, level: 95 },
      { name: "Next.js", icon: SiNextdotjs, level: 90 },
      { name: "TypeScript", icon: SiTypescript, level: 90 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Java", icon: FaJava, level: 95 },
      { name: "Spring Boot", icon: SiSpringboot, level: 95 },
      { name: "Node.js", icon: FaNodeJs, level: 75 },
    ],
  },

  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: FaAws, level: 90 },
      { name: "Docker", icon: FaDocker, level: 85 },
      { name: "Kafka", icon: SiApachekafka, level: 85 },
      { name: "Kubernetes", icon: SiKubernetes, level: 70 },
      { name: "Jenkins", icon: SiJenkins, level: 80 },
    ],
  },

  {
    title: "Database & Tools",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, level: 90 },
      { name: "MongoDB", icon: SiMongodb, level: 75 },
      { name: "Git", icon: FaGitAlt, level: 95 },
      { name: "GitHub", icon: SiGithub, level: 95 },
    ],
  },
];