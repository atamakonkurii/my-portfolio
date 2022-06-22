import Link from "next/link";

type Props = {
  text: string;
};

export const CTAButton = (props: Props) => {
  const { text } = props;
  return (
    <div>
      <Link href="/no_page">
        <a
          className="py-4 px-8 font-bold text-white bg-rose-500 hover:bg-rose-400 rounded-full border-b-4 border-rose-700 hover:border-rose-600"
          target="_blank"
          rel="noreferrer"
        >
          {text}
        </a>
      </Link>
    </div>
  );
};
