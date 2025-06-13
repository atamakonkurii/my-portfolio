import type { FC } from "react";
import { FloatingShareButton } from "src/component/organisms/FloatingShareButton";
import { LpNews } from "src/component/organisms/LandingPage";
import { AboutAuthor } from "src/component/organisms/LandingPage/AboutAuthor";
import type { LandingPageNews } from "src/type/types";

type Props = LandingPageNews;

export const LandingPage: FC<Props> = (props) => {
  const landingPageNews = props;
  return (
    <div>
      <div className="bg-slate-50">
        <div className="pt-8">
          <LpNews {...landingPageNews} />
        </div>
        <div className="pb-8 mt-16">
          <AboutAuthor />
        </div>
        <FloatingShareButton />
      </div>
    </div>
  );
};
