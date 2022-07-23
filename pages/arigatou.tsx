import type { CustomNextPage } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { ArigatouPage } from "src/pages/arigatou";

const Arigatou: CustomNextPage = () => {
  return <ArigatouPage />;
};

Arigatou.getLayout = StandardLayout;

export default Arigatou;
