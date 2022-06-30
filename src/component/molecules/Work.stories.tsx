import type { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line no-restricted-imports
import React from "react";

import { Work } from "./Work";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Molecules/Work",
  component: Work,
} as ComponentMeta<typeof Work>;

const Template: ComponentStory<typeof Work> = () => {
  return (
    <Work
      text={"スマホの画像で騙し合うゲーム"}
      imageUrl={"/img/ramen.jpg"}
      title={"写真人狼"}
      link={"https://www.google.co.jp/"}
    />
  );
};

export const Normal = Template.bind({});
