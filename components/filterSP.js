import React, { useState, useEffect, useRef } from "react";
import cn from "../components/varietyList.module.scss";
import fl from "../components/filter.module.scss";

import ScrollEffect from "./utility/utilityscrollEffect";
import LoadingEffect from "./utility/loadingEffect";

export default function FilterSP({ category, posts }) {
  //SPのフィルターボタン
  const [spFilter, setSpFilter] = useState(false);

  const [spFilterColor, setSpFilterColor] = useState(false);
  const [spFilterSize, setSpFilterSize] = useState(false);
  const [spFilterScent, setSpFilterScent] = useState(false);
  const [spFilterShape, setSpFilterShape] = useState(false);
  const [spFilterPetal, setSpFilterPetal] = useState(false);
  const [spFilterLength, setSpFilterLength] = useState(false);
  const [spFilterHarvest, setSpFilterHarvest] = useState(false);
  const [spFilterSpray, setSpFilterSpray] = useState(false);

  return (
    <>
      <div
        className={`${fl.filter} ${fl.varietyFilterColumn} sectionSpaceM grid2`}
      >
        {/* フィルターSP */}
        <div className={`${fl.varietyListFilterSp}`}>
          <div className={`${fl.FilterButtonSp}`}>
            <div
              onClick={() => {
                setSpFilter((prevState) => !prevState);
              }}
            >
              品種を絞り込む
            </div>
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
                <div className={`${fl.spColorMenu}`}>
                  <div
                    onClick={() => {
                      setSpFilterColor((prevState) => !prevState);
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
                      spFilterColor ? fl.active : ""
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
                <div className={`${fl.spColorMenu}`}>
                  <div
                    onClick={() => {
                      setSpFilterSize((prevState) => !prevState);
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
                      spFilterSize ? fl.active : ""
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
                <div className={`${fl.spColorMenu}`}>
                  <div
                    onClick={() => {
                      setSpFilterShape((prevState) => !prevState);
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
                      spFilterShape ? fl.active : ""
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
                <div className={`${fl.spColorMenu}`}>
                  <div
                    onClick={() => {
                      setSpFilterPetal((prevState) => !prevState);
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
                      spFilterPetal == "petal" ? fl.active : ""
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
                <div className={`${fl.spColorMenu}`}>
                  <div
                    onClick={() => {
                      setSpFilterScent((prevState) => !prevState);
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
                      spFilterScent ? fl.active : ""
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
                <div className={`${fl.spColorMenu}`}>
                  <div
                    onClick={() => {
                      setSpFilterLength((prevState) => !prevState);
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
                      spFilterLength ? fl.active : ""
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
                <div className={`${fl.spColorMenu}`}>
                  <div
                    onClick={() => {
                      setSpFilterHarvest((prevState) => !prevState);
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
                      spFilterHarvest ? fl.active : ""
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
                <div className={`${fl.spColorMenu}`}>
                  <div
                    onClick={() => {
                      setSpFilterSpray((prevState) => !prevState);
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
                      spFilterSpray ? fl.active : ""
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
