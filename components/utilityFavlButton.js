import { useState, useRef, useEffect, memo, useCallback } from "react";

const FavButton = ({ favId }) => {
  const [fav, setFav] = useState(false);
  const favList = [];

  const handleOn = useCallback(
    (id) => {
      if (fav == false) {
        setFav(id);
        favList.push(id);
        console.log(favList);
      } else {
        setFav(false);
      }
    },
    [fav]
  );

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
