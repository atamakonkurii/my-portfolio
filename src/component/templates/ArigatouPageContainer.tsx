import Link from "next/link";

export const ArigatouPageContainer = () => {
  return (
    <div className="pt-16">
      <div className="flex justify-center text-xl font-bold sm:text-3xl">
        おごり、ありがとうございます！🙏
      </div>
      <img
        src={"/img/ojigi_man.webp"}
        className="mx-auto mt-8"
        alt="arigatou"
        width={100}
      />
      <div className="flex justify-center mt-8">
        <Link
          href={
            "https://twitter.com/share?&text=才能あふれる若者におごってみました💰%0a彼と同じ時代に生まれたことを幸せに思います%0a%23おごってください&url=https://kazukiohta.com"
          }
        >
          <a>
            <img
              src={"/img/Twitter social icons - circle - blue.png"}
              className="object-cover my-auto mr-10 w-16 h-16 hover:opacity-80"
              alt="twitter_share"
            />
          </a>
        </Link>

        <Link href={"https://line.me/R/msg/text/?https://kazukiohta.com"}>
          <a>
            <img
              src={"/img/LINE_APP_Android.webp"}
              className="object-cover my-auto w-16 h-16 hover:opacity-80"
              alt="line_share"
            />
          </a>
        </Link>
      </div>
      <div className="flex justify-center mt-4 mb-8 font-semibold text-blue-500">
        ＼おごった報告、是非お願いします／
      </div>
    </div>
  );
};
