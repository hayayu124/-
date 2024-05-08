import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import cn from "../components/contact.module.scss";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ScrollEffect from "../components/utility/utilityscrollEffect";

import HeadComponent from "../components/headComponent";

import axios from "axios";

export default function Contact() {
  //テキスト
  const { locale } = useRouter();
  let text;
  if (locale == "ja") {
    text = require("../json/ja/page_contact.json");
  } else if (locale == "en") {
    text = require("../json/en/page_contact.json");
  }

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // const {
    //   name,
    //   nameRuby,
    //   email,
    //   telnumber,
    //   message,
    // } = formData;

    const data = new FormData();
    data.append("name", name);
    if (locale == "ja") {
      data.append("hurigana", nameRuby);
    }
    data.append("email", email);
    data.append("telnumber", telnumber);
    data.append("message", message);

    console.log(data.name);

    const url =
      locale == "ja"
        ? `https://ferntastique.tokyo/mail/send_catalog.php`
        : `https://ferntastique.tokyo/mail/send_catalog_en.php`;

    return axios
      .post(url, data)
      .then(function (res) {
        console.log(res);

        window.scrollTo({
          top: 0,
        });
        setSendMessage(true);
        return res.data;
      })
      .catch(function (error) {
        console.log(error);
        setErrorMessage(true);
      });
  };

  const disableSend =
    locale === "ja"
      ? name !== "" &&
        nameRuby !== "" &&
        email !== "" &&
        message !== "" &&
        cheakBox === true
      : name !== "" && email !== "" && message !== "" && cheakBox === true;

  return (
    <>
      <HeadComponent meta={text.meta} />
      {/* 品種一覧 */}
      <ScrollEffect>
        <section className={`${cn.contact} sectionSpaceM mar-b4 sec-c`}>
          <div className={`titleColumn tex-c mar-b4`}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <h5 className={`fon5 fonSp5 mar-b1`}>
                {text.catchCopy.subTitle}
              </h5>

              <h2 className={`fon2 fonSp2 bold mar-b05`}>
                {text.catchCopy.title}
              </h2>

              <div className={`titleBorder sec-c`}></div>
            </ScrollEffect>
          </div>

          <ScrollEffect className={`intMoreDelay`} after={`intActive`}>
            <div
              className={`${cn.contactInfo} collectionColumn sectionSpaceS tex-l grid4 sec-c`}
            >
              <div className={`collectionName`}>
                <h3 className={`fon3 fonSp3 bold`}>
                  {text.contactInfo.infoTitle1}
                </h3>
                <h5
                  className={`mar-t3 fon5 fonSp5 lin-22`}
                  dangerouslySetInnerHTML={{
                    __html: text.contactInfo.infoText1,
                  }}
                />
              </div>

              <div className={`collectionName sectionSpaceS`}>
                <h3 className={`fon3 fonSp3 bold`}>
                  {text.contactInfo.infoTitle2}
                </h3>
                <h5
                  className={`mar-t3 fon5 fonSp5 lin-22`}
                  dangerouslySetInnerHTML={{
                    __html: text.contactInfo.infoText2,
                  }}
                />
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
                  <h5 className={`fon5 fonSp5 mar-b1`}>{text.form.subTitle}</h5>

                  <h2 className={`fon2 fonSp2 bold mar-b05`}>
                    {text.form.title}
                  </h2>

                  <div className={`titleBorder sec-c`}></div>
                </ScrollEffect>
              </div>

              {/* フォーム */}
              <form ref={form} className={`${cn.formColumn} t_main`}>
                {/* 名前 */}
                <div className={`${cn.contactContents} sectionSpaceS grid5`}>
                  <div className={`collectionName`}>
                    <h3 className={`fon4 fonSp4 bold notoGo`}>
                      {text.form.name}
                      <span className={`fon5 fonSp5 bold`}>
                        {text.form.nameOption}
                      </span>
                    </h3>

                    <Box
                      sx={{
                        "& .MuiTextField-root": { m: 0, width: "100%" },
                      }}
                      noValidate
                      autoComplete="off"
                      className={`mar-t1 ${cn.textbox}`}
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

                    {locale == "ja" && (
                      <>
                        <h3 className={`fon4 fonSp4 bold mar-t3 notoGo`}>
                          {text.form.hurigana}
                        </h3>

                        <Box
                          sx={{
                            "& .MuiTextField-root": { m: 0, width: "100%" },
                          }}
                          noValidate
                          autoComplete="off"
                          className={`mar-t1 ${cn.textbox}`}
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
                      </>
                    )}

                    {/* email */}
                    <h3 className={`fon4 fonSp4 bold mar-t3 notoGo`}>
                      {text.form.mail}
                    </h3>

                    <Box
                      sx={{
                        "& .MuiTextField-root": { m: 0, width: "100%" },
                      }}
                      noValidate
                      autoComplete="off"
                      className={`mar-t1 ${cn.textbox}`}
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

                    <h3 className={`fon4 fonSp4 bold mar-t3 notoGo`}>
                      {text.form.tel}
                    </h3>

                    <Box
                      sx={{
                        "& .MuiTextField-root": { m: 0, width: "100%" },
                      }}
                      noValidate
                      autoComplete="off"
                      className={`mar-t1 ${cn.textbox}`}
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

                    <h3 className={`fon4 fonSp4 bold mar-t3 mar-b1 notoGo`}>
                      {text.form.message}
                    </h3>

                    <TextField
                      name="message"
                      className={`${cn.textbox}`}
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

                    <div>
                      <h6 className={`fon6 fonSp6 cursor notoGo`}>
                        <Link href="/privacyPolicy">
                          {text.form.privacyPolicy}
                        </Link>
                      </h6>

                      <h6
                        className={`fon6 fonSp6 cursor notoGo`}
                        dangerouslySetInnerHTML={{
                          __html: text.form.privacyPolicyText,
                        }}
                      />
                    </div>
                  </div>

                  {/* 送信 */}
                  <div
                    disabled={!disableSend}
                    className={`${cn.button} ${
                      disableSend ? cn.active : ""
                    } sectionSpaceS`}
                    onClick={handleSubmit}
                  >
                    <h5 className={`fon4 fonSp4 cursor foncolW notoGo`}>
                      {text.form.send}
                    </h5>
                  </div>

                  <div
                    className={`${cn.thanksMessage} ${
                      sendMessage ? cn.active : ""
                    }`}
                  >
                    <h5
                      className="mar-t3 mar-b1 tex-c bold"
                      dangerouslySetInnerHTML={{
                        __html: text.form.sendMessage,
                      }}
                    />
                  </div>

                  <div
                    className={`${cn.errorMessage} ${
                      errorMessage ? cn.active : ""
                    }`}
                  >
                    <p
                      className="mar-t2 tex-c fon5 fonSp3"
                      dangerouslySetInnerHTML={{
                        __html: text.form.sendError,
                      }}
                    />
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
