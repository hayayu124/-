(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [214],
  {
    7137: function (r, n, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/privacyPolicy",
        function () {
          return e(9710);
        },
      ]);
    },
    4667: function (r, n, e) {
      "use strict";
      e.d(n, {
        Z: function () {
          return a;
        },
      });
      var t = e(5893),
        o = e(9008),
        s = e.n(o);
      function a(r) {
        var n = r.meta;
        return (0, t.jsxs)(s(), {
          children: [
            (0, t.jsx)("meta", {
              name: "viewport",
              content:
                "width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, viewport-fit=cover",
            }),
            (0, t.jsx)("title", { children: n.title }),
            (0, t.jsx)("meta", { name: "description", content: n.description }),
            (0, t.jsx)("meta", { property: "og:title", content: n.title }),
            (0, t.jsx)("meta", {
              property: "og:description",
              content: n.title,
            }),
            (0, t.jsx)("meta", { property: "og:url", content: n.pageName }),
            (0, t.jsx)("meta", { property: "og:site_name", content: n.title }),
            (0, t.jsx)("meta", { property: "og:locale", content: n.locale }),
            (0, t.jsx)("meta", { property: "fb:app_id", content: "" }),
            (0, t.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, t.jsx)("meta", { name: "robots", content: "all" }),
            (0, t.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
          ],
        });
      }
    },
    4490: function (r, n, e) {
      "use strict";
      e(7294);
    },
    5990: function (r, n, e) {
      "use strict";
      var t = e(828),
        o = e(5893);
      e(7294);
      var s = e(7650),
        a = function (r) {
          var n = (0, t.Z)(
              (0, s.YD)({ rootMargin: "-200px 0px", triggerOnce: !0 }),
              2
            ),
            e = n[0],
            a = n[1],
            c = r.children,
            i = r.className,
            b = r.after;
          return (0, o.jsx)(o.Fragment, {
            children: b
              ? (0, o.jsx)("div", {
                  className: "".concat(i).concat(a ? " " + b : ""),
                  ref: e,
                  children: c,
                })
              : (0, o.jsx)("div", {
                  className: "int".concat(a ? " intActive" : ""),
                  ref: e,
                  children: c,
                }),
          });
        };
      n.Z = a;
    },
    9710: function (r, n, e) {
      "use strict";
      e.r(n),
        e.d(n, {
          default: function () {
            return i;
          },
        });
      var t = e(5893);
      e(7294);
      var o = e(1163),
        s = e(7879),
        a = e.n(s),
        c = e(5990);
      function i() {
        var r,
          n = (0, o.useRouter)().locale;
        return (
          "ja" == n ? (r = e(7500)) : "en" == n && (r = e(2845)),
          (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)("section", {
              className: "".concat(
                a().privacyPolicy,
                " sectionSpaceM mar-b4 sec-c"
              ),
              children: [
                (0, t.jsx)("div", {
                  className: "titleColumn tex-c mar-b4",
                  children: (0, t.jsxs)(c.Z, {
                    className: "".concat(a().intMoreDelay),
                    after: a().intActive,
                    children: [
                      (0, t.jsx)("h5", {
                        className: "fon5 fonSp5 mar-b1",
                        children: r.catchCopy.subTitle,
                      }),
                      (0, t.jsx)("h2", {
                        className: "fon2 fonSp2 bold mar-b05",
                        children: r.catchCopy.title,
                      }),
                      (0, t.jsx)("div", { className: "titleBorder sec-c" }),
                    ],
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "".concat(a().privText, " grid4"),
                  children: (0, t.jsx)("p", {
                    className: "fon4 fonSp5 lin-22",
                    dangerouslySetInnerHTML: { __html: r.catchCopy.contents },
                  }),
                }),
              ],
            }),
          })
        );
      }
      e(4490), e(4667);
    },
    7879: function (r) {
      r.exports = {
        privacyPolicy: "privacyPolicy_privacyPolicy__IT2N7",
        privText: "privacyPolicy_privText__3hd5c",
      };
    },
    943: function (r, n, e) {
      "use strict";
      function t(r, n) {
        (null == n || n > r.length) && (n = r.length);
        for (var e = 0, t = Array(n); e < n; e++) t[e] = r[e];
        return t;
      }
      e.d(n, {
        Z: function () {
          return t;
        },
      });
    },
    3375: function (r, n, e) {
      "use strict";
      function t(r) {
        if (
          ("undefined" != typeof Symbol && null != r[Symbol.iterator]) ||
          null != r["@@iterator"]
        )
          return Array.from(r);
      }
      e.d(n, {
        Z: function () {
          return t;
        },
      });
    },
    828: function (r, n, e) {
      "use strict";
      e.d(n, {
        Z: function () {
          return s;
        },
      });
      var t = e(3375),
        o = e(1566);
      function s(r, n) {
        return (
          (function (r) {
            if (Array.isArray(r)) return r;
          })(r) ||
          (0, t.Z)(r, n) ||
          (0, o.Z)(r, n) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    1566: function (r, n, e) {
      "use strict";
      e.d(n, {
        Z: function () {
          return o;
        },
      });
      var t = e(943);
      function o(r, n) {
        if (r) {
          if ("string" == typeof r) return (0, t.Z)(r, n);
          var e = Object.prototype.toString.call(r).slice(8, -1);
          if (
            ("Object" === e && r.constructor && (e = r.constructor.name),
            "Map" === e || "Set" === e)
          )
            return Array.from(e);
          if (
            "Arguments" === e ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
          )
            return (0, t.Z)(r, n);
        }
      }
    },
    7650: function (r, n, e) {
      "use strict";
      e.d(n, {
        YD: function () {
          return i;
        },
      });
      var t = e(7294);
      let o = new Map(),
        s = new WeakMap(),
        a = 0,
        c;
      function i({
        threshold: r,
        delay: n,
        trackVisibility: e,
        rootMargin: i,
        root: b,
        triggerOnce: l,
        skip: p,
        initialInView: f,
        fallbackInView: u,
        onChange: d,
      } = {}) {
        var S;
        let [m, y] = t.useState(null),
          h = t.useRef(),
          [v, g] = t.useState({ inView: !!f, entry: void 0 });
        (h.current = d),
          t.useEffect(() => {
            if (p || !m) return;
            let t = (function (r, n, e = {}, t = c) {
              if (void 0 === window.IntersectionObserver && void 0 !== t) {
                let i = r.getBoundingClientRect();
                return (
                  n(t, {
                    isIntersecting: t,
                    target: r,
                    intersectionRatio:
                      "number" == typeof e.threshold ? e.threshold : 0,
                    time: 0,
                    boundingClientRect: i,
                    intersectionRect: i,
                    rootBounds: i,
                  }),
                  () => {}
                );
              }
              let {
                  id: b,
                  observer: l,
                  elements: p,
                } = (function (r) {
                  var n;
                  let e = Object.keys(r)
                      .sort()
                      .filter((n) => void 0 !== r[n])
                      .map((n) => {
                        var e;
                        return `${n}_${
                          "root" === n
                            ? (e = r.root)
                              ? (s.has(e) || ((a += 1), s.set(e, a.toString())),
                                s.get(e))
                              : "0"
                            : r[n]
                        }`;
                      })
                      .toString(),
                    t = o.get(e);
                  if (!t) {
                    let c = new Map(),
                      i,
                      b = new IntersectionObserver((n) => {
                        n.forEach((n) => {
                          var e;
                          let t =
                            n.isIntersecting &&
                            i.some((r) => n.intersectionRatio >= r);
                          r.trackVisibility &&
                            void 0 === n.isVisible &&
                            (n.isVisible = t),
                            null == (e = c.get(n.target)) ||
                              e.forEach((r) => {
                                r(t, n);
                              });
                        });
                      }, r);
                    (i =
                      b.thresholds ||
                      (Array.isArray(r.threshold)
                        ? r.threshold
                        : [r.threshold || 0])),
                      (t = { id: e, observer: b, elements: c }),
                      o.set(e, t);
                  }
                  return t;
                })(e),
                f = p.get(r) || [];
              return (
                p.has(r) || p.set(r, f),
                f.push(n),
                l.observe(r),
                function () {
                  f.splice(f.indexOf(n), 1),
                    0 === f.length && (p.delete(r), l.unobserve(r)),
                    0 === p.size && (l.disconnect(), o.delete(b));
                }
              );
            })(
              m,
              (r, n) => {
                g({ inView: r, entry: n }),
                  h.current && h.current(r, n),
                  n.isIntersecting && l && t && (t(), (t = void 0));
              },
              {
                root: b,
                rootMargin: i,
                threshold: r,
                trackVisibility: e,
                delay: n,
              },
              u
            );
            return () => {
              t && t();
            };
          }, [Array.isArray(r) ? r.toString() : r, m, b, i, l, p, e, u, n]);
        let x = null == (S = v.entry) ? void 0 : S.target;
        t.useEffect(() => {
          m || !x || l || p || g({ inView: !!f, entry: void 0 });
        }, [m, x, l, p, f]);
        let E = [y, v.inView, v.entry];
        return (E.ref = E[0]), (E.inView = E[1]), (E.entry = E[2]), E;
      }
    },
    2845: function (r) {
      "use strict";
      r.exports = JSON.parse(
        '{"meta":{"pageName":"https://rosetique.tokyo/en/privacyPolic","title":"プライバシーポリシー | ROSETIQUE JAPAN","description":"ROSETIQUE JAPAN（以下,「当社」といいます。）は,本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における,ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下,「本ポリシー」といいます。）を定めます。本ポリシーは,当社がどのような個人情報を取得し,どのように利用・共有するか,ユーザーがどのようにご自身の個人情報を管理できるかをご説明するものです。","image":"/img/ogp.jpg","appId":"1809010892654485","author":"\xa9 2023 ROSETIQUE JAPAN Inc.","locale":"en_US"},"catchCopy":{"subTitle":"プライバシーポリシー","title":"Privacy Policy","contents":"ROSETIQUE JAPAN（以下,「当社」といいます。）は,本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における,ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下,「本ポリシー」といいます。）を定めます。本ポリシーは,当社がどのような個人情報を取得し,どのように利用・共有するか,ユーザーがどのようにご自身の個人情報を管理できるかをご説明するものです。<br /><br /><br /><span class=\\"fon3 fonSp3 bold\\">1.事業者情報</span><br />法人名:ROSETIQUE JAPAN Inc. <br />住所:東京都世田谷区等々力8-12-3 1F <br />代表者:堺美和子<br /><br /><br /><span class=\\"fon3 fonSp3 bold\\">2.個人情報の取得方法</span><br />当社はユーザーが利用登録をするとき,氏名・生年月日・住所・電話番号・メールアドレスなど個人を特定できる情報を取得させていただきます。<br />お問い合わせフォームやコメントの送信時には,氏名・電話番号・メールアドレスを取得させていただきます。<br /><br /><br /><span class=\\"fon3 fonSp3 bold\\">3.個人情報の利用目的</span> <br />取得した閲覧・購買履歴等の情報を分析し,ユーザー別に適した商品・サービスをお知らせするために利用します。また,取得した閲覧・購買履歴等の情報は,結果をスコア化した上で当該スコアを第三者へ提供します。<br /><br /><br /> <span class=\\"fon3 fonSp3 bold\\"> 4.個人データを安全に管理するための措置 </span> <br /> 当社は個人情報を正確かつ最新の内容に保つよう努め,不正なアクセス・改ざん・漏えい・滅失及び毀損から保護するため全従業員及び役員に対して教育研修を実施しています。また,個人情報保護規程を設け,現場での管理についても定期的に点検を行っています。 <br /> <br /> <br /> <span class=\\"fon3 fonSp3 bold\\">5.個人データの共同利用</span> <br /> 当社は,以下のとおり共同利用を行います。 <br /> ・ 個人データの管理に関する責任者 : ROSETIQUE JAPAN Inc. <br /> ・ 共同して利用する者の利用目的 : 上記「利用目的」の内容と同様。 <br /> ・ 利用項目 : 氏名,メールアドレス,電話番号 <br /> ・ 共同して利用する者の範囲 当社企業グループを構成する企業 <br /> <br /> <br /> <span class=\\"fon3 fonSp3 bold\\"> 6.個人データの第三者提供について </span> <br /> 当社は法令及びガイドラインに別段の定めがある場合を除き,同意を得ないで第三者に個人情報を提供することは致しません。 <br /> <br /> <br /> <span class=\\"fon3 fonSp3 bold\\"> 7.保有個人データの開示,訂正 </span> <br /> 当社は本人から個人情報の開示を求められたときには,遅滞なく本人に対しこれを開示します。個人情報の利用目的の通知や訂正,追加,削除,利用の停止,第三者への提供の停止を希望される方は以下の手順でご請求ください。 <br /> （各社請求方法を指定） 送付先住所 東京都世田谷区等々力8-12-3 1F <br /> <br /> <br /> <span class=\\"fon3 fonSp3 bold\\"> 8.個人情報取り扱いに関する相談や苦情の連絡先 </span> <br /> 当社の個人情報の取り扱いに関するご質問やご不明点,苦情,その他のお問い合わせはお問い合わせフォームよりご連絡ください。 <br /> <br /> <br /> <span class=\\"fon3 fonSp3 bold\\"> 9.SSL（Secure Socket Layer）について </span> <br /> 当社のWebサイトはSSLに対応しており,WebブラウザとWebサーバーとの通信を暗号化しています。ユーザーが入力する氏名や住所,電話番号などの個人情報は自動的に暗号化されます。 <br /> <br /> <br /> <span class=\\"fon3 fonSp3 bold\\">10.cookieについて</span> <br /> cookieとは,WebサーバーからWebブラウザに送信されるデータのことです。Webサーバーがcookieを参照することでユーザーのパソコンを識別でき,効率的に当社Webサイトを利用することができます。当社Webサイトがcookieとして送るファイルは,個人を特定するような情報は含んでおりません。お使いのWebブラウザの設定により,cookieを無効にすることも可能です。 <br /> <br /> <br /> <span class=\\"fon3 fonSp3 bold\\"> 11.プライバシーポリシーの制定日及び改定日 </span> <br /> 制定 : 2023年1月26日 <br /> <br /> <br /> <span class=\\"fon3 fonSp3 bold\\">12.免責事項</span> <br /> 当社Webサイトに掲載されている情報の正確性には万全を期していますが,利用者が当社Webサイトの情報を用いて行う一切の行為に関して,一切の責任を負わないものとします。 当社は,利用者が当社Webサイトを利用したことにより生じた利用者の損害及び利用者が第三者に与えた損害に関して,一切の責任を負わないものとします。 <br /> <br /> <br /> <span class=\\"fon3 fonSp3 bold\\">13.著作権・肖像権</span> <br /> 当社Webサイト内の文章や画像,すべてのコンテンツは著作権・肖像権等により保護されています。無断での使用や転用は禁止されています。 <br /> <br /> <br /> <span class=\\"fon3 fonSp3 bold\\">14.リンク</span> <br /> 当社Webサイトへのリンクは,自由に設置していただいて構いません。ただし,Webサイトの内容等によってはリンクの設置をお断りすることがあります。"}}'
      );
    },
    7500: function (r) {
      "use strict";
      r.exports = JSON.parse(
        '{"meta":{"pageName":"https://rosetique.tokyo/privacyPolic","title":"プライバシーポリシー | ROSETIQUE JAPAN","description":"ROSETIQUE JAPAN（以下,「当社」といいます。）は,本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における,ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下,「本ポリシー」といいます。）を定めます。本ポリシーは,当社がどのような個人情報を取得し,どのように利用・共有するか,ユーザーがどのようにご自身の個人情報を管理できるかをご説明するものです。","image":"/img/ogp.jpg","appId":"1809010892654485","author":"\xa9 2023 ROSETIQUE JAPAN Inc.","locale":"ja_JP"},"catchCopy":{"subTitle":"プライバシーポリシー","title":"Privacy Policy","contents":"ROSETIQUE JAPAN（以下,「当社」といいます。）は,本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における,ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下,「本ポリシー」といいます。）を定めます。本ポリシーは,当社がどのような個人情報を取得し,どのように利用・共有するか,ユーザーがどのようにご自身の個人情報を管理できるかをご説明するものです。<br /><br /><br /><span class=\\"fon3 fonSp3 bold\\">1.事業者情報</span><br />法人名:ROSETIQUE JAPAN Inc. <br />住所:東京都世田谷区等々力8-12-3 1F <br />代表者:堺美和子<br /><br /><br /><span class=\\"fon3 fonSp3 bold\\">2.個人情報の取得方法</span><br />当社はユーザーが利用登録をするとき,氏名・生年月日・住所・電話番号・メールアドレスなど個人を特定できる情報を取得させていただきます。<br />お問い合わせフォームやコメントの送信時には,氏名・電話番号・メールアドレスを取得させていただきます。<br /><br /><br /><span class=\\"fon3 fonSp3 bold\\">3.個人情報の利用目的</span> <br />取得した閲覧・購買履歴等の情報を分析し,ユーザー別に適した商品・サービスをお知らせするために利用します。また,取得した閲覧・購買履歴等の情報は,結果をスコア化した上で当該スコアを第三者へ提供します。<br /><br /><br /> <span class=\\"fon3 fonSp3 bold\\"> 4.個人データを安全に管理するための措置 </span> <br /> 当社は個人情報を正確かつ最新の内容に保つよう努め,不正なアクセス・改ざん・漏えい・滅失及び毀損から保護するため全従業員及び役員に対して教育研修を実施しています。また,個人情報保護規程を設け,現場での管理についても定期的に点検を行っています。 <br /> <br /> <br /> <span class=\\"fon3 fonSp3 bold\\">5.個人データの共同利用</span> <br /> 当社は,以下のとおり共同利用を行います。 <br /> ・ 個人データの管理に関する責任者 : ROSETIQUE JAPAN Inc. <br /> ・ 共同して利用する者の利用目的 : 上記「利用目的」の内容と同様。 <br /> ・ 利用項目 : 氏名,メールアドレス,電話番号 <br /> ・ 共同して利用する者の範囲 当社企業グループを構成する企業 <br /> <br /> <br /> <span class=\\"fon3 fonSp3 bold\\"> 6.個人データの第三者提供について </span> <br /> 当社は法令及びガイドラインに別段の定めがある場合を除き,同意を得ないで第三者に個人情報を提供することは致しません。 <br /> <br /> <br /> <span class=\\"fon3 fonSp3 bold\\"> 7.保有個人データの開示,訂正 </span> <br /> 当社は本人から個人情報の開示を求められたときには,遅滞なく本人に対しこれを開示します。個人情報の利用目的の通知や訂正,追加,削除,利用の停止,第三者への提供の停止を希望される方は以下の手順でご請求ください。 <br /> （各社請求方法を指定） 送付先住所 東京都世田谷区等々力8-12-3 1F <br /> <br /> <br /> <span class=\\"fon3 fonSp3 bold\\"> 8.個人情報取り扱いに関する相談や苦情の連絡先 </span> <br /> 当社の個人情報の取り扱いに関するご質問やご不明点,苦情,その他のお問い合わせはお問い合わせフォームよりご連絡ください。 <br /> <br /> <br /> <span class=\\"fon3 fonSp3 bold\\"> 9.SSL（Secure Socket Layer）について </span> <br /> 当社のWebサイトはSSLに対応しており,WebブラウザとWebサーバーとの通信を暗号化しています。ユーザーが入力する氏名や住所,電話番号などの個人情報は自動的に暗号化されます。 <br /> <br /> <br /> <span class=\\"fon3 fonSp3 bold\\">10.cookieについて</span> <br /> cookieとは,WebサーバーからWebブラウザに送信されるデータのことです。Webサーバーがcookieを参照することでユーザーのパソコンを識別でき,効率的に当社Webサイトを利用することができます。当社Webサイトがcookieとして送るファイルは,個人を特定するような情報は含んでおりません。お使いのWebブラウザの設定により,cookieを無効にすることも可能です。 <br /> <br /> <br /> <span class=\\"fon3 fonSp3 bold\\"> 11.プライバシーポリシーの制定日及び改定日 </span> <br /> 制定 : 2023年1月26日 <br /> <br /> <br /> <span class=\\"fon3 fonSp3 bold\\">12.免責事項</span> <br /> 当社Webサイトに掲載されている情報の正確性には万全を期していますが,利用者が当社Webサイトの情報を用いて行う一切の行為に関して,一切の責任を負わないものとします。 当社は,利用者が当社Webサイトを利用したことにより生じた利用者の損害及び利用者が第三者に与えた損害に関して,一切の責任を負わないものとします。 <br /> <br /> <br /> <span class=\\"fon3 fonSp3 bold\\">13.著作権・肖像権</span> <br /> 当社Webサイト内の文章や画像,すべてのコンテンツは著作権・肖像権等により保護されています。無断での使用や転用は禁止されています。 <br /> <br /> <br /> <span class=\\"fon3 fonSp3 bold\\">14.リンク</span> <br /> 当社Webサイトへのリンクは,自由に設置していただいて構いません。ただし,Webサイトの内容等によってはリンクの設置をお断りすることがあります。"}}'
      );
    },
  },
  function (r) {
    r.O(0, [774, 888, 179], function () {
      return r((r.s = 7137));
    }),
      (_N_E = r.O());
  },
]);
