import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";
import {
  AboutSiteButtonLink,
  AboutSiteButtonText,
} from "src/constants/baseText";

import { SimpleLinkButton } from "./SimpleLinkButton";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Atoms/Button/SimpleLinkButton",
  component: SimpleLinkButton,
} as ComponentMeta<typeof SimpleLinkButton>;

const Template: ComponentStory<typeof SimpleLinkButton> = () => {
  return (
    <SimpleLinkButton text={AboutSiteButtonText} href={AboutSiteButtonLink} />
  );
};

export const Normal = Template.bind({});
