import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";
import {
  BaseNewsDate,
  BaseNewsTitle,
  BaseNewsType,
} from "src/constants/baseText";
import type { NewsArrayResponse } from "src/type/types";

import { NewsContainer } from "./NewsContainer";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Templates/NewsContainer ",
  component: NewsContainer,
} as ComponentMeta<typeof NewsContainer>;

const newsResponse: NewsArrayResponse = {
  news: [
    {
      id: "test",
      title: BaseNewsTitle,
      publishedAt: BaseNewsDate,
      category: { name: BaseNewsType },
    },
    {
      id: "test",
      title: BaseNewsTitle,
      publishedAt: BaseNewsDate,
      category: { name: BaseNewsType },
    },
  ],
};

const Template: ComponentStory<typeof NewsContainer> = () => {
  return <NewsContainer {...newsResponse} />;
};

export const Normal = Template.bind({});
