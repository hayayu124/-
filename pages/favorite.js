import React, { useState, useEffect, useRef } from "react";
import cn from "../components/varietyList.module.scss";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

export default function Favorite() {
  //花のカラムを自動処理
  useEffect(() => {
    if (window.localStorage) {
      const favFlower = localStorage.getItem("id");
      const favRoseId = JSON.parse(favFlower);
      console.log(favRoseId);
    }
  }, []);

  return <></>;
}
