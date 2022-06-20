import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { StandardFooter } from "./StandardFooter";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Layout/StandardFooter",
  component: StandardFooter,
} as ComponentMeta<typeof StandardFooter>;

const Template: ComponentStory<typeof StandardFooter> = () => {
  return <StandardFooter />;
};

export const Normal = Template.bind({});
