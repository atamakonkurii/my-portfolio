import type { CustomNextPage } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { PhotoWerewolfIndex } from "src/pages/products/photo_werewolf";

const PhotoWerewolfPage: CustomNextPage = () => {
  return <PhotoWerewolfIndex />;
};

PhotoWerewolfPage.getLayout = StandardLayout;

export default PhotoWerewolfPage;
