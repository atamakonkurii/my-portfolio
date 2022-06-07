import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { FirstViewSmallText } from "./FirstViewSmallText";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Atoms/Text/FirstViewSmallText",
  component: FirstViewSmallText,
} as ComponentMeta<typeof FirstViewSmallText>;

const Template: ComponentStory<typeof FirstViewSmallText> = () => {
  return (
    <FirstViewSmallText text="おごられたいを前面に出したポートフォリオサイト" />
  );
};

export const Normal = Template.bind({});
