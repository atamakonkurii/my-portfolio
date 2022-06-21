import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";
import {
  BaseNewsDate,
  BaseNewsTitle,
  BaseNewsType,
} from "src/constants/baseText";

import { NewsElement } from "./NewsElement";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Molecules/NewsElement",
  component: NewsElement,
} as ComponentMeta<typeof NewsElement>;

const Template: ComponentStory<typeof NewsElement> = () => {
  return (
    <NewsElement
      date={BaseNewsDate}
      typeOfNews={BaseNewsType}
      title={BaseNewsTitle}
    />
  );
};

export const Normal = Template.bind({});
