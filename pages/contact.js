import React, { useState, useRef, useEffect } from "react";
import cn from "../components/contact.module.scss";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ScrollEffect from "../components/utility/utilityscrollEffect";

export default function Contact() {
  // ロード制御
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const body = document.body; //scroll制御
    body.classList.add("active");
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);

  // フォームの入力内容
  const [name, setName] = useState("");
  const [nameRuby, setNameRuby] = useState("");
  const [email, setEmail] = useState("");
  const [telnumber, setTelnumber] = useState(""); // 「件名」の部分
  const [message, setMessage] = useState(""); // 「お問い合わせ内容」の部分
  const [cheakBox, setCheakBox] = useState("");
  const [sendMessage, setSendMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("aa");

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
          setSendMessage(true);
          setErrorMessage(false);
        },
        (error) => {
          console.log(送れませんでした);
          setErrorMessage(true);
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
      <ScrollEffect>
        <section className={`${cn.contact} sectionSpaceM mar-b4 sec-c`}>
          <div className={`titleColumn tex-c mar-b4`}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <h5 className={`fon5 fonSp5 mar-b1`}>お問い合わせ</h5>

              <h2 className={`fon2 fonSp2 bold mar-b05`}>Contact</h2>

              <div className={`titleBorder sec-c`}></div>
            </ScrollEffect>
          </div>

          <ScrollEffect className={`intMoreDelay`} after={`intActive`}>
            <div
              className={`${cn.contactInfo} collectionColumn sectionSpaceS tex-l grid4 sec-c`}
            >
              <div className={`collectionName`}>
                <h3 className={`fon3 fonSp3 bold`}>
                  品種に関するお問い合わせ先
                </h3>
                <h5 className={`mar-t3 fon5 fonSp5 lin-22`}>
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
                <h3 className={`fon3 fonSp3 bold`}>
                  広報・取材・プレスリリースに関するお問い合わせ先
                </h3>
                <h5 className={`mar-t3 fon5 fonSp5 lin-22`}>
                  〒158-0082
                  <br />
                  東京都世田谷区等々力8-12-3 1F
                  <br />
                  E-MAIL : rosetiquebymiwako@gmail.com
                </h5>
              </div>
            </div>
          </ScrollEffect>

          <ScrollEffect>
            <ScrollEffect className={`intDelay`} after={`intActive`}>
              {/* コンタクト */}
              <div className={`titleColumn tex-c mar-b4 sectionSpaceM`}>
                <ScrollEffect
                  className={`${cn.intMoreDelay}`}
                  after={cn.intActive}
                >
                  <h5 className={`fon5 fonSp5 mar-b1`}>フォーム</h5>

                  <h2 className={`fon2 fonSp2 bold mar-b05`}>Contact Form</h2>

                  <div className={`titleBorder sec-c`}></div>
                </ScrollEffect>
              </div>

              <form ref={form} className={`${cn.formColumn} t_main`}>
                {/* 名前 */}
                <div className={`${cn.contactContents} sectionSpaceS grid5`}>
                  <div className={`collectionName`}>
                    <h3 className={`fon4 fonSp4 bold`}>
                      お名前{" "}
                      <span className={`fon5 fonSp5 bold`}>
                        （企業の方は会社名も記入してください）
                      </span>
                    </h3>

                    <Box
                      sx={{
                        "& .MuiTextField-root": { m: 0, width: "100%" },
                      }}
                      noValidate
                      autoComplete="off"
                      className={`mar-t1`}
                      type="text"
                      id="name"
                      required
                      size="10"
                      value="name"
                      onChange={(e) => setName(e.target.value)}
                    >
                      <div>
                        <TextField
                          name="user_name"
                          required
                          id="outlined-required"
                          value={name}
                        ></TextField>
                      </div>
                    </Box>

                    {/* ふりがな */}
                    <h3 className={`fon4 fonSp4 bold mar-t3`}>ふりがな</h3>

                    <Box
                      sx={{
                        "& .MuiTextField-root": { m: 0, width: "100%" },
                      }}
                      noValidate
                      autoComplete="off"
                      className={`mar-t1`}
                      type="text"
                      id="name_ruby"
                      required
                      size="10"
                      onChange={(e) => setNameRuby(e.target.value)}
                    >
                      <div>
                        <TextField
                          name="user_ruby"
                          required
                          id="outlined-required"
                          value={nameRuby}
                        ></TextField>
                      </div>
                    </Box>

                    {/* email */}
                    <h3 className={`fon4 fonSp4 bold mar-t3`}>
                      メールアドレス
                    </h3>

                    <Box
                      sx={{
                        "& .MuiTextField-root": { m: 0, width: "100%" },
                      }}
                      noValidate
                      autoComplete="off"
                      className={`mar-t1`}
                      type="text"
                      id="outlined-required"
                      required
                      size="10"
                      onChange={(e) => setEmail(e.target.value)}
                    >
                      <div>
                        <TextField
                          name="user_email"
                          required
                          id="outlined-required"
                          value={email}
                        ></TextField>
                      </div>
                    </Box>

                    <h3 className={`fon4 fonSp4 bold mar-t3`}>電話番号</h3>

                    <Box
                      sx={{
                        "& .MuiTextField-root": { m: 0, width: "100%" },
                      }}
                      noValidate
                      autoComplete="off"
                      className={`mar-t1`}
                      type="text"
                      id="tel"
                      required
                      size="10"
                      onChange={(e) => setTelnumber(e.target.value)}
                    >
                      <div>
                        <TextField
                          name="user_telnumber"
                          required
                          id="outlined-required"
                          value={telnumber}
                        ></TextField>
                      </div>
                    </Box>

                    <h3 className={`fon4 fonSp4 bold mar-t3 mar-b1`}>
                      お問い合わせ内容
                    </h3>

                    <TextField
                      name="message"
                      onChange={(e) => setMessage(e.target.value)}
                      id="outlined-multiline-static"
                      multiline
                      fullWidth={true}
                      rows={4}
                      value={message}
                    />
                  </div>

                  <div className={`${cn.privacyPolicy} sectionSpaceS`}>
                    <input
                      type="checkbox"
                      id="privacyPolicy"
                      name="privacyPolicy"
                      value={cheakBox}
                      onClick={() => {
                        setCheakBox((prevState) => !prevState);
                      }}
                    />

                    <h6 className={`fon6 fonSp6 cursor`}>
                      <Link href="/privacyPolicy">
                        「プライバシーポリシー」
                      </Link>
                      をお読みいただき、 同意の上「確認画面
                      へ」をクリックしてください。
                      お客様の個人情報は「プライバシーポリシー」に則り
                      管理させてい ただきます。
                    </h6>
                  </div>

                  {/* 送信 */}
                  <div
                    disabled={!disableSend}
                    className={`${cn.button} ${
                      disableSend ? cn.active : ""
                    } sectionSpaceS`}
                    onClick={sendEmail}
                  >
                    <h5 className={`fon4 fonSp4 cursor foncolW`}>送信</h5>
                  </div>

                  <div
                    className={`${cn.thanksMessage} ${
                      sendMessage ? cn.active : ""
                    }`}
                  >
                    <h5 className="mar-t3 mar-b1 tex-c bold">
                      お問い合わせありがとうございます。
                      <br />
                      返信は３営業日以内にご連絡いたします。
                    </h5>
                  </div>

                  <div
                    className={`${cn.errorMessage} ${
                      errorMessage ? cn.active : ""
                    }`}
                  >
                    <p className="mar-t2 tex-c fon5 fonSp3">
                      エラー : メッセージを送信できませんんでした。
                      <br />
                      もう一度お試しください
                    </p>
                  </div>
                </div>
              </form>
            </ScrollEffect>
          </ScrollEffect>
        </section>
      </ScrollEffect>
    </>
  );
}
