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
      bgColor = "bg-amber-600";
      break;
    case "zenn":
      bgColor = "bg-red-600";
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
      <a className="flex">
        <div className="text-sm font-semibold">
          {rawDateToYearMonthDay(isoDate)}
        </div>
        <div
          className={`pl-2 ${serviceTypeColor(
            service
          )} text-white rounded w-16 flex`}
        >
          {service}
        </div>
        <div className="pl-2 text-sm font-semibold">{title}</div>
      </a>
    </Link>
  );
};
