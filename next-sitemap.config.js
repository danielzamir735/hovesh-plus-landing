/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://hovesh-plus-landing.vercel.app",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
  },
  changefreq: "weekly",
  priority: 0.9,
};
