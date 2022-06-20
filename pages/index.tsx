import type { CustomNextPage } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { Index } from "src/pages/index";

const IndexPage: CustomNextPage = () => {
  return <Index />;
};

IndexPage.getLayout = StandardLayout;

export default IndexPage;
