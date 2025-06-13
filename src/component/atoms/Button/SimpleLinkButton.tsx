import Link from "next/link";

type Props = {
  text: string;
  href: string;
};

export const SimpleLinkButton = (props: Props) => {
  const { href, text } = props;
  return (
    <div className="inline-block">
      <Link href={href}>
        <a className="game-button">
          {text}
        </a>
      </Link>
    </div>
  );
};
