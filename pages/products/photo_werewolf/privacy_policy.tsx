import type { CustomNextPage } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { PhotoWerewolfPrivacyPolicy } from "src/pages/products/photo_werewolf/privacy_policy";

const PhotoWerewolfPrivacyPolicyPage: CustomNextPage = () => {
  return <PhotoWerewolfPrivacyPolicy />;
};

PhotoWerewolfPrivacyPolicyPage.getLayout = StandardLayout;

export default PhotoWerewolfPrivacyPolicyPage;
