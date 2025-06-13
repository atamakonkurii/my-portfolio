import { rest } from "msw";

export const fetchNewsIndexAtLp200Handler = rest.get(
  "https://ogotte-kudasai.microcms.io/api/v1/news?fields=id%2Ctitle%2CpublishedAt%2Ccategory.name&limit=1&orders=-publishedAt",
  (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        contents: [
          {
            id: "qtht21352",
            title: "新しいプロジェクトを開始しました！",
            publishedAt: "2022-06-29T12:40:06.805Z",
            category: {
              name: "お知せ",
            },
          },
        ],
        totalCount: 2,
        offset: 0,
        limit: 1,
      })
    );
  }
);

export const fetchNewsIndex200Handler = rest.get(
  "https://ogotte-kudasai.microcms.io/api/v1/news",
  (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        contents: [
          {
            id: "qtht21352",
            createdAt: "2022-06-29T12:40:06.805Z",
            updatedAt: "2022-06-29T12:40:28.877Z",
            publishedAt: "2022-06-29T12:40:06.805Z",
            revisedAt: "2022-06-29T12:40:28.877Z",
            title: "ポートフォリオサイトをリニューアルしました！",
            category: {
              id: "5q5bpy18sj",
              createdAt: "2022-05-26T14:27:27.918Z",
              updatedAt: "2022-05-26T14:57:08.990Z",
              publishedAt: "2022-05-26T14:27:27.918Z",
              revisedAt: "2022-05-26T14:57:08.990Z",
              name: "お知らせ",
            },
            content:
              "ポートフォリオサイトのデザインを一新しました！\nより見やすく、使いやすくなりました。\nこれからも頑張っておもしろいものを開発していきます！",
          },
          {
            id: "0wnpekb-k6",
            createdAt: "2022-06-28T23:24:35.447Z",
            updatedAt: "2022-06-28T23:24:35.447Z",
            publishedAt: "2022-06-28T23:24:35.447Z",
            revisedAt: "2022-06-28T23:24:35.447Z",
            title: "お知らせ機能をリリースしました",
            category: {
              id: "68v4028qkb94",
              createdAt: "2022-05-26T14:27:28.008Z",
              updatedAt: "2022-06-29T12:34:16.959Z",
              publishedAt: "2022-05-26T14:27:28.008Z",
              revisedAt: "2022-06-29T12:34:16.959Z",
              name: "新機能",
            },
            content:
              "microCMSで編集したお知らせを表示できるようにするリリースをしました(?)。\nこのようなリリース情報や、お知らせ、障害の情報などを発信します。",
          },
        ],
        totalCount: 2,
        offset: 0,
        limit: 10,
      })
    );
  }
);
