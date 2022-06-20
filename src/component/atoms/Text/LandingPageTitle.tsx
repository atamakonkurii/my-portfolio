type Props = {
  text: string;
};

export const LandingPageTitle = (props: Props) => {
  const { text } = props;
  return (
    <div>
      <p className="text-2xl font-bold">{text}</p>
    </div>
  );
};
