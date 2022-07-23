import Link from "next/link";
import type { FC } from "react";
import { SiteLogo } from "src/component/atoms/Svg/SiteLogo";

export const StandardHeader: FC = () => {
  return (
    <header className="bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="flex items-center ml-8 h-14">
        <Link href="/">
          <a>
            <SiteLogo color={"white"} height={30} width={54} />
          </a>
        </Link>
      </div>
    </header>
  );
};
