import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import cn from "../components/company.module.scss";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

import HeadComponent from "/components/headComponent";

export default function Company() {
  //テキスト
  const { locale } = useRouter();
  let text;
  if (locale == "ja") {
    text = require("../json/ja/page_company.json");
  } else if (locale == "en") {
    text = require("../json/en/page_company.json");
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

  return (
    <>
      <HeadComponent meta={text.meta} />
      {/* 品種一覧 */}
      <section className={`${cn.company} sectionSpaceM mar-b4 sec-c`}>
        <div className={`titleColumn tex-c mar-b4`}>
          <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
            <h5 className={`fon5 fonSp5 mar-b1`}>{text.subTitle}</h5>

            <h2 className={`fon2 fonSp2 bold mar-b05`}>{text.title}</h2>

            <div className={`titleBorder sec-c`}></div>
          </ScrollEffect>
        </div>

        <ScrollEffect className={`intMostDelay`} after={`intActive`}>
          <div
            className={`${cn.companyColumn} collectionColumn sectionSpaceM tex-L grid4 sec-c`}
          >
            <div className={`collectionName`}>
              <h3 className={`fon3 fonSp3 bold`}>{text.contents.title1}</h3>
              <h5
                className={`fon5 fonSp5 mar-t2 lin-22`}
                dangerouslySetInnerHTML={{ __html: text.contents.text1 }}
              />
            </div>

            <div className={`collectionName sectionSpaceS`}>
              <h3 className={`fon3 fonSp3 mar-t2 lin-22 bold`}>
                {text.contents.title2}
              </h3>
              <h5
                className={`fon5 fonSp5 mar-t2 lin-22`}
                dangerouslySetInnerHTML={{ __html: text.contents.text2 }}
              />
            </div>
          </div>
        </ScrollEffect>
      </section>
    </>
  );
}
