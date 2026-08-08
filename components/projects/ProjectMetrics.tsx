"use client";

import { motion } from "framer-motion";

export interface Metric {
  label: string;
  value: string;
}

interface ProjectMetricsProps {
  metrics: Metric[];
}

export default function ProjectMetrics({
  metrics,
}: ProjectMetricsProps) {
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
      className="grid grid-cols-3 gap-4"
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: index * 0.1,
          }}
          whileHover={{
            y: -4,
            scale: 1.03,
          }}
          className="
            group
            rounded-2xl
            border
            border-white/10
            bg-background/70
            px-4
            py-5
            text-center
            shadow-lg
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-blue-500/30
            hover:shadow-blue-500/20
          "
        >
          <h4
            className="
              text-2xl
              font-bold
              text-blue-400
              transition-colors
              duration-300
              group-hover:text-cyan-400
            "
          >
            {metric.value}
          </h4>

          <p
            className="
              mt-2
              text-xs
              font-medium
              uppercase
              tracking-wide
              text-muted-foreground
            "
          >
            {metric.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}