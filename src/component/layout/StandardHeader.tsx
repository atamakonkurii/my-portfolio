import Link from "next/link";
import type { FC } from "react";

export const StandardHeader: FC = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 border-b border-gray-100 backdrop-blur-sm">
      <div className="px-4 mx-auto max-w-6xl">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <a className="text-xl font-bold hover:text-gameAccent transition-colors duration-300">
              KAZUKI OHTA
            </a>
          </Link>

          <nav className="hidden items-center space-x-8 md:flex">
            <Link href="/#about">
              <a className="text-gray-600 hover:text-gameAccent transition-colors duration-300">
                About
              </a>
            </Link>
            <Link href="/news">
              <a className="text-gray-600 hover:text-gameAccent transition-colors duration-300">
                News
              </a>
            </Link>
            <Link href="https://forms.gle/Y9EcWWkQdEh2Vf1x5">
              <a target="_blank" className="!py-2 !px-6 text-sm game-button">
                Contact
              </a>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="p-2 text-gray-600 hover:text-gameAccent md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
