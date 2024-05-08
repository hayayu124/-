import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import cn from "../components/privacyPolicy.module.scss";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

import HeadComponent from "/components/headComponent";

export default function PrivacyPolicy() {
  //テキスト
  const { locale } = useRouter();
  let text;
  if (locale == "ja") {
    text = require("../json/ja/page_privacypolicy.json");
  } else if (locale == "en") {
    text = require("../json/en/page_privacypolicy.json");
  }

  return (
    <>
      {/* 品種一覧 */}
      <section className={`${cn.privacyPolicy} sectionSpaceM mar-b4 sec-c`}>
        <div className={`titleColumn tex-c mar-b4`}>
          <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
            <h5 className={`fon5 fonSp5 mar-b1`}>{text.catchCopy.subTitle}</h5>

            <h2 className={`fon2 fonSp2 bold mar-b05`}>
              {text.catchCopy.title}
            </h2>

            <div className={`titleBorder sec-c`}></div>
          </ScrollEffect>
        </div>

        <div className={`${cn.privText} grid4`}>
          <p
            className={`fon4 fonSp5 lin-22`}
            dangerouslySetInnerHTML={{ __html: text.catchCopy.contents }}
          />
        </div>
      </section>
    </>
  );
}
