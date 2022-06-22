/* eslint-disable @next/next/no-html-link-for-pages */
export const NoPageContainer = () => {
  return (
    <div className="pt-16">
      <div className="flex justify-center text-3xl font-bold">
        このページは作成中です。
      </div>
      <img
        src={"/img/ojigi_animal_inu.png"}
        className="mx-auto"
        alt="inu"
        width={300}
      />
      <a
        href="/"
        className="flex justify-center pt-4 pb-8 text-xl font-bold text-blue-500 hover:opacity-50"
      >
        ホームに戻る
      </a>
    </div>
  );
};
