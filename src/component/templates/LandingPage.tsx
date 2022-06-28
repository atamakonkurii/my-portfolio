import type { FC } from "react";
import {
  AboutSite,
  BuyMeThings,
  FirstView,
  News,
  Portfolio,
} from "src/component/organisms/LandingPage";
import { AboutAuthor } from "src/component/organisms/LandingPage/AboutAuthor";
import type { IndexPageNews } from "src/type/types";

type Props = IndexPageNews;

export const LandingPage: FC<Props> = (props) => {
  const indexPageNews = props;
  return (
    <div>
      <FirstView />
      <div className="pb-8 bg-slate-50">
        <div className="pt-8">
          <News {...indexPageNews} />
        </div>
        {/* とりあえずいらないと思ったのでコメントアウト。場合によっては復活するかも？ */}
        {/* <div className="pt-8">
          <GoodForUs />
        </div> */}
        <div className="pt-12">
          <AboutSite />
        </div>
        <div className="pt-16">
          <AboutAuthor />
        </div>
        <div className="pt-16">
          <Portfolio />
        </div>
        <div className="pt-16">
          <BuyMeThings />
        </div>
      </div>
    </div>
  );
};
