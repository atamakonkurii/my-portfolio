import Link from "next/link";

type Props = {
  text: string;
  href: string;
};

export const SimpleLinkButton = (props: Props) => {
  const { href, text } = props;
  return (
    <div>
      <Link href={href}>
        <a className="py-3 px-8 font-bold hover:text-white hover:bg-black rounded-full border-2 border-black">
          {text}
        </a>
      </Link>
    </div>
  );
};
