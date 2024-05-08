import React, { useState, useEffect, useRef } from "react";
import fl from "../components/filter.module.scss";

export default function Filter(props) {
  //検索

  function handleSubmit(event) {
    event.preventDefault();
    formRef.current.reset();
  }
  function handleChange(event) {
    props.setSearch(event.target.value);
    formRef.current.reset();
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
      <div className={`${fl.search} grid2 sec-c`}>
        <div className={`${fl.inputWithIcon}`}>
          <form>
            <input
              className={`fon4 notoGo`}
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
      <div
        className={`${fl.filter} ${fl.varietyFilterColumn} grid2 fle-f mar-t2`}
      >
        <div className={`${fl.varietyListFilter}`}>
          <div className={`${fl.flowerSpecFilter}`}>
            <form ref={formRef} className={`${fl.flowerSpecDetail}`}>
              <div ref={dropdownListColor} className={`${fl.flowerSpecDetail}`}>
                <div
                  onClick={() => {
                    setFilterName("color");
                  }}
                  className={`${fl.flowerSpecFilter}`}
                >
                  <h5 className={`fon5 fonSp5 cursor`}>Color</h5>
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
                        <h5 className={`fon5 fonSp5`}>{el}</h5>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* サイズ */}
              <div ref={dropdownListSize} className={`${fl.flowerSpecDetail}`}>
                <div
                  onClick={() => {
                    setFilterName("size");
                  }}
                  className={`${fl.flowerSpecFilter} cursor`}
                >
                  <h5 className={`fon5 fonSp5`}>Size</h5>
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
                          <h5 className={`fon5 fonSp5`}>{el}</h5>
                        ) : (
                          props.locale === "en" &&
                          (el === "大輪" ? (
                            <h5 className={`fon5 fonSp5`}>Large Flower</h5>
                          ) : el === "大輪スプレー" ? (
                            <h5 className={`fon5 fonSp5`}>Large Spray</h5>
                          ) : el === "中大輪" ? (
                            <h5 className={`fon5 fonSp5`}>
                              Medium Large Flower
                            </h5>
                          ) : el === "中輪" ? (
                            <h5 className={`fon5 fonSp5`}>Medium Flower</h5>
                          ) : el === "中小輪" ? (
                            <h5 className={`fon5 fonSp5`}>
                              Medium Small Flower
                            </h5>
                          ) : el === "中輪スプレー" ? (
                            <h5 className={`fon5 fonSp5`}>Medium Spray</h5>
                          ) : el === "中小輪スプレー" ? (
                            <h5 className={`fon5 fonSp5`}>
                              Medium Small Spray
                            </h5>
                          ) : el === "小輪スプレー" ? (
                            <h5 className={`fon5 fonSp5`}>Small Spray</h5>
                          ) : null)
                        )}
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
                  className={`${fl.flowerSpecFilter} cursor`}
                >
                  <h5 className={`fon5 fonSp5`}>Shape</h5>
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
                          <h5 className={`fon5 fonSp5`}>{el}</h5>
                        ) : (
                          props.locale === "en" &&
                          (el === "カップ咲き" ? (
                            <h5 className={`fon5 fonSp5`}>Cup Bloom</h5>
                          ) : el === "シャローカップ咲" ? (
                            <h5 className={`fon5 fonSp5`}>Shallow Cup Bloom</h5>
                          ) : el === "ロゼット咲" ? (
                            <h5 className={`fon5 fonSp5`}>Rosette Bloom</h5>
                          ) : el === "高芯剣弁咲" ? (
                            <h5 className={`fon5 fonSp5`}>
                              High Center Sword Petal Bloom
                            </h5>
                          ) : el === "高芯半剣弁" ? (
                            <h5 className={`fon5 fonSp5`}>
                              High Center Half Sword Petal
                            </h5>
                          ) : el === "半剣弁ロゼット咲" ? (
                            <h5 className={`fon5 fonSp5`}>
                              Half Sword Petal Rosette Bloom
                            </h5>
                          ) : el === "半剣弁高芯咲" ? (
                            <h5 className={`fon5 fonSp5`}>
                              Half Sword Petal High Center Bloom
                            </h5>
                          ) : el === "グリーンアイ" ? (
                            <h5 className={`fon5 fonSp5`}>Green Eye</h5>
                          ) : el === "高芯半剣弁咲" ? (
                            <h5 className={`fon5 fonSp5`}>
                              Half Sword Petal High Center Bloom
                            </h5>
                          ) : el === "ウエーブ咲" ? (
                            <h5 className={`fon5 fonSp5`}>Wave Bloom</h5>
                          ) : el === "カップ咲花弁" ? (
                            <h5 className={`fon5 fonSp5`}>Cup Bloom Petal</h5>
                          ) : el === "半カップ咲" ? (
                            <h5 className={`fon5 fonSp5`}>Half Cup Bloom</h5>
                          ) : el === "ウェーブかかったカップ咲き" ? (
                            <h5 className={`fon5 fonSp5`}>Wavy Cup Bloom</h5>
                          ) : el === "平咲" ? (
                            <h5 className={`fon5 fonSp5`}>Flat Bloom</h5>
                          ) : el === "ウェーブ咲" ? (
                            <h5 className={`fon5 fonSp5`}>Wave Bloom</h5>
                          ) : el === "ロゼット咲き" ? (
                            <h5 className={`fon5 fonSp5`}>Rosette Bloom</h5>
                          ) : el === "ウェーブ咲き" ? (
                            <h5 className={`fon5 fonSp5`}>Wave Bloom</h5>
                          ) : null)
                        )}
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
                  className={`${fl.flowerSpecFilter} cursor`}
                >
                  <h5 className={`fon5 fonSp5`}>Petal</h5>
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

              {/* Scentのフィルター */}
              <div ref={dropdownListScent} className={`${fl.flowerSpecDetail}`}>
                <div
                  onClick={() => {
                    setFilterName("scent");
                  }}
                  className={`${fl.flowerSpecFilter}`}
                >
                  <h5 className={`fon5 fonSp5 cursor`}>Scent</h5>
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

              {/* Lengthのフィルター */}
              <div
                ref={dropdownListLength}
                className={`${fl.flowerSpecDetail}`}
              >
                <div
                  onClick={() => {
                    setFilterName("length");
                  }}
                  className={`${fl.flowerSpecFilter} cursor`}
                >
                  <h5 className={`fon5 fonSp5`}>Length</h5>
                  <img
                    className={`${fl.pulldown}`}
                    src="/img/pulldown.png"
                    alt=""
                  />
                </div>

                <div
                  className={`${fl.colorPullDownMenu} ${
                    filterName == "length" ? fl.active : ""
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
                        <h5 className={`fon5 fonSp5`}>{el}</h5>
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
                    {props.locale === "ja" ? (
                      <h5 className={`fon5 fonSp5`}>クリア</h5>
                    ) : props.locale === "en" ? (
                      <h5 className={`fon5 fonSp5`}>Clear</h5>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Harvestのフィルター */}
              <div
                ref={dropdownListHarvest}
                className={`${fl.flowerSpecDetail}`}
              >
                <div
                  onClick={() => {
                    setFilterName("harvest");
                  }}
                  className={`${fl.flowerSpecFilter} cursor`}
                >
                  <h5 className={`fon5 fonSp5`}>Harvest</h5>
                  <img
                    className={`${fl.pulldown}`}
                    src="/img/pulldown.png"
                    alt=""
                  />
                </div>

                <div
                  className={`${fl.colorPullDownMenu} ${
                    filterName == "harvest" ? fl.active : ""
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
                      <h5 className={`fon5 fonSp5`}>クリア</h5>
                    ) : props.locale === "en" ? (
                      <h5 className={`fon5 fonSp5`}>Clear</h5>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Sprayのフィルター */}
              <div ref={dropdownListSpray} className={`${fl.flowerSpecDetail}`}>
                <div
                  onClick={() => {
                    setFilterName("spray");
                  }}
                  className={`${fl.flowerSpecFilter} cursor`}
                >
                  {props.locale === "ja" ? (
                    <h5 className={`fon5 fonSp5`}>バラのタイプ</h5>
                  ) : props.locale === "en" ? (
                    <h5 className={`fon5 fonSp5`}>Types of roses</h5>
                  ) : null}

                  <img
                    className={`${fl.pulldown}`}
                    src="/img/pulldown.png"
                    alt=""
                  />
                </div>

                <div
                  className={`${fl.colorPullDownMenu} ${
                    filterName == "spray" ? fl.active : ""
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
                          <h5 className={`fon5 fonSp5`}>{el}</h5>
                        ) : props.locale === "en" ? (
                          el === "スプレー咲き" ? (
                            <h5 className={`fon5 fonSp5`}>Spray Bloom</h5>
                          ) : el === "ノーマル" ? (
                            <h5 className={`fon5 fonSp5`}>Normal</h5>
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
                      <h5 className={`fon5 fonSp5`}>クリア</h5>
                    ) : props.locale === "en" ? (
                      <h5 className={`fon5 fonSp5`}>Clear</h5>
                    ) : null}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <button
          type="reset"
          onClick={handleReset}
          className={`${fl.filterReset} cursor`}
        >
          <h5 className={`fon5 fonSp5`}>{props.text.catchCopy.filter}</h5>
        </button>

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
        </div> */}
      </div>
    </>
  );
}
