import React, { useState, useEffect, useRef } from "react";
import cn from "../components/varietyList.module.scss";
import CollectionColumn from "../components/collectionColumn.js";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

export default function Favorite(props) {
  const favFormas = props.formas;

  //花のカラムを自動処理
  const [favList, setFavList] = useState([]);
  const isFirstRender = useRef(false);

  // ロード制御
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const body = document.body; //scroll制御
    body.classList.add("active");
    setTimeout(() => {
      setLoad(true);
    }, 500);

    //お気に入り品種のidを配列に格納
    const json = localStorage.getItem("id");
    const array = JSON.parse(json);
    console.log(array.length);

    for (let index = 0; index < array.length; index++) {
      const id = favFormas.filter((n) => n.node.roseFormaId == array[index]);
      console.log(id);
      setFavList((prevState) => [...prevState, id]);
    }
  }, []);

  console.log(favList);

  return (
    <>
      {/* コレクションページ */}

      <section className={`${cn.brandNew} collection sectionSpaceM`}>
        <div className={`collectionTitle titleColumn sec-c`}>
          <div className={`collectionText mar-t2`}>
            <h5>お気に入り</h5>
            <h2>Favorite</h2>
          </div>
        </div>
      </section>
    </>
  );
}

//wordpress
export const getStaticProps = async () => {
  //バラの情報をインポート
  const favFormas = await fetch(`http://ferntastique.tokyo/wp/graphql`, {
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

  const jsonRose = await favFormas.json();
  return {
    props: {
      formas: jsonRose.data.roseFormas.edges,
    },
  };
};
