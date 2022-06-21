import { NewsElement } from "src/component/molecules/NewsElement";
import {
  BaseNewsDate,
  BaseNewsTitle,
  BaseNewsType,
} from "src/constants/baseText";

export const News = () => {
  return (
    <div className="container mx-auto w-11/12 max-w-lg">
      <div className="hover:opacity-50">
        <NewsElement
          date={BaseNewsDate}
          typeOfNews={BaseNewsType}
          title={BaseNewsTitle}
        />
      </div>
      <div className="flex justify-center mt-4 hover:opacity-50">
        <a
          href="https://www.google.co.jp/"
          className="text-sm text-blue-600 underline underline-offset-1"
        >
          過去のお知らせ
        </a>
      </div>
    </div>
  );
};
