import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { StandardHeader } from "./StandardHeader";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Layout/StandardHeader",
  component: StandardHeader,
} as ComponentMeta<typeof StandardHeader>;

const Template: ComponentStory<typeof StandardHeader> = () => {
  return <StandardHeader />;
};

export const Normal = Template.bind({});
