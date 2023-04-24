import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { PhotoWerewolf } from "./index";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Templates/Products/PhotoWerewolf ",
  component: PhotoWerewolf,
} as ComponentMeta<typeof PhotoWerewolf>;

const Template: ComponentStory<typeof PhotoWerewolf> = () => {
  return <PhotoWerewolf />;
};

export const Normal = Template.bind({});
