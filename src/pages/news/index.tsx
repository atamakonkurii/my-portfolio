import type { FC } from "react";
import { NewsContainer } from "src/component/templates/NewsContainer";
import type { NewsArrayResponse } from "src/type/types";

export const News: FC<NewsArrayResponse> = (props) => {
  const newsResponse = props;
  return (
    <div>
      <NewsContainer {...newsResponse} />
    </div>
  );
};
