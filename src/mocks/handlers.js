import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://ogotte-kudasai.microcms.io/api/v1/news",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          contents: [
            {
              id: "qtht21352",
              title: "200円おごっていただきました！",
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
  ),
];
