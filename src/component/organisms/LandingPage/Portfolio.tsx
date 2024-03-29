import { SimpleLinkButton } from "src/component/atoms/Button/SimpleLinkButton";
import { LandingPageTitle } from "src/component/atoms/Text/LandingPageTitle";
import { Work } from "src/component/molecules/Work";
import {
  BasePortfolioTitle,
  PortfolioButtonLink,
  PortfolioButtonText,
} from "src/constants/baseText";

export const Portfolio = () => {
  return (
    <div className="container mx-auto w-11/12 max-w-lg">
      <LandingPageTitle text={BasePortfolioTitle} />
      <div className="pt-4">
        <Work
          text={"スマホの画像で騙し合うゲーム"}
          imageUrl={"/img/photo_werewolf_icon.webp"}
          title={"写真人狼"}
          link={"/products/photo_werewolf"}
        />
      </div>
      <div className="pt-4">
        <Work
          text={
            "富士山のフリー素材サイト(PlanetScaleをDBに使っており、Sleepしていた場合は表示がされません。)"
          }
          imageUrl={"/img/fujisan.webp"}
          title={"富士山ソムリエ(β版)"}
          link={"https://fujisan-sommelier.vercel.app/"}
        />
      </div>
      <div className="pt-2">
        <Work
          text={"日台情報を発信するブログ"}
          imageUrl={"/img/dog1_smile.webp"}
          title={"【Close】日台one!"}
          link={"https://qiita.com/atamakonkurii/items/8eb7f10bcfdb73324270"}
        />
      </div>
      <div className="pt-6 text-center">
        <SimpleLinkButton
          text={PortfolioButtonText}
          href={PortfolioButtonLink}
        />
      </div>
    </div>
  );
};
