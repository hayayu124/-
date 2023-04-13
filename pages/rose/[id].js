import React, { useState, useEffect } from "react";
import cn from "../../components/flowerDetail.module.scss";
import ColorBox from "../../components/colorBox.js";
import Filter from "../../components/filter.js";
import Button from "../../components/button.js";
import FavButton from "../../components/utility/utilityFavButton";
import ScrollEffect from "../../components/utility/utilityscrollEffect";

export default function RoseDetail(props) {
  const rose = props.post;
  console.log(rose);

  // ロード制御
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const body = document.body; //scroll制御
    body.classList.add("active");
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);

  //お気に入りのハートボタン
  const [favId, setFavId] = useState(false);
  const [favList, setFavList] = useState([]);

  // function addToFavorites(itemId) {
  //   const id = itemId;
  //   setFavId((prevState) => [...prevState, id]);
  //   localStorage.setItem("favoriteItems", JSON.stringify(favId));
  //   console.log(favId);
  // }

  return (
    <>
      {/* 品種一覧 */}
      <ScrollEffect>
        <section className={`${cn.varietyList} sectionSpaceM mar-b4`}>
          <div className={`titleColumn tex-c mar-b4`}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <h5 className={`fon5 fonSp5 mar-b1`}>品種</h5>

              <h2 className={`fon2 fonSp2 bold mar-b05`}>Variety</h2>

              <div className={`titleBorder sec-c`}></div>
            </ScrollEffect>
          </div>

          <ScrollEffect className={`intMostDelay`} after={`intActive`}>
            {/* ボーダー */}
            {/* <div className={`border mar-t1`}></div> */}

            {/* フラワーのカラム */}
            <div
              className={`${cn.collectionColumn} sectionSpaceS tex-c grid3 sec-c`}
            >
              {/* 品種１ */}

              <div className={`${cn.flowerBreed} sectionSpaceS`}>
                {/* PCの表示 */}
                <div className={`${cn.flowerBreedPc}`}>
                  {/* SPタイトル */}
                  <div className={`${cn.flowerTitleColSp} tex-l mar-b2 fle-f`}>
                    <div className={`${cn.flowerTitle}`}>
                      <div className={`${cn.flowerSpecDetail}`}>
                        {rose.colors.nodes.length !== 0 && (
                          <div className={`${cn.flowerColorBox}`}>
                            <ColorBox roseCo={rose.colors} />
                          </div>
                        )}
                        {rose.colors.nodes.length !== 0 && (
                          <h5 className={`fon5 fonSp5 ${cn.flowerColorText}`}>
                            {rose.colors.nodes[0].name}
                          </h5>
                        )}
                      </div>
                      <div className={`${cn.flowerName}`}>
                        <h3 className={`fon3 fonSp3 bold`}>{rose.title}</h3>
                        {rose.rose_spec.roseSubname !== "" && (
                          <h6>{rose.rose_spec.roseSubname}</h6>
                        )}
                      </div>
                    </div>

                    <div className={`${cn.flowerAwardIcon}`}>
                      {rose.rose_spec.award == "award2022" && (
                        <img src="/img/prize_2021_2022_color_E1.png" alt="" />
                      )}
                    </div>
                  </div>
                  <div className={`${cn.flowerDetailColumn}`}>
                    <div className={`${cn.flowerDetail} tex-l pos-r`}>
                      {/* PCタイトル */}
                      <div className={`${cn.flowerTitleColPc} tex-l fle-f`}>
                        <div className={`${cn.flowerTitle}`}>
                          <div className={`${cn.flowerSpecDetail}`}>
                            {rose.colors.nodes.length !== 0 && (
                              <div className={`${cn.flowerColorBox}`}>
                                <ColorBox roseCo={rose.colors} />
                              </div>
                            )}
                            {rose.colors.nodes.length !== 0 && (
                              <p className={`fon4 fonSp4 ${cn.colorName}`}>
                                {rose.colors.nodes[0].name}
                              </p>
                            )}
                          </div>
                          <div className={`${cn.flowerName}`}>
                            {rose.roseTitle !== null && (
                              <h3 className={`fon3 fonSp3 bold`}>
                                {rose.rose_spec.roseName}
                              </h3>
                            )}
                            {rose.rose_spec.roseSubname !== "" && (
                              <h6 className={`fon5 fonSp5`}>
                                {rose.rose_spec.roseSubname}
                              </h6>
                            )}
                          </div>
                        </div>
                        <div className={`${cn.flowerAwardIcon}`}>
                          {rose.rose_spec.award == "award2022" && (
                            <img
                              src="/img/prize_2021_2022_color_E1.png"
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className={`${cn.flowerSpecColumn}`}>
                        <div className={`${cn.flowerSpec}`}>
                          {rose.rose_spec.roseColor !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <p className={`fon5 fonSp5`}>
                                Color&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              </p>
                              <p className={`fon5 fonSp5`}>
                                {rose.rose_spec.roseColor}
                              </p>
                            </div>
                          )}
                          {rose.rose_spec.roseSize !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <p className={`fon5 fonSp5`}>
                                Size&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;
                              </p>
                              <p className={`fon5 fonSp5`}>
                                {rose.rose_spec.roseSize}
                              </p>
                            </div>
                          )}
                          {rose.rose_spec.roseShape !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <p className={`fon5 fonSp5`}>
                                Shape&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;
                              </p>
                              <p className={`fon5 fonSp5`}>
                                {rose.rose_spec.roseShape}
                              </p>
                            </div>
                          )}
                          {rose.rose_spec.rosePetal !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <p className={`fon5 fonSp5`}>
                                Petal&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {rose.rose_spec.rosePetal}本
                              </p>
                            </div>
                          )}
                          {rose.rose_spec.roseScent !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <p className={`fon5 fonSp5`}>
                                Scent&emsp;&emsp;&emsp;&emsp;
                              </p>
                              <p className={`fon5 fonSp5`}>
                                {rose.rose_spec.roseScent}
                              </p>
                            </div>
                          )}
                          {rose.rose_spec.roseLength !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <p className={`fon5 fonSp5`}>
                                Length&emsp;&emsp;&emsp;&nbsp;
                              </p>
                              <p className={`fon5 fonSp5`}>
                                {rose.rose_spec.roseLength}
                              </p>
                            </div>
                          )}
                          {rose.rose_spec.roseHarvest !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <p className={`fon5 fonSp5`}>
                                Harvest&emsp;&emsp;&nbsp;&nbsp;&nbsp;
                              </p>
                              <p className={`fon5 fonSp5`}>
                                {rose.rose_spec.roseHarvest}本
                              </p>
                            </div>
                          )}
                          {rose.rose_spec.roseExplanation !== null && (
                            <div
                              className={`${cn.flowerSpecDetail} ${cn.roseExplanation}`}
                            >
                              <p className={`fon5 fonSp5`}>
                                {rose.rose_spec.roseExplanation}
                              </p>
                            </div>
                          )}
                          {/* お気に入りボタン */}
                          <div className={`${cn.flowerSpecDetail} mar-t2`}>
                            <div className={`${cn.flowerSpecDetail}`}>
                              <FavButton
                                favId={rose.roseFormaId}
                                favList={favList}
                                setFavList={setFavList}
                              />
                              <p className={`fon5 fonSp4`}>お気に入りに追加</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 写真 */}
                    <div className={`${cn.flowerPicColumn}`}>
                      {rose.featuredImage !== null && (
                        <div className={`${cn.flowerPic1}`}>
                          <img
                            src={rose.rose_spec.imageSub.mediaItemUrl}
                            alt=""
                          />
                        </div>
                      )}
                      {rose.rose_spec.imageSub !== null && (
                        <div className={`${cn.flowerPic2}`}>
                          <img
                            src={rose.featuredImage.node.mediaItemUrl}
                            alt=""
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* お気に入り品種 */}
            {/* <div className={`${cn.collectionName} tex-c sectionSpaceM`}>
              <h3>お気に入りに追加した品種</h3>
            </div> */}
          </ScrollEffect>

          <div
            className={`${cn.varietyListColumn} ${cn.varietyListColumn} mar-t1 grid1`}
          >
            {/* もっと見るボタン */}
            <div className={`moreViewButton sectionSpaceS`}>
              <h5 className={`foncolW moreViewButton`}>一覧へ戻る</h5>

              <div className={`borderBlack`}></div>
              <div className={`borderWhite`}></div>
            </div>
          </div>
        </section>
      </ScrollEffect>
    </>
  );
}

//Wordpress
export async function getStaticProps(context) {
  const resRose = await fetch("http://ferntastique.tokyo/wp/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query SinglePost {
        roseForma(idType: DATABASE_ID, id:"${context.params.id}") {
          date
          content
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          rose_spec {
            award
            genre
            roseColor
            roseExplanation
            roseHarvest
            roseLength
            roseName
            roseSubname
            rosePetal
            roseScent
            roseShape
            roseSize
            imageSub {
              mediaItemUrl
            }
          }
          title
          roseFormaId
          colors {
            nodes {
              name
            }
          }
        }
      }
			`,
    }),
  });

  const json = await resRose.json();

  return {
    props: {
      post: json.data.roseForma,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://ferntastique.tokyo/wp/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query SinglePost {
        roseFormas(first: 1000) {
          nodes {
            roseFormaId
          }
        }
      }
			`,
    }),
  });

  const json = await res.json();
  const posts = json.data.roseFormas.nodes;

  const paths = posts.map((post) => ({
    params: { id: String(post.roseFormaId) },
  }));

  return { paths, fallback: false };
}
