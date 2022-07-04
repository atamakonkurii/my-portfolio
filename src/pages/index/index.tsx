import type { FC } from "react";
import { LandingPage } from "src/component/templates/LandingPage";
import type { LandingPageNews } from "src/type/types";

type Props = LandingPageNews;

export const Index: FC<Props> = (props) => {
  const landingPageNews = props;
  return (
    <div>
      <LandingPage {...landingPageNews} />
    </div>
  );
};
