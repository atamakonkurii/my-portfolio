import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";
import { BaseAboutSiteTitle, BaseGoodForUsTitle } from "src/constants/baseText";

import { LandingPageTitle } from "./LandingPageTitle";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Atoms/Text/LandingPageTitle",
  component: LandingPageTitle,
} as ComponentMeta<typeof LandingPageTitle>;

const GoodForUsTemplate: ComponentStory<typeof LandingPageTitle> = () => {
  return <LandingPageTitle text={BaseGoodForUsTitle} />;
};

const AboutSiteTemplate: ComponentStory<typeof LandingPageTitle> = () => {
  return <LandingPageTitle text={BaseAboutSiteTitle} />;
};

export const GoodForUs = GoodForUsTemplate.bind({});

export const AboutSite = AboutSiteTemplate.bind({});
