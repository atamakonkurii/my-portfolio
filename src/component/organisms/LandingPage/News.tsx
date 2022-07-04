import { format } from "date-fns";
import Link from "next/link";
import type { FC } from "react";
import { NewsElement } from "src/component/molecules/NewsElement";
import {
  BaseNewsDate,
  BaseNewsTitle,
  BaseNewsType,
} from "src/constants/baseText";
import type { LandingPageNews } from "src/type/types";

type Props = LandingPageNews;

export const News: FC<Props> = (props) => {
  const landingPageNews = props;
  const date = format(
    new Date(landingPageNews.publishedAt),
    "yyyy/MM/dd"
  ).toString();
  return (
    <div className="container mx-auto w-11/12 max-w-lg">
      <div className="hover:opacity-50">
        <NewsElement
          date={date || BaseNewsDate}
          typeOfNews={landingPageNews.categoryName || BaseNewsType}
          title={landingPageNews.title || BaseNewsTitle}
        />
      </div>
      <div className="flex justify-center mt-4 hover:opacity-50">
        <Link href="/no_page">
          <a className="text-sm text-blue-600 underline underline-offset-1">
            過去のお知らせ
          </a>
        </Link>
      </div>
    </div>
  );
};
