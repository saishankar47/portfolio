"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ProjectImageProps {
  image: string;
  title: string;
  featured: boolean;
}

export default function ProjectImage({
  image,
  title,
  featured,
}: ProjectImageProps) {
  return (
    <div className="relative aspect-video overflow-hidden">
      {/* Project Image */}

      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="relative h-full w-full"
      >
        <Image
          src={image}
          alt={title}
          fill
          priority={featured}
          className="object-cover"
          sizes="(max-width:768px) 100vw, 50vw"
        />
      </motion.div>

      {/* Gradient Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/20
          to-transparent
        "
      />

      {/* Blue Glow */}

      <div
        className="
          absolute
          -bottom-24
          left-1/2
          h-44
          w-44
          -translate-x-1/2
          rounded-full
          bg-blue-500/20
          blur-3xl
        "
      />

      {/* Featured Badge */}

      {featured && (
        <motion.div
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            absolute
            left-5
            top-5
            flex
            items-center
            gap-2
            rounded-full
            border
            border-blue-400/30
            bg-blue-600/90
            px-4
            py-2
            text-xs
            font-semibold
            text-white
            backdrop-blur-xl
          "
        >
          <Star size={14} />

          Featured
        </motion.div>
      )}
    </div>
  );
}