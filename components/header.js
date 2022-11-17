import React, { useState, useEffect } from "react";
import cn from "../components/toppage.module.scss";
import Link from "next/link";

export default function Header() {
  //ハンバーガーボタン
  const [button, setButton] = useState(false);
  
  return (
    <>
      {/* header */}
      <div className={`${cn.header} ${cn.backColor1}`}>
        <div className={`${cn.headerContents} grid1`}>
          <div className={`${cn.headerLogo}`}>
            <Link href="/">
              <img src="/img/logo_tendency.png" alt="" />
            </Link>
          </div>

          {/* PCメニュー */}
          <div className={`${cn.headerMenuColumn}`}>
            <div className={`${cn.headerMenu} `}>
              <Link href="/about">
                <h5>About</h5>
              </Link>
            </div>

            <div className={`${cn.headerMenu} `}>
              <Link href="/news">
                <h5>News</h5>
              </Link>
            </div>
            <div className={`${cn.headerMenu} ${cn.headerCollectionMenu}`}>
              <h5>コレクション</h5>
              <div className={`${cn.headerCollectionSubMenu}`}>
                <Link href="/collection">
                  <h5>Brand-New</h5>
                </Link>

                <Link href="/collection">
                  <h5>MIWAKO TIQUE Serious</h5>
                </Link>

                <Link href="/varietyList">
                  <h5>品種一覧</h5>
                </Link>
              </div>
            </div>
            <div className={`${cn.headerMenu}`}>
              <Link href="/favorite">
                <h5>お気に入り</h5>
              </Link>
            </div>
            <div className={`${cn.headerMenu}`}>
              <Link href="/contact">
                <h5>お問い合わせ</h5>
              </Link>
            </div>
            <div className={`${cn.headerMenu}`}>
              <h5>EN/JP</h5>
            </div>
          </div>

          {/* SPメニュー */}
          <div className={`${cn.humburgerMenu}`}>
            <div
              onClick={() => {
                setButton((prevState) => !prevState);
              }}
              className={`${cn.humburgerbutton} ${button ? cn.active : ""}`}
            >
              <div className={`${cn.humburgerBorder}`}></div>
              <div className={`${cn.humburgerBorder}`}></div>
              <div className={`${cn.humburgerBorder}`}></div>
            </div>
          </div>
        </div>
        {/* ハンバーガーメニュー */}
        <div className={`${cn.humburgerContents} ${button ? cn.active : ""}`}>
          <div className={`${cn.humburgerMenuColumn} sectionSpaceS`}>
            <Link href="/about">
              <h4>About</h4>
            </Link>

            <div className={`${cn.humburgerBorder}`}></div>

            <Link href="/news">
              <h4>News</h4>
            </Link>

            <div className={`${cn.humburgerBorder}`}></div>

            <h4>コレクション</h4>
            <div className={`${cn.humburgerBorder}`}></div>

            <Link href="/collection">
              <h5>Brand-New</h5>
            </Link>

            <Link href="/collection">
              <h5>MIWAKO TIQUE Serious</h5>
            </Link>

            <Link href="/collection">
              <h5>品種一覧</h5>
            </Link>

            <h4>お気に入り</h4>
            <div className={`${cn.humburgerBorder}`}></div>

            <Link href="/contact">
              <h4>お問い合わせ</h4>
            </Link>
            <div className={`${cn.humburgerBorder}`}></div>

            <h5>EN/JP</h5>
          </div>
        </div>
      </div>
    </>
  );
}
