import React, { useState, useRef, useEffect } from "react";
import cn from "../components/collectionColumn.module.scss";
import Button from "../components/button.js";
import ColorBox from "../components/colorBox.js";
import FavButton from "./utility/utilityFavButton.js";

import ScrollEffect from "./utility/utilityscrollEffect";
import LoadingEffect from "./utility/loadingEffect";

export default function CollectionColumn({ roseCo }) {
  //お気に入りのハートボタン
  // const [fav, setFav] = useState(false);

  console.log(roseCo);

  return (
    <>
      <div
        className={`${cn.collectionColumn} ${
          roseCo.length == 0 ? cn.active : ""
        } sec-c`}
      >
        {/* 品種１ */}
        {roseCo.map((el, index) => {
          return (
            <div
              key={`collection${index}`}
              className={`${cn.flowerBreed} sectionSpaceM`}
            >
              {/* PCの表示 */}
              <div className={`${cn.flowerBreedPc}`}>
                <div className={`${cn.flowerTitleColSp} tex-l mar-b2 fle-f`}>
                  <div className={`${cn.flowerTitle}`}>
                    <div className={`${cn.flowerSpecDetail}`}>
                      {el.node.colors.nodes.length !== 0 && (
                        <div className={`${cn.flowerColorBox}`}>
                          <ColorBox roseCo={el.node.colors} />
                        </div>
                      )}

                      {el.node.colors.nodes.length !== 0 && (
                        <h5 className={`${cn.flowerColorText}`}>
                          {el.node.colors.nodes[0].name}
                        </h5>
                      )}
                    </div>
                    <div className={`${cn.flowerName}`}>
                      <h3>{el.node.title}</h3>
                      {el.node.rose_spec.roseSubname !== "" && (
                        <h6>{el.node.rose_spec.roseSubname}</h6>
                      )}
                    </div>
                  </div>

                  <div className={`${cn.flowerAwardIcon}`}>
                    {el.node.rose_spec.award == "award2022" && (
                      <img src="/img/prize_2021_2022_color_E1.png" alt="" />
                    )}
                  </div>
                </div>
                <div className={`${cn.flowerDetailColumn}`}>
                  <div className={`${cn.flowerDetail} tex-l`}>
                    <div className={`${cn.flowerSpecColumn}`}>
                      <div className={`${cn.flowerTitleColPc} fle-f`}>
                        <div className={`${cn.flowerTitle}`}>
                          <div className={`${cn.flowerSpecDetail}`}>
                            {el.node.colors.nodes.length !== 0 && (
                              <div className={`${cn.flowerColorBox}`}>
                                <ColorBox roseCo={el.node.colors} />
                              </div>
                            )}
                            {el.node.colors.nodes.length !== 0 && (
                              <h5 className={`${cn.flowerColorText}`}>
                                {el.node.colors.nodes[0].name}
                              </h5>
                            )}
                          </div>
                          <div className={`${cn.flowerName}`}>
                            <h3>{el.node.title}</h3>

                            {el.node.rose_spec.roseSubname !== "" && (
                              <h6>{el.node.rose_spec.roseSubname}</h6>
                            )}
                          </div>
                        </div>
                        <div className={`${cn.flowerAwardIcon}`}>
                          {el.node.rose_spec.award == "award2022" && (
                            <img
                              src="/img/prize_2021_2022_color_E1.png"
                              alt=""
                            />
                          )}
                        </div>
                      </div>

                      <div className={`${cn.flowerSpec} fle-f mar-b2`}>
                        <div className={`${cn.specBorder}`}></div>
                        <div className={`${cn.flowerSpecDetailColumn}`}>
                          {el.node.rose_spec.roseColor !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <h5>
                                Color&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              </h5>
                              <h5>{el.node.rose_spec.roseColor}</h5>
                            </div>
                          )}

                          {el.node.rose_spec.roseSize !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <h5>
                                Size&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;
                              </h5>
                              <h5>{el.node.rose_spec.roseSize}</h5>
                            </div>
                          )}

                          {el.node.rose_spec.roseShape !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <h5>Shape&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;</h5>
                              <h5>{el.node.rose_spec.roseShape}</h5>
                            </div>
                          )}

                          {el.node.rose_spec.roseScent !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <h5>Scent&emsp;&emsp;&emsp;&emsp;</h5>
                              <h5>{el.node.rose_spec.roseScent}</h5>
                            </div>
                          )}

                          {el.node.rose_spec.rosePetal !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <h5>
                                Petal&emsp;&emsp;&emsp;&emsp;&nbsp;
                                {el.node.rose_spec.rosePetal}
                              </h5>
                            </div>
                          )}

                          {el.node.rose_spec.roseLength !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <h5>Length&emsp;&emsp;&emsp;&nbsp;</h5>
                              <h5>{el.node.rose_spec.roseLength}</h5>
                            </div>
                          )}

                          {el.node.rose_spec.roseHarvest !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <h5>Harvest&emsp;&emsp;&nbsp;&nbsp;&nbsp;</h5>
                              <h5>{el.node.rose_spec.roseHarvest}</h5>
                            </div>
                          )}
                        </div>

                        {/* お気に入りボタン */}
                        {/* <div className={`${cn.flowerSpecDetail}`}>
                        <FavButton favId={el.node.roseFormaId} />
                        <h6>お気に入りに追加</h6>
                      </div> */}
                      </div>

                      {el.node.rose_spec.roseExplanation !== null && (
                        <div className={`${cn.roseExplanation}`}>
                          <h5>{el.node.rose_spec.roseExplanation}</h5>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={`${cn.flowerPicColumn}`}>
                    {el.node.rose_spec.imageSub !== null && (
                      <div className={`${cn.flowerPic1}`}>
                        <img
                          src={el.node.rose_spec.imageSub.mediaItemUrl}
                          alt=""
                        />
                      </div>
                    )}

                    {el.node.featuredImage !== null && (
                      <div className={`${cn.flowerPic2}`}>
                        <img
                          src={el.node.featuredImage.node.mediaItemUrl}
                          alt=""
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
