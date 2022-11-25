import React, { useState, useEffect, useRef } from "react";
import fl from "../components/filter.module.scss";

export default function Filter() {
  //SPのフィルターボタン

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

  const colorName = [
    {
      name: "Beige",
      slug: "beige",
    },
    {
      name: "Light Pink",
      slug: "light_pink",
    },
    {
      name: "Multi Color",
      slug: "multi_color",
    },
    {
      name: "Orange",
      slug: "orange",
    },
    {
      name: "Pink",
      slug: "pink",
    },
    {
      name: "Purple",
      slug: "purple",
    },
    {
      name: "White",
      slug: "white",
    },
    {
      name: "Yellow",
      slug: "yellow",
    },
  ];
  const sizeName = [
    {
      name: "中大輪",
      slug: "middle_large_flower",
    },
    {
      name: "中小輪",
      slug: "middle_small_flower",
    },
    {
      name: "中輪",
      slug: "middle_flower",
    },
    {
      name: "大輪",
      slug: "large_flower",
    },
    {
      name: "小輪",
      slug: "small_flower",
    },
  ];

  const shapeName = [
    {
      name: "ウェーブかかったカップ咲き",
      slug: "wavy_spray_bloom",
    },
    {
      name: "ウェーブ咲き",
      slug: "wave_bloom",
    },
    {
      name: "カップ咲き",
      slug: "cup-bloom",
    },
    {
      name: "シャローカップ咲き",
      slug: "sharow_cup_bloom",
    },
    {
      name: "ロゼット咲き",
      slug: "rosette_form",
    },
    {
      name: "剣弁高芯咲き",
      slug: "kenben_takashin_form",
    },
    {
      name: "半カップ咲き",
      slug: "half_cupped_form",
    },
    {
      name: "半剣弁ロゼット咲",
      slug: "half_kenben_rosette_form",
    },
    {
      name: "平咲き",
      slug: "flat_form",
    },
    {
      name: "高芯半剣弁咲き",
      slug: "kenben_half_takashin_form",
    },
  ];

  const petalName = [
    {
      name: "100枚以上",
      slug: "over100",
    },
    {
      name: "50枚以上~100枚以下",
      slug: "under100",
    },
    {
      name: "50枚以下",
      slug: "underfifty",
    },
  ];

  const scentName = [
    {
      name: "ダマスク中香",
      slug: "damask_middle_scent",
    },
    {
      name: "ダマスク微香",
      slug: "damask_lightly_scent",
    },
    {
      name: "ティー中香",
      slug: "tea_middle_scent",
    },
    {
      name: "ティー強香",
      slug: "tea_storing_scent",
    },
    {
      name: "ティー微香",
      slug: "tea_lightly_scent",
    },
    {
      name: "フルーティー中香",
      slug: "fruity_middle_scent",
    },
    {
      name: "フルーティー強香",
      slug: "fruity_strong_scent",
    },
    {
      name: "ブルー中香",
      slug: "blue_middle_scent",
    },
    {
      name: "ブルー強香",
      slug: "blue_strong_scent",
    },
    {
      name: "ミルラ強香",
      slug: "mirura_strong_scent",
    },
  ];

  const lengthName = [
    {
      name: "40~60cm",
      slug: "4060cm",
    },
    {
      name: "50~70cm",
      slug: "5070cm",
    },
    {
      name: "60~70cm",
      slug: "6070cm",
    },
    {
      name: "60~80cm",
      slug: "6080cm",
    },
    {
      name: "60~90cm",
      slug: "6090cm",
    },
    {
      name: "70~90cm",
      slug: "7090cm",
    },
  ];
  const harvestName = [
    {
      name: "約450本",
      slug: "about450",
    },
    {
      name: "約500~600本",
      slug: "about500600",
    },
    {
      name: "約500本",
      slug: "about500",
    },
    {
      name: "約600本",
      slug: "over600",
    },
  ];
  const sprayName = [
    {
      name: "スプレー咲き",
      slug: "spray_form",
    },
    {
      name: "ノーマル",
      slug: "normal",
    },
  ];
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
        <div className={`${fl.varietyListFilter}`}>
          <div className={`${fl.flowerSpecFilter}`}>
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

              <div
                className={`${fl.colorPullDownMenu} ${
                  filterName == "color" ? fl.active : ""
                }`}
              >
                {colorName.map((el, index) => {
                  return (
                    <div
                      key={`color-${el.name}`}
                      className={`${fl.FilterSubMenuContents}`}
                    >
                      <input type="checkbox" name={el.name} value="sort" />
                      <h5>{el.name}</h5>
                    </div>
                  );
                })}
              </div>
            </div>

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

              <div
                className={`${fl.colorPullDownMenu} ${
                  filterName == "size" ? fl.active : ""
                }`}
              >
                {sizeName.map((el, index) => {
                  return (
                    <div
                      key={`size-${el.name}`}
                      className={`${fl.FilterSubMenuContents}`}
                    >
                      <input type="checkbox" name={el.name} value="sort" />
                      <h5>{el.name}</h5>
                    </div>
                  );
                })}
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
                {shapeName.map((el, index) => {
                  return (
                    <div
                      key={`shape-${el.name}`}
                      className={`${fl.FilterSubMenuContents}`}
                    >
                      <input type="checkbox" name={el.name} value="sort" />
                      <h5>{el.name}</h5>
                    </div>
                  );
                })}
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

              <div
                className={`${fl.colorPullDownMenu} ${
                  filterName == "petal" ? fl.active : ""
                }`}
              >
                {petalName.map((el, index) => {
                  return (
                    <div
                      key={`petal-${el.name}`}
                      className={`${fl.FilterSubMenuContents}`}
                    >
                      <input type="checkbox" name={el.name} value="sort" />
                      <h5>{el.name}</h5>
                    </div>
                  );
                })}
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
                {scentName.map((el, index) => {
                  return (
                    <div
                      key={`scent-${el.name}`}
                      className={`${fl.FilterSubMenuContents}`}
                    >
                      <input type="checkbox" name={el.name} value="sort" />
                      <h5>{el.name}</h5>
                    </div>
                  );
                })}
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
                {lengthName.map((el, index) => {
                  return (
                    <div
                      key={`length-${el.name}`}
                      className={`${fl.FilterSubMenuContents}`}
                    >
                      <input type="checkbox" name={el.name} value="sort" />
                      <h5>{el.name}</h5>
                    </div>
                  );
                })}
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
                {harvestName.map((el, index) => {
                  return (
                    <div
                      key={`harvest-${el.name}`}
                      className={`${fl.FilterSubMenuContents}`}
                    >
                      <input type="checkbox" name={el.name} value="sort" />
                      <h5>{el.name}</h5>
                    </div>
                  );
                })}
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
                {sprayName.map((el, index) => {
                  return (
                    <div
                      key={`spray-${el.name}`}
                      className={`${fl.FilterSubMenuContents}`}
                    >
                      <input type="checkbox" name={el.name} value="sort" />
                      <h5>{el.name}</h5>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* <div className={`${fl.varietyNameFilter}`}>
              <div className={`${fl.inputWithIcon}`}>
                <input type="text" placeholder="花の名前" />
                <img src="/img/magnifying-glass.png" alt="" />
              </div>
            </div> */}
        </div>

        {/* <div className={`${fl.tagOrReset} mar-t1`}>
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
          </div> */}
      </div>
    </>
  );
}
