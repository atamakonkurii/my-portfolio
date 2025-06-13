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
    <div>
      <div className="transform transition-transform hover:scale-105">
        <NewsElement
          id={landingPageNews.id}
          date={date || BaseNewsDate}
          typeOfNews={landingPageNews.categoryName || BaseNewsType}
          title={landingPageNews.title || BaseNewsTitle}
        />
      </div>
      <div className="flex justify-center mt-6">
        <Link href="/news">
          <a className="text-gray-600 hover:text-gameAccent transition-colors duration-300 flex items-center space-x-2">
            <span>過去のクエスト記録を見る</span>
            <span className="text-xl">→</span>
          </a>
        </Link>
      </div>
    </div>
  );
};
