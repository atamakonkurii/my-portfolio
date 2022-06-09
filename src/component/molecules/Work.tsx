type Props = {
  imageUrl: string;
  title: string;
  text: string;
};

export const Work = (props: Props) => {
  const { imageUrl, text, title } = props;
  return (
    <div className="flex">
      <img src={imageUrl} className="object-cover w-28 h-28" />
      <div className="pt-4">
        <p className="text-xs">{title}</p>
        <p className="text-xs">{text}</p>
      </div>
    </div>
  );
};
