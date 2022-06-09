import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { BuyMeThings } from "./BuyMeThings";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Organisms/LandingPage/BuyMeThings",
  component: BuyMeThings,
} as ComponentMeta<typeof BuyMeThings>;

const Template: ComponentStory<typeof BuyMeThings> = () => {
  return <BuyMeThings />;
};

export const Normal = Template.bind({});
