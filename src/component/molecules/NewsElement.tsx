/* eslint-disable @next/next/no-html-link-for-pages */
import { NewsType } from "src/component/atoms/Text/NewsType";

type Props = {
  date: string;
  typeOfNews: string;
  title: string;
};

export const NewsElement = (props: Props) => {
  const { date, title, typeOfNews } = props;
  return (
    <a href="/no_page" className="flex">
      <div className="text-sm font-semibold">{date}</div>
      <div className="pl-2">
        <NewsType typeOfNews={typeOfNews} />
      </div>
      <div className="pl-2 text-sm font-semibold">{title}</div>
    </a>
  );
};
