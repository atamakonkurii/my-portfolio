type Props = {
  text: string;
  paymentLink: string;
};

export const PlanButton = (props: Props) => {
  const { paymentLink, text } = props;
  return (
    <div>
      <a
        href={paymentLink}
        className="py-3 px-8 font-bold text-white bg-rose-500 hover:bg-rose-400 rounded-full hover:border-rose-600"
        target="_blank"
        rel="noreferrer"
      >
        {text}
      </a>
    </div>
  );
};
