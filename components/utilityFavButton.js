import { useState, useRef, useEffect, memo, useCallback } from "react";

const FavButton = ({ favId, favList }) => {
  const [fav, setFav] = useState(false);

  const handleOn = (id) => {
    if (fav == false) {
      setFav(id);
      favList.push(id);
    } else {
      setFav(false);
      const delateN = favList.indexOf(id);
      favList.splice(delateN, 1);
    }
  };

  useEffect(() => {
    if (window.localStorage) {
      let favJsonList = JSON.stringify(favList, undefined, 1);
      localStorage.setItem("id", favJsonList);
      console.log(localStorage.getItem("id"));
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
