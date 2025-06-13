import Link from "next/link";
import type { FC } from "react";

export const StandardFooter: FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="py-12 px-4 mx-auto max-w-6xl">
        <div className="flex flex-col justify-between items-center space-y-4 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-8">
            <Link href="https://forms.gle/Y9EcWWkQdEh2Vf1x5">
              <a
                target="_blank"
                className="text-gray-600 hover:text-gameAccent transition-colors duration-300"
              >
                お問い合わせ
              </a>
            </Link>
            <Link href="/term">
              <a className="text-gray-600 hover:text-gameAccent transition-colors duration-300">
                利用規約
              </a>
            </Link>
            <Link href="/privacy_policy">
              <a className="text-gray-600 hover:text-gameAccent transition-colors duration-300">
                プライバシーポリシー
              </a>
            </Link>
          </div>

          <div className="text-sm text-gray-400">©︎2025 KAZUKI OHTA</div>
        </div>

        {/* Game-style footer decoration */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
          <div
            className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </footer>
  );
};
