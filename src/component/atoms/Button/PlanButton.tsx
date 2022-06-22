type Props = {
  text: string;
};

export const PlanButton = (props: Props) => {
  const { text } = props;
  return (
    <div>
      <a
        href="/no_page"
        className="py-3 px-8 font-bold text-white bg-rose-500 hover:bg-rose-400 rounded-full hover:border-rose-600"
        target="_blank"
        rel="noreferrer"
      >
        {text}
      </a>
    </div>
  );
};
