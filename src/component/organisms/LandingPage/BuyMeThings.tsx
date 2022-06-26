import { LandingPageTitle } from "src/component/atoms/Text/LandingPageTitle";
import { Plan } from "src/component/molecules/Plan";
import { BaseBuyMeThingsTitle } from "src/constants/baseText";

export const BuyMeThings = () => {
  return (
    <div className="container mx-auto w-11/12 max-w-lg">
      <LandingPageTitle text={BaseBuyMeThingsTitle} />
      <div className="pt-2 text-sm">
        <Plan
          price={"¥100"}
          imageUrl={"/img/coffee01_blend.png"}
          title={"コーヒー"}
          paymentLink={"https://buy.stripe.com/5kAbK48hY1Xa3gQ3cd"}
        />
        <div className="pt-2">
          <Plan
            price={"¥1,000"}
            imageUrl={"/img/food_beefsteak.png"}
            title={"ランチ"}
            paymentLink={"https://buy.stripe.com/7sI6pK1TA0T63gQ4gi"}
          />
        </div>
        <div className="pt-2">
          <Plan
            price={"¥3,000"}
            imageUrl={"/img/book_yoko.png"}
            title={"技術書"}
            paymentLink={"https://buy.stripe.com/fZe9BWdCi45icRq147"}
          />
        </div>
      </div>
    </div>
  );
};
