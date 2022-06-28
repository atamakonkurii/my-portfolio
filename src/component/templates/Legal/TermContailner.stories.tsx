import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { TermContainer } from "./TermContainer";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Templates/Legal/TermContainer ",
  component: TermContainer,
} as ComponentMeta<typeof TermContainer>;

const Template: ComponentStory<typeof TermContainer> = () => {
  return <TermContainer />;
};

export const Normal = Template.bind({});
