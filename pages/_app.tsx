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
        <title>おごってください！</title>
        <meta property="og:title" content="おごってください！" />
        <meta
          property="og:description"
          content="おごられたいを前面に出したポートフォリオサイト"
        />
        <meta
          property="og:image"
          content="https://kazukiohta.com/img/ogp.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#64748b" />
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
