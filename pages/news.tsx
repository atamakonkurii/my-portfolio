import type { CustomNextPage } from "next";
import type { GetStaticProps } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { microCmsClient } from "src/lib/microCmsClient";
import { News } from "src/pages/news";
import type { NewsResponse } from "src/type/types";

export const getStaticProps: GetStaticProps = async () => {
  const data = await microCmsClient.get({
    endpoint: "news",
    queries: {
      orders: "-publishedAt",
      fields: "id,title,publishedAt,category.name",
    },
  });
  return {
    props: {
      news: data.contents,
    },
  };
};

const NewsPage: CustomNextPage<NewsResponse> = (props) => {
  const newsResponse = props;
  return <News {...newsResponse} />;
};

NewsPage.getLayout = StandardLayout;

export default NewsPage;
