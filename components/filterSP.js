import React, { useState, useEffect, useRef } from "react";
import cn from "../components/varietyList.module.scss";
import fl from "../components/filter.module.scss";

import ScrollEffect from "./utility/utilityscrollEffect";
import LoadingEffect from "./utility/loadingEffect";

export default function FilterSP(props) {
  //検索

  function handleSubmit(event) {
    event.preventDefault();
    formRef.current.reset();
  }
  function handleChange(event) {
    props.setSearch(event.target.value);
    formRef.current.reset();
  }

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

  //色のフィルター項目
  const colorName = props.rose
    .map((item) => item.node.colors.nodes[0].name)
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  //サイズのフィルター項目
  const sizeName = props.rose
    .map((item) => item.node.rose_spec.roseSize)
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  //形のフィルター項目
  const shapeName = props.rose
    .map((item) => item.node.rose_spec.roseShape)
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  //花弁数のフィルター項目
  const petalName = ["100枚以上", "50枚以上~100枚以下", "50枚以下"];

  //臭いのフィルター項目
  const scentName = props.rose
    .map((item) => item.node.rose_spec.roseScent)
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  //長さのフィルター項目
  const lengthName = props.rose
    .map((item) => item.node.rose_spec.roseLength)
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  //採花本数のフィルター項目
  const harvestName = [
    "約250以上~350本以下",
    "約350以上~450本以下",
    "約450本以上",
  ];

  //スプレーのフィルター項目
  const sprayName = ["スプレー咲き", "ノーマル"];

  //フィルター
  function handleSubmit(event) {
    event.preventDefault(); // ページ更新を防止する
  }
  const formRef = useRef(null);

  const handleReset = () => {
    formRef.current.reset();
    props.setFilterValue([]);
    props.setSizeFilterValue([]);
    props.setShapeFilterValue([]);
    props.setPetalFilterValue("");
    props.setScentFilterValue([]);
    props.setLengthFilterValue("");
    props.setHarvestFilterValue("");
    props.setSprayFilterValue("");
  };

  //チェックボックスの選択項目を管理

  //色
  const handleCheckboxColor = (e) => {
    const { value, checked } = e.target;

    if (props.filterValue.length >= colorName.length) {
      props.setFilterValue([]);
    }

    if (checked) {
      // チェックボックスがチェックされた場合、配列に追加する
      props.setFilterValue((prevState) => [...prevState, value]);
    } else {
      // チェックボックスがチェックを外された場合、配列から削除する
      const newItems = props.filterValue.filter((n) => n !== value);
      props.setFilterValue(newItems);
    }
  };

  //サイズ
  const handleCheckboxSize = (e) => {
    const { value, checked } = e.target;

    if (props.sizeFilterValue.length >= sizeName.length) {
      props.setSizeFilterValue([]);
    }

    if (checked) {
      // チェックボックスがチェックされた場合、配列に追加する
      props.setSizeFilterValue((prevState) => [...prevState, value]);
    } else {
      // チェックボックスがチェックを外された場合、配列から削除する
      const newItems = props.sizeFilterValue.filter((n) => n !== value);
      props.setSizeFilterValue(newItems);
    }
  };

  //形
  const handleCheckboxShape = (e) => {
    const { value, checked } = e.target;

    if (props.shapeFilterValue.length >= shapeName.length) {
      props.setShapeFilterValue([]);
    }

    if (checked) {
      // チェックボックスがチェックされた場合、配列に追加する
      props.setShapeFilterValue((prevState) => [...prevState, value]);
    } else {
      // チェックボックスがチェックを外された場合、配列から削除する
      const newItems = props.shapeFilterValue.filter((n) => n !== value);
      props.setShapeFilterValue(newItems);
    }
  };

  //花弁数
  const handleCheckboxPetal = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      // チェックボックスがチェックされた場合、配列に追加する
      props.setPetalFilterValue(value);
    }

    console.log(props.petalFilterValue);
  };

  //臭い
  const handleCheckboxScent = (e) => {
    const { value, checked } = e.target;

    if (props.scentFilterValue.length >= scentName.length) {
      props.setScentFilterValue([]);
    }

    if (checked) {
      // チェックボックスがチェックされた場合、配列に追加する
      props.setScentFilterValue((prevState) => [...prevState, value]);
    } else {
      // チェックボックスがチェックを外された場合、配列から削除する
      const newItems = props.scentFilterValue.filter((n) => n !== value);
      props.setScentFilterValue(newItems);
    }
  };

  //長さ
  const handleCheckboxLength = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      // チェックボックスがチェックされた場合、配列に追加する
      props.setLengthFilterValue(value);
    }
  };

  //採花本数
  const handleCheckboxHarvest = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      // チェックボックスがチェックされた場合、配列に追加する
      props.setHarvestFilterValue(value);
    }
  };

  //バラのタイプ
  const handleCheckboxSpray = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      // チェックボックスがチェックされた場合、配列に追加する
      props.setSprayFilterValue(value);
    }
  };

  return (
    <>
      <div className={`${fl.filter} ${fl.varietyFilterColumn} grid2`}>
        <div className={`${fl.search} grid2`}>
          <div className={`${fl.inputWithIcon}`}>
            <form>
              <input
                className={`fonSp5 notoGo`}
                type="text"
                id="search"
                value={props.search}
                placeholder={
                  props.locale === "ja"
                    ? "バラの名前で検索する"
                    : props.locale === "en"
                    ? "Search by rose name"
                    : ""
                }
                onChange={handleChange}
              />
              <button type="submit" onClick={handleSubmit}>
                <img src="/img/magnifying-glass.png" alt="" />
              </button>
            </form>
          </div>
        </div>
        {/* フィルターSP */}
        <div className={`${fl.varietyListFilterSp} fle-f`}>
          <div className={`${fl.FilterButtonSp}`}>
            <div
              onClick={() => {
                setSpFilter((prevState) => !prevState);
              }}
            >
              {props.locale === "ja" ? (
                <p className={`fon4 fonSp4`}>品種を絞り込む</p>
              ) : props.locale === "en" ? (
                <p className={`fon4 fonSp4`}>Narrow down the varieties</p>
              ) : null}
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
              {/* <div
                onClick={() => {
                  setSpFilter((prevState) => !prevState);
                }}
                className={`${fl.spFilterBan}`}
              >
                <img src="/img/ban.png" alt="" />
              </div> */}
              <div
                className={`${fl.spFilterTitle} varietyListTitle titleColumn`}
              >
                <div className={`varietyListText tex-c mar-t2`}>
                  <h1 className={`fonSp3`}>品種を絞り込む</h1>
                </div>
              </div>

              {/* SPカラーフィルター */}
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className={`${fl.spFilterMenu} grid3`}
              >
                {/* <form ref={formRef}> */}

                <div className={`${fl.spColorMenu}`}>
                  <div
                    onClick={() => {
                      setSpFilterColor((prevState) => !prevState);
                    }}
                    className={`${fl.spFilterMenuDetail}`}
                  >
                    <p className={`fonSp4`}>Color</p>
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
                    {colorName.map((el, index) => {
                      return (
                        <div
                          key={`color-${el}`}
                          className={`${fl.FilterSubMenuContents}`}
                        >
                          <input
                            type="checkbox"
                            name="color"
                            className={`cursor`}
                            value={el}
                            onChange={handleCheckboxColor}
                          />
                          <p className={`fon5 fonSp5`}>{el}</p>
                        </div>
                      );
                    })}
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
                    <p className={`fonSp4`}>Size</p>
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
                    {sizeName.map((el, index) => {
                      return (
                        <div
                          key={`size-${el}`}
                          className={`${fl.FilterSubMenuContents} cursor`}
                        >
                          <input
                            type="checkbox"
                            name="size"
                            value={el}
                            onChange={handleCheckboxSize}
                            className={`cursor`}
                          />
                          {props.locale === "ja" ? (
                            <p className={`fon5 fonSp5`}>{el}</p>
                          ) : (
                            props.locale === "en" &&
                            (el === "大輪" ? (
                              <p className={`fon5 fonSp5`}>Large Flower</p>
                            ) : el === "大輪スプレー" ? (
                              <p className={`fon5 fonSp5`}>Large Spray</p>
                            ) : el === "中大輪" ? (
                              <p className={`fon5 fonSp5`}>
                                Medium Large Flower
                              </p>
                            ) : el === "中輪" ? (
                              <p className={`fon5 fonSp5`}>Medium Flower</p>
                            ) : el === "中小輪" ? (
                              <p className={`fon5 fonSp5`}>
                                Medium Small Flower
                              </p>
                            ) : el === "中輪スプレー" ? (
                              <p className={`fon5 fonSp5`}>Medium Spray</p>
                            ) : el === "中小輪スプレー" ? (
                              <p className={`fon5 fonSp5`}>
                                Medium Small Spray
                              </p>
                            ) : el === "小輪スプレー" ? (
                              <p className={`fon5 fonSp5`}>Small Spray</p>
                            ) : null)
                          )}
                        </div>
                      );
                    })}
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
                    <p className={`fonSp4`}>Shape</p>
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
                    {shapeName.map((el, index) => {
                      return (
                        <div
                          key={`shape-${el}`}
                          className={`${fl.FilterSubMenuContents}`}
                        >
                          <input
                            type="checkbox"
                            name="Shape"
                            value={el}
                            onChange={handleCheckboxShape}
                            className={`cursor`}
                          />

                          {props.locale === "ja" ? (
                            <p className={`fon5 fonSp5`}>{el}</p>
                          ) : (
                            props.locale === "en" &&
                            (el === "カップ咲き" ? (
                              <p className={`fon5 fonSp5`}>Cup Bloom</p>
                            ) : el === "シャローカップ咲" ? (
                              <p className={`fon5 fonSp5`}>Shallow Cup Bloom</p>
                            ) : el === "ロゼット咲" ? (
                              <p className={`fon5 fonSp5`}>Rosette Bloom</p>
                            ) : el === "高芯剣弁咲" ? (
                              <p className={`fon5 fonSp5`}>
                                High Center Sword Petal Bloom
                              </p>
                            ) : el === "高芯半剣弁" ? (
                              <p className={`fon5 fonSp5`}>
                                High Center Half Sword Petal
                              </p>
                            ) : el === "半剣弁ロゼット咲" ? (
                              <p className={`fon5 fonSp5`}>
                                Half Sword Petal Rosette Bloom
                              </p>
                            ) : el === "半剣弁高芯咲" ? (
                              <p className={`fon5 fonSp5`}>
                                Half Sword Petal High Center Bloom
                              </p>
                            ) : el === "グリーンアイ" ? (
                              <p className={`fon5 fonSp5`}>Green Eye</p>
                            ) : el === "高芯半剣弁咲" ? (
                              <p className={`fon5 fonSp5`}>
                                Half Sword Petal High Center Bloom
                              </p>
                            ) : el === "ウエーブ咲" ? (
                              <p className={`fon5 fonSp5`}>Wave Bloom</p>
                            ) : el === "カップ咲花弁" ? (
                              <p className={`fon5 fonSp5`}>Cup Bloom Petal</p>
                            ) : el === "半カップ咲" ? (
                              <p className={`fon5 fonSp5`}>Half Cup Bloom</p>
                            ) : el === "ウェーブかかったカップ咲き" ? (
                              <p className={`fon5 fonSp5`}>Wavy Cup Bloom</p>
                            ) : el === "平咲" ? (
                              <p className={`fon5 fonSp5`}>Flat Bloom</p>
                            ) : el === "ウェーブ咲" ? (
                              <p className={`fon5 fonSp5`}>Wave Bloom</p>
                            ) : el === "ロゼット咲き" ? (
                              <p className={`fon5 fonSp5`}>Rosette Bloom</p>
                            ) : el === "ウェーブ咲き" ? (
                              <p className={`fon5 fonSp5`}>Wave Bloom</p>
                            ) : null)
                          )}
                        </div>
                      );
                    })}
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
                    <p className={`fonSp4`}>petal</p>
                    <img
                      className={`${fl.pulldown} tex-l`}
                      src="/img/pulldown.png"
                      alt=""
                    />
                  </div>

                  <div className={`${fl.spFilterMenuBorder}`}></div>

                  <div
                    className={`${fl.colorPullDownMenu} ${
                      spFilterPetal ? fl.active : ""
                    }`}
                  >
                    {petalName.map((el) => {
                      return (
                        <div
                          key={`petal-${el}`}
                          className={`${fl.FilterSubMenuContents}`}
                        >
                          <input
                            type="radio"
                            name="Petal"
                            value={el}
                            onChange={handleCheckboxPetal}
                            className={`cursor`}
                          />
                          {props.locale === "ja" ? (
                            <h5 className={`fon5 fonSp5`}>{el}</h5>
                          ) : props.locale === "en" ? (
                            el === "100枚以上" ? (
                              <h5 className={`fon5 fonSp5`}>
                                More than 100 petals
                              </h5>
                            ) : el === "50枚以上~100枚以下" ? (
                              <h5 className={`fon5 fonSp5`}>
                                Between 50 and 100 petals
                              </h5>
                            ) : el === "50枚以下" ? (
                              <h5 className={`fon5 fonSp5`}>
                                Less than 50 petals
                              </h5>
                            ) : null
                          ) : null}
                        </div>
                      );
                    })}

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input
                        type="radio"
                        name="Petal"
                        value="クリア"
                        onChange={handleCheckboxPetal}
                        className={`cursor`}
                      />
                      {props.locale === "ja" ? (
                        <h5 className={`fon5 fonSp5`}>クリア</h5>
                      ) : props.locale === "en" ? (
                        <h5 className={`fon5 fonSp5`}>Clear</h5>
                      ) : null}
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
                    <p className={`fonSp4`}>Scent</p>
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
                    {scentName.map((el) => {
                      return (
                        <div
                          key={`scent-${el}`}
                          className={`${fl.FilterSubMenuContents}`}
                        >
                          <input
                            type="checkbox"
                            name="Scent"
                            value={el}
                            onChange={handleCheckboxScent}
                            className={`cursor`}
                          />
                          {props.locale === "ja" ? (
                            <h5 className={`fon5 fonSp5`}>{el}</h5>
                          ) : props.locale === "en" ? (
                            el === "ダマスク 中香" ? (
                              <h5 className={`fon5 fonSp5`}>
                                Damask Medium Fragrance
                              </h5>
                            ) : el === "ティー 強香" ? (
                              <h5 className={`fon5 fonSp5`}>
                                Tea Strong Fragrance
                              </h5>
                            ) : el === "ティー 微香" ? (
                              <h5 className={`fon5 fonSp5`}>
                                Tea Light Fragrance
                              </h5>
                            ) : el === "フルーティ 強香" ? (
                              <h5 className={`fon5 fonSp5`}>
                                Fruity Strong Fragrance
                              </h5>
                            ) : el === "ティー 中香" ? (
                              <h5 className={`fon5 fonSp5`}>
                                Tea Medium Fragrance
                              </h5>
                            ) : el === "ブルー 中香" ? (
                              <h5 className={`fon5 fonSp5`}>
                                Blue Medium Fragrance
                              </h5>
                            ) : el === "ブルー 強香" ? (
                              <h5 className={`fon5 fonSp5`}>
                                Blue Strong Fragrance
                              </h5>
                            ) : el === "フルーティ 中香" ? (
                              <h5 className={`fon5 fonSp5`}>
                                Fruity Medium Fragrance
                              </h5>
                            ) : el === "ティー 香" ? (
                              <h5 className={`fon5 fonSp5`}>Tea Fragrance</h5>
                            ) : el === "ミルラ 強香" ? (
                              <h5 className={`fon5 fonSp5`}>
                                Myrrh Strong Fragrance
                              </h5>
                            ) : el === "ダマスク 微香" ? (
                              <h5 className={`fon5 fonSp5`}>
                                Damask Light Fragrance
                              </h5>
                            ) : null
                          ) : null}
                        </div>
                      );
                    })}
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
                    <p className={`fonSp4`}>Length</p>
                    <img
                      className={`${fl.pulldown} tex-l`}
                      src="/img/pulldown.png"
                      alt=""
                    />
                  </div>

                  <div className={`${fl.spFilterMenuBorder}`}></div>

                  <div
                    className={`${fl.colorPullDownMenu} ${
                      spFilterLength ? fl.active : ""
                    }`}
                  >
                    {lengthName.map((el) => {
                      return (
                        <div
                          key={`length-${el}`}
                          className={`${fl.FilterSubMenuContents}`}
                        >
                          <input
                            type="radio"
                            name="Length"
                            value={el}
                            onChange={handleCheckboxLength}
                            className={`cursor`}
                          />
                          <p className={`fon5 fonSp5`}>{el}</p>
                        </div>
                      );
                    })}

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input
                        type="radio"
                        name="Length"
                        value="クリア"
                        onChange={handleCheckboxLength}
                        className={`cursor`}
                      />
                      <p className={`fon5 fonSp5`}>クリア</p>
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
                    <p className={`fonSp4`}>Harvest</p>
                    <img
                      className={`${fl.pulldown} tex-l`}
                      src="/img/pulldown.png"
                      alt=""
                    />
                  </div>

                  <div className={`${fl.spFilterMenuBorder}`}></div>

                  <div
                    className={`${fl.colorPullDownMenu} ${
                      spFilterHarvest ? fl.active : ""
                    }`}
                  >
                    {harvestName.map((el) => {
                      return (
                        <div
                          key={`harvest-${el}`}
                          className={`${fl.FilterSubMenuContents}`}
                        >
                          <input
                            type="radio"
                            name="Harvest"
                            value={el}
                            onChange={handleCheckboxHarvest}
                            className={`cursor`}
                          />
                          {props.locale === "ja" ? (
                            <h5 className={`fon5 fonSp5`}>{el}</h5>
                          ) : props.locale === "en" ? (
                            el === "約250以上~350本以下" ? (
                              <h5 className={`fon5 fonSp5`}>
                                Approximately 250 or more and 350 or less
                              </h5>
                            ) : el === "約350以上~450本以下" ? (
                              <h5 className={`fon5 fonSp5`}>
                                Approximately 350 or more and 450 or less
                              </h5>
                            ) : el === "約450本以上" ? (
                              <h5 className={`fon5 fonSp5`}>
                                Approximately 450 or more
                              </h5>
                            ) : null
                          ) : null}
                        </div>
                      );
                    })}

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input
                        type="radio"
                        name="Harvest"
                        value="クリア"
                        onChange={handleCheckboxHarvest}
                        className={`cursor`}
                      />
                      {props.locale === "ja" ? (
                        <p className={`fon5 fonSp5`}>クリア</p>
                      ) : props.locale === "en" ? (
                        <p className={`fon5 fonSp5`}>Clear</p>
                      ) : null}
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
                    {props.locale === "ja" ? (
                      <p className={`fonSp5`}>バラのタイプ</p>
                    ) : props.locale === "en" ? (
                      <p className={`fonSp5`}>Types of roses</p>
                    ) : null}
                    <img
                      className={`${fl.pulldown} tex-l`}
                      src="/img/pulldown.png"
                      alt=""
                    />
                  </div>

                  <div className={`${fl.spFilterMenuBorder}`}></div>

                  <div
                    className={`${fl.colorPullDownMenu} ${
                      spFilterSpray ? fl.active : ""
                    }`}
                  >
                    {sprayName.map((el, index) => {
                      return (
                        <div
                          key={`spray-${el}`}
                          className={`${fl.FilterSubMenuContents}`}
                        >
                          <input
                            type="radio"
                            name="Type"
                            value={el}
                            onChange={handleCheckboxSpray}
                            className={`cursor`}
                          />
                          {props.locale === "ja" ? (
                            <p className={`fon5 fonSp5`}>{el}</p>
                          ) : props.locale === "en" ? (
                            el === "スプレー咲き" ? (
                              <p className={`fon5 fonSp5`}>Spray Bloom</p>
                            ) : el === "ノーマル" ? (
                              <p className={`fon5 fonSp5`}>Normal</p>
                            ) : null
                          ) : null}
                        </div>
                      );
                    })}

                    <div className={`${fl.FilterSubMenuContents}`}>
                      <input
                        type="radio"
                        name="Type"
                        value="クリア"
                        onChange={handleCheckboxSpray}
                        className={`cursor`}
                      />
                      {props.locale === "ja" ? (
                        <p className={`fon5 fonSp5`}>クリア</p>
                      ) : props.locale === "en" ? (
                        <p className={`fon5 fonSp5`}>Clear</p>
                      ) : null}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSpFilter((prevState) => !prevState);
                  }}
                  className={`${fl.flButton} cursor mar-t2 mar-b3`}
                >
                  {props.locale === "ja" ? (
                    <p className={`fonSp4`}>絞り込む</p>
                  ) : props.locale === "en" ? (
                    <p className={`fon5 fonSp5`}>Narrow down</p>
                  ) : null}
                </button>
                {/* </form> */}
              </form>
            </div>
          </div>

          <button
            type="reset"
            onClick={handleReset}
            className={`${fl.filterReset} cursor`}
          >
            {props.locale === "ja" ? (
              <h5 className={`fon5 fonSp5`}>フィルターをクリア</h5>
            ) : props.locale === "en" ? (
              <h5 className={`fon5 fonSp5`}>Filter Clear</h5>
            ) : null}
          </button>
        </div>
        <div className={`${fl.tagOrReset} mar-t1`}>
          {/* <div className={`${fl.tag}`}>
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
          </div> */}
        </div>
      </div>
    </>
  );
}
