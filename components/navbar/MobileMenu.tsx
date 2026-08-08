"use client";

import { useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  type Variants,
} from "framer-motion";
import { X } from "lucide-react";

import NavLinks from "./NavLinks";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const backdropVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const drawerVariants: Variants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
    },
  },
};

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const previousFocusedElement =
    useRef<HTMLElement | null>(null);

  /**
   * Focus management
   */
  useEffect(() => {
    if (open) {
      previousFocusedElement.current =
        document.activeElement as HTMLElement;

      requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });
    } else {
      previousFocusedElement.current?.focus();
    }
  }, [open]);

  /**
   * Escape key
   */
  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () =>
      document.removeEventListener(
        "keydown",
        handleEscape
      );
  }, [open, onClose]);

  /**
   * Click outside
   */
  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (
      event: MouseEvent
    ) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(
          event.target as Node
        )
      ) {
        onClose();
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
  }, [open, onClose]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* Backdrop */}

          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              fixed
              inset-0
              z-40
              bg-black/70
              backdrop-blur-sm
              md:hidden
            "
          />

          {/* Drawer */}

          <motion.aside
            ref={panelRef}
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="
              fixed
              right-0
              top-0
              z-50
              flex
              h-screen
              w-80
              max-w-[90vw]
              flex-col
              border-l
              border-white/10
              bg-zinc-950/95
              backdrop-blur-2xl
              shadow-2xl
              md:hidden
            "
          >
            {/* Header */}

            <motion.div
              variants={itemVariants}
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                p-6
              "
            >
              <h2 className="text-lg font-semibold">
                Navigation
              </h2>

              <motion.button
                ref={closeButtonRef}
                whileHover={{
                  rotate: 90,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                onClick={onClose}
                aria-label="Close menu"
                className="
                  rounded-lg
                  p-2
                  transition-colors
                  hover:bg-white/10
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              >
                <X size={22} />
              </motion.button>
            </motion.div>

            {/* Theme */}

            <motion.div
              variants={itemVariants}
              className="
                flex
                justify-center
                py-8
              "
            >
              <ThemeSwitcher />
            </motion.div>

            {/* Navigation */}

            <motion.nav
              variants={itemVariants}
              className="
                flex
                flex-1
                flex-col
                gap-3
                px-6
              "
            >
              <NavLinks
                mobile
                onNavigate={onClose}
              />
            </motion.nav>

            {/* Footer */}

            <motion.footer
              variants={itemVariants}
              className="
                border-t
                border-white/10
                p-6
              "
            >
              <p className="text-center text-xs text-zinc-500">
                Built with ❤️ using Next.js
              </p>
            </motion.footer>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}