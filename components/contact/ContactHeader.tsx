"use client";

import { motion } from "framer-motion";

export default function ContactHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="mb-20 text-center"
    >
      <p className="mb-3 uppercase tracking-[0.3em] text-blue-400">
        Contact
      </p>

      <h2 className="text-5xl font-bold">
        Let&apos;s Work Together
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">
        I&apos;m always interested in discussing software engineering,
        cloud technologies, full-stack development,
        and exciting new opportunities.
      </p>
    </motion.div>
  );
}