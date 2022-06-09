type Props = {
  text: string;
};

export const LandingPageTitle = (props: Props) => {
  const { text } = props;
  return (
    <div className="w-11/12">
      <p className="text-2xl font-extrabold text-center text-black">{text}</p>
    </div>
  );
};
