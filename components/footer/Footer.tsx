export default function Footer() {
  return (
    <footer className="border-t border-gray-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Saishankar V.
        </p>

        <p className="text-sm text-gray-500">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}