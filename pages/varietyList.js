import React, { useState, useEffect, useRef } from "react";
import cn from "../components/varietyList.module.scss";
import Filter from "../components/filter.js";
import FilterSP from "../components/filterSP.js";
import ColorBox from "../components/colorBox.js";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

export default function VarietyList({ formas }) {
  const brandNewColumn = formas;
  console.log(brandNewColumn);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const [isDisplay, setIsDisplay] = useState(false);

  var brandNewDisplayColumn = brandNewColumn.slice(0, 20);

  // useEffect(() => {
  //   console.log(posts);
  // }, []);

  useEffect(() => {
    setIsDisplay(true);
  }, []);

  if (isDisplay) {
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

          {/* フィルター */}

          {isDesktop ? <Filter /> : <FilterSP />}

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
                    <div className={`flowerBreedPic pos-r`}>
                      <Link href={`./rose/${el.node.roseFormaId}`}>
                        <img
                          src={el.node.featuredImage.node.mediaItemUrl}
                          alt=""
                        />
                      </Link>

                      <div className={`flowerFavorite`}>
                        <img src="/img/heart2.png" alt="" />
                      </div>
                    </div>

                    <div className={`flowerColor mar-t1`}>
                      <div className={`flowerColorBox`}>
                        <ColorBox roseCo={el.node.colors} />
                      </div>
                      <h6 className={`flowerColorText`}>
                        {/* {el.node.colors.nodes[0].name} */}
                      </h6>
                    </div>

                    <div className={`flowerName`}>
                      <h3>{el.node.title}</h3>
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
        </section>
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
