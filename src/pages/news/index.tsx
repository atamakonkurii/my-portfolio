import type { FC } from "react";
import { IndexNewsContainer } from "src/component/templates/News/IndexNewsContainer";
import type { NewsArrayResponse } from "src/type/types";

export const News: FC<NewsArrayResponse> = (props) => {
  const newsResponse = props;
  return (
    <div>
      <IndexNewsContainer {...newsResponse} />
    </div>
  );
};
