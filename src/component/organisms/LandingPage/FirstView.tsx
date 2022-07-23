import type { FC } from "react";
import { CTAButton } from "src/component/atoms/Button";
import { SiteLogo } from "src/component/atoms/Svg/SiteLogo";
import { FirstViewSmallText } from "src/component/atoms/Text";
import { BaseSiteLogoColor } from "src/constants/baseColor";
import {
  BaseCTAButtonText,
  BaseFirstViewSmallText,
} from "src/constants/baseText";

export const FirstView: FC = () => {
  return (
    <div className="pb-16 bg-gradient-to-r from-sky-500 to-indigo-500 ">
      <div className="pt-12 text-center">
        <FirstViewSmallText text={BaseFirstViewSmallText} />
      </div>
      <div className="flex justify-center pt-8">
        <SiteLogo color={BaseSiteLogoColor} />
      </div>
      <div className="pt-12 text-center">
        <CTAButton
          text={BaseCTAButtonText}
          paymentLink={"https://buy.stripe.com/5kAbK48hY1Xa3gQ3cd"}
        />
      </div>
    </div>
  );
};
