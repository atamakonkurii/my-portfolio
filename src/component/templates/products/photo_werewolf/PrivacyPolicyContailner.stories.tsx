import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { PhotoWerewolfPrivacyPolicyContainer } from "./PhotoWerewolfPrivacyPolicyContainer";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Templates/Products/PhotoWerewolfPrivacyPolicyContainer ",
  component: PhotoWerewolfPrivacyPolicyContainer,
} as ComponentMeta<typeof PhotoWerewolfPrivacyPolicyContainer>;

const Template: ComponentStory<
  typeof PhotoWerewolfPrivacyPolicyContainer
> = () => {
  return <PhotoWerewolfPrivacyPolicyContainer />;
};

export const Normal = Template.bind({});
