type Props = {
  title: string;
};

export const Title = (props: Props) => {
  const { title } = props;
  return <h1 className="pb-6 text-xl text-white md:text-3xl">{title}</h1>;
};
