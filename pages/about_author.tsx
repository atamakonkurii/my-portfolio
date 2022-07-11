import type { CustomNextPage } from "next";
import { StandardLayout } from "src/component/layout/StandardLayout";
import { AboutAuthorPage } from "src/pages/about_author";

const AboutAuthor: CustomNextPage = () => {
  return <AboutAuthorPage />;
};

AboutAuthor.getLayout = StandardLayout;

export default AboutAuthor;
