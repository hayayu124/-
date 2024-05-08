import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import cn from "./sectionInstagram.module.scss";

import axios from "axios";
import Link from "next/link";

export default function SectionInstagram(props) {
  const [posted, setPosted] = useState({
    data: [
      {
        caption: "",
        media_url: "",
        permalink: "",
        like_count: "",
        id: "",
      },
    ],
  });
  const user_name = "rosetiquebymiwako"; //ビジネスorクリエイターアカウントの必要あり
  const access_token =
    "EAAGO74DnwMEBO3hfvliN6u3956kOkezsiHGrPixqnZBQZBBp8O4NcNQhVQ1XxDwgB40aZCDb8WZCne74UEA9FaYZA5v1KGiidjJoph6wZCF8ZCV8TQyQZBLlLCBVZCixVvZADn5yIPiz4NFjxjZBfPXntTwwzPYAoSFZC86iySNYmyViiYhgfamXZBBMbYngqZBl6peGr4cPoAGHGPy43aSocZD";
  const user_id = "17841401112572637";
  const get_count = 7; //取得したい投稿数
  const fetchPost = async () => {
    const res = await axios(
      `https://graph.facebook.com/v17.0/${user_id}?fields=business_discovery.username(${user_name}){id,followers_count,media_count,ig_id,media.limit(${get_count}){caption,media_url,permalink,like_count}}&access_token=${access_token}`
    );
    setPosted(res.data.business_discovery.media);
  };

  useLayoutEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      <section className={cn.instagram + " " + "pos-r"}>
        <div className={cn.inner + " " + ""}>
          <div className={`${cn.titleWrap} tex-c`}>
            <h1>Instagram</h1>
            <div className={`${cn.border} sec-c`}></div>
          </div>

          <div className={cn.instagramWrap + " " + ""}>
            {posted.data.map((post, key) => {
              return (
                <>
                  <div
                    key={`instagram${key}`}
                    className={cn.content + " " + ""}
                  >
                    <a
                      className={cn.imageLink}
                      href={post.permalink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className={cn.image + " " + "iframe-11"}>
                        <img src={post.media_url} alt="" />
                      </div>
                    </a>
                  </div>
                </>
              );
            })}
          </div>
          {/* <div className={cn.buttonWrap + " " + "tex-c"}>
            <div className="button">
              <a
                href="https://www.instagram.com/rosetiquebymiwako/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div> */}

          {/* もっと見るボタン */}
          <div className={`${cn.tiqueButton}`}>
            <Link
              href="https://www.instagram.com/rosetiquebymiwako/"
              target="_blank"
              rel="noreferrer"
            >
              <div className={`sectionSpaceS tex-c pos-r ${cn.button} sec-c`}>
                <div className={`${cn.btn} ${cn.bgskew}`}>
                  <span className={`fon4 fonSp4 bold`}>Instagram</span>
                </div>
                <div className={`${cn.borderBlack} pos-a`}></div>
                <div className={`${cn.borderWhite} pos-a`}></div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
