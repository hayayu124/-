import React, { useState, useEffect } from "react";
import cn from "../components/button.module.scss";

import ScrollEffect from "./utility/utilityscrollEffect";
import LoadingEffect from "./utility/loadingEffect";

export default function backButton() {
  return (
    <>
      <div className={`sectionSpaceS tex-c pos-r ${cn.button} sec-c`}>
        <a href="#" class={`${cn.btn} ${cn.bgskew}`}>
          <span className={`fon4 fonSp4 bold`}>一覧に戻る</span>
        </a>
        <div className={`${cn.borderBlack} pos-a`}></div>
        <div className={`${cn.borderWhite} pos-a`}></div>
      </div>
    </>
  );
}
