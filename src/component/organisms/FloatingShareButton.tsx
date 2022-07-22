import Link from "next/link";

export const FloatingShareButton = () => {
  return (
    <div>
      <div className="fixed bottom-8 left-6">
        <Link
          href={
            "https://twitter.com/share?&text=このポートフォリオサイト作った人すごくて才能に嫉妬する💢👊%0aWebエンジニア界の大谷翔平って感じ、、、%0a%23おごってください&url=https://kazukiohta.com"
          }
        >
          <a>
            <img
              src={"/img/Twitter social icons - circle - blue.png"}
              className="object-cover my-auto w-10 h-10 sm:w-0 sm:h-0"
              alt="twitter_share"
            />
          </a>
        </Link>
      </div>

      <div className="fixed bottom-8 left-20">
        <Link href={"https://line.me/R/msg/text/?https://kazukiohta.com"}>
          <a>
            <img
              src={"/img/LINE_APP_Android.webp"}
              className="object-cover my-auto w-10 h-10 sm:w-0 sm:h-0"
              alt="twitter_share"
            />
          </a>
        </Link>
      </div>
    </div>
  );
};
