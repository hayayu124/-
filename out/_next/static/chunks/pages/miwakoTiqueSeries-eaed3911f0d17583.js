(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [247],
  {
    587: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/miwakoTiqueSeries",
        function () {
          return n(9923);
        },
      ]);
    },
    4667: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = n(5893),
        i = n(9008),
        c = n.n(i);
      function s(e) {
        var t = e.meta;
        return (0, a.jsxs)(c(), {
          children: [
            (0, a.jsx)("meta", {
              name: "viewport",
              content:
                "width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, viewport-fit=cover",
            }),
            (0, a.jsx)("title", { children: t.title }),
            (0, a.jsx)("meta", { name: "description", content: t.description }),
            (0, a.jsx)("meta", { property: "og:title", content: t.title }),
            (0, a.jsx)("meta", {
              property: "og:description",
              content: t.title,
            }),
            (0, a.jsx)("meta", { property: "og:url", content: t.pageName }),
            (0, a.jsx)("meta", { property: "og:site_name", content: t.title }),
            (0, a.jsx)("meta", { property: "og:locale", content: t.locale }),
            (0, a.jsx)("meta", { property: "fb:app_id", content: "" }),
            (0, a.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, a.jsx)("meta", { name: "robots", content: "all" }),
            (0, a.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
          ],
        });
      }
    },
    9923: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return p;
          },
          default: function () {
            return f;
          },
        });
      var a = n(5893),
        i = n(7294),
        c = n(1163),
        s = n(8654),
        o = n.n(s),
        r = n(7438),
        l = n(2442);
      n(4372);
      var u = n(5990);
      n(4490);
      var m = n(4667),
        p = !0;
      function f(e) {
        var t,
          s = (0, c.useRouter)().locale;
        "ja" == s ? (t = n(2164)) : "en" == s && (t = n(3378));
        var p = e.formas,
          f = (0, i.useState)(!1),
          d = (f[0], f[1]);
        (0, i.useEffect)(function () {
          document.body.classList.add("active"),
            setTimeout(function () {
              d(!0);
            }, 500);
        }, []);
        var x = (0, i.useState)(10),
          h = x[0],
          j = x[1],
          w = (0, i.useState)(!1),
          N = w[0],
          S = w[1],
          g = (0, i.useRef)(!1),
          _ = p.filter(function (e) {
            return "Miwako Tique Series" == e.node.rose_spec.genre;
          }).length,
          v = p
            .filter(function (e) {
              return "Miwako Tique Series" == e.node.rose_spec.genre;
            })
            .slice(0, h),
          y = (0, i.useState)(!1),
          T = y[0],
          E = y[1],
          b = (0, i.useState)(!1);
        return (
          b[0],
          b[1],
          (0, i.useEffect)(function () {
            (g.current = !0), _ > 10 && E(!0);
          }, []),
          (0, i.useEffect)(
            function () {
              g.current
                ? (g.current = !1)
                : h < _ - 10
                ? j(h + 10)
                : h >= _ - 10 && (j(h + 10), E(!1));
            },
            [N]
          ),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(m.Z, { meta: t.meta }),
              (0, a.jsxs)("section", {
                className: "".concat(o().brandNew, " collection sectionSpaceM"),
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "collectionColumn sectionSpaceM tex-c grid3 sec-c",
                    children: [
                      (0, a.jsx)("div", {
                        className: "collectionName",
                        children: (0, a.jsxs)("div", {
                          className: "titleColumn tex-c mar-b4",
                          children: [
                            (0, a.jsxs)(u.Z, {
                              className: "".concat(o().intMoreDelay),
                              after: o().intActive,
                              children: [
                                (0, a.jsx)("h5", {
                                  className: "fon5 fonSp5 mar-b1",
                                  children: t.catchCopy.subTitle,
                                }),
                                (0, a.jsx)("h2", {
                                  className: "fon2 fonSp2 bold mar-b05",
                                  children: t.catchCopy.title,
                                }),
                                (0, a.jsx)("div", {
                                  className: "titleBorder sec-c",
                                }),
                              ],
                            }),
                            (0, a.jsx)(u.Z, {
                              className: "intMostDelay",
                              after: "intActive",
                              children: (0, a.jsx)("h5", {
                                className: "fon5 fonSp5 titleText mar-t2",
                                dangerouslySetInnerHTML: {
                                  __html: t.catchCopy.text,
                                },
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)(u.Z, {
                        className: "intMostDelay",
                        after: "intActive",
                        children: (0, a.jsx)(r.Z, { roseCo: v }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    onClick: function () {
                      S(function (e) {
                        return !e;
                      });
                    },
                    className: "moreView ".concat(
                      T ? "" : "active",
                      " sectionSpaceM"
                    ),
                    children: (0, a.jsx)(l.Z, { text: t.catchCopy.moreView }),
                  }),
                  (0, a.jsx)("div", {
                    className: "newsMessage ".concat(
                      0 == p.length ? "active" : "",
                      " tex-c"
                    ),
                    children: (0, a.jsx)("h5", { children: t.moreView }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    3378: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"meta":{"pageName":"/miwakoTiqueSeries","title":"ミワコ ティーク シリーズ | ROSETIQUE JAPAN","description":"美しく品格のある花姿、芳醇な香り、丈夫な茎と花保ちの良さ、トゲの少ない扱いやすさにこだわった、フラッグシップシリーズです。","image":"/img/ogp.jpg","appId":"1809010892654485","author":"\xa9 2023 ROSETIQUE JAPAN Inc.","locale":"en_US"},"catchCopy":{"subTitle":"ミワコ ティーク シリーズ","title":"Miwako TIQUE Series","text":"美しく品格のある花姿、芳醇な香り、丈夫な茎と花保ちの良さ、トゲの少ない扱いやすさにこだわった、フラッグシップシリーズです。","noData":"品種がありません。","moreView":"View More"}}'
      );
    },
    2164: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"meta":{"pageName":"/miwakoTiqueSeries","title":"ミワコ ティーク シリーズ | ROSETIQUE JAPAN","description":"美しく品格のある花姿、芳醇な香り、丈夫な茎と花保ちの良さ、トゲの少ない扱いやすさにこだわった、フラッグシップシリーズです。","image":"/img/ogp.jpg","appId":"1809010892654485","author":"\xa9 2023 ROSETIQUE JAPAN Inc.","locale":"ja_JP"},"catchCopy":{"subTitle":"ミワコ ティーク シリーズ","title":"Miwako TIQUE Series","text":"美しく品格のある花姿、芳醇な香り、丈夫な茎と花保ちの良さ、トゲの少ない扱いやすさにこだわった、フラッグシップシリーズです。","noData":"品種がありません。","moreView":"もっと見る"}}'
      );
    },
  },
  function (e) {
    e.O(0, [642, 774, 888, 179], function () {
      return e((e.s = 587));
    }),
      (_N_E = e.O());
  },
]);
