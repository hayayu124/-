import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import cn from "../components/toppage.module.scss";
import Button from "../components/button.js";
import Link from "next/link";
import { formatDistance, format } from "date-fns";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";
import { formatMuiErrorMessage } from "@mui/utils";

import HeadComponent from "../components/headComponent";
import Instagram from "../components/sectionInstagram";

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

export default function Top({ newss, fbfeeds, formas, brands }) {
  //テキスト
  const { locale } = useRouter();
  let text;
  if (locale == "ja") {
    text = require("../json/ja/page_top.json");
  } else if (locale == "en") {
    text = require("../json/en/page_top.json");
  }

  //配列の読み込み
  let newsData = [];
  for (let index = 0; index < newss.length; index++) {
    newsData.push({
      id: newss[index].node.newsId,
      date: newss[index].node.news_data.newsdate,
      title: newss[index].node.title,
      content: newss[index].node.content,
      image: newss[index].node.featuredImage.node.mediaItemUrl,
    });
  }

  for (let index = 0; index < fbfeeds.length; index++) {
    let formattedDate = format(
      new Date(fbfeeds[index].created_time),
      "yyyy/MM/dd"
    );

    newsData.push({
      id: fbfeeds[index].id,
      date: formattedDate,
      title: (fbfeeds[index].message.match(/【(.*)】/) || [])[1] || "",
      content: fbfeeds[index].message,
      image: fbfeeds[index].full_picture,
    });
  }

  //ニュース読み込み
  const formatNewsData = newsData
    .slice()
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    })
    .slice(0, 3);

  //brand-newとTiqueシリーズに分ける
  const roseFormas = formas;
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
  const kvImg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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
      <HeadComponent meta={text.meta} />

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
                    <h5 className={`fon4 fon4Sp`}>
                      Cut &Garden Rose Collection
                    </h5>
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
                {text.cathCopy.subTitle}
              </h5>

              <h2
                className={`fon2 fonSp2 bold mar-b05`}
                dangerouslySetInnerHTML={{ __html: text.cathCopy.title }}
              />

              <div className={`titleBorder sec-c`}></div>
            </ScrollEffect>

            <ScrollEffect className={`intMostDelay`} after={`intActive`}>
              <h5
                className={`fon5 fonSp5 titleText mar-t2`}
                dangerouslySetInnerHTML={{ __html: text.cathCopy.text }}
              />
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
            {formatNewsData.length !== 0 && (
              <div className={`${cn.decoration} ${cn.newsDecoration1}`}>
                <img src="/img/news.png" alt="" />
              </div>
            )}
          </ScrollEffect>

          <div className={`titleColumn tex-c`}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <h5
                className={`fon5 fonSp5 fonSp5 titleText mar-t2`}
                dangerouslySetInnerHTML={{ __html: text.news.subTitle }}
              />

              <h2 className={`fon2 fonSp2 bold mar-b05`}>{text.news.title}</h2>

              <div className={`titleBorder sec-c`}></div>
            </ScrollEffect>

            <ScrollEffect className={`intMostDelay`} after={`intActive`}>
              {formatNewsData.length !== 0 ? (
                <h5
                  className={`fon5 fonSp5 titleText mar-t2`}
                  dangerouslySetInnerHTML={{ __html: text.news.text }}
                />
              ) : (
                <h5
                  className={`titletext`}
                  dangerouslySetInnerHTML={{ __html: text.news.noNews }}
                />
              )}
            </ScrollEffect>
          </div>

          {/* ニュースの記事一覧 */}
          <ScrollEffect className={`${cn.intMostDelay}`} after={cn.intActive}>
            <div
              className={`${cn.newsColumn} newsColumn
              ${formatNewsData.length == 1 ? "oneLength" : ""} ${
                formatNewsData.length == 2 ? "twoLength" : ""
              } grid4 sectionSpaceS`}
            >
              {/* 記事 */}
              {formatNewsData.map((el, index) => {
                return (
                  <div key={`joinColumn${index}`} className={`newsDetail`}>
                    <Link href={`./news/${el.id}`}>
                      <div className={`newsDetailPic`}>
                        {el.image !== null && <img src={el.image} alt="" />}
                      </div>
                    </Link>

                    <div className={`newsDetailText`}>
                      <p className={`fon6 fonSp6 newsDate`}>{el.date}</p>
                      {locale == "ja" ? (
                        <p className={`fon4 fonSp3 bold`}>{el.title}</p>
                      ) : (
                        <p className={`fon4 fonSp3 bold`}>
                          {el.node.news_data.titleen}
                        </p>
                      )}
                      {el.content !== null && (
                        <p className={`fon5 fonSp5 newsDe`}>
                          {locale === "ja"
                            ? el.content.replace(/(<([^>]+)>)/gi, "")
                            : el.node.news_data.contentsen.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                        </p>
                      )}

                      <Link href={`./news/${el.id}`}>
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
            <Button link="/news" text={text.news.moreView} />
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
              <h5 className={`fon5 fonSp5 mar-b1`}>{text.brandnew.subTitle}</h5>

              <h2 className={`fon2 fonSp2 bold mar-b05`}>
                {text.brandnew.title}
              </h2>

              <div className={`titleBorder sec-c`}></div>
            </ScrollEffect>

            <ScrollEffect className={`intMostDelay`} after={`intActive`}>
              <h5
                className={`fon5 fonSp5 titleText mar-t2`}
                dangerouslySetInnerHTML={{ __html: text.brandnew.text }}
              />
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

                    <p className={`fon5 fonSp5 tex-c mar-t1`}>
                      {locale == "ja"
                        ? el.node.title
                        : el.node.rose_spec.roseNameEn}
                    </p>
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
              <Button link="/brandNew" text={text.brandnew.moreView} />
            </div>

            <div
              className={`newsMessage ${
                brandNew.length == 0 ? "active" : ""
              } tex-c`}
            >
              <h5>{text.brandnew.noData}</h5>
            </div>
          </ScrollEffect>
        </section>
      </ScrollEffect>

      {/* MIWAKO Tique Serious */}
      <ScrollEffect>
        <section className={`${cn.collection} ${cn.tique}`}>
          <div className={`titleColumn tex-c mar-b4`}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <h5 className={`fon5 fonSp5 mar-b1`}>
                {text.miwako_tique_serious.subTitle}
              </h5>

              <h2 className={`fon2 fonSp2 bold mar-b05`}>
                {text.miwako_tique_serious.title}
              </h2>

              <div className={`titleBorder sec-c`}></div>
            </ScrollEffect>

            <ScrollEffect className={`intMostDelay`} after={`intActive`}>
              <h5
                className={`fon5 fonSp5 titleText mar-t2`}
                dangerouslySetInnerHTML={{
                  __html: text.miwako_tique_serious.text,
                }}
              />
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

                    <p className={`fon5 fonSp5 tex-c mar-t1`}>
                      {locale == "ja"
                        ? el.node.title
                        : el.node.rose_spec.roseNameEn}
                    </p>
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
              <Button
                link="/miwakoTiqueSeries"
                text={text.miwako_tique_serious.moreView}
              />
            </div>

            <div
              className={`newsMessage ${
                tique.length == 0 ? "active" : ""
              } tex-c`}
            >
              <h5>{text.miwako_tique_serious.noData}</h5>
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
              <h5 className={`fon5 fonSp5 mar-b1`}>{text.variety.subTitle}</h5>

              <h2 className={`fon2 fonSp2 bold mar-b05`}>
                {text.variety.title}
              </h2>

              <div className={`titleBorder sec-c`}></div>
            </ScrollEffect>

            <ScrollEffect className={`intMostDelay`} after={`intActive`}>
              <h5
                className={`fon5 fonSp5 titleText mar-t2`}
                dangerouslySetInnerHTML={{
                  __html: text.variety.text,
                }}
              />
            </ScrollEffect>
          </div>

          <ScrollEffect className={`${cn.intMostDelay}`} after={cn.intActive}>
            {/* もっと見るボタン */}
            <div
              className={`${cn.varietyButton} ${
                roseFormas.length == 0 ? cn.active : ""
              }`}
            >
              <Button link="/varietyList" text={text.variety.moreView} />
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

      {/* その他のブランド */}
      <ScrollEffect>
        <section className={`${cn.otherBrand} sectionSpace mar-b4 pos-r`}>
          <div className={`${cn.decoration} ${cn.brandDecoration1}`}>
            <img src="/img/brand.svg" alt="" />
          </div>
          <div className={`titleColumn tex-c mar-b4`}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <h5 className={`fon5 fonSp5 mar-b1`}>その他のブランド</h5>

              <h2 className={`fon2 fonSp2 bold mar-b05`}>Other Brand</h2>
            </ScrollEffect>
          </div>

          <ScrollEffect className={`intMostDelay`} after={`intActive`}>
            <div className={`${cn.brandWrap} fle-f`}>
              <div className={`${cn.brandTextWrap} tex-l`}>
                {locale == "ja" ? (
                  <p className={`${cn.brandTitle}`}>
                    {brands[0].node.brand.brandTitle}
                  </p>
                ) : (
                  <p className={`${cn.brandTitle}`}>
                    {brands[0].node.brand.brandTitleen}
                  </p>
                )}

                {locale == "ja" ? (
                  <p className={`${cn.brandSubTitle}`}>
                    {brands[0].node.brand.brandSubtitle}
                  </p>
                ) : (
                  <p className={`${cn.brandSubTitle}`}>
                    {brands[0].node.brand.brandSubtitleen}
                  </p>
                )}

                {locale == "ja" ? (
                  <p
                    className={`${cn.brandText}`}
                    dangerouslySetInnerHTML={{
                      __html: brands[0].node.brand.brandDescription,
                    }}
                  />
                ) : (
                  <p
                    className={`${cn.brandText}`}
                    dangerouslySetInnerHTML={{
                      __html: brands[0].node.brand.brandDescriptionen,
                    }}
                  />
                )}

                <div className={`${cn.buttonWrap}`}>
                  <a
                    href={brands[0].node.brand.brandUrl}
                    className={`pointer`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={`${cn.btn} ${cn.bgskew}`}>
                      <span className={`fon4 fonSp4 bold`}>View Site</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className={`${cn.imageWrap}`}>
                <img
                  src={brands[0].node.brand.brandImage.mediaItemUrl}
                  alt=""
                />
              </div>
            </div>
          </ScrollEffect>
        </section>
      </ScrollEffect>

      {/* Instagram */}
      <ScrollEffect>
        <section className={`${cn.instagram}`}>
          <Instagram />
        </section>
      </ScrollEffect>
    </>
  );
}

//wordpress
export const getStaticProps = async () => {
  //バラの情報をインポート
  const roseFormas = await fetch(`https://ferntastique.tokyo/wp/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        roseFormas(first: 1000) {
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
                roseColoren
                roseShape
                roseShapeen
                roseSize
                roseSizeen
                imageSub {
                  mediaItemUrl
                }
                genre
                rosePetal
                roseScent
                roseName
                roseNameen
                roseLength
                roseHarvest
                roseExplanation
                roseExplanationen
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
  const resNews = await fetch(`https://ferntastique.tokyo/wp/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        newss(first: 1000, where: {categoryName: "Catalog"}) {
          edges {
            node {
              news_data {
                meta {
                  metadescription
                  metadescriptionen
                  metatitle
                  metatitleen
                }
                titleen
                newsdate
                contentsen
              }
              title
              newsId
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
              content
            }
          }
        }
      }
      `,
    }),
  });

  const fbfeed = await fetch(
    `https://graph.facebook.com/107633107617404/feed?fields=permalink_url,id,created_time,message,from,full_picture,media,attachments{unshimmed_url}&access_token=EAAGO74DnwMEBO3hfvliN6u3956kOkezsiHGrPixqnZBQZBBp8O4NcNQhVQ1XxDwgB40aZCDb8WZCne74UEA9FaYZA5v1KGiidjJoph6wZCF8ZCV8TQyQZBLlLCBVZCixVvZADn5yIPiz4NFjxjZBfPXntTwwzPYAoSFZC86iySNYmyViiYhgfamXZBBMbYngqZBl6peGr4cPoAGHGPy43aSocZD`
  );

  //ブランドの情報をインポート
  const resBrands = await fetch(`https://ferntastique.tokyo/wp/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        brands {
          edges {
            node {
              brandId
              brand {
                brandDescription
                brandDescriptionen
                brandImage {
                  mediaItemUrl
                }
                brandSubtitle
                brandSubtitleen
                brandTitle
                brandTitleen
                brandUrl
              }
            }
          }
        }
      }
      `,
    }),
  });

  const jsonNews = await resNews.json();
  const jsonfb = await fbfeed.json();
  const jsonRose = await roseFormas.json();
  const jsonBrands = await resBrands.json();

  return {
    props: {
      newss: jsonNews.data.newss.edges,
      fbfeeds: jsonfb.data,

      formas: jsonRose.data.roseFormas.edges,
      brands: jsonBrands.data.brands.edges,
    },
  };
};
