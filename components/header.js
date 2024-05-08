import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import cn from "../components/header.module.scss";
import Link from "next/link";

export default function Header() {
  const { locale } = useRouter();
  const router = useRouter();

  //ハンバーガーボタン
  const [button, setButton] = useState(false);

  //言語切り替えボタン
  const [language, setLanguage] = useState("ja");

  //ロード時に選択言語の取得
  const [pullDownValue, setPullDownValue] = useState("");
  useEffect(() => {
    setPullDownValue(locale);
  }, []);

  //翻訳
  const handleClick = (e) => {
    e.preventDefault();

    router.push(router.asPath, router.asPath, { locale: e.target.value });
    setPullDownValue(e.target.value);
  };

  return (
    <>
      {/* header */}
      <div className={`${cn.header} ${cn.backColor1}`}>
        <div className={`${cn.headerContents} grid1 pos-r`}>
          <div className={`${cn.headerLogo}`}>
            <Link href="/">
              <img src="/img/logo_tendency.png" alt="" />
            </Link>
          </div>

          {/* PCメニュー */}
          <div className={`${cn.headerMenuColumn}`}>
            <div className={`${cn.headerMenu} `}>
              <Link href="/">
                <h5 className={`${cn.headerMenuText}`}>Top</h5>
              </Link>
            </div>

            <div className={`${cn.headerMenu} `}>
              <Link href="/about">
                <h5 className={`${cn.headerMenuText}`}>About</h5>
              </Link>
            </div>

            <div className={`${cn.headerMenu} `}>
              <Link href="/news">
                <h5 className={`${cn.headerMenuText}`}>News</h5>
              </Link>
            </div>
            <div className={`${cn.headerMenu} ${cn.headerCollectionMenu}`}>
              <h5 className={`${cn.headerMenuText}`}>Collection</h5>
              <div className={`${cn.headerCollectionSubMenu}`}>
                <div className={`${cn.headerCollectionSubMenuDetail}`}>
                  <Link href="/brandNew">
                    <h5 className={`${cn.headerMenuText}`}>Brand-New</h5>
                  </Link>
                  <div className={`${cn.border}`}></div>
                </div>

                <div className={`${cn.headerCollectionSubMenuDetail}`}>
                  <Link href="/miwakoTiqueSeries">
                    <h5 className={`${cn.headerMenuText}`}>
                      MIWAKO TIQUE Serious
                    </h5>
                  </Link>
                  <div className={`${cn.border}`}></div>
                </div>

                <div className={`${cn.headerCollectionSubMenuDetail}`}>
                  <Link href="/varietyList">
                    <h5 className={`${cn.headerMenuText}`}>Variety</h5>
                  </Link>
                  <div className={`${cn.border}`}></div>
                </div>
              </div>
            </div>

            {/* お気に入り */}
            {/* <div className={`${cn.headerMenu}`}>
              <Link href="/favorite">
                <h5 className={`${cn.headerMenuText}`}>Favorite</h5>
              </Link>
            </div> */}
            <div className={`${cn.headerMenu}`}>
              <Link href="/contact">
                <h5 className={`${cn.headerMenuText}`}>Contact</h5>
              </Link>
            </div>
            {/* <select
              name="translation"
              value={pullDownValue}
              onChange={(e) => {
                handleClick(e);
              }}
              className={`${cn.headerMenu} ${cn.translation} fle-f`}
            >
              <option value={"ja"} className={`${cn.headerMenu}`}>
                JP
              </option>
              <option value={"en"} className={`${cn.headerMenu}`}>
                EN
              </option>
            </select> */}
          </div>

          {/* SPメニュー */}
          <div className={`${cn.humburgerMenu} pos-r`}>
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
          className={`${cn.humburgerContents} ${button ? cn.active : ""} pos-a`}
        >
          <div className={`${cn.hunbergerInner} posr`}>
            <div className={`${cn.humburgerMenuColumn} pos-a`}>
              <Link href="/">
                <h3
                  onClick={() => {
                    setButton((prevState) => !prevState);
                  }}
                  className={`${cn.humburgerMenuText}`}
                >
                  Top
                </h3>
              </Link>

              <div className={`${cn.humburgerBorder}`}></div>

              <Link href="/about">
                <h3
                  onClick={() => {
                    setButton((prevState) => !prevState);
                  }}
                  className={`${cn.humburgerMenuText}`}
                >
                  About
                </h3>
              </Link>

              <div className={`${cn.humburgerBorder}`}></div>

              <Link href="/news">
                <h3
                  onClick={() => {
                    setButton((prevState) => !prevState);
                  }}
                  className={`${cn.humburgerMenuText}`}
                >
                  News
                </h3>
              </Link>

              <div className={`${cn.humburgerBorder}`}></div>

              <h3 className={`${cn.humburgerMenuText}`}>Collection</h3>
              <div className={`${cn.humburgerBorder}`}></div>

              <Link href="/brandNew">
                <h5
                  className={`${cn.humburgerMenuSubText}`}
                  onClick={() => {
                    setButton((prevState) => !prevState);
                  }}
                >
                  Brand-New
                </h5>
              </Link>

              <Link href="/miwakoTiqueSeries">
                <h5
                  className={`${cn.humburgerMenuSubText}`}
                  onClick={() => {
                    setButton((prevState) => !prevState);
                  }}
                >
                  MIWAKO TIQUE Serious
                </h5>
              </Link>

              <Link href="/varietyList">
                <h5
                  className={`${cn.humburgerMenuSubText}`}
                  onClick={() => {
                    setButton((prevState) => !prevState);
                  }}
                >
                  Variety
                </h5>
              </Link>

              <Link href="/company">
                <h5
                  className={`fonSp4`}
                  onClick={() => {
                    setButton((prevState) => !prevState);
                  }}
                >
                  Company
                </h5>
              </Link>
              <div className={`${cn.humburgerBorder}`}></div>

              {/* <h3
                onClick={() => {
                  setButton((prevState) => !prevState);
                }}
                className={`${cn.humburgerMenuText}`}
              >
                Favorite
              </h3> */}
              <div className={`${cn.humburgerBorder}`}></div>

              <Link href="/contact">
                <h3
                  className={`${cn.humburgerMenuText}`}
                  onClick={() => {
                    setButton((prevState) => !prevState);
                  }}
                >
                  Contact
                </h3>
              </Link>
              <div className={`${cn.humburgerBorder}`}></div>

              {/* <select
                name="translation"
                value={pullDownValue}
                onChange={(e) => {
                  handleClick(e);
                }}
                className={`${cn.humburgerTranslation} fle-f`}
              >
                <option value="ja" className={`fon5 fon4Sp`}>
                  JP
                </option>
                <option value="en" className={`fon5 fon4Sp`}>
                  EN
                </option>
              </select> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
