import "../src/style/index.css";

import type { CustomAppPage } from "next/app";
import Head from "next/head";
import { GoogleAnalytics, usePageView } from "src/lib/gtag";
import { MockServer } from "src/mocks/worker";

if (process.env.NODE_ENV === "development") {
  MockServer();
}

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
        <title>自己紹介</title>
        <meta property="og:title" content="自己紹介！" />
        <meta property="og:description" content="自己紹介" />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#334155" />
        <link
          rel="apple-touch-icon"
          href="apple-touch-icon.png"
          sizes="180x180"
        ></link>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
