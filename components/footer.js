import React, { useState, useEffect } from "react";
import cn from "../components/footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className={`${cn.footer}`}>
        <div className={`${cn.footerColumn} grid3`}>
          <div className={`${cn.rosetiqueInfo}`}>
            <h1>Rosetique</h1>
            <p>Japan</p>
            <h5>
              The Rose Maker IMAI KIYOSHI
              <br />
              Cut Rose Collection
            </h5>
          </div>

          <div className={`${cn.footerContents}`}>
            <h3>Contents</h3>

            <div className={`${cn.footerContentsDetail}`}>
              <Link href="/">
                <h5 className={`${cn.footerMenu}`}>TOP</h5>
              </Link>

              <Link href="/about">
                <h5 className={`${cn.footerMenu}`}>About</h5>
              </Link>

              <Link href="/news">
                <h5 className={`${cn.footerMenu}`}>NEWS</h5>
              </Link>

              <h5>コレクション</h5>

              <Link href="/brandNew">
                <h6 className={`${cn.footerMenu}`}>&nbsp;&nbsp;Brand-New</h6>
              </Link>

              <Link href="/miwakoTiqueSeries">
                <h6 className={`${cn.footerMenu}`}>
                  &nbsp;&nbsp;MIWAKO TIQUE Serious
                </h6>
              </Link>

              <Link href="/varietyList">
                <h6 className={`${cn.footerMenu}`}>&nbsp;&nbsp;品種一覧</h6>
              </Link>

              <h5 className={`${cn.footerMenu}`}>お気に入り</h5>

              <Link href="/company">
                <h5 className={`${cn.footerMenu}`}>会社概要</h5>
              </Link>
            </div>
          </div>

          <div className={`${cn.footerContact}`}>
            <h3>Contact</h3>

            <div className={`${cn.footerContactDetail}`}>
              <h5>
                品種に関するお問い合わせ、
                <br />
                取材などはこちらからお願いいたします。
              </h5>

              {/* お問い合わせボタン */}
              <Link href="/contact">
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
          <h6>© 2022 ROSETIQUE JAPAN Inc.</h6>
        </div>
      </footer>
    </>
  );
}
