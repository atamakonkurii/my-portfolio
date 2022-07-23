import Link from "next/link";
import type { FC } from "react";
import { SiteLogo } from "src/component/atoms/Svg/SiteLogo";

export const StandardHeader: FC = () => {
  return (
    <header className="fixed top-0 left-0 bg-white/30">
      <div className="flex items-center ml-8 w-screen h-12">
        <Link href="/">
          <a>
            <SiteLogo color={"black"} height={30} width={54} />
          </a>
        </Link>
      </div>
    </header>
  );
};
