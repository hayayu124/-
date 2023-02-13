import React, { useState, useEffect, useRef } from "react";
import cn from "../components/toppage.module.scss";
import Button from "../components/button.js";
import Link from "next/link";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";
import { formatMuiErrorMessage } from "@mui/utils";

export default function Top({ newss, formas }) {
  // ロード制御
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const body = document.body; //scroll制御
    body.classList.add("active");
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);

  //配列の読み込み
  const newsColumn = newss.slice(0, 3);
  const roseFormas = formas;

  //brand-newとTiqueシリーズに分ける
  const brandNew = roseFormas
    .filter((n) => n.node.rose_spec.genre == "Brand-new")
    .slice(0, 5);

  console.log(brandNew);

  const tique = roseFormas
    .filter((n) => n.node.rose_spec.genre == "Miwako Tique Series")
    .slice(0, 6);

  const other = roseFormas
    .filter(
      (n) =>
        n.node.rose_spec.genre !== "Miwako Tique Series" &&
        n.node.rose_spec.genre !== "Brand-new"
    )
    .slice(0, 6);

  const other2 = roseFormas
    .filter(
      (n) =>
        n.node.rose_spec.genre !== "Miwako Tique Series" &&
        n.node.rose_spec.genre !== "Brand-new"
    )
    .slice(6, 12);

  return (
    <>
      {/* kv */}
      <div className={`${cn.kv} pos-r`}>
        <div className={`${cn.kvTitleColumn}`}>
          <div className={`${cn.kvSubTitle}`}>
            <ScrollEffect className={`intDelay`} after={`intActive`}>
              <h5 className={`fon4 fon4Sp`}>
                The Rose Maker IMAI KIYOSHI
                <br />
                Cut Rose Collection
              </h5>
            </ScrollEffect>
          </div>
          <div className={`${cn.kvTitle}`}>
            <ScrollEffect className={`intMoreDelay`} after={`intActive`}>
              <h1 className={`fon1 fonSp1`}>Rosetique Japan</h1>
            </ScrollEffect>
          </div>
        </div>
      </div>

      {/* about */}
      <ScrollEffect>
        <section className={`${cn.about} sectionSpaceM`}>
          <div className={`${cn.decoration} ${cn.aboutDecoration1}`}>
            <img src="/img/about.png" alt="" />
          </div>

          <div className={`${cn.decoration2} ${cn.aboutDecoration2}`}>
            <img src="/img/flower_1.jpg" alt="" />
          </div>

          <div className={cn.aboutColumn}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <div className={cn.aboutTittle}>
                <h2>Rosetique Japan</h2>
              </div>
            </ScrollEffect>

            <ScrollEffect className={`intMostDelay`} after={`intActive`}>
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
            </ScrollEffect>
          </div>

          <ScrollEffect className={`intMostDelay`} after={`intActive`}>
            <div className={`${cn.decoration3} ${cn.aboutDecoration3}`}>
              <img src="/img/flower_2.jpg" alt="" />
            </div>

            <div className={`${cn.decoration4} ${cn.aboutDecoration4} mar-t2`}>
              <img src="/img/flower_1.jpg" alt="" />
            </div>
          </ScrollEffect>
        </section>
      </ScrollEffect>

      {/* News */}
      <ScrollEffect>
        <section className={`${cn.news} sectionSpace`}>
          <ScrollEffect className={`${cn.intDelay}`} after={cn.intActive}>
            <div className={`${cn.decoration} ${cn.newsDecoration1}`}>
              <img src="/img/news.png" alt="" />
            </div>
          </ScrollEffect>
          <div className={`${cn.newsTittle} titleColumn sec-c`}>
            <div className={`${cn.newsText} mar-t2`}>
              <ScrollEffect
                className={`${cn.intMoreDelay}`}
                after={cn.intActive}
              >
                <h5>お知らせ</h5>
                <h2>News</h2>
              </ScrollEffect>

              <ScrollEffect
                className={`${cn.intMostDelay}`}
                after={cn.intActive}
              >
                <h5>今井ナーセリーに関する情報を随時発信しています。</h5>
              </ScrollEffect>
            </div>
          </div>

          {/* ニュースの記事一覧 */}
          <ScrollEffect className={`${cn.intMostDelay}`} after={cn.intActive}>
            <div className={`${cn.newsColumn} newsColumn grid4 sectionSpaceS`}>
              {/* 記事 */}

              {newsColumn.map((el, index) => {
                return (
                  <div key={`joinColumn${index}`} className={`newsDetail`}>
                    <Link href={`./news/${el.node.newsId}`}>
                      <div className={`newsDetailPic`}>
                        <img
                          src={el.node.featuredImage.node.mediaItemUrl}
                          alt=""
                        />
                      </div>
                    </Link>

                    <div className={`newsDetailText`}>
                      <h4>{el.node.title}</h4>
                      <h6>{el.node.content.replace(/(<([^>]+)>)/gi, "")}</h6>

                      <h6 className={`newsDate`}>{el.newsDate}</h6>
                      <Link href={`./news/${el.node.newsId}`}>
                        <div className={`moreViewText`}>
                          <img src="/img/moreViewText.png" alt="" />
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollEffect>

          <Button link="/news" />
        </section>
      </ScrollEffect>

      {/* Brand-new */}
      <ScrollEffect>
        <section className={`${cn.collection} sectionSpace`}>
          <div className={`${cn.decoration} ${cn.collectionDecoration1}`}>
            <img src="/img/collection.png" alt="" />
          </div>
          <div className={`${cn.collectionTittle} titleColumn sec-c`}>
            <div className={`${cn.collectionText} mar-t2`}>
              <ScrollEffect
                className={`${cn.intMoreDelay}`}
                after={cn.intActive}
              >
                <h5>今年の新品種</h5>
                <h2>Brand-new</h2>
              </ScrollEffect>

              <ScrollEffect
                className={`${cn.intMostDelay}`}
                after={cn.intActive}
              >
                <h5>
                  コレクションの説明コレクションの説明コレクションの説明コレクション
                  <br className="br" />
                  の説明コレクションの説明コレクションの説明コレクションの説明コレク
                  <br className="br" />
                  ションの説明コレクションの説明
                </h5>
              </ScrollEffect>
            </div>
          </div>
          {/* フラワーカラム */}
          <ScrollEffect className={`${cn.intMostDelay}`} after={cn.intActive}>
            <div className={`${cn.flowerColumn} sec-c grid1`}>
              {brandNew.map((el, index) => {
                return (
                  <div
                    key={`flowerColumn${index}`}
                    className={`${cn.flowerDetail}`}
                  >
                    <Link href={`./rose/${el.node.roseFormaId}`}>
                      <div className={`${cn.flowerColumnPic} mar-t2`}>
                        <img
                          src={el.node.featuredImage.node.mediaItemUrl}
                          alt=""
                        />
                      </div>
                    </Link>

                    <div className={`${cn.flowerName}`}>
                      <h6>{el.node.title}</h6>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* もっと見るボタン */}
            <Button link="/brandNew" />
          </ScrollEffect>
        </section>
      </ScrollEffect>

      {/* MIWAKO Tique Serious */}
      <ScrollEffect>
        <section className={`${cn.collection} sectionSpaceM`}>
          <div className={`${cn.collectionTittle} titleColumn sec-c`}>
            <div className={`${cn.collectionText} mar-t2 mar-b2`}>
              <ScrollEffect
                className={`${cn.intMoreDelay}`}
                after={cn.intActive}
              >
                <h5>ミワコ ティーク シリーズ</h5>
                <h2>Miwako TIQUE Series</h2>
              </ScrollEffect>

              <ScrollEffect
                className={`${cn.intMostDelay}`}
                after={cn.intActive}
              >
                <h5>
                  コレクションの説明コレクションの説明コレクションの説明コレクション
                  <br className="br" />
                  の説明コレクションの説明コレクションの説明コレクションの説明コレク
                  <br className="br" />
                  ションの説明コレクションの説明
                </h5>
              </ScrollEffect>
            </div>
          </div>
          {/* フラワーカラム */}
          <ScrollEffect className={`${cn.intMostDelay}`} after={cn.intActive}>
            <div className={`${cn.flowerColumn} sec-c`}>
              {tique.map((el, index) => {
                return (
                  <div
                    key={`flowerColumn${index}`}
                    className={`${cn.flowerDetail}`}
                  >
                    <Link href={`./rose/${el.node.roseFormaId}`}>
                      <div className={`${cn.flowerColumnPic}`}>
                        <img
                          src={el.node.featuredImage.node.mediaItemUrl}
                          alt=""
                        />
                      </div>
                    </Link>

                    <div className={`${cn.flowerName}`}>
                      <h6>{el.node.title}</h6>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* もっと見るボタン */}
            <Button link="/miwakoTiqueSeries" />
          </ScrollEffect>
        </section>
      </ScrollEffect>

      {/* 品種 */}
      <ScrollEffect>
        <section className={`${cn.collection} sectionSpace mar-b4`}>
          <div className={`${cn.decoration} ${cn.varityDecoration1}`}>
            <img src="/img/varity.png" alt="" />
          </div>
          <div className={`${cn.collectionTittle} titleColumn sec-c`}>
            <div className={`${cn.collectionText} mar-t2`}>
              <ScrollEffect
                className={`${cn.intMoreDelay}`}
                after={cn.intActive}
              >
                <h5>品種</h5>
                <h2>Variety</h2>
              </ScrollEffect>

              <ScrollEffect
                className={`${cn.intMostDelay}`}
                after={cn.intActive}
              >
                <h5>
                  品種の説明品種の説明品種の説明品種の説明品種の説明品種の説明
                  <br className="br" />
                  品種の説明品種の説明品種の説明品種の説明品種の説明品種の説明
                  <br className="br" />
                  品種の説明品種の説明品種の説明品種の説明
                  <br className="br" />
                </h5>
              </ScrollEffect>
            </div>
          </div>

          <ScrollEffect className={`${cn.intMostDelay}`} after={cn.intActive}>
            {/* もっと見るボタン */}
            <Button link="/varietyList" />

            {/* フラワーカラム */}
            <div className={`${cn.otherSec} mar-t4`}>
              <div className={`${cn.otherFlowerCol} fle-f`}>
                <div className={`${cn.flowerColumn} ${cn.aniLef}`}>
                  {other.map((el, index) => {
                    return (
                      <div
                        key={`flowerColumn${index}`}
                        className={`${cn.flowerDetail}`}
                      >
                        <Link href={`./rose/${el.node.roseFormaId}`}>
                          <div className={`${cn.flowerColumnPic}`}>
                            <img
                              src={el.node.featuredImage.node.mediaItemUrl}
                              alt=""
                            />
                          </div>
                        </Link>

                        {/* <div className={`${cn.flowerName}`}>
                          <h6>{el.node.title}</h6>
                        </div> */}
                      </div>
                    );
                  })}
                </div>

                <div className={`${cn.flowerColumn} ${cn.aniLef}`}>
                  {other.map((el, index) => {
                    return (
                      <div
                        key={`flowerColumn${index}`}
                        className={`${cn.flowerDetail}`}
                      >
                        <Link href={`./rose/${el.node.roseFormaId}`}>
                          <div className={`${cn.flowerColumnPic}`}>
                            <img
                              src={el.node.featuredImage.node.mediaItemUrl}
                              alt=""
                            />
                          </div>
                        </Link>

                        {/* <div className={`${cn.flowerName}`}>
                          <h6>{el.node.title}</h6>
                        </div> */}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={`${cn.otherFlowerCol} fle-f mar-t2`}>
                <div className={`${cn.flowerColumn} ${cn.aniRig}`}>
                  {other2.map((el, index) => {
                    return (
                      <div
                        key={`flowerColumn${index}`}
                        className={`${cn.flowerDetail}`}
                      >
                        <Link href={`./rose/${el.node.roseFormaId}`}>
                          <div className={`${cn.flowerColumnPic}`}>
                            <img
                              src={el.node.featuredImage.node.mediaItemUrl}
                              alt=""
                            />
                          </div>
                        </Link>

                        {/* <div className={`${cn.flowerName}`}>
                          <h6>{el.node.title}</h6>
                        </div> */}
                      </div>
                    );
                  })}
                </div>

                <div className={`${cn.flowerColumn} ${cn.aniRig}`}>
                  {other2.map((el, index) => {
                    return (
                      <div
                        key={`flowerColumn${index}`}
                        className={`${cn.flowerDetail}`}
                      >
                        <Link href={`./rose/${el.node.roseFormaId}`}>
                          <div className={`${cn.flowerColumnPic}`}>
                            <img
                              src={el.node.featuredImage.node.mediaItemUrl}
                              alt=""
                            />
                          </div>
                        </Link>

                        {/* <div className={`${cn.flowerName}`}>
                          <h6>{el.node.title}</h6>
                        </div> */}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollEffect>
        </section>
      </ScrollEffect>
    </>
  );
}

//wordpress
export const getStaticProps = async () => {
  //バラの情報をインポート
  const roseFormas = await fetch(`http://ferntastique.tokyo/wp/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        roseFormas(first: 100) {
          edges {
            node {
              uri
              title
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
              rose_spec {
                award
                fieldGroupName
                roseColor
                roseShape
                roseSize
                imageSub {
                  mediaItemUrl
                }
                genre
                rosePetal
                roseScent
                roseName
                roseLength
                roseHarvest
                roseExplanation
              }
              colors {
                nodes {
                  name
                }
              }
              roseFormaId
            }
          }
        }
      }
      `,
    }),
  });

  //ニュースの情報をインポート
  const resNews = await fetch(`http://ferntastique.tokyo/wp/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        newss {
          edges {
            node {
              date
              newsId
              content
              title
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
              news_date_detail {
                newsImage {
                  newsImage {
                    mediaItemUrl
                  }
                }
                newsDate
              }
            }
          }
        }
      }
      `,
    }),
  });

  const jsonNews = await resNews.json();
  const jsonRose = await roseFormas.json();
  return {
    props: {
      newss: jsonNews.data.newss.edges,
      formas: jsonRose.data.roseFormas.edges,
    },
  };
};
