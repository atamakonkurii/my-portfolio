import type { CustomNextPage } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { PrivacyPolicy } from "src/pages/index/privacy_policy";

const PrivacyPolicyPage: CustomNextPage = () => {
  return <PrivacyPolicy />;
};

PrivacyPolicyPage.getLayout = StandardLayout;

export default PrivacyPolicyPage;
