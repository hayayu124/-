import React, { useState, useEffect } from "react";
import cn from "../components/toppage.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className={`footer`}>
        <div className={`footerColumn grid3`}>
          <div className={`rosetiqueInfo`}>
            <h1>Rosetique Japan</h1>
            <h5>
              The Rose Maker IMAI KIYOSHI
              <br />
              Cut Rose Collection
            </h5>
          </div>

          <div className={`footerContents`}>
            <h3>Contents</h3>

            <div className={`footerContentsDetail`}>
              <Link href="/">
                <h5>TOP</h5>
              </Link>

              <Link href="/about">
                <h5>About</h5>
              </Link>

              <Link href="/news">
                <h5>NEWS</h5>
              </Link>

              <h5>コレクション</h5>

              <Link href="/collection">
                <h6>&nbsp;&nbsp;Brand-New</h6>
              </Link>
              <h6>&nbsp;&nbsp;MIWAKO TIQUE Serious</h6>

              <Link href="/varietyList">
                <h6>&nbsp;&nbsp;品種一覧</h6>
              </Link>

              <h5>お気に入り</h5>

              <Link href="/company">
                <h5>会社概要</h5>
              </Link>
            </div>
          </div>

          <div className={`footerContact`}>
            <h3>Contact</h3>

            <div className={`footerContactDetail`}>
              <h5>
                品種に関するお問い合わせ、
                <br />
                取材などはこちらからお願いいたします。
              </h5>

              {/* お問い合わせボタン */}
              <Link href="/contact">
                <div className={`contactButton mar-t1`}>
                  <img src="/img/contactButton.png" alt="" />
                </div>
              </Link>

              {/* SNS */}
              <div className={`snsColumn mar-t2`}>
                <div className={`snsIcon`}>
                  <img src="/img/instagram.png" alt="" />
                </div>
                <div className={`snsIcon`}>
                  <img src="/img/facebook.png" alt="" />
                </div>
                <div className={`snsIcon`}>
                  <img src="/img/twitter.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`footerCopilight`}>
          <h6>© 2022 ROSETIQUE JAPAN Inc.</h6>
        </div>
      </footer>
    </>
  );
}
