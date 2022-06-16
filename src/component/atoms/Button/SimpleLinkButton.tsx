type Props = {
  text: string;
  href: string;
};

export const SimpleLinkButton = (props: Props) => {
  const { href, text } = props;
  return (
    <div>
      <a
        href={href}
        className="py-3 px-8 font-bold hover:text-white hover:bg-black rounded-full border-2 border-black"
        target="_blank"
        rel="noreferrer"
      >
        {text}
      </a>
    </div>
  );
};
