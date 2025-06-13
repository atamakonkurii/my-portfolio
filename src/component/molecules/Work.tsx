import Link from "next/link";

type Props = {
  imageUrl: string;
  title: string;
  text: string;
  link: string;
};

export const Work = (props: Props) => {
  const { imageUrl, link, text, title } = props;
  return (
    <Link href={link}>
      <a className="block">
        <div className="flex items-center space-x-4 h-full transition-transform duration-300 hover:scale-105 game-card">
          <img
            src={imageUrl}
            className="object-cover w-24 h-24 rounded-lg"
            alt=""
          />
          <div className="flex-1">
            <p className="mb-1 text-xl font-bold">{title}</p>
            <p className="text-sm text-gray-600">{text}</p>
          </div>
          <div className="text-2xl">→</div>
        </div>
      </a>
    </Link>
  );
};
