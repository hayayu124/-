import React, { useState, useEffect } from "react";
import cn from "../components/collectionColumn.module.scss";
import Button from "../components/button.js";
import ColorBox from "../components/colorBox.js";

import ScrollEffect from "./utility/utilityscrollEffect";
import LoadingEffect from "./utility/loadingEffect";

export default function CollectionColumn({ roseCo }) {
  //お気に入りのハートボタン
  const [fav, setFav] = useState(false);
  return (
    <>
      {/* 品種１ */}
      {roseCo.map((el, index) => {
        return (
          <div
            key={`collection${index}`}
            className={`flowerBreed sectionSpaceM`}
          >
            {/* PCの表示 */}
            <div className={`flowerBreedPc`}>
              <div className={`flowerDetailColumn`}>
                <div className={`flowerDetail tex-l`}>
                  <div className={`flowerSpecColumn`}>
                    <div className={`flowerSpecDetail`}>
                      <div className={`flowerColorBox`}>
                        <ColorBox roseCo={el.node.colors} />
                      </div>
                      <h5 className={`flowerColorText`}>
                        {el.node.colors.nodes[0].name}
                      </h5>
                    </div>
                    <div className={`flowerName`}>
                      <h3>{el.node.title}</h3>
                    </div>

                    <div className={`flowerSpec`}>
                      <div className={`flowerSpecDetail`}>
                        <h5>Color&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
                        <h5>{el.node.title}</h5>
                      </div>

                      <div className={`flowerSpecDetail`}>
                        <h5>Size&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;</h5>
                        <h5>{el.node.rose_spec.roseSize}</h5>
                      </div>

                      <div className={`flowerSpecDetail`}>
                        <h5>Shape&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;</h5>
                        <h5>{el.node.rose_spec.roseShape}</h5>
                      </div>

                      <div className={`flowerSpecDetail`}>
                        <h5>Scent&emsp;&emsp;&emsp;&emsp;</h5>
                        <h5>{el.node.rose_spec.roseScent}</h5>
                      </div>

                      <div className={`flowerSpecDetail`}>
                        <h5>Length&emsp;&emsp;&emsp;&nbsp;</h5>
                        <h5>{el.node.rose_spec.roseLength}</h5>
                      </div>

                      <div className={`flowerSpecDetail`}>
                        <h5>Harvest&emsp;&emsp;&nbsp;&nbsp;&nbsp;</h5>
                        <h5>{el.node.rose_spec.roseHarvest}</h5>
                      </div>

                      <div className={`flowerSpecDetail`}>
                        <h5>{el.node.rose_spec.roseExplanation}</h5>
                      </div>

                      <div className={`flowerSpecDetail`}>
                        <div
                          onClick={() => {
                            setFav((prevState) => !prevState);
                          }}
                          className={`flowerheart ${fav ? "active" : ""}`}
                        ></div>
                        <h6>お気に入りに追加</h6>
                      </div>
                    </div>
                  </div>
                  <div className={`flowerAwardIcon`}>
                    <img src={el.award} alt="" />
                  </div>
                </div>

                <div className={`flowerPicColumn`}>
                  <div className={`flowerPic1`}>
                    <img src={el.node.featuredImage.node.mediaItemUrl} alt="" />
                  </div>
                  <div className={`flowerPic2`}>
                    <img src={el.node.featuredImage.node.mediaItemUrl} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className={`sectionSpaceM`}>
        <Button />
      </div>
    </>
  );
}
