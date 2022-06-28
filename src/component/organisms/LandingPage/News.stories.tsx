import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";
import {
  BaseNewsDate,
  BaseNewsTitle,
  BaseNewsType,
} from "src/constants/baseText";
import type { IndexPageNews } from "src/type/types";

import { News } from "./News";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Organisms/LandingPage/News",
  component: News,
} as ComponentMeta<typeof News>;

const indexPageNews: IndexPageNews = {
  id: "test",
  title: BaseNewsDate,
  publishedAt: BaseNewsType,
  categoryName: BaseNewsTitle,
};

const Template: ComponentStory<typeof News> = () => {
  return <News {...indexPageNews} />;
};

export const Normal = Template.bind({});
