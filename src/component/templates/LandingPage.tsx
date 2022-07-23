import type { FC } from "react";
import { FloatingShareButton } from "src/component/organisms/FloatingShareButton";
import {
  AboutSite,
  BuyMeThings,
  FirstView,
  LpNews,
  Portfolio,
} from "src/component/organisms/LandingPage";
import { AboutAuthor } from "src/component/organisms/LandingPage/AboutAuthor";
import type { LandingPageNews } from "src/type/types";

type Props = LandingPageNews;

export const LandingPage: FC<Props> = (props) => {
  const landingPageNews = props;
  return (
    <div>
      <FirstView />
      <div className="bg-slate-50">
        <div className="mt-8">
          <LpNews {...landingPageNews} />
        </div>
        {/* とりあえずいらないと思ったのでコメントアウト。場合によっては復活するかも？ */}
        {/* <div className="pt-8">
          <GoodForUs />
        </div> */}
        <div className="mt-12">
          <AboutSite />
        </div>
        <div className="mt-16">
          <AboutAuthor />
        </div>
        <div className="mt-16">
          <Portfolio />
        </div>
        <div className="mt-16 mb-8">
          <BuyMeThings />
        </div>
        <FloatingShareButton />
      </div>
    </div>
  );
};
