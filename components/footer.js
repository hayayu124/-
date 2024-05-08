import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import cn from "../components/footer.module.scss";
import Link from "next/link";

export default function Footer() {
  //テキスト
  const { locale } = useRouter();
  let text;
  if (locale == "ja") {
    text = require("../json/ja/page_footer.json");
  } else if (locale == "en") {
    text = require("../json/en/page_footer.json");
  }

  return (
    <>
      <footer className={`${cn.footer}`}>
        <div className={`${cn.footerColumn} grid3`}>
          <div className={`${cn.rosetiqueInfo}`}>
            <h5 className={`fon4 fonSp5`}>Cut Rose Collection</h5>
            <h1 className={`fon3 fonSp2 ${cn.footerTitle}`}>ROSETIQUE JAPAN</h1>
          </div>

          <div className={`${cn.footerContents}`}>
            <h3 className={`fon3 fonSp3 bold`}>Contents</h3>

            <div className={`${cn.footerContentsDetail}`}>
              <Link href="/">
                <h5 className={`fon4 fonSp4 cursor`}>TOP</h5>
              </Link>

              <Link href="/about">
                <h5 className={`fon4 fonSp4 cursor`}>About</h5>
              </Link>

              <Link href="/news">
                <h5 className={`fon4 fonSp4 cursor`}>NEWS</h5>
              </Link>

              <h5 className={`fon4 fonSp4`}>Collection</h5>

              <Link href="/brandNew">
                <h5 className={`fon5 fonSp5 cursor`}>&nbsp;&nbsp;Brand-New</h5>
              </Link>

              <Link href="/miwakoTiqueSeries">
                <h5 className={`fon5 fonSp5 cursor`}>
                  &nbsp;&nbsp;MIWAKO TIQUE Serious
                </h5>
              </Link>

              <Link href="/varietyList">
                <h5 className={`fon5 fonSp5 cursor`}>&nbsp;&nbsp;Variety</h5>
              </Link>

              {/* <h5 className={`${cn.footerMenu}`}>お気に入り</h5> */}

              <Link href="/company">
                <h5 className={`fon4 fonSp4 cursor`}>Company</h5>
              </Link>
            </div>
          </div>

          <div className={`${cn.footerContact}`}>
            <h3 className={`fon3 fonSp3 bold`}>Contact</h3>

            <div className={`${cn.footerContactDetail}`}>
              <p
                className={`fon5 fonSp5 cursor`}
                dangerouslySetInnerHTML={{
                  __html: text.contact.text,
                }}
              />

              {/* お問い合わせボタン */}
              <Link href="/contact" text={text.contact.buttonText}>
                <div className={`${cn.contactButton} ${cn.footerMenu} mar-t1`}>
                  <img src="/img/contactButton.png" alt="" />
                </div>
              </Link>

              {/* SNS */}
              <div className={`${cn.snsColumn} mar-t2`}>
                <div className={`${cn.snsIcon}`}>
                  <a
                    href="https://m.facebook.com/people/Rosetique-by-Miwako/100063798622514/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/img/facebook.png" alt="" />
                  </a>
                </div>

                <div className={`${cn.snsIcon}`}>
                  <a
                    href="https://twitter.com/_rosetique_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/img/twitter.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${cn.footerCopilight}`}>
          <h5 className={`fon5 fonSp5 cursor`}>© 2024 ROSETIQUE JAPAN Inc.</h5>
        </div>
      </footer>
    </>
  );
}
