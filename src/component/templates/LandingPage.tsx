import type { FC } from "react";
import { SimpleLinkButton } from "src/component/atoms/Button/SimpleLinkButton";
import { FloatingShareButton } from "src/component/organisms/FloatingShareButton";
import { LpNews } from "src/component/organisms/LandingPage";
import { AboutAuthor } from "src/component/organisms/LandingPage/AboutAuthor";
import type { LandingPageNews } from "src/type/types";

type Props = LandingPageNews;

export const LandingPage: FC<Props> = (props) => {
  const landingPageNews = props;
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-gameGray game-section">
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">
          🎥
        </div>
        <div
          className="absolute right-10 bottom-20 text-6xl opacity-10 animate-float"
          style={{ animationDelay: "1s" }}
        >
          💻
        </div>

        <h1 className="game-title">KAZUKI OHTA</h1>
        <p className="game-subtitle">YouTuber / Web Developer</p>

        <div className="mt-8 space-y-4">
          <p className="text-xl text-gray-600">
            日台夫婦系YouTuberとして動画投稿・Web開発を行っています
          </p>
          <div className="flex justify-center mt-8 space-x-6">
            <a
              href="https://youtube.com/@nittaione"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors duration-300"
            >
              <div className="text-3xl">📺</div>
              <span className="font-semibold">日台one! チャンネル</span>
            </a>
          </div>

          {/* YouTube Video Embed */}
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-center text-gray-800">
                📹 最新動画
              </h3>
              <div className="aspect-video relative">
                <iframe
                  src="https://www.youtube.com/embed/LyHrGwFzO0c?autoplay=1&mute=1"
                  title="日台one! 最新動画"
                  className="w-full h-full rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="bg-white game-section">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="game-title">お知らせ</h2>
          <div className="mx-auto max-w-2xl game-card">
            <LpNews {...landingPageNews} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gameGray game-section">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="game-title">プロフィール</h2>

          <div className="relative">
            <div className="absolute -top-10 -left-10 text-8xl opacity-10 animate-bounceSlow">
              👤
            </div>
            <AboutAuthor />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-b from-gameGray to-white game-section">
        <h2 className="game-title">コンタクト</h2>

        <div className="space-y-8 text-center">
          <p className="text-xl text-gray-600">
            ご質問やコラボのお話などお気軽にどうぞ
          </p>

          <div>
            <SimpleLinkButton
              text="メッセージを送る"
              href="https://forms.gle/Y9EcWWkQdEh2Vf1x5"
            />
          </div>

          <div className="flex justify-center mt-12 space-x-4">
            <div className="text-4xl animate-float">📺</div>
            <div
              className="text-4xl animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              📧
            </div>
            <div
              className="text-4xl animate-float"
              style={{ animationDelay: "1s" }}
            >
              💬
            </div>
          </div>
        </div>
      </section>

      <FloatingShareButton />
    </div>
  );
};
