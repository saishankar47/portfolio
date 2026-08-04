import Link from "next/link";
import { navigation } from "@/constants/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-white"
        >
          Saishankar
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-gray-300 transition hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}