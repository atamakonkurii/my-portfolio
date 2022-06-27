import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { SpecificCommercialTransactionContainer } from "./SpecificCommercialTransactionContainer";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Templates/Legal/SpecificCommercialTransactionContainer ",
  component: SpecificCommercialTransactionContainer,
} as ComponentMeta<typeof SpecificCommercialTransactionContainer>;

const Template: ComponentStory<
  typeof SpecificCommercialTransactionContainer
> = () => {
  return <SpecificCommercialTransactionContainer />;
};

export const Normal = Template.bind({});
