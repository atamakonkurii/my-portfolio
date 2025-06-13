import Link from "next/link";

export const FloatingShareButton = () => {
  return (
    <div>
      <div className="fixed bottom-8 left-6">
        <Link
          href={
            "https://twitter.com/share?&text=すごいポートフォリオサイトを見つけました！%0aKAZUKI OHTAさんのWeb開発スキルが素晴らしいです👨‍💻✨&url=https://kazukiohta.com"
          }
        >
          <a>
            <img
              src={"/img/Twitter social icons - circle - blue.webp"}
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
              alt="line_share"
            />
          </a>
        </Link>
      </div>
    </div>
  );
};
