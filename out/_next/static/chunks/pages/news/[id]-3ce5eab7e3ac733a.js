(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [232],
  {
    5348: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/news/[id]",
        function () {
          return n(333);
        },
      ]);
    },
    4667: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = n(5893),
        a = n(9008),
        c = n.n(a);
      function o(e) {
        var t = e.meta;
        return (0, s.jsxs)(c(), {
          children: [
            (0, s.jsx)("meta", {
              name: "viewport",
              content:
                "width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, viewport-fit=cover",
            }),
            (0, s.jsx)("title", { children: t.title }),
            (0, s.jsx)("meta", { name: "description", content: t.description }),
            (0, s.jsx)("meta", { property: "og:title", content: t.title }),
            (0, s.jsx)("meta", {
              property: "og:description",
              content: t.title,
            }),
            (0, s.jsx)("meta", { property: "og:url", content: t.pageName }),
            (0, s.jsx)("meta", { property: "og:site_name", content: t.title }),
            (0, s.jsx)("meta", { property: "og:locale", content: t.locale }),
            (0, s.jsx)("meta", { property: "fb:app_id", content: "" }),
            (0, s.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, s.jsx)("meta", { name: "robots", content: "all" }),
            (0, s.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
          ],
        });
      }
    },
    4490: function (e, t, n) {
      "use strict";
      n(7294);
    },
    5990: function (e, t, n) {
      "use strict";
      var s = n(828),
        a = n(5893);
      n(7294);
      var c = n(7650),
        o = function (e) {
          var t = (0, s.Z)(
              (0, c.YD)({ rootMargin: "-200px 0px", triggerOnce: !0 }),
              2
            ),
            n = t[0],
            o = t[1],
            i = e.children,
            r = e.className,
            l = e.after;
          return (0, a.jsx)(a.Fragment, {
            children: l
              ? (0, a.jsx)("div", {
                  className: "".concat(r).concat(o ? " " + l : ""),
                  ref: n,
                  children: i,
                })
              : (0, a.jsx)("div", {
                  className: "int".concat(o ? " intActive" : ""),
                  ref: n,
                  children: i,
                }),
          });
        };
      t.Z = o;
    },
    333: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return p;
          },
          default: function () {
            return h;
          },
        });
      var s = n(5893),
        a = n(7294),
        c = n(1163),
        o = n(5021),
        i = n.n(o),
        r = n(1664),
        l = n.n(r),
        d = n(2167),
        m = n(5990);
      n(4490);
      var w = n(4667),
        p = !0;
      function h(e) {
        var t,
          o = e.newss.edges,
          r = e.post,
          p = (0, c.useRouter)().locale,
          h = (0, c.useRouter)();
        "ja" == p ? (t = n(995)) : "en" == p && (t = n(1947));
        var u = o
          .filter(function (e) {
            return e.node.newsId !== r.newsId;
          })
          .slice(0, 3);
        console.log(u);
        var x = (0, a.useState)(!1),
          f = (x[0], x[1]);
        (0, a.useEffect)(function () {
          document.body.classList.add("active"),
            setTimeout(function () {
              f(!0);
            }, 500);
        }, []),
          console.log(r);
        var j = [];
        return (
          "ja" == p
            ? ((j.pageName = "https://rosetique.tokyo/news/".concat(r.newsId)),
              (j.title = r.news_data.meta.metatitle),
              (j.description = r.news_data.meta.metadescription),
              (j.image = "/img/ogp.jpg"),
              (j.appId = "1809010892654485"),
              (j.author = "\xa9 2023 ROSETIQUE JAPAN Inc."),
              (j.locale = "ja_JP"))
            : "en" == p &&
              ((j.pageName = "https://rosetique.tokyo/en/news/".concat(
                r.newsId
              )),
              (j.title = r.news_data.meta.metatitleen),
              (j.description = r.news_data.meta.metadescriptionen),
              (j.image = "/img/ogp.jpg"),
              (j.appId = "1809010892654485"),
              (j.author = "\xa9 2023 ROSETIQUE JAPAN Inc."),
              (j.locale = "en_US")),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(w.Z, { meta: j }),
              (0, s.jsxs)("section", {
                className: "".concat(i().newsArticle, " sectionSpaceM"),
                children: [
                  (0, s.jsx)("div", {
                    className: "titleColumn tex-c mar-b4",
                    children: (0, s.jsxs)(m.Z, {
                      className: "".concat(i().intMoreDelay),
                      after: i().intActive,
                      children: [
                        (0, s.jsx)("h5", {
                          className: "fon5 fonSp5 mar-b1",
                          children: t.news.subTitle,
                        }),
                        (0, s.jsx)("h2", {
                          className: "fon2 fonSp2 bold mar-b05",
                          children: t.news.title,
                        }),
                        (0, s.jsx)("div", { className: "titleBorder sec-c" }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(m.Z, {
                    className: "intMostDelay",
                    after: "intActive",
                    children: (0, s.jsxs)("div", {
                      className: "".concat(i().seriesTittle, " grid4"),
                      children: [
                        null !== r.news_data.newsDate &&
                          (0, s.jsx)("p", {
                            className: "".concat(
                              i().newsDate,
                              " fon6 fonSp6 mar-t2"
                            ),
                            children: (0, d.Z)(
                              new Date(r.news_data.newsdate),
                              "yyyy/MM/dd"
                            ),
                          }),
                        "ja" == p
                          ? (0, s.jsx)("h3", {
                              className: "fon2 fonSp3 bold",
                              children: r.title,
                            })
                          : (0, s.jsx)("h3", {
                              className: "fon2 fonSp3 bold",
                              children: r.news_data.titleen,
                            }),
                        null !== r.content &&
                          (0, s.jsx)("div", {
                            className: ""
                              .concat(i().newsDe, " fon5 fonSp4 mar-t4 ")
                              .concat(
                                r.content.replace(/(<([^>]+)>)/gi, ""),
                                ' + " " + ""'
                              ),
                            dangerouslySetInnerHTML: {
                              __html:
                                "ja" === p
                                  ? r.content
                                  : "en" === p
                                  ? r.news_data.contentsen
                                  : "",
                            },
                          }),
                        (0, s.jsxs)("div", {
                          className: ""
                            .concat(i().shareIconColumn, " ")
                            .concat(0 == u.length ? i().active : "", " mar-t1"),
                          children: [
                            (0, s.jsx)("div", {
                              className: "".concat(i().snsIcon),
                              children: (0, s.jsx)("a", {
                                href: "//twitter.com/intent/tweet?url="
                                  .concat("https://ferntastique.tokyo")
                                  .concat(h.asPath),
                                "data-text": r.title,
                                "data-via": "FERNtasTIQU by Miwako",
                                "data-size": "large",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer",
                                children: (0, s.jsx)("img", {
                                  src: "/img/2021TwitterlogoBlack.png",
                                  alt: "",
                                }),
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: "".concat(i().snsIcon),
                              children: (0, s.jsx)("a", {
                                href: "http://www.facebook.com/share.php?u=https://ferntastique.tokyo/".concat(
                                  h.asPath
                                ),
                                rel: "nofollow noopener noreferrer",
                                target: "_blank",
                                children: (0, s.jsx)("img", {
                                  src: "/img/f_logo_RGB-Black_1024.png",
                                  alt: "",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: ""
                      .concat(i().otherNews, " ")
                      .concat(
                        0 == u.length ? i().active : "",
                        " sectionSpaceM"
                      ),
                    children: [
                      (0, s.jsx)("div", {
                        className: "".concat(
                          i().newsText,
                          " titleColumn sec-c"
                        ),
                        children: (0, s.jsx)("h3", {
                          className: "tex-c",
                          children: t.news.otherNews,
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className: ""
                          .concat(i().newsColumn, " newsColumn ")
                          .concat(1 == u.length ? "oneLength" : "", " ")
                          .concat(
                            2 == u.length ? "twoLength" : "",
                            " grid3 sectionSpaceS"
                          ),
                        children: u.map(function (e, t) {
                          return (0,
                          s.jsxs)("div", { className: "newsDetail", children: [null !== e.featuredImage && (0, s.jsx)(l(), { href: "/news/".concat(e.node.newsId), children: (0, s.jsx)("div", { className: "newsDetailPic", children: (0, s.jsx)("img", { src: e.node.featuredImage.node.mediaItemUrl, alt: "" }) }) }), (0, s.jsxs)("div", { className: "newsDetailText", children: [(0, s.jsx)("p", { className: "fon6 fonSp6 newsDate", children: (0, d.Z)(new Date(e.node.news_data.newsdate), "yyyy/MM/dd") }), (0, s.jsx)(l(), { href: "/news/".concat(e.newsId), children: (0, s.jsx)("h4", { children: e.node.title }) }), null !== e.content && (0, s.jsx)("h6", { className: "fon5 fonSp5 newsDe", children: e.node.content.replace(/(<([^>]+)>)/gi, "") }), (0, s.jsx)(l(), { href: "/news/".concat(e.newsId), children: (0, s.jsx)("div", { className: "moreViewText", children: (0, s.jsx)("img", { src: "/img/moreViewText.png", alt: "" }) }) })] })] }, "joinColumn".concat(t));
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "moreViewButton sectionSpaceS",
                        children: [
                          (0, s.jsx)("h5", {
                            className: "foncolW moreViewButton",
                            children: "もっと見る",
                          }),
                          (0, s.jsx)("div", { className: "borderBlack" }),
                          (0, s.jsx)("div", { className: "borderWhite" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    5021: function (e) {
      e.exports = {
        newsArticle: "newsArticle_newsArticle__qJaDZ",
        seriesTittle: "newsArticle_seriesTittle__QRjAM",
        newsDate: "newsArticle_newsDate__r2HiW",
        shareIconColumn: "newsArticle_shareIconColumn__v1rKI",
        active: "newsArticle_active__ZcFKr",
        snsIcon: "newsArticle_snsIcon__Lwp5p",
        otherNews: "newsArticle_otherNews__HuqL1",
      };
    },
    1947: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"meta":{"pageName":"https://rosetique.tokyo/en/news","title":"News | ROSETIQUE JAPAN","description":"ROSETIQUE JAPANに関する情報を随時発信しています。","image":"/img/ogp.jpg","appId":"1809010892654485","author":"\xa9 2023 ROSETIQUE JAPAN Inc.","locale":"en_US"},"news":{"subTitle":"","title":"News","text":"ROSETIQUE JAPANに関する<br class=\\"brSp\\" />情報を随時発信しています。","noNews":"現在お知らせはございません。","moreView":"View More","otherNews":"Other News"}}'
      );
    },
    995: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"meta":{"pageName":"https://rosetique.tokyo/news","title":"News | ROSETIQUE JAPAN","description":"ROSETIQUE JAPANに関する情報を随時発信しています。","image":"/img/ogp.jpg","appId":"1809010892654485","author":"\xa9 2023 ROSETIQUE JAPAN Inc.","locale":"ja_JP"},"news":{"subTitle":"お知らせ","title":"News","text":"ROSETIQUE JAPANに関する<br class=\\"brSp\\" />情報を随時発信しています。","noNews":"現在お知らせはございません。","moreView":"もっと見る","otherNews":"その他のニュース"}}'
      );
    },
  },
  function (e) {
    e.O(0, [925, 774, 888, 179], function () {
      return e((e.s = 5348));
    }),
      (_N_E = e.O());
  },
]);
