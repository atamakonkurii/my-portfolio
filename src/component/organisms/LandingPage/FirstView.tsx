import type { FC } from "react";
import { CTAButton } from "src/component/atoms/Button";
import { SiteLogo } from "src/component/atoms/Svg/SiteLogo";
import { FirstViewSmallText } from "src/component/atoms/Text";

export const FirstView: FC = () => {
  return (
    <div className="pb-16 bg-gradient-to-r from-sky-500 to-indigo-500 ">
      {/* TODO:画像がバックグラウンドで設定できるようにする */}
      {/* <div className="pb-8 bg-[url('/img/ramen.jpg')]"></div> */}
      <div className="pt-8 text-center">
        <FirstViewSmallText text="おごられたいを前面に出したポートフォリオサイト" />
      </div>
      <div className="flex justify-center pt-4">
        <SiteLogo />
      </div>
      <div className="pt-8 text-center">
        <CTAButton text="とりあえずおごる！" />
      </div>
    </div>
  );
};
