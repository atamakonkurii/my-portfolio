import { AboutAuthorPageContainer } from "src/component/templates/AboutAuthorPageContainer";

type Feed = {
  title: string;
  link: string;
  isoDate: string;
};

type Props = {
  qiitaPosts: Array<Feed>;
  zennPosts: Array<Feed>;
};

export const AboutAuthorPage = ({ qiitaPosts, zennPosts }: Props) => {
  return (
    <div>
      <AboutAuthorPageContainer qiitaPosts={qiitaPosts} zennPosts={zennPosts} />
    </div>
  );
};
