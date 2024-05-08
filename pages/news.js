import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import cn from "../components/news.module.scss";
import Link from "next/link";
import Button from "../components/button.js";
import FButton from "../components/foldingButton.js";
import { formatDistance, format } from "date-fns";
import { FacebookProvider, Feed } from "react-facebook";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

import HeadComponent from "../components/headComponent";

export default function News({ newss, fbfeeds }) {
  const { locale } = useRouter();

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
  const formatNewsData = newsData.slice().sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  //テキスト
  let text;
  if (locale == "ja") {
    text = require("../json/ja/page_news.json");
  } else if (locale == "en") {
    text = require("../json/en/page_news.json");
  }

  const isFirstRender = useRef(false);

  // ロード制御
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const body = document.body; //scroll制御
    body.classList.add("active");
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);

  //Newsの品種を抽出
  const [sliceNumber, setSliceNumber] = useState(6);
  const [moreView, setMoreView] = useState(false);
  const number = formatNewsData.length;
  var sliceNewsData = formatNewsData.slice(0, sliceNumber);

  //ボタンの変換
  const [folding, setFolding] = useState(false);

  //More View
  useEffect(() => {
    // このeffectは初回レンダー時のみ呼ばれるeffect
    isFirstRender.current = true;

    //項目が10個以上のときはボタンを表示
    if (number > 6) {
      setFolding(true);
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      // 初回レンダー判定
      isFirstRender.current = false; // もう初回レンダーじゃないよ代入
    } else if (sliceNumber < number - 6) {
      setSliceNumber(sliceNumber + 6);
    } else if (sliceNumber >= number - 6) {
      setSliceNumber(sliceNumber + 6);
      setFolding(false);
    }
  }, [moreView]);

  return (
    <>
      <HeadComponent meta={text.meta} />

      <ScrollEffect>
        <section className={`${cn.news} sectionSpaceM sec-c`}>
          <div className={`titleColumn tex-c`}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <h5 className={`fon5 fonSp5 mar-b1`}>{text.news.subTitle}</h5>

              <h2 className={`fon2 fonSp2 bold mar-b05`}>{text.news.title}</h2>

              <div className={`titleBorder sec-c`}></div>
            </ScrollEffect>

            <ScrollEffect className={`intMostDelay`} after={`intActive`}>
              {formatNewsData.length !== 0 ? (
                <h5
                  className={`fon5 fonSp5 titleText mar-t2`}
                  dangerouslySetInnerHTML={{ __html: text.news.content }}
                />
              ) : (
                <h5 className={`titletext`}>現在お知らせはございません。</h5>
              )}
            </ScrollEffect>
          </div>

          {/* ニュースの記事一覧 */}
          <ScrollEffect className={`intMostDelay`} after={`intActive`}>
            <div
              className={`${cn.newsColumn} newsColumn
              ${formatNewsData.length == 1 ? "oneLength" : ""} ${
                formatNewsData.length == 2 ? "twoLength" : ""
              } grid4 sectionSpaceS`}
            >
              {/* 記事 */}
              {sliceNewsData.map((el, index) => {
                return (
                  <div key={`joinColumn${index}`} className={`newsDetail`}>
                    <Link href={`./news/${el.id}`}>
                      <div className={`newsDetailPic`}>
                        {el.featuredImage !== null && (
                          <img src={el.image} alt="" />
                        )}
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

            {/* moreView */}
            <div
              onClick={() => {
                setMoreView((prevState) => !prevState);
              }}
              className={`moreView ${folding ? "" : "active"} sectionSpaceM`}
            >
              <Button text={text.news.moreView} />
            </div>

            {/* <div
        className={`newsMessage ${
          newsColumn.length == 0 ? "active" : ""
        } tex-c`}
      >
        <h5>ニュースはありません。</h5>
      </div> */}
          </ScrollEffect>
        </section>
      </ScrollEffect>
    </>
  );
}

//wordpress
export const getStaticProps = async () => {
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

  const jsonNews = await resNews.json();
  const jsonfb = await fbfeed.json();

  return {
    props: {
      newss: jsonNews.data.newss.edges,
      fbfeeds: jsonfb.data,
    },
  };
};
