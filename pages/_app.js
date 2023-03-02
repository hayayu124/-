import React, { useEffect } from "react";
import "../styles/base.css";
import "../styles/global.scss";
import "../styles/rosetiqueCommonStyle.scss";
import TagManager from "react-gtm-module";

import Head from "next/head";
import Header from "../components/header.js";
import Footer from "../components/footer.js";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-W5Q8GBS" });
  }, []);

  // サイトタイトル
  const siteTitle = "Rosetique カタログサイト";

  return (
    <>
      <Head>
        <title>
          ROSETIQUE by Miwako | 日本発、お花に特化したライフスタイルブランド
        </title>
        <meta
          name="description"
          content="日本を代表する育種家、今井清氏のバラを日本全国へ世界へと普及する東京のアンテナショップです。今井清氏の種苗普及を通して、海外品種バラが大半を占める日本の花市場を活性化させ、国産バラ普及に向けて様々な取り組みを展開しています。"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Alkalami&family=Arbutus+Slab&family=Noto+Serif+JP:wght@300;600&family=Zen+Kaku+Gothic+New:wght@700&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* OGP&favicon */}
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:locale" content="ja_JP" />

        <meta property="og:title" content={siteTitle} />
        <meta
          property="og:description"
          content="日本を代表する育種家、今井清氏のバラを日本全国へ世界へと普及する東京のアンテナショップです。今井清氏の種苗普及を通して、海外品種バラが大半を占める日本の花市場を活性化させ、国産バラ普及に向けて様々な取り組みを展開しています。"
        />
        <meta property="og:url" content="https://lordsmobile-g1.com/" />
        <meta property="og:image" content="/img/ogp.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="noindex,nofollow" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/fav/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/fav/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/fav/favicon-16x16.png"
        />
        <link rel="manifest" href="/fav/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/fav/safari-pinned-tab.svg"
          color="#d9795a"
        />
        <link rel="shortcut icon" href="/fav/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/fav/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
