import Link from "next/link";
import type { FC } from "react";
import { SiteLogo } from "src/component/atoms/Svg/SiteLogo";

export const StandardHeader: FC = () => {
  return (
    <header className="bg-slate-700">
      <div className="flex items-center ml-8 h-12">
        <Link href="/">
          <a>
            <SiteLogo color={"white"} height={30} width={54} />
          </a>
        </Link>
      </div>
    </header>
  );
};
