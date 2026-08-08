"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Props {
  title: string;
  description: string;
  highlights: string[];
}

export default function AboutContent({
  title,
  description,
  highlights,
}: Props) {
  return (
    <div>
      <motion.h3
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
        className="text-3xl font-bold"
      >
        {title}
      </motion.h3>

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        viewport={{
          once: true,
        }}
        className="mt-6 max-w-xl leading-8 text-muted-foreground"
      >
        {description}
      </motion.p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {highlights.map((item) => (
          <motion.div
            key={item}
            whileHover={{
              x: 5,
            }}
            className="flex items-center gap-3"
          >
            <CheckCircle2
              size={20}
              className="text-blue-500"
            />

            <span>{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}