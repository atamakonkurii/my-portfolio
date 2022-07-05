import Link from "next/link";
import type { FC } from "react";
import { NewsElement } from "src/component/molecules/NewsElement";
import {
  BaseNewsDate,
  BaseNewsTitle,
  BaseNewsType,
} from "src/constants/baseText";
import type { LandingPageNews } from "src/type/types";
import { rawDateToYearMonthDay } from "src/utils/dateFormatter";

type Props = LandingPageNews;

export const LpNews: FC<Props> = (props) => {
  const landingPageNews = props;
  const date = rawDateToYearMonthDay(landingPageNews.publishedAt);
  return (
    <div className="container mx-auto w-11/12 max-w-lg">
      <div className="hover:opacity-50">
        <NewsElement
          id={landingPageNews.id}
          date={date || BaseNewsDate}
          typeOfNews={landingPageNews.categoryName || BaseNewsType}
          title={landingPageNews.title || BaseNewsTitle}
        />
      </div>
      <div className="flex justify-center mt-4 hover:opacity-50">
        <Link href="/news">
          <a className="text-sm text-blue-600 underline underline-offset-1">
            過去のお知らせ
          </a>
        </Link>
      </div>
    </div>
  );
};
