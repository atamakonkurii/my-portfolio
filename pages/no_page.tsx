import type { CustomNextPage } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { NoPage } from "src/pages/no_page";

const No: CustomNextPage = () => {
  return <NoPage />;
};

No.getLayout = StandardLayout;

export default No;
