import type { GetStaticProps } from "next";
import Parser from "rss-parser";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { AboutAuthorPage } from "src/pages/about_author";

type Feed = {
  title: string;
  link: string;
  isoDate: string;
};

type Props = {
  qiitaPosts: Array<Feed>;
  zennPosts: Array<Feed>;
};

const AboutAuthor = ({ qiitaPosts, zennPosts }: Props) => {
  return <AboutAuthorPage qiitaPosts={qiitaPosts} zennPosts={zennPosts} />;
};

AboutAuthor.getLayout = StandardLayout;

export default AboutAuthor;

export const getStaticProps: GetStaticProps = async () => {
  const parser = new Parser();

  const feedQiita = await parser.parseURL(
    "https://qiita.com/atamakonkurii/feed.atom"
  );
  const feedZenn = await parser.parseURL("https://zenn.dev/atakon/feed");

  return {
    props: {
      qiitaPosts: feedQiita.items,
      zennPosts: feedZenn.items,
    },
  };
};
