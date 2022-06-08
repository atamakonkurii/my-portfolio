import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { FirstView } from "./FirstView";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Organisms/LandingPage/FirstView",
  component: FirstView,
} as ComponentMeta<typeof FirstView>;

const Template: ComponentStory<typeof FirstView> = () => {
  return <FirstView />;
};

export const Normal = Template.bind({});
