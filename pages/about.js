import React, { useState, useEffect } from "react";
import cn from "../components/about.module.scss";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

export default function About() {
  // ロード制御
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const body = document.body; //scroll制御
    body.classList.add("active");
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);

  return (
    <>
      {/* kv */}

      <section className={`${cn.kv}`}>
        <div className={`${cn.kvTitleColumn} pos-a`}>
          <div className={`${cn.kvText} tex-c`}>
            <h5>DREAM ROSE JAPAN</h5>
            <h2>日本のバラを世界へ</h2>
            <h5>今井ナーセリーの特徴</h5>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <ScrollEffect>
        <section className={`${cn.feature} sectionSpaceM sec-c`}>
          <div className={`${cn.featureTitle} titleColumn`}>
            <div className={`${cn.newsText} mar-t2`}>
              <ScrollEffect className={`intDelay`} after={`intActive`}>
                <h5>今井ナーセリーの特徴</h5>
                <h2>Feature</h2>
              </ScrollEffect>

              <ScrollEffect className={`intMoreDelay`} after={`intActive`}>
                <h5>
                  今井ナーセリーの特徴説明テキスト。今井ナーセリーの特徴説明テキス
                  <br className="br" />
                  ト。今井ナーセリーの特徴説明テキスト。今井ナーセリーの特徴説明
                  <br className="br" />
                  テキスト。今井ナーセリーの特徴説明テキスト。今井ナーセリーの特徴
                  <br className="br" />
                  説明テキスト。今井ナーセリーの特徴説明テキスト。今井ナーセリーの
                  <br className="br" />
                  特徴説明テキスト。今井ナーセリーの特徴説明テキスト。
                </h5>
              </ScrollEffect>
            </div>
          </div>

          <ScrollEffect className={`intMostDelay`} after={`intActive`}>
            <div
              className={`${cn.featureFeatureColumn} flowerColumn mar-t4 grid4 fle-f`}
            >
              <div className={`${cn.featureFeaturePic} flowerColumnPic`}>
                <img src="/img/flower_3.jpg" alt="" />
              </div>

              <div className={`${cn.featureFeaturePic} flowerColumnPic`}>
                <img src="/img/flower_4.jpg" alt="" />
              </div>

              <div className={`${cn.featureFeaturePic} flowerColumnPic`}>
                <img src="/img/flower_5.jpg" alt="" />
              </div>
            </div>
          </ScrollEffect>
        </section>
      </ScrollEffect>

      {/* 見学/販売 */}
      {/* <ScrollEffect>
        <section className={`${cn.tour} sectionSpaceM`}>
          <div className={`${cn.tourTitle} titleColumn sec-c`}>
            <div className={`${cn.tourText} mar-t2`}>
              <ScrollEffect className={`intDelay`} after={`intActive`}>
                <h5>見学,販売</h5>
              </ScrollEffect>

              <ScrollEffect className={`{intMoreDelay}`} after={`intActive`}>
                <h2>Tour/Sales</h2>
              </ScrollEffect>

              <ScrollEffect className={`intMostDelay`} after={`intActive`}>
                <h5>
                  見学についての説明テキスト。見学についての説明テキス
                  <br className="br" />
                  ト。見学についての説 明テキス ト。見学についての説明テキス
                  <br className="br" />
                  ト。見学についての説明テキスト。見学についての説明テ
                  キスト。見学についての説
                  <br className="br" />
                  明テキスト。見学についての説明テキスト。
                  <br className="br" />
                  見学についての説 明テキスト。見学についての説明テキスト。
                </h5>
              </ScrollEffect>
            </div>
          </div>
        </section>
      </ScrollEffect> */}

      {/* 人物 */}
      <ScrollEffect>
        <section className={`${cn.persons} sectionSpaceM sec-c`}>
          <div className={`${cn.personsTitle} titleColumn`}>
            <div className={`${cn.personsText} mar-t2`}>
              <ScrollEffect className={`intDelay`} after={`intActive`}>
                <h5>人物</h5>
              </ScrollEffect>

              <ScrollEffect className={`intMoreDelay`} after={`intActive`}>
                <h2>Persons</h2>
              </ScrollEffect>
            </div>
          </div>

          <ScrollEffect className={`intMostDelay`} after={`intActive`}>
            <div className={`${cn.personsPic} mar-t4 grid3`}>
              <img src="/img/personsPic.jpg" alt="" />
            </div>

            {/* プロフィール */}
            <div className={`${cn.personsProfile} mar-t4 grid4`}>
              {/* Miwako */}
              <div className={`${cn.personsProfileDetail}`}>
                <h5>
                  株式会社ROSETIQUE JAPAN
                  <br />
                  CEO / フラワーデザイナー
                </h5>

                <h2>MIWAKO</h2>

                <h6 className={`${cn.miwakoProfileDetail}`}>
                  欧米各国、主にフランスでフラワーアレンジメントを学ぶ。
                  <br className="br" />
                  航空業界勤務を経て、2000 年よりフラワーデザイナーと
                  <br className="br" />
                  してデビュー。大手百貨店、JOMALONE LONDONや
                  <br className="br" />
                  BMW MI NI、ESTEBAN など企業とのコラボレーション、
                  <br className="br" />
                  商品プロデュースなど多数。FLOWERS BY NAKED、
                  <br className="br" />
                  京阪ホテルズ&リゾーツ「THOUSAND FLOWER＆
                  <br className="br" />
                  GARDEN」などイベント監修と装花装飾制作。 2021 年<br />
                  1月、資本業務提携により今井清氏とパートナーとなる。
                </h6>
              </div>

              {/* Imai */}
              <div className={`${cn.personsProfileDetail}`}>
                <h5>
                  <br />
                  育種家 Rose Maker
                </h5>

                <h2>今井清</h2>

                <h6 className={`${cn.imaiProfileDetail}`}>
                  昭和25年1月16日生まれ 広島県呉市出身
                  <br />
                  1968年 花卉園芸にたずさわる
                  <br />
                  1978年 バラの栽培を手がける <br />
                  1985年 倉橋農場を開設 <br />
                  1993年 バラの育種を始める <br />
                  1995年 農林水産大臣賞受賞 <br />
                  1999年 日本農業賞（個人の部）大賞受賞
                  <br />
                  2000年 日本バラ切花協会副会長 <br />
                  2002年 フロリアード（オランダ）
                  <br />
                  バラのオリジナル品種部門銅賞受賞
                  <br />
                  「コーラル・ベル」他多数受賞
                </h6>
              </div>
            </div>
          </ScrollEffect>
        </section>
      </ScrollEffect>

      {/* アクセス */}
      <ScrollEffect>
        <section className={`${cn.access} foncolW sectionSpaceM sec-c`}>
          <div className={`${cn.accessTitle} titleColumn`}>
            <div className={`${cn.accessText} mar-t2`}>
              <h5>アクセス</h5>

              <h2>Access</h2>
            </div>
          </div>

          <div className={`${cn.accessColumn} sec-c grid2 fle-f`}>
            <div className={`${cn.accessDetail}`}>
              <h3>育種圃場</h3>
              <h5>
                〒737-2609
                <br />
                広島県呉市安浦町大字中畑字立小路 510-262 <br />
                (瀬戸内海国立公園 野呂山山頂)
                <br />
                TEL：0823-72-7634
                <br />
                FAX：0823-71-6122
              </h5>
            </div>

            <div className={`${cn.accessMap} pos-r`}>
              <div className={`${cn.mapImage} pos-r`}>
                <img src="/img/map.jpg" alt="" />
              </div>

              <div className={`${cn.mapButton} pos-a`}>
                <p>Map</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollEffect>
    </>
  );
}
