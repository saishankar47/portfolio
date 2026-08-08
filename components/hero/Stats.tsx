"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    value: 3,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 20,
    suffix: "+",
    label: "Projects",
  },
  {
    value: 5,
    suffix: "+",
    label: "Technologies",
  },
  {
    value: 1,
    suffix: "",
    label: "AWS Certification",
  },
];

export default function Stats() {
  return (
    <section className="relative z-20 -mt-8 lg:-mt-12">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            rounded-3xl
            border
            border-white/10
            bg-background/80
            shadow-2xl
            backdrop-blur-2xl
            overflow-hidden
          "
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  flex
                  flex-col
                  items-center
                  justify-center
                  px-6
                  py-10
                  text-center
                  ${
                    index !== stats.length - 1
                      ? "border-b border-white/10 md:border-b-0 md:border-r"
                      : ""
                  }
                `}
              >
                <h2 className="text-4xl font-bold text-blue-400">
                  <CountUp
                    end={stat.value}
                    duration={2}
                  />
                  {stat.suffix}
                </h2>

                <p className="mt-3 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}