import React, { useState, useEffect } from "react";
import cn from "../components/toppage.module.scss";
import Head from "next/head";
import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

export default function Top() {
  const joinColumn = [
    {
      title: "① ダウンロード",
      description:
        "応援したいメンバーのダウンロードページからロードモバイルをダウンロード！イベントには参加条件があります。ページ下部の禁止事項をご確認ください。",
    },

    {
      title: "② コロニーに移動",
      description:
        "城レベル５以下でしか使用できない「初心者転送の巻物」を使い、自分の城をギルドのメンバーが集まるコロニーに移動！※。",
    },
  ];

  // ロード制御

  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <>
      <Head>
        <title>ロードモバイル</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        {/* OGP&favicon */}
        <meta property="og:site_name" content="Lord mobile" />
        <meta property="og:locale" content="ja_JP" />

        <meta property="og:title" content="Lord mobile" />
        <meta property="og:description" content="ページの説明文" />
        <meta property="og:url" content="https://lordsmobile-g1.com/" />
        <meta property="og:image" content="/img/lordsmobile_site_ogp.png" />
        <meta property="og:type" content="ページの種類" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/fav/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/fav/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/fav/favicon-16x16.png"
        />
        <link rel="manifest" href="/fav/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/fav/safari-pinned-tab.svg"
          color="#d9795a"
        />
        <link rel="shortcut icon" href="/fav/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/fav/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* KV */}
      <div className={`${cn.kv}`}>
        {/* タイトル */}
        <div
          className={`${cn.fv_title_logo} ${
            load ? cn.fvtitleAnimationActive : ""
          } pc`}
        >
          <img src="/img/fv_title_logo.png" alt="" />
        </div>

        <div
          className={`${cn.fv_title_logo} ${
            load ? cn.fvtitleAnimationActive : ""
          } sp`}
        >
          <img src="/img/fv_sp_title_logo.png" alt="" />
        </div>

        {/* タイトル背景 */}
        <div
          className={`${cn.fv_pattern_center} ${
            load ? cn.fvTitleBackAnimation : ""
          } pc`}
        >
          <img src="/img/fv_pattern_center.png" alt="" />
        </div>

        <div
          className={`${cn.fv_pattern_center} ${
            load ? cn.fvTitleBackAnimation : ""
          } sp`}
        >
          <img src="/img/fv_sp_pattern_center.png" alt="" />
        </div>

        {/* LinQImage */}
        <div
          className={`${cn.fv_linQ} ${cn.fvCenterAnimation} ${
            load ? cn.fvCenterAnimationActive : ""
          } pc`}
        >
          <img src="/img/fv_linQ.png" alt="" />
        </div>

        <div
          className={`${cn.fv_linQ} ${cn.fvCenterAnimation} ${
            load ? cn.fvCenterAnimationActive : ""
          } sp`}
        >
          <img src="/img/fv_sp_linQ.png" alt="" />
        </div>

        <div
          className={`${cn.fv_linQ_part} ${cn.fvCenterAnimation} ${
            load ? cn.fvCenterAnimationActive : ""
          } sp`}
        >
          <img src="/img/fv_sp_linQ_2.png" alt="" />
        </div>

        {/* キャラクター左側 */}

        <div
          className={`${cn.fv_charcter_left} ${cn.fvCharcterLeftColumn} ${
            load ? cn.intActiveLeft : ""
          }  pc`}
        >
          <img src="/img/fv_charcter_left.png" alt="" />
        </div>

        <div
          className={`${cn.fv_charcter_left} ${cn.fvCharcterLeftColumn} ${
            load ? cn.intActiveLeft : ""
          } sp`}
        >
          <img src="/img/fv_sp_charcter_left.png" alt="" />
        </div>

        <div
          className={`${cn.fv_charcter_leftBottom} ${cn.fvCharcterLeftColumn} ${
            load ? cn.intActiveLeft : ""
          } sp`}
        >
          <img src="/img/fv_sp_charcter_leftBottom.png" alt="" />
        </div>

        {/* キャラクター右側 */}
        <div
          className={`${cn.fv_charcter_right} ${cn.fvCharcterRightColumn} ${
            load ? cn.intActiveRight : ""
          } pc`}
        >
          <img src="/img/fv_charcter_right.png" alt="" />
        </div>

        <div
          className={`${cn.fv_charcter_right} ${cn.fvCharcterRightColumn} ${
            load ? cn.intActiveRight : ""
          } sp`}
        >
          <img src="/img/fv_sp_charcter_right.png" alt="" />
        </div>

        <div
          className={`${cn.fv_charcter_rightBottom} ${
            cn.fvCharcterRightColumn
          } ${load ? cn.intActiveRight : ""} sp`}
        >
          <img src="/img/fv_sp_charcter_rightBottom.png" alt="" />
        </div>
      </div>

      {/*コピーセクション*/}
      <div className={cn.copyPattern}>
        <img src="/img/copyPattern.png" alt="" />
      </div>

      <div className={cn.copyPatternSP}>
        <img src="/img/copyPatternSP.png" alt="" />
      </div>

      <ScrollEffect>
        <section className={cn.copy + " " + "grid1"}>
          <div className={cn.copyText}>
            {/* フキダシ */}
            <div className={`${cn.copySubTitle} ${cn.copySubTitleBorder}`}>
              <ScrollEffect className={cn.int} after="svg1">
                <svg
                  version="1.1"
                  id="レイヤー_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100%"
                  viewBox="-5 -5 553.221 240.672"
                >
                  <g
                    id="合体_17"
                    data-name="合体 17"
                    transform="translate(4278 -13914.868)"
                    fill="none"
                  >
                    <path
                      d="M-4192.962,14117.723l-65.878,6.087L-4278,13963.563l527.062-48.7,19.159,160.246-411.448,38.014-20.669,37.412Z"
                      stroke="none"
                    />
                    <path
                      id="合体_17"
                      data-name="合体 17"
                      d="M-4192.962,14117.723l-65.878,6.087L-4278,13963.563l527.062-48.7,19.159,160.246-411.448,38.014-20.669,37.412Z"
                      transform="translate(4278 -13914.868)"
                      fill="#6b5c54"
                    />
                  </g>
                </svg>
              </ScrollEffect>
            </div>

            <ScrollEffect
              className={`${cn.copySubTitle} ${cn.copySubTitleCoating}`}
              after={`${cn.after}`}
            >
              <img src="/img/hukidasi_coating.svg" alt="" />
            </ScrollEffect>

            <ScrollEffect
              className={`${cn.copySubTitle} ${cn.copySubTitleText}`}
              after={`${cn.after}`}
            >
              <img src="/img/hukidasi_text.svg" alt="" />
            </ScrollEffect>

            <ScrollEffect className={cn.intDelay} after={cn.intActive}>
              <h2>あなたの活躍で</h2>
              <h1>優勝チームが決まる！</h1>

              <div className={cn.copyBorder}>
                <img src="/img/copyBorder.png" alt="" />
              </div>

              <div className={cn.copyImage}>
                <div className={cn.copyImageColumn}>
                  <ScrollEffect
                    className={`${cn.copyCharcterImage} ${cn.intMostDelay}`}
                    after={cn.intActive}
                  >
                    <img src="/img/copyImage.png" alt="" />
                  </ScrollEffect>

                  <ScrollEffect
                    className={`${cn.copyBackImage} ${cn.intMoreDelay}`}
                    after={cn.intActive}
                  >
                    <img src="/img/copyImageBack.png" alt="" />
                  </ScrollEffect>
                </div>
              </div>
            </ScrollEffect>
          </div>
        </section>
      </ScrollEffect>

      <div className={`${cn.wrapper}`}>
        {/* チームセクション*/}
        <section className={cn.team}>
          <ScrollEffect>
            <ScrollEffect
              className={`${cn.teamDecoration} ${cn.intMostDelay}`}
              after={cn.intActive}
            >
              <img src="/img/TEAM.png" alt="" />
            </ScrollEffect>

            <ScrollEffect
              className={`${cn.teamDecorationCircle} ${cn.intMoreDelay}`}
              after={cn.intActive}
            >
              <img src="/img/team_circle.png" alt="" />
            </ScrollEffect>

            <div className={cn.teamTittle}>
              <h1>
                推しチームのギルドに入り、
                <br />
                仲間と協力して勝利を掴み取れ！
              </h1>

              <div className={cn.teamDecorationBorder}>
                <img src="/img/team_border.png" alt="" />
              </div>
            </div>
          </ScrollEffect>

          {/* チームA*/}
          <div className={cn.teamDetail}>
            <div className={cn.teamAOverview + " " + "grid3"}>
              <div className={cn.teamAOverviewTitleBorder}>
                <img src="/img/teamA_title_border.png" alt="" />
              </div>

              <div className={cn.teamAOverviewTitleCoating}>
                <img src="/img/teamA_title_coating.svg" alt="" />
              </div>

              <div className={cn.teamAOverviewBorder}>
                <ScrollEffect className={cn.int} after="svg1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -5 1525 570"
                  >
                    <path
                      id="パス_102"
                      data-name="パス 102"
                      d="M5,0H1520V557H0Z"
                      fill="none"
                    />
                  </svg>
                </ScrollEffect>
              </div>

              <div className={cn.teamAOverviewTitle}>
                <img src="/img/teamA_title.png" alt="" />
              </div>

              <ScrollEffect className={cn.teamAOverviewImage} after={cn.after}>
                <img src="/img/teamA_image.png" alt="" />
              </ScrollEffect>

              <ScrollEffect
                className={cn.teamAOverviewSubName}
                after={cn.after}
              >
                <h4>
                  Suzumoto Riona / Takaki Yuumi /<br className={`brSp`} />
                  Arimura Minami / Oozora Riko
                </h4>
              </ScrollEffect>
            </div>

            {/* チームAメンバーセクション */}
            <ScrollEffect className={cn.intDelay} after={cn.intActive}>
              <div className={cn.teamMember + " " + "grid1"}>
                {/* メンバー1*/}
                <div className={`${cn.teamMemberDetail} ${cn.red}`}>
                  <div className={cn.teamMemberContents}>
                    <img src="/img/LinQ_645-涼本.png" alt="" />

                    <div className={`${cn.memberName} mar-t2`}>
                      <h2 className={cn.foncol}>涼本 理央那</h2>
                      {/* twitterリンク */}
                      <a href="https://twitter.com/riona_suzumoto">
                        <div className={cn.twitterIcon}>
                          <img
                            src="/img/2021 Twitter logo - white.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </div>
                    <h4 className={`${cn.foncol} ${cn.memberSubName} mar-b2`}>
                      Suzumoto Riona
                    </h4>

                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>ギルド名 : Suzumoto Riona A</h5>
                    </div>
                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>ギルドタグ : srA</h5>
                    </div>
                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>座標 : K:1020 X:479 Y:948</h5>
                    </div>

                    <div className={`${cn.button} mar-t1`}>
                      <div className={`${cn.buttonWidth}`}>
                        {/*アプリのダウンロードリンク */}
                        <a href="https://g.igg.com/bbwKy1">
                          <div className={`${cn.buttonContets}`}>
                            <h6 className={cn.foncol}>アプリをダウンロード</h6>
                          </div>
                        </a>
                      </div>

                      <div className={`${cn.buttonWidth}`}>
                        {/*アプリのダウンロードリンク */}
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWquvAICj5FWBFYjjjsxiFTIIrZRoE2fhGmfAydyuuronuJA/viewform">
                          <div className={`${cn.buttonContets}`}>
                            <h6 className={cn.foncol}>ギルドに参加</h6>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* メンバー2*/}
                <div className={`${cn.teamMemberDetail} ${cn.roseRed}`}>
                  <div className={cn.teamMemberContents}>
                    <img src="/img/LinQ_645-高木.png" alt="" />

                    <div className={`${cn.memberName} mar-t2`}>
                      <h2 className={cn.foncol}>髙木 悠美</h2>

                      {/* twitterリンク */}
                      <a href="https://twitter.com/yuumi_takaki">
                        <div className={cn.twitterIcon}>
                          <img
                            src="/img/2021 Twitter logo - white.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </div>
                    <h4 className={`${cn.foncol} ${cn.memberSubName} mar-b2`}>
                      Takaki Yuumi
                    </h4>

                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>ギルド名 : Takaki Yuumi A</h5>
                    </div>
                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>ギルドタグ : tyA</h5>
                    </div>
                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>座標 : K:1020 X:437 Y:402</h5>
                    </div>

                    <div className={`${cn.button} mar-t1`}>
                      <div className={`${cn.buttonWidth}`}>
                        {/*アプリのダウンロードリンク */}
                        <a href="https://g.igg.com/R6oAie">
                          <div className={`${cn.buttonContets}`}>
                            <h6 className={cn.foncol}>アプリをダウンロード</h6>
                          </div>
                        </a>
                      </div>

                      <div className={`${cn.buttonWidth}`}>
                        {/*アプリのダウンロードリンク */}
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWquvAICj5FWBFYjjjsxiFTIIrZRoE2fhGmfAydyuuronuJA/viewform">
                          <div className={`${cn.buttonContets}`}>
                            <h6 className={cn.foncol}>ギルドに参加</h6>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* メンバー3*/}
                <div className={`${cn.teamMemberDetail} ${cn.turquoise}`}>
                  <div className={cn.teamMemberContents}>
                    <img src="/img/LinQ_645-有村.png" alt="" />

                    <div className={`${cn.memberName} mar-t2`}>
                      <h2 className={cn.foncol}>有村 南海</h2>

                      {/* twitterリンク */}
                      <a href="https://twitter.com/arimura_minami">
                        <div className={cn.twitterIcon}>
                          <img
                            src="/img/2021 Twitter logo - white.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </div>
                    <h4 className={`${cn.foncol} ${cn.memberSubName} mar-b2`}>
                      Arimura Minami
                    </h4>

                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>ギルド名 : Arimura Minami A</h5>
                    </div>
                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>ギルドタグ : amA</h5>
                    </div>
                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>座標 : K:1020 X:67 Y:166</h5>
                    </div>

                    <div className={`${cn.button} mar-t1`}>
                      <div className={`${cn.buttonWidth}`}>
                        {/*アプリのダウンロードリンク */}
                        <a href="https://g.igg.com/nm3Ftd">
                          <div className={`${cn.buttonContets}`}>
                            <h6 className={cn.foncol}>アプリをダウンロード</h6>
                          </div>
                        </a>
                      </div>

                      <div className={`${cn.buttonWidth}`}>
                        {/*アプリのダウンロードリンク */}
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWquvAICj5FWBFYjjjsxiFTIIrZRoE2fhGmfAydyuuronuJA/viewform">
                          <div className={`${cn.buttonContets}`}>
                            <h6 className={cn.foncol}>ギルドに参加</h6>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* メンバー4*/}
                <div className={`${cn.teamMemberDetail} ${cn.orange}`}>
                  <div className={cn.teamMemberContents}>
                    <img src="/img/LinQ_645-大空.png" alt="" />

                    <div className={`${cn.memberName} mar-t2`}>
                      <h2 className={cn.foncol}>大空 莉子</h2>

                      {/* twitterリンク */}
                      <a href="https://twitter.com/oozora_riko">
                        <div className={cn.twitterIcon}>
                          <img
                            src="/img/2021 Twitter logo - white.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </div>
                    <h4 className={`${cn.foncol} ${cn.memberSubName} mar-b2`}>
                      Oozora Riko
                    </h4>

                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>ギルド名 : Oozora Riko A</h5>
                    </div>
                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>ギルドタグ : orA</h5>
                    </div>
                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>座標 : K:1020 X:442 Y:995</h5>
                    </div>

                    <div className={`${cn.button} mar-t1`}>
                      <div className={`${cn.buttonWidth}`}>
                        {/*アプリのダウンロードリンク */}
                        <a href="https://g.igg.com/VgS0BT">
                          <div className={`${cn.buttonContets}`}>
                            <h6 className={cn.foncol}>アプリをダウンロード</h6>
                          </div>
                        </a>
                      </div>

                      <div className={`${cn.buttonWidth}`}>
                        {/*アプリのダウンロードリンク */}
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWquvAICj5FWBFYjjjsxiFTIIrZRoE2fhGmfAydyuuronuJA/viewform">
                          <div className={`${cn.buttonContets}`}>
                            <h6 className={cn.foncol}>ギルドに参加</h6>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollEffect>
          </div>

          {/* チームB*/}
          <div className={cn.teamDetail}>
            <ScrollEffect>
              <div className={cn.teamAOverview + " " + "grid4"}>
                <div className={cn.teamAOverviewTitleBorder}>
                  <img src="/img/teamA_title_border.png" alt="" />
                </div>

                <div className={cn.teamAOverviewTitleCoating}>
                  <img src="/img/teamA_title_coating.svg" alt="" />
                </div>

                <div className={cn.teamAOverviewBorder}>
                  <ScrollEffect className={cn.int} after="svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1205"
                      height="557"
                      viewBox="-5 0 1230 565"
                    >
                      <path
                        id="長方形_316"
                        data-name="長方形 316"
                        d="M0,0H1220V557H0Z"
                        fill="none"
                      />
                    </svg>
                  </ScrollEffect>
                </div>

                <div className={`${cn.teamAOverviewTitle}`}>
                  <img src="/img/teamB_title.png" alt="" />
                </div>

                <ScrollEffect
                  className={cn.teamAOverviewImage}
                  after={cn.after}
                >
                  <img src="/img/teamB_image.png" alt="" />
                </ScrollEffect>

                <ScrollEffect
                  className={cn.teamAOverviewSubName}
                  after={cn.after}
                >
                  <h4>Kaizuki Rana / Kaneko Miyu / Kuroda Rei</h4>
                </ScrollEffect>
              </div>
            </ScrollEffect>

            {/* チームBメンバーカラム */}
            <ScrollEffect className={cn.intDelay} after={cn.intActive}>
              <div className={cn.teamMember + " " + "grid1"}>
                {/* メンバー5*/}
                <div className={`${cn.teamMemberDetail} ${cn.green}`}>
                  <div className={cn.teamMemberContents}>
                    <img src="/img/LinQ_645-海月.png" alt="" />

                    <div className={`${cn.memberName} mar-t2`}>
                      <h2 className={cn.foncol}>海月 らな</h2>
                      {/* twitterリンク */}
                      <a href="https://twitter.com/rana_kaizuki">
                        <div className={cn.twitterIcon}>
                          <img
                            src="/img/2021 Twitter logo - white.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </div>
                    <h4 className={`${cn.foncol} ${cn.memberSubName} mar-b2`}>
                      Kaizuki Rana
                    </h4>

                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>ギルド名 : Kaizuki Rana B</h5>
                    </div>
                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>ギルドタグ : krB</h5>
                    </div>
                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>座標 : K:1020 X:418 Y:875</h5>
                    </div>

                    <div className={`${cn.button} mar-t1`}>
                      <div className={`${cn.buttonWidth}`}>
                        {/*アプリのダウンロードリンク */}
                        <a href="https://g.igg.com/IjAWuK">
                          <div className={`${cn.buttonContets}`}>
                            <h6 className={cn.foncol}>アプリをダウンロード</h6>
                          </div>
                        </a>
                      </div>

                      <div className={`${cn.buttonWidth}`}>
                        {/*アプリのダウンロードリンク */}
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWquvAICj5FWBFYjjjsxiFTIIrZRoE2fhGmfAydyuuronuJA/viewform">
                          <div className={`${cn.buttonContets}`}>
                            <h6 className={cn.foncol}>ギルドに参加</h6>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* メンバー6*/}
                <div className={`${cn.teamMemberDetail} ${cn.blue}`}>
                  <div className={cn.teamMemberContents}>
                    <img src="/img/LinQ_645-金子.png" alt="" />

                    <div className={`${cn.memberName} mar-t2`}>
                      <h2 className={cn.foncol}>金子 みゆ</h2>

                      {/* twitterリンク */}
                      <a href="https://twitter.com/kaneko_miyu">
                        <div className={cn.twitterIcon}>
                          <img
                            src="/img/2021 Twitter logo - white.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </div>
                    <h4 className={`${cn.foncol} ${cn.memberSubName} mar-b2`}>
                      Kaneko Miyu
                    </h4>

                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>ギルド名 : Kaneko Miyu B</h5>
                    </div>
                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>ギルドタグ : kmB</h5>
                    </div>
                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>座標 : K:1020 X:160 Y:779</h5>
                    </div>

                    <div className={`${cn.button} mar-t1`}>
                      <div className={`${cn.buttonWidth}`}>
                        {/*アプリのダウンロードリンク */}
                        <a href="https://g.igg.com/eMx0Tn">
                          <div className={`${cn.buttonContets}`}>
                            <h6 className={cn.foncol}>アプリをダウンロード</h6>
                          </div>
                        </a>
                      </div>

                      <div className={`${cn.buttonWidth}`}>
                        {/*アプリのダウンロードリンク */}
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWquvAICj5FWBFYjjjsxiFTIIrZRoE2fhGmfAydyuuronuJA/viewform">
                          <div className={`${cn.buttonContets}`}>
                            <h6 className={cn.foncol}>ギルドに参加</h6>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* メンバー7*/}
                <div className={`${cn.teamMemberDetail} ${cn.yellow}`}>
                  <div className={cn.teamMemberContents}>
                    <img src="/img/LinQ_645-黒田.png" alt="" />

                    <div className={`${cn.memberName} mar-t2`}>
                      <h2 className={cn.foncol}>黒田 れい</h2>

                      {/* twitterリンク */}
                      <a href="https://twitter.com/kuroda_rei_1112">
                        <div className={cn.twitterIcon}>
                          <img
                            src="/img/2021 Twitter logo - white.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </div>
                    <h4 className={`${cn.foncol} ${cn.memberSubName} mar-b2`}>
                      Kuroda Rei
                    </h4>

                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>ギルド名 : Kuroda Rei B</h5>
                    </div>
                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>ギルドタグ : krB</h5>
                    </div>
                    <div className={`${cn.teamMemberguildInfo}`}>
                      <h5 className={cn.foncol}>座標 : K:1020 X:302 Y:970</h5>
                    </div>

                    <div className={`${cn.button} mar-t1`}>
                      <div className={`${cn.buttonWidth}`}>
                        {/*アプリのダウンロードリンク */}
                        <a href="https://g.igg.com/5GFm8k">
                          <div className={`${cn.buttonContets}`}>
                            <h6 className={cn.foncol}>アプリをダウンロード</h6>
                          </div>
                        </a>
                      </div>

                      <div className={`${cn.buttonWidth}`}>
                        {/*アプリのダウンロードリンク */}
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWquvAICj5FWBFYjjjsxiFTIIrZRoE2fhGmfAydyuuronuJA/viewform">
                          <div className={`${cn.buttonContets}`}>
                            <h6 className={cn.foncol}>ギルドに参加</h6>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollEffect>
          </div>
        </section>

        {/*特典*/}
        <section className={`${cn.reward}`}>
          <ScrollEffect>
            <section className={`${cn.join} tex-c`}>
              <ScrollEffect
                className={`${cn.rewardDecoration} ${cn.intMostDelay}`}
                after={cn.intActive}
              >
                <img src="/img/reward.png" alt="" />
              </ScrollEffect>

              <div className={cn.teamTittle}>
                <h1>
                  優勝チーム・イベント上位者には
                  <br className={`br`} />
                  豪華特典が目白押し！
                </h1>
              </div>

              <ScrollEffect
                className={`${cn.rewardDecorationCircle} ${cn.intMoreDelay}`}
                after={cn.intActive}
              >
                <img src="/img/2circle.png" alt="" />
              </ScrollEffect>
            </section>
          </ScrollEffect>

          <div className={`${cn.teamRewardContents} grid4`}>
            {/* フキダシ */}
            <div className={`${cn.rewardSectionHukidashi}`}>
              <div className={`${cn.rewardSectionHukidashiBorder}`}>
                <ScrollEffect className={cn.int} after="svg1">
                  <svg
                    version="1.1"
                    id="レイヤー_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100%"
                    viewBox="-5 -5 553.221 240.672"
                  >
                    <g
                      id="合体_17"
                      data-name="合体 17"
                      transform="translate(4278 -13914.868)"
                      fill="none"
                    >
                      <path
                        d="M-4192.962,14117.723l-65.878,6.087L-4278,13963.563l527.062-48.7,19.159,160.246-411.448,38.014-20.669,37.412Z"
                        stroke="none"
                      />
                      <path
                        id="合体_17"
                        data-name="合体 17"
                        d="M-4192.962,14117.723l-65.878,6.087L-4278,13963.563l527.062-48.7,19.159,160.246-411.448,38.014-20.669,37.412Z"
                        transform="translate(4278 -13914.868)"
                        fill="#6b5c54"
                      />
                    </g>
                  </svg>
                </ScrollEffect>
              </div>

              <ScrollEffect
                className={`${cn.rewardSectionHukidashiCoating}`}
                after={`${cn.after}`}
              >
                <img src="/img/hukidasi_1_coating.svg" alt="" />
              </ScrollEffect>

              <ScrollEffect
                className={`${cn.rewardSectionHukidashiTitle} ${cn.hukidasiText_1}`}
                after={`${cn.after}`}
              >
                <img src="/img/hukidasi_1_text.png" alt="" />
              </ScrollEffect>
            </div>

            <ScrollEffect className={cn.intDelay} after={cn.intActive}>
              <div className={`${cn.systemDetail} ${cn.rewardSquare}`}>
                <h4>
                  優勝チームメンバーは広告モデルとして、
                  <br className={`br`} />
                  交通広告にてビジュアル掲載！！
                </h4>
              </div>
            </ScrollEffect>
          </div>

          <div className={`${cn.eventRewardSection}`}>
            <div className={`${cn.rewardSectionTittle}`}>
              <img src="/img/rewardSectionTittle.png" alt="" />
            </div>

            <div className={cn.eventRewardDecoration}>
              <img src="/img/eventRewardPic_1.png" alt="" />
            </div>

            <div className={cn.eventRewardDecoration_2}>
              <img src="/img/2square.png" alt="" />
            </div>

            <h4 className={`${cn.rewardSectionText}`}>
              イベント上位の参加者も
              <br className={`brSp`} />
              豪華プレゼントがもらえる！
            </h4>
          </div>

          <div className={`${cn.rewardColumn} tex-c  grid4`}>
            {/* フキダシ */}
            <div className={`${cn.rewardSectionHukidashi}`}>
              <div className={`${cn.rewardSectionHukidashiBorder}`}>
                <ScrollEffect className={cn.int} after="svg1">
                  <svg
                    version="1.1"
                    id="レイヤー_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100%"
                    viewBox="-5 -5 553.221 240.672"
                  >
                    <g
                      id="合体_17"
                      data-name="合体 17"
                      transform="translate(4278 -13914.868)"
                      fill="none"
                    >
                      <path
                        d="M-4192.962,14117.723l-65.878,6.087L-4278,13963.563l527.062-48.7,19.159,160.246-411.448,38.014-20.669,37.412Z"
                        stroke="none"
                      />
                      <path
                        id="合体_17"
                        data-name="合体 17"
                        d="M-4192.962,14117.723l-65.878,6.087L-4278,13963.563l527.062-48.7,19.159,160.246-411.448,38.014-20.669,37.412Z"
                        transform="translate(4278 -13914.868)"
                        fill="#6b5c54"
                      />
                    </g>
                  </svg>
                </ScrollEffect>
              </div>

              <ScrollEffect
                className={`${cn.rewardSectionHukidashiCoating}`}
                after={`${cn.after}`}
              >
                <img src="/img/hukidasi_1_coating.svg" alt="" />
              </ScrollEffect>

              <ScrollEffect
                className={`${cn.rewardSectionHukidashiTitle} ${cn.hukidasiText_2}`}
                after={`${cn.after}`}
              >
                <img src="/img/hukidasi_2_text.png" alt="" />
              </ScrollEffect>
            </div>

            {/* 各メンバーギルド内パワーランキング１位〜５位*/}
            <ScrollEffect className={cn.intDelay} after={cn.intActive}>
              <div className={`${cn.systemDetail} ${cn.rewardSquare}`}>
                <h4 className={`${cn.rewardSectionSubTittle}`}>
                  ジョブネット主催・LinQワンマンライブ優先入場券※＋サイン入りチェキ
                  <br className={`br}`} />
                  or
                  <br className={`br}`} />
                  LinQメンバー全員からのメッセージ動画＋名前・サイン入りチェキ
                  <br className={`br}`} />
                  の2つより特典を選べる！
                </h4>
              </div>

              <h6>
                ※ 特別公演は除きます。
                <br className={`brSp`} />
                チケットは別途必要になります。
              </h6>
            </ScrollEffect>
          </div>

          <div className={`${cn.rewardColumn} tex-c  grid4`}>
            {/* フキダシ */}
            <div className={`${cn.rewardSectionHukidashi}`}>
              <div className={`${cn.rewardSectionHukidashiBorder}`}>
                <ScrollEffect className={cn.int} after="svg1">
                  <svg
                    version="1.1"
                    id="レイヤー_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100%"
                    viewBox="-5 -5 553.221 240.672"
                  >
                    <g
                      id="合体_17"
                      data-name="合体 17"
                      transform="translate(4278 -13914.868)"
                      fill="none"
                    >
                      <path
                        d="M-4192.962,14117.723l-65.878,6.087L-4278,13963.563l527.062-48.7,19.159,160.246-411.448,38.014-20.669,37.412Z"
                        stroke="none"
                      />
                      <path
                        id="合体_21"
                        data-name="合体 21"
                        d="M66.26,161.364H0V0H528.715V161.364H122.108L94.5,200.953Z"
                        transform="matrix(0.995, -0.105, 0.105, 0.995, -0.001, 55.269)"
                        fill="url(#linear-gradient)"
                      />
                    </g>
                  </svg>
                </ScrollEffect>
              </div>

              <ScrollEffect
                className={`${cn.rewardSectionHukidashiCoating}`}
                after={`${cn.after}`}
              >
                <img src="/img/hukidasi_3_coating.svg" alt="" />
              </ScrollEffect>

              <ScrollEffect
                className={`${cn.rewardSectionHukidashiTitle} ${cn.hukidasiText_2}`}
                after={`${cn.after}`}
              >
                <img src="/img/hukidasi_3_text.png" alt="" />
              </ScrollEffect>
            </div>

            {/* 各メンバーギルド内パワーランキング１位〜５位*/}
            <ScrollEffect className={cn.intDelay} after={cn.intActive}>
              <div className={`${cn.systemDetail} ${cn.rewardSquare}`}>
                <h4 className={`${cn.rewardSectionSubTittle} `}>
                  参加ギルドのLinQメンバーのチーム全員のメッセージ付きデジショ
                  <br />
                  ＋名前・サイン入りチェキ
                </h4>
              </div>
            </ScrollEffect>
          </div>

          <div className={`${cn.rewardColumn} tex-c  grid4`}>
            {/* フキダシ */}
            <div className={`${cn.rewardSectionHukidashi}`}>
              <div className={`${cn.rewardSectionHukidashiBorder}`}>
                <ScrollEffect className={cn.int} after="svg1">
                  <svg
                    version="1.1"
                    id="レイヤー_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100%"
                    viewBox="-5 -5 553.221 240.672"
                  >
                    <g
                      id="合体_17"
                      data-name="合体 17"
                      transform="translate(4278 -13914.868)"
                      fill="none"
                    >
                      <path
                        d="M-4192.962,14117.723l-65.878,6.087L-4278,13963.563l527.062-48.7,19.159,160.246-411.448,38.014-20.669,37.412Z"
                        stroke="none"
                      />
                      <path
                        id="合体_21"
                        data-name="合体 21"
                        d="M66.26,161.364H0V0H528.715V161.364H122.108L94.5,200.953Z"
                        transform="matrix(0.995, -0.105, 0.105, 0.995, -0.001, 55.269)"
                        fill="url(#linear-gradient)"
                      />
                    </g>
                  </svg>
                </ScrollEffect>
              </div>

              <ScrollEffect
                className={`${cn.rewardSectionHukidashiCoating}`}
                after={`${cn.after}`}
              >
                <img src="/img/hukidasi_4_coating.svg" alt="" />
              </ScrollEffect>

              <ScrollEffect
                className={`${cn.rewardSectionHukidashiTitle} ${cn.hukidasiText_2}`}
                after={`${cn.after}`}
              >
                <img src="/img/hukidasi_4_text.png" alt="" />
              </ScrollEffect>
            </div>

            {/* 各メンバーギルド内パワーランキング１位〜５位*/}
            <ScrollEffect className={cn.intDelay} after={cn.intActive}>
              <div className={`${cn.systemDetail} ${cn.rewardSquare}`}>
                <h4 className={`${cn.rewardSectionSubTittle}`}>
                  参加ギルドのLinQメンバーからメッセージ付きデジショ＋
                  <br />
                  名前・サイン入りチェキ
                </h4>
              </div>
            </ScrollEffect>
          </div>

          <div className={`${cn.rewardColumn} tex-c  grid4`}>
            {/* フキダシ */}
            <div className={`${cn.rewardSectionHukidashi}`}>
              <div className={`${cn.rewardSectionHukidashiBorder}`}>
                <ScrollEffect className={cn.int} after="svg1">
                  <svg
                    version="1.1"
                    id="レイヤー_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100%"
                    viewBox="-5 -5 553.221 240.672"
                  >
                    <g
                      id="合体_17"
                      data-name="合体 17"
                      transform="translate(4278 -13914.868)"
                      fill="none"
                    >
                      <path
                        d="M-4192.962,14117.723l-65.878,6.087L-4278,13963.563l527.062-48.7,19.159,160.246-411.448,38.014-20.669,37.412Z"
                        stroke="none"
                      />
                      <path
                        id="合体_21"
                        data-name="合体 21"
                        d="M66.26,161.364H0V0H528.715V161.364H122.108L94.5,200.953Z"
                        transform="matrix(0.995, -0.105, 0.105, 0.995, -0.001, 55.269)"
                        fill="url(#linear-gradient)"
                      />
                    </g>
                  </svg>
                </ScrollEffect>
              </div>

              <ScrollEffect
                className={`${cn.rewardSectionHukidashiCoating}`}
                after={`${cn.after}`}
              >
                <img src="/img/hukidasi_5_coating.svg" alt="" />
              </ScrollEffect>

              <ScrollEffect
                className={`${cn.rewardSectionHukidashiTitle} ${cn.hukidasiText_2}`}
                after={`${cn.after}`}
              >
                <img src="/img/hukidasi_5_text.png" alt="" />
              </ScrollEffect>
            </div>

            {/* 各メンバーギルド内パワーランキング１位〜５位*/}
            <ScrollEffect className={cn.intDelay} after={cn.intActive}>
              <div className={`${cn.systemDetail} ${cn.rewardSquare}`}>
                <h4 className={`${cn.rewardSectionSubTittle} `}>
                  名前・サイン入りチェキ
                </h4>
              </div>
            </ScrollEffect>
          </div>
        </section>

        {/* イベント参加セクション*/}
        <section className={`${cn.join} tex-c`}>
          <ScrollEffect>
            <div className={`${cn.joinTittle}`}>
              <div className={cn.teamDecoration}>
                <img src="/img/JOIN.png" alt="" />
              </div>

              <div className={cn.tittleImage}>
                <img src="/img/joinImage.png" alt="" />
              </div>

              <h1>イベント参加の流れ</h1>
            </div>
          </ScrollEffect>

          {/*参加手順*/}
          <div className={`${cn.joinColumn} grid3 tex-l`}>
            {/* 手順1*/}
            {/* ループ */}

            {joinColumn.map((el, index) => {
              return (
                <div
                  key={`joinColumn${index}`}
                  className={`${cn.joinColumnDetail} ${cn.join1}`}
                >
                  <div className={`${cn.joinIcon}`}>
                    <img src={`/img/joinImage${index + 1}.png`} alt="" />
                  </div>

                  <h3>{el.title}</h3>

                  <h5 className={`${cn.memberSubName} mar-b2`}>
                    {el.description}
                  </h5>
                </div>
              );
            })}

            {/* 手順3*/}
            <div className={`${cn.joinColumnDetail} ${cn.join1}`}>
              <div className={`${cn.joinIcon}`}>
                <img src="/img/joinImage3.png" alt="" />
              </div>

              <h3>③ ギルドへ申請</h3>

              <h5 className={`${cn.memberSubName} mar-b2`}>
                ダウンロード後「イベント参加者」に記載されているギルドタグでギルドを検索し、申請！※
              </h5>
            </div>
          </div>

          {/*参加手順4~6*/}
          <div className={`${cn.joinColumn} grid3 tex-l`}>
            {/* 手順4*/}
            <div className={`${cn.joinColumnDetail} ${cn.join1}`}>
              <div className={`${cn.joinIcon}`}>
                <img src="/img/joinImage4.png" alt="" />
              </div>

              <h3>④ 指定フォームにIGG IDを記入</h3>

              <h5 className={`${cn.memberSubName} mar-b2`}>
                申請後、ゲーム内でIGG
                IDを確認。その後イベント参加者に記載されている「ギルドへ加入」をタップし、情報を記入！
              </h5>
            </div>

            {/* 手順5*/}
            <div className={`${cn.joinColumnDetail} ${cn.join1}`}>
              <div className={`${cn.joinIcon}`}>
                <img src="/img/joinImage5.png" alt="" />
              </div>

              <h3>⑤ レベルアップ・ギルド人数</h3>

              <h5 className={`${cn.memberSubName} mar-b2`}>
                イベント最終週に行われるギルド共闘戦までに同じギルドの仲間と助け合って城レベルを15以上に到達させる！※
              </h5>
            </div>

            {/* 手順6*/}
            <div className={`${cn.joinColumnDetail} ${cn.join1}`}>
              <div className={`${cn.joinIcon}`}>
                <img src="/img/joinImage6.png" alt="" />
              </div>

              <h3>⑥ 順位決定</h3>

              <h5 className={`${cn.memberSubName} mar-b2`}>
                イベント最終週に行われるギルド共闘戦での獲
                得共闘ポイントと各ギルド内の総パワーポイン
                ト、ギルド内の城レベル別の加算ポイントの合計で順位が決定！
              </h5>
            </div>
          </div>

          <div className={`${cn.joinNotes} grid3 tex-l`}>
            <h6>
              ※「城レベル6以上」もしくは、ゲームを開始して2日間が経過すると「初心者転送の巻物」が使えなくなります。
              <br />
              ※他のギルドメンバーと別のコロニーでも、本企画への参加には問題ありません。
              <br />
              ※ギルドを作ってから３日間経過しても人数が１１人に足りない場合は強制解散されるリマインドメールが来ます。また、ギルドを作ってから５日間経過しても１１人に足りない場合はギルド強制解散されます。
              <br />
              ※１ギルドにつき１００名まで参加可能。
              <br />
              ※Apple製品をお使いの方はトラッキングを必ず許可してください。
              <br />
              ※ギルドへの参加の承認は運営が行います。土日の承認が遅れることがございますので、ご了承くださいませ。
              <br />
              ※25人以上のギルドが参加可能で、ギルド共闘開始時間までにギルドに加入した状態でないと参加できません。
              <br />
            </h6>
          </div>
        </section>

        {/* システムセクション*/}
        <section className={`${cn.system} tex-c`}>
          <ScrollEffect>
            <div className={`${cn.joinTittle} ${cn.systemTittle} grid4`}>
              <h1>パワーポイントシステム</h1>
              <h4>
                推しのギルドに入り、仲間と協力して勝利を掴み取れ！
                <br className={`br`} />
                あなたの活躍次第で推しの優勝が決まる？
              </h4>

              <div className={cn.systemDecoration}>
                <img src="/img/systemImage.png" alt="" />
              </div>

              <div className={cn.systemImage}>
                <img src="/img/2circle_2.png" alt="" />
              </div>
            </div>
          </ScrollEffect>

          {/* システム説明*/}
          <div className={`${cn.systemContents} grid4`}>
            <div className={`${cn.systemDetail} `}>
              <h4>
                イベント最終日のギルド総パワーポイントを特別ポイント換算したもの！
              </h4>
            </div>

            <div className={cn.plus}>
              <img src="/img/plus.png" alt="" />
            </div>

            <div className={`${cn.systemDetail} `}>
              <h4>イベント最終週のギルド共闘で獲得した総共闘ポイント</h4>
            </div>

            <div className={cn.plus}>
              <img src="/img/plus.png" alt="" />
            </div>

            <div className={`${cn.systemDetail} `}>
              <h4>
                イベント最終日のギルド内プレイヤーを城レベル別にポイント換算したもの！
              </h4>
            </div>

            {/* 総パワーポイントのシステム */}
            <div className={`${cn.entirePowerSystem}`}>
              <h2>総パワーポイントのシステム</h2>

              <div className={`${cn.systemDetail}`}>
                <h4>100,000,000パワーごとに1,000Pt</h4>
              </div>
            </div>

            {/* 総パワーポイントのシステム */}
            <div className={`${cn.caslePointSystem}`}>
              <h2>城レベル別　ポイント加算制度</h2>

              <div className={`${cn.levelPointSystemColumn}`}>
                {/* 要素1*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv15＝100Pt</h4>
                </div>

                {/* 要素2*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv16＝200Pt</h4>
                </div>

                {/* 要素3*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv17＝300Pt</h4>
                </div>

                {/* 要素4*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv18＝400Pt</h4>
                </div>

                {/* 要素5*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv19＝500Pt</h4>
                </div>

                {/* 要素6*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv20＝1000Pt</h4>
                </div>

                {/* 要素7*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv21＝1100Pt</h4>
                </div>

                {/* 要素8*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv22＝1200Pt</h4>
                </div>

                {/* 要素9*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv23＝1300Pt</h4>
                </div>

                {/* 要素10*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv24＝1400Pt</h4>
                </div>

                {/* 要素11*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv25＝3000Pt</h4>
                </div>
              </div>
            </div>

            {/* ゲームの進め方に困ったら */}
            <div className={`${cn.helpSection}`}>
              <ScrollEffect>
                <h1 className={`mar-b1`}>ゲームの進め方に困ったら</h1>

                <h4>
                  ゲームを進めていて、
                  <br />
                  特に序盤はわからないことも出てくると思います。
                  <br />
                  そんな時はこちらのゲームガイドをご覧ください！
                </h4>

                {/*ゲームガイドボタン*/}
                <a href="https://lordsmobile.igg.com/project/guide_v2/?game_id=1051109903">
                  <div className={`${cn.helpSectionButton}`}>
                    <h4>ゲームガイド</h4>
                  </div>
                </a>

                <h4 className={`mar-t4`}>
                  ギルド共闘について、下記に詳しい情報が載っています。
                  <br />
                  是非ご覧ください！
                </h4>

                {/*ギルド共闘ボタン*/}
                <a href="https://lords-mobile.gamerch.com/%E3%82%AE%E3%83%AB%E3%83%89%E5%85%B1%E9%97%98">
                  <div className={`${cn.helpSectionButton}`}>
                    <h4>ギルド共闘について</h4>
                  </div>
                </a>
              </ScrollEffect>
            </div>
          </div>
        </section>
      </div>

      {/* 利用規約セクション*/}
      <div className={`${cn.footerTerms}`}>
        <section className={`${cn.terms}`}>
          <div className={`${cn.termsText} tex-l grid4`}>
            <h3>禁止事項</h3>
            <h5>
              ・メンバーへの直接の絡みやDMは禁止行為です。行った場合は運営の判断により『厳重注意』や『強制退室』の措置を取らせていただきます。
              <br />
              ・イベント運営以外がユーザーの承認を行うこと。
              <br />
              ・イベント最終週に行われるギルド共闘以外で、ユーザーのランクを４に昇格すること。
              <br />
              ※イベント最終週のギルド共闘では、ギルド共闘開始後、
              ギルドリーダーは任意で選んだ5名のユーザーをランク4に昇格可能です。
              <br />
              ・SNS、ギルド内チャット等にて、禁止行為を誘発する言動をすること。
              <br />
              ・SNS、ギルド内チャット等にて、特定の演者やユーザ
              ー、ギルドを侮辱、誹謗中傷する投稿。
              <br />
              ※悪質の場合、該当ギルドはペナルティを課すことや、失格となる可能性もございます。
              <br />
              ※アプリ内課金の返金対応はいたしかねます。
            </h5>

            <h3>利用規約</h3>
            <h5>
              運営や企画進行、メンバー様に関する内容はお答えできない場合もございますのであらかじめご了承ください。
              本イベントを主催、運営するイベント運営事務局（以下、「イベント運営」といいます）は、イベント運営が運営/管理するイベント（以下、「本イベント」といいま
              す）の運営にあたり、下記の各条項に定める事項については、免責されるものとします。
              本イベントにご参加のお客様（以下、「ユーザー」といいます）は、本免責事項の内容をご承諾頂いたものと見なしますので、ご了承ください。
              <br />
              １.イベント運営は、本イベントの内容、本イベントにより提供する一切の情報、データ等について、その完全性、正確性、適法性、目的適合性等いかなる保証も行わ
              ず、一切の責任を負いません。
              <br />
              ２.イベント運営は、イベント運営が本イベントにより提供する一切の情報、データ等、またはユーザーが掲載する一切の情報、データ等を確実に保存することを
              保証するものではなく、かかる情報、データ等が消失したとしても、一切の責任を負いません。
              <br />
              ３.本イベントの提供、遅滞、変更、中止もしくは廃止、本イベントを通じて登録、提供される情報等の流失もしくは消失等、およびその他本イベントに関連して発生
              したユーザーおよび第三者の損害について、イベント運営は一切の責任を負いません。
              <br />
              ４.本イベントへの参加に関連して、ユーザーが他のユーザーもしくは第三者に対して損害を与えた場合、またはユーザーが他のユーザーもしくは第三者と紛争を生じ
              た場合、当該ユーザーは自己の費用と責任で解決するものとし、イベント運営に何等の迷惑または損害を与えないものとします。また、ユーザーが本イベントの参加に
              関連してイベント運営に損害を生じさせた場合は、当該ユーザーはイベント運営に生じた損害を賠償するものとします。
              <br />
              ５.イベント運営は、本イベントに関連したサービスを提供するコンピューターシステムの稼働状況について保証するものではなく、本イベントに関連したサービス提
              供のためのコンピューターシステムの障害等、いかなる原因に基づき生じた損害についても、一切の責任を負いません。
              <br />
              ６.イベント運営は、本イベントに関連したサービスの利用、本サイトからのダウンロード、コンピュータウイルス感染等により、コンピュータ、周辺機器、回線、ソ
              フトウェアなどに生じた損害について、一切の責任を負いません。
              <br />
              ７.本規約に従いイベント運営がユーザーに対して損害賠償の責任を負う場合であっても、イベント運営に故意又は重過失が存する場合を除き、イベント運営が賠償す
              べき損害の範囲は、ユーザーに直接かつ現実的に生じた損害に限定されます。
            </h5>

            <h3>個人情報の取り扱いについて</h3>
            <h5>
              本イベントは、IGGが主体となり、イベント運営事務局が実施、運営と審査協力をするものです。
              又、ユーザーの個人情報をユーザーの同意なしに業務委託先、審査協力先以外の第三者に開示・提供することはございません。
              （法令等により開示を求められた場合を除く。）
            </h5>

            <h3>お問い合わせ</h3>
            <h5>
              本イベントに関するお問い合わせは下記までお願い致します。
              XXXX@gmail.com 受付対応時間/10時00分〜17時00分
              （土・日・祝日を除く）
              ※いただいたご質問によってはお答えできない場合もございます。
            </h5>
          </div>
        </section>
      </div>

      {/* コピーライト*/}
      <div className={`${cn.termsText} tex-c grid4`}>
        <h4>®2022 IGG All Rights Reserved</h4>
      </div>
    </>
  );
}
