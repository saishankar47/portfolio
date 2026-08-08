"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";


import { contact } from "@/data/contact";

const socialLinks = [
  {
    name: "GitHub",
    href: contact.github,
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: contact.linkedin,
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: `mailto:${contact.email}`,
    icon: FaEnvelope,
  },
];

export default function SocialButtons() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">
        Connect With Me
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;

          return (
            <motion.div
              key={social.name}
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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-background/70
                  p-5
                  shadow-lg
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-blue-500/40
                  hover:bg-blue-500/10
                  hover:shadow-blue-500/20
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
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
                  <Icon size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">
                    {social.name}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    Visit Profile
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}