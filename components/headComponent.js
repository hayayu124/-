import Head from "next/head";

export default function HeadComponent({ meta }) {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, viewport-fit=cover"
      />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />

      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />

      <meta property="og:url" content={meta.pageName} />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:locale" content={meta.locale} />

      <meta property="fb:app_id" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="robots" content="all" />

      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
