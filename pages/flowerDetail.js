import React, { useState, useEffect } from "react";
import cn from "../components/flowerDetail.module.scss";
import Filter from "../components/filter.js";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

export default function Top() {
  //花のカラムを自動処理

  //詳細ページを表示する品種
  const flowerDetail = [
    {
      pic1: "/img/SP スイートオールド_1.jpg",
      pic2: "/img/SP スイートオールド_2.jpg",
      name: "SP ベイビーカメレオン",
      color: "Yellow",
      size: "中輪",
      shape: "高芯半剣弁",
      scent: "ティー香",
      length: "60~80cm",
      harvest: "約350 本",
      explanation:
        "カップ咲きの白の代表品種で、樹勢が強く採花本数も多いが、うどん粉病に弱い。",
      date: "2020-06-11T09:29:41.084Z",
    },
  ];

  const brandNewColumn = [
    {
      pic1: "/img/SP スイートオールド_1.jpg",
      pic2: "/img/SP スイートオールド_2.jpg",
      name: "SP ベイビーカメレオン",
      color: "Yellow",
      size: "中輪",
      shape: "高芯半剣弁",
      scent: "ティー香",
      length: "60~80cm",
      harvest: "約350 本",
      explanation:
        "カップ咲きの白の代表品種で、樹勢が強く採花本数も多いが、うどん粉病に弱い。",
      award: "/img/prize_2021_2022_color_E1.png",
      date: "2020-06-11T09:29:41.084Z",
    },
    {
      pic1: "/img/SP スイートオールド_1.jpg",
      pic2: "/img/SP スイートオールド_2.jpg",
      name: "SP ベイビーカメレオン",
      color: "Yellow",
      size: "中輪",
      shape: "高芯半剣弁",
      scent: "ティー香",
      length: "60~80cm",
      harvest: "約350 本",
      explanation:
        "カップ咲きの白の代表品種で、樹勢が強く採花本数も多いが、うどん粉病に弱い。",
      award: "/img/prize_2021_2022_color_E1.png",
      date: "2020-06-11T09:29:41.084Z",
    },
    {
      pic1: "/img/SP スイートオールド_1.jpg",
      pic2: "/img/SP スイートオールド_2.jpg",
      name: "SP ベイビーカメレオン",
      color: "Yellow",
      size: "中輪",
      shape: "高芯半剣弁",
      scent: "ティー香",
      length: "60~80cm",
      harvest: "約350 本",
      explanation:
        "カップ咲きの白の代表品種で、樹勢が強く採花本数も多いが、うどん粉病に弱い。",
      award: "/img/prize_2021_2022_color_E1.png",
      date: "2020-06-11T09:29:41.084Z",
    },
    {
      pic1: "/img/SP スイートオールド_1.jpg",
      pic2: "/img/SP スイートオールド_2.jpg",
      name: "SP ベイビーカメレオン",
      color: "Yellow",
      size: "中輪",
      shape: "高芯半剣弁",
      scent: "ティー香",
      length: "60~80cm",
      harvest: "約350 本",
      explanation:
        "カップ咲きの白の代表品種で、樹勢が強く採花本数も多いが、うどん粉病に弱い。",
      award: "/img/prize_2021_2022_color_E1.png",
      date: "2020-06-11T09:29:41.084Z",
    },
    {
      pic1: "/img/SP スイートオールド_1.jpg",
      pic2: "/img/SP スイートオールド_2.jpg",
      name: "SP ベイビーカメレオン",
      color: "Yellow",
      size: "中輪",
      shape: "高芯半剣弁",
      scent: "ティー香",
      length: "60~80cm",
      harvest: "約350 本",
      explanation:
        "カップ咲きの白の代表品種で、樹勢が強く採花本数も多いが、うどん粉病に弱い。",
      award: "/img/prize_2021_2022_color_E1.png",
      date: "2020-06-11T09:29:41.084Z",
    },
  ];

  var brandNewDisplayColumn = [];
  for (let i = 0; i < 4; i++) {
    brandNewDisplayColumn.push(brandNewColumn[i]);
  }

  return (
    <>
      {/* 品種一覧 */}
      <section className={`${cn.varietyList} sectionSpaceM mar-b4`}>
        <div className={`varietyListTitle titleColumn`}>
          <div className={`varietyListText mar-t2`}>
            <h5>品種一覧</h5>

            <h2>Variety list</h2>
          </div>
        </div>

        {/* フィルター */}
        <Filter />

        {/* ボーダー */}
        <div className={`border mar-t1`}></div>

        {/* フラワーのカラム */}
        <div className={`collectionColumn sectionSpaceM tex-c grid3`}>
          {/* 品種１ */}
          {brandNewDisplayColumn.map((el, index) => {
            return (
              <div
                key={`collection${index}`}
                className={`flowerBreed sectionSpaceM`}
              >
                {/* PCの表示 */}
                <div className={`flowerBreedPc`}>
                  <div className={`flowerDetailColumn`}>
                    <div className={`flowerDetail tex-l`}>
                      <div className={`flowerSpecColumn`}>
                        <div className={`flowerSpecDetail`}>
                          <div className={`flowerColorBox`}></div>
                          <h5 className={`flowerColorText`}>Yellow</h5>
                        </div>
                        <div className={`flowerName`}>
                          <h3>{el.name}</h3>
                        </div>

                        <div className={`flowerSpec`}>
                          <div className={`flowerSpecDetail`}>
                            <h5>
                              Color&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </h5>
                            <h5>{el.color}</h5>
                          </div>

                          <div className={`flowerSpecDetail`}>
                            <h5>
                              Size&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;
                            </h5>
                            <h5>{el.size}</h5>
                          </div>

                          <div className={`flowerSpecDetail`}>
                            <h5>Shape&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;</h5>
                            <h5>{el.shape}</h5>
                          </div>

                          <div className={`flowerSpecDetail`}>
                            <h5>Scent&emsp;&emsp;&emsp;&emsp;</h5>
                            <h5>{el.scent}</h5>
                          </div>

                          <div className={`flowerSpecDetail`}>
                            <h5>Length&emsp;&emsp;&emsp;&nbsp;</h5>
                            <h5>{el.length}</h5>
                          </div>

                          <div className={`flowerSpecDetail`}>
                            <h5>Harvest&emsp;&emsp;&nbsp;&nbsp;&nbsp;</h5>
                            <h5>{el.harvest}</h5>
                          </div>

                          <div className={`flowerSpecDetail`}>
                            <h5>{el.explanation}</h5>
                          </div>

                          <div className={`flowerSpecDetail`}>
                            <div className={`flowerheart`}>
                              <img src="/img/heart.jpg" alt="" />
                            </div>
                            <h6>お気に入りに追加</h6>
                          </div>
                        </div>
                      </div>
                      <div className={`flowerAwardIcon`}>
                        <img src={el.award} alt="" />
                      </div>
                    </div>

                    <div className={`flowerPicColumn`}>
                      <div className={`flowerPic1`}>
                        <img src={el.pic2} alt="" />
                      </div>
                      <div className={`flowerPic2`}>
                        <img src={el.pic1} alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* スマートフォンの表示 */}
                <div className={`flowerBreedSp tex-l`}>
                  <div className={`flowerSpecDetail`}>
                    <div className={`flowerColorBox`}></div>
                    <h5 className={`flowerColorText`}>Yellow</h5>
                  </div>
                  <div className={`flowerName`}>
                    <h3>{el.name}</h3>
                  </div>

                  <div className={`flowerPicColumn mar-t2`}>
                    <div className={`flowerPic1`}>
                      <img src={el.pic1} alt="" />
                    </div>
                    <div className={`flowerPic2`}>
                      <img src={el.pic2} alt="" />
                    </div>
                  </div>

                  {/* フラワースペック */}
                  <div className={`flowerSpec`}>
                    <div className={`flowerSpecBorder`}></div>
                    <div className={`flowerSpecDetail1`}>
                      <h6>Color&nbsp;&nbsp;&nbsp;&nbsp;{el.color}</h6>
                      <h6>Shape&nbsp;&nbsp;&nbsp;&nbsp;{el.shape}</h6>
                      <h6>Length&nbsp;&nbsp;{el.length}</h6>
                    </div>
                    <div className={`flowerSpecBorder`}></div>
                    <div className={`flowerSpecDetail2`}>
                      <h6>
                        Size&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {el.size}
                      </h6>
                      <h6>
                        Scent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{el.scent}
                      </h6>
                      <h6>Harvest&nbsp;&nbsp;{el.harvest}</h6>
                    </div>
                  </div>

                  <div className={`flowerSpecDetail3 mar-t2`}>
                    <h5>{el.explanation}</h5>
                  </div>
                  <div className={`flowerFavorite mar-t1`}>
                    <div className={`flowerheart`}>
                      <img src="/img/heart.jpg" alt="" />
                    </div>
                    <h6>お気に入りに追加</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* お気に入り品種 */}
        <div className={`collectionName tex-c sectionSpaceM`}>
          <h3>お気に入りに追加した品種</h3>
        </div>

        <div className={`varietyListColumn varietyListColumn mar-t1 grid1`}>
          <div className={`flowerListColumn mar-t1 `}>
            {/* 品種１ */}
            {brandNewDisplayColumn.map((el, index) => {
              return (
                <div
                  key={`varietyList${index}`}
                  className={`flowerBreed1 mar-t3`}
                >
                  <div className={`flowerBreedPic`}>
                    <img src={el.pic2} alt="" />

                    <div className={`flowerFavorite`}>
                      <img src="/img/heart2.png" alt="" />
                    </div>
                  </div>

                  <div className={`flowerColor`}>
                    <div className={`flowerColorBox`}></div>
                    <h6 className={`flowerColorText`}>{el.color}</h6>
                  </div>

                  <div className={`flowerName`}>
                    <h3>{el.name}</h3>
                  </div>

                  {/* フラワースペック */}
                  <div className={`varietyListSpec`}>
                    <div className={`varietyListSpecBorder`}></div>
                    <div className={`varietyListSpecDetail1`}>
                      <h6>Color&nbsp;&nbsp;&nbsp;&nbsp;{el.color}</h6>
                      <h6>Shape&nbsp;&nbsp;&nbsp;&nbsp;{el.shape}</h6>
                      <h6>Length&nbsp;&nbsp;{el.length}</h6>
                    </div>
                    <div className={`varietyListSpecBorder`}></div>
                    <div className={`varietyListSpecDetail2`}>
                      <h6>
                        Size&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {el.size}
                      </h6>
                      <h6>
                        Scent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{el.scent}
                      </h6>
                      <h6>Harvest&nbsp;&nbsp;{el.harvest}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* もっと見るボタン */}
          <div className={`moreViewButton sectionSpaceS`}>
            <h5 className={`foncolW moreViewButton`}>一覧へ戻る</h5>

            <div className={`borderBlack`}></div>
            <div className={`borderWhite`}></div>
          </div>
        </div>
      </section>
    </>
  );
}
