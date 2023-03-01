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
      <section className={`${cn.kv} pos-r`}>
        <div className={`${cn.kvImgback} pos-r`}></div>
        <div className={`${cn.kvText} tex-c pos-a`}>
          <h5 className={`fon4 fonSp5 mar-b05`}>DREAM ROSE JAPAN</h5>
          <h2 className={`fon1 fonSp2 bold`}>日本のバラを世界へ</h2>
        </div>
      </section>

      {/* 特徴 */}
      <ScrollEffect>
        <section className={`${cn.feature} sectionSpaceM sec-c`}>
          <div className={`titleColumn tex-c`}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <h5 className={`fon5 mar-b1`}>ロゼティーク</h5>

              <h2 className={`fon2 bold mar-b05`}>ROSETIQUE</h2>

              <div className={`titleBorder sec-c`}></div>
            </ScrollEffect>

            <ScrollEffect className={`intMostDelay`} after={`intActive`}>
              <h5 className={`fon5 titleText mar-t2`}>
                日本全国のバラ栽培生産者や花市場、生花店、一般消費者などと連携し
                <br className="br" />
                ご意見やトレンドを取り入れながら、日本屈指の育種家の方々と
                <br className="br" />
                バラ研究に特化した岐阜大学ご協力の元、国内育種品種の普及をしていきたい！
                <br className="br" />
                <br />
                そして日本発世界へと純国産バラを広めたい！
                <br className="br" />
                との想いで立ち上げた種苗会社です。 バラは全世界共通、
                <br className="br" />
                最も名の知られた花であり、世界中にROSETIQUEを広め親しんで愛していただきたい！
                <br className="br" />
                一般的な花形だけではなく、ROSETIQUEならではの香りに特化した、
                <br className="br" />
                人の心を癒し、心身共に豊かになるバラ作りを目指しています。
                <br className="br" />
                また生産者の方々に安心安定信頼して栽培していただき、
                <br className="br" />
                心の豊かさと富を生み、潤いをもたらし生産者の皆様に寄り添う、
                <br className="br" />
                生産者ファーストな種苗会社でありたい。
                <br className="br" />
                ROSETIQUEのバラに関わるみなさまが明るくハッピーな気持ちになり、
                <br className="br" />
                明日への活力になっていただけるようなバラ作りを心掛けております。
                <br className="br" />
                バラを愛するすべてのみなさまと一緒にROSETIQUEを育てて、進化させましょう！
                <br className="br" />
                <br />
                <br />
                株式会社 ROSETIQUE JAPAN CEO/Flower Designer
                <br className="br" />
                Miwako
              </h5>
            </ScrollEffect>
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

      {/* 人物 */}
      <ScrollEffect>
        <section className={`${cn.persons} sectionSpaceM sec-c`}>
          <div className={`titleColumn tex-c`}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <h5 className={`fon5 fonSp5 mar-b1`}>人物</h5>

              <h2 className={`fon2 bold mar-b05`}>Persons</h2>

              <div className={`titleBorder sec-c`}></div>
            </ScrollEffect>
          </div>

          <ScrollEffect className={`intMostDelay`} after={`intActive`}>
            <div className={`${cn.personsPic} mar-t4 grid3`}>
              <img src="/img/personsPic.jpg" alt="" />
            </div>

            {/* プロフィール */}
            <div className={`${cn.personsProfile} mar-t4 grid4`}>
              {/* Miwako */}
              <div className={`${cn.personsProfileDetail}`}>
                <h5 className={`fon5 fonSp5`}>
                  株式会社ROSETIQUE JAPAN
                  <br />
                  CEO / フラワーデザイナー
                </h5>

                <h2 className={`fon3 fonSp3 mar-b1`}>MIWAKO</h2>

                <h6 className={`fon5 fonSp5 ${cn.miwakoProfileDetail}`}>
                  欧米各国、主にフランスでフラワーアレンジメントを学ぶ。
                  <br className="br" />
                  航空業界勤務を経て、2000
                  年よりフラワーデザイナーとしてデビュー。
                  <br className="br" />
                  大手百貨店、JOMALONE LONDONや BMW MI
                  NI、ESTEBANなど企業とのコラボレーション、
                  <br className="br" />
                  商品プロデュースなど多数。FLOWERS BY
                  NAKED、京阪ホテルズ&リゾーツ「THOUSAND FLOWER＆
                  <br className="br" />
                  GARDEN」などイベント監修と装花装飾制作。
                  2021年1月、資本業務提携により今井清氏とパートナーとなる。
                </h6>
              </div>
            </div>
          </ScrollEffect>
        </section>
      </ScrollEffect>

      {/* Story */}
      <ScrollEffect className={`intMostDelay`} after={`intActive`}>
        <div className={`${cn.story} grid4 sec-c fle-f`}>
          <div className={`${cn.storyText}`}>
            <h2 className={`fon3 fonSp3 mar-b1`}>Miwakoの原点,Paris</h2>

            <p className={`fon5 fonSp5`}>
              フラワーデザイナーMiwakoはフランスでフラワーアレンジを学びました。そのためMiwakoにとって、Parisは第二の故郷。他人は他人！という個人主義で自分に合ったスタイルにこだわるお洒落を追求し、女性であることを常に意識し美意識が高く、自分の個性を主張し続ける。Miwakoの花に対する考え方の原点がここに。
            </p>
          </div>

          <div className={`${cn.storyPic1}`}>
            <img src="/img/content_story1.jpg" alt="" />
          </div>
        </div>
      </ScrollEffect>

      <ScrollEffect className={`intMostDelay`} after={`intActive`}>
        <div className={`${cn.story} grid4 sec-c fle-f`}>
          <div className={`${cn.storyPic2}`}>
            <img src="/img/content_story2.jpg" alt="" />
          </div>
          <div className={`${cn.storyText}`}>
            <h2 className={`fon3 fonSp3 mar-b1`}>Miwakoの原点,Paris</h2>

            <p className={`fon5 fonSp5`}>
              フラワーデザイナーMiwakoはフランスでフラワーアレンジを学びました。そのためMiwakoにとって、Parisは第二の故郷。他人は他人！という個人主義で自分に合ったスタイルにこだわるお洒落を追求し、女性であることを常に意識し美意識が高く、自分の個性を主張し続ける。Miwakoの花に対する考え方の原点がここに。
            </p>
          </div>
        </div>
      </ScrollEffect>

      {/* アクセス */}
      <ScrollEffect>
        <section className={`${cn.access} foncolW sectionSpaceM sec-c`}>
          <div className={`titleColumn tex-c`}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <h5 className={`fon5 mar-b1`}>アクセス</h5>

              <h2 className={`fon2 bold mar-b05`}>Access</h2>

              <div className={`titleBorder sec-c white`}></div>
            </ScrollEffect>
          </div>

          <div className={`${cn.accessColumn} sec-c grid3 fle-f`}>
            <div className={`${cn.accessDetail}`}>
              <h3 className={`fon3 bold mar-b1`}>育種圃場</h3>
              <p className={`fon4`}>
                〒737-2609
                <br />
                広島県呉市安浦町大字中畑字立小路 510-262 <br />
                (瀬戸内海国立公園 野呂山山頂)
                <br />
                <br />
                TEL：0823-72-7634
                <br />
                FAX：0823-71-6122
              </p>
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
