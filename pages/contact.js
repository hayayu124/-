import React, { useState, useRef, useEffect } from "react";
import cn from "../components/contact.module.scss";
import emailjs from "@emailjs/browser";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

export default function Top() {
  // フォームの入力内容
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current
      )
      .then(
        (result) => {
          setOpen(true);
          setName("");
          setReply("");
          setMail("");
          setTelnumber("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const disableSend =
    (name !== "" && mail !== "" && message !== "") ||
    (name !== "" && telnumber !== "" && message !== "");

  return (
    <>
      {/* 品種一覧 */}
      <section className={`${cn.contact} sectionSpaceM mar-b4`}>
        <div className={`titleColumn`}>
          <div className={`mar-t2`}>
            <h5>お問い合わせ</h5>

            <h2>Contact</h2>
          </div>
        </div>

        <div
          className={`${cn.contactInfo} collectionColumn sectionSpaceS tex-l grid4`}
        >
          <div className={`collectionName`}>
            <h3>品種に関するお問い合わせ先</h3>
            <h5 className={`collectionName mar-t3 lin-9`}>
              〒737-2609
              <br />
              広島県呉市安浦町大字中畑字立小路510-262（瀬戸内海国立公園　野呂山山頂）
              <br />
              TEL : 0823-70-5636
              <br />
              FAX : 0823-70- 5637
              <br />
              E-MAIL : QYP03062@nIfty.ne.jp
            </h5>
          </div>

          <div className={`collectionName sectionSpaceS`}>
            <h3>広報・取材・プレスリリースに関するお問い合わせ先</h3>
            <h5 className={`collectionName mar-t3 lin-9`}>
              〒158-0082
              <br />
              東京都世田谷区等々力8-12-31F
              <br />
              E-MAIL : rosetiquebymiwako@gmail.com
            </h5>
          </div>
        </div>

        {/* コンタクト */}
        <div className={`titleColumn sectionSpaceM`}>
          <div className={`mar-t2`}>
            <h5>フォーム</h5>

            <h2>Contact Form</h2>
          </div>
        </div>

        <div className={`${cn.contactContents} sectionSpaceS grid5`}>
          <div className={`collectionName`}>
            <h3>お名前</h3>
            <h5>（企業の方は会社名も記入してください）</h5>
            <input
              className={`mar-t1`}
              type="text"
              id="name"
              name="name"
              required
              minlength="4"
              maxlength="8"
              size="10"
            />

            <h3 className={`mar-t2`}>ふりがな</h3>
            <input
              className={`mar-t1`}
              type="text"
              id="nameRuby"
              name="name"
              required
              minlength="4"
              maxlength="8"
              size="10"
            />

            <h3 className={`mar-t2`}>メールアドレス</h3>
            <input
              className={`mar-t1`}
              type="text"
              id="address"
              name="name"
              required
              minlength="4"
              maxlength="100"
              size="10"
            />

            <h3 className={`mar-t2`}>電話番号</h3>
            <input
              className={`mar-t1`}
              type="text"
              id="tel"
              name="name"
              required
              minlength="4"
              maxlength="8"
              size="10"
            />

            <h3 className={`mar-t2`}>お問い合わせ内容</h3>
            <textarea className={`mar-t1`} name="comment"></textarea>
          </div>

          <div className={`${cn.privacyPolicy} sectionSpaceS`}>
            <input type="checkbox" name="privacyPolicy" value="agree" />
            <h6>
              「プライバシーポリシー」をお読みいただき、 同意の上「確認画面
              へ」をクリックしてください。
              お客様の個人情報は「プライバシーポリシー」に則り 管理させてい
              ただきます。
            </h6>
          </div>

          {/* 送信 */}
          <div
            className={`${cn.button} ${
              disableSend ? cn.active : ""
            } button moreViewButton sectionSpaceS sendButton`}
            onClick={sendEmail}
          >
            <h5 className={`foncolW moreViewButton sendButtonText`}>送信</h5>
          </div>
        </div>
      </section>
    </>
  );
}
