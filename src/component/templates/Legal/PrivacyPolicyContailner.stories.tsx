import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { PrivacyPolicyContainer } from "./PrivacyPolicyContainer";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Templates/Legal/PrivacyPolicyContainer ",
  component: PrivacyPolicyContainer,
} as ComponentMeta<typeof PrivacyPolicyContainer>;

const Template: ComponentStory<typeof PrivacyPolicyContainer> = () => {
  return <PrivacyPolicyContainer />;
};

export const Normal = Template.bind({});
