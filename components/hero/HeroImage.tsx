"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import {
  FaJava,
  FaReact,
  FaAws,
  FaDocker,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiPostgresql,
} from "react-icons/si";

import { profile } from "@/data/profile";

const techStack = [
  {
    name: "Java",
    icon: FaJava,
    className: "-left-8 top-12",
  },
  {
    name: "Spring",
    icon: SiSpringboot,
    className: "right-[-40px] top-10",
  },
  {
    name: "React",
    icon: FaReact,
    className: "-left-10 bottom-16",
  },
  {
    name: "AWS",
    icon: FaAws,
    className: "right-[-30px] bottom-12",
  },
  {
    name: "Docker",
    icon: FaDocker,
    className: "left-10 -bottom-8",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    className: "right-10 -top-8",
  },
];

export default function HeroImage() {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1200}
      transitionSpeed={1500}
      className="relative"
    >
      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.75, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          inset-0
          rounded-full
          bg-blue-500/20
          blur-3xl
        "
      />

      {/* Rotating Border */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="
          absolute
          inset-0
          rounded-full
          bg-gradient-to-r
          from-blue-500
          via-cyan-400
          to-purple-500
          p-[4px]
        "
      >
        <div className="h-full w-full rounded-full bg-background" />
      </motion.div>

      {/* Image */}

      <div
        className="
          relative
          h-[310px]
          w-[310px]

        lg:h-[340px]
        lg:w-[340px]
          overflow-hidden
          rounded-full
          border
          border-white/10
        "
      >
        <Image
          src={profile.profileImage}
          alt={profile.fullName}
          fill
          priority
          className="object-cover"
        />

        {/* Online */}

        <div
          className="
            absolute
            bottom-5
            right-5
            rounded-full
            bg-background/95
            px-3
            py-2
            backdrop-blur-xl
            shadow-lg
          "
        >
          <div className="flex items-center gap-2">
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
              }}
              className="h-3 w-3 rounded-full bg-green-500"
            />

            <span className="text-xs">
              Available
            </span>
          </div>
        </div>
      </div>

      {/* Experience */}

      <motion.div
        whileHover={{
          scale: 1.08,
        }}
        className="
          absolute
          -left-14
          top-1/2
          rounded-2xl
          border
          border-white/10
          bg-background/95
shadow-2xl
border-blue-500/20
          px-5
          py-3
          backdrop-blur-xl
        "
      >
        <h3 className="text-xl font-bold text-blue-400">
          {profile.experience}
        </h3>

        <p className="text-xs text-gray-500">
          Experience
        </p>
      </motion.div>

      {/* Certification */}

      <motion.div
        whileHover={{
          scale: 1.08,
        }}
        className="
          absolute
          -right-16
          top-1/2
          rounded-2xl
          border
          border-white/10
          bg-background/95
shadow-xl
border-blue-500/20
          px-5
          py-3
          backdrop-blur-xl
        "
      >
        <h3 className="text-sm font-semibold text-cyan-400">
          AWS
        </h3>

        <p className="text-xs text-gray-500">
          Certified
        </p>
      </motion.div>

      {/* Tech Chips */}

      {techStack.map((tech, index) => {
        const Icon = tech.icon;

        return (
          <motion.div
            key={tech.name}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              delay: index * 0.12,
              duration: 3,
              repeat: Infinity,
            }}
            className={`
              absolute
              ${tech.className}
            `}
          >
            <div
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-background/95
shadow-xl
border-blue-500/20
                px-3
                py-2
                backdrop-blur-xl
              "
            >
              <Icon size={18} />

              <span className="text-xs font-medium">
                {tech.name}
              </span>
            </div>
          </motion.div>
        );
      })}
    </Tilt>
  );
}