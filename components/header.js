import React, { useState, useEffect } from "react";
import cn from "../components/header.module.scss";
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
              <Link href="/">
                <h5>Top</h5>
              </Link>
            </div>

            {/* <div className={`${cn.headerMenu} `}>
              <Link href="/about">
                <h5>About</h5>
              </Link>
            </div> */}

            <div className={`${cn.headerMenu} `}>
              <Link href="/news">
                <h5>News</h5>
              </Link>
            </div>
            <div className={`${cn.headerMenu} ${cn.headerCollectionMenu}`}>
              <h5>Collection</h5>
              <div className={`${cn.headerCollectionSubMenu}`}>
                <div className={`${cn.headerCollectionSubMenuDetail}`}>
                  <Link href="/brandNew">
                    <h5>Brand-New</h5>
                  </Link>
                  <div className={`${cn.border}`}></div>
                </div>

                <div className={`${cn.headerCollectionSubMenuDetail}`}>
                  <Link href="/miwakoTiqueSeries">
                    <h5>MIWAKO TIQUE Serious</h5>
                  </Link>
                  <div className={`${cn.border}`}></div>
                </div>

                <div className={`${cn.headerCollectionSubMenuDetail}`}>
                  <Link href="/varietyList">
                    <h5>Variety</h5>
                  </Link>
                  <div className={`${cn.border}`}></div>
                </div>
              </div>
            </div>

            {/* お気に入り */}
            {/* <div className={`${cn.headerMenu}`}>
              <Link href="/favorite">
                <h5>お気に入り</h5>
              </Link>
            </div> */}
            <div className={`${cn.headerMenu}`}>
              <Link href="/contact">
                <h5>Contact</h5>
              </Link>
            </div>
            {/* <div className={`${cn.headerMenu}`}>
              <h5>EN/JP</h5>
            </div> */}
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
        <div
          className={`${cn.humburgerContents} ${button ? cn.active : ""} pos-r`}
        >
          <div className={`${cn.humburgerMenuColumn} pos-a`}>
            {/* <Link href="/about">
              <h3
                onClick={() => {
                  setButton((prevState) => !prevState);
                }}
                className={`fon3Sp`}
              >
                About
              </h3>
            </Link>

            <div className={`${cn.humburgerBorder}`}></div> */}

            <Link href="/">
              <h3
                onClick={() => {
                  setButton((prevState) => !prevState);
                }}
                className={`fon3Sp`}
              >
                Top
              </h3>
            </Link>

            <div className={`${cn.humburgerBorder}`}></div>

            <Link href="/news">
              <h3
                onClick={() => {
                  setButton((prevState) => !prevState);
                }}
                className={`fon3Sp`}
              >
                News
              </h3>
            </Link>

            <div className={`${cn.humburgerBorder}`}></div>

            <h3 className={`fon3Sp bold`}>Collection</h3>
            <div className={`${cn.humburgerBorder}`}></div>

            <Link href="/brandNew">
              <h5
                onClick={() => {
                  setButton((prevState) => !prevState);
                }}
              >
                Brand-New
              </h5>
            </Link>

            <Link href="/miwakoTiqueSeries">
              <h5
                onClick={() => {
                  setButton((prevState) => !prevState);
                }}
              >
                MIWAKO TIQUE Serious
              </h5>
            </Link>

            <Link href="/varietyList">
              <h5
                onClick={() => {
                  setButton((prevState) => !prevState);
                }}
              >
                Variety
              </h5>
            </Link>

            {/* <h3
              onClick={() => {
                setButton((prevState) => !prevState);
              }}
              className={`fon3Sp`}
            >
              お気に入り
            </h3>
            <div className={`${cn.humburgerBorder}`}></div> */}

            <Link href="/contact">
              <h3
                onClick={() => {
                  setButton((prevState) => !prevState);
                }}
                className={`fon3Sp`}
              >
                Contact
              </h3>
            </Link>
            <div className={`${cn.humburgerBorder}`}></div>

            {/* <h5>EN/JP</h5> */}
          </div>
        </div>
      </div>
    </>
  );
}
