(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [999],
  {
    7212: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/brandNew",
        function () {
          return n(1838);
        },
      ]);
    },
    4667: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = n(5893),
        c = n(9008),
        s = n.n(c);
      function r(e) {
        var t = e.meta;
        return (0, a.jsxs)(s(), {
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
    1838: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return p;
          },
          default: function () {
            return d;
          },
        });
      var a = n(5893),
        c = n(7294),
        s = n(1163),
        r = n(8654),
        o = n.n(r),
        i = n(7438),
        l = n(2442);
      n(4372);
      var u = n(5990);
      n(4490);
      var m = n(4667),
        p = !0;
      function d(e) {
        var t,
          r = (0, s.useRouter)().locale;
        "ja" == r ? (t = n(4973)) : "en" == r && (t = n(487));
        var p = e.formas,
          d = (0, c.useState)(!1),
          f = (d[0], d[1]);
        (0, c.useEffect)(function () {
          document.body.classList.add("active"),
            setTimeout(function () {
              f(!0);
            }, 500);
        }, []);
        var x = (0, c.useState)(10),
          h = x[0],
          j = x[1],
          N = (0, c.useState)(!1),
          w = N[0],
          g = N[1],
          _ = (0, c.useRef)(!1),
          b = p.filter(function (e) {
            return "Brand-new" == e.node.rose_spec.genre;
          }).length,
          v = p
            .filter(function (e) {
              return "Brand-new" == e.node.rose_spec.genre;
            })
            .slice(0, h),
          y = (0, c.useState)(!1),
          S = y[0],
          E = y[1],
          C = (0, c.useState)(!1);
        return (
          C[0],
          C[1],
          (0, c.useEffect)(function () {
            (_.current = !0), b > 10 && E(!0);
          }, []),
          (0, c.useEffect)(
            function () {
              _.current
                ? (_.current = !1)
                : h < b - 10
                ? j(h + 10)
                : h >= b - 10 && (j(h + 10), E(!1));
            },
            [w]
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
                      (0, a.jsxs)("div", {
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
                      (0, a.jsx)(u.Z, {
                        className: "intMostDelay",
                        after: "intActive",
                        children: (0, a.jsx)(i.Z, { roseCo: v, locale: r }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    onClick: function () {
                      g(function (e) {
                        return !e;
                      });
                    },
                    className: "moreView ".concat(
                      S ? "" : "active",
                      " sectionSpaceM"
                    ),
                    children: (0, a.jsx)(l.Z, { text: t.catchCopy.moreView }),
                  }),
                  (0, a.jsx)("div", {
                    className: "newsMessage ".concat(
                      0 == p.length ? "active" : "",
                      " tex-c"
                    ),
                    children: (0, a.jsx)("h5", {
                      children: t.catchCopy.noData,
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    487: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"meta":{"pageName":"/brandNew","title":"今年の新品種 | ROSETIQUE JAPAN","description":"トレンドをリードする花姿の良いものの中から、耐病性や生産性に優れた品種だけを厳選してお届けします。","image":"/img/ogp.jpg","appId":"1809010892654485","author":"\xa9 2023 ROSETIQUE JAPAN Inc.","locale":"en_US"},"catchCopy":{"subTitle":"今年の新品種","title":"Brand-new","text":"トレンドをリードする花姿の良いものの中から、<br class=\\"br\\" />耐病性や生産性に優れた品種だけを厳選してお届けします。","noData":"品種がありません。","moreView":"View More"}}'
      );
    },
    4973: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"meta":{"pageName":"/brandNew","title":"今年の新品種 | ROSETIQUE JAPAN","description":"トレンドをリードする花姿の良いものの中から、耐病性や生産性に優れた品種だけを厳選してお届けします。","image":"/img/ogp.jpg","appId":"1809010892654485","author":"\xa9 2023 ROSETIQUE JAPAN Inc.","locale":"ja_JP"},"catchCopy":{"subTitle":"今年の新品種","title":"Brand-new","text":"トレンドをリードする花姿の良いものの中から、<br class=\\"br\\" />耐病性や生産性に優れた品種だけを厳選してお届けします。","noData":"品種がありません。","moreView":"もっと見る"}}'
      );
    },
  },
  function (e) {
    e.O(0, [642, 774, 888, 179], function () {
      return e((e.s = 7212));
    }),
      (_N_E = e.O());
  },
]);
