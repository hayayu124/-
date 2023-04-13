import { useState, useRef, useEffect, memo, useCallback } from "react";

const FavButton = ({ favId, favList, setFavList }) => {
  const [fav, setFav] = useState(false);
  const isFirstRender = useRef(false);

  const handleOn = (id) => {
    if (fav == false) {
      setFav(id);
      setFavList((prevState) => [...prevState, id]);
      console.log(favList);
    } else {
      setFavList(favList.filter((favList, index) => favList !== id));
      setFav(false);
      console.log(favList);
    }
  };

  //More View
  useEffect(() => {
    // このeffectは初回レンダー時のみ呼ばれるeffect
    isFirstRender.current = true;

    if (favList.indexOf(favId) !== -1) {
      setFav(favId);
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      let favJsonList = JSON.stringify(favList, undefined, 1);
      localStorage.setItem("id", favJsonList);
    }
  }, [fav]);

  return (
    <>
      <div
        id={`fav_${favId}`}
        onClick={() => handleOn(favId)}
        className={`flowerFavorite flowerheart ${
          fav == favId && fav !== false ? "active" : ""
        }`}
      ></div>
    </>
  );
};
export default FavButton;
