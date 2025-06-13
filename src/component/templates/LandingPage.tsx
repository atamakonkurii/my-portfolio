import type { FC } from "react";
import { FloatingShareButton } from "src/component/organisms/FloatingShareButton";
import { LpNews } from "src/component/organisms/LandingPage";
import { AboutAuthor } from "src/component/organisms/LandingPage/AboutAuthor";
import { Portfolio } from "src/component/organisms/LandingPage/Portfolio";
import type { LandingPageNews } from "src/type/types";
import { SimpleLinkButton } from "src/component/atoms/Button/SimpleLinkButton";

type Props = LandingPageNews;

export const LandingPage: FC<Props> = (props) => {
  const landingPageNews = props;
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Chapter 1 */}
      <section className="game-section relative bg-gradient-to-b from-white to-gameGray">
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">🎮</div>
        <div className="absolute bottom-20 right-10 text-6xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>🎯</div>
        
        <h1 className="game-title">
          <span className="block text-2xl md:text-3xl text-gray-600 mb-4">Level 1</span>
          ようこそ、冒険者よ！
        </h1>
        <p className="game-subtitle">
          ここは KAZUKI OHTA の冒険の記録
        </p>
        
        <div className="mt-8 space-y-4">
          <p className="text-xl text-gray-600 animate-pulse">
            ▼ スクロールして冒険を始める
          </p>
        </div>
      </section>

      {/* News Section - Chapter 2 */}
      <section id="news" className="game-section bg-white">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="game-title">
            <span className="block text-2xl md:text-3xl text-gray-600 mb-4">Level 2</span>
            最新のクエスト情報
          </h2>
          <div className="game-card max-w-2xl mx-auto">
            <LpNews {...landingPageNews} />
          </div>
        </div>
      </section>

      {/* About Section - Chapter 3 */}
      <section id="about" className="game-section bg-gameGray">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="game-title">
            <span className="block text-2xl md:text-3xl text-gray-600 mb-4">Level 3</span>
            冒険者のプロフィール
          </h2>
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-8xl opacity-10 animate-bounceSlow">👤</div>
            <AboutAuthor />
          </div>
        </div>
      </section>

      {/* Works Section - Chapter 4 */}
      <section id="works" className="game-section bg-white">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="game-title">
            <span className="block text-2xl md:text-3xl text-gray-600 mb-4">Level 4</span>
            これまでの戦利品
          </h2>
          
          <div className="relative">
            <div className="absolute -bottom-10 -right-10 text-8xl opacity-10 animate-pulseSlow">🏆</div>
            <Portfolio />
          </div>
        </div>
      </section>

      {/* Contact Section - Final Chapter */}
      <section className="game-section bg-gradient-to-b from-gameGray to-white">
        <h2 className="game-title">
          <span className="block text-2xl md:text-3xl text-gameAccent mb-4 animate-pulse">Final Level</span>
          お問い合わせ
        </h2>
        
        <div className="text-center space-y-8">
          <p className="text-xl text-gray-600">
            プロジェクトのご相談やお仕事のご依頼はこちらから
          </p>
          
          <div className="animate-bounceSlow">
            <SimpleLinkButton 
              text="お問い合わせフォーム"
              href="https://forms.gle/Y9EcWWkQdEh2Vf1x5"
            />
          </div>
          
          <div className="flex justify-center space-x-4 mt-12">
            <div className="text-4xl animate-float">💼</div>
            <div className="text-4xl animate-float" style={{ animationDelay: '0.5s' }}>📧</div>
            <div className="text-4xl animate-float" style={{ animationDelay: '1s' }}>🤝</div>
          </div>
        </div>
      </section>

      <FloatingShareButton />
    </div>
  );
};
