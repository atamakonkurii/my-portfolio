import type { FC } from "react";
import { NewsContainer } from "src/component/templates/NewsContainer";

export const Index: FC = (props) => {
  const indexPageNews = props;
  return (
    <div>
      <NewsContainer {...indexPageNews} />
    </div>
  );
};
