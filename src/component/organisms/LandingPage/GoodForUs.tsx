//TODO:変更が必要
type Props = {
  text: string;
};

export const FirstViewSmallText = (props: Props) => {
  const { text } = props;
  return <p className="text-xs text-white">{text}</p>;
};
