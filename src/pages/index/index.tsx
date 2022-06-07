import type { FC } from "react";
import { Button } from "src/component/Button";

import { SiteLogo } from "@/component/atoms/Svg/SiteLogo";

export const Index: FC = () => {
  const handleClick = () => {
    window.alert("Hello, World!");
  };

  return (
    <div>
      <h2>Index</h2>
      <SiteLogo />
      <Button tag="button" className="p-2" onClick={handleClick}>
        Click me!
      </Button>
    </div>
  );
};
