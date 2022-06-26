import Link from "next/link";

type Props = {
  text: string;
  paymentLink: string;
};

export const CTAButton = (props: Props) => {
  const { paymentLink, text } = props;
  return (
    <div>
      <Link href={paymentLink}>
        <a
          className="py-4 px-8 font-bold text-white bg-rose-500 hover:bg-rose-400 rounded-full border-b-4 border-rose-700 hover:border-rose-600"
          target="_blank"
        >
          {text}
        </a>
      </Link>
    </div>
  );
};
