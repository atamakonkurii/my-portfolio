import type { FC } from "react";
import { SimpleLinkButton } from "src/component/atoms/Button/SimpleLinkButton";
import { LpNews } from "src/component/organisms/LandingPage";
import { AboutAuthor } from "src/component/organisms/LandingPage/AboutAuthor";
import type { LandingPageNews } from "src/type/types";

type Props = LandingPageNews;

export const LandingPage: FC<Props> = (props) => {
  const landingPageNews = props;
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex overflow-hidden relative justify-center items-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent)] opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent)] opacity-50"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full opacity-20 blur-sm animate-float"></div>
        <div
          className="absolute right-16 bottom-32 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full opacity-25 blur-sm animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-20 w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full opacity-20 blur-sm animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>

        <div className="container relative z-10 py-24 px-6 mx-auto text-center">
          {/* Main Content */}
          <div className="mx-auto space-y-8 max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center py-2 px-4 bg-white/80 rounded-full border border-blue-200 shadow-lg backdrop-blur-sm animate-fadeInUp">
              <span className="text-sm font-medium text-blue-700">
                🎬 Content Creator & Developer
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl font-bold leading-tight animate-fadeInUp md:text-7xl"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
                KAZUKI OHTA
              </span>
            </h1>

            {/* Subtitle with Gradient */}
            <div
              className="animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl">
                日台夫婦系YouTuberとして動画投稿・Web開発を行っています
              </p>
            </div>

            {/* Video Section */}
            <div
              className="pt-16 animate-fadeInScale"
              style={{ animationDelay: "0.8s" }}
            >
              {/* Desktop/Tablet View */}
              <div className="hidden px-6 mx-auto w-full max-w-4xl sm:block lg:px-8">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
                  <div className="relative p-8 bg-white/95 rounded-2xl border border-white/50 shadow-2xl backdrop-blur-lg">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="flex items-center space-x-2 text-xl font-semibold text-gray-800">
                        <span className="text-2xl">🎬</span>
                        <span>最新動画</span>
                      </h3>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="aspect-video overflow-hidden relative w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl">
                      <iframe
                        src="https://www.youtube.com/embed/LyHrGwFzO0c?autoplay=1&mute=1"
                        title="日台one! 最新動画"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile View - Full Width */}
              <div className="block px-2 w-full sm:hidden">
                <div className="px-4 mb-4">
                  <h3 className="flex justify-center items-center space-x-2 text-lg font-semibold text-gray-800">
                    <span className="text-xl">🎬</span>
                    <span className="text-lg">20万再生超の人気動画</span>
                  </h3>
                </div>
                <div className="aspect-video overflow-hidden relative w-full bg-gradient-to-br from-gray-100 to-gray-200">
                  <iframe
                    src="https://www.youtube.com/embed/LyHrGwFzO0c?autoplay=1&mute=1"
                    title="日台one! 人気動画"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div
              className="flex flex-col gap-6 justify-center items-center pt-12 animate-fadeInUp sm:flex-row"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="https://youtube.com/@nittaione"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex overflow-hidden relative items-center py-3 px-6 bg-gradient-to-r from-red-500/10 hover:from-red-500/20 to-pink-500/10 hover:to-pink-500/20 rounded-full border border-red-300/30 hover:border-red-400/50 backdrop-blur-md transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex relative items-center space-x-3">
                  <div className="flex justify-center items-center w-8 h-8 text-sm text-white bg-gradient-to-br from-red-500 to-pink-500 rounded-full animate-pulse">
                    📺
                  </div>
                  <div className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
                    @nittaione
                  </div>
                </div>
                <div className="absolute inset-0 bg-size200 bg-shimmer rounded-full opacity-0 group-hover:opacity-30 animate-shimmer"></div>
              </a>

              <a
                href="#contact"
                className="group inline-flex overflow-hidden relative items-center py-3 px-6 bg-gradient-to-r from-gray-50/50 hover:from-gray-100/60 to-blue-50/50 hover:to-blue-100/60 rounded-full border border-gray-300/40 hover:border-blue-400/50 backdrop-blur-md transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex relative items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                  <div className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-700 group-hover:from-blue-700 to-gray-800 group-hover:to-indigo-700 transition-all duration-300">
                    Contact
                  </div>
                </div>
                <div className="absolute inset-0 bg-size200 bg-shimmer rounded-full opacity-0 group-hover:opacity-20 animate-shimmer"></div>
              </a>
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
      <section
        id="contact"
        className="bg-gradient-to-b from-gameGray to-white game-section"
      >
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
    </div>
  );
};
