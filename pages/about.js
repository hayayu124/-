import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import cn from "../components/about.module.scss";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

import HeadComponent from "../components/headComponent";

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

  //テキスト
  const { locale } = useRouter();
  let text;
  if (locale == "ja") {
    text = require("../json/ja/page_about.json");
  } else if (locale == "en") {
    text = require("../json/en/page_about.json");
  }

  return (
    <>
      <HeadComponent meta={text.meta} />
      {/* kv */}
      <ScrollEffect>
        <section className={`${cn.kv} pos-r`}>
          <div className={`${cn.kvImgback} pos-r`}></div>

          <div className={`${cn.kvText} tex-c pos-a`}>
            <ScrollEffect className={`${cn.inMoreDelay}`} after={cn.intActive}>
              <h5 className={`fon4 fonSp5 mar-b05`}>{text.kv.subTitle}</h5>
              <h2
                className={`fon1 fonSp2 bold`}
                dangerouslySetInnerHTML={{ __html: text.kv.title }}
              />
            </ScrollEffect>
          </div>
        </section>
      </ScrollEffect>

      {/* 特徴 */}
      <ScrollEffect>
        <section className={`${cn.feature} sectionSpaceM sec-c`}>
          <div className={`titleColumn tex-c`}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <h5 className={`fon5 fonSp5 mar-b1`}>
                {text.catchCopy.subTitle}
              </h5>

              <h2 className={`fon2 fonSp2 bold mar-b05`}>
                {text.catchCopy.title}
              </h2>

              <div className={`titleBorder sec-c`}></div>
            </ScrollEffect>

            <ScrollEffect className={`intMostDelay`} after={`intActive`}>
              <h5
                className={`fon5 fonSp5 titleText mar-t2`}
                dangerouslySetInnerHTML={{ __html: text.catchCopy.text }}
              />
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
              <h5 className={`fon5 fonSp5 mar-b1`}>{text.people.subTitle}</h5>

              <h2 className={`fon2 fonSp2 bold mar-b05`}>
                {text.people.title}
              </h2>

              <div className={`titleBorder sec-c`}></div>
            </ScrollEffect>
          </div>

          <ScrollEffect className={`intMostDelay`} after={`intActive`}>
            <div className={`${cn.personsPic} mar-t4 grid4`}>
              <img src="/img/company_miwako@2x.jpg" alt="" />
            </div>

            {/* プロフィール */}
            <div className={`${cn.personsProfile} mar-t4 grid4`}>
              {/* Miwako */}
              <div className={`${cn.personsProfileDetail}`}>
                <h5
                  className={`fon5 fonSp5`}
                  dangerouslySetInnerHTML={{ __html: text.people.position }}
                />

                <h2 className={`fon3 fonSp3 mar-b1`}>{text.people.name}</h2>

                <h6
                  className={`fon5 fonSp5 ${cn.miwakoProfileDetail}`}
                  dangerouslySetInnerHTML={{ __html: text.people.profileText }}
                />
              </div>
            </div>
          </ScrollEffect>
        </section>
      </ScrollEffect>

      {/* Story */}
      <ScrollEffect className={`intMostDelay`} after={`intActive`}>
        <div className={`${cn.story} grid4 sec-c fle-f`}>
          <div className={`${cn.storyText}`}>
            <h2 className={`fon3 fonSp3 mar-b1`}>{text.story.title1}</h2>

            <p className={`fon5 fonSp5`}>{text.story.text1}</p>
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
            <h2 className={`fon3 fonSp3 mar-b1`}>{text.story.title2}</h2>

            <p className={`fon5 fonSp5`}>{text.story.text2}</p>
          </div>
        </div>
      </ScrollEffect>

      {/* アクセス */}
      <ScrollEffect>
        <section className={`${cn.access} foncolW sectionSpaceM sec-c`}>
          <div className={`titleColumn tex-c`}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <h5 className={`fon5 fonSp5 mar-b1`}>{text.access.subTitle}</h5>

              <h2 className={`fon2 fonSp2 bold mar-b05`}>
                {text.access.title}
              </h2>

              <div className={`titleBorder sec-c white`}></div>
            </ScrollEffect>
          </div>

          <div className={`${cn.accessColumn} sec-c grid3 fle-f`}>
            <div className={`${cn.accessDetail}`}>
              <h3 className={`fon3 fonSp3 bold mar-b1`}>
                {text.access.farmName}
              </h3>
              <p
                className={`fon4 fonSp5`}
                dangerouslySetInnerHTML={{ __html: text.access.address }}
              />
            </div>

            <div className={`${cn.accessMap} pos-r`}>
              <div className={`${cn.mapImage} pos-r`}>
                <a
                  href="https://goo.gl/maps/tpAfs6ugpiSPbqyDA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/img/map.jpg" alt="" />
                </a>
              </div>

              <div className={`${cn.mapButton} pos-a`}>
                <a
                  href="https://goo.gl/maps/tpAfs6ugpiSPbqyDA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Map</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollEffect>
    </>
  );
}
