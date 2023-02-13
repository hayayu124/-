import React, { useState, useEffect, useRef } from "react";
import cn from "../components/news.module.scss";
import Link from "next/link";
import Button from "../components/button.js";
import FButton from "../components/foldingButton.js";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

export default function News(newss) {
  const newsColumn = newss.newss.edges;
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
  const number = newsColumn.length;
  var news = newsColumn.slice(0, sliceNumber);

  //ボタンの変換
  const [folding, setFolding] = useState(false);

  //More View
  useEffect(() => {
    // このeffectは初回レンダー時のみ呼ばれるeffect
    isFirstRender.current = true;

    //項目が10個以上のときはボタンを表示
    if (number > 10) {
      setFolding(true);
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      // 初回レンダー判定
      isFirstRender.current = false; // もう初回レンダーじゃないよ代入
    } else if (sliceNumber < number - 10) {
      setSliceNumber(sliceNumber + 10);
    } else if (sliceNumber >= number - 10) {
      setSliceNumber(sliceNumber + 10);
      setFolding(false);
    }
  }, [moreView]);

  console.log(number);

  return (
    <>
      <ScrollEffect>
        <section className={`${cn.news} sectionSpaceM`}>
          <div className={`${cn.newsTittle} titleColumn sec-c`}>
            <div className={`${cn.newsText} mar-t2`}>
              <ScrollEffect>
                <h5>お知らせ</h5>
              </ScrollEffect>

              <ScrollEffect className={`intDelay`} after={`intActive`}>
                <h2>News</h2>
              </ScrollEffect>

              <ScrollEffect className={`intMoreDelay`} after={`intActive`}>
                <h5>今井ナーセリーの最新情報を随時更新しております。</h5>
              </ScrollEffect>
            </div>
          </div>

          {/* ニュースの記事一覧 */}
          <ScrollEffect className={`intMostDelay`} after={`intActive`}>
            <div
              className={`${cn.newsColumn} newsColumn newsPageDetail grid4 sectionSpaceS`}
            >
              {/* 記事 */}

              {news.map((el, index) => {
                return (
                  <div
                    key={`news${index}`}
                    className={`${cn.newsPageDetail} newsDetail`}
                  >
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
                      <div className={`moreViewText`}>
                        <img src="/img/moreViewText.png" alt="" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* morreView */}
            <div
              onClick={() => {
                setMoreView((prevState) => !prevState);
              }}
              className={`moreView ${folding ? "active" : ""} sectionSpaceM`}
            >
              <Button />
            </div>
          </ScrollEffect>
        </section>
      </ScrollEffect>
    </>
  );
}

//wordpress
export const getStaticProps = async () => {
  //wordpressシダのデータ

  //ニュースの情報をインポート
  const resNews = await fetch(`http://ferntastique.tokyo/wp/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        newss(first: 1000) {
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
  return {
    props: {
      newss: jsonNews.data.newss,
    },
  };
};
