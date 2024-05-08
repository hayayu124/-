import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import cn from "../../components/newsArticle.module.scss";
import Link from "next/link";
import { formatDistance, format } from "date-fns";

import ScrollEffect from "../../components/utility/utilityscrollEffect";
import LoadingEffect from "../../components/utility/loadingEffect";

import HeadComponent from "/components/headComponent";

import Button from "../../components/button.js";

export default function NewsArticle({ newss, fbfeeds, post, quote }) {
  // const news = props.newss.edges;
  // const post = props.post;

  //URLを取得
  const { locale } = useRouter();
  const router = useRouter();

  let text;
  if (locale == "ja") {
    text = require("/json/ja/page_news.json");
  } else if (locale == "en") {
    text = require("/json/en/page_news.json");
  }

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

  const otherNews = formatNewsData
    .filter((n) => n.id !== post.id && n.id !== post.newsId)
    .slice(0, 3);

  // ロード制御
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const body = document.body; //scroll制御
    body.classList.add("active");
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);

  //メタデータ
  const meta = [];

  if (locale == "ja") {
    if (quote == "wp") {
      meta.pageName = `https://rosetique.tokyo/news/${post.newsId}`;
      meta.title = `${post.news_data.meta.metatitle} | ROSETIQUE JAPAN`;
      meta.description = post.news_data.meta.metadescription;
      meta.image = "/img/ogp.jpg";
      meta.appId = "1809010892654485";
      meta.author = "© 2023 ROSETIQUE JAPAN Inc.";
      meta.locale = "ja_JP";
    } else if (quote == "fb") {
      meta.pageName = `https://rosetique.tokyo/news/${post.id}`;
      let match = (post.message.match(/【(.*)】/) || [])[1] || "";
      meta.title = `${match.trim()} | ROSETIQUE JAPAN`;
      meta.description = post.message;
      meta.image = "/img/ogp.jpg";
      meta.appId = "1809010892654485";
      meta.author = "© 2023 ROSETIQUE JAPAN Inc.";
      meta.locale = "ja_JP";
    }
  } else if (locale == "en") {
    if (quote == "wp") {
      meta.pageName = `https://rosetique.tokyo/en/news/${post.newsId}`;
      meta.title = `${post.news_data.meta.metatitleen} | ROSETIQUE JAPAN`;
      meta.description = post.news_data.meta.metadescriptionen;
      meta.image = "/img/ogp.jpg";
      meta.appId = "1809010892654485";
      meta.author = "© 2023 ROSETIQUE JAPAN Inc.";
      meta.locale = "en_US";
    } else if (quote == "fb") {
      meta.pageName = `https://rosetique.tokyo/news/${post.id}`;
      let match = (post.message.match(/【(.*)】/) || [])[1] || "";
      meta.title = `${match.trim()} | ROSETIQUE JAPAN`;
      meta.description = post.message;
      meta.image = "/img/ogp.jpg";
      meta.appId = "1809010892654485";
      meta.author = "© 2023 ROSETIQUE JAPAN Inc.";
      meta.locale = "ja_JP";
    }
  }

  return (
    <>
      <HeadComponent meta={meta} />

      <section className={`${cn.newsArticle} sectionSpaceM`}>
        <div className={`titleColumn tex-c mar-b4`}>
          <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
            <h5 className={`fon5 fonSp5 mar-b1`}>{text.news.subTitle}</h5>

            <h2 className={`fon2 fonSp2 bold mar-b05`}>{text.news.title}</h2>

            <div className={`titleBorder sec-c`}></div>
          </ScrollEffect>
        </div>

        <ScrollEffect className={`intMostDelay`} after={`intActive`}>
          <div className={`${cn.seriesTittle} grid4`}>
            {quote === "wp" && post.news_data.newsDate !== null && (
              <p className={`${cn.newsDate} fon6 fonSp6 mar-t2`}>
                {format(new Date(post.news_data.newsdate), "yyyy/MM/dd")}
              </p>
            )}

            {quote === "fb" && (
              <p className={`${cn.newsDate} fon6 fonSp6 mar-t2`}>
                {format(new Date(post.created_time), "yyyy/MM/dd")}
              </p>
            )}

            {/* タイトル */}
            {locale == "ja" ? (
              <h3 className={`fon2 fonSp3 bold`}>
                {quote === "wp"
                  ? post.title
                  : (post.message.match(/【(.*)】/) || [])[1] || ""}
              </h3>
            ) : (
              <h3 className={`fon2 fonSp3 bold`}>{post.news_data.titleen}</h3>
            )}

            {/* FBの際のトップ画像 */}
            {quote === "fb" &&
              post.attachments.data[0].attachments !== null && (
                <div className={`${cn.newsArticleImage} mar-t1`}>
                  <img src={post.attachments.data[0].media.image.src} alt="" />
                </div>
              )}

            {quote === "wp" && post.content !== null && (
              <div
                className={`${
                  cn.newsDe
                } fon5 fonSp4 mar-t4 ${post.content.replace(
                  /(<([^>]+)>)/gi,
                  ""
                )} + " " + ""`}
                dangerouslySetInnerHTML={{
                  __html:
                    locale === "ja"
                      ? post.content
                      : locale === "en"
                      ? post.news_data.contentsen
                      : "",
                }}
              />
            )}

            {quote === "fb" && post.content !== null && (
              <div
                className={`${
                  cn.newsDe
                } fon5 fonSp4 mar-t4 ${post.message.replace(
                  /(<([^>]+)>)/gi,
                  ""
                )} + " " + ""`}
                dangerouslySetInnerHTML={{
                  __html:
                    locale === "ja"
                      ? post.message.replace(/\n/g, "<br>")
                      : locale === "en"
                      ? post.message
                      : "",
                }}
              />
            )}

            {/* FBの際のサブ画像 */}
            {quote === "fb" &&
              post.attachments.data[0].subattachments !== null &&
              post.attachments.data[0].subattachments !== undefined && (
                <div className={`${cn.newsSubImageWrap} fle-f`}>
                  {post.attachments.data[0].subattachments.data.map(
                    (el, index) => {
                      return (
                        <div
                          key={`subImage${index}`}
                          className={`${cn.newsSubImage}`}
                        >
                          <img src={el.media.image.src} alt="" />
                        </div>
                      );
                    }
                  )}
                </div>
              )}

            <div
              className={`${cn.shareIconColumn} 
              ${otherNews.length == 0 ? cn.active : ""} 
              mar-t1`}
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
            <h3 className={`tex-c`}>{text.news.otherNews}</h3>
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
                <div
                  key={`joinColumn${index}`}
                  className={`newsDetail pointer`}
                >
                  {el.featuredImage !== null && (
                    <Link href={`/news/${el.id}`}>
                      <div className={`newsDetailPic`}>
                        <img src={el.image} alt="" />
                      </div>
                    </Link>
                  )}

                  <div className={`newsDetailText`}>
                    <p className={`fon6 fonSp6 newsDate`}>{el.data}</p>
                    <Link href={`/news/${el.id}`}>
                      <h4>{el.title}</h4>
                    </Link>
                    {el.content !== null && (
                      <h6 className={`fon5 fonSp5 newsDe`}>
                        {el.content.replace(/(<([^>]+)>)/gi, "")}
                      </h6>
                    )}

                    <Link href={`/news/${el.id}`}>
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
          {/* <Link href={`/news/${el.id}`}> */}
          <Button link="/news" text={text.news.moreView} />
          {/* </Link> */}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("https://ferntastique.tokyo/wp/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query SinglePost {news(idType: DATABASE_ID, id: "${context.params.id}") {
        news_data {
          meta {
            metadescription
            metadescriptionen
            metatitle
            metatitleen
          }
          newsdate
          titleen
          contentsen
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

  const fbfeeds = await fetch(
    `https://graph.facebook.com/107633107617404/feed?fields=permalink_url,id,created_time,message,from,full_picture,media,attachments&access_token=EAAGO74DnwMEBO3hfvliN6u3956kOkezsiHGrPixqnZBQZBBp8O4NcNQhVQ1XxDwgB40aZCDb8WZCne74UEA9FaYZA5v1KGiidjJoph6wZCF8ZCV8TQyQZBLlLCBVZCixVvZADn5yIPiz4NFjxjZBfPXntTwwzPYAoSFZC86iySNYmyViiYhgfamXZBBMbYngqZBl6peGr4cPoAGHGPy43aSocZD`
  );

  const jsonNews = await resNews.json();
  const jsonfbs = await fbfeeds.json();

  let post;
  let quote;
  if (json.data.news == null) {
    post = jsonfbs.data.find((post) => post.id === context.params.id);
    quote = "fb";
  } else {
    post = json.data.news;
    quote = "wp";
  }

  return {
    props: {
      newss: jsonNews.data.newss,
      fbfeeds: jsonfbs.data,
      post: post,
      quote: quote,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://ferntastique.tokyo/wp/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        newss(first: 1000, where: {categoryName: "Catalog"}) {
          edges {
            node {
              newsId             
            }
          }
        }
      }
			`,
    }),
  });

  const fbfeed = await fetch(
    `https://graph.facebook.com/107633107617404/feed?fields=id&access_token=EAAGO74DnwMEBO3hfvliN6u3956kOkezsiHGrPixqnZBQZBBp8O4NcNQhVQ1XxDwgB40aZCDb8WZCne74UEA9FaYZA5v1KGiidjJoph6wZCF8ZCV8TQyQZBLlLCBVZCixVvZADn5yIPiz4NFjxjZBfPXntTwwzPYAoSFZC86iySNYmyViiYhgfamXZBBMbYngqZBl6peGr4cPoAGHGPy43aSocZD`
  );

  const json = await res.json();
  const jsonfb = await fbfeed.json();
  const posts = json.data.newss.edges;

  const paths = posts.map((post) => ({
    params: { id: String(post.node.newsId) },
  }));

  const fbfeedPaths = jsonfb.data.map((item) => ({
    params: { id: String(item.id) },
  }));

  // paths 配列に結合する
  paths.push(...fbfeedPaths);

  // 多言語に対してもpathを作成
  // paths.push(...paths.map((item) => ({ ...item, locale: "en" })));

  return { paths, fallback: false };
}
