import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { ArigatouPageContainer } from "./ArigatouPageContainer";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Templates/ArigatouPageContainer ",
  component: ArigatouPageContainer,
} as ComponentMeta<typeof ArigatouPageContainer>;

const Template: ComponentStory<typeof ArigatouPageContainer> = () => {
  return <ArigatouPageContainer />;
};

export const Normal = Template.bind({});
