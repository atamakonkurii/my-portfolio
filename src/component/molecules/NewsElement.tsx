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
    <div className="mb-4">
      <Link href={`/news/${id}`}>
        <a className="block p-6 bg-white hover:bg-gray-50 rounded-xl transition-colors duration-200">
          <div className="flex items-center mb-2 space-x-3">
            <div className="text-sm text-gray-500">{date}</div>
            <NewsType typeOfNews={typeOfNews} />
          </div>
          <div className="text-lg font-bold text-gray-800 hover:text-gameAccent transition-colors duration-200">
            {title}
          </div>
        </a>
      </Link>
    </div>
  );
};
