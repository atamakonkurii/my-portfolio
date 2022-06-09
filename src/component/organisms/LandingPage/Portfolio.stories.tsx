import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { Portfolio } from "./Portfolio";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Organisms/LandingPage/Portfolio",
  component: Portfolio,
} as ComponentMeta<typeof Portfolio>;

const Template: ComponentStory<typeof Portfolio> = () => {
  return <Portfolio />;
};

export const Normal = Template.bind({});
