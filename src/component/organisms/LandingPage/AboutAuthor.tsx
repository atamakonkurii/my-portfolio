/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { SimpleLinkButton } from "src/component/atoms/Button/SimpleLinkButton";
import { AboutAuthorElement } from "src/component/molecules/AboutAuthorElement";
import { AboutAuthorButtonText } from "src/constants/baseText";

export const AboutAuthor = () => {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="game-card">
        <AboutAuthorElement />
        <div className="pt-8 text-center">
          <SimpleLinkButton
            text={AboutAuthorButtonText}
            href={"/about_author"}
          />
        </div>
      </div>
    </div>
  );
};
