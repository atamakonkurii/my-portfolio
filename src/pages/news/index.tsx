import type { FC } from "react";
import { NewsContainer } from "src/component/templates/NewsContainer";
import type { NewsResponse } from "src/type/types";

export const News: FC<NewsResponse> = (props) => {
  const newsResponse = props;
  return (
    <div>
      <NewsContainer {...newsResponse} />
    </div>
  );
};
