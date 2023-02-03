import React, { useState, useEffect, useRef } from "react";
import cn from "../components/news.module.scss";
import Link from "next/link";
import Button from "../components/button.js";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

export default function News(newss) {
  const newsColumn = newss.newss.edges;
  const [i, setI] = useState(3);
  const [moreView, setMoreView] = useState(false);
  const isFirstRender = useRef(false);

  useEffect(() => {
    // このeffectは初回レンダー時のみ呼ばれるeffect
    isFirstRender.current = true;
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      // 初回レンダー判定
      isFirstRender.current = false; // もう初回レンダーじゃないよ代入
    } else {
      setI(i + 3);
    }
  }, [moreView]);

  var news = newsColumn.slice(0, i);

  console.log(news);

  return (
    <>
      <section className={`${cn.news} sectionSpaceM`}>
        <div className={`${cn.newsTittle} titleColumn`}>
          <div className={`${cn.newsText} mar-t2`}>
            <h5>お知らせ</h5>

            <h2>News</h2>

            <h5>今井ナーセリーの最新情報を随時更新しております。</h5>
          </div>
        </div>

        {/* ニュースの記事一覧 */}
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
                    <img src={el.node.featuredImage.node.mediaItemUrl} alt="" />
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

        <div
          onClick={() => {
            setMoreView((prevState) => !prevState);
          }}
        >
          <Button />
        </div>
      </section>
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
  return {
    props: {
      newss: jsonNews.data.newss,
    },
  };
};
