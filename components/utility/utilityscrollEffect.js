import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ScrollEffect = (props) => {
  const [ref, inView] = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: true,
  });
  const { children, className, after } = props;
  return (
    <>
      {(() => {
        if (after) {
          return (
            <div
              className={`${className}${inView ? " " + after : ""}`}
              ref={ref}
            >
              {children}
            </div>
          );
        } else {
          return (
            <div className={`int${inView ? " intActive" : ""}`} ref={ref}>
              {children}
            </div>
          );
        }
      })()}
    </>
  );
};
export default ScrollEffect;
