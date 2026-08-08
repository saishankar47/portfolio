"use client";

import { motion } from "framer-motion";

interface AboutHeaderProps {
  title: string;
  subtitle: string;
}

export default function AboutHeader({
  title,
  subtitle,
}: AboutHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-16 max-w-3xl text-center"
    >
      <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-blue-400">
        {subtitle}
      </p>

      <h2 className="text-4xl font-bold md:text-5xl">
        {title}
      </h2>
    </motion.div>
  );
}