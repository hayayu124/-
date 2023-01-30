import React, { useState, useEffect } from "react";
import cn from "../components/toppage.module.scss";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

export default function Top() {
  //ニュースを自動処理
  const newsColumn = [
    {
      newsPic: "/img/newsPic.jpg",
      newsTitle: "ニュース1",
      newsDescription:
        "ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。",
      newsDate: "2022.04.20",
    },
    {
      newsPic: "/img/newsPic.jpg",
      newsTitle: "ニュース2",
      newsDescription:
        "ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。",
      newsDate: "2022.03.20",
    },
    {
      newsPic: "/img/newsPic.jpg",
      newsTitle: "ニュース3",
      newsDescription:
        "ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。",
      newsDate: "2022.02.29",
    },
  ];

  //花のカラムを自動処理

  const brandNewColumn = [
    {
      flowerPic: "/img/spベイビーカメレオン.jpg",
      flowerName: "SP ベイビーカメレオン",
      flowerDate: "2020-06-11T09:29:41.084Z",
    },
    {
      flowerPic: "/img/spベイビーカメレオン.jpg",
      flowerName: "SP ベイビーカメレオン",
      flowerDate: "2018/02/05",
    },
    {
      flowerPic: "/img/spベイビーカメレオン.jpg",
      flowerName: "SP ベイビーカメレオン",
      flowerDate: "2017/01/05",
    },
    {
      flowerPic: "/img/spベイビーカメレオン.jpg",
      flowerName: "SP ベイビーカメレオン",
      flowerDate: "2019/01/05",
    },
    {
      flowerPic: "/img/spベイビーカメレオン.jpg",
      flowerName: "SP ベイビーカメレオン",
      flowerDate: "2018/12/05",
    },
    {
      flowerPic: "/img/spベイビーカメレオン.jpg",
      flowerName: "SP ベイビーカメレオン",
      flowerDate: "2018/01/04",
    },
    {
      flowerPic: "/img/spベイビーカメレオン.jpg",
      flowerName: "SP ベイビーカメレオン",
      flowerDate: "2018/07/05",
    },
  ];

  var brandNewDisplayColumn = [];
  for (let i = 0; i < 5; i++) {
    brandNewDisplayColumn.push(brandNewColumn[i]);
  }

  return (
    <>
      {/* KV */}

      {/* kv */}
      <div className={cn.kv}>
        <div className={`${cn.kvTitleColumn}`}>
          <div className={`${cn.kvSubTitle} `}>
            <h5 className={`fon4 fon4Sp`}>
              The Rose Maker IMAI KIYOSHI
              <br />
              Cut Rose Collection
            </h5>
          </div>
          <div className={`${cn.kvTitle}`}>
            <h1 className={`fon1 fonSp1`}>Rosetique Japan</h1>
          </div>
        </div>
      </div>

      {/* about */}
      <section className={`${cn.about} sectionSpaceM`}>
        <div className={`${cn.decoration} ${cn.aboutDecoration1}`}>
          <img src="/img/about.png" alt="" />
        </div>

        <div className={`${cn.decoration2} ${cn.aboutDecoration2}`}>
          <img src="/img/flower_1.jpg" alt="" />
        </div>

        <div className={cn.aboutColumn} tex-c>
          <div className={cn.aboutTittle}>
            <h2>Rosetique Japan</h2>
          </div>

          <div className={`${cn.aboutText} mar-t2`}>
            <h5>
              日本を代表する育種家今井清氏のバラを日本全国へ世界へと普及する
              <br className="br" />
              東京のアンテナショップとしての役割を担います。
              <br className="br" />
              今井清氏の種苗普及を通して、海外品種バラが大半を占める
              <br className="br" />
              日本の花市場を活性化させ、国産バラ普及に向けて
              <br className="br" />
              様々な取り組みを展開しています。
            </h5>
          </div>
        </div>

        <div className={`${cn.decoration3} ${cn.aboutDecoration3}`}>
          <img src="/img/flower_2.jpg" alt="" />
        </div>

        <div className={`${cn.decoration4} ${cn.aboutDecoration4} mar-t2`}>
          <img src="/img/flower_1.jpg" alt="" />
        </div>
      </section>

      {/* News */}
      <section className={`${cn.news} sectionSpace`}>
        <div className={`${cn.decoration} ${cn.newsDecoration1}`}>
          <img src="/img/news.png" alt="" />
        </div>
        <div className={`${cn.newsTittle} titleColumn`}>
          <div className={`${cn.newsText} mar-t2`}>
            <h5>お知らせ</h5>

            <h2>News</h2>

            <h5>今井ナーセリーに関する情報を随時発信しています。</h5>
          </div>
        </div>

        {/* ニュースの記事一覧 */}
        <div className={`${cn.newsColumn} newsColumn grid4 sectionSpaceS`}>
          {/* 記事 */}

          {newsColumn.map((el, index) => {
            return (
              <div key={`joinColumn${index}`} className={`newsDetail`}>
                <div className={`newsDetailPic`}>
                  <img src={el.newsPic} alt="" />
                </div>

                <div className={`newsDetailText`}>
                  <h4>{el.newsTitle}</h4>
                  <h6>{el.newsDescription}</h6>

                  <h6 className={`newsDate`}>{el.newsDate}</h6>
                  <div className={`moreViewText`}>
                    <img src="/img/moreViewText.png" alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* もっと見るボタン */}
        <div className={`moreViewButton sectionSpaceS`}>
          <h5 className={`foncolW moreViewButton`}>もっと見る</h5>

          <div className={`borderBlack`}></div>
          <div className={`borderWhite`}></div>
        </div>
      </section>

      {/* Brand-new */}
      <section className={`${cn.collection} sectionSpace`}>
        <div className={`${cn.decoration} ${cn.collectionDecoration1}`}>
          <img src="/img/collection.png" alt="" />
        </div>
        <div className={`${cn.collectionTittle} titleColumn`}>
          <div className={`${cn.collectionText} mar-t2`}>
            <h5>今年の新品種</h5>

            <h2>Brand-new</h2>

            <h5>
              コレクションの説明コレクションの説明コレクションの説明コレクション
              <br className="br" />
              の説明コレクションの説明コレクションの説明コレクションの説明コレク
              <br className="br" />
              ションの説明コレクションの説明
            </h5>
          </div>
        </div>
        {/* フラワーカラム */}
        <div className={`flowerColumn mar-t4 grid1`}>
          {brandNewDisplayColumn.map((el, index) => {
            return (
              <div key={`flowerColumn${index}`} className={`flowerDetail`}>
                <div className={`flowerColumnPic`}>
                  <img src={el.flowerPic} alt="" />
                </div>

                <div className={`flowerName`}>
                  <h6>{el.flowerName}</h6>
                </div>
              </div>
            );
          })}
        </div>

        {/* もっと見るボタン */}
        <div className={`moreViewButton sectionSpaceS`}>
          <h5 className={`foncolW moreViewButton`}>もっと見る</h5>

          <div className={`borderBlack`}></div>
          <div className={`borderWhite`}></div>
        </div>
      </section>

      {/* MIWAKO Tique Serious */}
      <section className={`${cn.collection} sectionSpaceM`}>
        <div className={`${cn.collectionTittle} titleColumn`}>
          <div className={`${cn.collectionText} mar-t2`}>
            <h5>ミワコ ティーク シリーズ</h5>

            <h2>Miwako TIQUE Series</h2>

            <h5>
              コレクションの説明コレクションの説明コレクションの説明コレクション
              <br className="br" />
              の説明コレクションの説明コレクションの説明コレクションの説明コレク
              <br className="br" />
              ションの説明コレクションの説明
            </h5>
          </div>
        </div>
        {/* フラワーカラム */}
        <div className={`flowerColumn mar-t4 grid1`}>
          {brandNewDisplayColumn.map((el, index) => {
            return (
              <div key={`flowerColumn${index}`} className={`flowerDetail`}>
                <div className={`flowerColumnPic`}>
                  <img src={el.flowerPic} alt="" />
                </div>

                <div className={`flowerName`}>
                  <h6>{el.flowerName}</h6>
                </div>
              </div>
            );
          })}
        </div>

        {/* もっと見るボタン */}
        <div className={`moreViewButton sectionSpaceS`}>
          <h5 className={`foncolW moreViewButton`}>もっと見る</h5>

          <div className={`borderBlack`}></div>
          <div className={`borderWhite`}></div>
        </div>
      </section>

      {/* 品種 */}
      <section className={`${cn.collection} sectionSpace mar-b4`}>
        <div className={`${cn.decoration} ${cn.varityDecoration1}`}>
          <img src="/img/varity.png" alt="" />
        </div>
        <div className={`${cn.collectionTittle} titleColumn`}>
          <div className={`${cn.collectionText} mar-t2`}>
            <h5>品種</h5>

            <h2>Variety</h2>

            <h5>
              品種の説明品種の説明品種の説明品種の説明品種の説明品種の説明
              <br className="br" />
              品種の説明品種の説明品種の説明品種の説明品種の説明品種の説明
              <br className="br" />
              品種の説明品種の説明品種の説明品種の説明
              <br className="br" />
            </h5>
          </div>
        </div>

        {/* もっと見るボタン */}
        <div className={`moreViewButton sectionSpaceS`}>
          <h5 className={`foncolW moreViewButton`}>もっと見る</h5>

          <div className={`borderBlack`}></div>
          <div className={`borderWhite`}></div>
        </div>

        {/* フラワーカラム */}
        <div className={`flowerColumn mar-t4`}>
          {brandNewDisplayColumn.map((el, index) => {
            return (
              <div key={`flowerColumn${index}`} className={`flowerDetail`}>
                <div className={`flowerColumnPic`}>
                  <img src={el.flowerPic} alt="" />
                </div>

                <div className={`flowerName`}>
                  <h6>{el.flowerName}</h6>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`flowerColumn mar-t2`}>
          {brandNewDisplayColumn.map((el, index) => {
            return (
              <div key={`flowerColumn${index}`} className={`flowerDetail`}>
                <div className={`flowerColumnPic`}>
                  <img src={el.flowerPic} alt="" />
                </div>

                <div className={`flowerName`}>
                  <h6>{el.flowerName}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
