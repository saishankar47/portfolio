"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { navigation } from "@/constants/navigation";

interface NavLinksProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

export default function NavLinks({
  mobile = false,
  onNavigate,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {navigation.map((item) => {
        const active =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <motion.div
            key={item.href}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="relative"
          >
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={clsx(
                "relative rounded-md transition-colors duration-300 outline-none",
                "focus-visible:ring-2 focus-visible:ring-blue-500",
                mobile
                  ? "block px-5 py-4 text-lg font-medium"
                  : "px-1 py-2 text-sm font-medium",
                active
                  ? "text-blue-500"
                  : "text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white"
              )}
            >
              {item.title}

              {active && (
                <motion.span
                  layoutId="navbar-active-indicator"
                  className="
                    absolute
                    -bottom-1
                    left-0
                    h-[3px]
                    w-full
                    rounded-full
                    bg-blue-500
                  "
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 35,
                  }}
                />
              )}
            </Link>
          </motion.div>
        );
      })}
    </>
  );
}