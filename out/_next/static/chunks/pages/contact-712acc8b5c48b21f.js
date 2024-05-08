(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [335],
  {
    8105: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/contact",
        function () {
          return n(9144);
        },
      ]);
    },
    5990: function (e, t, n) {
      "use strict";
      var a = n(828),
        o = n(5893);
      n(7294);
      var c = n(7650),
        s = function (e) {
          var t = (0, a.Z)(
              (0, c.YD)({ rootMargin: "-200px 0px", triggerOnce: !0 }),
              2
            ),
            n = t[0],
            s = t[1],
            i = e.children,
            r = e.className,
            l = e.after;
          return (0, o.jsx)(o.Fragment, {
            children: l
              ? (0, o.jsx)("div", {
                  className: "".concat(r).concat(s ? " " + l : ""),
                  ref: n,
                  children: i,
                })
              : (0, o.jsx)("div", {
                  className: "int".concat(s ? " intActive" : ""),
                  ref: n,
                  children: i,
                }),
          });
        };
      t.Z = s;
    },
    9144: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var a = n(5893),
        o = n(7294),
        c = n(1163),
        s = n(3621),
        i = n.n(s),
        r = n(1664),
        l = n.n(r);
      n(5247);
      var m = n(7417),
        d = n(3749),
        u = n(5990);
      function f() {
        var e,
          t = (0, c.useRouter)().locale;
        "ja" == t ? (e = n(8791)) : "en" == t && (e = n(2665));
        var s = (0, o.useState)(!1),
          r = (s[0], s[1]);
        (0, o.useEffect)(function () {
          document.body.classList.add("active"),
            setTimeout(function () {
              r(!0);
            }, 500);
        }, []);
        var f = (0, o.useState)(""),
          x = f[0],
          h = f[1],
          p = (0, o.useState)(""),
          j = p[0],
          v = p[1],
          b = (0, o.useState)(""),
          _ = b[0],
          N = b[1],
          g = (0, o.useState)(""),
          y = g[0],
          S = g[1],
          T = (0, o.useState)(""),
          C = T[0],
          M = T[1],
          I = (0, o.useState)(""),
          E = I[0],
          P = I[1],
          w = (0, o.useState)(!1),
          Z = w[0];
        w[1];
        var q = (0, o.useState)(""),
          F = q[0];
        q[1];
        var k = (0, o.useRef)(),
          A = function (e) {
            e.preventDefault();
            var n = new FormData();
            return (
              n.append("name", x),
              "ja" == t && n.append("hurigana", hurigana),
              n.append("email", _),
              n.append("telnumber", y),
              n.append("message", C),
              console.log(n.name),
              axios
                .post(
                  "ja" == t
                    ? "https://catalog.rosetique.tokyo/mail/send.php"
                    : "https://catalog.rosetique.tokyo/mail/send_en.php",
                  n
                )
                .then(function (e) {
                  return (
                    console.log(e),
                    setConfirm("confirm"),
                    window.scrollTo({ top: 0 }),
                    e.data
                  );
                })
                .catch(function (e) {
                  setConfirm("confirmError"), console.log(e);
                })
            );
          },
          L =
            "ja" === t
              ? "" !== x && "" !== j && "" !== _ && "" !== C && !0 === E
              : "" !== x && "" !== _ && "" !== C && !0 === E;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)(u.Z, {
            children: (0, a.jsxs)("section", {
              className: "".concat(i().contact, " sectionSpaceM mar-b4 sec-c"),
              children: [
                (0, a.jsx)("div", {
                  className: "titleColumn tex-c mar-b4",
                  children: (0, a.jsxs)(u.Z, {
                    className: "".concat(i().intMoreDelay),
                    after: i().intActive,
                    children: [
                      (0, a.jsx)("h5", {
                        className: "fon5 fonSp5 mar-b1",
                        children: e.catchCopy.subTitle,
                      }),
                      (0, a.jsx)("h2", {
                        className: "fon2 fonSp2 bold mar-b05",
                        children: e.catchCopy.title,
                      }),
                      (0, a.jsx)("div", { className: "titleBorder sec-c" }),
                    ],
                  }),
                }),
                (0, a.jsx)(u.Z, {
                  className: "intMoreDelay",
                  after: "intActive",
                  children: (0, a.jsxs)("div", {
                    className: "".concat(
                      i().contactInfo,
                      " collectionColumn sectionSpaceS tex-l grid4 sec-c"
                    ),
                    children: [
                      (0, a.jsxs)("div", {
                        className: "collectionName",
                        children: [
                          (0, a.jsx)("h3", {
                            className: "fon3 fonSp3 bold",
                            children: e.contactInfo.infoTitle1,
                          }),
                          (0, a.jsx)("h5", {
                            className: "mar-t3 fon5 fonSp5 lin-22",
                            dangerouslySetInnerHTML: {
                              __html: e.contactInfo.infoText1,
                            },
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "collectionName sectionSpaceS",
                        children: [
                          (0, a.jsx)("h3", {
                            className: "fon3 fonSp3 bold",
                            children: e.contactInfo.infoTitle2,
                          }),
                          (0, a.jsx)("h5", {
                            className: "mar-t3 fon5 fonSp5 lin-22",
                            dangerouslySetInnerHTML: {
                              __html: e.contactInfo.infoText2,
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(u.Z, {
                  children: (0, a.jsxs)(u.Z, {
                    className: "intDelay",
                    after: "intActive",
                    children: [
                      (0, a.jsx)("div", {
                        className: "titleColumn tex-c mar-b4 sectionSpaceM",
                        children: (0, a.jsxs)(u.Z, {
                          className: "".concat(i().intMoreDelay),
                          after: i().intActive,
                          children: [
                            (0, a.jsx)("h5", {
                              className: "fon5 fonSp5 mar-b1",
                              children: e.form.subTitle,
                            }),
                            (0, a.jsx)("h2", {
                              className: "fon2 fonSp2 bold mar-b05",
                              children: e.form.title,
                            }),
                            (0, a.jsx)("div", {
                              className: "titleBorder sec-c",
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("form", {
                        ref: k,
                        className: "".concat(i().formColumn, " t_main"),
                        children: (0, a.jsxs)("div", {
                          className: "".concat(
                            i().contactContents,
                            " sectionSpaceS grid5"
                          ),
                          children: [
                            (0, a.jsxs)("div", {
                              className: "collectionName",
                              children: [
                                (0, a.jsxs)("h3", {
                                  className: "fon4 fonSp4 bold notoGo",
                                  children: [
                                    e.form.name,
                                    (0, a.jsx)("span", {
                                      className: "fon5 fonSp5 bold",
                                      children: e.form.nameOption,
                                    }),
                                  ],
                                }),
                                (0, a.jsx)(m.Z, {
                                  sx: {
                                    "& .MuiTextField-root": {
                                      m: 0,
                                      width: "100%",
                                    },
                                  },
                                  noValidate: !0,
                                  autoComplete: "off",
                                  className: "mar-t1 ".concat(i().textbox),
                                  type: "text",
                                  id: "name",
                                  required: !0,
                                  size: "10",
                                  value: "name",
                                  onChange: function (e) {
                                    return h(e.target.value);
                                  },
                                  children: (0, a.jsx)("div", {
                                    children: (0, a.jsx)(d.Z, {
                                      name: "user_name",
                                      required: !0,
                                      id: "outlined-required",
                                      value: x,
                                    }),
                                  }),
                                }),
                                "ja" == t &&
                                  (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsx)("h3", {
                                        className:
                                          "fon4 fonSp4 bold mar-t3 notoGo",
                                        children: e.form.hurigana,
                                      }),
                                      (0, a.jsx)(m.Z, {
                                        sx: {
                                          "& .MuiTextField-root": {
                                            m: 0,
                                            width: "100%",
                                          },
                                        },
                                        noValidate: !0,
                                        autoComplete: "off",
                                        className: "mar-t1 ".concat(
                                          i().textbox
                                        ),
                                        type: "text",
                                        id: "name_ruby",
                                        required: !0,
                                        size: "10",
                                        onChange: function (e) {
                                          return v(e.target.value);
                                        },
                                        children: (0, a.jsx)("div", {
                                          children: (0, a.jsx)(d.Z, {
                                            name: "user_ruby",
                                            required: !0,
                                            id: "outlined-required",
                                            value: j,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                (0, a.jsx)("h3", {
                                  className: "fon4 fonSp4 bold mar-t3 notoGo",
                                  children: e.form.mail,
                                }),
                                (0, a.jsx)(m.Z, {
                                  sx: {
                                    "& .MuiTextField-root": {
                                      m: 0,
                                      width: "100%",
                                    },
                                  },
                                  noValidate: !0,
                                  autoComplete: "off",
                                  className: "mar-t1 ".concat(i().textbox),
                                  type: "text",
                                  id: "outlined-required",
                                  required: !0,
                                  size: "10",
                                  onChange: function (e) {
                                    return N(e.target.value);
                                  },
                                  children: (0, a.jsx)("div", {
                                    children: (0, a.jsx)(d.Z, {
                                      name: "user_email",
                                      required: !0,
                                      id: "outlined-required",
                                      value: _,
                                    }),
                                  }),
                                }),
                                (0, a.jsx)("h3", {
                                  className: "fon4 fonSp4 bold mar-t3 notoGo",
                                  children: e.form.tel,
                                }),
                                (0, a.jsx)(m.Z, {
                                  sx: {
                                    "& .MuiTextField-root": {
                                      m: 0,
                                      width: "100%",
                                    },
                                  },
                                  noValidate: !0,
                                  autoComplete: "off",
                                  className: "mar-t1 ".concat(i().textbox),
                                  type: "text",
                                  id: "tel",
                                  required: !0,
                                  size: "10",
                                  onChange: function (e) {
                                    return S(e.target.value);
                                  },
                                  children: (0, a.jsx)("div", {
                                    children: (0, a.jsx)(d.Z, {
                                      name: "user_telnumber",
                                      required: !0,
                                      id: "outlined-required",
                                      value: y,
                                    }),
                                  }),
                                }),
                                (0, a.jsx)("h3", {
                                  className:
                                    "fon4 fonSp4 bold mar-t3 mar-b1 notoGo",
                                  children: e.form.message,
                                }),
                                (0, a.jsx)(d.Z, {
                                  name: "message",
                                  className: "".concat(i().textbox),
                                  onChange: function (e) {
                                    return M(e.target.value);
                                  },
                                  id: "outlined-multiline-static",
                                  multiline: !0,
                                  fullWidth: !0,
                                  rows: 4,
                                  value: C,
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "".concat(
                                i().privacyPolicy,
                                " sectionSpaceS"
                              ),
                              children: [
                                (0, a.jsx)("input", {
                                  type: "checkbox",
                                  id: "privacyPolicy",
                                  name: "privacyPolicy",
                                  value: E,
                                  onClick: function () {
                                    P(function (e) {
                                      return !e;
                                    });
                                  },
                                }),
                                (0, a.jsxs)("div", {
                                  children: [
                                    (0, a.jsx)("h6", {
                                      className: "fon6 fonSp6 cursor notoGo",
                                      children: (0, a.jsx)(l(), {
                                        href: "/privacyPolicy",
                                        children: e.form.privacyPolicy,
                                      }),
                                    }),
                                    (0, a.jsx)("h6", {
                                      className: "fon6 fonSp6 cursor notoGo",
                                      dangerouslySetInnerHTML: {
                                        __html: e.form.privacyPolicyText,
                                      },
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              disabled: !L,
                              className: ""
                                .concat(i().button, " ")
                                .concat(L ? i().active : "", " sectionSpaceS"),
                              onClick: A,
                              children: (0, a.jsx)("h5", {
                                className: "fon4 fonSp4 cursor foncolW notoGo",
                                children: e.form.send,
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: ""
                                .concat(i().thanksMessage, " ")
                                .concat(Z ? i().active : ""),
                              children: (0, a.jsx)("h5", {
                                className: "mar-t3 mar-b1 tex-c bold",
                                dangerouslySetInnerHTML: {
                                  __html: e.form.sendMessage,
                                },
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: ""
                                .concat(i().errorMessage, " ")
                                .concat(F ? i().active : ""),
                              children: (0, a.jsx)("p", {
                                className: "mar-t2 tex-c fon5 fonSp3",
                                dangerouslySetInnerHTML: {
                                  __html: e.form.sendError,
                                },
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      }
    },
    3621: function (e) {
      e.exports = {
        contact: "contact_contact__6De6R",
        contactInfo: "contact_contactInfo__dw_vm",
        formColumn: "contact_formColumn__66hK3",
        textbox: "contact_textbox__zOFmT",
        contactContents: "contact_contactContents__FRD4V",
        privacyPolicy: "contact_privacyPolicy__Y6fh0",
        button: "contact_button__H_WsI",
        active: "contact_active__wK0ZL",
        thanksMessage: "contact_thanksMessage__yBQHi",
        errorMessage: "contact_errorMessage__NGFYP",
      };
    },
    2665: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"meta":{"pageName":"/contact","title":"お問い合わせ | ROSETIQUE JAPAN","description":"お問い合わせ","image":"/img/ogp.jpg","appId":"1809010892654485","author":"\xa9 2023 ROSETIQUE JAPAN Inc.","locale":"ja_JP"},"catchCopy":{"subTitle":"お問い合わせ","title":"Contact"},"contactInfo":{"infoTitle1":"品種に関するお問い合わせ先","infoText1":"〒737-2609<br />広島県呉市安浦町大字中畑字立小路510-262（瀬戸内海国立公園　野呂山山頂）<br />TEL : 0823-70-5636<br />FAX : 0823-70- 5637<br />E-MAIL : QYP03062@nIfty.ne.jp","infoTitle2":"広報・取材・プレスリリースに関するお問い合わせ先","infoText2":"〒158-0082<br />東京都世田谷区等々力8-12-3 1F<br />E-MAIL : rosetiquebymiwako@gmail.com"},"form":{"subTitle":"フォーム","title":"Contact Form","name":"Name","nameOption":"（企業の方は会社名も記入してください）","hurigana":"ふりがな","mail":"Address","tel":"Tel","message":"Message","privacyPolicy":"「プライバシーポリシー」","privacyPolicyText":"をお読みいただき、 同意の上「確認画面へ」をクリックしてください。<br />お客様の個人情報は「プライバシーポリシー」に則り管理させていただきます。","send":"送信","sendMessage":"お問い合わせありがとうございます。<br />返信は３営業日以内にご連絡いたします。","sendError":"エラー : メッセージを送信できませんんでした。<br />もう一度お試しください"}}'
      );
    },
    8791: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"meta":{"pageName":"/contact","title":"お問い合わせ | ROSETIQUE JAPAN","description":"お問い合わせ","image":"/img/ogp.jpg","appId":"1809010892654485","author":"\xa9 2023 ROSETIQUE JAPAN Inc.","locale":"ja_JP"},"catchCopy":{"subTitle":"お問い合わせ","title":"Contact"},"contactInfo":{"infoTitle1":"品種に関するお問い合わせ先","infoText1":"〒737-2609<br />広島県呉市安浦町大字中畑字立小路510-262（瀬戸内海国立公園　野呂山山頂）<br />TEL : 0823-70-5636<br />FAX : 0823-70- 5637<br />E-MAIL : QYP03062@nIfty.ne.jp","infoTitle2":"広報・取材・プレスリリースに関するお問い合わせ先","infoText2":"〒158-0082<br />東京都世田谷区等々力8-12-3 1F<br />E-MAIL : rosetiquebymiwako@gmail.com"},"form":{"subTitle":"フォーム","title":"Contact Form","name":"お名前","nameOption":"（企業の方は会社名も記入してください）","hurigana":"ふりがな","mail":"メールアドレス","tel":"電話番号","message":"お問い合わせ内容","privacyPolicy":"「プライバシーポリシー」","privacyPolicyText":"をお読みいただき、 同意の上「確認画面へ」をクリックしてください。<br />お客様の個人情報は「プライバシーポリシー」に則り管理させていただきます。","send":"送信","sendMessage":"お問い合わせありがとうございます。<br />返信は３営業日以内にご連絡いたします。","sendError":"エラー : メッセージを送信できませんんでした。<br />もう一度お試しください"}}'
      );
    },
  },
  function (e) {
    e.O(0, [176, 774, 888, 179], function () {
      return e((e.s = 8105));
    }),
      (_N_E = e.O());
  },
]);
