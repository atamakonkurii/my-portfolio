type Props = {
  text: string;
};

export const FirstViewSmallText = (props: Props) => {
  const { text } = props;
  return <p className="text-xs text-white">{text}</p>;
};
