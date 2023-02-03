import React, { useState, useEffect } from "react";
import cn from "../components/brandNew.module.scss";
import CollectionColumn from "../components/collectionColumn.js";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

export default function BrandNew(props) {
  const brandNewColumn = props.formas;

  //brand-newの品種を抽出
  const brandNew = brandNewColumn.filter(
    (n) => n.node.rose_spec.genre == "Brand-new"
  );

  return (
    <>
      {/* コレクションページ */}
      <section className={`${cn.brandNew} collection sectionSpaceM`}>
        <div className={`collectionTitle titleColumn`}>
          <div className={`collectionText mar-t2`}>
            <h5>おすすめ品種の説明</h5>

            <h2>Collection</h2>
          </div>
        </div>

        {/* 花の品種 */}
        <div className={`collectionColumn sectionSpaceM tex-c grid3`}>
          <div className={`collectionName`}>
            <h3>Brand New</h3>
            <h5 className={`collectionName mar-t3`}>
              おすすめ品種の説明おすすめ品種の説明おすすめ品種の説明おすすめ品種の説明
              <br className="br" />
              おすすめ品種の説明おすすめ品種の説明おすすめ品種の説明おすすめ品種の説明
              <br className="br" />
              おすすめ品種の説明おすすめ品種の説明おすすめ品種の説明おすすめ品種の説明
            </h5>
          </div>

          <CollectionColumn roseCo={brandNew} />
        </div>
      </section>
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
