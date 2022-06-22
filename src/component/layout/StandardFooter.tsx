import Link from "next/link";
import type { FC } from "react";
import { SiteLogo } from "src/component/atoms/Svg/SiteLogo";

export const StandardFooter: FC = () => {
  return (
    <footer className="bg-black">
      <div className="pt-8 pl-8 text-sm text-white">
        <SiteLogo color={"white"} height={40} width={70} />
        <div className="pt-6 ">
          <Link href="/no_page">
            <a>お問合せ</a>
          </Link>
        </div>

        <div className="pt-4">
          <Link href="/no_page">
            <a>利用規約</a>
          </Link>
        </div>

        <div className="pt-4">
          <Link href="/no_page">
            <a>プライバシーポリシー</a>
          </Link>
        </div>

        <div className="pt-4">
          <Link href="/no_page">
            <a>特定商取引法に基づく表記</a>
          </Link>
        </div>

        <div className="py-4 pr-4 text-xs text-right">
          ©︎2022 OGOTTE KUDASAI
        </div>
      </div>
    </footer>
  );
};
