/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use the appropriate output based on your environment
  output: 'export',

  env: {
    API_PROD_URL: "https://api.netflixtunisie.com/api/",
    // API_PROD_URL: "https://laravel.pixelstrap.net/fastkart/api/",
    PAYMENT_RETURN_URL: "http://204.216.214.207:3000",
    PAYMENT_CANCEL_URL: "http://204.216.214.207:3000/",
  },
  images: {
    unoptimized: process.env.NODE_ENV === 'production', // Disable optimization for production
    remotePatterns: [
      {
        protocol: "https",
        hostname: "laravel.pixelstrap.net",
      },
      {
        protocol: "https",
        hostname: "api.netflixtunisie.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "**",
      }
    ],
  },
  // Add your redirects here, if needed
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
