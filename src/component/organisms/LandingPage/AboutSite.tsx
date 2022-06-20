/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { SimpleLinkButton } from "src/component/atoms/Button/SimpleLinkButton";
import { LandingPageTitle } from "src/component/atoms/Text/LandingPageTitle";
import {
  AboutSiteButtonLink,
  AboutSiteButtonText,
  BaseAboutSiteTitle,
} from "src/constants/baseText";

export const AboutSite = () => {
  return (
    <div className="container mx-auto w-11/12 max-w-lg">
      <LandingPageTitle text={BaseAboutSiteTitle} />
      <img src="/img/ramen.jpg" className="pt-4 mx-auto" />
      <div className="pt-4 text-sm">
        <p>
          このサイトは太田和希のポートフォリオ機能を持ったおごられサイト?です。
        </p>
        <p>
          安定、高速におごっていただくために
          <a href="https://jamstack.org/" className="text-blue-600 underline">
            Jamstack構成
          </a>
          を採用し、決済には安心安全の
          <a href="https://stripe.com/jp" className="text-blue-600 underline">
            Stripe
          </a>
          を利用しています。
        </p>
      </div>
      <div className="pt-4 text-center">
        <SimpleLinkButton
          text={AboutSiteButtonText}
          href={AboutSiteButtonLink}
        />
      </div>
    </div>
  );
};
