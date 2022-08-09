/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.WEBSITE_HOST || "https://gitstory.app",
  generateRobotsTxt: true,
  exclude: [
    "/404",
    "/repo-not-found"
  ],
  outDir: "public",
};

module.exports = config;
