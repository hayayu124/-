import React, { useState, useRef, useEffect } from "react";
import cn from "../components/contact.module.scss";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Contact() {
  // フォームの入力内容
  const [name, setName] = useState("");
  const [nameRuby, setNameRuby] = useState("");
  const [email, setEmail] = useState("");
  const [telnumber, setTelnumber] = useState(""); // 「件名」の部分
  const [message, setMessage] = useState(""); // 「お問い合わせ内容」の部分
  const [cheakBox, setCheakBox] = useState("");
  // const [sendMessage, setSendMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setName("");
          setNameRuby("");
          setEmail("");
          setTelnumber("");
          setMessage("");
          setCheakBox("");
          // setSendMessage(true);
        },
        (error) => {
          console.log(送れませんでした);
        }
      );
  };

  const disableSend =
    name !== "" &&
    nameRuby !== "" &&
    email !== "" &&
    message !== "" &&
    cheakBox == true;

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

        <div ref={form} className={`${cn.formColumn} t_main`}>
          {/* 名前 */}
          <div className={`${cn.contactContents} sectionSpaceS grid5`}>
            <div className={`collectionName`}>
              <h3>お名前</h3>
              <h5>（企業の方は会社名も記入してください）</h5>

              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 0, width: "100%" },
                }}
                noValidate
                autoComplete="off"
                className={`mar-t1`}
                type="text"
                id="name"
                name="user_name"
                required
                size="10"
                value="name"
                onChange={(e) => setName(e.target.value)}
              >
                <div>
                  <TextField required id="outlined-required"></TextField>
                </div>
              </Box>

              {/* ふりがな */}
              <h3 className={`mar-t2`}>ふりがな</h3>

              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 0, width: "100%" },
                }}
                noValidate
                autoComplete="off"
                className={`mar-t1`}
                type="text"
                id="name_ruby"
                name="nameRuby"
                required
                size="10"
                onChange={(e) => setNameRuby(e.target.value)}
              >
                <div>
                  <TextField required id="outlined-required"></TextField>
                </div>
              </Box>

              {/* email */}
              <h3 className={`mar-t2`}>メールアドレス</h3>

              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 0, width: "100%" },
                }}
                noValidate
                autoComplete="off"
                className={`mar-t1`}
                type="text"
                id="outlined-required"
                name="user_email"
                required
                size="10"
                onChange={(e) => setEmail(e.target.value)}
              >
                <div>
                  <TextField required id="outlined-required"></TextField>
                </div>
              </Box>

              <h3 className={`mar-t2`}>電話番号</h3>

              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 0, width: "100%" },
                }}
                noValidate
                autoComplete="off"
                className={`mar-t1`}
                type="text"
                id="tel"
                name="user_telnumber"
                required
                size="10"
                onChange={(e) => setTelnumber(e.target.value)}
              >
                <div>
                  <TextField required id="outlined-required"></TextField>
                </div>
              </Box>

              <h3 className={`mar-t2`}>お問い合わせ内容</h3>

              <TextField
                className={`mar-t1`}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                id="outlined-multiline-static"
                multiline
                fullWidth={true}
                rows={4}
              />
            </div>

            <div className={`${cn.privacyPolicy} sectionSpaceS`}>
              <input
                type="checkbox"
                id="privacyPolicy"
                name="privacyPolicy"
                value="agree"
                onClick={() => {
                  setCheakBox((prevState) => !prevState);
                }}
              />

              <h6>
                <Link href="/privacyPolicy">「プライバシーポリシー」</Link>
                をお読みいただき、 同意の上「確認画面
                へ」をクリックしてください。
                お客様の個人情報は「プライバシーポリシー」に則り 管理させてい
                ただきます。
              </h6>
            </div>

            {/* 送信 */}
            <div
              disabled={!disableSend}
              className={`${cn.button} ${
                disableSend ? cn.active : ""
              } button moreViewButton sectionSpaceS sendButton`}
              onClick={sendEmail}
            >
              <h5 className={`foncolW moreViewButton sendButtonText`}>送信</h5>
            </div>

            {/* <div
              className={`${cn.thanksMessage} ${sendMessage ? cn.active : ""}`}
            >
              <h5 className="mar-t3 mar-b1 tex-c">
                お問い合わせありがとうございます。
                <br />
                返信は３営業日以内にご連絡いたします。
              </h5>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
