import { SimpleLinkButton } from "src/component/atoms/Button/SimpleLinkButton";
import { Work } from "src/component/molecules/Work";
import {
  PortfolioButtonLink,
  PortfolioButtonText,
} from "src/constants/baseText";

export const Portfolio = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="transform transition-transform hover:scale-105">
          <Work
            text={"スマホの画像で騙し合うゲーム"}
            imageUrl={"/img/photo_werewolf_icon.webp"}
            title={"写真人狼"}
            link={"/products/photo_werewolf"}
          />
        </div>
        <div className="transform transition-transform hover:scale-105">
          <Work
            text={"富士山のフリー素材サイト"}
            imageUrl={"/img/fujisan.webp"}
            title={"富士山ソムリエ(β版)"}
            link={"https://fujisan-sommelier.vercel.app/"}
          />
        </div>
        <div className="transform transition-transform hover:scale-105">
          <Work
            text={"日台情報を発信するブログ"}
            imageUrl={"/img/dog1_smile.webp"}
            title={"【Close】日台one!"}
            link={"https://qiita.com/atamakonkurii/items/8eb7f10bcfdb73324270"}
          />
        </div>
      </div>
      <div className="text-center">
        <SimpleLinkButton
          text={PortfolioButtonText}
          href={PortfolioButtonLink}
        />
      </div>
    </div>
  );
};
