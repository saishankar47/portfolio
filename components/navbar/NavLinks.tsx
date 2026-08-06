"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants/navigation";
import clsx from "clsx";

interface Props {
  mobile?: boolean;
  onNavigate?: () => void;
}

export default function NavLinks({
  mobile = false,
  onNavigate,
}: Props) {
  const pathname = usePathname();

  return (
    <>
      {navigation.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.title}
            href={item.href}
            onClick={onNavigate}
            className={clsx(
              "transition-all duration-300",
              mobile
                ? "block rounded-lg px-4 py-3 text-lg"
                : "text-sm font-medium",
              active
                ? "text-blue-500"
                : "text-gray-300 hover:text-white"
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </>
  );
}