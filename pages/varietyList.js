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
  const brandNewColumn = formas;
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
    const favFlower = localStorage.getItem("id");
    setFavList(JSON.parse(favFlower));
    console.log(favList);

    // このeffectは初回レンダー時のみ呼ばれるeffect
    isFirstRender.current = true;
  }, []);

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

  useEffect(() => {
    setI(12);
    setFolding(true);
    setView(false);
  }, [reset]);

  var brandNewDisplayColumn = brandNewColumn.slice(0, i);

  if (isDisplay) {
    return (
      <>
        <ScrollEffect>
          {/* 品種一覧 */}
          <section className={`${cn.varietyList} sectionSpaceM mar-b4`}>
            <div className={`varietyListTitle titleColum tex-c`}>
              <div className={`varietyListText mar-t2`}>
                <ScrollEffect>
                  <h5>品種一覧</h5>
                </ScrollEffect>

                <ScrollEffect className={`intMoreDelay`} after={`intActive`}>
                  <h2>Variety list</h2>
                </ScrollEffect>
              </div>
            </div>

            <ScrollEffect className={`intMostDelay`} after={`intActive`}>
              {/* フィルター */}

              {/* {isDesktop ? <Filter /> : <FilterSP />} */}

              {/* ボーダー */}
              {/* <div className={`border mar-t1`}></div> */}

              <div className={`varietyListColumn sectionSpaceS grid2`}>
                {/* <div className={`result mar-t1`}>
                  <h4>絞り込み結果 : 14品種がヒットしました</h4>
                </div> */}

                <div className={`flowerListColumn mar-t1 `}>
                  {/* 品種１ */}
                  {brandNewDisplayColumn.map((el, index) => {
                    return (
                      <div
                        key={`varietyList${index}`}
                        className={`flowerBreed1 mar-t3`}
                      >
                        <div className={`flowerBreedPic pos-r`}>
                          <Link href={`./rose/${el.node.roseFormaId}`}>
                            <img
                              src={el.node.featuredImage.node.mediaItemUrl}
                              alt=""
                            />
                          </Link>

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
                          <div className={`flowerColorBox`}>
                            <ColorBox roseCo={el.node.colors} />
                          </div>
                          <p className={`flowerColorText fon5 fonSp5`}>
                            {el.node.colors.nodes[0].name}
                          </p>
                        </div>

                        <div className={`flowerName`}>
                          {el.node.rose_spec.roseSubname !== "" && (
                            <h6>{el.node.rose_spec.roseSubname}</h6>
                          )}
                          <h3 className={`fonSp3`}>{el.node.title}</h3>
                        </div>

                        {/* フラワースペック */}
                        <div className={`varietyListSpec`}>
                          <div className={`varietyListSpecDetail1 fle-f`}>
                            <div className={`varietyListSpecBorder`}></div>
                            <div className={`varietyListSpecDetail`}>
                              <h6>
                                Color&nbsp;&nbsp;
                                {el.node.rose_spec.roseColor}
                              </h6>
                              <h6>
                                Shape&nbsp;&nbsp;
                                {el.node.rose_spec.roseShape}
                              </h6>
                              <h6>
                                Length&nbsp;&nbsp;{el.node.rose_spec.roseLength}
                              </h6>
                            </div>
                          </div>

                          <div className={`varietyListSpecDetail2 fle-f`}>
                            <div className={`varietyListSpecBorder`}></div>
                            <div className={`varietyListSpecDetail`}>
                              <h6>
                                Size&nbsp;&nbsp;
                                {el.node.rose_spec.roseSize}
                              </h6>
                              <h6>
                                Scent&nbsp;&nbsp;
                                {el.node.rose_spec.roseScent}
                              </h6>
                              <h6>
                                Harvest&nbsp;&nbsp;
                                {el.node.rose_spec.roseHarvest}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* moreView */}
                <div
                  onClick={() => {
                    setMoreView((prevState) => !prevState);
                  }}
                  className={`moreView ${folding ? "" : "active"} `}
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
        roseFormas(first: 100) {
          edges {
            node {
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
