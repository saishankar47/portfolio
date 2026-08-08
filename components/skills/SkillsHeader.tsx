"use client";

import { motion } from "framer-motion";

export default function SkillsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <p className="mb-3 uppercase tracking-[0.3em] text-blue-400">
        Technical Expertise
      </p>

      <h2 className="text-5xl font-bold">
        Skills
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">
        Technologies and tools I use to build scalable,
        high-performance enterprise applications.
      </p>
    </motion.div>
  );
}