import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { LandingPage } from "./LandingPage";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Templates/LandingPage",
  component: LandingPage,
} as ComponentMeta<typeof LandingPage>;

const Template: ComponentStory<typeof LandingPage> = () => {
  return <LandingPage />;
};

export const Normal = Template.bind({});
