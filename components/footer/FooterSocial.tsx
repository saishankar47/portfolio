"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

import { contact } from "@/data/contact";

const socials = [
  {
    icon: FaGithub,
    href: contact.github,
  },
  {
    icon: FaLinkedin,
    href: contact.linkedin,
  },
  {
    icon: FaEnvelope,
    href: `mailto:${contact.email}`,
  },
  {
    icon: FaFileDownload,
    href: contact.resume,
  },
];

export default function FooterSocial() {
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
        delay: 0.3,
      }}
    >
      <h3 className="mb-6 text-xl font-semibold">
        Connect
      </h3>

      <div className="flex gap-4">
        {socials.map((social, index) => {
          const Icon = social.icon;

          return (
            <motion.div
              key={index}
              whileHover={{
                y: -4,
                scale: 1.1,
              }}
            >
              <Link
                href={social.href}
                target="_blank"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-background/70
                  transition
                  hover:border-blue-500
                  hover:bg-blue-500
                  hover:text-white
                "
              >
                <Icon size={20} />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}