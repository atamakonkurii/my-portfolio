import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";
import { BaseCTAButtonText } from "src/constants/baseText";

import { CTAButton } from "./CTAButton";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Atoms/Button/CTAButton",
  component: CTAButton,
} as ComponentMeta<typeof CTAButton>;

const Template: ComponentStory<typeof CTAButton> = () => {
  return <CTAButton text={BaseCTAButtonText} paymentLink={"/no_page"} />;
};

export const Normal = Template.bind({});
