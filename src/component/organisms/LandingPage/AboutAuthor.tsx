/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { SimpleLinkButton } from "src/component/atoms/Button/SimpleLinkButton";
import { LandingPageTitle } from "src/component/atoms/Text/LandingPageTitle";
import { AboutAuthorElement } from "src/component/molecules/AboutAuthorElement";
import {
  AboutAuthorButtonText,
  BaseAboutAuthorTitle,
} from "src/constants/baseText";

export const AboutAuthor = () => {
  return (
    <div className="container mx-auto w-11/12 max-w-lg">
      <LandingPageTitle text={BaseAboutAuthorTitle} />
      <AboutAuthorElement />
      <div className="pt-8 text-center">
        <SimpleLinkButton text={AboutAuthorButtonText} href={"/about_author"} />
      </div>
    </div>
  );
};
