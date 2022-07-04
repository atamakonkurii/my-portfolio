import type { FC } from "react";
import { NewsType } from "src/component/atoms/Text/NewsType";
import type { NewsArrayResponse } from "src/type/types";

export const ShowNewsContainer: FC<NewsArrayResponse> = () => {
  return (
    <div className="container my-16 mx-auto w-11/12 max-w-lg">
      <h1 className="text-3xl font-bold">
        初売上！合計400円おごっていただきました！
      </h1>
      <div className="mt-4 text-slate-500">2022年6月28日</div>
      <div className="mt-2">
        <NewsType typeOfNews={"新機能"} />
      </div>

      <div className="mt-4 whitespace-pre-line">
        本日4人の方から合計400円おごっていただきました！\n初めての売上、とても嬉しいです。\nこれからも頑張っておもしろいものを開発していきます！
      </div>
    </div>
  );
};
