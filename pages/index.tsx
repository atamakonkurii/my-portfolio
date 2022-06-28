import type { CustomNextPage } from "next";
import type { GetStaticProps } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { microCmsClient } from "src/lib/microCmsClient";
import { Index } from "src/pages/index";
import type { IndexPageNews } from "src/type/types";

export const getStaticProps: GetStaticProps = async () => {
  const data = await microCmsClient.get({
    endpoint: "news",
    queries: {
      limit: 1,
      orders: "-publishedAt",
      fields: "id,title,publishedAt,category.name",
    },
  });
  return {
    props: {
      news: data.contents[0],
    },
  };
};

const IndexPage: CustomNextPage = (news) => {
  // eslint-disable-next-line react/destructuring-assignment
  const tmp: any = news.news;
  const indexPageNews: IndexPageNews = {
    id: tmp.id,
    title: tmp.title,
    publishedAt: tmp.publishedAt,
    categoryName: tmp.category.name,
  };
  return <Index {...indexPageNews} />;
};

IndexPage.getLayout = StandardLayout;

export default IndexPage;
