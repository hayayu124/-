import React, { useState, useEffect } from "react";
import cn from "../../components/newsArticle.module.scss";
import Link from "next/link";
import { formatDistance, format } from "date-fns";
import { useRouter } from "next/router";

import ScrollEffect from "../../components/utility/utilityscrollEffect";
import LoadingEffect from "../../components/utility/loadingEffect";

export default function newsArticle(props) {
  const news = props.newss.edges;
  const post = props.post;

  //URLを取得
  const router = useRouter();

  const otherNews = news
    .filter((n) => n.node.newsId !== post.newsId)
    .slice(0, 3);
  const content = post.content.replace(/(<([^>]+)>)/gi, "");
  console.log(otherNews);

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

  return (
    <>
      <section className={`${cn.newsArticle} sectionSpaceM`}>
        <div className={`${cn.newsTittle} titleColumn`}>
          <div className={`${cn.newsText} mar-t2`}>
            <h5>ニュース</h5>

            <h2>News</h2>
          </div>
        </div>

        <div className={`${cn.seriesTittle} grid4`}>
          <h3>{post.title}</h3>
          <h5 className={`mar-t3`}>{content}</h5>

          <h5 className={`${cn.newsDate} mar-t2`}>
            {format(new Date(post.date), "yyyy/MM/dd")}
          </h5>

          <div className={`${cn.shareIconColumn} mar-t1`}>
            <div className={`${cn.snsIcon}`}>
              <a
                href={`//twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`}
                data-text={post.title}
                data-via="FERNtasTIQU by Miwako"
                data-size="large"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <img src="/img/2021TwitterLogoBlack.png" alt="" />
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

          <div className={`${cn.articlePic} sectionSpaceS`}>
            <img src={post.featuredImage.node.mediaItemUrl} alt="" />
          </div>
        </div>

        {/* その他のニュース */}
        <div className={`${cn.otherNews} sectionSpaceM`}>
          <div className={`${cn.newsText} titleColumn tex-c`}>
            <h3>その他のニュース</h3>
          </div>

          {/* ニュースの記事一覧 */}
          <div className={`${cn.newsColumn} newsColumn grid3 sectionSpaceS`}>
            {/* 記事 */}

            {otherNews.map((el, index) => {
              return (
                <div key={`joinColumn${index}`} className={`newsDetail`}>
                  <div className={`newsDetailPic`}>
                    <img src={el.node.featuredImage.node.mediaItemUrl} alt="" />
                  </div>

                  <div className={`newsDetailText`}>
                    <h4>{el.node.title}</h4>
                    <h6>{el.node.content.replace(/(<([^>]+)>)/gi, "")}</h6>

                    <h6 className={`newsDate`}>
                      {format(new Date(post.date), "yyyy/MM/dd")}
                    </h6>
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
				query SinglePost {
					news(idType: DATABASE_ID, id: "${context.params.id}") {
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
        newss {
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
