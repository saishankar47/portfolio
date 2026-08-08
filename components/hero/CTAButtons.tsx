"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Loader2,
} from "lucide-react";

interface CTAButtonsProps {
  resumeUrl?: string;
  contactHref?: string;
  resumeLabel?: string;
  contactLabel?: string;
  loading?: boolean;
  className?: string;
}

export default function CTAButtons({
  resumeUrl = "/resume/Saishankar_V_Resume.pdf",
  contactHref = "#contact",
  resumeLabel = "Download Resume",
  contactLabel = "Let's Connect",
  loading = false,
  className = "",
}: CTAButtonsProps) {
  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row ${className}`}
    >
      {/* Resume Button */}

      <motion.div
        whileHover={{
          y: -3,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.97,
        }}
      >
        <Link
          href={resumeUrl}
          target="_blank"
          download
          aria-label="Download Resume"
          className="
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            px-9
            py-5
            text-sm
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:shadow-blue-500/30
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        >
          {loading ? (
            <>
              <Loader2
                className="animate-spin"
                size={18}
              />
              Loading...
            </>
          ) : (
            <>
              <Download size={18} />

              {resumeLabel}
            </>
          )}
        </Link>
      </motion.div>

      {/* Contact Button */}

      <motion.div
        whileHover={{
          y: -3,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.97,
        }}
      >
        <Link
          href={contactHref}
          aria-label="Contact Me"
          className="
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-xl
            border
            border-blue-500/30
            bg-white/5
            px-7
            py-4
            text-sm
            font-semibold
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-blue-500
            hover:bg-blue-500/10
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        >
          {contactLabel}

          <motion.span
            animate={{
              x: [0, 4, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
          >
            <ArrowRight size={18} />
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
}