const dynamicRoutes = [
    '/products/[id]', // Example dynamic route
    '/posts/[slug]',  // Another example
  ];
  
  module.exports = {
    siteUrl: process.env.SITE_URL || 'https://yourdomain.com',
    generateRobotsTxt: true,
    exclude: dynamicRoutes,  // Exclude dynamic routes from the static sitemap
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' }, // Customize allow/disallow rules
      ],
      additionalSitemaps: [
        `${process.env.SITE_URL || 'https://yourdomain.com'}/server-sitemap.xml`,
      ],
    },
  };
  