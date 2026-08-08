"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { ExperienceItem } from "@/data/experience";

interface Props {
  experience: ExperienceItem;
}

export default function TimelineItem({
  experience,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-16"
    >
      {/* Timeline Dot */}

      <div className="absolute left-0 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 shadow-lg shadow-blue-500/50">
        <div className="h-2.5 w-2.5 rounded-full bg-white" />
      </div>

      {/* Timeline Line */}

      <div className="absolute left-2 top-7 h-full w-px bg-white/10" />

      <div className="rounded-3xl border border-white/10 bg-background/60 p-8 backdrop-blur-xl">
        <h3 className="text-2xl font-bold">
          {experience.position}
        </h3>

        <p className="mt-2 text-blue-400">
          {experience.company}
        </p>

        <div className="mt-4 flex flex-wrap gap-5 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {experience.duration}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {experience.location}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-6 space-y-3">
          {experience.responsibilities.map((item) => (
            <li
              key={item}
              className="flex gap-3"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />

              <span className="text-muted-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}