import React, { useState, useEffect, useRef } from "react";
import cn from "../components/varietyList.module.scss";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

export default function VarietyList({ category, posts }) {
  //SPのフィルターボタン
  const [spFilter, setSpFilter] = useState(false);

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

  //クリック時にプルダウンを開く
  const [filterName, setFilterName] = useState("");
  const dropdownListColor = useRef(null);
  const dropdownListSize = useRef(null);
  const dropdownListShape = useRef(null);
  const dropdownListPetal = useRef(null);
  const dropdownListScent = useRef(null);
  const dropdownListLength = useRef(null);
  const dropdownListHarvest = useRef(null);
  const dropdownListSpray = useRef(null);

  useEffect(() => {
    const handleClickToCloseDropdown = (event) => {
      let dropdownList = dropdownListColor;
      switch (filterName) {
        case "color":
          dropdownList = dropdownListColor;
          break;
        case "size":
          dropdownList = dropdownListSize;
          break;
        case "shape":
          dropdownList = dropdownListShape;
          break;
        case "petal":
          dropdownList = dropdownListPetal;
          break;
        case "scent":
          dropdownList = dropdownListScent;
          break;
        case "length":
          dropdownList = dropdownListLength;
          break;
        case "harvest":
          dropdownList = dropdownListHarvest;
          break;
        case "spray":
          dropdownList = dropdownListSpray;
          break;
      }
      const element = dropdownList.current;
      if (!filterName || element.contains(event.target)) return;
      setFilterName("");
    };

    window.addEventListener("click", handleClickToCloseDropdown);
    return () => {
      window.removeEventListener("click", handleClickToCloseDropdown);
    };
  }, [
    filterName,
    dropdownListColor,
    dropdownListSize,
    dropdownListShape,
    dropdownListPetal,
    dropdownListScent,
    dropdownListLength,
    dropdownListHarvest,
    dropdownListSpray,
  ]);

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

        <div className={`varietyFilterColumn sectionSpaceM grid2 filter`}>
          {/* フィルターPC */}
          <div className={`varietyListFilter`}>
            <div className={`flowerSpecFilter`}>
              {/* 色のフィルター */}
              <div ref={dropdownListColor} className={`flowerSpecDetail`}>
                <div
                  onClick={() => {
                    setFilterName("color");
                  }}
                  className={`flowerSpecFilter`}
                >
                  <h5>色</h5>
                  <img className={`pulldown`} src="/img/pulldown.png" alt="" />
                </div>

                {/* プルダウンメニュー */}
                <div
                  className={`colorPullDownMenu ${
                    filterName == "color" ? "active" : ""
                  }`}
                >
                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="pink" value="sort" />
                    <h5>Pink</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="lightPink" value="sort" />
                    <h5>Light Pink</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="Purple" value="sort" />
                    <h5>Purple</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="Beige" value="sort" />
                    <h5>Beige</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="orange" value="sort" />
                    <h5>Orange</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="Yellow" value="sort" />
                    <h5>Yellow</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="White" value="sort" />
                    <h5>White</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="MultiColor" value="sort" />
                    <h5>Multi Color</h5>
                  </div>
                </div>
              </div>

              {/* サイズのフィルター */}
              <div ref={dropdownListSize} className={`flowerSpecDetail`}>
                <div
                  onClick={() => {
                    setFilterName("size");
                  }}
                  className={`flowerSpecFilter`}
                >
                  <h5>サイズ</h5>
                  <img className={`pulldown`} src="/img/pulldown.png" alt="" />
                </div>

                {/* プルダウンメニュー */}
                <div
                  className={`colorPullDownMenu ${
                    filterName == "size" ? "active" : ""
                  }`}
                >
                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="pink" value="sort" />
                    <h5>大輪</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="lightPink" value="sort" />
                    <h5>中大輪</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="Purple" value="sort" />
                    <h5>中輪</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="Beige" value="sort" />
                    <h5>中小輪</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="orange" value="sort" />
                    <h5>小輪</h5>
                  </div>
                </div>
              </div>

              {/* shapeのフィルター */}
              <div ref={dropdownListShape} className={`flowerSpecDetail`}>
                <div
                  onClick={() => {
                    setFilterName("shape");
                  }}
                  className={`flowerSpecFilter`}
                >
                  <h5>Shape</h5>
                  <img className={`pulldown`} src="/img/pulldown.png" alt="" />
                </div>

                {/* プルダウンメニュー */}
                <div
                  className={`colorPullDownMenu ${
                    filterName == "shape" ? "active" : ""
                  }`}
                >
                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="pink" value="sort" />
                    <h5>ウェーブ咲き</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="lightPink" value="sort" />
                    <h5>カップ咲き</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="Purple" value="sort" />
                    <h5>ウェーブかかったカップ咲き</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="Beige" value="sort" />
                    <h5>半カップ咲き</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="orange" value="sort" />
                    <h5>シャローカップ咲き</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="Yellow" value="sort" />
                    <h5>ロゼット咲き</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="White" value="sort" />
                    <h5>半剣弁ロゼット咲</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="MultiColor" value="sort" />
                    <h5>平咲き</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="Yellow" value="sort" />
                    <h5>剣弁高芯咲き</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="White" value="sort" />
                    <h5>半剣弁ロゼット咲</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="MultiColor" value="sort" />
                    <h5>高芯剣弁咲き</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="MultiColor" value="sort" />
                    <h5>高芯半剣弁咲き</h5>
                  </div>
                </div>
              </div>

              {/* Petalのフィルター */}
              <div ref={dropdownListPetal} className={`flowerSpecDetail`}>
                <div
                  onClick={() => {
                    setFilterName("petal");
                  }}
                  className={`flowerSpecFilter`}
                >
                  <h5>Petal</h5>
                  <img className={`pulldown`} src="/img/pulldown.png" alt="" />
                </div>

                {/* プルダウンメニュー */}
                <div
                  className={`colorPullDownMenu ${
                    filterName == "petal" ? "active" : ""
                  }`}
                >
                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="pink" value="sort" />
                    <h5>100枚以上</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="lightPink" value="sort" />
                    <h5>50~100枚</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="Purple" value="sort" />
                    <h5>50枚以下</h5>
                  </div>
                </div>
              </div>

              {/* Scentのフィルター */}
              <div ref={dropdownListScent} className={`flowerSpecDetail`}>
                <div
                  onClick={() => {
                    setFilterName("scent");
                  }}
                  className={`flowerSpecFilter`}
                >
                  <h5>Scent</h5>
                  <img className={`pulldown`} src="/img/pulldown.png" alt="" />
                </div>

                {/* プルダウンメニュー */}
                <div
                  className={`colorPullDownMenu ${
                    filterName == "scent" ? "active" : ""
                  }`}
                >
                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="pink" value="sort" />
                    <h5>ダマスク中香</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="lightPink" value="sort" />
                    <h5>ダマスク微香</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="Purple" value="sort" />
                    <h5>ティー強香</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="Beige" value="sort" />
                    <h5>ティー中香</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="orange" value="sort" />
                    <h5>ティー微香</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="Yellow" value="sort" />
                    <h5>フルーティー強香</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="White" value="sort" />
                    <h5>フルーティー中香</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="MultiColor" value="sort" />
                    <h5>ブルー強香</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="MultiColor" value="sort" />
                    <h5>ブルー中香</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="MultiColor" value="sort" />
                    <h5>ミルラ強香</h5>
                  </div>
                </div>
              </div>

              {/* Lengthのフィルター */}
              <div ref={dropdownListLength} className={`flowerSpecDetail`}>
                <div
                  onClick={() => {
                    setFilterName("length");
                  }}
                  className={`flowerSpecFilter`}
                >
                  <h5>Length</h5>
                  <img className={`pulldown`} src="/img/pulldown.png" alt="" />
                </div>

                {/* プルダウンメニュー */}
                <div
                  className={`colorPullDownMenu ${
                    filterName == "length" ? "active" : ""
                  }`}
                >
                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="pink" value="sort" />
                    <h5>40~60cm</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="lightPink" value="sort" />
                    <h5>50~70cm</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="Purple" value="sort" />
                    <h5>60~70cm</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="Beige" value="sort" />
                    <h5>60~80cm</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="orange" value="sort" />
                    <h5>60~90cm</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="Yellow" value="sort" />
                    <h5>70~90cm</h5>
                  </div>
                </div>
              </div>

              {/* Harvestのフィルター */}
              <div ref={dropdownListHarvest} className={`flowerSpecDetail`}>
                <div
                  onClick={() => {
                    setFilterName("harvest");
                  }}
                  className={`flowerSpecFilter`}
                >
                  <h5>Harvest</h5>
                  <img className={`pulldown`} src="/img/pulldown.png" alt="" />
                </div>

                {/* プルダウンメニュー */}
                <div
                  className={`colorPullDownMenu ${
                    filterName == "harvest" ? "active" : ""
                  }`}
                >
                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="pink" value="sort" />
                    <h5>約450本</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="lightPink" value="sort" />
                    <h5>約500~600本</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="Purple" value="sort" />
                    <h5>約500本</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="Beige" value="sort" />
                    <h5>約600本</h5>
                  </div>
                </div>
              </div>

              {/* Sprayのフィルター */}
              <div ref={dropdownListSpray} className={`flowerSpecDetail`}>
                <div
                  onClick={() => {
                    setFilterName("spray");
                  }}
                  className={`flowerSpecFilter`}
                >
                  <h5>バラのタイプ</h5>
                  <img className={`pulldown`} src="/img/pulldown.png" alt="" />
                </div>

                {/* プルダウンメニュー */}
                <div
                  className={`colorPullDownMenu ${
                    filterName == "spray" ? "active" : ""
                  }`}
                >
                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="pink" value="sort" />
                    <h5>スプレー咲き</h5>
                  </div>

                  <div className={`FilterSubMenuContents`}>
                    <input type="checkbox" name="lightPink" value="sort" />
                    <h5>ノーマル</h5>
                  </div>
                </div>
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
            <div
              onClick={() => {
                setSpFilter((prevState) => !prevState);
              }}
              className={`FilterButtonSp`}
            >
              <h4>品種を絞り込む</h4>
              <div className={`Filtercon`}>
                <img src="/img/filterIcon.png" alt="" />
              </div>
            </div>

            {/* SPフィルター */}
            <div className={`spFilter ${spFilter ? "active" : ""}`}>
              <div className={`spFilterContents`}>
                <div
                  onClick={() => {
                    setSpFilter((prevState) => !prevState);
                  }}
                  className={`spFilterBan`}
                >
                  <img src="/img/ban.png" alt="" />
                </div>
                <div className={`varietyListTitle titleColumn`}>
                  <div className={`varietyListText tex-c mar-t4`}>
                    <h3>品種を絞り込む</h3>
                  </div>
                </div>

                <div className={`serchForm`}>
                  <input type="text" placeholder="花の名前" />
                  <img src="/img/magnifying-glass.png" alt="" />
                </div>

                <div className={`spFilterMenu grid3`}>
                  <div
                    className={`spColorMenu ${
                      filterName == "color" ? "active" : ""
                    }`}
                  >
                    <div className={`spFilterMenuDetail`}>
                      <h4>Color</h4>
                      <img
                        className={`pulldown tex-l`}
                        src="/img/pulldown.png"
                        alt=""
                      />
                    </div>

                    {/* SPカラープルダウン */}
                    <div
                      className={`colorPullDownMenu ${
                        filterName == "color" ? "active" : ""
                      }`}
                    >
                      <div className={`FilterSubMenuContents`}>
                        <input type="checkbox" name="pink" value="sort" />
                        <h5>Pink</h5>
                      </div>

                      <div className={`FilterSubMenuContents`}>
                        <input type="checkbox" name="lightPink" value="sort" />
                        <h5>Light Pink</h5>
                      </div>

                      <div className={`FilterSubMenuContents`}>
                        <input type="checkbox" name="Purple" value="sort" />
                        <h5>Purple</h5>
                      </div>

                      <div className={`FilterSubMenuContents`}>
                        <input type="checkbox" name="Beige" value="sort" />
                        <h5>Beige</h5>
                      </div>

                      <div className={`FilterSubMenuContents`}>
                        <input type="checkbox" name="orange" value="sort" />
                        <h5>Orange</h5>
                      </div>

                      <div className={`FilterSubMenuContents`}>
                        <input type="checkbox" name="Yellow" value="sort" />
                        <h5>Yellow</h5>
                      </div>

                      <div className={`FilterSubMenuContents`}>
                        <input type="checkbox" name="White" value="sort" />
                        <h5>White</h5>
                      </div>

                      <div className={`FilterSubMenuContents`}>
                        <input type="checkbox" name="MultiColor" value="sort" />
                        <h5>Multi Color</h5>
                      </div>
                    </div>
                  </div>

                  <div className={`spFilterMenuBorder`}></div>

                  <div className={`spFilterMenuDetail`}>
                    <h4>Size</h4>
                    <img
                      className={`pulldown tex-l`}
                      src="/img/pulldown.png"
                      alt=""
                    />
                  </div>

                  <div className={`spFilterMenuBorder`}></div>

                  <div className={`spFilterMenuDetail`}>
                    <h4>Shape</h4>
                    <img
                      className={`pulldown tex-l`}
                      src="/img/pulldown.png"
                      alt=""
                    />
                  </div>

                  <div className={`spFilterMenuBorder`}></div>

                  <div className={`spFilterMenuDetail`}>
                    <h4>Petal</h4>
                    <img
                      className={`pulldown tex-l`}
                      src="/img/pulldown.png"
                      alt=""
                    />
                  </div>

                  <div className={`spFilterMenuBorder`}></div>

                  <div className={`spFilterMenuDetail`}>
                    <h4>Scent</h4>
                    <img
                      className={`pulldown tex-l`}
                      src="/img/pulldown.png"
                      alt=""
                    />
                  </div>

                  <div className={`spFilterMenuBorder`}></div>

                  <div className={`spFilterMenuDetail`}>
                    <h4>Length</h4>
                    <img
                      className={`pulldown tex-l`}
                      src="/img/pulldown.png"
                      alt=""
                    />
                  </div>

                  <div className={`spFilterMenuBorder`}></div>

                  <div className={`spFilterMenuDetail`}>
                    <h4>Harvest</h4>
                    <img
                      className={`pulldown tex-l`}
                      src="/img/pulldown.png"
                      alt=""
                    />
                  </div>

                  <div className={`spFilterMenuBorder`}></div>

                  <div className={`spFilterMenuDetail`}>
                    <h4>バラのタイプ</h4>
                    <img
                      className={`pulldown tex-l`}
                      src="/img/pulldown.png"
                      alt=""
                    />
                  </div>

                  <div className={`spFilterMenuBorder`}></div>
                </div>
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
        <div className={`varietyListColumn varietyListColumn mar-t1 grid2`}>
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
