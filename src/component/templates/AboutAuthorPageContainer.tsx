import { AboutAuthorElement } from "src/component/molecules/AboutAuthorElement";
import { ArticleWork } from "src/component/molecules/ArticleWork";

type Feed = {
  title: string;
  link: string;
  isoDate: string;
};

type Props = {
  qiitaPosts: Array<Feed>;
  zennPosts: Array<Feed>;
};

export const AboutAuthorPageContainer = ({ qiitaPosts, zennPosts }: Props) => {
  return (
    <div className="container py-16 mx-auto w-11/12 max-w-lg">
      <div className="flex justify-center text-3xl font-bold">作者について</div>
      <AboutAuthorElement />
      <div className="flex justify-center mt-16 text-2xl font-medium">
        最新執筆記事
      </div>
      <div className="mt-8">
        {zennPosts.map((post: Feed) => {
          return (
            <div key={post.title}>
              <ArticleWork
                title={post.title}
                link={post.link}
                isoDate={post.isoDate}
                service={"zenn"}
              />
            </div>
          );
        })}
      </div>

      <div className="mt-32 mb-16">
        {qiitaPosts.map((post: Feed) => {
          return (
            <div key={post.title}>
              <ArticleWork
                title={post.title}
                link={post.link}
                isoDate={post.isoDate}
                service={"qiita"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
