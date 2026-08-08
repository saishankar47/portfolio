"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import AnimatedBadge from "./AnimatedBadge";
import CTAButtons from "./CTAButtons";
import SocialLinks from "./SocialLinks";

import { profile } from "@/data/profile";

export default function HeroContent() {
  const typingSequence = profile.roles.flatMap((role) => [
    role,
    2000,
  ]);

  return (
    <div className="max-w-2xl">
      <AnimatedBadge text={profile.availability} />

      {/* Greeting */}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 text-lg font-medium text-blue-400"
      >
        Hello, I&apos;m
      </motion.p>

      {/* Name */}

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="
          mt-2
          text-5xl
          font-extrabold
          leading-tight
          sm:text-6xl
          lg:text-7xl
        "
      >
        {profile.firstName}{" "}
        <span
          className="
            bg-gradient-to-r
            from-sky-500
            via-cyan-400
            to-violet-500
            bg-clip-text
            text-transparent
          "
        >
          {profile.lastName}
        </span>
      </motion.h1>

      {/* Title */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-xl font-medium text-muted-foreground"
      >
        {profile.title}
      </motion.p>

      {/* Type Animation */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 h-10"
      >
        <TypeAnimation
          sequence={typingSequence}
          wrapper="span"
          speed={45}
          repeat={Infinity}
          className="
            text-2xl
            font-semibold
            text-blue-400
          "
        />
      </motion.div>

      {/* Summary */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="
          mt-8
          max-w-lg
          text-lg
          leading-9
          text-gray-400
        "
      >
        {profile.summary}
      </motion.p>

      {/* CTA Buttons */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
        className="mt-10"
      >
        <CTAButtons
          resumeUrl={profile.resume}
          contactHref="#contact"
          resumeLabel="Download Resume"
          contactLabel="Let's Connect"
        />
      </motion.div>

      {/* Social Links */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-10"
      >
        <SocialLinks />
      </motion.div>

      {/* Location */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 flex items-center gap-2 text-sm text-gray-500"
      >
        <span>📍</span>
        <span>{profile.location}</span>
      </motion.div>
    </div>
  );
}