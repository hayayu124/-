(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [134],
  {
    5115: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/news",
        function () {
          return n(3450);
        },
      ]);
    },
    2442: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = n(5893);
      n(7294);
      var c = n(7367),
        a = n.n(c),
        o = n(1664),
        i = n.n(o);
      function r(e) {
        var t = e.link,
          n = e.text;
        return (0, s.jsx)(s.Fragment, {
          children: t
            ? (0, s.jsx)(i(), {
                href: "".concat(t),
                children: (0, s.jsxs)("div", {
                  className: "sectionSpaceS tex-c pos-r ".concat(
                    a().button,
                    " sec-c"
                  ),
                  children: [
                    (0, s.jsx)("div", {
                      className: "".concat(a().btn, " ").concat(a().bgskew),
                      children: (0, s.jsx)("span", {
                        className: "fon4 fonSp4 bold",
                        children: n,
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: "".concat(a().borderBlack, " pos-a"),
                    }),
                    (0, s.jsx)("div", {
                      className: "".concat(a().borderWhite, " pos-a"),
                    }),
                  ],
                }),
              })
            : (0, s.jsxs)("div", {
                className: "sectionSpaceS tex-c pos-r ".concat(
                  a().button,
                  " sec-c"
                ),
                children: [
                  (0, s.jsx)("div", {
                    className: "".concat(a().btn, " ").concat(a().bgskew),
                    children: (0, s.jsx)("span", {
                      className: "fon4 fonSp4 bold",
                      children: n,
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: "".concat(a().borderBlack, " pos-a"),
                  }),
                  (0, s.jsx)("div", {
                    className: "".concat(a().borderWhite, " pos-a"),
                  }),
                ],
              }),
        });
      }
    },
    4372: function (e, t, n) {
      "use strict";
      n(5893), n(7294), n(1664);
    },
    4667: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = n(5893),
        c = n(9008),
        a = n.n(c);
      function o(e) {
        var t = e.meta;
        return (0, s.jsxs)(a(), {
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
        c = n(5893);
      n(7294);
      var a = n(7650),
        o = function (e) {
          var t = (0, s.Z)(
              (0, a.YD)({ rootMargin: "-200px 0px", triggerOnce: !0 }),
              2
            ),
            n = t[0],
            o = t[1],
            i = e.children,
            r = e.className,
            l = e.after;
          return (0, c.jsx)(c.Fragment, {
            children: l
              ? (0, c.jsx)("div", {
                  className: "".concat(r).concat(o ? " " + l : ""),
                  ref: n,
                  children: i,
                })
              : (0, c.jsx)("div", {
                  className: "int".concat(o ? " intActive" : ""),
                  ref: n,
                  children: i,
                }),
          });
        };
      t.Z = o;
    },
    3450: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return f;
          },
          default: function () {
            return x;
          },
        });
      var s = n(5893),
        c = n(7294),
        a = n(1163),
        o = n(3834),
        i = n.n(o),
        r = n(1664),
        l = n.n(r),
        d = n(2442);
      n(4372);
      var u = n(2167),
        m = n(5990);
      n(4490);
      var p = n(4667),
        f = !0;
      function x(e) {
        var t,
          o = e.newss,
          r = (0, a.useRouter)().locale;
        "ja" == r ? (t = n(995)) : "en" == r && (t = n(1947));
        var f = (0, c.useRef)(!1),
          x = (0, c.useState)(!1),
          w = (x[0], x[1]);
        (0, c.useEffect)(function () {
          document.body.classList.add("active"),
            setTimeout(function () {
              w(!0);
            }, 500);
        }, []);
        var h = (0, c.useState)(6),
          j = h[0],
          N = h[1],
          _ = (0, c.useState)(!1),
          b = _[0],
          g = _[1],
          v = o.length,
          S = o.slice(0, j),
          E = (0, c.useState)(!1),
          T = E[0],
          k = E[1];
        return (
          (0, c.useEffect)(function () {
            (f.current = !0), v > 6 && k(!0);
          }, []),
          (0, c.useEffect)(
            function () {
              f.current
                ? (f.current = !1)
                : j < v - 6
                ? N(j + 6)
                : j >= v - 6 && (N(j + 6), k(!1));
            },
            [b]
          ),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(p.Z, { meta: t.meta }),
              (0, s.jsx)(m.Z, {
                children: (0, s.jsxs)("section", {
                  className: "".concat(i().news, " sectionSpaceM sec-c"),
                  children: [
                    (0, s.jsxs)("div", {
                      className: "titleColumn tex-c",
                      children: [
                        (0, s.jsxs)(m.Z, {
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
                            (0, s.jsx)("div", {
                              className: "titleBorder sec-c",
                            }),
                          ],
                        }),
                        (0, s.jsx)(m.Z, {
                          className: "intMostDelay",
                          after: "intActive",
                          children:
                            0 !== o.length
                              ? (0, s.jsx)("h5", {
                                  className: "fon5 fonSp5 titleText mar-t2",
                                  dangerouslySetInnerHTML: {
                                    __html: t.news.content,
                                  },
                                })
                              : (0, s.jsx)("h5", {
                                  className: "titletext",
                                  children: "現在お知らせはございません。",
                                }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)(m.Z, {
                      className: "intMostDelay",
                      after: "intActive",
                      children: [
                        (0, s.jsx)("div", {
                          className: ""
                            .concat(
                              i().newsColumn,
                              " newsColumn\n              "
                            )
                            .concat(1 == o.length ? "oneLength" : "", " ")
                            .concat(
                              2 == o.length ? "twoLength" : "",
                              " grid4 sectionSpaceS"
                            ),
                          children: S.map(function (e, t) {
                            return (0,
                            s.jsxs)("div", { className: "newsDetail", children: [(0, s.jsx)(l(), { href: "./news/".concat(e.node.newsId), children: (0, s.jsx)("div", { className: "newsDetailPic", children: null !== e.featuredImage && (0, s.jsx)("img", { src: e.node.featuredImage.node.mediaItemUrl, alt: "" }) }) }), (0, s.jsxs)("div", { className: "newsDetailText", children: [(0, s.jsx)("p", { className: "fon6 fonSp6 newsDate", children: (0, u.Z)(new Date(e.node.news_data.newsdate), "yyyy/MM/dd") }), "ja" == r ? (0, s.jsx)("p", { className: "fon4 fonSp3 bold", children: e.node.title }) : (0, s.jsx)("p", { className: "fon4 fonSp3 bold", children: e.node.news_data.titleen }), null !== e.node.content && (0, s.jsx)("p", { className: "fon5 fonSp5 newsDe", children: "ja" === r ? e.node.content.replace(/(<([^>]+)>)/gi, "") : e.node.news_data.contentsen.replace(/(<([^>]+)>)/gi, "") }), (0, s.jsx)(l(), { href: "./news/".concat(e.node.newsId), children: (0, s.jsx)("div", { className: "moreViewText", children: (0, s.jsx)("img", { src: "/img/moreViewText.png", alt: "" }) }) })] })] }, "joinColumn".concat(t));
                          }),
                        }),
                        (0, s.jsx)("div", {
                          onClick: function () {
                            g(function (e) {
                              return !e;
                            });
                          },
                          className: "moreView ".concat(
                            T ? "" : "active",
                            " sectionSpaceM"
                          ),
                          children: (0, s.jsx)(d.Z, { text: t.news.moreView }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    7367: function (e) {
      e.exports = {
        button: "button_button__DsQxa",
        borderWhite: "button_borderWhite__AiprT",
        btn: "button_btn__rzDc0",
        borderBlack: "button_borderBlack__42Ufi",
        bgskew: "button_bgskew__wv34n",
        skewanime: "button_skewanime___qTGe",
      };
    },
    3834: function (e) {
      e.exports = {
        news: "news_news__vp_f4",
        newsPageDetail: "news_newsPageDetail__ljcdE",
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
      return e((e.s = 5115));
    }),
      (_N_E = e.O());
  },
]);
