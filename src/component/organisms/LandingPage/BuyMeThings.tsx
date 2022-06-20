import { LandingPageTitle } from "src/component/atoms/Text/LandingPageTitle";
import { Plan } from "src/component/molecules/Plan";
import { BaseBuyMeThingsTitle } from "src/constants/baseText";

export const BuyMeThings = () => {
  return (
    <div className="container mx-auto w-11/12 max-w-lg">
      <LandingPageTitle text={BaseBuyMeThingsTitle} />
      <div className="pt-2 text-sm">
        <Plan
          price={"¥1,000"}
          imageUrl={"/img/ramen.jpg"}
          title={"コーヒー代"}
        />
        <div className="pt-2">
          <Plan
            price={"¥1,000"}
            imageUrl={"/img/ramen.jpg"}
            title={"コーヒー代"}
          />
        </div>
        <div className="pt-2">
          <Plan
            price={"¥1,000"}
            imageUrl={"/img/ramen.jpg"}
            title={"コーヒー代"}
          />
        </div>
      </div>
    </div>
  );
};
