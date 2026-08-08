"use client";

import { motion } from "framer-motion";

export default function FooterBrand() {
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
        duration: 0.6,
      }}
      className="space-y-5"
    >
      <h2 className="text-3xl font-bold">
        Saishankar
        <span className="text-blue-500">.</span>
      </h2>

      <p className="max-w-md leading-8 text-muted-foreground">
        Software Engineer specializing in Java, Spring Boot,
        React, AWS, Microservices, and cloud-native
        applications. Passionate about building scalable,
        secure, and high-performance software.
      </p>

      <div
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-green-500/20
          bg-green-500/10
          px-4
          py-2
          text-sm
          text-green-500
        "
      >
        ● Open to Opportunities
      </div>
    </motion.div>
  );
}