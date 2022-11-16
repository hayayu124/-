import React, { useState, useEffect } from "react";
import cn from "../components/varietyList.module.scss";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

export default function Top() {
  //花のカラムを自動処理

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
      date: "2020-06-11T09:29:41.084Z",
    },
  ];

  var brandNewDisplayColumn = [];
  for (let i = 0; i < 10; i++) {
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

        <div className={`varietyFilterColumn sectionSpaceM grid1 filter`}>
          {/* フィルターPC */}
          <div className={`varietyListFilter`}>
            <div className={`flowerSpecFilter`}>
              <div className={`flowerSpecDetail`}>
                <h5>色</h5>
                <img className={`pulldown`} src="/img/pulldown.png" alt="" />
              </div>

              <div className={`flowerSpecDetail`}>
                <h5>大きさ</h5>
                <img className={`pulldown`} src="/img/pulldown.png" alt="" />
              </div>

              <div className={`flowerSpecDetail`}>
                <h5>形</h5>
                <img className={`pulldown`} src="/img/pulldown.png" alt="" />
              </div>

              <div className={`flowerSpecDetail`}>
                <h5>Scent</h5>
                <img className={`pulldown`} src="/img/pulldown.png" alt="" />
              </div>

              <div className={`flowerSpecDetail`}>
                <h5>Length</h5>
                <img className={`pulldown`} src="/img/pulldown.png" alt="" />
              </div>

              <div className={`flowerSpecDetail`}>
                <h5>Harvest</h5>
                <img className={`pulldown`} src="/img/pulldown.png" alt="" />
              </div>

              <div className={`flowerSpecDetail`}>
                <h5>Harvest</h5>
                <img className={`pulldown`} src="/img/pulldown.png" alt="" />
              </div>

              <div className={`flowerSpecDetail`}>
                <h5>バラのタイプ</h5>
                <img className={`pulldown`} src="/img/pulldown.png" alt="" />
              </div>
            </div>

            <div className={`varietyNameFilter`}>
              <div className={`inputWithIcon`}>
                <input type="text" placeholder="花の名前" />
                <img src="/img/magnifying-glass.png" alt="" />
              </div>
            </div>
          </div>

          {/* フィルターSP */}
          <div className={`varietyListFilterSp`}>
            <div className={`FilterButtonSp`}>
              <h4>品種を絞り込む</h4>
              <div className={`Filtercon`}>
                <img src="/img/filterIcon.png" alt="" />
              </div>
            </div>
          </div>

          <div className={`tagOrReset mar-t1`}>
            <div className={`tag`}>
              <div className={`specTag`}>
                <h5>名前:SP</h5>
                <div className={`ban`}>
                  <img src="/img/ban.png" alt="" />
                </div>
              </div>

              <div className={`specTag`}>
                <h5>Yellow</h5>
                <div className={`ban`}>
                  <img src="/img/ban.png" alt="" />
                </div>
              </div>
            </div>

            <div className={`filterReset`}>
              <h5>フィルターをクリア</h5>
            </div>
          </div>
        </div>

        {/* ボーダー */}
        <div className={`border mar-t1`}></div>

        {/* 品種一覧 */}
        <div className={`varietyListColumn varietyListColumn mar-t1 grid1`}>
          <div className={`result mar-t1`}>
            <h4>絞り込み結果 : 14品種がヒットしました</h4>
          </div>
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

          {/* ページ送り */}
          <div className={`pageOption mar-t4`}>
            <div className={`pageOptionPart`}>
              <h3>1</h3>
              <div className={`pageOptionBorder`}></div>
            </div>

            <div className={`pageOptionPart`}>
              <h5>2</h5>
            </div>

            <div className={`pageOptionPart`}>
              <h5>3</h5>
            </div>

            <div className={`pageOptionPart`}>
              <h5>4</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
