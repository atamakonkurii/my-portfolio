import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { NoPageContainer } from "./NoPageContainer";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Templates/NoPageContainer ",
  component: NoPageContainer,
} as ComponentMeta<typeof NoPageContainer>;

const Template: ComponentStory<typeof NoPageContainer> = () => {
  return <NoPageContainer />;
};

export const Normal = Template.bind({});
