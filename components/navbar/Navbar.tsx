"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="
          fixed
          inset-x-0
          top-0
          z-50
          flex
          justify-center
          px-4
          pt-4
        "
      >
        <motion.div
          animate={{
            width: scrolled ? "92%" : "96%",
            paddingTop: scrolled ? 12 : 18,
            paddingBottom: scrolled ? 12 : 18,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            max-w-6xl
            rounded-2xl
            border
            border-white/10
            bg-white/10
            shadow-xl
            backdrop-blur-xl
            dark:bg-black/30
            dark:border-white/10
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              px-6
            "
          >
            {/* Logo */}

            <Link
              href="/"
              className="
                text-2xl
                font-bold
                tracking-wide
                transition
                hover:text-blue-500
              "
            >
              Saishankar
            </Link>

            {/* Desktop Navigation */}

            <nav
              className="
                hidden
                items-center
                gap-8
                md:flex
              "
            >
              <NavLinks />
            </nav>

            {/* Right Section */}

            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <ThemeSwitcher />

              <button
                aria-label="Open navigation menu"
                onClick={() => setMobileOpen(true)}
                className="
                  rounded-lg
                  p-2
                  transition
                  hover:bg-white/10
                  md:hidden
                "
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-28" />
    </>
  );
}