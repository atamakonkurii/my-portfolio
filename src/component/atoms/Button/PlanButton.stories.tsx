import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { PlanButton } from "./PlanButton";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Atoms/Button/PlanButton",
  component: PlanButton,
} as ComponentMeta<typeof PlanButton>;

const Template: ComponentStory<typeof PlanButton> = () => {
  return <PlanButton text={"コーヒーを奢る"} paymentLink={"/no_page"} />;
};

export const Normal = Template.bind({});
