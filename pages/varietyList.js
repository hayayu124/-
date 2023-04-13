import React, { useState, useEffect, useRef } from "react";
import cn from "../components/varietyList.module.scss";
import Filter from "../components/filter.js";
import FilterSP from "../components/filterSP.js";
import ColorBox from "../components/colorBox.js";
import Button from "../components/button.js";
import FButton from "../components/foldingButton.js";
import FavButton from "../components/utility/utilityFavButton.js";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import ScrollEffect from "../components/utility/utilityscrollEffect";

export default function VarietyList({ formas }) {
  // ロード制御
  const [load, setLoad] = useState(false);
  const [i, setI] = useState(12);
  const [moreView, setMoreView] = useState(false);
  const isFirstRender = useRef(false);

  //GraphQLより品種情報を読み込み
  const rose = formas;
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const [isDisplay, setIsDisplay] = useState(false);

  //ボタンの変換
  const [folding, setFolding] = useState(true);
  const [view, setView] = useState(false);
  const [reset, setReset] = useState(false);
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    setIsDisplay(true);
    const body = document.body; //scroll制御
    body.classList.add("active");
    setTimeout(() => {
      setLoad(true);
    }, 500);

    //Favボタン
    // const favFlower = localStorage.getItem("id");
    // setFavList(JSON.parse(favFlower));

    // このeffectは初回レンダー時のみ呼ばれるeffect
    isFirstRender.current = true;
  }, []);

  //検索
  const [search, setSearch] = useState("");
  useEffect(() => {
    const brandNewColumnFilter = rose.filter((obj) =>
      obj.node.title.toLowerCase().includes(search.toLowerCase())
    );
    console.log(brandNewColumnFilter);
    setBrandNewColumn(brandNewColumnFilter);
  }, [search]);

  //フィルター
  const [filterValue, setFilterValue] = useState([]);
  const [sizeFilterValue, setSizeFilterValue] = useState([]);
  const [shapeFilterValue, setShapeFilterValue] = useState([]);
  const [petalFilterValue, setPetalFilterValue] = useState("");
  const [scentFilterValue, setScentFilterValue] = useState([]);
  const [lengthFilterValue, setLengthFilterValue] = useState([]);
  const [harvestFilterValue, setHarvestFilterValue] = useState([]);
  const [sprayFilterValue, setSprayFilterValue] = useState("");

  const [brandNewColumn, setBrandNewColumn] = useState(rose);

  useEffect(() => {
    setI(12);
    setFolding(true);
    //品種をフィルター
    if (
      filterValue.length > 0 ||
      sizeFilterValue.length > 0 ||
      shapeFilterValue.length > 0 ||
      scentFilterValue.length > 0 ||
      petalFilterValue.length > 0 ||
      harvestFilterValue.length > 0 ||
      lengthFilterValue.length > 0 ||
      sprayFilterValue.length > 0
    ) {
      //色がないとき全部選択させる
      if (filterValue.length == 0) {
        const allItems = rose
          .map((item) => item.node.colors.nodes[0].name)
          .filter((value, index, self) => {
            return self.indexOf(value) === index;
          });
        setFilterValue(allItems);
      }

      //サイズがないとき全部選択させる
      if (sizeFilterValue.length == 0) {
        const allItems = rose
          .map((item) => item.node.rose_spec.roseSize)
          .filter((value, index, self) => {
            return self.indexOf(value) === index;
          });
        setSizeFilterValue(allItems);
      }

      //形がないとき全部選択させる
      if (shapeFilterValue.length == 0) {
        const allItems = rose
          .map((item) => item.node.rose_spec.roseShape)
          .filter((value, index, self) => {
            return self.indexOf(value) === index;
          });
        setShapeFilterValue(allItems);
      }

      //花弁数がないとき全部選択させる
      if (petalFilterValue.length == 0) {
        setPetalFilterValue("クリア");
      }

      //臭いがないとき全部選択させる
      if (scentFilterValue.length == 0) {
        const allItems = rose
          .map((item) => item.node.rose_spec.roseScent)
          .filter((value, index, self) => {
            return self.indexOf(value) === index;
          });
        setScentFilterValue(allItems);
      }

      const brandNewColumnFilter = rose
        .filter(
          (obj) =>
            filterValue.includes(obj.node.colors.nodes[0].name) &&
            sizeFilterValue.includes(obj.node.rose_spec.roseSize) &&
            shapeFilterValue.includes(obj.node.rose_spec.roseShape) &&
            scentFilterValue.includes(obj.node.rose_spec.roseScent)
        )
        //花弁数のフィルター
        .filter((con) => {
          if (petalFilterValue == "100枚以上") {
            return con.node.rose_spec.rosePetal >= 100;
          } else if (petalFilterValue == "50枚以上~100枚以下") {
            return (
              con.node.rose_spec.rosePetal < 100 &&
              con.node.rose_spec.rosePetal >= 50
            );
          } else if (petalFilterValue == "50枚以下") {
            return con.node.rose_spec.rosePetal < 50;
          } else if (petalFilterValue == "クリア") {
            return con.node.rose_spec.rosePetal < 100000;
          }
        })
        //長さのフィルター
        .filter((con) => {
          if (lengthFilterValue == "60~90cm") {
            return con.node.rose_spec.roseLength == "60~90cm";
          } else if (lengthFilterValue == "60~80cm") {
            return con.node.rose_spec.roseLength == "60~80cm";
          } else if (lengthFilterValue == "50~70cm") {
            return con.node.rose_spec.roseLength == "50~70cm";
          } else if (lengthFilterValue == "50~80cm") {
            return con.node.rose_spec.roseLength == "50~80cm";
          } else if (lengthFilterValue == "70~90cm") {
            return con.node.rose_spec.roseLength == "70~90cm";
          } else if (lengthFilterValue == "40~60cm") {
            return con.node.rose_spec.roseLength == "40~60cm";
          } else if (lengthFilterValue == "60~70cm") {
            return con.node.rose_spec.roseLength == "60~70cm";
          } else if (
            lengthFilterValue == "クリア" ||
            lengthFilterValue !== "cjsdhvb"
          ) {
            return con.node.rose_spec.roseLength !== "cjsdhvb";
          }
        })
        //採花本数のフィルター
        .filter((con) => {
          if (harvestFilterValue == "約250以上~350本以下") {
            return (
              con.node.rose_spec.roseHarvest < 350 &&
              con.node.rose_spec.roseHarvest >= 250
            );
          } else if (harvestFilterValue == "約350以上~450本以下") {
            return (
              con.node.rose_spec.roseHarvest < 450 &&
              con.node.rose_spec.roseHarvest >= 350
            );
          } else if (harvestFilterValue == "約450本以上") {
            return con.node.rose_spec.roseHarvest >= 450;
          } else if (harvestFilterValue == "クリア") {
            return con.node.rose_spec.roseHarvest < 100000;
          } else {
            return con.node.rose_spec.roseHarvest < 100000;
          }
        })
        //スプレーのフィルター
        .filter((con) => {
          if (sprayFilterValue == "スプレー咲き") {
            return con.node.rose_spec.roseType == "spray";
          } else if (sprayFilterValue == "ノーマル") {
            return con.node.rose_spec.roseType == "normal";
          } else if (sprayFilterValue == "クリア") {
            return con.node.rose_spec.roseType !== "bjhcjvbjs";
          } else {
            return con.node.rose_spec.roseType !== "bjhcjvbjs";
          }
        });

      console.log(brandNewColumnFilter);

      setBrandNewColumn(brandNewColumnFilter);
    } else {
      setBrandNewColumn(rose);
    }
  }, [
    filterValue,
    sizeFilterValue,
    shapeFilterValue,
    petalFilterValue,
    scentFilterValue,
    lengthFilterValue,
    harvestFilterValue,
    sprayFilterValue,
  ]);

  useEffect(() => {
    if (isFirstRender.current) {
      // 初回レンダー判定
      isFirstRender.current = false; // もう初回レンダーじゃないよ代入
    } else if (i < brandNewColumn.length - 12) {
      setI(i + 12);
    } else if (i >= brandNewColumn.length - 12) {
      setI(i + 12);
      setFolding(false);
      setView(true);
    }
  }, [moreView]);

  // useEffect(() => {
  //   setI(12);
  //   setFolding(true);
  //   setView(false);
  // }, [reset]);

  const brandNewDisplayColumn = brandNewColumn.slice(0, i);

  if (isDisplay) {
    return (
      <>
        <ScrollEffect>
          {/* 品種一覧 */}
          <section className={`${cn.varietyList}`}>
            <div className={`titleColumn tex-c mar-b4`}>
              <ScrollEffect
                className={`${cn.intMoreDelay}`}
                after={cn.intActive}
              >
                <h5 className={`fon5 fonSp5 mar-b1`}>品種</h5>

                <h2 className={`fon2 fonSp2 bold mar-b05`}>Variety</h2>

                <div className={`titleBorder sec-c`}></div>
              </ScrollEffect>

              <ScrollEffect className={`intMostDelay`} after={`intActive`}>
                <h5 className={`fon5 fonSp5 titleText mar-t2`}>
                  一般的な花形だけではなく、 ROSETIQUEならではの香りに特化した、
                  <br className={`br`} />
                  人の心を癒し、心身共に豊かになるバラです。
                </h5>
              </ScrollEffect>
            </div>

            <ScrollEffect className={`intMostDelay`} after={`intActive`}>
              {/* フィルター */}

              {isDesktop ? (
                <Filter
                  rose={rose}
                  filterValue={filterValue}
                  setFilterValue={setFilterValue}
                  sizeFilterValue={sizeFilterValue}
                  setSizeFilterValue={setSizeFilterValue}
                  shapeFilterValue={shapeFilterValue}
                  setShapeFilterValue={setShapeFilterValue}
                  petalFilterValue={petalFilterValue}
                  setPetalFilterValue={setPetalFilterValue}
                  scentFilterValue={scentFilterValue}
                  setScentFilterValue={setScentFilterValue}
                  lengthFilterValue={lengthFilterValue}
                  setLengthFilterValue={setLengthFilterValue}
                  harvestFilterValue={harvestFilterValue}
                  setHarvestFilterValue={setHarvestFilterValue}
                  sprayFilterValue={sprayFilterValue}
                  setSprayFilterValue={setSprayFilterValue}
                  search={search}
                  setSearch={setSearch}
                />
              ) : (
                <FilterSP
                  rose={rose}
                  filterValue={filterValue}
                  setFilterValue={setFilterValue}
                  sizeFilterValue={sizeFilterValue}
                  setSizeFilterValue={setSizeFilterValue}
                  shapeFilterValue={shapeFilterValue}
                  setShapeFilterValue={setShapeFilterValue}
                  petalFilterValue={petalFilterValue}
                  setPetalFilterValue={setPetalFilterValue}
                  scentFilterValue={scentFilterValue}
                  setScentFilterValue={setScentFilterValue}
                  lengthFilterValue={lengthFilterValue}
                  setLengthFilterValue={setLengthFilterValue}
                  harvestFilterValue={harvestFilterValue}
                  setHarvestFilterValue={setHarvestFilterValue}
                  sprayFilterValue={sprayFilterValue}
                  setSprayFilterValue={setSprayFilterValue}
                  search={search}
                  setSearch={setSearch}
                />
              )}

              {/* ボーダー */}
              <div className={`border mar-t1`}></div>

              <div className={`varietyListColumn sectionSpaceS grid2`}>
                {/* <div className={`result mar-t1`}>
                  <h4>絞り込み結果 : 14品種がヒットしました</h4>
                </div> */}

                <div
                  className={`flowerListColumn ${
                    folding ? "" : "active"
                  } mar-t1`}
                >
                  {/* 品種１ */}
                  {brandNewDisplayColumn.map((el, index) => {
                    return (
                      <div
                        key={`varietyList${index}`}
                        className={`flowerBreed1 mar-t3 cursor`}
                      >
                        <div className={`flowerBreedPic pos-r`}>
                          {el.node.featuredImage !== null && (
                            <Link href={`./rose/${el.node.roseFormaId}`}>
                              <img
                                src={el.node.featuredImage.node.mediaItemUrl}
                                alt=""
                              />
                            </Link>
                          )}

                          {/* アワードアイコン */}
                          <div className={`${cn.flowerAwardIcon} pos-a`}>
                            {el.node.rose_spec.award == "award2022" && (
                              <img
                                src="/img/prize_2021_2022_color_E1.png"
                                alt=""
                              />
                            )}
                          </div>

                          {/* お気に入りボタン */}
                          {/* <FavButton
                            favId={el.node.roseFormaId}
                            favList={favList}
                            setFavList={setFavList}
                          /> */}
                        </div>

                        <div className={`flowerColor fle-f mar-t1`}>
                          {el.node.colors.nodes.length !== 0 && (
                            <div className={`flowerColorBox`}>
                              <ColorBox roseCo={el.node.colors} />
                            </div>
                          )}

                          {el.node.colors.nodes.length !== 0 && (
                            <p className={`flowerColorText fon5 fonSp5`}>
                              {el.node.colors.nodes[0].name}
                            </p>
                          )}
                        </div>

                        <div className={`flowerName`}>
                          {el.node.rose_spec.roseSubname !== "" && (
                            <p className={`fon5 fonSp5`}>
                              {el.node.rose_spec.roseSubname}
                            </p>
                          )}
                          {el.node.rose_spec.roseName !== null && (
                            <h2
                              className={`fon4 fonSp3 ${cn.varietyFlowerName}`}
                            >
                              {el.node.rose_spec.roseName}
                            </h2>
                          )}
                        </div>

                        {/* フラワースペック */}
                        <div className={`varietyListSpec`}>
                          <div className={`varietyListSpecDetail1 fle-f`}>
                            <div className={`varietyListSpecBorder`}></div>
                            <div className={`varietyListSpecDetail`}>
                              {el.node.rose_spec.roseColor !== null && (
                                <p className={`fon6 fonSp6`}>
                                  Color&nbsp;&nbsp;
                                  {el.node.rose_spec.roseColor}
                                </p>
                              )}

                              {el.node.rose_spec.roseShape !== null && (
                                <p className={`fon6 fonSp6`}>
                                  Shape&nbsp;&nbsp;
                                  {el.node.rose_spec.roseShape}
                                </p>
                              )}

                              {el.node.rose_spec.roseLength !== null && (
                                <p className={`fon6 fonSp6`}>
                                  Length&nbsp;&nbsp;
                                  {el.node.rose_spec.roseLength}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className={`varietyListSpecDetail2 fle-f`}>
                            <div className={`varietyListSpecBorder`}></div>
                            <div className={`varietyListSpecDetail`}>
                              {el.node.rose_spec.roseSize !== null && (
                                <p className={`fon6 fonSp6`}>
                                  Size&nbsp;&nbsp;
                                  {el.node.rose_spec.roseSize}
                                </p>
                              )}
                              {el.node.rose_spec.roseScent !== null && (
                                <p className={`fon6 fonSp6`}>
                                  Scent&nbsp;&nbsp;
                                  {el.node.rose_spec.roseScent}
                                </p>
                              )}
                              {el.node.rose_spec.rosePetal !== null && (
                                <p className={`fon6 fonSp6`}>
                                  Petal&nbsp;&nbsp;
                                  {el.node.rose_spec.rosePetal}本
                                </p>
                              )}
                              {el.node.rose_spec.roseHarvest !== null && (
                                <p className={`fon6 fonSp6`}>
                                  Harvest&nbsp;&nbsp;
                                  {el.node.rose_spec.roseHarvest}本
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div
                  className={`${cn.errorMessage} ${
                    brandNewColumn.length == 0 ? cn.active : ""
                  }`}
                >
                  <h5 className={`tex-c`}>品種がありません。</h5>
                </div>

                {/* moreView */}
                <div
                  onClick={() => {
                    setMoreView((prevState) => !prevState);
                  }}
                  className={`moreView ${folding ? "" : "active"} ${
                    brandNewColumn.length < 12 ? "active" : ""
                  }`}
                >
                  <Button />
                </div>

                {/* Folding */}
                {/* <div
                  onClick={() => {
                    setReset((prevState) => !prevState);
                  }}
                  className={`foldingButton ${view ? "active" : ""}`}
                >
                  <FButton />
                </div> */}
              </div>
            </ScrollEffect>
          </section>
        </ScrollEffect>
      </>
    );
  }
}

//wordpress
export const getStaticProps = async () => {
  //ニュースの情報をインポート
  const roseFormas = await fetch(`http://ferntastique.tokyo/wp/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        roseFormas(first: 1000) {
          edges {
            node {
              roseFormaId
              uri
              title
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
              rose_spec {
                award
                fieldGroupName
                roseColor
                roseShape
                roseSize
                imageSub {
                  mediaItemUrl
                }
                genre
                rosePetal
                roseScent
                roseName
                roseLength
                roseHarvest
                roseExplanation
                roseSubname
                roseType
              }
              colors {
                nodes {
                  name
                }
              }
              roseFormaId
            }
          }
        }
      }
      `,
    }),
  });

  const jsonRose = await roseFormas.json();
  return {
    props: {
      formas: jsonRose.data.roseFormas.edges,
    },
  };
};
