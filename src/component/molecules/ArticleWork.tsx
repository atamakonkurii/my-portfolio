import Link from "next/link";

type Props = {
  imageUrl: string;
  link: string;
};

export const ArticleWork = (props: Props) => {
  const { imageUrl, link } = props;
  return (
    <Link href={link}>
      <a>
        <div className="flex mx-auto mb-16 max-w-md h-32 bg-white rounded-lg shadow-sm">
          <img src={imageUrl} className="object-cover my-auto" alt="" />
        </div>
      </a>
    </Link>
  );
};
