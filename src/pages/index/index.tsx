import type { FC } from "react";
import { LandingPage } from "src/component/templates/LandingPage";
import type { IndexPageNews } from "src/type/types";

type Props = IndexPageNews;

export const Index: FC<Props> = (props) => {
  const indexPageNews = props;
  return (
    <div>
      <LandingPage {...indexPageNews} />
    </div>
  );
};
