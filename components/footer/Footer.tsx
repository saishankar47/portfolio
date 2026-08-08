"use client";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  return (
    <footer
      className="
        relative
        border-t
        border-white/10
        bg-background/60
        backdrop-blur-xl
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-3">
          <FooterBrand />

          <FooterLinks />

          <FooterSocial />
        </div>

        <div
          className="
            mt-16
            border-t
            border-white/10
            pt-8
            text-center
            text-sm
            text-muted-foreground
          "
        >
          © {new Date().getFullYear()} Saishankar Vanam. All
          rights reserved.

          <p className="mt-3">
            Built with Next.js 15 • TypeScript • Tailwind CSS •
            Framer Motion
          </p>
        </div>
      </div>

      <ScrollToTop />
    </footer>
  );
}