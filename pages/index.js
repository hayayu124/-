import React, { useState, useEffect } from "react";
import cn from "../components/toppage.module.scss";
import Head from "next/head";
import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

export default function Top() {
  // refをtrueで初期化。

  // サイトタイトル
  const siteTitle = "ロードモバイル×LinQ 2チーム対抗バトル";

  return (
    <>
      <Head>
        <title>ロードモバイル×LinQ 2チーム対抗バトル</title>
        <meta name="description" content={siteTitle} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Alkalami&family=Arbutus+Slab&family=Noto+Serif+JP:wght@500&family=Zen+Kaku+Gothic+New:wght@700&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Alkalami&family=Arbutus+Slab&family=Noto+Serif+JP:wght@500;700&family=Zen+Kaku+Gothic+New:wght@700&display=swap"
          rel="stylesheet"
        />

        {/* OGP&favicon */}
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:locale" content="ja_JP" />

        <meta property="og:title" content={siteTitle} />
        <meta
          property="og:description"
          content="人気スマホゲームアプリ「ロードモバイル」のイベントにLinQが2チームに分かれて参戦！"
        />
        <meta property="og:url" content="https://lordsmobile-g1.com/" />
        <meta property="og:image" content="/img/lordsmobile_site_ogp.png" />
        <meta property="og:type" content="website" />

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

      {/* KV */}
      {/* header */}
      <div className={`${cn.header} ${cn.backColor1}`}>
        <div className={`${cn.headerContents} grid1`}>
          <div className={`${cn.headerLogo}`}>
            <img src="/img/logo_tendency.png" alt="" />
          </div>

          <div className={`${cn.headerMenuColumn}`}>
            <div className={`${cn.headerMenu} `}>
              <h5>News</h5>
            </div>
            <div className={`${cn.headerMenu}`}>
              <h5>コレクション</h5>
            </div>
            <div className={`${cn.headerMenu}`}>
              <h5>お気に入り</h5>
            </div>
            <div className={`${cn.headerMenu}`}>
              <h5>お問い合わせ</h5>
            </div>
            <div className={`${cn.headerMenu}`}>
              <h5>EN/JP</h5>
            </div>
          </div>
        </div>
      </div>

      {/* kv */}
      <div className={cn.kv}>
        <div className={`${cn.kvTitleColumn}`}>
          <div className={`${cn.kvSubTitle} `}>
            <h5>
              The Rose Maker IMAI KIYOSHI
              <br />
              Cut Rose Collection
            </h5>
          </div>
          <div className={`${cn.kvTitle}`}>
            <h1>Rosetique Japan</h1>
          </div>
        </div>
      </div>

      {/* about */}
      <section className={cn.about}>
        <div className={cn.aboutDecoration}>
          <img src="/img/about.png" alt="" />
        </div>

        <div className={cn.aboutDecoration2}>
          <img src="/img/flower_1.jpg" alt="" />
        </div>

        <div className={cn.aboutColumn} tex-c>
          <div className={cn.aboutTittle}>
            <h2>Rosetique Japan</h2>
          </div>

          <div className={`${cn.aboutText} mar-t2`}>
            <h5>
              日本を代表する育種家今井清氏のバラを日本全国へ世界へと普及する
              <br />
              東京のアンテナショップとしての役割を担います。
              <br />
              今井清氏の種苗普及を通して、海外品種バラが大半を占める
              <br />
              日本の花市場を活性化させ、国産バラ普及に向けて
              <br />
              様々な取り組みを展開しています。
            </h5>
          </div>
        </div>

        <div className={cn.aboutDecoration3}>
          <img src="/img/flower_2.jpg" alt="" />
        </div>
      </section>
    </>
  );
}
