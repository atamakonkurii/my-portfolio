import type { FC } from "react";
import { NewsElement } from "src/component/molecules/NewsElement";
import type { NewsArrayResponse, NewsResponse } from "src/type/types";
import { rawDateToYearMonthDay } from "src/utils/dateFormatter";

export const IndexNewsContainer: FC<NewsArrayResponse> = (props) => {
  const newsResponse = props;
  return (
    <div className="container py-16 mx-auto w-11/12 max-w-3xl">
      <div className="flex justify-center mb-8 text-3xl font-bold">
        お知らせ
      </div>
      <div className="space-y-0">
        {newsResponse.news.map((news: NewsResponse) => {
          return (
            <NewsElement
              key={news.id}
              id={news.id}
              date={rawDateToYearMonthDay(news.publishedAt)}
              typeOfNews={news.category.name}
              title={news.title}
            />
          );
        })}
      </div>
    </div>
  );
};
