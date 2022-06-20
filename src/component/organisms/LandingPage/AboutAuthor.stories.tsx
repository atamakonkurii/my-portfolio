import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { AboutAuthor } from "./AboutAuthor";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Organisms/LandingPage/AboutAuthor",
  component: AboutAuthor,
} as ComponentMeta<typeof AboutAuthor>;

const Template: ComponentStory<typeof AboutAuthor> = () => {
  return <AboutAuthor />;
};

export const Normal = Template.bind({});
