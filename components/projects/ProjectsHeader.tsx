"use client";

import { motion } from "framer-motion";

export default function ProjectsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <p className="mb-3 uppercase tracking-[0.3em] text-blue-400">
        Portfolio
      </p>

      <h2 className="text-5xl font-bold">
        Featured Projects
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">
        A selection of projects demonstrating my experience
        in backend engineering, cloud technologies,
        full-stack development, and scalable systems.
      </p>
    </motion.div>
  );
}