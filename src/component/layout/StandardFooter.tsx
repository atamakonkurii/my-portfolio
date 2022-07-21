import Link from "next/link";
import type { FC } from "react";
import { SiteLogo } from "src/component/atoms/Svg/SiteLogo";

export const StandardFooter: FC = () => {
  return (
    <footer className="bg-black">
      <div className="pt-8 pl-8 text-sm text-white">
        <Link href="/">
          <a>
            <SiteLogo color={"white"} height={40} width={70} />
          </a>
        </Link>

        <div className="pt-6">
          <Link href="https://forms.gle/Y9EcWWkQdEh2Vf1x5">
            <a target="_blank">お問い合わせ</a>
          </Link>
        </div>

        <div className="pt-4">
          <Link href="/term">
            <a>利用規約</a>
          </Link>
        </div>

        <div className="pt-4">
          <Link href="/privacy_policy">
            <a>プライバシーポリシー</a>
          </Link>
        </div>

        <div className="pt-4">
          <Link href="/specific_commercial_transaction">
            <a>特定商取引法に基づく表記</a>
          </Link>
        </div>

        <div className="py-4 pr-4 text-xs text-right">©︎2022 KAZUKI OHTA</div>

        {/* SNSシェアのアイコンでfooterが隠れるのでpaddingを使う */}
        <div className="pb-12 sm:pb-0"></div>
      </div>
    </footer>
  );
};
