import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { Title } from "./Title";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Atoms/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = () => {
  return <Title title="こんにちは" />;
};

export const Normal = Template.bind({});
