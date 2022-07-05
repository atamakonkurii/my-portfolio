import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";
import {
  BaseNewsDate,
  BaseNewsTitle,
  BaseNewsType,
} from "src/constants/baseText";
import type { NewsShowResponse } from "src/type/types";

import { ShowNewsContainer } from "./ShowNewsContainer";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Templates/News/ShowNewsContainer ",
  component: ShowNewsContainer,
} as ComponentMeta<typeof ShowNewsContainer>;

const newsResponse: NewsShowResponse = {
  news: {
    id: "test",
    title: BaseNewsTitle,
    publishedAt: BaseNewsDate,
    category: { name: BaseNewsType },
    content: "aaa",
  },
};

const Template: ComponentStory<typeof ShowNewsContainer> = () => {
  return <ShowNewsContainer {...newsResponse} />;
};

export const Normal = Template.bind({});
