import type { LucideIcon } from "lucide-react";
import { Mail, FileText } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import type { IconType } from "react-icons";

import { profile } from "./profile";

export type SocialIcon = LucideIcon | IconType;

export interface SocialLink {
  id: number;
  name: string;
  href: string;
  icon: SocialIcon;
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "GitHub",
    href: profile.github,
    icon: FaGithub,
    ariaLabel: "GitHub Profile",
  },
  {
    id: 2,
    name: "LinkedIn",
    href: profile.linkedin,
    icon: FaLinkedin,
    ariaLabel: "LinkedIn Profile",
  },
  {
    id: 3,
    name: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
    ariaLabel: "Send Email",
  },
  {
    id: 4,
    name: "Resume",
    href: profile.resume,
    icon: FileText,
    ariaLabel: "Download Resume",
  },
];