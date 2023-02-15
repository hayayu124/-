import React, { useState, useEffect } from "react";
import cn from "../components/button.module.scss";
import Link from "next/link";

export default function FoldingButton(props) {
  //ニュースを自動処理
  return (
    <>
      <div className={`sectionSpaceS tex-c pos-r ${cn.button} sec-c`}>
        <div className={`${cn.btn} ${cn.bgskew}`}>
          <span className={`fon4 fonSp4 bold`}>折りたたむ</span>
        </div>
        <div className={`${cn.borderBlack} pos-a`}></div>
        <div className={`${cn.borderWhite} pos-a`}></div>
      </div>
    </>
  );
}
