import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { News } from "./News";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Organisms/LandingPage/News",
  component: News,
} as ComponentMeta<typeof News>;

const Template: ComponentStory<typeof News> = () => {
  return <News />;
};

export const Normal = Template.bind({});
