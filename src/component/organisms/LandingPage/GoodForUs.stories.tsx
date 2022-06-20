import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { GoodForUs } from "./GoodForUs";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Organisms/LandingPage/GoodForUs",
  component: GoodForUs,
} as ComponentMeta<typeof GoodForUs>;

const Template: ComponentStory<typeof GoodForUs> = () => {
  return <GoodForUs />;
};

export const Normal = Template.bind({});
