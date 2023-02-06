import React, { useState, useEffect, useRef } from "react";
import cn from "../components/varietyList.module.scss";
import Filter from "../components/filter.js";
import FilterSP from "../components/filterSP.js";
import ColorBox from "../components/colorBox.js";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import ScrollEffect from "../components/utility/utilityscrollEffect";

export default function VarietyList({ formas }) {
  // ロード制御
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const body = document.body; //scroll制御
    body.classList.add("active");
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);

  //GraphQLより品種情報を読み込み
  const brandNewColumn = formas;
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const [isDisplay, setIsDisplay] = useState(false);

  var brandNewDisplayColumn = brandNewColumn.slice(0, 72);

  useEffect(() => {
    setIsDisplay(true);
  }, []);

  //お気に入りのハートボタン
  const [fav, setFav] = useState(false);

  if (isDisplay) {
    return (
      <>
        <ScrollEffect>
          {/* 品種一覧 */}
          <section className={`${cn.varietyList} sectionSpaceM mar-b4`}>
            <div className={`varietyListTitle titleColumn`}>
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

              {isDesktop ? <Filter /> : <FilterSP />}

              {/* ボーダー */}
              <div className={`border mar-t1`}></div>

              {/* 品種一覧 */}

              <div className={`varietyListColumn mar-t1 grid2`}>
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
                        <div className={`flowerBreedPic pos-r`}>
                          <Link href={`./rose/${el.node.roseFormaId}`}>
                            <img
                              src={el.node.featuredImage.node.mediaItemUrl}
                              alt=""
                            />
                          </Link>

                          <div
                            onClick={() => {
                              setFav((prevState) => !prevState);
                            }}
                            className={`flowerFavorite flowerheart ${
                              fav ? "active" : ""
                            }`}
                          ></div>
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
                          <h3 className={`fonSp3`}>{el.node.title}</h3>
                        </div>

                        {/* フラワースペック */}
                        <div className={`varietyListSpec`}>
                          <div className={`varietyListSpecBorder`}></div>
                          <div className={`varietyListSpecDetail1`}>
                            <h6>
                              Color&nbsp;&nbsp;&nbsp;&nbsp;
                              {el.node.rose_spec.roseColor}
                            </h6>
                            <h6>
                              Shape&nbsp;&nbsp;&nbsp;&nbsp;
                              {el.node.rose_spec.roseShape}
                            </h6>
                            <h6>
                              Length&nbsp;&nbsp;{el.node.rose_spec.roseLength}
                            </h6>
                          </div>
                          <div className={`varietyListSpecBorder`}></div>
                          <div className={`varietyListSpecDetail2`}>
                            <h6>
                              Size&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              {el.node.rose_spec.roseSize}
                            </h6>
                            <h6>
                              Scent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              {el.node.rose_spec.roseScent}
                            </h6>
                            <h6>
                              Harvest&nbsp;&nbsp;{el.node.rose_spec.roseHarvest}
                            </h6>
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
