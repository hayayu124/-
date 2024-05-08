(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1118: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(3047);
        },
      ]);
    },
    1210: function (e, t) {
      "use strict";
      function n(e, t, n, o) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = n),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    8418: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(4941).Z;
      n(5753).default,
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = n(2648).Z,
        a = n(7273).Z,
        c = r(n(7294)),
        i = n(6273),
        s = n(2725),
        l = n(3462),
        u = n(1018),
        d = n(7190),
        f = n(1210),
        h = n(8684),
        m = {};
      function p(e, t, n, o) {
        if (e && i.isLocalURL(t)) {
          Promise.resolve(e.prefetch(t, n, o)).catch(function (e) {});
          var r = o && void 0 !== o.locale ? o.locale : e && e.locale;
          m[t + "%" + n + (r ? "%" + r : "")] = !0;
        }
      }
      var x = c.default.forwardRef(function (e, t) {
        var n,
          r,
          x = e.href,
          v = e.as,
          j = e.children,
          _ = e.prefetch,
          g = e.passHref,
          b = e.replace,
          y = e.shallow,
          C = e.scroll,
          w = e.locale,
          N = e.onClick,
          M = e.onMouseEnter,
          k = e.onTouchStart,
          S = e.legacyBehavior,
          L = void 0 === S ? !0 !== Boolean(!1) : S,
          O = a(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (n = j),
          L &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = c.default.createElement("a", null, n));
        var E = !1 !== _,
          T = c.default.useContext(l.RouterContext),
          I = c.default.useContext(u.AppRouterContext);
        I && (T = I);
        var B = c.default.useMemo(
            function () {
              var e = o(i.resolveHref(T, x, !0), 2),
                t = e[0],
                n = e[1];
              return { href: t, as: v ? i.resolveHref(T, v) : n || t };
            },
            [T, x, v]
          ),
          P = B.href,
          R = B.as,
          D = c.default.useRef(P),
          A = c.default.useRef(R);
        L && (r = c.default.Children.only(n));
        var U = L ? r && "object" == typeof r && r.ref : t,
          q = o(d.useIntersection({ rootMargin: "200px" }), 3),
          K = q[0],
          H = q[1],
          J = q[2],
          Z = c.default.useCallback(
            function (e) {
              (A.current !== R || D.current !== P) &&
                (J(), (A.current = R), (D.current = P)),
                K(e),
                U &&
                  ("function" == typeof U
                    ? U(e)
                    : "object" == typeof U && (U.current = e));
            },
            [R, U, P, J, K]
          );
        c.default.useEffect(
          function () {
            var e = H && E && i.isLocalURL(P),
              t = void 0 !== w ? w : T && T.locale,
              n = m[P + "%" + R + (t ? "%" + t : "")];
            e && !n && p(T, P, R, { locale: t });
          },
          [R, P, H, w, E, T]
        );
        var G = {
          ref: Z,
          onClick: function (e) {
            L || "function" != typeof N || N(e),
              L &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, o, r, a, s, l, u, d) {
                  if (
                    "A" !== e.currentTarget.nodeName.toUpperCase() ||
                    ((!(h = (f = e).currentTarget.target) || "_self" === h) &&
                      !f.metaKey &&
                      !f.ctrlKey &&
                      !f.shiftKey &&
                      !f.altKey &&
                      (!f.nativeEvent || 2 !== f.nativeEvent.which) &&
                      i.isLocalURL(n))
                  ) {
                    e.preventDefault();
                    var f,
                      h,
                      m = function () {
                        "beforePopState" in t
                          ? t[r ? "replace" : "push"](n, o, {
                              shallow: a,
                              locale: l,
                              scroll: s,
                            })
                          : t[r ? "replace" : "push"](n, {
                              forceOptimisticNavigation: !d,
                            });
                      };
                    u ? c.default.startTransition(m) : m();
                  }
                })(e, T, P, R, b, y, C, w, Boolean(I), E);
          },
          onMouseEnter: function (e) {
            L || "function" != typeof M || M(e),
              L &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              !(!E && I) && i.isLocalURL(P) && p(T, P, R, { priority: !0 });
          },
          onTouchStart: function (e) {
            L || "function" != typeof k || k(e),
              L &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              !(!E && I) && i.isLocalURL(P) && p(T, P, R, { priority: !0 });
          },
        };
        if (!L || g || ("a" === r.type && !("href" in r.props))) {
          var Q = void 0 !== w ? w : T && T.locale,
            W =
              T &&
              T.isLocaleDomain &&
              f.getDomainLocale(R, Q, T.locales, T.domainLocales);
          G.href = W || h.addBasePath(s.addLocale(R, Q, T && T.defaultLocale));
        }
        return L
          ? c.default.cloneElement(r, G)
          : c.default.createElement("a", Object.assign({}, O, G), n);
      });
      (t.default = x),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    7190: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(4941).Z;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            n = e.rootMargin,
            l = e.disabled || !c,
            u = o(r.useState(!1), 2),
            d = u[0],
            f = u[1],
            h = o(r.useState(null), 2),
            m = h[0],
            p = h[1];
          return (
            r.useEffect(
              function () {
                if (c) {
                  if (!l && !d && m && m.tagName) {
                    var e, o, r, u, h, p, x;
                    return (
                      (o = function (e) {
                        return e && f(e);
                      }),
                      (h = (u = (function (e) {
                        var t,
                          n = {
                            root: e.root || null,
                            margin: e.rootMargin || "",
                          },
                          o = s.find(function (e) {
                            return e.root === n.root && e.margin === n.margin;
                          });
                        if (o && (t = i.get(o))) return t;
                        var r = new Map();
                        return (
                          (t = {
                            id: n,
                            observer: new IntersectionObserver(function (e) {
                              e.forEach(function (e) {
                                var t = r.get(e.target),
                                  n =
                                    e.isIntersecting || e.intersectionRatio > 0;
                                t && n && t(n);
                              });
                            }, e),
                            elements: r,
                          }),
                          s.push(n),
                          i.set(n, t),
                          t
                        );
                      })(
                        (r = {
                          root: null == t ? void 0 : t.current,
                          rootMargin: n,
                        })
                      )).id),
                      (p = u.observer),
                      (x = u.elements).set(m, o),
                      p.observe(m),
                      function () {
                        if ((x.delete(m), p.unobserve(m), 0 === x.size)) {
                          p.disconnect(), i.delete(h);
                          var e = s.findIndex(function (e) {
                            return e.root === h.root && e.margin === h.margin;
                          });
                          e > -1 && s.splice(e, 1);
                        }
                      }
                    );
                  }
                } else if (!d) {
                  var v = a.requestIdleCallback(function () {
                    return f(!0);
                  });
                  return function () {
                    return a.cancelIdleCallback(v);
                  };
                }
              },
              [m, l, n, t, d]
            ),
            [
              p,
              d,
              r.useCallback(function () {
                f(!1);
              }, []),
            ]
          );
        });
      var r = n(7294),
        a = n(9311),
        c = "function" == typeof IntersectionObserver,
        i = new Map(),
        s = [];
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1018: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TemplateContext =
          t.GlobalLayoutRouterContext =
          t.LayoutRouterContext =
          t.AppRouterContext =
            void 0);
      var o = (0, n(2648).Z)(n(7294)),
        r = o.default.createContext(null);
      t.AppRouterContext = r;
      var a = o.default.createContext(null);
      t.LayoutRouterContext = a;
      var c = o.default.createContext(null);
      t.GlobalLayoutRouterContext = c;
      var i = o.default.createContext(null);
      t.TemplateContext = i;
    },
    3047: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return j;
          },
        });
      var o = n(1799),
        r = n(5893),
        a = n(7294);
      n(4534), n(5880), n(8628);
      var c = n(1785),
        i = n.n(c),
        s = n(9008),
        l = n.n(s),
        u = n(2603),
        d = n.n(u),
        f = n(1664),
        h = n.n(f);
      function m() {
        var e = (0, a.useState)(!1),
          t = e[0],
          n = e[1];
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className: "".concat(d().header, " ").concat(d().backColor1),
            children: [
              (0, r.jsxs)("div", {
                className: "".concat(d().headerContents, " grid1"),
                children: [
                  (0, r.jsx)("div", {
                    className: "".concat(d().headerLogo),
                    children: (0, r.jsx)(h(), {
                      href: "/",
                      children: (0, r.jsx)("img", {
                        src: "/img/logo_tendency.png",
                        alt: "",
                      }),
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: "".concat(d().headerMenuColumn),
                    children: [
                      (0, r.jsx)("div", {
                        className: "".concat(d().headerMenu, " "),
                        children: (0, r.jsx)(h(), {
                          href: "/",
                          children: (0, r.jsx)("h5", { children: "Top" }),
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "".concat(d().headerMenu, " "),
                        children: (0, r.jsx)(h(), {
                          href: "/news",
                          children: (0, r.jsx)("h5", { children: "News" }),
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: ""
                          .concat(d().headerMenu, " ")
                          .concat(d().headerCollectionMenu),
                        children: [
                          (0, r.jsx)("h5", { children: "Collection" }),
                          (0, r.jsxs)("div", {
                            className: "".concat(d().headerCollectionSubMenu),
                            children: [
                              (0, r.jsxs)("div", {
                                className: "".concat(
                                  d().headerCollectionSubMenuDetail
                                ),
                                children: [
                                  (0, r.jsx)(h(), {
                                    href: "/brandNew",
                                    children: (0, r.jsx)("h5", {
                                      children: "Brand-New",
                                    }),
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "".concat(d().border),
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "".concat(
                                  d().headerCollectionSubMenuDetail
                                ),
                                children: [
                                  (0, r.jsx)(h(), {
                                    href: "/miwakoTiqueSeries",
                                    children: (0, r.jsx)("h5", {
                                      children: "MIWAKO TIQUE Serious",
                                    }),
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "".concat(d().border),
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "".concat(
                                  d().headerCollectionSubMenuDetail
                                ),
                                children: [
                                  (0, r.jsx)(h(), {
                                    href: "/varietyList",
                                    children: (0, r.jsx)("h5", {
                                      children: "Variety",
                                    }),
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "".concat(d().border),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "".concat(d().headerMenu),
                        children: (0, r.jsx)(h(), {
                          href: "/contact",
                          children: (0, r.jsx)("h5", { children: "Contact" }),
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "".concat(d().humburgerMenu),
                    children: (0, r.jsxs)("div", {
                      onClick: function () {
                        n(function (e) {
                          return !e;
                        });
                      },
                      className: ""
                        .concat(d().humburgerbutton, " ")
                        .concat(t ? d().active : ""),
                      children: [
                        (0, r.jsx)("div", {
                          className: "".concat(d().humburgerBorder),
                        }),
                        (0, r.jsx)("div", {
                          className: "".concat(d().humburgerBorder),
                        }),
                        (0, r.jsx)("div", {
                          className: "".concat(d().humburgerBorder),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: ""
                  .concat(d().humburgerContents, " ")
                  .concat(t ? d().active : "", " pos-r"),
                children: (0, r.jsxs)("div", {
                  className: "".concat(d().humburgerMenuColumn, " pos-a"),
                  children: [
                    (0, r.jsx)(h(), {
                      href: "/",
                      children: (0, r.jsx)("h3", {
                        onClick: function () {
                          n(function (e) {
                            return !e;
                          });
                        },
                        className: "fon3Sp",
                        children: "Top",
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "".concat(d().humburgerBorder),
                    }),
                    (0, r.jsx)(h(), {
                      href: "/news",
                      children: (0, r.jsx)("h3", {
                        onClick: function () {
                          n(function (e) {
                            return !e;
                          });
                        },
                        className: "fon3Sp",
                        children: "News",
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "".concat(d().humburgerBorder),
                    }),
                    (0, r.jsx)("h3", {
                      className: "fon3Sp bold",
                      children: "Collection",
                    }),
                    (0, r.jsx)("div", {
                      className: "".concat(d().humburgerBorder),
                    }),
                    (0, r.jsx)(h(), {
                      href: "/brandNew",
                      children: (0, r.jsx)("h5", {
                        onClick: function () {
                          n(function (e) {
                            return !e;
                          });
                        },
                        children: "Brand-New",
                      }),
                    }),
                    (0, r.jsx)(h(), {
                      href: "/miwakoTiqueSeries",
                      children: (0, r.jsx)("h5", {
                        onClick: function () {
                          n(function (e) {
                            return !e;
                          });
                        },
                        children: "MIWAKO TIQUE Serious",
                      }),
                    }),
                    (0, r.jsx)(h(), {
                      href: "/varietyList",
                      children: (0, r.jsx)("h5", {
                        onClick: function () {
                          n(function (e) {
                            return !e;
                          });
                        },
                        children: "Variety",
                      }),
                    }),
                    (0, r.jsx)(h(), {
                      href: "/contact",
                      children: (0, r.jsx)("h3", {
                        onClick: function () {
                          n(function (e) {
                            return !e;
                          });
                        },
                        className: "fon3Sp",
                        children: "Contact",
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "".concat(d().humburgerBorder),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var p = n(3812),
        x = n.n(p);
      function v() {
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("footer", {
            className: "".concat(x().footer),
            children: [
              (0, r.jsxs)("div", {
                className: "".concat(x().footerColumn, " grid3"),
                children: [
                  (0, r.jsxs)("div", {
                    className: "".concat(x().rosetiqueInfo),
                    children: [
                      (0, r.jsxs)("h1", {
                        className: "fon3 fonSp2 ".concat(x().footerTitle),
                        children: ["ROSETIQUE", (0, r.jsx)("br", {}), "JAPAN"],
                      }),
                      (0, r.jsxs)("h5", {
                        children: [
                          "The Rose Maker IMAI KIYOSHI",
                          (0, r.jsx)("br", {}),
                          "Cut Rose Collection",
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "".concat(x().footerContents),
                    children: [
                      (0, r.jsx)("h3", { children: "Contents" }),
                      (0, r.jsxs)("div", {
                        className: "".concat(x().footerContentsDetail),
                        children: [
                          (0, r.jsx)(h(), {
                            href: "/",
                            children: (0, r.jsx)("h5", {
                              className: "".concat(x().footerMenu),
                              children: "TOP",
                            }),
                          }),
                          (0, r.jsx)(h(), {
                            href: "/news",
                            children: (0, r.jsx)("h5", {
                              className: "".concat(x().footerMenu),
                              children: "NEWS",
                            }),
                          }),
                          (0, r.jsx)("h5", { children: "Collection" }),
                          (0, r.jsx)(h(), {
                            href: "/brandNew",
                            children: (0, r.jsx)("h6", {
                              className: "".concat(x().footerMenu),
                              children: "\xa0\xa0Brand-New",
                            }),
                          }),
                          (0, r.jsx)(h(), {
                            href: "/miwakoTiqueSeries",
                            children: (0, r.jsx)("h6", {
                              className: "".concat(x().footerMenu),
                              children: "\xa0\xa0MIWAKO TIQUE Serious",
                            }),
                          }),
                          (0, r.jsx)(h(), {
                            href: "/varietyList",
                            children: (0, r.jsx)("h6", {
                              className: "".concat(x().footerMenu),
                              children: "\xa0\xa0Variety",
                            }),
                          }),
                          (0, r.jsx)(h(), {
                            href: "/company",
                            children: (0, r.jsx)("h5", {
                              className: "".concat(x().footerMenu),
                              children: "Company",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "".concat(x().footerContact),
                    children: [
                      (0, r.jsx)("h3", { children: "Contact" }),
                      (0, r.jsxs)("div", {
                        className: "".concat(x().footerContactDetail),
                        children: [
                          (0, r.jsxs)("h5", {
                            children: [
                              "品種に関するお問い合わせ、",
                              (0, r.jsx)("br", {}),
                              "取材などはこちらからお願いいたします。",
                            ],
                          }),
                          (0, r.jsx)(h(), {
                            href: "/contact",
                            children: (0, r.jsx)("div", {
                              className: ""
                                .concat(x().contactButton, " ")
                                .concat(x().footerMenu, " mar-t1"),
                              children: (0, r.jsx)("img", {
                                src: "/img/contactButton.png",
                                alt: "",
                              }),
                            }),
                          }),
                          (0, r.jsxs)("div", {
                            className: "".concat(x().snsColumn, " mar-t2"),
                            children: [
                              (0, r.jsx)("div", {
                                className: "".concat(x().snsIcon),
                                children: (0, r.jsx)("a", {
                                  href: "https://m.facebook.com/people/Rosetique-by-Miwako/100063798622514/",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: (0, r.jsx)("img", {
                                    src: "/img/facebook.png",
                                    alt: "",
                                  }),
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "".concat(x().snsIcon),
                                children: (0, r.jsx)("a", {
                                  href: "https://twitter.com/_rosetique_",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: (0, r.jsx)("img", {
                                    src: "/img/twitter.png",
                                    alt: "",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "".concat(x().footerCopilight),
                children: (0, r.jsx)("h6", {
                  children: "\xa9 2023 ROSETIQUE JAPAN Inc.",
                }),
              }),
            ],
          }),
        });
      }
      function j(e) {
        var t = e.Component,
          n = e.pageProps;
        (0, a.useEffect)(function () {
          i().initialize({ gtmId: "GTM-W5Q8GBS" });
        }, []);
        var c = "Rosetique カタログサイト";
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(l(), {
              children: [
                (0, r.jsx)("title", {
                  children:
                    "ROSETIQUE JAPAN | 日本発、お花に特化したライフスタイルブランド",
                }),
                (0, r.jsx)("meta", {
                  name: "description",
                  content:
                    "日本を代表する育種家、今井清氏のバラを日本全国へ世界へと普及する東京のアンテナショップです。今井清氏の種苗普及を通して、海外品種バラが大半を占める日本の花市場を活性化させ、国産バラ普及に向けて様々な取り組みを展開しています。",
                }),
                (0, r.jsx)("meta", {
                  name: "viewport",
                  content: "initial-scale=1.0, width=device-width",
                }),
                (0, r.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.googleapis.com",
                }),
                (0, r.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.gstatic.com",
                  crossorigin: !0,
                }),
                (0, r.jsx)("link", {
                  href: "https://fonts.googleapis.com/css2?family=Alkalami&family=Arbutus+Slab&family=Noto+Serif+JP:wght@500&family=Zen+Kaku+Gothic+New:wght@700&display=swap",
                  rel: "stylesheet",
                }),
                (0, r.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.googleapis.com",
                }),
                (0, r.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.gstatic.com",
                  crossorigin: !0,
                }),
                (0, r.jsx)("link", {
                  href: "https://fonts.googleapis.com/css2?family=Alkalami&family=Arbutus+Slab&family=Noto+Serif+JP:wght@500;700&family=Zen+Kaku+Gothic+New:wght@700&display=swap",
                  rel: "stylesheet",
                }),
                (0, r.jsx)("meta", { property: "og:site_name", content: c }),
                (0, r.jsx)("meta", { property: "og:locale", content: "ja_JP" }),
                (0, r.jsx)("meta", { property: "og:title", content: c }),
                (0, r.jsx)("meta", {
                  property: "og:description",
                  content:
                    "日本を代表する育種家、今井清氏のバラを日本全国へ世界へと普及する東京のアンテナショップです。今井清氏の種苗普及を通して、海外品種バラが大半を占める日本の花市場を活性化させ、国産バラ普及に向けて様々な取り組みを展開しています。",
                }),
                (0, r.jsx)("meta", {
                  property: "og:url",
                  content: "https://lordsmobile-g1.com/",
                }),
                (0, r.jsx)("meta", {
                  property: "og:image",
                  content: "/img/ogp.jpg",
                }),
                (0, r.jsx)("meta", { property: "og:type", content: "website" }),
                (0, r.jsx)("meta", {
                  name: "robots",
                  content: "noindex,nofollow",
                }),
                (0, r.jsx)("link", {
                  rel: "apple-touch-icon",
                  sizes: "180x180",
                  href: "/fav/apple-touch-icon.png",
                }),
                (0, r.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  sizes: "32x32",
                  href: "/fav/favicon-32x32.png",
                }),
                (0, r.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  sizes: "16x16",
                  href: "/fav/favicon-16x16.png",
                }),
                (0, r.jsx)("link", {
                  rel: "manifest",
                  href: "/fav/site.webmanifest",
                }),
                (0, r.jsx)("link", {
                  rel: "mask-icon",
                  href: "/fav/safari-pinned-tab.svg",
                  color: "#d9795a",
                }),
                (0, r.jsx)("link", {
                  rel: "shortcut icon",
                  href: "/fav/favicon.ico",
                }),
                (0, r.jsx)("meta", {
                  name: "msapplication-TileColor",
                  content: "#da532c",
                }),
                (0, r.jsx)("meta", {
                  name: "msapplication-config",
                  content: "/fav/browserconfig.xml",
                }),
                (0, r.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
              ],
            }),
            (0, r.jsx)(m, {}),
            (0, r.jsx)(t, (0, o.Z)({}, n)),
            (0, r.jsx)(v, {}),
          ],
        });
      }
    },
    3812: function (e) {
      e.exports = {
        footer: "footer_footer__WCChH",
        footerTitle: "footer_footerTitle____8nY",
        footerColumn: "footer_footerColumn__nZhLm",
        footerContentsDetail: "footer_footerContentsDetail__ATVp3",
        footerContactDetail: "footer_footerContactDetail__BfOLE",
        footerMenu: "footer_footerMenu__JG_Dg",
        contactButton: "footer_contactButton__EnXIp",
        snsColumn: "footer_snsColumn__w06_l",
        snsIcon: "footer_snsIcon__iiV2O",
        rosetiqueInfo: "footer_rosetiqueInfo__SW7Dr",
        footerContents: "footer_footerContents__lCxNq",
        footerCopilight: "footer_footerCopilight__ubYtB",
      };
    },
    2603: function (e) {
      e.exports = {
        backColor1: "header_backColor1__6U7l2",
        header: "header_header__pKEQL",
        headerContents: "header_headerContents__eIMai",
        headerLogo: "header_headerLogo__W6GOb",
        headerMenuColumn: "header_headerMenuColumn__XLLrK",
        headerMenu: "header_headerMenu__hhFkz",
        headerCollectionMenu: "header_headerCollectionMenu__QOpBX",
        headerCollectionSubMenu: "header_headerCollectionSubMenu__HBi4h",
        headerCollectionSubMenuDetail:
          "header_headerCollectionSubMenuDetail__cFJ00",
        border: "header_border__SuE_u",
        humburgerMenu: "header_humburgerMenu__8CWUn",
        humburgerbutton: "header_humburgerbutton__5md_J",
        humburgerBorder: "header_humburgerBorder__T_m_P",
        active: "header_active__6SwzS",
        humburgerContents: "header_humburgerContents__8mpCL",
        humburgerMenuColumn: "header_humburgerMenuColumn__3FaMD",
      };
    },
    4534: function () {},
    5880: function () {},
    8628: function () {},
    9008: function (e, t, n) {
      e.exports = n(5443);
    },
    1664: function (e, t, n) {
      e.exports = n(8418);
    },
    6421: function (e, t, n) {
      "use strict";
      var o,
        r,
        a = ((o = n(6425)), o && o.__esModule ? o : { default: o });
      e.exports = {
        tags: function (e) {
          var t = e.id,
            n = e.events,
            o = e.dataLayer,
            r = e.dataLayerName,
            c = e.preview,
            i = "&gtm_auth=" + e.auth,
            s = "&gtm_preview=" + c;
          t || (0, a.default)("GTM Id is required");
          var l =
            "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " +
            JSON.stringify(n).slice(1, -1) +
            "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" +
            i +
            s +
            "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" +
            r +
            "','" +
            t +
            "');";
          return {
            iframe:
              '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' +
              t +
              i +
              s +
              '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
            script: l,
            dataLayerVar: this.dataLayer(o, r),
          };
        },
        dataLayer: function (e, t) {
          return (
            "\n      window." +
            t +
            " = window." +
            t +
            " || [];\n      window." +
            t +
            ".push(" +
            JSON.stringify(e) +
            ")"
          );
        },
      };
    },
    8676: function (e, t, n) {
      "use strict";
      var o,
        r,
        a = ((o = n(6421)), o && o.__esModule ? o : { default: o });
      e.exports = {
        dataScript: function (e) {
          var t = document.createElement("script");
          return (t.innerHTML = e), t;
        },
        gtm: function (e) {
          var t,
            n,
            o = a.default.tags(e);
          return {
            noScript: function () {
              var e = document.createElement("noscript");
              return (e.innerHTML = o.iframe), e;
            },
            script: function () {
              var e = document.createElement("script");
              return (e.innerHTML = o.script), e;
            },
            dataScript: this.dataScript(o.dataLayerVar),
          };
        },
        initialize: function (e) {
          var t = e.gtmId,
            n = e.events,
            o = e.dataLayer,
            r = e.dataLayerName,
            a = e.auth,
            c = e.preview,
            i = this.gtm({
              id: t,
              events: void 0 === n ? {} : n,
              dataLayer: o || void 0,
              dataLayerName: void 0 === r ? "dataLayer" : r,
              auth: void 0 === a ? "" : a,
              preview: void 0 === c ? "" : c,
            });
          o && document.head.appendChild(i.dataScript),
            document.head.insertBefore(i.script(), document.head.childNodes[0]),
            document.body.insertBefore(
              i.noScript(),
              document.body.childNodes[0]
            );
        },
        dataLayer: function (e) {
          var t = e.dataLayer,
            n = e.dataLayerName,
            o = void 0 === n ? "dataLayer" : n;
          if (window[o]) return window[o].push(t);
          var r = a.default.dataLayer(t, o),
            c = this.dataScript(r);
          document.head.insertBefore(c, document.head.childNodes[0]);
        },
      };
    },
    1785: function (e, t, n) {
      "use strict";
      var o,
        r,
        a = ((o = n(8676)), o && o.__esModule ? o : { default: o });
      e.exports = a.default;
    },
    6425: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e) {
        console.warn("[react-gtm]", e);
      };
      t.default = n;
    },
    1799: function (e, t, n) {
      "use strict";
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              o(e, t, n[t]);
            });
        }
        return e;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(1118), t(387);
    }),
      (_N_E = e.O());
  },
]);
