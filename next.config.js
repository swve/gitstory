module.exports = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  env: {
    // This is the default value, but we want to be explicit
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    GITHUB_ID: process.env.GITHUB_ID,
    WEBSITE_HOST: process.env.WEBSITE_HOST,
  },
};
