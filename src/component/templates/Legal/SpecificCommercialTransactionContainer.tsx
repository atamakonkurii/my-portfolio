import Link from "next/link";

export const SpecificCommercialTransactionContainer = () => {
  return (
    <div className="container mx-auto w-11/12 max-w-5xl">
      <h1 className="mb-8 text-4xl font-bold">特定商取引に基づく表記</h1>
      <h2 className="mt-10 mb-2 text-xl font-semibold">事業者</h2>
      <p className="ml-4">太田和希</p>
      <h2 className="mt-10 mb-2 text-xl font-semibold">事業者の所在</h2>
      <div className="ml-4">
        <p>〒467-0837</p>
        <p>愛知県名古屋市瑞穂区花目町2-16-1 LaBala堀田</p>
        <p>
          ※電話番号開示を希望される場合はご連絡いただければ遅延なく開示いたします。
        </p>
        <p>
          ※お問い合わせは下記のメールアドレスもしくはお問合せフォームからのみ受け付けています。
        </p>
      </div>
      <h2 className="mt-10 mb-2 text-xl font-semibold">お問合せ先</h2>
      <p className="ml-4">atamakonkurii.kazuki@gmail.com</p>
      <h2 className="mt-10 mb-2 text-xl font-semibold">販売価格等</h2>
      <p>商品の価格は消費税、以下の手数料を含む価格で表示されています。</p>
      <ul className="mt-2 ml-8 list-disc">
        <li>決済手数料:商品販売対価の3.6%</li>
      </ul>
      <h2 className="mt-10 mb-2 text-xl font-semibold">お支払い方法</h2>
      <div className="ml-4">
        <p>
          クレジットカード(Visa / Master / American Express ), Apple pay, Google
          pay
        </p>
        <p className="mt-2">
          支払い時期：商品の購入時に決済させていただきます。ご請求日はご利用のクレジットカードの締め日や契約内容により異なります。ご利用のカード会社までお問合せください。
        </p>
      </div>
      <h2 className="mt-10 mb-2 text-xl font-semibold">
        個人情報の取り扱いについて
      </h2>
      <p>
        <Link href="/privacy_policy">
          <a className="text-blue-500">プライバシーポリシー</a>
        </Link>
        をご参照ください。
      </p>
      <h2 className="mt-10 mb-2 text-xl font-semibold">商品の引き渡し時期</h2>
      <p>商品の性質上、引き渡しはありません。</p>
      <h2 className="mt-10 mb-2 text-xl font-semibold">キャンセルについて</h2>
      <p>
        購入の申込の撤回、変更、払い戻しには一切応じられません。間違えて購入した場合でも、返金は致しかねますので、予めご了承ください。
      </p>
    </div>
  );
};
