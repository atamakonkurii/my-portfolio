/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import { LandingPageTitle } from "src/component/atoms/Text/LandingPageTitle";
import { PhotoWerewolfTitle } from "src/constants/baseText";

export const PhotoWerewolf = () => {
  return (
    <div className="container mx-auto w-11/12 max-w-lg">
      <LandingPageTitle text={PhotoWerewolfTitle} />
      <div>
        <img src="/img/photo_werewolf_icon.webp" className="pt-4 mx-auto" />
      </div>

      <div className="pt-8 text-lg font-bold">
        <p>ご自身のスマホの写真を使って騙し合う、新感覚の人狼ゲーム!</p>
        <p>
          気心知れた友達と遊ぶのはもちろん、関係性がまだ構築できていな歓迎会や初対面で遊んでも盛り上がります！
        </p>
      </div>
      <div className="pt-8">
        <Link
          href={
            "https://apps.apple.com/jp/app/%E5%86%99%E7%9C%9F%E4%BA%BA%E7%8B%BC/id6448245862"
          }
        >
          <img src="/img/App_Store_Badge.png" className="mx-auto" />
        </Link>
      </div>
      <div className="pt-4">
        <p className="py-2"># ルール概要</p>
        <p>人狼は二人固定で、それ以外のプレイヤーは市民です。</p>
        <p>各人のスマホの画像の中から一枚を選び、それについて語ります。</p>
        <p>
          ただ、人狼同士は写真が入れ替わっており、自分の写真ではないことに対して語らなければなりません。
        </p>
        <p>
          市民は嘘をついている人狼を見つけ出す、人狼は嘘がバレないようにするゲームです。
        </p>
      </div>
      <div>
        <img src="/img/photo_werewolf_summary.webp" className="pt-4 mx-auto" />
      </div>

      <div className="pt-8">
        <Link href={"/products/photo_werewolf/privacy_policy"}>
          <a className="py-3 text-blue-500">{"プライバシーポリシー"}</a>
        </Link>
      </div>
    </div>
  );
};
