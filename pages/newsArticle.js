import React, { useState, useEffect } from "react";
import cn from "../components/newsArticle.module.scss";

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
  ];

  return (
    <>
      <section className={`${cn.newsArticle} sectionSpaceM`}>
        <div className={`${cn.newsTittle} titleColumn`}>
          <div className={`${cn.newsText} mar-t2`}>
            <h5>ニュース</h5>

            <h2>News</h2>
          </div>
        </div>

        <div className={`${cn.seriesTittle} grid4`}>
          <h3>
            Facebook BEST FLOWER
            <br />
            ARRANGEMENT 冬号掲載
          </h3>
          <h5 className={`mar-t3`}>
            ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。ニュースの記事が入ります。
          </h5>

          <h5 className={`${cn.newsDate} mar-t2`}>2022.04.20</h5>

          <div className={`${cn.shareIconColumn} mar-t1`}>
            <img src="/img/2021TwitterLogoBlack.png" alt="" />
            <img src="/img/glyph-logo_May2016.png" alt="" />
            <img src="/img/f_logo_RGB-Black_1024.png" alt="" />
          </div>

          <div className={`${cn.articlePic} sectionSpaceS`}>
            <img src="/img/scooter-4090992_1280.png" alt="" />
          </div>
        </div>

        {/* その他のニュース */}
        <div className={`${cn.otherNews} sectionSpaceM`}>
          <div className={`${cn.newsText} titleColumn tex-c`}>
            <h3>その他のニュース</h3>
          </div>

          {/* ニュースの記事一覧 */}
          <div className={`${cn.newsColumn} newsColumn grid4 sectionSpaceS`}>
            {/* 記事 */}

            {newsColumn.map((el, index) => {
              return (
                <div key={`joinColumn${index}`} className={`newsDetail`}>
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
          {/* もっと見るボタン */}
          <div className={`moreViewButton sectionSpaceS`}>
            <h5 className={`foncolW moreViewButton`}>もっと見る</h5>

            <div className={`borderBlack`}></div>
            <div className={`borderWhite`}></div>
          </div>
        </div>
      </section>
    </>
  );
}
