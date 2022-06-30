import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { NewsContainer } from "./NewsContainer";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Templates/NewsContainer ",
  component: NewsContainer,
} as ComponentMeta<typeof NewsContainer>;

const Template: ComponentStory<typeof NewsContainer> = () => {
  return <NewsContainer />;
};

export const Normal = Template.bind({});
