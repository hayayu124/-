(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [521],
  {
    512: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about",
        function () {
          return s(414);
        },
      ]);
    },
    4667: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return n;
        },
      });
      var r = s(5893),
        a = s(9008),
        c = s.n(a);
      function n(e) {
        var t = e.meta;
        return (0, r.jsxs)(c(), {
          children: [
            (0, r.jsx)("meta", {
              name: "viewport",
              content:
                "width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, viewport-fit=cover",
            }),
            (0, r.jsx)("title", { children: t.title }),
            (0, r.jsx)("meta", { name: "description", content: t.description }),
            (0, r.jsx)("meta", { property: "og:title", content: t.title }),
            (0, r.jsx)("meta", {
              property: "og:description",
              content: t.title,
            }),
            (0, r.jsx)("meta", { property: "og:url", content: t.pageName }),
            (0, r.jsx)("meta", { property: "og:site_name", content: t.title }),
            (0, r.jsx)("meta", { property: "og:locale", content: t.locale }),
            (0, r.jsx)("meta", { property: "fb:app_id", content: "" }),
            (0, r.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, r.jsx)("meta", { name: "robots", content: "all" }),
            (0, r.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
          ],
        });
      }
    },
    4490: function (e, t, s) {
      "use strict";
      s(7294);
    },
    5990: function (e, t, s) {
      "use strict";
      var r = s(828),
        a = s(5893);
      s(7294);
      var c = s(7650),
        n = function (e) {
          var t = (0, r.Z)(
              (0, c.YD)({ rootMargin: "-200px 0px", triggerOnce: !0 }),
              2
            ),
            s = t[0],
            n = t[1],
            i = e.children,
            o = e.className,
            l = e.after;
          return (0, a.jsx)(a.Fragment, {
            children: l
              ? (0, a.jsx)("div", {
                  className: "".concat(o).concat(n ? " " + l : ""),
                  ref: s,
                  children: i,
                })
              : (0, a.jsx)("div", {
                  className: "int".concat(n ? " intActive" : ""),
                  ref: s,
                  children: i,
                }),
          });
        };
      t.Z = n;
    },
    414: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var r = s(5893),
        a = s(7294),
        c = s(1163),
        n = s(2335),
        i = s.n(n),
        o = s(5990);
      s(4490);
      var l = s(4667);
      function u() {
        var e,
          t = (0, a.useState)(!1),
          n = (t[0], t[1]);
        (0, a.useEffect)(function () {
          document.body.classList.add("active"),
            setTimeout(function () {
              n(!0);
            }, 500);
        }, []);
        var u = (0, c.useRouter)().locale;
        return (
          "ja" == u ? (e = s(4662)) : "en" == u && (e = s(8159)),
          console.log(e),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(l.Z, { meta: e.meta }),
              (0, r.jsx)(o.Z, {
                children: (0, r.jsxs)("section", {
                  className: "".concat(i().kv, " pos-r"),
                  children: [
                    (0, r.jsx)("div", {
                      className: "".concat(i().kvImgback, " pos-r"),
                    }),
                    (0, r.jsx)("div", {
                      className: "".concat(i().kvText, " tex-c pos-a"),
                      children: (0, r.jsxs)(o.Z, {
                        className: "".concat(i().inMoreDelay),
                        after: i().intActive,
                        children: [
                          (0, r.jsx)("h5", {
                            className: "fon4 fonSp5 mar-b05",
                            children: e.kv.subTitle,
                          }),
                          (0, r.jsx)("h2", {
                            className: "fon1 fonSp2 bold",
                            dangerouslySetInnerHTML: { __html: e.kv.title },
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, r.jsx)(o.Z, {
                children: (0, r.jsxs)("section", {
                  className: "".concat(i().feature, " sectionSpaceM sec-c"),
                  children: [
                    (0, r.jsxs)("div", {
                      className: "titleColumn tex-c",
                      children: [
                        (0, r.jsxs)(o.Z, {
                          className: "".concat(i().intMoreDelay),
                          after: i().intActive,
                          children: [
                            (0, r.jsx)("h5", {
                              className: "fon5 fonSp5 mar-b1",
                              children: e.catchCopy.subTitle,
                            }),
                            (0, r.jsx)("h2", {
                              className: "fon2 fonSp2 bold mar-b05",
                              children: e.catchCopy.title,
                            }),
                            (0, r.jsx)("div", {
                              className: "titleBorder sec-c",
                            }),
                          ],
                        }),
                        (0, r.jsx)(o.Z, {
                          className: "intMostDelay",
                          after: "intActive",
                          children: (0, r.jsx)("h5", {
                            className: "fon5 fonSp5 titleText mar-t2",
                            dangerouslySetInnerHTML: {
                              __html: e.catchCopy.text,
                            },
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsx)(o.Z, {
                      className: "intMostDelay",
                      after: "intActive",
                      children: (0, r.jsxs)("div", {
                        className: "".concat(
                          i().featureFeatureColumn,
                          " flowerColumn mar-t4 grid4 fle-f"
                        ),
                        children: [
                          (0, r.jsx)("div", {
                            className: "".concat(
                              i().featureFeaturePic,
                              " flowerColumnPic"
                            ),
                            children: (0, r.jsx)("img", {
                              src: "/img/flower_3.jpg",
                              alt: "",
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "".concat(
                              i().featureFeaturePic,
                              " flowerColumnPic"
                            ),
                            children: (0, r.jsx)("img", {
                              src: "/img/flower_4.jpg",
                              alt: "",
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "".concat(
                              i().featureFeaturePic,
                              " flowerColumnPic"
                            ),
                            children: (0, r.jsx)("img", {
                              src: "/img/flower_5.jpg",
                              alt: "",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, r.jsx)(o.Z, {
                children: (0, r.jsxs)("section", {
                  className: "".concat(i().persons, " sectionSpaceM sec-c"),
                  children: [
                    (0, r.jsx)("div", {
                      className: "titleColumn tex-c",
                      children: (0, r.jsxs)(o.Z, {
                        className: "".concat(i().intMoreDelay),
                        after: i().intActive,
                        children: [
                          (0, r.jsx)("h5", {
                            className: "fon5 fonSp5 mar-b1",
                            children: e.people.subTitle,
                          }),
                          (0, r.jsx)("h2", {
                            className: "fon2 fonSp2 bold mar-b05",
                            children: e.people.title,
                          }),
                          (0, r.jsx)("div", { className: "titleBorder sec-c" }),
                        ],
                      }),
                    }),
                    (0, r.jsxs)(o.Z, {
                      className: "intMostDelay",
                      after: "intActive",
                      children: [
                        (0, r.jsx)("div", {
                          className: "".concat(i().personsPic, " mar-t4 grid3"),
                          children: (0, r.jsx)("img", {
                            src: "/img/personsPic.jpg",
                            alt: "",
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className: "".concat(
                            i().personsProfile,
                            " mar-t4 grid4"
                          ),
                          children: (0, r.jsxs)("div", {
                            className: "".concat(i().personsProfileDetail),
                            children: [
                              (0, r.jsx)("h5", {
                                className: "fon5 fonSp5",
                                dangerouslySetInnerHTML: {
                                  __html: e.people.position,
                                },
                              }),
                              (0, r.jsx)("h2", {
                                className: "fon3 fonSp3 mar-b1",
                                children: e.people.name,
                              }),
                              (0, r.jsx)("h6", {
                                className: "fon5 fonSp5 ".concat(
                                  i().miwakoProfileDetail
                                ),
                                dangerouslySetInnerHTML: {
                                  __html: e.people.profileText,
                                },
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, r.jsx)(o.Z, {
                className: "intMostDelay",
                after: "intActive",
                children: (0, r.jsxs)("div", {
                  className: "".concat(i().story, " grid4 sec-c fle-f"),
                  children: [
                    (0, r.jsxs)("div", {
                      className: "".concat(i().storyText),
                      children: [
                        (0, r.jsx)("h2", {
                          className: "fon3 fonSp3 mar-b1",
                          children: e.story.title1,
                        }),
                        (0, r.jsx)("p", {
                          className: "fon5 fonSp5",
                          children: e.story.text1,
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "".concat(i().storyPic1),
                      children: (0, r.jsx)("img", {
                        src: "/img/content_story1.jpg",
                        alt: "",
                      }),
                    }),
                  ],
                }),
              }),
              (0, r.jsx)(o.Z, {
                className: "intMostDelay",
                after: "intActive",
                children: (0, r.jsxs)("div", {
                  className: "".concat(i().story, " grid4 sec-c fle-f"),
                  children: [
                    (0, r.jsx)("div", {
                      className: "".concat(i().storyPic2),
                      children: (0, r.jsx)("img", {
                        src: "/img/content_story2.jpg",
                        alt: "",
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className: "".concat(i().storyText),
                      children: [
                        (0, r.jsx)("h2", {
                          className: "fon3 fonSp3 mar-b1",
                          children: e.story.title2,
                        }),
                        (0, r.jsx)("p", {
                          className: "fon5 fonSp5",
                          children: e.story.text2,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, r.jsx)(o.Z, {
                children: (0, r.jsxs)("section", {
                  className: "".concat(
                    i().access,
                    " foncolW sectionSpaceM sec-c"
                  ),
                  children: [
                    (0, r.jsx)("div", {
                      className: "titleColumn tex-c",
                      children: (0, r.jsxs)(o.Z, {
                        className: "".concat(i().intMoreDelay),
                        after: i().intActive,
                        children: [
                          (0, r.jsx)("h5", {
                            className: "fon5 fonSp5 mar-b1",
                            children: e.access.subTitle,
                          }),
                          (0, r.jsx)("h2", {
                            className: "fon2 fonSp2 bold mar-b05",
                            children: e.access.title,
                          }),
                          (0, r.jsx)("div", {
                            className: "titleBorder sec-c white",
                          }),
                        ],
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className: "".concat(
                        i().accessColumn,
                        " sec-c grid3 fle-f"
                      ),
                      children: [
                        (0, r.jsxs)("div", {
                          className: "".concat(i().accessDetail),
                          children: [
                            (0, r.jsx)("h3", {
                              className: "fon3 fonSp3 bold mar-b1",
                              children: e.access.farmName,
                            }),
                            (0, r.jsx)("p", {
                              className: "fon4 fonSp5",
                              dangerouslySetInnerHTML: {
                                __html: e.access.address,
                              },
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "".concat(i().accessMap, " pos-r"),
                          children: [
                            (0, r.jsx)("div", {
                              className: "".concat(i().mapImage, " pos-r"),
                              children: (0, r.jsx)("a", {
                                href: "https://goo.gl/maps/tpAfs6ugpiSPbqyDA",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, r.jsx)("img", {
                                  src: "/img/map.jpg",
                                  alt: "",
                                }),
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: "".concat(i().mapButton, " pos-a"),
                              children: (0, r.jsx)("a", {
                                href: "https://goo.gl/maps/tpAfs6ugpiSPbqyDA",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, r.jsx)("p", { children: "Map" }),
                              }),
                            }),
                          ],
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
    2335: function (e) {
      e.exports = {
        kv: "about_kv__mQPfb",
        kvImgback: "about_kvImgback__KCF4y",
        kvText: "about_kvText__4iKdK",
        feature: "about_feature__lnZaG",
        featureFeatureColumn: "about_featureFeatureColumn__IeYsl",
        featureFeaturePic: "about_featureFeaturePic__GAgEA",
        persons: "about_persons__RXiEu",
        personsPic: "about_personsPic__8HkuT",
        personsProfile: "about_personsProfile__geWd5",
        miwakoProfileDetail: "about_miwakoProfileDetail__eINyK",
        story: "about_story__REFMn",
        storyText: "about_storyText__NdkVJ",
        storyPic1: "about_storyPic1__MP_j0",
        storyPic2: "about_storyPic2__dD3L_",
        access: "about_access__eP4BU",
        accessColumn: "about_accessColumn__AkgTD",
        accessDetail: "about_accessDetail___VNe7",
        accessMap: "about_accessMap__0JJoE",
        mapImage: "about_mapImage__Dj7uj",
        mapButton: "about_mapButton__g4ZcW",
      };
    },
    943: function (e, t, s) {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var s = 0, r = Array(t); s < t; s++) r[s] = e[s];
        return r;
      }
      s.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    3375: function (e, t, s) {
      "use strict";
      function r(e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      s.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    828: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = s(3375),
        a = s(1566);
      function c(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (0, r.Z)(e, t) ||
          (0, a.Z)(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    1566: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = s(943);
      function a(e, t) {
        if (e) {
          if ("string" == typeof e) return (0, r.Z)(e, t);
          var s = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ("Object" === s && e.constructor && (s = e.constructor.name),
            "Map" === s || "Set" === s)
          )
            return Array.from(s);
          if (
            "Arguments" === s ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
          )
            return (0, r.Z)(e, t);
        }
      }
    },
    7650: function (e, t, s) {
      "use strict";
      s.d(t, {
        YD: function () {
          return o;
        },
      });
      var r = s(7294);
      let a = new Map(),
        c = new WeakMap(),
        n = 0,
        i;
      function o({
        threshold: e,
        delay: t,
        trackVisibility: s,
        rootMargin: o,
        root: l,
        triggerOnce: u,
        skip: m,
        initialInView: b,
        fallbackInView: d,
        onChange: f,
      } = {}) {
        var p;
        let [h, x] = r.useState(null),
          j = r.useRef(),
          [N, _] = r.useState({ inView: !!b, entry: void 0 });
        (j.current = f),
          r.useEffect(() => {
            if (m || !h) return;
            let r = (function (e, t, s = {}, r = i) {
              if (void 0 === window.IntersectionObserver && void 0 !== r) {
                let o = e.getBoundingClientRect();
                return (
                  t(r, {
                    isIntersecting: r,
                    target: e,
                    intersectionRatio:
                      "number" == typeof s.threshold ? s.threshold : 0,
                    time: 0,
                    boundingClientRect: o,
                    intersectionRect: o,
                    rootBounds: o,
                  }),
                  () => {}
                );
              }
              let {
                  id: l,
                  observer: u,
                  elements: m,
                } = (function (e) {
                  var t;
                  let s = Object.keys(e)
                      .sort()
                      .filter((t) => void 0 !== e[t])
                      .map((t) => {
                        var s;
                        return `${t}_${
                          "root" === t
                            ? (s = e.root)
                              ? (c.has(s) || ((n += 1), c.set(s, n.toString())),
                                c.get(s))
                              : "0"
                            : e[t]
                        }`;
                      })
                      .toString(),
                    r = a.get(s);
                  if (!r) {
                    let i = new Map(),
                      o,
                      l = new IntersectionObserver((t) => {
                        t.forEach((t) => {
                          var s;
                          let r =
                            t.isIntersecting &&
                            o.some((e) => t.intersectionRatio >= e);
                          e.trackVisibility &&
                            void 0 === t.isVisible &&
                            (t.isVisible = r),
                            null == (s = i.get(t.target)) ||
                              s.forEach((e) => {
                                e(r, t);
                              });
                        });
                      }, e);
                    (o =
                      l.thresholds ||
                      (Array.isArray(e.threshold)
                        ? e.threshold
                        : [e.threshold || 0])),
                      (r = { id: s, observer: l, elements: i }),
                      a.set(s, r);
                  }
                  return r;
                })(s),
                b = m.get(e) || [];
              return (
                m.has(e) || m.set(e, b),
                b.push(t),
                u.observe(e),
                function () {
                  b.splice(b.indexOf(t), 1),
                    0 === b.length && (m.delete(e), u.unobserve(e)),
                    0 === m.size && (u.disconnect(), a.delete(l));
                }
              );
            })(
              h,
              (e, t) => {
                _({ inView: e, entry: t }),
                  j.current && j.current(e, t),
                  t.isIntersecting && u && r && (r(), (r = void 0));
              },
              {
                root: l,
                rootMargin: o,
                threshold: e,
                trackVisibility: s,
                delay: t,
              },
              d
            );
            return () => {
              r && r();
            };
          }, [Array.isArray(e) ? e.toString() : e, h, l, o, u, m, s, d, t]);
        let g = null == (p = N.entry) ? void 0 : p.target;
        r.useEffect(() => {
          h || !g || u || m || _({ inView: !!b, entry: void 0 });
        }, [h, g, u, m, b]);
        let E = [x, N.inView, N.entry];
        return (E.ref = E[0]), (E.inView = E[1]), (E.entry = E[2]), E;
      }
    },
    8159: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"meta":{"pageName":"https://rosetique.tokyo/en/about","title":"About | ROSETIQUE JAPAN","description":"日本全国のバラ栽培生産者や花市場、生花店、一般消費者などと連携しご意見やトレンドを取り入れながら、日本屈指の育種家の方々とバラ研究に特化した岐阜大学ご協力の元、国内育種品種の普及をしていきたい！そして日本発世界へと純国産バラを広めたい！との想いで立ち上げた種苗会社です。 バラは全世界共通、最も名の知られた花であり、世界中にROSETIQUEを広め親しんで愛していただきたい！一般的な花形だけではなく、ROSETIQUEならではの香りに特化した、人の心を癒し、心身共に豊かになるバラ作りを目指しています。また生産者の方々に安心安定信頼して栽培していただき、心の豊かさと富を生み、潤いをもたらし生産者の皆様に寄り添う、生産者ファーストな種苗会社でありたい。ROSETIQUEのバラに関わるみなさまが明るくハッピーな気持ちになり、明日への活力になっていただけるようなバラ作りを心掛けております。バラを愛するすべてのみなさまと一緒にROSETIQUEを育てて、進化させましょう！","image":"/img/ogp.jpg","appId":"1809010892654485","author":"\xa9 2023 ROSETIQUE JAPAN Inc.","locale":"en_US"},"kv":{"subTitle":"DREAM ROSE JAPAN","title":"日本のバラを<br class=\\"brSp\\" />世界へ"},"catchCopy":{"subTitle":"ロゼティーク","title":"ROSETIQUE","text":"日本全国のバラ栽培生産者や花市場、生花店、一般消費者などと連携し <br class=\\"br\\" /> ご意見やトレンドを取り入れながら、日本屈指の育種家の方々と <br class=\\"br\\" /> バラ研究に特化した岐阜大学ご協力の元、国内育種品種の普及をしていきたい！ <br class=\\"br\\" /> <br /> そして日本発世界へと純国産バラを広めたい！ <br class=\\"br\\" /> との想いで立ち上げた種苗会社です。 バラは全世界共通、 <br class=\\"br\\" /> 最も名の知られた花であり、世界中にROSETIQUEを広め親しんで愛していただきたい！ <br class=\\"br\\" /> 一般的な花形だけではなく、ROSETIQUEならではの香りに特化した、 <br class=\\"br\\" /> 人の心を癒し、心身共に豊かになるバラ作りを目指しています。 <br class=\\"br\\" /> また生産者の方々に安心安定信頼して栽培していただき、 <br class=\\"br\\" /> 心の豊かさと富を生み、潤いをもたらし生産者の皆様に寄り添う、 <br class=\\"br\\" /> 生産者ファーストな種苗会社でありたい。 <br class=\\"br\\" /> ROSETIQUEのバラに関わるみなさまが明るくハッピーな気持ちになり、 <br class=\\"br\\" /> 明日への活力になっていただけるようなバラ作りを心掛けております。 <br class=\\"br\\" /> バラを愛するすべてのみなさまと一緒にROSETIQUEを育てて、進化させましょう！ <br class=\\"br\\" /> <br /> <br /> <span class=\\"bold\\"> 株式会社 ROSETIQUE JAPAN CEO/Flower Designer <br class=\\"br\\" /> Miwako </span>"},"people":{"subTitle":"人物","title":"Persons","position":"株式会社ROSETIQUE JAPAN<br />CEO / フラワーデザイナー","name":"MIWAKO","profileText":"欧米各国、主にフランスでフラワーアレンジメントを学ぶ。 <br class=\\"br\\" /> 航空業界勤務を経て、2000 年よりフラワーデザイナーとしてデビュー。 <br class=\\"br\\" /> 大手百貨店、JOMALONE LONDONや BMW MI NI、ESTEBANなど企業とのコラボレーション、 <br class=\\"br\\" /> 商品プロデュースなど多数。FLOWERS BY NAKED、京阪ホテルズ&リゾーツ「THOUSAND FLOWER＆ <br class=\\"br\\" /> GARDEN」などイベント監修と装花装飾制作。 2021年1月、資本業務提携により今井清氏とパートナーとなる。"},"story":{"title1":"Miwakoの原点,Paris","text1":"フラワーデザイナーMiwakoはフランスでフラワーアレンジを学びました。そのためMiwakoにとって、Parisは第二の故郷。他人は他人！という個人主義で自分に合ったスタイルにこだわるお洒落を追求し、女性であることを常に意識し美意識が高く、自分の個性を主張し続ける。Miwakoの花に対する考え方の原点がここに。","title2":"Miwakoの原点,Paris","text2":"Miwakoの原点,ParisフラワーデザイナーMiwakoはフランスでフラワーアレンジを学びました。そのためMiwakoにとって、Parisは第二の故郷。他人は他人！という個人主義で自分に合ったスタイルにこだわるお洒落を追求し、女性であることを常に意識し美意識が高く、自分の個性を主張し続ける。Miwakoの花に対する考え方の原点がここに。"},"access":{"subTitle":"アクセス","title":"Access","farmName":"育種圃場","address":"〒737-2609<br />広島県呉市安浦町大字中畑字立小路 510-262 <br />(瀬戸内海国立公園 野呂山山頂)<br /><br />TEL：0823-72-7634<br /> FAX：0823-71-6122"}}'
      );
    },
    4662: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"meta":{"pageName":"https://rosetique.tokyo/about","title":"About | ROSETIQUE JAPAN","description":"日本全国のバラ栽培生産者や花市場、生花店、一般消費者などと連携しご意見やトレンドを取り入れながら、日本屈指の育種家の方々とバラ研究に特化した岐阜大学ご協力の元、国内育種品種の普及をしていきたい！そして日本発世界へと純国産バラを広めたい！との想いで立ち上げた種苗会社です。 バラは全世界共通、最も名の知られた花であり、世界中にROSETIQUEを広め親しんで愛していただきたい！一般的な花形だけではなく、ROSETIQUEならではの香りに特化した、人の心を癒し、心身共に豊かになるバラ作りを目指しています。また生産者の方々に安心安定信頼して栽培していただき、心の豊かさと富を生み、潤いをもたらし生産者の皆様に寄り添う、生産者ファーストな種苗会社でありたい。ROSETIQUEのバラに関わるみなさまが明るくハッピーな気持ちになり、明日への活力になっていただけるようなバラ作りを心掛けております。バラを愛するすべてのみなさまと一緒にROSETIQUEを育てて、進化させましょう！","image":"/img/ogp.jpg","appId":"1809010892654485","author":"\xa9 2023 ROSETIQUE JAPAN Inc.","locale":"ja_JP"},"kv":{"subTitle":"DREAM ROSE JAPAN","title":"日本のバラを<br class=\\"brSp\\" />世界へ"},"catchCopy":{"subTitle":"ロゼティーク","title":"ROSETIQUE","text":"日本全国のバラ栽培生産者や花市場、生花店、一般消費者などと連携し <br class=\\"br\\" /> ご意見やトレンドを取り入れながら、日本屈指の育種家の方々と <br class=\\"br\\" /> バラ研究に特化した岐阜大学ご協力の元、国内育種品種の普及をしていきたい！ <br class=\\"br\\" /> <br /> そして日本発世界へと純国産バラを広めたい！ <br class=\\"br\\" /> との想いで立ち上げた種苗会社です。 バラは全世界共通、 <br class=\\"br\\" /> 最も名の知られた花であり、世界中にROSETIQUEを広め親しんで愛していただきたい！ <br class=\\"br\\" /> 一般的な花形だけではなく、ROSETIQUEならではの香りに特化した、 <br class=\\"br\\" /> 人の心を癒し、心身共に豊かになるバラ作りを目指しています。 <br class=\\"br\\" /> また生産者の方々に安心安定信頼して栽培していただき、 <br class=\\"br\\" /> 心の豊かさと富を生み、潤いをもたらし生産者の皆様に寄り添う、 <br class=\\"br\\" /> 生産者ファーストな種苗会社でありたい。 <br class=\\"br\\" /> ROSETIQUEのバラに関わるみなさまが明るくハッピーな気持ちになり、 <br class=\\"br\\" /> 明日への活力になっていただけるようなバラ作りを心掛けております。 <br class=\\"br\\" /> バラを愛するすべてのみなさまと一緒にROSETIQUEを育てて、進化させましょう！ <br class=\\"br\\" /> <br /> <br /> <span class=\\"bold\\"> 株式会社 ROSETIQUE JAPAN CEO/Flower Designer <br class=\\"br\\" /> Miwako </span>"},"people":{"subTitle":"人物","title":"Persons","position":"株式会社ROSETIQUE JAPAN<br />CEO / フラワーデザイナー","name":"MIWAKO","profileText":"欧米各国、主にフランスでフラワーアレンジメントを学ぶ。 <br class=\\"br\\" /> 航空業界勤務を経て、2000 年よりフラワーデザイナーとしてデビュー。 <br class=\\"br\\" /> 大手百貨店、JOMALONE LONDONや BMW MI NI、ESTEBANなど企業とのコラボレーション、 <br class=\\"br\\" /> 商品プロデュースなど多数。FLOWERS BY NAKED、京阪ホテルズ&リゾーツ「THOUSAND FLOWER＆ <br class=\\"br\\" /> GARDEN」などイベント監修と装花装飾制作。 2021年1月、資本業務提携により今井清氏とパートナーとなる。"},"story":{"title1":"Miwakoの原点,Paris","text1":"フラワーデザイナーMiwakoはフランスでフラワーアレンジを学びました。そのためMiwakoにとって、Parisは第二の故郷。他人は他人！という個人主義で自分に合ったスタイルにこだわるお洒落を追求し、女性であることを常に意識し美意識が高く、自分の個性を主張し続ける。Miwakoの花に対する考え方の原点がここに。","title2":"Miwakoの原点,Paris","text2":"Miwakoの原点,ParisフラワーデザイナーMiwakoはフランスでフラワーアレンジを学びました。そのためMiwakoにとって、Parisは第二の故郷。他人は他人！という個人主義で自分に合ったスタイルにこだわるお洒落を追求し、女性であることを常に意識し美意識が高く、自分の個性を主張し続ける。Miwakoの花に対する考え方の原点がここに。"},"access":{"subTitle":"アクセス","title":"Access","farmName":"育種圃場","address":"〒737-2609<br />広島県呉市安浦町大字中畑字立小路 510-262 <br />(瀬戸内海国立公園 野呂山山頂)<br /><br />TEL：0823-72-7634<br /> FAX：0823-71-6122"}}'
      );
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 512));
    }),
      (_N_E = e.O());
  },
]);
