import React, { useState, useEffect } from "react";
import cn from "../components/brandNew.module.scss";
import CollectionColumn from "../components/collectionColumn.js";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

export default function miwakoTiqueSerious(props) {
  const tique = props.formas;

  // ロード制御
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const body = document.body; //scroll制御
    body.classList.add("active");
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);

  //brand-newの品種を抽出
  const tiqueCo = tique.filter(
    (n) => n.node.rose_spec.genre == "Miwako Tique Series"
  );

  return (
    <>
      {/* コレクションページ */}
      <ScrollEffect>
        <section className={`${cn.collection} sectionSpaceM`}>
          <div className={`collectionTitle titleColumn`}>
            <div className={`collectionText mar-t2`}>
              <ScrollEffect className={`intMoreDelay`} after={`intActive`}>
                <h5>おすすめ品種の説明</h5>
              </ScrollEffect>

              <ScrollEffect className={`intMostDelay`} after={`intActive`}>
                <h2>Collection</h2>
              </ScrollEffect>
            </div>
          </div>

          {/* 花の品種 */}
          <div className={`collectionColumn sectionSpaceM tex-c grid3`}>
            <div className={`collectionName`}>
              <ScrollEffect className={`intMoreDelay`} after={`intActive`}>
                <h3>Miwako Tique Serious</h3>
              </ScrollEffect>

              <ScrollEffect className={`intMostDelay`} after={`intActive`}>
                <h5 className={`collectionName mar-t3`}>
                  おすすめ品種の説明おすすめ品種の説明おすすめ品種の説明おすすめ品種の説明
                  <br className="br" />
                  おすすめ品種の説明おすすめ品種の説明おすすめ品種の説明おすすめ品種の説明
                  <br className="br" />
                  おすすめ品種の説明おすすめ品種の説明おすすめ品種の説明おすすめ品種の説明
                </h5>
              </ScrollEffect>
            </div>

            <ScrollEffect className={`intMostDelay`} after={`intActive`}>
              <CollectionColumn roseCo={tiqueCo} />
            </ScrollEffect>
          </div>
        </section>
      </ScrollEffect>
    </>
  );
}

//wordpress
export const getStaticProps = async () => {
  //wordpressシダのデータ

  //バラの情報をインポート
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
