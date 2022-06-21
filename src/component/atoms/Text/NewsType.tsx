type Props = {
  typeOfNews: string;
};

const newsTypeColor = (typeOfNews: string) => {
  let bgColor;
  switch (typeOfNews) {
    case "新機能":
      bgColor = "bg-amber-600";
      break;
    default:
      bgColor = "bg-neutral-700";
      break;
  }

  return bgColor;
};

export const NewsType = (props: Props) => {
  const { typeOfNews } = props;
  const bgColor = newsTypeColor(typeOfNews);

  return (
    <div className={`text-white ${bgColor} rounded w-16 flex`}>
      <p className="py-0.5 mx-auto text-xs font-semibold">{typeOfNews}</p>
    </div>
  );
};
