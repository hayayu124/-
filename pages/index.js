import React, { useState, useEffect, useRef } from "react";
import cn from "../components/toppage.module.scss";
import Button from "../components/button.js";
import Link from "next/link";
import { formatDistance, format } from "date-fns";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";
import { formatMuiErrorMessage } from "@mui/utils";

//スワイパー
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import SwiperCore, {
  Thumbs,
  Pagination,
  Navigation,
  Lazy,
  Controller,
  Autoplay,
  EffectFade,
} from "swiper";

SwiperCore.use([
  Thumbs,
  Pagination,
  Navigation,
  Lazy,
  Controller,
  Autoplay,
  EffectFade,
]);

export default function Top({ newss, formas }) {
  //配列の読み込み
  const newsColumn = newss.slice(0, 3);
  const roseFormas = formas;

  //brand-newとTiqueシリーズに分ける
  const brandNew = roseFormas
    .filter((n) => n.node.rose_spec.genre == "Brand-new")
    .slice(0, 5);

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

  // ロード制御
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const body = document.body; //scroll制御
    body.classList.add("active");
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);

  // スワイパー
  const kvImg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const kvSwiperParams = {
    slidesPerView: 1,
    loop: true,
    speed: 7000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  };

  return (
    <>
      {/* kv */}
      <div className={`${cn.kv} pos-r`}>
        {/* スライド */}
        <Swiper {...kvSwiperParams}>
          {kvImg.map((key) => (
            <SwiperSlide key={key}>
              <div className={`${cn.kvImgColumn} pos-r`}>
                <div className={`${cn.kvImgback} pos-r`}></div>
                <div className={`${cn.kvImg} pos-a`}>
                  <img src={`/img/kv${key}.jpg`} alt="" />
                </div>
              </div>

              <div className={`${cn.kvTitleColumn} pos-a`}>
                <div className={`${cn.kvSubTitle}`}>
                  <ScrollEffect className={`intDelay`} after={`intActive`}>
                    <h5 className={`fon4 fon4Sp`}>Cut Rose Collection</h5>
                  </ScrollEffect>
                </div>
                <div className={`${cn.kvTitle}`}>
                  <ScrollEffect className={`intMoreDelay`} after={`intActive`}>
                    <h1 className={`fon1 fonSp2`}>ROSETIQUE JAPAN</h1>
                  </ScrollEffect>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* about */}
      <ScrollEffect>
        <section className={`${cn.about} sectionSpaceM`}>
          <div className={`${cn.decoration} ${cn.aboutDecoration1}`}>
            <img src="/img/about.png" alt="" />
          </div>

          <div className={`${cn.decoration2} ${cn.aboutDecoration2}`}>
            <img src="/img/IMG_6067.jpg" alt="" />
          </div>

          <div className={`titleColumn tex-c`}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <h5 className={`fon5 fonSp5 fonSp5 titleText mar-t2`}>
                DREAM ROSE JAPAN
              </h5>

              <h2 className={`fon2 fonSp2 bold mar-b05`}>
                日本のバラを
                <br className={`brSp`} />
                世界へ
              </h2>

              <div className={`titleBorder sec-c`}></div>
            </ScrollEffect>

            <ScrollEffect className={`intMostDelay`} after={`intActive`}>
              <h5 className={`fon5 fonSp5 titleText mar-t2`}>
                日本全国のバラ栽培生産者や花市場、生花店、
                <br className="br" />
                一般消費者などと連携しながら、世界へと純国産バラを広めたい
                <br className="br" />
                との想いで立ち上げた種苗会社です。
                <br className="br" />
                ROSETIQUEのバラに関わるみなさまが明るくハッピーな気持ちになり、
                <br className="br" />
                明日への活力になっていただけるようなバラ作りを心掛けております。
                <br className="br" />
                バラを愛するすべてのみなさまと一緒にROSETIQUEを育て、
                <br className="br" />
                進化させていきます。
              </h5>
            </ScrollEffect>
          </div>

          <ScrollEffect className={`intMostDelay`} after={`intActive`}>
            <div className={`${cn.decoration3} ${cn.aboutDecoration3}`}>
              <img
                src="/img/328340252_1811314825908288_6142992496288819254_n.jpg"
                alt=""
              />
            </div>

            <div className={`${cn.decoration4} ${cn.aboutDecoration4} mar-t2`}>
              <img src="/img/flower_1.jpg" alt="" />
            </div>
          </ScrollEffect>
        </section>
      </ScrollEffect>

      {/* News */}
      <ScrollEffect>
        <section className={`${cn.news}`}>
          <ScrollEffect className={`${cn.intDelay}`} after={cn.intActive}>
            {newsColumn.length !== 0 && (
              <div className={`${cn.decoration} ${cn.newsDecoration1}`}>
                <img src="/img/news.png" alt="" />
              </div>
            )}
          </ScrollEffect>

          <div className={`titleColumn tex-c`}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <h5 className={`fon5 fonSp5 fonSp5 titleText mar-t2`}>
                お知らせ
              </h5>

              <h2 className={`fon2 fonSp2 bold mar-b05`}>News</h2>

              <div className={`titleBorder sec-c`}></div>
            </ScrollEffect>

            <ScrollEffect className={`intMostDelay`} after={`intActive`}>
              {newsColumn.length !== 0 ? (
                <h5 className={`fon5 fonSp5 titleText mar-t2`}>
                  ROSETIQUE JAPANに関する
                  <br className="brSp" />
                  情報を随時発信しています。
                </h5>
              ) : (
                <h5 className={`titletext`}>現在お知らせはございません。</h5>
              )}
            </ScrollEffect>
          </div>

          {/* ニュースの記事一覧 */}
          <ScrollEffect className={`${cn.intMostDelay}`} after={cn.intActive}>
            <div
              className={`${cn.newsColumn} newsColumn
              ${newsColumn.length == 1 ? "oneLength" : ""} ${
                newsColumn.length == 2 ? "twoLength" : ""
              } grid4 sectionSpaceS`}
            >
              {/* 記事 */}
              {newsColumn.map((el, index) => {
                return (
                  <div key={`joinColumn${index}`} className={`newsDetail`}>
                    <Link href={`./news/${el.newsId}`}>
                      <div className={`newsDetailPic`}>
                        {el.featuredImage !== null && (
                          <img
                            src={el.featuredImage.node.mediaItemUrl}
                            alt=""
                          />
                        )}
                      </div>
                    </Link>

                    <div className={`newsDetailText`}>
                      <p className={`fon6 fonSp6 newsDate`}>
                        {format(new Date(el.date), "yyyy/MM/dd")}
                      </p>
                      <p className={`fon4 fonSp3 bold`}>{el.title}</p>
                      {el.content !== null && (
                        <p className={`fon5 fonSp5 newsDe`}>
                          {el.content.replace(/(<([^>]+)>)/gi, "")}
                        </p>
                      )}

                      <Link href={`./news/${el.newsId}`}>
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

          <div className={`${cn.button} ${newss.length == 0 ? cn.active : ""}`}>
            <Button link="/news" />
          </div>
        </section>
      </ScrollEffect>

      {/* Brand-new */}
      <ScrollEffect>
        <section className={`${cn.collection} sectionSpace`}>
          <div className={`${cn.decoration} ${cn.collectionDecoration1}`}>
            <img src="/img/collection.png" alt="" />
          </div>
          <div className={`titleColumn tex-c mar-b4`}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <h5 className={`fon5 fonSp5 mar-b1`}>今年の新品種</h5>

              <h2 className={`fon2 fonSp2 bold mar-b05`}>Brand-new</h2>

              <div className={`titleBorder sec-c`}></div>
            </ScrollEffect>

            <ScrollEffect className={`intMostDelay`} after={`intActive`}>
              <h5 className={`fon5 fonSp5 titleText mar-t2`}>
                トレンドをリードする花姿の良いものの中から、
                <br className={`br`} />
                耐病性や生産性に優れた品種だけを厳選してお届けします。
              </h5>
            </ScrollEffect>
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
                    {el.node.featuredImage !== null && (
                      <Link href={`./rose/${el.node.roseFormaId}`}>
                        <div className={`${cn.flowerColumnPic}`}>
                          <img
                            src={el.node.featuredImage.node.mediaItemUrl}
                            alt=""
                          />
                        </div>
                      </Link>
                    )}

                    {el.node.featuredImage !== null && (
                      <p className={`fon5 fonSp5 tex-c mar-t1`}>
                        {el.node.title}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* もっと見るボタン */}
            <div
              className={`${cn.brandNewButton} ${
                brandNew.length == 0 ? cn.active : ""
              }`}
            >
              <Button link="/brandNew" />
            </div>

            <div
              className={`newsMessage ${
                brandNew.length == 0 ? "active" : ""
              } tex-c`}
            >
              <h5>品種がありません。</h5>
            </div>
          </ScrollEffect>
        </section>
      </ScrollEffect>

      {/* MIWAKO Tique Serious */}
      <ScrollEffect>
        <section className={`${cn.collection} ${cn.tique}`}>
          <div className={`titleColumn tex-c mar-b4`}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <h5 className={`fon5 fonSp5 mar-b1`}>ミワコ ティーク シリーズ</h5>

              <h2 className={`fon2 fonSp2 bold mar-b05`}>
                Miwako TIQUE Series
              </h2>

              <div className={`titleBorder sec-c`}></div>
            </ScrollEffect>

            <ScrollEffect className={`intMostDelay`} after={`intActive`}>
              <h5 className={`fon5 fonSp5 titleText mar-t2`}>
                美しく品格のある花姿、芳醇な香り、丈夫な茎と花保ちの良さ、
                <br />
                トゲの少ない扱いやすさにこだわった、フラッグシップシリーズです。
              </h5>
            </ScrollEffect>
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
                    {el.node.featuredImage !== null && (
                      <Link href={`./rose/${el.node.roseFormaId}`}>
                        <div className={`${cn.flowerColumnPic}`}>
                          <img
                            src={el.node.featuredImage.node.mediaItemUrl}
                            alt=""
                          />
                        </div>
                      </Link>
                    )}

                    {el.node.featuredImage !== null && (
                      <p className={`fon5 fonSp5 tex-c mar-t1`}>
                        {el.node.title}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* もっと見るボタン */}
            <div
              className={`${cn.tiqueButton} ${
                tique.length == 0 ? cn.active : ""
              }`}
            >
              <Button link="/miwakoTiqueSeries" />
            </div>

            <div
              className={`newsMessage ${
                tique.length == 0 ? "active" : ""
              } tex-c`}
            >
              <h5>品種がありません。</h5>
            </div>
          </ScrollEffect>
        </section>
      </ScrollEffect>

      {/* 品種 */}
      <ScrollEffect>
        <section className={`${cn.collection} sectionSpace mar-b4`}>
          <div className={`${cn.decoration} ${cn.varityDecoration1}`}>
            <img src="/img/varity.png" alt="" />
          </div>
          <div className={`titleColumn tex-c mar-b4`}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <h5 className={`fon5 fonSp5 mar-b1`}>品種</h5>

              <h2 className={`fon2 fonSp2 bold mar-b05`}>Variety</h2>

              <div className={`titleBorder sec-c`}></div>
            </ScrollEffect>

            <ScrollEffect className={`intMostDelay`} after={`intActive`}>
              <h5 className={`fon5 fonSp5 titleText mar-t2`}>
                一般的な花形だけではなく、 ROSETIQUEならではの香りに特化した、
                <br className={`br`} />
                人の心を癒し、心身共に豊かになるバラです。
              </h5>
            </ScrollEffect>
          </div>

          <ScrollEffect className={`${cn.intMostDelay}`} after={cn.intActive}>
            {/* もっと見るボタン */}
            <div
              className={`${cn.varietyButton} ${
                roseFormas.length == 0 ? cn.active : ""
              }`}
            >
              <Button link="/varietyList" />
            </div>

            {/* フラワーカラム */}
            <div className={`${cn.otherSec} mar-t4`}>
              <div className={`${cn.otherFlowerCol} fle-f`}>
                <div
                  className={`${cn.flowerColumn} ${cn.varietyColumn} ${cn.aniLef}`}
                >
                  {other.map((el, index) => {
                    return (
                      <div
                        key={`flowerColumn${index}`}
                        className={`${cn.flowerDetail}`}
                      >
                        {el.node.featuredImage !== null && (
                          <Link href={`./rose/${el.node.roseFormaId}`}>
                            <div className={`${cn.flowerColumnPic}`}>
                              <img
                                src={el.node.featuredImage.node.mediaItemUrl}
                                alt=""
                              />
                            </div>
                          </Link>
                        )}

                        {/* <div className={`${cn.flowerName}`}>
                          <h6>{el.node.title}</h6>
                        </div> */}
                      </div>
                    );
                  })}
                </div>

                <div
                  className={`${cn.flowerColumn} ${cn.varietyColumn} ${cn.aniLef}`}
                >
                  {other.map((el, index) => {
                    return (
                      <div
                        key={`flowerColumn${index}`}
                        className={`${cn.flowerDetail}`}
                      >
                        {el.node.featuredImage !== null && (
                          <Link href={`./rose/${el.node.roseFormaId}`}>
                            <div className={`${cn.flowerColumnPic}`}>
                              <img
                                src={el.node.featuredImage.node.mediaItemUrl}
                                alt=""
                              />
                            </div>
                          </Link>
                        )}

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
                        {el.node.featuredImage !== null && (
                          <Link href={`./rose/${el.node.roseFormaId}`}>
                            <div className={`${cn.flowerColumnPic}`}>
                              <img
                                src={el.node.featuredImage.node.mediaItemUrl}
                                alt=""
                              />
                            </div>
                          </Link>
                        )}

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
                        {el.node.featuredImage !== null && (
                          <Link href={`./rose/${el.node.roseFormaId}`}>
                            <div className={`${cn.flowerColumnPic}`}>
                              <img
                                src={el.node.featuredImage.node.mediaItemUrl}
                                alt=""
                              />
                            </div>
                          </Link>
                        )}

                        {/* <div className={`${cn.flowerName}`}>
                          <h6>{el.node.title}</h6>
                        </div> */}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div
              className={`newsMessage ${
                roseFormas.length == 0 ? "active" : ""
              } tex-c`}
            >
              <h5>品種がありません。</h5>
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
        newss(first: 1000, where: {categoryName: "catalog"}) {
          nodes {
            content
            date
            title
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            newsId
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
      newss: jsonNews.data.newss.nodes,
      formas: jsonRose.data.roseFormas.edges,
    },
  };
};
