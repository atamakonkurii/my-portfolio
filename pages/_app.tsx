import "../src/style/index.css";

import type { CustomAppPage } from "next/app";
import Head from "next/head";
import { GoogleAnalytics, usePageView } from "src/lib/gtag";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  usePageView();

  return (
    <>
      <GoogleAnalytics />
      <Head>
        <title>おごってください！</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
