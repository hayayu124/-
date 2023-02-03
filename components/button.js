import React, { useState, useEffect } from "react";
import cn from "../components/button.module.scss";
import Link from "next/link";

export default function Button({ link }) {
  //ニュースを自動処理
  console.log(link);
  return (
    <>
      {(() => {
        if (link) {
          return (
            <Link href={`${link}`}>
              <div className={`sectionSpaceS tex-c pos-r ${cn.button} sec-c`}>
                <div className={`${cn.btn} ${cn.bgskew}`}>
                  <span className={`fon4 fonSp4 bold`}>もっと見る</span>
                </div>
                <div className={`${cn.borderBlack} pos-a`}></div>
                <div className={`${cn.borderWhite} pos-a`}></div>
              </div>
            </Link>
          );
        } else {
          return (
            <div className={`sectionSpaceS tex-c pos-r ${cn.button} sec-c`}>
              <div className={`${cn.btn} ${cn.bgskew}`}>
                <span className={`fon4 fonSp4 bold`}>もっと見る</span>
              </div>
              <div className={`${cn.borderBlack} pos-a`}></div>
              <div className={`${cn.borderWhite} pos-a`}></div>
            </div>
          );
        }
      })()}
    </>
  );
}
