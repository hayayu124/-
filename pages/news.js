import React, { useState, useEffect, useRef } from "react";
import cn from "../components/news.module.scss";
import Link from "next/link";
import Button from "../components/button.js";
import FButton from "../components/foldingButton.js";
import { formatDistance, format } from "date-fns";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

export default function News(newss) {
  const newsColumn = newss.newss.nodes;
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

  console.log(number);

  return (
    <>
      <ScrollEffect>
        <section className={`${cn.news} sectionSpaceM sec-c`}>
          <div className={`titleColumn tex-c`}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <h5 className={`fon5 mar-b1`}>お知らせ</h5>

              <h2 className={`fon2 bold mar-b05`}>News</h2>

              <div className={`titleBorder sec-c`}></div>
            </ScrollEffect>

            <ScrollEffect className={`intMostDelay`} after={`intActive`}>
              {newsColumn.length !== 0 ? (
                <h5 className={`fon5 titleText mar-t2`}>
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
          <ScrollEffect className={`intMostDelay`} after={`intActive`}>
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
                      <p className={`fon4 Bold`}>{el.title}</p>
                      {el.content !== null && (
                        <p className={`fon5 newsDe`}>
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

            {/* morreView */}
            <div
              onClick={() => {
                setMoreView((prevState) => !prevState);
              }}
              className={`moreView ${folding ? "" : "active"} sectionSpaceM`}
            >
              <Button />
            </div>

            <div
              className={`newsMessage ${
                newsColumn.length == 0 ? "active" : ""
              } tex-c`}
            >
              <h5>ニュースはありません。</h5>
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
  return {
    props: {
      newss: jsonNews.data.newss,
    },
  };
};
