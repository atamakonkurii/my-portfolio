import Link from "next/link";
import { rawDateToYearMonthDay } from "src/utils/dateFormatter";

type Props = {
  title: string;
  link: string;
  isoDate: string;
  service: string;
};

const serviceTypeColor = (typeOfService: string) => {
  let bgColor;
  switch (typeOfService) {
    case "qiita":
      bgColor = "bg-emerald-500";
      break;
    case "zenn":
      bgColor = "bg-sky-600";
      break;
    default:
      bgColor = "bg-neutral-700";
      break;
  }

  return bgColor;
};

export const ArticleWork = (props: Props) => {
  const { isoDate, link, service, title } = props;
  return (
    <Link href={link}>
      <a className="flex items-center hover:opacity-50">
        <div className="text-sm font-semibold">
          {rawDateToYearMonthDay(isoDate)}
        </div>
        <div
          className={`ml-2 ${serviceTypeColor(
            service
          )} text-white rounded w-12 h-5 flex`}
        >
          <p className="py-0.5 w-12 h-5 text-xs font-semibold text-center">
            {service}
          </p>
        </div>
        <div className="ml-2 text-sm font-semibold">{title}</div>
      </a>
    </Link>
  );
};
