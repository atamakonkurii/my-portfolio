import { LandingPageTitle } from "src/component/atoms/Text/LandingPageTitle";
import { BaseBuyMeThingsTitle } from "src/constants/baseText";

export const BuyMeThings = () => {
  return (
    <div className="container mx-auto w-11/12 max-w-3xl">
      <LandingPageTitle text={BaseBuyMeThingsTitle} />
      <div className="pt-2 text-sm">
        <p>おごっていただく方にいいことは特にありません。</p>
        <p>作者のもっとおもしろいものを作るモチベーションになります。</p>
        <p>
          おごりだけじゃなく、SNSへのシェアや、こんなサイトあったよ〜と飲み会等で話していただくことも大変嬉しいです。気軽に是非、よろしくお願いします！
        </p>
      </div>
    </div>
  );
};
