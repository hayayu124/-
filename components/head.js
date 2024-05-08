// import Head from "next/head";

// function ComponentHead(props) {
//   const mainUrl = "https://rosetique.xsrv.jp";
//   return (
//     <>
//       <Head>
//         <meta
//           name="viewport"
//           content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, viewport-fit=cover"
//         />

//         {(() => {
//           if (props.title) {
//             return (
//               <>
//                 <title>
//                   {props.title} | ROSETIQUE JAPAN
//                   日本発、お花に特化したライフスタイルブランド
//                 </title>
//                 <meta
//                   property="og:title"
//                   content={`${props.title} | ROSETIQUE JAPAN 日本発、お花に特化したライフスタイルブランド`}
//                 />
//               </>
//             );
//           } else {
//             return (
//               <>
//                 <title>
//                   ROSETIQUE JAPAN |
//                   日本発、お花に特化したライフスタイルブランド
//                 </title>
//                 <meta
//                   property="og:title"
//                   content="ROSETIQUE JAPAN | 日本発、お花に特化したライフスタイルブランド"
//                 />
//               </>
//             );
//           }
//         })()}
//         {(() => {
//           if (props.excerpt) {
//             const description = props.excerpt.replace(
//               /<("[^"]*"|'[^']*'|[^'">])*>/g,
//               ""
//             );
//             return (
//               <>
//                 <meta name="description" content={description} />
//                 <meta property="og:description" content={description} />
//               </>
//             );
//           } else {
//             return (
//               <>
//                 <meta
//                   name="description"
//                   content="フラワーデザイナーMiwakoの運営する、国産バラ専門店とオーガニックローズのオリジナルブランド"
//                 />
//                 <meta
//                   property="og:description"
//                   content="フラワーデザイナーMiwakoの運営する、国産バラ専門店とオーガニックローズのオリジナルブランド"
//                 />
//               </>
//             );
//           }
//         })()}
//         {(() => {
//           if (props.path) {
//             return (
//               <>
//                 <meta property="og:url" content={`${mainUrl}${props.path}`} />
//               </>
//             );
//           } else {
//             return (
//               <>
//                 <meta property="og:url" content={`${mainUrl}/`} />
//               </>
//             );
//           }
//         })()}
//         {(() => {
//           if (props.ogp) {
//             return (
//               <>
//                 <meta property="og:image" content={props.ogp} />
//               </>
//             );
//           } else {
//             return (
//               <>
//                 <meta property="og:image" content={`${mainUrl}/img/ogp.jpg`} />
//               </>
//             );
//           }
//         })()}

//         {(() => {
//           if (props.css) {
//             return <link rel="stylesheet" href={props.css} />;
//           }
//         })()}

//         <meta property="og:site_name" content="ROSETIQUE JAPAN" />
//         <meta property="og:locale" content="ja_JP" />

//         <meta name="author" content="ROSETIQUE JAPAN" />
//         <meta property="og:type" content="website" />
//         <meta property="fb:app_id" content="400818523864170" />
//         <meta name="twitter:card" content="summary_large_image" />

//         <link
//           rel="apple-touch-icon"
//           sizes="180x180"
//           href="/fav/apple-touch-icon.png"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="32x32"
//           href="/fav/favicon-32x32.png"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="16x16"
//           href="/fav/favicon-16x16.png"
//         />
//         <link rel="manifest" href="/fav/site.webmanifest" />
//         <link
//           rel="mask-icon"
//           href="/fav/safari-pinned-tab.svg"
//           color="#d9795a"
//         />
//         <link rel="shortcut icon" href="/fav/favicon.ico" />
//         <meta name="msapplication-TileColor" content="#da532c" />
//         <meta name="msapplication-config" content="/fav/browserconfig.xml" />
//         <meta name="theme-color" content="#ffffff" />
//       </Head>
//     </>
//   );
// }

// export default ComponentHead;
