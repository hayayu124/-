import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ColorBox({ roseCo }) {
  var roseCol = roseCo.nodes;

  return (
    <>
      {(() => {
        if (roseCol[0].name == "Pink") {
          return <div className="flowerColorBox pink"></div>;
        } else if (roseCol[0].name == "Light Pink") {
          return <div className="flowerColorBox lightPink"></div>;
        } else if (roseCol[0].name == "Purple") {
          return <div className="flowerColorBox purple"></div>;
        } else if (roseCol[0].name == "Beige") {
          return <div className="flowerColorBox beige"></div>;
        } else if (roseCol[0].name == "Orange") {
          return <div className="flowerColorBox orange"></div>;
        } else if (roseCol[0].name == "Yellow") {
          return <div className="flowerColorBox yellow"></div>;
        } else if (roseCol[0].name == "White") {
          return <div className="flowerColorBox white"></div>;
        } else if (roseCol.length >= 2 || roseCol[0].name == "Multi Color") {
          return <div className="flowerColorBox multi"></div>;
        }
      })()}
    </>
  );
}
