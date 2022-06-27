import type { CustomNextPage } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { SpecificCommercialTransaction } from "src/pages/index/specific_commercial_transaction";

const SpecificCommercialTransactionPage: CustomNextPage = () => {
  return <SpecificCommercialTransaction />;
};

SpecificCommercialTransactionPage.getLayout = StandardLayout;

export default SpecificCommercialTransactionPage;
