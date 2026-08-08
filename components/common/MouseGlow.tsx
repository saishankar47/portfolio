"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const x = useSpring(mouseX, {
    stiffness: 180,
    damping: 25,
    mass: 0.5,
  });

  const y = useSpring(mouseY, {
    stiffness: 180,
    damping: 25,
    mass: 0.5,
  });

  const [visible, setVisible] = useState(false);
 const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === "undefined") {
        return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
});

useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (event: MediaQueryListEvent) => {
        setReducedMotion(event.matches);
    };

    media.addEventListener("change", handleChange);

    return () => {
        media.removeEventListener("change", handleChange);
    };
}, []);

  useEffect(() => {
    if (reducedMotion) return;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - 250);
      mouseY.set(event.clientY - 250);

      if (!visible) {
        setVisible(true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, visible, reducedMotion]);

  if (reducedMotion) {
    return null;
  }

  return (
    <motion.div
      style={{
        x,
        y,
        opacity: visible ? 1 : 0,
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-0
        h-[500px]
        w-[500px]
        rounded-full
        bg-[radial-gradient(circle,rgba(59,130,246,0.16)_0%,rgba(59,130,246,0.08)_35%,transparent_75%)]
        blur-3xl
        transition-opacity
        duration-500
        dark:bg-[radial-gradient(circle,rgba(59,130,246,0.22)_0%,rgba(59,130,246,0.10)_35%,transparent_75%)]
      "
    />
  );
}