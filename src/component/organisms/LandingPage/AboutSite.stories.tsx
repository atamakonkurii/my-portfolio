import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { AboutSite } from "./AboutSite";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Organisms/LandingPage/AboutSite",
  component: AboutSite,
} as ComponentMeta<typeof AboutSite>;

const Template: ComponentStory<typeof AboutSite> = () => {
  return <AboutSite />;
};

export const Normal = Template.bind({});
