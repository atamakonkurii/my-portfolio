import { SimpleLinkButton } from "src/component/atoms/Button/SimpleLinkButton";
import { ArticleWork } from "src/component/molecules/ArticleWork";

type Feed = {
  title: string;
  link: string;
  isoDate: string;
};

type Props = {
  zennPosts: Array<Feed>;
};

export const ZennPostsIndex = ({ zennPosts }: Props) => {
  return (
    <div>
      <div className="divide-y divide-slate-300">
        {zennPosts.map((post: Feed, index: number) => {
          //最新3件のみ表示
          if (index >= 3) {
            return;
          } else {
            return (
              <div key={post.title} className="flex items-center px-3 h-20">
                <ArticleWork
                  title={post.title}
                  link={post.link}
                  isoDate={post.isoDate}
                  service={"zenn"}
                />
              </div>
            );
          }
        })}
      </div>
      <div className="mt-4 text-center">
        <SimpleLinkButton
          text={"zenn記事一覧を見る"}
          href={"https://zenn.dev/atakon"}
        />
      </div>
    </div>
  );
};
