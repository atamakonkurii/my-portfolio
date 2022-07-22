import { AboutAuthorElement } from "src/component/molecules/AboutAuthorElement";
import { ArticleWork } from "src/component/molecules/ArticleWork";
import { ZennPostsIndex } from "src/component/molecules/ZennPostsIndex";

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
      <ZennPostsIndex zennPosts={zennPosts} />

      <div className="mt-12 divide-y divide-slate-300">
        {qiitaPosts.map((post: Feed, index) => {
          //最新3件のみ表示
          if (index >= 3) {
            return;
          }

          return (
            <div key={post.title} className="flex items-center px-3 h-20">
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
