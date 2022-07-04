import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";
import {
  BaseNewsDate,
  BaseNewsTitle,
  BaseNewsType,
} from "src/constants/baseText";
import type { LandingPageNews } from "src/type/types";

import { LpNews } from "./LpNews";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Organisms/LandingPage/LpNews",
  component: LpNews,
} as ComponentMeta<typeof LpNews>;

const landingPageNews: LandingPageNews = {
  id: "test",
  title: BaseNewsTitle,
  publishedAt: BaseNewsDate,
  categoryName: BaseNewsType,
};

const Template: ComponentStory<typeof LpNews> = () => {
  return <LpNews {...landingPageNews} />;
};

export const Normal = Template.bind({});
