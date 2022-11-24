import React, { useState, useEffect, useRef } from "react";
import cn from "../components/varietyList.module.scss";
import fl from "../components/filter.module.scss";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

export default function Filter({ category, posts }) {
  //SPのフィルターボタン
  const [spFilter, setSpFilter] = useState(false);

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
      <div
        className={`${fl.filter} ${fl.varietyFilterColumn} sectionSpaceM grid2`}
      >
        {/* フィルターPC */}
        <div className={`${fl.varietyListFilter}`}>
          <div className={`${fl.flowerSpecFilter}`}>
            {/* 色のフィルター */}
            <div ref={dropdownListColor} className={`${fl.flowerSpecDetail}`}>
              <div
                onClick={() => {
                  setFilterName("color");
                }}
                className={`${fl.flowerSpecFilter}`}
              >
                <h5>色</h5>
                <img
                  className={`${fl.pulldown}`}
                  src="/img/pulldown.png"
                  alt=""
                />
              </div>

              {/* プルダウンメニュー */}
              <div
                className={`${fl.colorPullDownMenu} ${
                  filterName == "color" ? fl.active : ""
                }`}
              >
                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="pink" value="sort" />
                  <h5>Pink</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="lightPink" value="sort" />
                  <h5>Light Pink</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="Purple" value="sort" />
                  <h5>Purple</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="Beige" value="sort" />
                  <h5>Beige</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="orange" value="sort" />
                  <h5>Orange</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="Yellow" value="sort" />
                  <h5>Yellow</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="White" value="sort" />
                  <h5>White</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="MultiColor" value="sort" />
                  <h5>Multi Color</h5>
                </div>
              </div>
            </div>

            {/* サイズのフィルター */}
            <div ref={dropdownListSize} className={`${fl.flowerSpecDetail}`}>
              <div
                onClick={() => {
                  setFilterName("size");
                }}
                className={`${fl.flowerSpecFilter}`}
              >
                <h5>サイズ</h5>
                <img
                  className={`${fl.pulldown}`}
                  src="/img/pulldown.png"
                  alt=""
                />
              </div>

              {/* プルダウンメニュー */}
              <div
                className={`${fl.colorPullDownMenu} ${
                  filterName == "size" ? fl.active : ""
                }`}
              >
                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="pink" value="sort" />
                  <h5>大輪</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="lightPink" value="sort" />
                  <h5>中大輪</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="Purple" value="sort" />
                  <h5>中輪</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="Beige" value="sort" />
                  <h5>中小輪</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="orange" value="sort" />
                  <h5>小輪</h5>
                </div>
              </div>
            </div>

            {/* shapeのフィルター */}
            <div ref={dropdownListShape} className={`${fl.flowerSpecDetail}`}>
              <div
                onClick={() => {
                  setFilterName("shape");
                }}
                className={`${fl.flowerSpecFilter}`}
              >
                <h5>Shape</h5>
                <img
                  className={`${fl.pulldown}`}
                  src="/img/pulldown.png"
                  alt=""
                />
              </div>

              {/* プルダウンメニュー */}
              <div
                className={`${fl.colorPullDownMenu} ${
                  filterName == "shape" ? fl.active : ""
                }`}
              >
                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="pink" value="sort" />
                  <h5>ウェーブ咲き</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="lightPink" value="sort" />
                  <h5>カップ咲き</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="Purple" value="sort" />
                  <h5>ウェーブかかったカップ咲き</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="Beige" value="sort" />
                  <h5>半カップ咲き</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="orange" value="sort" />
                  <h5>シャローカップ咲き</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="Yellow" value="sort" />
                  <h5>ロゼット咲き</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="White" value="sort" />
                  <h5>半剣弁ロゼット咲</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="MultiColor" value="sort" />
                  <h5>平咲き</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="Yellow" value="sort" />
                  <h5>剣弁高芯咲き</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="White" value="sort" />
                  <h5>半剣弁ロゼット咲</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="MultiColor" value="sort" />
                  <h5>高芯剣弁咲き</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="MultiColor" value="sort" />
                  <h5>高芯半剣弁咲き</h5>
                </div>
              </div>
            </div>

            {/* Petalのフィルター */}
            <div ref={dropdownListPetal} className={`${fl.flowerSpecDetail}`}>
              <div
                onClick={() => {
                  setFilterName("petal");
                }}
                className={`${fl.flowerSpecFilter}`}
              >
                <h5>Petal</h5>
                <img
                  className={`${fl.pulldown}`}
                  src="/img/pulldown.png"
                  alt=""
                />
              </div>

              {/* プルダウンメニュー */}
              <div
                className={`${fl.colorPullDownMenu} ${
                  filterName == "petal" ? fl.active : ""
                }`}
              >
                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="pink" value="sort" />
                  <h5>100枚以上</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="lightPink" value="sort" />
                  <h5>50~100枚</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="Purple" value="sort" />
                  <h5>50枚以下</h5>
                </div>
              </div>
            </div>

            {/* Scentのフィルター */}
            <div ref={dropdownListScent} className={`${fl.flowerSpecDetail}`}>
              <div
                onClick={() => {
                  setFilterName("scent");
                }}
                className={`${fl.flowerSpecFilter}`}
              >
                <h5>Scent</h5>
                <img
                  className={`${fl.pulldown}`}
                  src="/img/pulldown.png"
                  alt=""
                />
              </div>

              {/* プルダウンメニュー */}
              <div
                className={`${fl.colorPullDownMenu} ${
                  filterName == "scent" ? fl.active : ""
                }`}
              >
                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="pink" value="sort" />
                  <h5>ダマスク中香</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="lightPink" value="sort" />
                  <h5>ダマスク微香</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="Purple" value="sort" />
                  <h5>ティー強香</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="Beige" value="sort" />
                  <h5>ティー中香</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="orange" value="sort" />
                  <h5>ティー微香</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="Yellow" value="sort" />
                  <h5>フルーティー強香</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="White" value="sort" />
                  <h5>フルーティー中香</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="MultiColor" value="sort" />
                  <h5>ブルー強香</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="MultiColor" value="sort" />
                  <h5>ブルー中香</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="MultiColor" value="sort" />
                  <h5>ミルラ強香</h5>
                </div>
              </div>
            </div>

            {/* Lengthのフィルター */}
            <div ref={dropdownListLength} className={`${fl.flowerSpecDetail}`}>
              <div
                onClick={() => {
                  setFilterName("length");
                }}
                className={`${fl.flowerSpecFilter}`}
              >
                <h5>Length</h5>
                <img
                  className={`${fl.pulldown}`}
                  src="/img/pulldown.png"
                  alt=""
                />
              </div>

              {/* プルダウンメニュー */}
              <div
                className={`${fl.colorPullDownMenu} ${
                  filterName == "length" ? fl.active : ""
                }`}
              >
                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="pink" value="sort" />
                  <h5>40~60cm</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="lightPink" value="sort" />
                  <h5>50~70cm</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="Purple" value="sort" />
                  <h5>60~70cm</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="Beige" value="sort" />
                  <h5>60~80cm</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="orange" value="sort" />
                  <h5>60~90cm</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="Yellow" value="sort" />
                  <h5>70~90cm</h5>
                </div>
              </div>
            </div>

            {/* Harvestのフィルター */}
            <div ref={dropdownListHarvest} className={`${fl.flowerSpecDetail}`}>
              <div
                onClick={() => {
                  setFilterName("harvest");
                }}
                className={`${fl.flowerSpecFilter}`}
              >
                <h5>Harvest</h5>
                <img
                  className={`${fl.pulldown}`}
                  src="/img/pulldown.png"
                  alt=""
                />
              </div>

              {/* プルダウンメニュー */}
              <div
                className={`${fl.colorPullDownMenu} ${
                  filterName == "harvest" ? fl.active : ""
                }`}
              >
                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="pink" value="sort" />
                  <h5>約450本</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="lightPink" value="sort" />
                  <h5>約500~600本</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="Purple" value="sort" />
                  <h5>約500本</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="Beige" value="sort" />
                  <h5>約600本</h5>
                </div>
              </div>
            </div>

            {/* Sprayのフィルター */}
            <div ref={dropdownListSpray} className={`${fl.flowerSpecDetail}`}>
              <div
                onClick={() => {
                  setFilterName("spray");
                }}
                className={`${fl.flowerSpecFilter}`}
              >
                <h5>バラのタイプ</h5>
                <img
                  className={`${fl.pulldown}`}
                  src="/img/pulldown.png"
                  alt=""
                />
              </div>

              {/* プルダウンメニュー */}
              <div
                className={`${fl.colorPullDownMenu} ${
                  filterName == "spray" ? fl.active : ""
                }`}
              >
                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="pink" value="sort" />
                  <h5>スプレー咲き</h5>
                </div>

                <div className={`${fl.FilterSubMenuContents}`}>
                  <input type="checkbox" name="lightPink" value="sort" />
                  <h5>ノーマル</h5>
                </div>
              </div>
            </div>
          </div>

          <div className={`${fl.varietyNameFilter}`}>
            <div className={`${fl.inputWithIcon}`}>
              <input type="text" placeholder="花の名前" />
              <img src="/img/magnifying-glass.png" alt="" />
            </div>
          </div>
        </div>

        {/* フィルターSP */}
        <div className={`${fl.varietyListFilterSp}`}>
          <div className={`${fl.FilterButtonSp}`}>
            <h4
              onClick={() => {
                setSpFilter((prevState) => !prevState);
              }}
            >
              品種を絞り込む
            </h4>
            <div
              onClick={() => {
                setSpFilter((prevState) => !prevState);
              }}
              className={`${fl.Filtercon}`}
            >
              <img src="/img/filterIcon.png" alt="" />
            </div>
          </div>

          {/* SPフィルター */}
          <div className={`${fl.spFilter} ${spFilter ? fl.active : ""}`}>
            <div className={`${fl.spFilterContents}`}>
              <div
                onClick={() => {
                  setSpFilter((prevState) => !prevState);
                }}
                className={`${fl.spFilterBan}`}
              >
                <img src="/img/ban.png" alt="" />
              </div>
              <div
                className={`${fl.spFilterTitle} varietyListTitle titleColumn`}
              >
                <div className={`varietyListText tex-c mar-t4`}>
                  <h3>品種を絞り込む</h3>
                </div>
              </div>

              <div className={`${fl.serchForm}`}>
                <input type="text" placeholder="花の名前" />
                <img src="/img/magnifying-glass.png" alt="" />
              </div>

              {/* SPカラーフィルター */}
              <div className={`${fl.spFilterMenu} grid3`}>
                <div ref={dropdownListColor} className={`${fl.spColorMenu}`}>
                  <div
                    onClick={() => {
                      setFilterName("color");
                    }}
                    className={`${fl.spFilterMenuDetail}`}
                  >
                    <h4>Color</h4>
                    <img
                      className={`${fl.pulldown} tex-l`}
                      src="/img/pulldown.png"
                      alt=""
                    />
                  </div>

                  <div className={`${fl.spFilterMenuBorder}`}></div>

                  {/* SPカラープルダウン */}
                  <div
                    className={`${fl.colorPullDownMenu} ${
                      filterName == "color" ? fl.active : ""
                    }`}
                  >
                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="pink" value="sort" />
                      <h5>Pink</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="lightPink" value="sort" />
                      <h5>Light Pink</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="Purple" value="sort" />
                      <h5>Purple</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="Beige" value="sort" />
                      <h5>Beige</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="orange" value="sort" />
                      <h5>Orange</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="Yellow" value="sort" />
                      <h5>Yellow</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="White" value="sort" />
                      <h5>White</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="MultiColor" value="sort" />
                      <h5>Multi Color</h5>
                    </div>
                  </div>
                </div>

                {/* SPサイズフィルター */}
                <div ref={dropdownListSize} className={`${fl.spColorMenu}`}>
                  <div
                    onClick={() => {
                      setFilterName("size");
                    }}
                    className={`${fl.spFilterMenuDetail}`}
                  >
                    <h4>Size</h4>
                    <img
                      className={`${fl.pulldown} tex-l`}
                      src="/img/pulldown.png"
                      alt=""
                    />
                  </div>

                  <div className={`${fl.spFilterMenuBorder}`}></div>

                  {/* プルダウンメニュー */}
                  <div
                    className={`${fl.colorPullDownMenu} ${
                      filterName == "size" ? fl.active : ""
                    }`}
                  >
                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="pink" value="sort" />
                      <h5>大輪</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="lightPink" value="sort" />
                      <h5>中大輪</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="Purple" value="sort" />
                      <h5>中輪</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="Beige" value="sort" />
                      <h5>中小輪</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="orange" value="sort" />
                      <h5>小輪</h5>
                    </div>
                  </div>
                </div>

                {/* SPシェイプフィルター */}
                <div ref={dropdownListShape} className={`${fl.spColorMenu}`}>
                  <div
                    onClick={() => {
                      setFilterName("shape");
                    }}
                    className={`${fl.spFilterMenuDetail}`}
                  >
                    <h4>Shape</h4>
                    <img
                      className={`${fl.pulldown} tex-l`}
                      src="/img/pulldown.png"
                      alt=""
                    />
                  </div>

                  <div className={`${fl.spFilterMenuBorder}`}></div>

                  {/* プルダウンメニュー */}
                  <div
                    className={`${fl.colorPullDownMenu} ${
                      filterName == "shape" ? fl.active : ""
                    }`}
                  >
                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="pink" value="sort" />
                      <h5>ウェーブ咲き</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="lightPink" value="sort" />
                      <h5>カップ咲き</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="Purple" value="sort" />
                      <h5>ウェーブかかったカップ咲き</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="Beige" value="sort" />
                      <h5>半カップ咲き</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="orange" value="sort" />
                      <h5>シャローカップ咲き</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="Yellow" value="sort" />
                      <h5>ロゼット咲き</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="White" value="sort" />
                      <h5>半剣弁ロゼット咲</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="MultiColor" value="sort" />
                      <h5>平咲き</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="Yellow" value="sort" />
                      <h5>剣弁高芯咲き</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="White" value="sort" />
                      <h5>半剣弁ロゼット咲</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="MultiColor" value="sort" />
                      <h5>高芯剣弁咲き</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="MultiColor" value="sort" />
                      <h5>高芯半剣弁咲き</h5>
                    </div>
                  </div>
                </div>

                {/* SPPetalフィルター */}
                <div ref={dropdownListPetal} className={`${fl.spColorMenu}`}>
                  <div
                    onClick={() => {
                      setFilterName("petal");
                    }}
                    className={`${fl.spFilterMenuDetail}`}
                  >
                    <h4>petal</h4>
                    <img
                      className={`${fl.pulldown} tex-l`}
                      src="/img/pulldown.png"
                      alt=""
                    />
                  </div>

                  <div className={`${fl.spFilterMenuBorder}`}></div>

                  {/* プルダウンメニュー */}
                  <div
                    className={`${fl.colorPullDownMenu} ${
                      filterName == "petal" ? fl.active : ""
                    }`}
                  >
                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="pink" value="sort" />
                      <h5>100枚以上</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="lightPink" value="sort" />
                      <h5>50~100枚</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="Purple" value="sort" />
                      <h5>50枚以下</h5>
                    </div>
                  </div>
                </div>

                {/* SPScentフィルター */}
                <div ref={dropdownListScent} className={`${fl.spColorMenu}`}>
                  <div
                    onClick={() => {
                      setFilterName("scent");
                    }}
                    className={`${fl.spFilterMenuDetail}`}
                  >
                    <h4>Scent</h4>
                    <img
                      className={`${fl.pulldown} tex-l`}
                      src="/img/pulldown.png"
                      alt=""
                    />
                  </div>

                  <div className={`${fl.spFilterMenuBorder}`}></div>

                  {/* プルダウンメニュー */}
                  <div
                    className={`${fl.colorPullDownMenu} ${
                      filterName == "scent" ? fl.active : ""
                    }`}
                  >
                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="pink" value="sort" />
                      <h5>ダマスク中香</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="lightPink" value="sort" />
                      <h5>ダマスク微香</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="Purple" value="sort" />
                      <h5>ティー強香</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="Beige" value="sort" />
                      <h5>ティー中香</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="orange" value="sort" />
                      <h5>ティー微香</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="Yellow" value="sort" />
                      <h5>フルーティー強香</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="White" value="sort" />
                      <h5>フルーティー中香</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="MultiColor" value="sort" />
                      <h5>ブルー強香</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="MultiColor" value="sort" />
                      <h5>ブルー中香</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="MultiColor" value="sort" />
                      <h5>ミルラ強香</h5>
                    </div>
                  </div>
                </div>

                {/* SPLengthフィルター */}
                <div ref={dropdownListLength} className={`${fl.spColorMenu}`}>
                  <div
                    onClick={() => {
                      setFilterName("length");
                    }}
                    className={`${fl.spFilterMenuDetail}`}
                  >
                    <h4>Length</h4>
                    <img
                      className={`${fl.pulldown} tex-l`}
                      src="/img/pulldown.png"
                      alt=""
                    />
                  </div>

                  <div className={`${fl.spFilterMenuBorder}`}></div>

                  {/* プルダウンメニュー */}
                  <div
                    className={`${fl.colorPullDownMenu} ${
                      filterName == "length" ? fl.active : ""
                    }`}
                  >
                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="pink" value="sort" />
                      <h5>40~60cm</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="lightPink" value="sort" />
                      <h5>50~70cm</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="Purple" value="sort" />
                      <h5>60~70cm</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="Beige" value="sort" />
                      <h5>60~80cm</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="orange" value="sort" />
                      <h5>60~90cm</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="Yellow" value="sort" />
                      <h5>70~90cm</h5>
                    </div>
                  </div>
                </div>

                {/* SPHarvestフィルター */}
                <div ref={dropdownListHarvest} className={`${fl.spColorMenu}`}>
                  <div
                    onClick={() => {
                      setFilterName("harvest");
                    }}
                    className={`${fl.spFilterMenuDetail}`}
                  >
                    <h4>Harvest</h4>
                    <img
                      className={`${fl.pulldown} tex-l`}
                      src="/img/pulldown.png"
                      alt=""
                    />
                  </div>

                  <div className={`${fl.spFilterMenuBorder}`}></div>

                  {/* プルダウンメニュー */}
                  <div
                    className={`${fl.colorPullDownMenu} ${
                      filterName == "harvest" ? fl.active : ""
                    }`}
                  >
                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="pink" value="sort" />
                      <h5>約450本</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="lightPink" value="sort" />
                      <h5>約500~600本</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="Purple" value="sort" />
                      <h5>約500本</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="Beige" value="sort" />
                      <h5>約600本</h5>
                    </div>
                  </div>
                </div>

                {/* SPSprayフィルター */}
                <div ref={dropdownListSpray} className={`${fl.spColorMenu}`}>
                  <div
                    onClick={() => {
                      setFilterName("spray");
                    }}
                    className={`${fl.spFilterMenuDetail}`}
                  >
                    <h4>バラのタイプ</h4>
                    <img
                      className={`${fl.pulldown} tex-l`}
                      src="/img/pulldown.png"
                      alt=""
                    />
                  </div>

                  <div className={`${fl.spFilterMenuBorder}`}></div>

                  {/* プルダウンメニュー */}
                  <div
                    className={`${fl.colorPullDownMenu} ${
                      filterName == "spray" ? fl.active : ""
                    }`}
                  >
                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="pink" value="sort" />
                      <h5>スプレー咲き</h5>
                    </div>

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input type="checkbox" name="lightPink" value="sort" />
                      <h5>ノーマル</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${fl.tagOrReset} mar-t1`}>
          <div className={`${fl.tag}`}>
            <div className={`${fl.specTag}`}>
              <h5>名前:SP</h5>
              <div className={`${fl.ban}`}>
                <img src="/img/ban.png" alt="" />
              </div>
            </div>

            <div className={`${fl.specTag}`}>
              <h5>Yellow</h5>
              <div className={`${fl.ban}`}>
                <img src="/img/ban.png" alt="" />
              </div>
            </div>
          </div>

          <div className={`${fl.filterReset}`}>
            <h5>フィルターをクリア</h5>
          </div>
        </div>
      </div>
    </>
  );
}
