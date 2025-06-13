type Props = {
  typeOfNews: string;
};

const newsTypeStyle = (typeOfNews: string) => {
  let style;
  switch (typeOfNews) {
    case "新機能":
      style = "bg-amber-100 text-amber-800 border-amber-300";
      break;
    case "障害":
      style = "bg-red-100 text-red-800 border-red-300";
      break;
    case "お知らせ":
      style = "bg-blue-100 text-blue-800 border-blue-300";
      break;
    default:
      style = "bg-gray-100 text-gray-800 border-gray-300";
      break;
  }

  return style;
};

export const NewsType = (props: Props) => {
  const { typeOfNews } = props;
  const style = newsTypeStyle(typeOfNews);

  return (
    <div
      className={`${style} px-3 py-1 rounded-full text-xs font-bold border inline-flex items-center`}
    >
      <span>{typeOfNews}</span>
    </div>
  );
};
