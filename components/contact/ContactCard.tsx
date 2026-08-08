"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  external?: boolean;
}

export default function ContactCard({
  icon,
  title,
  value,
  href,
  external = false,
}: ContactCardProps) {
  const content = (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-background/70
        p-6
        shadow-lg
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-blue-500/30
        hover:shadow-blue-500/20
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-blue-500/5
          via-cyan-500/5
          to-violet-500/5
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      <div className="relative flex items-start gap-5">
        {/* Icon */}

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-xl
            bg-blue-500/10
            text-blue-400
            transition-all
            duration-300
            group-hover:bg-blue-500
            group-hover:text-white
          "
        >
          {icon}
        </div>

        {/* Content */}

        <div className="flex-1">
          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-wide
              text-muted-foreground
            "
          >
            {title}
          </p>

          <h3
            className="
              mt-2
              break-all
              text-lg
              font-semibold
              transition-colors
              duration-300
              group-hover:text-blue-400
            "
          >
            {value}
          </h3>
        </div>

        {/* External Link */}

        {href && (
          <ArrowUpRight
            size={18}
            className="
              text-muted-foreground
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
              group-hover:text-blue-400
            "
          />
        )}
      </div>
    </motion.div>
  );

  if (!href) {
    return content;
  }

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={title}
      className="block"
    >
      {content}
    </Link>
  );
}