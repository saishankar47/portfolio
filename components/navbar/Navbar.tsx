"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="
sticky
top-0
z-40
border-b
border-gray-800
bg-black/70
backdrop-blur-lg
"
      >

        <div
          className="
mx-auto
flex
h-20
max-w-7xl
items-center
justify-between
px-6
"
        >

          <Link
            href="/"
            className="text-2xl font-bold"
          >

            Saishankar

          </Link>

          <nav className="hidden items-center gap-8 md:flex">

            <NavLinks />

          </nav>

          <div className="flex items-center gap-4">

            <ThemeSwitcher />

            <button

              className="md:hidden"

              onClick={() => setOpen(true)}

            >

              <Menu />

            </button>

          </div>

        </div>

      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}