/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  i18n: {
    // locales: ["en", "ja"],
    locales: ["ja"], // サポートする言語を配列として指定します
    defaultLocale: "ja", // デフォルトの言語を指定します
  },
};

module.exports = nextConfig;
