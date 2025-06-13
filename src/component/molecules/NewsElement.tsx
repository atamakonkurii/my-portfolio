import Link from "next/link";
import { NewsType } from "src/component/atoms/Text/NewsType";

type Props = {
  id: string;
  date: string;
  typeOfNews: string;
  title: string;
};

export const NewsElement = (props: Props) => {
  const { date, id, title, typeOfNews } = props;
  return (
    <Link href={`/news/${id}`}>
      <a className="block p-6 bg-white rounded-xl hover:bg-gameGray transition-colors duration-300">
        <div className="flex items-center space-x-3 mb-2">
          <div className="text-sm text-gray-500">{date}</div>
          <NewsType typeOfNews={typeOfNews} />
        </div>
        <div className="text-lg font-bold text-gray-800">{title}</div>
      </a>
    </Link>
  );
};
