"use client";

import { motion } from "framer-motion";
import { Skill } from "@/data/skills";

interface Props {
  skill: Skill;
}

export default function SkillCard({ skill }: Props) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className="
        rounded-2xl
        border
        border-white/10
        bg-background/60
        p-5
        backdrop-blur-xl
        shadow-lg
      "
    >
      <div className="flex items-center gap-3">
        <Icon
          size={26}
          className="text-blue-400"
        />

        <div className="flex-1">
          <div className="flex justify-between">
            <h3 className="font-semibold">
              {skill.name}
            </h3>

            <span className="text-sm text-muted-foreground">
              {skill.level}%
            </span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: `${skill.level}%`,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
              }}
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}