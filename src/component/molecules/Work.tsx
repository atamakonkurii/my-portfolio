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
        <div className="game-card h-full flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
          <img
            src={imageUrl}
            className="w-24 h-24 rounded-lg object-cover"
            alt=""
          />
          <div className="flex-1">
            <p className="text-xl font-bold mb-1">{title}</p>
            <p className="text-gray-600 text-sm">{text}</p>
          </div>
          <div className="text-2xl">→</div>
        </div>
      </a>
    </Link>
  );
};
