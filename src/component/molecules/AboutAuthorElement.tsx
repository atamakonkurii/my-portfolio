import Link from "next/link";

export const AboutAuthorElement = () => {
  return (
    <div>
      <img src="/img/my_image.jpg" className="pt-4 mx-auto" />
      <div className="flex items-center mt-4">
        <div>
          <p className="text-xl font-medium">太田 和希</p>
          <p className="text-xs">Ohta Kazuki</p>
        </div>
        <div className="ml-6">
          <div className="flex items-center">
            <div>
              <Link href={"https://github.com/atamakonkurii"}>
                <a>
                  <img
                    src={"/img/GitHub-Mark-32px.png"}
                    className="object-cover my-auto w-6 h-6"
                    alt="my_github"
                  />
                </a>
              </Link>
            </div>
            <div>
              <Link href={"https://twitter.com/atamakonkurii"}>
                <a>
                  <img
                    src={"/img/Twitter social icons - circle - blue.png"}
                    className="object-cover my-auto ml-3 w-6 h-6"
                    alt="my_twitter"
                  />
                </a>
              </Link>
            </div>
            <div>
              <Link href={"https://www.youtube.com/c/atamakonkurii"}>
                <a>
                  <img
                    src={"/img/youtube_social_icon_red.png"}
                    className="object-cover my-auto ml-3 w-7 h-5"
                    alt="my_youtube"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-2 text-base font-medium">Webエンジニア / YouTuber</p>
      <p className="pt-4 text-sm">
        静岡県出身。大学院時代に国際交流を目的に行ったチューター業務（留学生のお世話係）でお世話した台湾人彼女とお付き合いしております。
      </p>
      <p className="pt-4 text-lg font-medium">略歴</p>
      <p className="text-sm">2016.3 沼津高専卒</p>
      <p className="text-sm">2018.3 沼津高専専攻科卒</p>
      <p className="text-sm">2020.3 名古屋大学院卒</p>
      <p className="text-sm">
        2020.4 自動車部品メーカー入社（電気系エンジニア）
      </p>
      <p className="text-sm">2021.5 ITベンチャーに転職(Webエンジニア)</p>
      <p className="pt-6 text-lg font-medium">
        使ったことがある技術 • サービス
      </p>
      <p className="pt-1 text-sm">
        Rails / Next.js / TypeScript / SwiftUI / AWS / supabase / Cloudflare /
        Vercel / microCMS / GitHub Actions / Figma...
      </p>
    </div>
  );
};
