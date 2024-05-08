(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [639],
  {
    3326: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/company",
        function () {
          return n(839);
        },
      ]);
    },
    4667: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return c;
        },
      });
      var r = n(5893),
        i = n(9008),
        o = n.n(i);
      function c(t) {
        var e = t.meta;
        return (0, r.jsxs)(o(), {
          children: [
            (0, r.jsx)("meta", {
              name: "viewport",
              content:
                "width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, viewport-fit=cover",
            }),
            (0, r.jsx)("title", { children: e.title }),
            (0, r.jsx)("meta", { name: "description", content: e.description }),
            (0, r.jsx)("meta", { property: "og:title", content: e.title }),
            (0, r.jsx)("meta", {
              property: "og:description",
              content: e.title,
            }),
            (0, r.jsx)("meta", { property: "og:url", content: e.pageName }),
            (0, r.jsx)("meta", { property: "og:site_name", content: e.title }),
            (0, r.jsx)("meta", { property: "og:locale", content: e.locale }),
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
    4490: function (t, e, n) {
      "use strict";
      n(7294);
    },
    5990: function (t, e, n) {
      "use strict";
      var r = n(828),
        i = n(5893);
      n(7294);
      var o = n(7650),
        c = function (t) {
          var e = (0, r.Z)(
              (0, o.YD)({ rootMargin: "-200px 0px", triggerOnce: !0 }),
              2
            ),
            n = e[0],
            c = e[1],
            s = t.children,
            a = t.className,
            l = t.after;
          return (0, i.jsx)(i.Fragment, {
            children: l
              ? (0, i.jsx)("div", {
                  className: "".concat(a).concat(c ? " " + l : ""),
                  ref: n,
                  children: s,
                })
              : (0, i.jsx)("div", {
                  className: "int".concat(c ? " intActive" : ""),
                  ref: n,
                  children: s,
                }),
          });
        };
      e.Z = c;
    },
    839: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return u;
          },
        });
      var r = n(5893),
        i = n(7294),
        o = n(1163),
        c = n(8863),
        s = n.n(c),
        a = n(5990);
      n(4490);
      var l = n(4667);
      function u() {
        var t,
          e = (0, o.useRouter)().locale;
        "ja" == e ? (t = n(751)) : "en" == e && (t = n(9521));
        var c = (0, i.useState)(!1),
          u = (c[0], c[1]);
        return (
          (0, i.useEffect)(function () {
            document.body.classList.add("active"),
              setTimeout(function () {
                u(!0);
              }, 500);
          }, []),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(l.Z, { meta: t.meta }),
              (0, r.jsxs)("section", {
                className: "".concat(
                  s().company,
                  " sectionSpaceM mar-b4 sec-c"
                ),
                children: [
                  (0, r.jsx)("div", {
                    className: "titleColumn tex-c mar-b4",
                    children: (0, r.jsxs)(a.Z, {
                      className: "".concat(s().intMoreDelay),
                      after: s().intActive,
                      children: [
                        (0, r.jsx)("h5", {
                          className: "fon5 fonSp5 mar-b1",
                          children: t.subTitle,
                        }),
                        (0, r.jsx)("h2", {
                          className: "fon2 fonSp2 bold mar-b05",
                          children: t.title,
                        }),
                        (0, r.jsx)("div", { className: "titleBorder sec-c" }),
                      ],
                    }),
                  }),
                  (0, r.jsx)(a.Z, {
                    className: "intMostDelay",
                    after: "intActive",
                    children: (0, r.jsxs)("div", {
                      className: "".concat(
                        s().companyColumn,
                        " collectionColumn sectionSpaceM tex-L grid4 sec-c"
                      ),
                      children: [
                        (0, r.jsxs)("div", {
                          className: "collectionName",
                          children: [
                            (0, r.jsx)("h3", {
                              className: "fon3 fonSp3 bold",
                              children: t.contents.title1,
                            }),
                            (0, r.jsx)("h5", {
                              className: "fon5 fonSp5 mar-t2 lin-22",
                              dangerouslySetInnerHTML: {
                                __html: t.contents.text1,
                              },
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "collectionName sectionSpaceS",
                          children: [
                            (0, r.jsx)("h3", {
                              className: "fon3 fonSp3 mar-t2 lin-22 bold",
                              children: t.contents.title2,
                            }),
                            (0, r.jsx)("h5", {
                              className: "fon5 fonSp5 mar-t2 lin-22",
                              dangerouslySetInnerHTML: {
                                __html: t.contents.text2,
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    8863: function (t) {
      t.exports = {
        company: "company_company__Ag4UD",
        companyColumn: "company_companyColumn__pH8W9",
      };
    },
    943: function (t, e, n) {
      "use strict";
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    3375: function (t, e, n) {
      "use strict";
      function r(t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    828: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var r = n(3375),
        i = n(1566);
      function o(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (0, r.Z)(t, e) ||
          (0, i.Z)(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    1566: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var r = n(943);
      function i(t, e) {
        if (t) {
          if ("string" == typeof t) return (0, r.Z)(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(n);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return (0, r.Z)(t, e);
        }
      }
    },
    7650: function (t, e, n) {
      "use strict";
      n.d(e, {
        YD: function () {
          return a;
        },
      });
      var r = n(7294);
      let i = new Map(),
        o = new WeakMap(),
        c = 0,
        s;
      function a({
        threshold: t,
        delay: e,
        trackVisibility: n,
        rootMargin: a,
        root: l,
        triggerOnce: u,
        skip: m,
        initialInView: f,
        fallbackInView: d,
        onChange: p,
      } = {}) {
        var b;
        let [h, y] = r.useState(null),
          g = r.useRef(),
          [x, v] = r.useState({ inView: !!f, entry: void 0 });
        (g.current = p),
          r.useEffect(() => {
            if (m || !h) return;
            let r = (function (t, e, n = {}, r = s) {
              if (void 0 === window.IntersectionObserver && void 0 !== r) {
                let a = t.getBoundingClientRect();
                return (
                  e(r, {
                    isIntersecting: r,
                    target: t,
                    intersectionRatio:
                      "number" == typeof n.threshold ? n.threshold : 0,
                    time: 0,
                    boundingClientRect: a,
                    intersectionRect: a,
                    rootBounds: a,
                  }),
                  () => {}
                );
              }
              let {
                  id: l,
                  observer: u,
                  elements: m,
                } = (function (t) {
                  var e;
                  let n = Object.keys(t)
                      .sort()
                      .filter((e) => void 0 !== t[e])
                      .map((e) => {
                        var n;
                        return `${e}_${
                          "root" === e
                            ? (n = t.root)
                              ? (o.has(n) || ((c += 1), o.set(n, c.toString())),
                                o.get(n))
                              : "0"
                            : t[e]
                        }`;
                      })
                      .toString(),
                    r = i.get(n);
                  if (!r) {
                    let s = new Map(),
                      a,
                      l = new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          var n;
                          let r =
                            e.isIntersecting &&
                            a.some((t) => e.intersectionRatio >= t);
                          t.trackVisibility &&
                            void 0 === e.isVisible &&
                            (e.isVisible = r),
                            null == (n = s.get(e.target)) ||
                              n.forEach((t) => {
                                t(r, e);
                              });
                        });
                      }, t);
                    (a =
                      l.thresholds ||
                      (Array.isArray(t.threshold)
                        ? t.threshold
                        : [t.threshold || 0])),
                      (r = { id: n, observer: l, elements: s }),
                      i.set(n, r);
                  }
                  return r;
                })(n),
                f = m.get(t) || [];
              return (
                m.has(t) || m.set(t, f),
                f.push(e),
                u.observe(t),
                function () {
                  f.splice(f.indexOf(e), 1),
                    0 === f.length && (m.delete(t), u.unobserve(t)),
                    0 === m.size && (u.disconnect(), i.delete(l));
                }
              );
            })(
              h,
              (t, e) => {
                v({ inView: t, entry: e }),
                  g.current && g.current(t, e),
                  e.isIntersecting && u && r && (r(), (r = void 0));
              },
              {
                root: l,
                rootMargin: a,
                threshold: t,
                trackVisibility: n,
                delay: e,
              },
              d
            );
            return () => {
              r && r();
            };
          }, [Array.isArray(t) ? t.toString() : t, h, l, a, u, m, n, d, e]);
        let j = null == (b = x.entry) ? void 0 : b.target;
        r.useEffect(() => {
          h || !j || u || m || v({ inView: !!f, entry: void 0 });
        }, [h, j, u, m, f]);
        let N = [y, x.inView, x.entry];
        return (N.ref = N[0]), (N.inView = N[1]), (N.entry = N[2]), N;
      }
    },
    9521: function (t) {
      "use strict";
      t.exports = JSON.parse(
        '{"meta":{"pageName":"https://rosetique.tokyo/company","title":"Company | ROSETIQUE JAPAN","description":"日本を代表する育種家今井清氏のバラを日本全国へ世界へと普及する東京のアンテナショップとしての役割を担います。今井清氏の種苗普及を通して、海外品種バラが大半を占める日本の花市場を活性化させ、国産バラ普及に向けて様々な取り組みを展開しています。","image":"/img/ogp.jpg","appId":"1809010892654485","author":"\xa9 2023 ROSETIQUE JAPAN Inc.","locale":"en_US"},"subTitle":"","title":"Company","contents":{"title1":"株式会社ROSETIQUE JAPAN","text1":"日本を代表する育種家今井清氏のバラを日本全国へ世界へと普及する東京のアンテナショップとしての役割を担います。今井清氏の種苗普及を通して、海外品種バラが大半を占める日本の花市場を活性化させ、国産バラ普及に向けて様々な取り組みを展開しています。","title2":"品種にかかる法律(種苗法)/生産にかかる特許について","text2":"当ホームページはお客様への情報、通信販売サービスとして運営されております。お客様が当ホームページをご利用される場合、お客様の個人情報をお伺いする場合があります。（通信販売等のお客様の任意かつ自主的にご利用いただく場合）お伺いする情報は、お客様のお名前、メールアドレス、電話番号、住所といった、(有)はなぞの野呂高原今井ナーセリーのサービスをご利用になる際に必要となる、お客様の個人情報が主なものになります。<br />また、お客様の必要に即したサービスに関する情報のご提供等の目的で、 それ以外の質問をさせていただく場合がありますが、 これは必要最低限の項目を除いて、お客様自身が選択可能なものになっており、お客様の任意でご提供いただけるものです。<br />お伺いした情報は契約違反、販売後の遵守違反で第三者に通知する場合があることをあらかじめご了承ください。（例えば、種苗法違反や、質問状、訴訟のため、または配送等のサービスを委託した会社に、お客様の名前と宛先を知らせる場合がこれにあたります）<br />(有)はなぞの野呂高原今井ナーセリーは当社ホームページを訪問されたお客様のプライバシーを守るために合理的な範囲で必要な措置をとります。当社は以上の方針を改定することがあります。 その場合すべての改定はこのホームページで通知いたします。保証及び責任制限(有)はなぞの野呂高原今井ナーセリーのホームページの利用は、お客様の責任において行われるものとします。当社ホームページ及び当ホームページにリンクが設定されている他のウェブサイトから取得された 各種情報の利用によって生じたあらゆる損害に関して、当社は一切の責任を負いません。<br /><br />準拠法<br />このホームページは(有)はなぞの野呂高原今井ナーセリーの管理下にあります。当サイトは法律の異なる全世界の国々からアクセスすることが可能ですが、当サイトにアクセスされたお客様および今井ナーセリーの両者は、かかる法律原理の違いに関わらず、当サイトの利用に関して日本国の法律に拘束されることに同意するものとします。 また今井ナーセリーは当サイト上で、お客様の環境において当サイトのコンテンツが適切であるかなどの記述や表示は一切行いません。 当サイトへのアクセスはお客様の自由意志によるものとし、当サイトの利用に関しての責任はお客様にあるものとします。 品種にかかる法律(種苗法)について 生産者様譲渡したお客さまは、種苗法に遵守した契約をお願いいただきます。自家増殖については、当社では、報告後の自家増殖を認めております。ご相談ください。<br /><br />一般消費者様<br />当社または契約農家・契約販売店から購入後の転売は堅く禁止させていただきます。また、種苗法に遵守した取り扱いをお願いしております。違反されたお客さまは、今後の取引をお断りします。状況により賠償も請求させていただきます。自家増殖については、販売をされない(寄付・プレゼント目的)ことのみ供託いたします。<br /><br />生産にかかる特許について生産者様<br />当社の栽培方法には、台木を使用した折り曲げ法栽培の特許を取得しており、現在レべリング法という特許も申請しております。 苗生産から、栽培までかかっております。供託なく、行うことは出来ません。無断で栽培法を使用している生産者を発見された場合、お知らせください。"}}'
      );
    },
    751: function (t) {
      "use strict";
      t.exports = JSON.parse(
        '{"meta":{"pageName":"https://rosetique.tokyo/company","title":"Company | ROSETIQUE JAPAN","description":"日本を代表する育種家今井清氏のバラを日本全国へ世界へと普及する東京のアンテナショップとしての役割を担います。今井清氏の種苗普及を通して、海外品種バラが大半を占める日本の花市場を活性化させ、国産バラ普及に向けて様々な取り組みを展開しています。","image":"/img/ogp.jpg","appId":"1809010892654485","author":"\xa9 2023 ROSETIQUE JAPAN Inc.","locale":"ja_JP"},"subTitle":"会社概要","title":"Company","contents":{"title1":"株式会社ROSETIQUE JAPAN","text1":"日本を代表する育種家今井清氏のバラを日本全国へ世界へと普及する東京のアンテナショップとしての役割を担います。今井清氏の種苗普及を通して、海外品種バラが大半を占める日本の花市場を活性化させ、国産バラ普及に向けて様々な取り組みを展開しています。","title2":"品種にかかる法律(種苗法)/生産にかかる特許について","text2":"当ホームページはお客様への情報、通信販売サービスとして運営されております。お客様が当ホームページをご利用される場合、お客様の個人情報をお伺いする場合があります。（通信販売等のお客様の任意かつ自主的にご利用いただく場合）お伺いする情報は、お客様のお名前、メールアドレス、電話番号、住所といった、(有)はなぞの野呂高原今井ナーセリーのサービスをご利用になる際に必要となる、お客様の個人情報が主なものになります。<br />また、お客様の必要に即したサービスに関する情報のご提供等の目的で、 それ以外の質問をさせていただく場合がありますが、 これは必要最低限の項目を除いて、お客様自身が選択可能なものになっており、お客様の任意でご提供いただけるものです。<br />お伺いした情報は契約違反、販売後の遵守違反で第三者に通知する場合があることをあらかじめご了承ください。（例えば、種苗法違反や、質問状、訴訟のため、または配送等のサービスを委託した会社に、お客様の名前と宛先を知らせる場合がこれにあたります）<br />(有)はなぞの野呂高原今井ナーセリーは当社ホームページを訪問されたお客様のプライバシーを守るために合理的な範囲で必要な措置をとります。当社は以上の方針を改定することがあります。 その場合すべての改定はこのホームページで通知いたします。保証及び責任制限(有)はなぞの野呂高原今井ナーセリーのホームページの利用は、お客様の責任において行われるものとします。当社ホームページ及び当ホームページにリンクが設定されている他のウェブサイトから取得された 各種情報の利用によって生じたあらゆる損害に関して、当社は一切の責任を負いません。<br /><br />準拠法<br />このホームページは(有)はなぞの野呂高原今井ナーセリーの管理下にあります。当サイトは法律の異なる全世界の国々からアクセスすることが可能ですが、当サイトにアクセスされたお客様および今井ナーセリーの両者は、かかる法律原理の違いに関わらず、当サイトの利用に関して日本国の法律に拘束されることに同意するものとします。 また今井ナーセリーは当サイト上で、お客様の環境において当サイトのコンテンツが適切であるかなどの記述や表示は一切行いません。 当サイトへのアクセスはお客様の自由意志によるものとし、当サイトの利用に関しての責任はお客様にあるものとします。 品種にかかる法律(種苗法)について 生産者様譲渡したお客さまは、種苗法に遵守した契約をお願いいただきます。自家増殖については、当社では、報告後の自家増殖を認めております。ご相談ください。<br /><br />一般消費者様<br />当社または契約農家・契約販売店から購入後の転売は堅く禁止させていただきます。また、種苗法に遵守した取り扱いをお願いしております。違反されたお客さまは、今後の取引をお断りします。状況により賠償も請求させていただきます。自家増殖については、販売をされない(寄付・プレゼント目的)ことのみ供託いたします。<br /><br />生産にかかる特許について生産者様<br />当社の栽培方法には、台木を使用した折り曲げ法栽培の特許を取得しており、現在レべリング法という特許も申請しております。 苗生産から、栽培までかかっております。供託なく、行うことは出来ません。無断で栽培法を使用している生産者を発見された場合、お知らせください。"}}'
      );
    },
  },
  function (t) {
    t.O(0, [774, 888, 179], function () {
      return t((t.s = 3326));
    }),
      (_N_E = t.O());
  },
]);
