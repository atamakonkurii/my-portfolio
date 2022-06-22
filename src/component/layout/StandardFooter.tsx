/* eslint-disable @next/next/no-html-link-for-pages */
import type { FC } from "react";
import { SiteLogo } from "src/component/atoms/Svg/SiteLogo";

export const StandardFooter: FC = () => {
  return (
    <footer className="bg-black">
      <div className="pt-8 pl-8 text-sm text-white">
        <SiteLogo color={"white"} height={40} width={70} />
        <div className="pt-6 ">
          <a href="/no_page">お問合せ</a>
        </div>

        <div className="pt-4">
          <a href="/no_page">利用規約</a>
        </div>

        <div className="pt-4">
          <a href="/no_page">プライバシーポリシー</a>
        </div>

        <div className="pt-4">
          <a href="/no_page">特定商取引法に基づく表記</a>
        </div>

        <div className="py-4 pr-4 text-xs text-right">
          ©︎2022 OGOTTE KUDASAI
        </div>
      </div>
    </footer>
  );
};
