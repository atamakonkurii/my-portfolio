import Link from "next/link";
import type { FC } from "react";

export const StandardFooter: FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <Link href="https://forms.gle/Y9EcWWkQdEh2Vf1x5">
              <a target="_blank" className="text-gray-600 hover:text-gameAccent transition-colors duration-300">
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
          
          <div className="text-gray-400 text-sm">
            ©︎2025 KAZUKI OHTA
          </div>
        </div>
        
        {/* Game-style footer decoration */}
        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </footer>
  );
};
