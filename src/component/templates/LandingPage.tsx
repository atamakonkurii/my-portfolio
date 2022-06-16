import {
  AboutSite,
  BuyMeThings,
  FirstView,
  GoodForUs,
  News,
  Portfolio,
} from "src/component/organisms/LandingPage";
import { AboutAuthor } from "src/component/organisms/LandingPage/AboutAuthor";

export const LandingPage = () => {
  return (
    <div>
      <FirstView />
      <div className="bg-slate-50">
        <div className="pt-16">
          <News />
        </div>
        <div className="pt-16">
          <GoodForUs />
        </div>
        <div className="pt-16">
          <AboutSite />
        </div>
        <div className="pt-16">
          <AboutAuthor />
        </div>
        <div className="pt-16">
          <Portfolio />
        </div>
        <div className="pt-16">
          <BuyMeThings />
        </div>
      </div>
    </div>
  );
};
