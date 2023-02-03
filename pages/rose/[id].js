import React, { useState, useEffect } from "react";
import cn from "../../components/flowerDetail.module.scss";
import ColorBox from "../../components/colorBox.js";
import Filter from "../../components/filter.js";

export default function RoseDetail(props) {
  const rose = props.post;
  console.log(rose);

  //お気に入りのハートボタン
  const [fav, setFav] = useState(false);

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

        {/* ボーダー */}
        <div className={`border mar-t1`}></div>

        {/* フラワーのカラム */}
        <div className={`collectionColumn sectionSpaceS tex-c grid3`}>
          {/* 品種１ */}

          <div className={`flowerBreed sectionSpaceS`}>
            {/* PCの表示 */}
            <div className={`flowerBreedPc`}>
              <div className={`flowerTitleColSp tex-l`}>
                <div className={`flowerSpecDetail`}>
                  <div className={`flowerColorBox`}></div>
                  <h5 className={`flowerColorText`}>Yellow</h5>
                </div>
                <div className={`flowerName`}>
                  <h3>{rose.title}</h3>
                </div>
              </div>
              <div className={`flowerDetailColumn`}>
                <div className={`flowerDetail tex-l pos-r`}>
                  <div className={`flowerTitleColPc tex-l`}>
                    <div className={`flowerSpecDetail`}>
                      <div className={`flowerColorBox`}></div>
                      <h5 className={`flowerColorText`}>Yellow</h5>
                    </div>
                    <div className={`flowerName`}>
                      <h3>{rose.title}</h3>
                    </div>
                  </div>
                  <div className={`flowerSpecColumn`}>
                    <div className={`flowerSpec`}>
                      <div className={`flowerSpecDetail`}>
                        <h5>Color&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
                        <h5>{rose.rose_spec.roseColor}</h5>
                      </div>

                      <div className={`flowerSpecDetail`}>
                        <h5>Size&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;</h5>
                        <h5>{rose.rose_spec.roseSize}</h5>
                      </div>

                      <div className={`flowerSpecDetail`}>
                        <h5>Shape&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;</h5>
                        <h5>{rose.rose_spec.roseShape}</h5>
                      </div>

                      <div className={`flowerSpecDetail`}>
                        <h5>Scent&emsp;&emsp;&emsp;&emsp;</h5>
                        <h5>{rose.rose_spec.roseScent}</h5>
                      </div>

                      <div className={`flowerSpecDetail`}>
                        <h5>Length&emsp;&emsp;&emsp;&nbsp;</h5>
                        <h5>{rose.rose_spec.roseLength}</h5>
                      </div>

                      <div className={`flowerSpecDetail`}>
                        <h5>Harvest&emsp;&emsp;&nbsp;&nbsp;&nbsp;</h5>
                        <h5>{rose.rose_spec.roseHarvest}</h5>
                      </div>

                      <div className={`flowerSpecDetail`}>
                        <h5>{rose.rose_spec.roseExplanation}</h5>
                      </div>

                      <div className={`flowerSpecDetail`}>
                        <div
                          onClick={() => {
                            setFav((prevState) => !prevState);
                          }}
                          className={`flowerheart ${fav ? "active" : ""}`}
                        ></div>
                        <p className={`fon5 fonSp4`}>お気に入りに追加</p>
                      </div>
                    </div>
                  </div>
                  <div className={`flowerAwardIcon`}>
                    <img src={rose.rose_spec.award} alt="" />
                  </div>
                </div>

                <div className={`flowerPicColumn`}>
                  <div className={`flowerPic1`}>
                    <img src={rose.featuredImage.node.mediaItemUrl} alt="" />
                  </div>
                  <div className={`flowerPic2`}>
                    <img src={rose.rose_spec.imageSub.mediaItemUrl} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* お気に入り品種 */}
        <div className={`collectionName tex-c sectionSpaceM`}>
          <h3>お気に入りに追加した品種</h3>
        </div>

        <div className={`varietyListColumn varietyListColumn mar-t1 grid1`}>
          {/* <div className={`flowerListColumn mar-t1 `}>
            
            {rose.map((el, index) => {
              return (
                <div
                  key={`varietyList${index}`}
                  className={`flowerBreed1 mar-t3`}
                >
                  <div className={`flowerBreedPic`}>
                    <img src={el.pic2} alt="" />

                    <div className={`flowerFavorite`}>
                      <img src="/img/heart2.png" alt="" />
                    </div>
                  </div>

                  <div className={`flowerColor`}>
                    <div className={`flowerColorBox`}></div>
                    <h6 className={`flowerColorText`}>{el.color}</h6>
                  </div>

                  <div className={`flowerName`}>
                    <h3>{el.name}</h3>
                  </div>

                 
                  <div className={`varietyListSpec`}>
                    <div className={`varietyListSpecBorder`}></div>
                    <div className={`varietyListSpecDetail1`}>
                      <h6>Color&nbsp;&nbsp;&nbsp;&nbsp;{el.color}</h6>
                      <h6>Shape&nbsp;&nbsp;&nbsp;&nbsp;{el.shape}</h6>
                      <h6>Length&nbsp;&nbsp;{el.length}</h6>
                    </div>
                    <div className={`varietyListSpecBorder`}></div>
                    <div className={`varietyListSpecDetail2`}>
                      <h6>
                        Size&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {el.size}
                      </h6>
                      <h6>
                        Scent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{el.scent}
                      </h6>
                      <h6>Harvest&nbsp;&nbsp;{el.harvest}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> */}

          {/* もっと見るボタン */}
          <div className={`moreViewButton sectionSpaceS`}>
            <h5 className={`foncolW moreViewButton`}>一覧へ戻る</h5>

            <div className={`borderBlack`}></div>
            <div className={`borderWhite`}></div>
          </div>
        </div>
      </section>
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
        roseFormas {
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
