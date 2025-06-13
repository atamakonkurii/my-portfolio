import Link from "next/link";
import type { FC } from "react";
import { useState } from "react";

export const StandardHeader: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 border-b border-gray-100 backdrop-blur-sm">
      <div className="px-4 mx-auto max-w-6xl">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-xl font-bold hover:text-gameAccent transition-colors duration-300"
          >
            👨‍💻🎥♟️🇯🇵🇹🇼👶👩
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="/#about"
              className="text-gray-600 hover:text-gameAccent transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/news"
              className="text-gray-600 hover:text-gameAccent transition-colors duration-300"
            >
              News
            </Link>
            <Link
              href="https://forms.gle/Y9EcWWkQdEh2Vf1x5"
              target="_blank"
              className="!py-2 !px-6 text-sm game-button"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col px-2 pt-2 pb-3 space-y-3 bg-white/95 border-t border-gray-100 backdrop-blur-sm">
              <Link
                href="/#about"
                className="block py-3 px-4 w-full text-center text-gray-600 hover:text-gameAccent hover:bg-gray-50 rounded-md transition-colors duration-300"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/news"
                className="block py-3 px-4 w-full text-center text-gray-600 hover:text-gameAccent hover:bg-gray-50 rounded-md transition-colors duration-300"
                onClick={closeMenu}
              >
                News
              </Link>
              <Link
                href="https://forms.gle/Y9EcWWkQdEh2Vf1x5"
                target="_blank"
                className="block py-3 px-4 w-full font-semibold text-center text-gameAccent hover:bg-gray-50 rounded-md transition-colors duration-300"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
