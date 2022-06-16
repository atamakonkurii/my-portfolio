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
    <div className="container mx-auto w-11/12 max-w-3xl">
      <LandingPageTitle text={BasePortfolioTitle} />
      <div className="pt-4">
        <Work
          text={"スマホの画像で騙し合うゲーム"}
          imageUrl={"/img/ramen.jpg"}
          title={"写真人狼"}
        />
      </div>
      <div className="pt-2">
        <Work
          text={"スマホの画像で騙し合うゲーム"}
          imageUrl={"/img/ramen.jpg"}
          title={"写真人狼"}
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
