import type { CustomNextPage } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { Term } from "src/pages/index/term";

const TermPage: CustomNextPage = () => {
  return <Term />;
};

TermPage.getLayout = StandardLayout;

export default TermPage;
