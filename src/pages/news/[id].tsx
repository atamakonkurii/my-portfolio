import type { FC } from "react";
import { ShowNewsContainer } from "src/component/templates/News/ShowNewsContainer";
import type { NewsShowResponse } from "src/type/types";

export const ShowNews: FC<NewsShowResponse> = (props) => {
  const newsShowResponse = props;
  return (
    <div>
      <ShowNewsContainer {...newsShowResponse} />
    </div>
  );
};
