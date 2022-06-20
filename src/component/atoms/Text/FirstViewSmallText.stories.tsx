import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";
import { BaseFirstViewSmallText } from "src/constants/baseText";

import { FirstViewSmallText } from "./FirstViewSmallText";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Atoms/Text/FirstViewSmallText",
  component: FirstViewSmallText,
} as ComponentMeta<typeof FirstViewSmallText>;

const Template: ComponentStory<typeof FirstViewSmallText> = () => {
  return <FirstViewSmallText text={BaseFirstViewSmallText} />;
};

export const Normal = Template.bind({});
