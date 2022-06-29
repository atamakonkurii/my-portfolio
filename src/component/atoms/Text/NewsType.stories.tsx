import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { NewsType } from "./NewsType";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Atoms/Text/NewsType",
  component: NewsType,
} as ComponentMeta<typeof NewsType>;

const Template: ComponentStory<typeof NewsType> = () => {
  return <NewsType typeOfNews={"新機能"} />;
};

const Template1: ComponentStory<typeof NewsType> = () => {
  return <NewsType typeOfNews={"障害"} />;
};

const Template2: ComponentStory<typeof NewsType> = () => {
  return <NewsType typeOfNews={"お知らせ"} />;
};

export const NewColor = Template.bind({});

export const DangerColor = Template1.bind({});

export const OtherColor = Template2.bind({});
