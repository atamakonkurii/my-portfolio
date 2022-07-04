import type { FC } from "react";
import { NewsElement } from "src/component/molecules/NewsElement";
import type { NewsArrayResponse, NewsResponse } from "src/type/types";
import { rawDateToYearMonthDay } from "src/utils/dateFormatter";

export const NewsContainer: FC<NewsArrayResponse> = (props) => {
  const newsResponse = props;
  return (
    <div className="container mx-auto w-11/12 max-w-lg">
      <div className="flex justify-center text-3xl font-bold">お知らせ</div>
      <div className="mt-8 divide-y divide-slate-300">
        {newsResponse.news.map((news: NewsResponse) => {
          return (
            <div key={news.id} className="flex items-center px-3 h-20">
              <NewsElement
                date={rawDateToYearMonthDay(news.publishedAt)}
                typeOfNews={news.category.name}
                title={news.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
