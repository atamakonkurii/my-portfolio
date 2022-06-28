import type { GetStaticProps } from "next";
import type { FC } from "react";
import { LandingPage } from "src/component/templates/LandingPage";
import { microCmsClient } from "src/lib/microCmsClient";

export const Index: FC = () => {
  return (
    <div>
      <LandingPage />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await microCmsClient.get({
    endpoint: "news",
    contentId: "fqu2y_4ut7zv",
  });
  return {
    props: {
      news: data.id,
    },
  };
};
