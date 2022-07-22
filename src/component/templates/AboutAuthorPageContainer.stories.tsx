import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { AboutAuthorPageContainer } from "./AboutAuthorPageContainer";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Templates/AboutAuthorPageContainer ",
  component: AboutAuthorPageContainer,
} as ComponentMeta<typeof AboutAuthorPageContainer>;

const Template: ComponentStory<typeof AboutAuthorPageContainer> = () => {
  return <AboutAuthorPageContainer qiitaPosts={[]} zennPosts={[]} />;
};

export const Normal = Template.bind({});
