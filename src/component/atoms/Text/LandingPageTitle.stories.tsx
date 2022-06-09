import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { LandingPageTitle } from "./LandingPageTitle";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Atoms/Text/LandingPageTitle",
  component: LandingPageTitle,
} as ComponentMeta<typeof LandingPageTitle>;

const Template: ComponentStory<typeof LandingPageTitle> = () => {
  return <LandingPageTitle text="おごるといいことある?" />;
};

export const Normal = Template.bind({});
