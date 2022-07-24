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
          imageUrl={"/img/character_hitsuji_ookami.webp"}
          title={"写真人狼(開発途中)"}
          link={"https://github.com/atamakonkurii/photo-werewolf"}
        />
      </div>
      <div className="pt-2">
        <Work
          text={"日台情報を発信するブログ"}
          imageUrl={"/img/dog1_smile.webp"}
          title={"日台one!"}
          link={"https://nittai-one.com/"}
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
