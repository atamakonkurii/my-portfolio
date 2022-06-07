import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { SiteLogo } from "./SiteLogo";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Atoms/SiteLogo",
  component: SiteLogo,
} as ComponentMeta<typeof SiteLogo>;

const Template: ComponentStory<typeof SiteLogo> = () => {
  return <SiteLogo color="#123" />;
};

export const Normal = Template.bind({});
