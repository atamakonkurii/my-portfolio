import Link from "next/link";
import type { FC } from "react";
import { NewsElement } from "src/component/molecules/NewsElement";
import {
  BaseNewsDate,
  BaseNewsTitle,
  BaseNewsType,
} from "src/constants/baseText";
import type { IndexPageNews } from "src/type/types";

type Props = IndexPageNews;

export const News: FC<Props> = (props) => {
  const indexPageNews = props;
  return (
    <div className="container mx-auto w-11/12 max-w-lg">
      <div className="hover:opacity-50">
        <NewsElement
          date={indexPageNews.publishedAt || BaseNewsDate}
          typeOfNews={indexPageNews.categoryName || BaseNewsType}
          title={indexPageNews.title || BaseNewsTitle}
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
