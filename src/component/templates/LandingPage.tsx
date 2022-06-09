import {
  AboutSite,
  FirstView,
  GoodForUs,
} from "src/component/organisms/LandingPage";

export const LandingPage = () => {
  return (
    <div>
      <FirstView />
      <div className="pt-16">
        <GoodForUs />
      </div>
      <div className="pt-16">
        <AboutSite />
      </div>
    </div>
  );
};
