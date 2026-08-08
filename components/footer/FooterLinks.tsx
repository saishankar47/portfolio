"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function FooterLinks() {
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
        delay: 0.2,
      }}
    >
      <h3 className="mb-6 text-xl font-semibold">
        Quick Links
      </h3>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="
                text-muted-foreground
                transition
                hover:text-blue-500
              "
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}