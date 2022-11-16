import React, { useState, useEffect } from "react";
import cn from "../components/news.module.scss";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

export default function Top() {
  //ニュースを自動処理
  const newsColumn = [
    {
      newsPic: "/img/newsPic.jpg",
      newsTitle: "ニュース1",
      newsDescription:
        "ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。",
      newsDate: "2022.04.20",
    },
    {
      newsPic: "/img/newsPic.jpg",
      newsTitle: "ニュース2",
      newsDescription:
        "ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。",
      newsDate: "2022.03.20",
    },
    {
      newsPic: "/img/newsPic.jpg",
      newsTitle: "ニュース3",
      newsDescription:
        "ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。",
      newsDate: "2022.02.29",
    },
    {
      newsPic: "/img/newsPic.jpg",
      newsTitle: "ニュース1",
      newsDescription:
        "ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。",
      newsDate: "2022.04.20",
    },
    {
      newsPic: "/img/newsPic.jpg",
      newsTitle: "ニュース2",
      newsDescription:
        "ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。",
      newsDate: "2022.03.20",
    },
    {
      newsPic: "/img/newsPic.jpg",
      newsTitle: "ニュース3",
      newsDescription:
        "ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。",
      newsDate: "2022.02.29",
    },
    {
      newsPic: "/img/newsPic.jpg",
      newsTitle: "ニュース1",
      newsDescription:
        "ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。",
      newsDate: "2022.04.20",
    },
    {
      newsPic: "/img/newsPic.jpg",
      newsTitle: "ニュース2",
      newsDescription:
        "ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。",
      newsDate: "2022.03.20",
    },
    {
      newsPic: "/img/newsPic.jpg",
      newsTitle: "ニュース3",
      newsDescription:
        "ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。ニュースの抜粋が入ります。",
      newsDate: "2022.02.29",
    },
  ];

  return (
    <>
      <section className={`${cn.news} sectionSpaceM`}>
        <div className={`${cn.newsTittle} titleColumn`}>
          <div className={`${cn.newsText} mar-t2`}>
            <h5>お知らせ</h5>

            <h2>News</h2>

            <h5>今井ナーセリーの最新情報を随時更新しております。</h5>
          </div>
        </div>

        {/* ニュースの記事一覧 */}
        <div
          className={`${cn.newsColumn} newsColumn newsPageDetail grid4 sectionSpaceS`}
        >
          {/* 記事 */}

          {newsColumn.map((el, index) => {
            return (
              <div
                key={`joinColumn${index}`}
                className={`${cn.newsPageDetail} newsDetail`}
              >
                <div className={`newsDetailPic`}>
                  <img src={el.newsPic} alt="" />
                </div>

                <div className={`newsDetailText`}>
                  <h4>{el.newsTitle}</h4>
                  <h6>{el.newsDescription}</h6>

                  <h6 className={`newsDate`}>{el.newsDate}</h6>
                  <div className={`moreViewText`}>
                    <img src="/img/moreViewText.png" alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
