import React, { useEffect } from "react";
import "../styles/base.css";
import "../styles/global.scss";
import TagManager from "react-gtm-module";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-W5Q8GBS" });
  }, []);

  return <Component {...pageProps} />;
}
