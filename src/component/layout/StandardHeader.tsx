import Link from "next/link";
import type { FC } from "react";
import { SiteLogo } from "src/component/atoms/Svg/SiteLogo";

export const StandardHeader: FC = () => {
  return (
    <header className="fixed top-0 left-0 bg-white/0">
      <div className="flex items-center ml-8 w-screen h-16">
        <Link href="/">
          <a>
            <SiteLogo color={"rgb(99 102 241)"} height={40} width={70} />
          </a>
        </Link>
      </div>
    </header>
  );
};
