"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { socialLinks } from "@/data/socialLinks";

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.6,
        duration: 0.5,
      }}
      className="flex flex-wrap items-center gap-4"
    >
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <motion.div
            key={social.id}
            whileHover={{
              y: -6,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Link
              href={social.href}
              target={
                social.href.startsWith("http")
                  ? "_blank"
                  : undefined
              }
              rel={
                social.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={social.ariaLabel}
              className="
                group
                relative
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-blue-500
                hover:bg-blue-500/10
              "
            >
              <Icon
                size={20}
                className="
                  transition-colors
                  duration-300
                  group-hover:text-blue-400
                "
              />

              <span
                className="
                  pointer-events-none
                  absolute
                  -top-10
                  left-1/2
                  -translate-x-1/2
                  whitespace-nowrap
                  rounded-md
                  bg-zinc-900
                  px-2
                  py-1
                  text-xs
                  text-white
                  opacity-0
                  transition-opacity
                  duration-200
                  group-hover:opacity-100
                "
              >
                {social.name}
              </span>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}