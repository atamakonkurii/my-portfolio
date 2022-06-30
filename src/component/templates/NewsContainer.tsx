import { NewsElement } from "src/component/molecules/NewsElement";
import {
  BaseNewsDateFormat,
  BaseNewsTitle,
  BaseNewsType,
} from "src/constants/baseText";

export const NewsContainer = () => {
  return (
    <div className="container mx-auto w-11/12 max-w-lg">
      <div className="flex justify-center text-3xl font-bold">お知らせ</div>
      <div className="mt-8 divide-y divide-slate-300">
        <div className="flex items-center px-3 h-20">
          <NewsElement
            date={BaseNewsDateFormat}
            typeOfNews={BaseNewsType}
            title={BaseNewsTitle}
          />
        </div>
        <div className="flex items-center px-3 h-20">
          <NewsElement
            date={BaseNewsDateFormat}
            typeOfNews={BaseNewsType}
            title={BaseNewsTitle}
          />
        </div>
        <div className="flex items-center px-3 h-20">
          <NewsElement
            date={BaseNewsDateFormat}
            typeOfNews={BaseNewsType}
            title={BaseNewsTitle}
          />
        </div>
      </div>
    </div>
  );
};
