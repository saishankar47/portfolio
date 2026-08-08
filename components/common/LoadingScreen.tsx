"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("portfolio-loaded");

    if (hasVisited) {
      return;
    }

    setLoading(true);

    let value = 0;

    const timer = setInterval(() => {
      value += Math.random() * 18;

      if (value >= 100) {
        value = 100;
        clearInterval(timer);

        setTimeout(() => {
          sessionStorage.setItem("portfolio-loaded", "true");
          setLoading(false);
        }, 500);
      }

      setProgress(value);
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.7,
            },
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-background
          "
        >
          {/* Background Glow */}

          <div
            className="
              absolute
              h-96
              w-96
              rounded-full
              bg-blue-500/20
              blur-3xl
            "
          />

          <div className="relative z-10 flex w-full max-w-md flex-col items-center px-8">
            {/* Logo */}

            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                mb-8
                flex
                h-28
                w-28
                items-center
                justify-center
                rounded-full
                border
                border-blue-500/30
                bg-gradient-to-br
                from-blue-600
                via-cyan-500
                to-violet-600
                text-5xl
                font-bold
                text-white
                shadow-2xl
                shadow-blue-500/30
              "
            >
              SV
            </motion.div>

            {/* Name */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="text-3xl font-bold"
            >
              Saishankar Vanam
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
              }}
              className="mt-3 text-muted-foreground"
            >
              Loading Portfolio...
            </motion.p>

            {/* Progress */}

            <div
              className="
                mt-10
                h-2
                w-full
                overflow-hidden
                rounded-full
                bg-white/10
              "
            >
              <motion.div
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  ease: "easeOut",
                }}
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  via-cyan-500
                  to-violet-600
                "
              />
            </div>

            <motion.p
              key={Math.round(progress)}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="
                mt-4
                text-sm
                font-medium
                text-blue-400
              "
            >
              {Math.round(progress)}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}