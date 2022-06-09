/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { LandingPageTitle } from "src/component/atoms/Text/LandingPageTitle";
import { BaseAboutAuthorTitle } from "src/constants/baseText";

export const AboutAuthor = () => {
  return (
    <div className="container mx-auto w-11/12 max-w-3xl">
      <LandingPageTitle text={BaseAboutAuthorTitle} />
      <img src="/img/ramen.jpg" className="pt-4 mx-auto" />
      <p className="pt-4 text-xl font-medium">太田 和希</p>
      <p className="text-xs">Ohta Kazuki</p>
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
