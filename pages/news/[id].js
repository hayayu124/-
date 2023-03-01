import React, { useState, useEffect } from "react";
import cn from "../../components/newsArticle.module.scss";
import Link from "next/link";
import { formatDistance, format } from "date-fns";
import { useRouter } from "next/router";

import ScrollEffect from "../../components/utility/utilityscrollEffect";
import LoadingEffect from "../../components/utility/loadingEffect";

export default function NewsArticle(props) {
  const news = props.newss.nodes;
  const post = props.post;

  //URLを取得
  const router = useRouter();

  const otherNews = news.filter((n) => n.newsId !== post.newsId).slice(0, 3);

  // ロード制御
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const body = document.body; //scroll制御
    body.classList.add("active");
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);

  return (
    <>
      <section className={`${cn.newsArticle} sectionSpaceM`}>
        <div className={`${cn.newsTittle} titleColumn sec-c`}>
          <div className={`${cn.newsText} mar-t2`}>
            <h5>ニュース</h5>

            <h2>News</h2>
          </div>
        </div>

        <ScrollEffect className={`intMostDelay`} after={`intActive`}>
          <div className={`${cn.seriesTittle} grid4`}>
            {post.date !== null && (
              <p className={`${cn.newsDate} fon6 fonSp6 mar-t2`}>
                {format(new Date(post.date), "yyyy/MM/dd")}
              </p>
            )}
            <h3>{post.title}</h3>
            {/* {content !== null && <h5 className={`mar-t3`}>{content}</h5>} */}

            {post.content !== null && (
              <div
                className={`${
                  cn.newsDe
                } fon5 fonSp4 mar-t4 ${post.content.replace(
                  /(<([^>]+)>)/gi,
                  ""
                )} + " " + ""`}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            )}

            <div
              className={`${cn.shareIconColumn} ${
                otherNews.length == 0 ? cn.active : ""
              } mar-t1`}
            >
              <div className={`${cn.snsIcon}`}>
                <a
                  href={`//twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`}
                  data-text={post.title}
                  data-via="FERNtasTIQU by Miwako"
                  data-size="large"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <img src="/img/2021TwitterlogoBlack.png" alt="" />
                </a>
              </div>

              <div className={`${cn.snsIcon}`}>
                <a
                  href={`http://www.facebook.com/share.php?u=https://ferntastique.tokyo/${router.asPath}`}
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  <img src="/img/f_logo_RGB-Black_1024.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </ScrollEffect>

        {/* その他のニュース */}
        <div
          className={`${cn.otherNews} ${
            otherNews.length == 0 ? cn.active : ""
          } sectionSpaceM`}
        >
          <div className={`${cn.newsText} titleColumn sec-c`}>
            <h3 className={`tex-c`}>その他のニュース</h3>
          </div>

          {/* ニュースの記事一覧 */}
          <div
            className={`${cn.newsColumn} newsColumn ${
              otherNews.length == 1 ? "oneLength" : ""
            } ${otherNews.length == 2 ? "twoLength" : ""} grid3 sectionSpaceS`}
          >
            {/* 記事 */}

            {otherNews.map((el, index) => {
              return (
                <div key={`joinColumn${index}`} className={`newsDetail`}>
                  {el.featuredImage !== null && (
                    <Link href={`/news/${el.newsId}`}>
                      <div className={`newsDetailPic`}>
                        <img src={el.featuredImage.node.mediaItemUrl} alt="" />
                      </div>
                    </Link>
                  )}

                  <div className={`newsDetailText`}>
                    <p className={`fon6 fonSp6 newsDate`}>
                      {format(new Date(el.date), "yyyy/MM/dd")}
                    </p>
                    <Link href={`/news/${el.newsId}`}>
                      <h4>{el.title}</h4>
                    </Link>
                    {el.content !== null && (
                      <h6>{el.content.replace(/(<([^>]+)>)/gi, "")}</h6>
                    )}

                    <Link href={`/news/${el.newsId}`}>
                      <div className={`moreViewText`}>
                        <img src="/img/moreViewText.png" alt="" />
                      </div>
                    </Link>
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
        </div>
      </section>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("http://ferntastique.tokyo/wp/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query SinglePost {news(idType: DATABASE_ID, id: "${context.params.id}") {
        date
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        title
        content
        newsId
      }
    }
			`,
    }),
  });

  const json = await res.json();

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
      post: json.data.news,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://ferntastique.tokyo/wp/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        newss(where: {categoryName: "catalog"}) {
          nodes {
            newsId
          }
        }
      }
			`,
    }),
  });

  const json = await res.json();
  const posts = json.data.newss.nodes;

  const paths = posts.map((post) => ({
    params: { id: String(post.newsId) },
  }));

  return { paths, fallback: false };
}
