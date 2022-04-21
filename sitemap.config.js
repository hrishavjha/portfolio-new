module.exports = {
  siteUrl: "https://www.hrishavkumar.com",
  changefreq: "weekly",
  generateRobotsTxt: true,
  exclude: ["/404"],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === "/" ? 1.0 : 0.8,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/"
      }
    ]
  }
};
