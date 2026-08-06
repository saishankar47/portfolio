"use client";

import { X } from "lucide-react";
import NavLinks from "./NavLinks";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md md:hidden">
      <div className="flex justify-center py-6">
        <ThemeSwitcher />
      </div>
      <div className="flex justify-end p-6">
        <button
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
      </div>

      <nav className="mt-12 flex flex-col gap-6 px-8">
        <NavLinks mobile onNavigate={onClose} />
      </nav>
    </div>
  );
}