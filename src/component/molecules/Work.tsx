type Props = {
  imageUrl: string;
  title: string;
  text: string;
};

export const Work = (props: Props) => {
  const { imageUrl, text, title } = props;
  return (
    <div className="flex mx-auto max-w-md h-32 bg-white rounded-lg shadow-sm">
      <img
        src={imageUrl}
        className="object-cover my-auto ml-6 w-28 h-28"
        alt="ramen"
      />
      <div className="mt-4 ml-4">
        <p className="text-2xl font-semibold">{title}</p>
        <p className="pt-1 text-sm">{text}</p>
      </div>
    </div>
  );
};
