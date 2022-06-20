import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { Plan } from "./Plan";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Molecules/Plan",
  component: Plan,
} as ComponentMeta<typeof Plan>;

const Template: ComponentStory<typeof Plan> = () => {
  return (
    <Plan price={"¥1,000"} imageUrl={"/img/ramen.jpg"} title={"コーヒー代"} />
  );
};

export const Normal = Template.bind({});
