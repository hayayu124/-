(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [513],
  {
    392: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/favorite",
        function () {
          return a(3110);
        },
      ]);
    },
    3110: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          __N_SSG: function () {
            return f;
          },
          default: function () {
            return d;
          },
        });
      var c = a(5893),
        n = a(7294),
        i = a(1163),
        s = a(8654),
        o = a.n(s),
        r = a(7438),
        l = a(2442);
      a(4372);
      var u = a(5990);
      a(4490);
      var f = !0;
      function d(e) {
        var t,
          s = (0, i.useRouter)().locale;
        "ja" == s ? (t = a(7501)) : "en" == s && (t = a(2095));
        var f = e.formas,
          d = (0, n.useState)(!1),
          m = (d[0], d[1]);
        (0, n.useEffect)(function () {
          document.body.classList.add("active"),
            setTimeout(function () {
              m(!0);
            }, 500);
        }, []);
        var p = (0, n.useState)([]),
          h = p[0],
          N = p[1],
          v = (0, n.useState)([]),
          S = v[0],
          x = v[1];
        (0, n.useEffect)(function () {
          var e = localStorage.getItem("id");
          e &&
            (N(JSON.parse(e)),
            x(
              f.filter(function (e) {
                return e.node.roseFormaId == h[0];
              })
            ));
        }, []),
          (0, n.useEffect)(
            function () {
              localStorage.setItem("id", JSON.stringify(h));
            },
            [S]
          );
        var j = (0, n.useState)(!1),
          g = j[0];
        j[1];
        var _ = (0, n.useState)(!1);
        return (
          _[0],
          _[1],
          (0, c.jsx)(c.Fragment, {
            children: (0, c.jsxs)("section", {
              className: "".concat(o().brandNew, " collection sectionSpaceM"),
              children: [
                (0, c.jsxs)("div", {
                  className: "collectionColumn sectionSpaceM tex-c grid3 sec-c",
                  children: [
                    (0, c.jsx)("div", {
                      className: "titleColumn tex-c mar-b4",
                      children: (0, c.jsxs)(u.Z, {
                        className: "".concat(o().intMoreDelay),
                        after: o().intActive,
                        children: [
                          (0, c.jsx)("h5", {
                            className: "fon5 fonSp5 mar-b1",
                            children: t.catchCopy.subTitle,
                          }),
                          (0, c.jsx)("h2", {
                            className: "fon2 fonSp2 bold mar-b05",
                            children: t.catchCopy.title,
                          }),
                          (0, c.jsx)("div", { className: "titleBorder sec-c" }),
                        ],
                      }),
                    }),
                    (0, c.jsx)(u.Z, {
                      className: "intMostDelay",
                      after: "intActive",
                      children: (0, c.jsx)(r.Z, { roseCo: S }),
                    }),
                  ],
                }),
                (0, c.jsx)("div", {
                  onClick: function () {
                    setMoreView(function (e) {
                      return !e;
                    });
                  },
                  className: "moreView ".concat(
                    g ? "" : "active",
                    " sectionSpaceM"
                  ),
                  children: (0, c.jsx)(l.Z, {}),
                }),
                (0, c.jsx)("div", {
                  className: "newsMessage ".concat(
                    0 == f.length ? "active" : "",
                    " tex-c"
                  ),
                  children: (0, c.jsx)("h5", {
                    children: "品種がありません。",
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    2095: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"meta":{"pageName":"/favorite","title":"お気に入りの品種 | ROSETIQUE JAPAN","description":"お気に入りの品種","image":"/img/ogp.jpg","appId":"1809010892654485","author":"\xa9 2023 ROSETIQUE JAPAN Inc.","locale":"ja_JP"},"catchCopy":{"subTitle":"お気に入り","title":"Fovorite","noData":"品種がありません。","moreView":"もっと見る"}}'
      );
    },
    7501: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"meta":{"pageName":"/favorite","title":"お気に入りの品種 | ROSETIQUE JAPAN","description":"お気に入りの品種","image":"/img/ogp.jpg","appId":"1809010892654485","author":"\xa9 2023 ROSETIQUE JAPAN Inc.","locale":"ja_JP"},"catchCopy":{"subTitle":"お気に入り","title":"Fovorite","noData":"品種がありません。","moreView":"もっと見る"}}'
      );
    },
  },
  function (e) {
    e.O(0, [642, 774, 888, 179], function () {
      return e((e.s = 392));
    }),
      (_N_E = e.O());
  },
]);
