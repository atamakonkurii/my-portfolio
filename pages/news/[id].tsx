import type { CustomNextPage } from "next";
import type { GetStaticProps } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { microCmsClient } from "src/lib/microCmsClient";
import { ShowNews } from "src/pages/news/[id]";
import type { NewsShowResponse } from "src/type/types";

export const getStaticPaths = async () => {
  const data = await microCmsClient.get({
    endpoint: "news",
  });
  // eslint-disable-next-line arrow-body-style
  const paths = data.contents.map((content: { id: string }) => {
    return `/news/${content.id}`;
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = String(context?.params?.id);
  const data = await microCmsClient.get({ endpoint: "news", contentId: id });

  return {
    props: {
      news: data,
    },
  };
};

const ShowNewsPage: CustomNextPage<NewsShowResponse> = (props) => {
  const newsShowResponse = props;
  return <ShowNews {...newsShowResponse} />;
};

ShowNewsPage.getLayout = StandardLayout;

export default ShowNewsPage;
